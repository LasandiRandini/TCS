import { db } from "../db.js";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";

export const aregister = (req, res) => {
  const values = req.body;
  console.log("values  ", values);
  
  console.log("request ");
  const q =
    "SELECT * FROM admins WHERE admin_first_name=? OR admin_last_name=? OR admin_nic=? OR  admin_username=? OR admin_no=?";

  db.query(
    q,
    [
      req.body.admin_first_name,
      req.body.admin_last_name,
      req.body.admin_nic,
      req.body.admin_username,
      req.body.admin_no,
    ],
    (err, data) => {
      if (err) return res.json(err);
      if (data.length) return res.status(409).json("User already exists!");

     
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.admin_password, salt);

      const q =
        "INSERT INTO admins(`admin_first_name`,`admin_last_name`,`admin_nic`,`admin_no`,`admin_username`,`admin_password`) VALUES (?,?,?,?,?,?)";
      const values = [
    req.body.admin_first_name,
      req.body.admin_last_name,
      req.body.admin_nic,
      req.body.admin_no,
      req.body.admin_username,
      
        hash,
      ];

      db.query(q, values, (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json("User created!");
      });
    }
  );
};

export const alogin = (req, res) => {
   
  
    const q = "SELECT * FROM admins WHERE admin_username=?";
  
    db.query(q, [req.body.admin_username], (err, data) => {
      if (err) return res.json(err);
      if (data.length == 0) return res.status(404).json("User not found!");
  
     
      const isPasswordCorrect = bcrypt.compareSync(
        req.body.admin_password,
        data[0].admin_password
      );
      if (!isPasswordCorrect)
        return res.status(400).json("Wrong username or password!");
  
      const token = Jwt.sign({ id: data[0].id }, "jwtkey");
      const { admin_password, ...other } = data[0];
  
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(other);
    });
  };