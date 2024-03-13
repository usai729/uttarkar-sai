import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import { Helmet } from "react-helmet";

function App() {
	const ComingSoon = () => {
		return (
			<div class="min-h-screen bg-c1 flex flex-col items-center justify-center">
				<h1 class="text-5xl text-white font-bold mb-8 animate-pulse">
					<Helmet>
						<title>Coming soon - Uttarkar Sai Nath Rao</title>
					</Helmet>
				</h1>
				<p class="text-white text-lg mb-8">
					It'll be up soon, until then let's go{" "}
					<Link
						to={"/"}
						className="text-blue-400"
					>
						Home?
					</Link>
				</p>
			</div>
		);
	};

	const Page404 = () => {
		return (
			<div class="min-h-screen bg-c1 flex flex-col items-center justify-center">
				<Helmet>
					<title>404 - Uttarkar Sai Nath Rao</title>
				</Helmet>

				<h1 class="text-5xl text-red-500 font-bold mb-8 animate-pulse">
					404
				</h1>
				<p class="text-white text-lg mb-8">
					Page not found, let's go{" "}
					<Link
						to={"/"}
						className="text-blue-400"
					>
						Home?
					</Link>
				</p>
			</div>
		);
	};

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/blog"
					element={<ComingSoon />}
				/>

				<Route
					path="*"
					element={<Page404 />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
