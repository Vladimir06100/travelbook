import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageConnect from "./Components/Pages/PageConnection/PageConnect";
//import PageErreur from "./Components/Elements/pageErreur";
//import Profil from "./Components/Pages/PageMain/profil/Profil";
import './App.css';
<<<<<<< HEAD
//import PageMain from "./Components/Pages/PageMain/PageMain";
//import EditProfil from "./Components/Pages/PageMain/profil/EditProfil";
=======
import PageMain from "./Components/Pages/PageMain/PageMain";
import EditProfil from "./Components/Pages/PageMain/profil/EditProfil";
import PostsTest from "./Components/Elements/PostsTest";
import { useState } from "react";
>>>>>>> Natalia
const router = createBrowserRouter([


  {
    path: "/",
<<<<<<< HEAD
    element: <PageConnect />,
    /* error: <PageErreur /> */
=======
    element: <PageConnect/>,
    error: <PageErreur />
>>>>>>> Natalia
  },

/*   {
    path: "/pagemain",
    element: <PageMain/>,
    error: <PageErreur />
  },
  {
    path: "/profil",
    element: <Profil/>,
    error: <PageErreur />
  },

  {
    path: "/editprofil",
    element: <EditProfil/>,
    error: <PageErreur />
  }, */

]);


function App() {



  return (
<<<<<<< HEAD
    
 <RouterProvider router={router} />

 
=======
    <div className="App">
 <RouterProvider router={router}/>
    
   

  
  
    
    
    
    </div>



>>>>>>> Natalia

  );
}

export default App;
