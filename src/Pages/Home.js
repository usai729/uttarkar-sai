import React, { useEffect, useRef, useState } from "react";
import {
	FaBars,
	FaCode,
	FaDatabase,
	FaGithub,
	FaInstagram,
	FaLaptopCode,
	FaLinkedinIn,
	FaPaperclip,
	FaUser,
} from "react-icons/fa";
import { TbCloudCode } from "react-icons/tb";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { MdConnectWithoutContact, MdOpenInNew } from "react-icons/md";
import { FcSettings } from "react-icons/fc";
import { FaServer, FaPalette, FaHandsHelping } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import {
	SiTailwindcss,
	SiBootstrap,
	SiMongodb,
	SiMysql,
	SiFirebase,
	SiPhp,
	SiPython,
	SiJavascript,
	SiHtml5,
	SiNodedotjs,
} from "react-icons/si";

import Nav from "../Components/Nav";
import "../Home.css";
import socialmedia from "../Assets/socialmedia.webp";
import exam from "../Assets/onlinexam.png";
import fileshare from "../Assets/fileshare.png";
import api from "../Assets/api.jpeg";
import auth from "../Assets/auth.png";
import compvision from "../Assets/compvision.jpg";
import auction from "../Assets/auction.jpg";
import { Helmet } from "react-helmet";
import { useIsIntersect } from "../Utils/useIsIntersect";

