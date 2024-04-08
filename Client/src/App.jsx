
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
import Video2 from './APages/Video2';
import Practical from './Pages/Practical';
import Dashboard from './Components/Dashboard';

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
              path: "/Video2",
              element: <Video2 />,
            },
            {
              path: "/Practical",
              element: <Practical />,
            },

            {
              path: "/Dashboard",
              element: <Dashboard />,
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
