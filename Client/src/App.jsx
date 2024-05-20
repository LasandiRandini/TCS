import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from "./Pages/Home";
import SLogin from "./Pages/SLogin";
import PSignup from "./Pages/PSignup";
import PHome from "./Pages/PHome";
import OHome from "./Pages/OHome";
import Video from "./Pages/Video";
import Video2 from "./Pages/Video2";
import MyVideo from "./Pages/MyVideo";
import Practical from "./Pages/Practical";
import Dashboard from "./Components/Dashboard";
import Check from "./Pages/Check";
import OSignup from "./Pages/OSignup";
import AVideo from "./AdminPages/AVideo";
import AVideo2 from "./AdminPages/AVideo2";
import EditVideo from "./AdminPages/EditVideo";
import AdSignup from "./AdminPages/AdSignup";
import AdLogin from "./AdminPages/AdLogin";
import APractical from "./AdminPages/APractical";
import AQuiz from "./AdminPages/AQuiz";
import PProfile from "./Pages/PProfile";
import Quiz from "./Pages/Quiz";
import ANotice from "./AdminPages/ANotice";
import PNav from "./Components/PNav";
import Footer from "./Components/Footer";
import AReciepts from "./AdminPages/AReciepts";
import UpdateUnit from "./AdminPages/UpdateUnit";
import OProfile from "./Pages/OProfile";
import ONav from "./Components/ONav";
import AddStudent from "./AdminPages/AddStudent";
import AddNIcs from "./AdminPages/AddNics";
import DeleteStudent from "./AdminPages/DeleteStudent";
import DeletePractical from "./AdminPages/DeletePractical";
import AddTimeslots from "./AdminPages/AddTimeslots";
import EditNotice from "./AdminPages/EditNotice";
import GetCount from "./AdminPages/GetCount";

const PLayout = () => {
  return (
    <>
      <PNav />
      <Outlet />
      <Footer />
    </>
  );
};

const OLayout = () => {
  return (
    <>
      <ONav />
      <Outlet />
      <Footer />
    </>
  );
};
const DashLayout = () => {
  return (
    <div>
      <div className="flex ">
        <div className="w-[300px] ">
          <Dashboard />
        </div>

        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Check",
    element: <Check />,
  },
  {
    path: "/SLogin",
    element: <SLogin />,
  },
  {
    path: "/PSignup",
    element: <PSignup />,
  },
  {
    path: "/OSignup",
    element: <OSignup />,
  },

  {
    path: "/",
    element: <PLayout />,
    children: [
      {
        path: "/PHome",
        element: <PHome />,
      },

     
      {
        path: "/Video",
        element: <Video />,
      },
      {
        path: "/MyVideo",
        element: <MyVideo />,
      },

      {
        path: "/Practical",
        element: <Practical />,
      },
      {
        path: "/PProfile",
        element: <PProfile />,
      },
      {
        path: "/Video2",
        element: <Video2 />,
      },
      {
        path: "/Quiz",
        element: <Quiz />,
      },
    ],
  },

  {
    path: "/",
    element: <OLayout />,
    children: [
      {
        path: "/OProfile",
        element: <OProfile />,
      },
      {
        path: "/OHome",
        element: <OHome />,
      }
    ]},

  {
    path: "/",
    element: <DashLayout />,
    children: [
      {
        path: "/AVideo",
        element: <AVideo />,
      },
      {
        path: "/AVideo2",
        element: <AVideo2 />,
      },
      {
        path: "/AReciepts",
        element: <AReciepts />,
      },
      {
        path: "/AdSignup",
        element: <AdSignup />,
      },
      {
        path: "/AdLogin",
        element: <AdLogin />,
      },

      {
        path: "/AQuiz",
        element: <AQuiz />,
      },
      {
        path: "/APractical",
        element: <APractical />,
      },
      {
        path: "/DeletePractical",
        element: <DeletePractical />,
      },
      {
        path: "/AddTimeslots",
        element: <AddTimeslots />,
      },
      {
        path: "/GetCount",
        element: <GetCount />,
      },
      {
        path: "/ANotice",
        element: <ANotice />,
      },
      {
        path: "/EditNotice",
        element: <EditNotice />,
      },
      {
        path: "/AddStudent",
        element: <AddStudent />,
      },
      {
        path: "/DeleteStudent",
        element: <DeleteStudent />,
      },
      {
        path: "/AddNIcs",
        element: <AddNIcs />,
      },
       {
         path: "/EditVideo",
         element: <EditVideo />,
       },
       {
        path: "/UpdateUnit/:unit_id",
        element: <UpdateUnit />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
