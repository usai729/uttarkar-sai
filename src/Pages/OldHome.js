import React from "react";
import OldNav from "../Components/OldNav";

const OldHome = () => {
	return (
		<div className="w-screen h-screen overflow-x-hidden">
			<OldNav />
			<div className="old-home w-full h-full bg-[#CCCCCC] flex flex-col items-center justify-center">
				<div className="m-10 mt-0 border-gray-600 border-4 p-4 w-[65vw] min-h-[70vh] bg-white shadow-lg">
					<p className="text-3xl font-bold font-old-std text-text90sheader">
						Sai Uttarkar
					</p>
					<hr />
				</div>
			</div>
		</div>
	);
};

export default OldHome;
