import React from "react";
import "./App.css";
import Navbar from "../components/NavBar/NavBar";
import Footer from "../components/footer/Footer";
import Home from "./pages/Home/Home";
import Gigs from "./pages/GIgs/Gigs";
import Gig from "./pages/Gig/Gig";
import Orders from "./pages/Orders/Orders";
import MyGigs from "./pages/MyGigs/MyGigs";
import Add from "./pages/Add/Add";
import Messages from "./pages/Messages/Messages";
import Message from "./pages/Message/Message";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {
	const Layout = () => {
		return (
			<>
				<Navbar />
				<Outlet />
				<Footer />
			</>
		);
	};

	const router = createBrowserRouter([
		{
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/gigs",
					children: [
						{
							index:true,
							element: <Gigs />,
						},
						{
							path: "/gigs/:id",
							element: <Gig />,
						},
					],
				},

				{
					path: "/orders",
					element: <Orders />,
				},
				{
					path: "/mygigs",
					element: <MyGigs />,
				},
				{
					path: "/add",
					element: <Add />,
				},
				{
					path: "/messages",
					children: [
						{
							index:true,
							element: <Messages />,
						},
						{
							path: "/messages/:id",
							element: <Message />,
						},
					],
				},
			],
		},
	]);
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
