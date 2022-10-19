import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageConnect from "./Components/Pages/Pages/PageConnect";
import PageRegister from "./Components/Pages/Pages/PageRegister";
import PagePrincipale from "./Components/Pages/Pages/PagePrincipale";
import PageModifProfile from "./Components/Pages/Pages/PageModifProfile";
import PageErreur from "./Components/Pages/Pages/PageErreur";
import PageProfil from "./Components/Pages/Pages/PageProfil";

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
		element: <PageProfil />,
		error: <PageErreur />,
	},
	{
		path: "/PageModifProfile",
		element: <PageModifProfile />,
		error: <PageErreur />,
	},
]);

function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}
export default App;
