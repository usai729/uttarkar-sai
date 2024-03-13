import React, { useEffect } from "react";
import {
	FaDatabase,
	FaGithub,
	FaInstagram,
	FaLaptopCode,
	FaLinkedinIn,
	FaPaperclip,
} from "react-icons/fa";
import { TbCloudCode } from "react-icons/tb";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { MdConnectWithoutContact, MdOpenInNew } from "react-icons/md";

import Nav from "../Components/Nav";
import "../Home.css";
import socialmedia from "../Assets/socialmedia.webp";
import exam from "../Assets/onlinexam.png";
import fileshare from "../Assets/fileshare.png";
import api from "../Assets/api.jpeg";
import auth from "../Assets/auth.png";
import compvision from "../Assets/compvision.jpg";
import auction from "../Assets/auction.jpg";

export default function Home() {
	const skills = [
		{
			category: "Frontend",
			list: ["HTML&CSS", "React JS", "Tailwind", "Bootstrap"],
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
		},
		{
			category: "Databases",
			list: ["MongoDB", "MySQL"],
		},
		{
			category: "Others",
			list: ["C/C++", "Communication"],
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
				"Originally build as an assignment",
			],
			link: "https://github.com/usai729/atg",
		},
	];

	return (
		<div className="overflow-hidden">
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
						An avid Programmer based in the vibrant city of
						Hyderabad, India!
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
			<Line />

			<div className="mt-5 grid place-items-center">
				<div className="skills mt-5 p-2">
					<h3 className="text-gray-900 text-xl font-bold mb-5">
						Skills
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center">
						{skills.map((skillCategory, index) => (
							<SkillContainer
								key={index}
								category={skillCategory.category}
								skills={skillCategory.list}
							/>
						))}
					</div>
				</div>
			</div>
			<div className="mt-5 grid place-items-center">
				<div className="skills mt-5 p-2">
					<h3 className="text-gray-900 text-xl font-bold mb-5">
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
			<div className="p-10 flex flex-col gap-4 justify-center h-[70vh] items-center bg-gradient-to-tr from-gray-900 to-black text-white mt-5">
				<div className="flex flex-col md:flex-row gap-2 w-screen md:w-[40vw] p-10 md:p-0">
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
					{/* <div
						className="github-card"
						data-github="usai729"
						data-width="400"
						data-height=""
						data-theme="default"
					></div> */}
				</div>
				<div className="flex flex-col w-full md:flex-row justify-center items-center gap-2">
					<button
						className="flex items-center justify-center p-4 bg-c1 rounded-md gap-2 text-beech cursor-not-allowed w-full md:w-max"
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
						Code to{" "}
						<span className=" text-blue-900">
							this<span className="text-purple-400">.site</span>
						</span>
					</a>
				</div>
			</div>
		</div>
	);
}

const SkillContainer = ({ category, skills }) => (
	<div className="flex flex-col gap-1 bg-c1 p-3 rounded-md m-2 md:m-0 w-[98vw] md:w-[27vw] lg:w-[17vw] h-[30vh] shadow-md font-poppins">
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
					className={`text-gray-300 p-1 border-1 shadow-sm ${
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
);

const Project = ({ title, link, points, image }) => (
	<div className="flex flex-col justify-between gap-1 rounded-md w-[98vw] md:w-[27vw] xl:w-[17vw] min-h-[55vh] font-poppins border-1 border-gray-200 overflow-hidden">
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
				className="flex items-center gap-1 m-3 text-xs text-blue-500"
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
// 14131A