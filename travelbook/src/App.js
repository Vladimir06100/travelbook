import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageConnect from "./Components/Pages/Pages/PageConnect";
import PageRegister from "./Components/Pages/Pages/PageRegister";
import PagePrincipale from "./Components/Pages/Pages/PagePrincipale";
import PageModifProfile from "./Components/Pages/Pages/PageModifProfile";
import PageErreur from "./Components/Pages/Pages/PageErreur";
import PageProfil from "./Components/Pages/Pages/PageProfil";
import PageSansLogin from "./Components/Pages/Pages/PageSansLogin";

const router = createBrowserRouter([
	{
		path: "/",
		element: <PageSansLogin />,
		error: <PageErreur />,
	},
	{
		path: "/PagePrincipale",
		element: <PagePrincipale />,
		error: <PageErreur />,
	},
	{
		path: "/PageConnect",
		element: <PageConnect />,
		error: <PageErreur />,
	},
	{
		path: "/Register",
		element: <PageRegister />,
		error: <PageErreur />,
	},
	{
		path: "/Profil",
		element: <PageProfil />,
		error: <PageErreur />,
	},
	{
		path: "/PageModifProfile",
		element: <PageModifProfile />,
		error: <PageErreur />,
	},
]);

/* 	{
		path: "/",
		element: <PageSansLogin />,
		error: <PageErreur />,
	}, */

function App() {
<<<<<<< HEAD
  return (
    <div className="App">
     <p>spasibo</p> 
    </div>
  );
=======
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
>>>>>>> 5a91ecd8be72f5c1324ea558ab26887a0d7c90a2
}
export default App;
