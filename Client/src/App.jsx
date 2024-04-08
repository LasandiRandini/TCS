
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Pages/Home';
import SLogin from './Pages/SLogin';
import PSignup from './Pages/PSignup';
import PHome from './Pages/PHome';
import Video from './Pages/Video';
import MyVideo from './Pages/MyVideo';
import Practical from './Pages/Practical';
import Dashboard from './Components/Dashboard';
import Check from './Pages/Check';
import OSignup from './Pages/OSignup';
import AVideo from './AdminPages/AVideo';

const router = createBrowserRouter([
  
 {
        path: "/",
                element: <Home />,
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
            }
           
         ]); 


function App() {
  return (
    <div>
      <RouterProvider router={router}/>
      
    </div>
  );
}


export default App;