export default function Home() {
	const skillsRef = useRef();
	const skillsIntersect = useIsIntersect(skillsRef);

	const projectsRef = useRef();
	const projectsIntersect = useIsIntersect(projectsRef);

	const aboutsRef = useRef();
	const aboutsIntersect = useIsIntersect(aboutsRef);

	const [pos, setPos] = useState("top");
	const [scrollToTop, setScrollToTop] = useState(false);

	const skills = [
		{
			category: "Frontend",
			list: ["HTML&CSS", "React JS", "Tailwind", "Bootstrap"],
			projects: ["Online Auction Platform", "Social Media Frontend"],
		},
		{
			category: "Backend",
			list: [
				"Node.js",
				"Express.js",
				"PHP",
				"Python",
				"Firebase",
				"RESTful APIs",
			],
			projects: [
				"Social Media Backend API",
				"Online Examination Platform",
				"Authentication APi",
			],
		},
		{
			category: "Databases",
			list: ["MongoDB", "MySQL"],
			projects: ["Almost every project"],
		},
		{
			category: "Others",
			list: ["C/C++", "Communication"],
			projects: ["DSA"],
		},
	];

	const projects = [
		{
			title: "File Sharing System",
			image: fileshare,
			points: [
				"Cloud storage of files",
				"Separate admin and student pages",
				"Separate logins",
			],
			link: "https://github.com/usai729/usai729-File_Sharing_And_Student_Management---PHP",
		},
		{
			title: "Social Media Backend API",
			image: api,
			points: [
				"Authentication Using JWT",
				"Upload, edit, delete posts",
				"Edit and create profiles",
				"Follow, unfollow, like, unlike",
			],
			link: "https://github.com/usai729/nodejs-socialmedia-backend-",
		},
		{
			title: "Online Examination Platform",
			image: exam,
			points: [
				"Login for admin and student",
				"Attend exam, automatic result evaluation and answer key generation",
				"Schedule and edit examinations",
				"Student registration when allowed by admin",
			],
			link: "https://github.com/usai729/Online-Exam-System",
		},
		{
			title: "Online Auction Platform",
			image: auction,
			points: [
				"Login for seller and buyer",
				"Posting new products for auction",
				"Implemented payment gateway",
			],
			link: "https://github.com/usai729/mern-auction-assignment",
		},
		{
			title: "Car Speed Detection",
			image: compvision,
			points: [],
			link: "https://github.com/usai729/Car-Speed-Detection-OpenCV-Python",
		},
		{
			title: "Social Media Frontend",
			image: socialmedia,
			points: [
				"Built using ReactJS",
				"Idea was to combine the UI features of the popular social media applications",
			],
			link: null,
		},
		{
			title: "Authentication System",
			image: auth,
			points: [
				"JWT for login and signup",
				"Forgot and reset passwords via email",
				"Originally built as an assignment",
			],
			link: "https://github.com/usai729/authentication-api",
		},
	];

	const tagData = [
		{ name: "Backend Development", icon: FaServer, color: "lightblue" },
		{ name: "APIs", icon: FaCode, color: "lightpurple" },
		{ name: "REST", icon: FaHandsHelping, color: "lightgreen" },
		{ name: "Frontend Development", icon: FaPalette, color: "lightorange" },
		{ name: "HTML&CSS", icon: SiHtml5, color: "red" },
		{ name: "React JS", icon: RiReactjsLine, color: "lightblue" },
		{ name: "Tailwind", icon: SiTailwindcss, color: "lightpurple" },
		{ name: "Bootstrap", icon: SiBootstrap, color: "lightgreen" },
		{ name: "Node.js", icon: SiNodedotjs, color: "lightorange" },
		{ name: "Express.js", icon: SiNodedotjs, color: "red" },
		{ name: "PHP", icon: SiPhp, color: "lightblue" },
		{ name: "Python", icon: SiPython, color: "lightpurple" },
		{ name: "Firebase", icon: SiFirebase, color: "lightgreen" },
		{ name: "RESTful APIs", icon: FaHandsHelping, color: "lightorange" },
		{ name: "MongoDB", icon: SiMongodb, color: "red" },
		{ name: "MySQL", icon: SiMysql, color: "lightblue" },
		{ name: "C/C++", icon: FaCode, color: "lightpurple" },
		{ name: "Communication", icon: FaHandsHelping, color: "lightgreen" },
		{ name: "DSA", icon: FaCode, color: "lightorange" },
		{ name: "Full-stack Development", icon: FaServer, color: "red" },
		{ name: "MERN Stack", icon: FaServer, color: "lightblue" },
		{ name: "Product Vision", icon: FaPalette, color: "lightpurple" },
		{ name: "User Experience", icon: FaPalette, color: "lightgreen" },
		{
			name: "Marketing Strategies",
			icon: FaHandsHelping,
			color: "lightorange",
		},
		{ name: "Engagement", icon: FaHandsHelping, color: "red" },
		{ name: "Analytical Thinking", icon: FaCode, color: "lightblue" },
		{ name: "Collaboration", icon: FaHandsHelping, color: "lightpurple" },
		{ name: "Impactful Products", icon: FaServer, color: "lightgreen" },
		{
			name: "Team Collaboration",
			icon: FaHandsHelping,
			color: "lightorange",
		},
	];

	const handleScroll = (event) => {
		event.preventDefault();

		const targetId = event.target.getAttribute("href").slice(1);
		const targetElement = document.getElementById(targetId);

		setPos(targetId);

		if (targetElement) {
			window.scrollTo({
				top: targetElement.offsetTop,
				behavior: "smooth",
			});
		}
	};

	useEffect(() => {
		if (pos != "top") {
			setScrollToTop(true);
		} else {
			setScrollToTop(false);
		}
	}, [pos]);

	return (
		<div className="overflow-hidden">
			<Helmet>
				<title>Uttarkar Sai Nath Rao</title>
				<meta
					name="description"
					content="Full-stack developer with a product vision, weaving user experiences with MERN magic. Mastering the web (HTML, CSS, JS, React, PHP) while exploring marketing strategies to fuel engagement. Keen eye for detail, analytical mind, and collaborative spirit bridge the gap between tech and business. Seeking opportunities to build impactful products and collaborate with awesome teams!"
				/>
				<meta
					name="keywords"
					content="portfolio, programmer, JavaScript, PHP, MySQL, MongoDB, Python, API, backend, frontend, RESTful, REST, web development, software engineering, coding, HTML, CSS, React, Node.js, Express.js, Firebase, software developer, full-stack developer, technology enthusiast, coding projects, software projects, programming languages, web developer in Hyderabad, India, Backend Development, APIs, REST, Frontend Development, HTML&CSS, React JS, Tailwind, Bootstrap, Node.js, Express.js, PHP, Python, Firebase, RESTful APIs, MongoDB, MySQL, C/C++, Communication, DSA, Full-stack Development, MERN Stack, Product Vision, User Experience, Marketing Strategies, Engagement, Analytical Thinking, Collaboration, Impactful Products, Team Collaboration"
				/>
				<meta
					name="author"
					content="Uttarkar Sai Nath Rao"
				/>
				<meta
					name="viewport"
					content="width=device-width"
				/>
				<meta
					property="og:title"
					content="Uttarkar Sai Nath Rao - Full-stack Developer"
				/>
				<meta
					property="og:description"
					content="Passionate full-stack developer based in Hyderabad, India, skilled in JavaScript, React, Node.js, and more. Seeking opportunities to collaborate on impactful projects."
				/>
			</Helmet>

			<Nav />
			<div className="flex justify-between p-0 md:p-10 gap-10">
				<div
					className="h-[73vh] w-[20em] hidden md:flex p-7 justify-center items-center bg-lightgray text-powderBlue font-poppins rounded-lg shadow-xl"
					id="top"
				>
					<div className="flex flex-col justify-around items-start text-md w-full h-full">
						<div className="flex flex-col justify-evenly h-full">
							<FaBars />
							<a
								href="#skills"
								onClick={handleScroll}
								className="flex gap-2 items-center"
							>
								<FaCode /> Skills
							</a>
							<a
								href="#projects"
								onClick={handleScroll}
								className="flex gap-2 items-center"
							>
								<FcSettings />
								Projects
							</a>
							<a
								href="#about"
								onClick={handleScroll}
								className="flex gap-2 items-center"
							>
								<FaUser />
								About me
							</a>
						</div>
						<div className="flex flex-col justify-evenly h-full">
							<p>Social </p>
							<a
								href="https://www.github.com/usai729"
								target="_blank"
								className="flex gap-2 items-center"
							>
								<FaGithub
									size={20}
									color="white"
								/>
								GitHub
							</a>
							<a
								href="https://www.linkedin.com/in/saiuttarkar"
								target="_blank"
								className="flex gap-2 items-center"
							>
								<FaLinkedinIn
									size={20}
									color="#0077b5"
								/>
								LinkedIn
							</a>
							<a
								href="https://www.instagram.com/sai_uttarkar"
								target="_blank"
								className="flex gap-2 items-center"
							>
								<FaInstagram
									size={20}
									color="#833AB4"
								/>
								Instagram
							</a>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-5 w-full items-center justify-evenly">
					<div
						className="h-[70vh] md:h-[15em] w-full p-10 flex justify-center items-center bg-gradient-to-tr from-gray-900 to-black rounded-lg shadow-xl"
						id="top"
					>
						<div className="flex justify-evenly items-center w-full h-full">
							<div className="h-full flex items-center justify-center p-5 flex-col gap-2 max-w-[100vw] md:max-w-[45vw] lg:max-w-[35vw] xl:max-w-[30vw] text-white">
								<p
									className="text-lg font-bold font-press-start w-full text-left"
									id="name"
								>
									Uttarkar Sai Nath Rao
									<span className="cursor">|</span>
								</p>
								<p className=" font-poppins w-full text-right">
									An avid Programmer based in the vibrant city
									of Hyderabad, India!
								</p>
								<div className="w-full">
									<a
										href="https://drive.google.com/file/d/1W5gaquH5qOsMsRKn6Yh5VJEJ6pFbsy89/view?usp=drive_link"
										target="_blank"
										className="flex items-center gap-1 text-xs text-left cursor-pointer bg-gradient-to-tr from-purple-700 to-blue-400 p-3 rounded-md float-start font-semibold"
									>
										<FaPaperclip /> My Resume
									</a>
								</div>
								<ul className="flex items-center justify-center mt-10 gap-7 list-none w-full">
									<li>
										<a
											href="https://www.github.com/usai729"
											target="_blank"
											className="md:hidden"
										>
											<FaGithub size={20} />
										</a>
									</li>
									<li>
										<a
											href="https://www.linkedin.com/in/saiuttarkar"
											target="_blank"
											className="md:hidden"
										>
											<FaLinkedinIn size={20} />
										</a>
									</li>
									<li>
										<a
											href="https://www.instagram.com/sai_uttarkar"
											target="_blank"
											className="md:hidden"
										>
											<FaInstagram size={20} />
										</a>
									</li>
								</ul>
								<div className="flex md:hidden w-full justify-around mt-7">
									<a
										href="#skills"
										className="text-powderBlue"
										onClick={handleScroll}
									>
										Skills
									</a>
									<a
										href="#projects"
										className="text-powderBlue"
										onClick={handleScroll}
									>
										Projects
									</a>
									<a
										href="#about"
										className="text-powderBlue"
										onClick={handleScroll}
									>
										About me
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="hidden md:flex p-10 md:w-[40em] lg:w-[55em] flex-wrap gap-3 items-center text-gray-400">
						{tagData.map((tag, index) => (
							<div
								key={index}
								className={`p-2 rounded-md border-1 border-${tag.color}-300 text-xs flex items-center gap-1`}
								style={{ borderColor: `${tag.color}` }}
							>
								<tag.icon />
								<span>{tag.name}</span>
							</div>
						))}
					</div>
				</div>
			</div>
			<Line />

			<div
				ref={skillsRef}
				id="skills"
				className={`mt-5 grid place-items-center transition-opacity duration-700 ease-in ${
					skillsIntersect ? "opacity-100" : "opacity-0"
				}`}
			>
				<div className="skills mt-5 p-2">
					<h3 className=" text-btnBlue text-xl font-bold mb-5">
						Skills
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-5 place-items-center">
						{skills.map((skillCategory, index) => (
							<SkillContainer
								key={index}
								category={skillCategory.category}
								skills={skillCategory.list}
								projects={skillCategory.projects}
							/>
						))}
					</div>
				</div>
			</div>
			<div className={`mt-5 grid place-items-center`}>
				<div
					ref={projectsRef}
					id="projects"
					className={`skills mt-5 p-2 transition-opacity duration-700 ease-in ${
						projectsIntersect ? "opacity-100" : "opacity-0"
					}`}
				>
					<h3 className="text-btnBlue text-xl font-bold mb-5">
						Projects
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 place-items-center">
						{projects.map((project, index) => {
							return (
								<Project
									key={index}
									title={project.title}
									image={project.image}
									link={project.link}
									points={project.points}
								/>
							);
						})}
					</div>
				</div>
			</div>
			<div
				className={`p-10 flex flex-col gap-4 justify-center h-[85vh] items-center bg-gradient-to-tr from-gray-900 to-black text-white mt-5 rounded-t-lg`}
			>
				<div
					ref={aboutsRef}
					id="about"
					className={`flex flex-col md:flex-row gap-2 w-screen md:w-[40vw] p-10 md:p-0 transition-opacity duration-700 ease-in ${
						aboutsIntersect ? "opacity-100" : "opacity-0"
					}`}
				>
					<div>
						<p className="text-lg font-semibold font-poppins text-beech">
							About me...
						</p>
						<p className="text-md leading-6 font-roboto text-beech">
							Full-stack developer with a product vision, weaving
							user experiences with MERN magic. Mastering the web
							(HTML, CSS, JS, React, PHP) while exploring
							marketing strategies to fuel engagement. Keen eye
							for detail, analytical mind, and collaborative
							spirit bridge the gap between tech and business.
							Seeking opportunities to build impactful products
							and collaborate with awesome teams!
						</p>
					</div>
					<div
						className="github-card"
						data-github="usai729"
						data-width="400"
						data-height=""
						data-theme="default"
					></div>
				</div>
				<div className="flex flex-col w-full md:flex-row justify-center items-center gap-2">
					<button
						className="flex items-center justify-center p-4 bg-c1 rounded-md gap-2 text-beech cursor-not-allowed w-full md:w-max opacity-50"
						disabled
					>
						<MdConnectWithoutContact size={25} />
						Connect With Me
					</button>
					<a
						href="https://github.com/usai729/uttarkar-sai"
						target="_blank"
						className="flex items-center justify-center p-4 text-c1 rounded-md gap-2 bg-white cursor-pointer w-full md:w-max"
						disabled
					>
						<FaGithub size={25} />
						<span>
							Code to{" "}
							<span className=" text-blue-900">
								this
								<span className="text-purple-400">.site</span>
							</span>
						</span>
					</a>
				</div>
			</div>
		</div>
	);
}

