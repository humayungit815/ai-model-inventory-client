import {createBrowserRouter} from "react-router";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import AddModel from "../pages/AddModel";
import Root from "../routes/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../routes/PrivateRoute";
import AllModels from "../pages/AllModels";
import ModelDetails from "../pages/ModelDetails";
import UpdateModel from "../pages/UpdateModel";
import MyModels from "../pages/MyModels";
import MyModelPurchase from "../pages/MyModelPurchase";
import Loader from "./../components/Loader";
import Error from "../pages/Error";
import Dashboard from "../components/Dashboard/Dashboard";
import UserOverview from "../components/Dashboard/UserMenu/UserOverview";
import UserProfile from "../components/Dashboard/UserMenu/UserProfile";
import ManageUsers from "../components/Dashboard/AdminMenu/ManageUsers";
import AdminInventory from "../components/Dashboard/AdminMenu/AdminInventory";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root></Root>,
		errorElement: <Error></Error>,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: "/add-model",

				element: (
					<PrivateRoute>
						<AddModel></AddModel>
					</PrivateRoute>
				),
			},

			{
				path: "/login",
				Component: Login,
			},
			{
				path: "/signUp",
				Component: Register,
			},
			{
				path: "/all-model",
				Component: AllModels,
			},
			{
				path: "/details/:id",
				element: (
					<PrivateRoute>
						<ModelDetails></ModelDetails>
					</PrivateRoute>
				),
			},
			{
				path: "update-model/:id",
				element: (
					<PrivateRoute>
						<UpdateModel></UpdateModel>
					</PrivateRoute>
				),
				loader: ({params}) =>
					fetch(
						`https://ai-model-inventory-manager.vercel.app/models/${params.id}`
					),
			},
			{
				path: "/my-model",
				element: (
					<PrivateRoute>
						<MyModels></MyModels>
					</PrivateRoute>
				),
			},
			{
				path: "/my-model-purchase",
				element: (
					<PrivateRoute>
						<MyModelPurchase></MyModelPurchase>
					</PrivateRoute>
				),
			},
		],
	},
	{
		path: "dashboard",
		element: (
			<PrivateRoute>
				<Dashboard />
			</PrivateRoute>
		),
		children: [
			{
				index: true,
				element: <UserOverview></UserOverview>,
			},
			{
				path: "profile",
				element: <UserProfile></UserProfile>,
			},
			{
				path: "manage-users",
				element: <ManageUsers></ManageUsers>,
			},
			{
				path: "admin-inventory",
				element: <AdminInventory></AdminInventory>,
			},
		],
	},
]);

export default router;
