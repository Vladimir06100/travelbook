import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageConnect from "./Components/Pages/PageConnection/PageConnect";
import PageRegister from "./Components/Pages/PageConnection/PageRegister";
//import PageErreur from "./Components/Elements/pageErreur";
//import Profil from "./Components/Pages/PageMain/profil/Profil";

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

  {
    path: "/editprofil",
    element: <EditProfil/>,
    error: <PageErreur />
  }, */
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
