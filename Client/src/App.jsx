
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Home from './Pages/Home';
import SLogin from './Pages/SLogin';
import PSignup from './Pages/PSignup';
import PHome from './Pages/PHome';
import Video from './Pages/Video';
import Video2 from './Pages/Video2';
import MyVideo from './Pages/MyVideo';
import Practical from './Pages/Practical';
import Dashboard from './Components/Dashboard';
import Check from './Pages/Check';
import OSignup from './Pages/OSignup';
import AVideo from './AdminPages/AVideo';
import AdSignup from './AdminPages/AdSignup';
import AdLogin from './AdminPages/AdLogin';
import APractical from './AdminPages/APractical';
import AQuiz from './AdminPages/AQuiz';
import PProfile from './Pages/PProfile';
import Quiz from './Pages/Quiz';
import ANotice from './AdminPages/ANotice';
import PNav from "./Components/PNav";
import Footer from "./Components/Footer";

const Layout =()=>{
  return(
    <>
      <PNav/>
      <Outlet/>
      <Footer/>
    </>
  );
};



const router = createBrowserRouter([
  
 {
        path: "/",
        element:<Layout/>,
        children:[
          {
            path: "/",
            element: <Home />,
          },
           
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
            }
        ]},
            {
              path: "/Dashboard",
              element: <Dashboard />,
            },
            {
              path: "/Check",
              element: <Check />,
            },
            {
              path: "/AVideo",
              element: <AVideo />,
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
              path: "/ANotice",
              element: <ANotice />,
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
            }
         ]); 


function App() {
  return (
    
      <RouterProvider router={router}/>
    
    
  );
}


export default App;
