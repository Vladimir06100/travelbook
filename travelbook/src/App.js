import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageConnect from "./Components/Pages/PageConnection/PageConnect";
import PageErreur from "./Components/Elements/pageErreur";
import Profil from "./Components/Pages/PageMain/profil/Profil";
import './App.css';
import PageMain from "./Components/Pages/PageMain/PageMain";
import PostsTest from "./Components/Elements/PostsTest";


const router = createBrowserRouter([
	{
		path: "/",
		element: <PageConnect />,
		/* error: <PageErreur /> */
	},
	{
		path: "/Register",
		element: <PageRegister />,
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


]);
//

function App() {


// creation variable detat token
//creation variable router, je donne mo ncomposant login la fonction de mise a jour de token.
  return (
    <div className="App">
 <RouterProvider router={router}/>
    
 

  
  
    
    
    
    </div>
  )
}
export default App;