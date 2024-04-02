import React from "react";
import { Link } from "react-router-dom";

export default function OldNav() {
	return (
		<div className="flex p-4 justify-between items-center w-full border-b-4 border-pink-500  bg-purple-600 text-white font-bold">
			<div className="ml-4">
				<span className="text-2xl font-old-std">Sai Uttarkar</span>
			</div>
			<div className="mr-4">
				<nav>
					<ul className="flex space-x-4 items-center">
						<li>
							<Link
								href="/home"
								className="hover:text-yellow-300"
							>
								Go back
							</Link>
						</li>
						<li>
							<a
								href="https://drive.google.com/file/d/1W5gaquH5qOsMsRKn6Yh5VJEJ6pFbsy89/view?usp=drive_link"
								target="_blank"
								className="p-2 flex justify-center items-center bg-btnbg90s border-4 border-gray-600"
							>
								Resume
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}
