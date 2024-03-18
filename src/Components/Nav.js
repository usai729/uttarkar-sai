import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import logo from "../Assets/logo.jpeg";

export default function Nav() {
	return (
		<div className="w-screen flex justify-between items-center p-3 md:pr-14 md:pl-14 z-50 border-b-0 border-gray-300 sticky top-0 bg-lightgray shadow-md">
			<img
				src={logo}
				alt="Sai"
				style={{
					maxWidth: "50px",
					maxHeight: "50px",
					filter: "invert(100%)",
					borderRadius: "50%",
				}}
			/>
			<a
				href="https://www.linkedin.com/in/saiuttarkar"
				target="_blank"
				className="flex items-center justify-center p-3 bg-c1 rounded-md gap-2 text-beech md:w-max opacity-95"
			>
				<FaLinkedinIn
					size={25}
					color="#0077b5"
				/>
				Connect on LinkedIn
			</a>
			{/* <ul className="hidden items-center gap-7 list-none md:flex">
				<li>
					<a
						href="https://www.github.com/usai729"
						target="_blank"
					>
						<FaGithub size={25} />
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/saiuttarkar"
						target="_blank"
					>
						<FaLinkedinIn size={25} />
					</a>
				</li>
				<li>
					<a
						href="https://www.instagram.com/sai_uttarkar"
						target="_blank"
					>
						<FaInstagram size={25} />
					</a>
				</li>
			</ul> */}
		</div>
	);
}
