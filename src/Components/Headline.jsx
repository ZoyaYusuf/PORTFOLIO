import { IconButton } from "@material-tailwind/react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Headline(){
    return(
        <>
        <div className="w-screen h-100 mt-13 mb-20 flex justify-center items-center align-items-center">
            {/* <div className="ml-30">
                <img src="./src/assets/Avatar2.png" alt="Profile" className="w-80 h-100 rounded-lg"/>
            </div> */}

            <div className="w-200 flex flex-col items-center justify-center rounded-lg shadow-xl p-10">
                <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                    Hey! I am 
                    <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> Zoya</span> 
                </h1>
                <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                    MCA Student || MERN STACK DEVELOPER
                </p>
                <div className="mt-10 grid grid-cols-2 gap-5">
                    <a href="https://www.linkedin.com/in/zoya-yusuf/">
                    <button type="button" class="w-50 text-[#121a1f] !bg-[#EB3678] !text-lg flex items-center justify-center">
                        <LinkedInIcon className="!text-[#121a1f] mr-2"/>
                        <a className="!text-white">LinkedIn</a>
                    </button>
                    </a>
                    <a href="https://github.com/ZoyaYusuf">
                    <button type="button" class="w-50 text-[#121a1f] !bg-[#EB3678] !text-lg flex items-center justify-center">
                        <GitHubIcon className="!text-[#121a1f] mr-2"/>
                        <a className="!text-white">Github</a>
                    </button>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}