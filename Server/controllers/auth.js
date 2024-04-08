import { db } from "../db.js";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";

export const register = (req, res) => {
  const values = req.body;
  console.log("values  ", values);
  //check existing users
  console.log("request ");
  const q =
    "SELECT * FROM users WHERE first_name=? OR last_name=? OR nic_no=? OR distric=? OR email=? OR contact_no=? OR al_year=? OR institute=? OR parent_contact_no=? OR parent_email=? OR  username=?";

  db.query(
    q,
    [
      req.body.first_name,
      req.body.last_name,
      req.body.nic_no,
      req.body.distric,
      req.body.email,
      req.body.contact_no,
      req.body.al_year,
      req.body.institute,
      req.body.parent_contact_no,
      req.body.parent_email,
      req.body.username,
    ],
    (err, data) => {
      if (err) return res.json(err);
      if (data.length) return res.status(409).json("User already exists!");

      //Hash the password and create a user
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);

      const q =
        "INSERT INTO users(`first_name`,`last_name`,`nic_no`,`distric`,`email`,`contact_no`,`al_year`,`institute`,`parent_contact_no`,`parent_email`,`username`,`password`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
      const values = [
        req.body.first_name,
        req.body.last_name,
        req.body.nic_no,
        req.body.distric,
        req.body.email,
        req.body.contact_no,
        req.body.al_year,
        req.body.institute,
        req.body.parent_contact_no,
        req.body.parent_email,
        req.body.username,
        hash,
      ];

      db.query(q, values, (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json("User created!");
      });
    }
  );
};

export const login = (req, res) => {
    //check user existed
  
    const q = "SELECT * FROM users WHERE username=?";
  
    db.query(q, [req.body.username], (err, data) => {
      if (err) return res.json(err);
      if (data.length == 0) return res.status(404).json("User not found!");
  
      //check password
      const isPasswordCorrect = bcrypt.compareSync(
        req.body.password,
        data[0].password
      );
      if (!isPasswordCorrect)
        return res.status(400).json("Wrong username or password!");
  
      const token = Jwt.sign({ id: data[0].id }, "jwtkey");
      const { password, ...other } = data[0];
  
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(other);
    });
  };

export const logout = (req, res) => {};