const SkillContainer = ({ category, skills, projects }) => (
	<div className="flex flex-col justify-between gap-1 bg-c1 p-3 rounded-md m-2 md:m-0 w-[98vw] md:w-[27vw] lg:w-[17vw] h-[30vh] shadow-md font-poppins">
		<div>
			<h4 className="text-md font-semibold text-beech flex items-center gap-1">
				{category.toLowerCase() === "databases" ? (
					<FaDatabase />
				) : category.toLowerCase() === "frontend" ? (
					<FaLaptopCode />
				) : category.toLowerCase() === "backend" ? (
					<TbCloudCode />
				) : (
					<GiPerspectiveDiceSixFacesRandom />
				)}
				{category}
			</h4>
			<div className="flex flex-wrap gap-3 text-phblue text-xs p-2">
				{skills.map((skill, index) => (
					<p
						key={index}
						className={`text-gray-300 p-1 border-1 shadow-none ${
							skill.toLowerCase() === "node.js" ||
							skill.toLowerCase() === "express.js" ||
							skill.toLowerCase() === "react js" ||
							skill.toLowerCase() === "tailwind" ||
							skill.toLowerCase() === "restful apis"
								? "border-[#ECA72C] shadow-[#ECA72C]"
								: "border-[#BA7BA1]"
						} rounded-md`}
					>
						{skill}
					</p>
				))}
			</div>
		</div>
		<div className="flex flex-col gap-1 text-powderBlue">
			<ul className="list-disc text-xs pl-4">
				{projects?.map((project, index) => {
					return <li key={index}>{project}</li>;
				})}
			</ul>
		</div>
	</div>
);

const Project = ({ title, link, points, image }) => (
	<div className="flex flex-col justify-between gap-1 rounded-md w-[98vw] md:w-[27vw] xl:w-[17vw] min-h-[40vh] md:min-h-[55vh] font-poppins border-1 border-lightgray overflow-hidden text-beech bg-c1">
		<div>
			<img
				src={image}
				alt=""
				className="rounded-t-md h-[20vh] w-full object-cover object-center"
			/>
			<div className="flex flex-col justify-center p-2 gap-2">
				<p className="text-md font-semibold">{title}</p>
				<ol className="list-disc text-sm font-sans pl-4">
					{points?.map((point, index) => (
						<li key={index}>{point}</li>
					))}
				</ol>
			</div>
		</div>
		{link && (
			<a
				href={link}
				target="_blank"
				className="flex items-center gap-1 m-3 text-xs text-btnBlue"
			>
				<MdOpenInNew /> View Code
			</a>
		)}
	</div>
);

const Line = () => {
	return (
		<div className="p-1 bg-gradient-to-r from-purple-700 via-blue-400 to-purple-700 w-screen h-4"></div>
	);
};
