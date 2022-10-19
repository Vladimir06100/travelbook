import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageConnect from "./Components/Pages/PageConnection/PageConnect";
import PageRegister from "./Components/Pages/PageConnection/PageRegister";
import PagePrincipale from "./Components/Pages/PageConnection/PagePrincipale";
import PageErreur from "./Components/Pages/PageConnection/PageErreur";

//import PageErreur from "./Components/Elements/pageErreur";
import PageProfil from "./Components/Pages/PageConnection/PageProfil";

const router = createBrowserRouter([
	{
		path: "/",
		element: <PageConnect />,
		error: <PageErreur />,
	},
	{
		path: "/Register",
		element: <PageRegister />,
		error: <PageErreur />,
	},
	{
		path: "/PagePrincipale",
		element: <PagePrincipale />,
		error: <PageErreur />,
	},
	 {
    path: "/profil",
    element: <PageProfil/>,
    error: <PageErreur />
  },


]);


function App() {


/* reation variable detat token
creation variable router, je donne mo ncomposant login la fonction de mise a jour de token. */
  return (
    <div className="App">
 <RouterProvider router={router}/>
    
    
    </div>
  )
  }
export default App;