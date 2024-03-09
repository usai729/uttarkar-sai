import React from "react";
import {
	FaGithub,
	FaInstagram,
	FaLinkedinIn,
	FaPaperclip,
} from "react-icons/fa";

import Nav from "../Components/Nav";
import "../Home.css";

export default function Home() {
	const skills = [
		{ name: "PHP", rating: "4.9/5" },
		{ name: "Node.js", rating: "4.5/5" },
		{ name: "Express.js", rating: "4.5/5" },
		{ name: "React JS", rating: "4.6/5" },
		{ name: "Python", rating: "4.7/5" },
		{ name: "Firebase", rating: "3.8/5" },
		{ name: "HTML", rating: "4.9/5" },
		{ name: "Tailwindcss", rating: "4.9/5" },
		{ name: "MySQL", rating: "4.5/5" },
		{ name: "MongoDB", rating: "4/5" },
		{ name: "Rest API", rating: "4.9/5" },
		{ name: "MongoDB", rating: "4/5" },
	];
	const projects = [
		{
			name: "Auction Platform",
			link: "https://github.com/usai729/mern-auction-assignment",
			languages: ["MERN Stack"],
		},
		{
			name: "Online Examination System",
			link: "https://github.com/usai729/Online-Exam-System",
			languages: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
		},
		{
			name: "File Sharing System",
			link: "https://github.com/usai729/usai729-File_Sharing_And_Student_Management---PHP",
			languages: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
		},
		{
			name: "Social Media Backend API",
			link: "https://github.com/usai729/nodejs-socialmedia-backend-",
			languages: ["Node.js", "MongoDB"],
		},
		{
			name: "Car Speed Detection",
			link: "https://github.com/usai729/Car-Speed-Detection-OpenCV-Python",
			languages: ["Python"],
		},
		{ name: "Social Media Frontend", link: null, languages: ["React JS"] },
	];

	return (
		<div className="overflow-hidden mb-10">
			<Nav />
			<div className="h-[70vh] p-10 flex justify-center items-center bg-gradient-to-tr from-gray-900 to-black">
				<div className="flex items-center justify-center p-5 flex-col gap-2 max-w-[100vw] md:max-w-[15vw] text-white">
					<p
						className="text-lg font-bold font-press-start w-full text-left"
						id="name"
					>
						Uttarkar Sai Nath Rao
						<span className="cursor">|</span>
					</p>
					<p className=" font-poppins w-full text-right">
						A programming enthusiast from Hyderabad, India!
					</p>
					<ul className="flex items-center justify-center mt-10 gap-7 list-none md:hidden w-full">
						<li>
							<a
								href="https://www.github.com/usai729"
								target="_blank"
							>
								<FaGithub size={20} />
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/saiuttarkar"
								target="_blank"
							>
								<FaLinkedinIn size={20} />
							</a>
						</li>
						<li>
							<a
								href="https://www.instagram.com/sai_uttarkar"
								target="_blank"
							>
								<FaInstagram size={20} />
							</a>
						</li>
					</ul>
					<div className="w-full">
						<a
							href="https://drive.google.com/file/d/1W5gaquH5qOsMsRKn6Yh5VJEJ6pFbsy89/view?usp=drive_link"
							target="_blank"
							className="flex items-center gap-1 text-xs text-left cursor-pointer bg-gradient-to-tr from-purple-700 to-blue-400 p-3 rounded-md float-start font-semibold"
						>
							<FaPaperclip /> My Resume
						</a>
					</div>
				</div>
			</div>
			<div className="p-1 bg-gradient-to-r from-purple-700 via-blue-400 to-purple-700 w-screen h-4"></div>
			<div className="mt-5 grid place-items-center">
				<div className="skills mt-10">
					<h3 className="text-gray-900 text-xl font-bold mb-5">
						Skills
					</h3>
					<div className="list-none flex flex-wrap gap-3 max-w-[50vw]">
						{skills.map((skill) => (
							<Skill
								name={skill.name}
								rating={skill.rating}
							/>
						))}
					</div>
				</div>
				<div className="mt-5 border-1 border-gray-200 p-5">
					<h3 className="text-gray-900 text-xl font-bold mb-5">
						Projects
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full place-items-center gap-5">
						{projects.map((project) => {
							return (
								<Project
									name={project.name}
									link={project.link}
									languages={project.languages}
								/>
							);
						})}
					</div>
				</div>
			</div>
            <p className="text-xs w-full text-center">The site isn't responsive just yet</p>
		</div>
	);
}

const Skill = ({ name, rating }) => (
	<div className="skill flex items-center gap-2 mb-2 bg-gradient-to-tr from-gray-900 to-black rounded-md p-5 shadow-md drop-shadow-md">
		<p className="text-gray-300 font-semibold">{name}</p>
		<p className="text-gray-500">{rating}</p>
	</div>
);

const Project = ({ name, link, languages }) => (
	<div className="p-3 flex flex-col gap-1 border-gray-200 border-1p5 w-[98vw] md:w-[18vw] min-h-[20vh] rounded-sm">
		<p className="text-md font-semibold">{name}</p>
		<div className="flex flex-wrap gap-2">
			{languages?.map((language) => {
				return (
					<p className="p-1 rounded-md border-1 border-gray-300 w-max text-sm">
						{language}
					</p>
				);
			})}
		</div>
		<a
			href={link}
			className="text-xs text-blue-500"
		>
			Visit Repo
		</a>
	</div>
);
