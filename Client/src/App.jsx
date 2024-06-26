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
import VideoPermission from "./AdminPages/VideoPermission";
import CreateQuiz from "./AdminPages/CreateQuiz";
import QuizCalender from "./AdminPages/QuizCalander";
import Quiz2 from "./Pages/Quiz2";
import UpdateQuiz from "./AdminPages/UpdateQuiz";
import UpdateQuiz2 from  "./AdminPages/UpdateQuiz2";
import UploadVideo from "./AdminPages/UploadVideo";
import Video3 from "./Pages/Video3";
import VideoGallery from "./Pages/VideoGallery";
import EditVideoList from "./AdminPages/EditVideoList";
import OMyVideo from "./Pages/OMyVideo";
import QuizResult from "./AdminPages/QuizResult"
import QuizList from "./Pages/QuizList";
import AHome from "./AdminPages/AHome";
import ASetting from "./AdminPages/ASetting";
import ChangeStatus from "./AdminPages/ChangeStatus";
import ProtectedRoute  from "./Components/ProtectedRoute";
import RecieptTable from "./AdminPages/getRecieptData";

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
        <div className="w-[280px] ">
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
    path: "/AdLogin",
    element: <AdLogin />,
  },
  {
    path: "/VideoGallery/:unitId",
    element: <VideoGallery />,
  },
  {
    path: "/",
    element: <ProtectedRoute><PLayout /></ProtectedRoute>,
    children: [
      {
        path: "PHome",
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
        path: "/Video3",
        element: <Video3 />,
      },
      {
        path: "/MyVideo",
        element: <MyVideo />,
      },
      
      {
        path: "/Quiz",
        element: <Quiz />,
      },
      {
        path: "/Quiz2/:q_id",
        element: <Quiz2 />,
      },
    ],
  },

  {
    path: "/",
    element: <ProtectedRoute><OLayout /></ProtectedRoute>,
    children: [
      {
        path: "/OProfile",
        element: <OProfile />,
      },
      {
        path: "/OHome",
        element: <OHome />,
      },
      {
        path: "/Video2",
        element: <Video2 />,
      },
      {
        path: "/OMyVideo",
        element: <OMyVideo />,
      }
    ]},

  {
    path: "/",
    element: <DashLayout />,
    children: [
      {
        path: "/AHome",
        element: <AHome />,
      },
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
        path: "/VideoPermission",
        element: <VideoPermission />,
      },
      {
        path: "/AdSignup",
        element: <AdSignup />,
      },
      

      {
        path: "/AQuiz",
        element: <AQuiz />,
      },
      {
        path: "/QuizResult/:quizId",
        element: <QuizResult />,
      },
      {
        path: "/QuizList",
        element: <QuizList />,
      },
      {
        path: "/CreateQuiz/:quizId",
        element: <CreateQuiz />,
      },
      {
        path: "/QuizCalander",
        element: <QuizCalender />,
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
        
        path:"/AddTimeslots/:practicalId",
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
        path: "/ReceiptTable",
        element: <RecieptTable />,
      },
       {
         path: "/EditVideo",
         element: <EditVideo />,
       },
       {
        path: "/EditVideoList",
        element: <EditVideoList />,
      },
       {
        path: "/UploadVideo/:unit_id",
        element: <UploadVideo />,
      },
       {
        path: "/UpdateUnit/:unit_id",
        element: <UpdateUnit />,
      },
      {
        path: "/UpdateQuiz",
        element: <UpdateQuiz />,
      },
      {
        path: "/UpdateQuiz2/:q_id",
        element: <UpdateQuiz2 />,
      },
      {
        path: "/ASetting",
        element: <ASetting />,
      },
      {
        path: "/ChangeStatus",
        element: <ChangeStatus />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;



// import "./App.css";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import ProtectedRoute from "./Components/ProtectedRoute"; // Import ProtectedRoute
// import ProtectedAdminRoute from "./Components/ProtectedAdminRoute"; // Import ProtectedAdminRoute

// import Home from "./Pages/Home";
// import SLogin from "./Pages/SLogin";
// import PSignup from "./Pages/PSignup";
// import PHome from "./Pages/PHome";
// import OHome from "./Pages/OHome";
// import Video from "./Pages/Video";
// import Video2 from "./Pages/Video2";
// import MyVideo from "./Pages/MyVideo";
// import Practical from "./Pages/Practical";
// import Dashboard from "./Components/Dashboard";
// import Check from "./Pages/Check";
// import OSignup from "./Pages/OSignup";
// import AVideo from "./AdminPages/AVideo";
// import AVideo2 from "./AdminPages/AVideo2";
// import EditVideo from "./AdminPages/EditVideo";
// import AdSignup from "./AdminPages/AdSignup";
// import AdLogin from "./AdminPages/AdLogin";
// import APractical from "./AdminPages/APractical";
// import AQuiz from "./AdminPages/AQuiz";
// import PProfile from "./Pages/PProfile";
// import Quiz from "./Pages/Quiz";
// import ANotice from "./AdminPages/ANotice";
// import PNav from "./Components/PNav";
// import Footer from "./Components/Footer";
// import AReciepts from "./AdminPages/AReciepts";
// import UpdateUnit from "./AdminPages/UpdateUnit";
// import OProfile from "./Pages/OProfile";
// import ONav from "./Components/ONav";
// import AddStudent from "./AdminPages/AddStudent";
// import AddNIcs from "./AdminPages/AddNics";
// import DeleteStudent from "./AdminPages/DeleteStudent";
// import DeletePractical from "./AdminPages/DeletePractical";
// import AddTimeslots from "./AdminPages/AddTimeslots";
// import EditNotice from "./AdminPages/EditNotice";
// import GetCount from "./AdminPages/GetCount";
// import VideoPermission from "./AdminPages/VideoPermission";
// import CreateQuiz from "./AdminPages/CreateQuiz";
// import QuizCalender from "./AdminPages/QuizCalander";
// import Quiz2 from "./Pages/Quiz2";
// import UpdateQuiz from "./AdminPages/UpdateQuiz";
// import UpdateQuiz2 from "./AdminPages/UpdateQuiz2";
// import UploadVideo from "./AdminPages/UploadVideo";
// import Video3 from "./Pages/Video3";
// import VideoGallery from "./Pages/VideoGallery";
// import EditVideoList from "./AdminPages/EditVideoList";
// import OMyVideo from "./Pages/OMyVideo";
// import QuizResult from "./AdminPages/QuizResult";
// import QuizList from "./Pages/QuizList";
// import AHome from "./AdminPages/AHome";
// import ASetting from "./AdminPages/ASetting";
// import ChangeStatus from "./AdminPages/ChangeStatus";

// // Layout for Public Routes
// const PLayout = () => {
//   return (
//     <>
//       <PNav />
//       <Outlet />
//       <Footer />
//     </>
//   );
// };

// // Layout for Organizer (O) Routes
// const OLayout = () => {
//   return (
//     <>
//       <ONav />
//       <Outlet />
//       <Footer />
//     </>
//   );
// };

// // Layout for Admin (A) Dashboard
// const DashLayout = () => {
//   return (
//     <div className="flex">
//       <div className="w-[280px]">
//         <Dashboard />
//       </div>
//       <div className="w-full">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// // Define your routes using createBrowserRouter
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/Check",
//     element: <Check />,
//   },
//   {
//     path: "/SLogin",
//     element: <SLogin />,
//   },
//   {
//     path: "/PSignup",
//     element: <PSignup />,
//   },
//   {
//     path: "/OSignup",
//     element: <OSignup />,
//   },
//   {
//     path: "/AdLogin",
//     element: <AdLogin />,
//   },
//   {
//     path: "/VideoGallery/:unitId",
//     element: <VideoGallery />,
//   },
//   {
//     path: "/",
//     element: <ProtectedRoute element={PLayout} isAuthenticated={true} />, // Wrap PLayout with ProtectedRoute
//     children: [
//       {
//         path: "/PHome",
//         element: <PHome />,
//       },
//       {
//         path: "/Video",
//         element: <Video />,
//       },
//       {
//         path: "/MyVideo",
//         element: <MyVideo />,
//       },
//       {
//         path: "/Practical",
//         element: <Practical />,
//       },
//       {
//         path: "/PProfile",
//         element: <PProfile />,
//       },
//       {
//         path: "/Video3",
//         element: <Video3 />,
//       },
//       {
//         path: "/Quiz",
//         element: <Quiz />,
//       },
//       {
//         path: "/Quiz2/:q_id",
//         element: <Quiz2 />,
//       },
//     ],
//   },
//   {
//     path: "/",
//     element: <ProtectedRoute element={OLayout} isAuthenticated={true} />, // Wrap OLayout with ProtectedRoute
//     children: [
//       {
//         path: "/OProfile",
//         element: <OProfile />,
//       },
//       {
//         path: "/OHome",
//         element: <OHome />,
//       },
//       {
//         path: "/Video2",
//         element: <Video2 />,
//       },
//       {
//         path: "/OMyVideo",
//         element: <OMyVideo />,
//       },
//     ],
//   },
//   {
//     path: "/",
//     element: <ProtectedAdminRoute element={DashLayout} isAuthenticated={true} />, // Wrap DashLayout with ProtectedAdminRoute
//     children: [
//       {
//         path: "/AHome",
//         element: <AHome />,
//       },
//       {
//         path: "/AVideo",
//         element: <AVideo />,
//       },
//       {
//         path: "/AVideo2",
//         element: <AVideo2 />,
//       },
//       {
//         path: "/AReciepts",
//         element: <AReciepts />,
//       },
//       {
//         path: "/VideoPermission",
//         element: <VideoPermission />,
//       },
//       {
//         path: "/AdSignup",
//         element: <AdSignup />,
//       },
//       {
//         path: "/AQuiz",
//         element: <AQuiz />,
//       },
//       {
//         path: "/QuizResult/:quizId",
//         element: <QuizResult />,
//       },
//       {
//         path: "/QuizList",
//         element: <QuizList />,
//       },
//       {
//         path: "/CreateQuiz/:quizId",
//         element: <CreateQuiz />,
//       },
//       {
//         path: "/QuizCalander",
//         element: <QuizCalender />,
//       },
//       {
//         path: "/APractical",
//         element: <APractical />,
//       },
//       {
//         path: "/DeletePractical",
//         element: <DeletePractical />,
//       },
//       {
//         path: "/AddTimeslots/:practical_id",
//         element: <AddTimeslots />,
//       },
//       {
//         path: "/GetCount",
//         element: <GetCount />,
//       },
//       {
//         path: "/ANotice",
//         element: <ANotice />,
//       },
//       {
//         path: "/EditNotice",
//         element: <EditNotice />,
//       },
//       {
//         path: "/AddStudent",
//         element: <AddStudent />,
//       },
//       {
//         path: "/DeleteStudent",
//         element: <DeleteStudent />,
//       },
//       {
//         path: "/AddNIcs",
//         element: <AddNIcs />,
//       },
//       {
//         path: "/EditVideo",
//         element: <EditVideo />,
//       },
//       {
//         path: "/EditVideoList",
//         element: <EditVideoList />,
//       },
//       {
//         path: "/UploadVideo/:unit_id",
//         element: <UploadVideo />,
//       },
//       {
//         path: "/UpdateUnit/:unit_id",
//         element: <UpdateUnit />,
//       },
//       {
//         path: "/UpdateQuiz",
//         element: <UpdateQuiz />,
//       },
//       {
//         path: "/UpdateQuiz2/:q_id",
//         element: <UpdateQuiz2 />,
//       },
//       {
//         path: "/ASetting",
//         element: <ASetting />,
//       },
//       {
//         path: "/ChangeStatus",
//         element: <ChangeStatus />,
//       },
//     ],
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;
