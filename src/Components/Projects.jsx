import './Project.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

export default function Projects(){
    const PROJECTS = [
        {
            title: "Personal Portfolio",
            description: "Created using REACT + TAILWINDCSS, this portfolio showcases my skills, projects, and certifications. It is designed to be responsive and user-friendly.",
            image:"./src/assets/P1.png",
            link:"https://google.com",
            gitLink:"https://zoyayusuf.github.io/IMAGE_SLIDER/"

        },
        {
            title: "ZoGPT",
            description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
            image:"./src/assets/P2.png",
            gitLink:"https://zoyayusuf.github.io/IMAGE_SLIDER/"

        },
        {
            title: "Video Conferencing App",
            description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
            image:"./src/assets/P3.png",
            link:"https://google.com",
            gitLink:"https://zoyayusuf.github.io/IMAGE_SLIDER/"

        },
        {
            title: "Version Control System",
            description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
            image:"./src/assets/P4.png",
            link:"https://google.com",
            gitLink:"https://zoyayusuf.github.io/IMAGE_SLIDER/"

        },
    ]
    
    return(  

    <div className='w-screen flex flex-col justify-center items-center align-items-center'> 
       <h3 className="text-center text-5xl mb-6 text-[#80CBC4] mt-10"> PROJECT </h3>
         
        <div className='w-340 grid grid-cols-2 gap-5 p-4'>
    {
    PROJECTS.map((project)=>{
            return(
            <div className='flex gap-2 w-160 h-70 border border-[#EB3678] p-3 rounded-lg shadow-md shadow-[#EB3678]'>
                <div className='flex justify-center items-center align-items-center rounded-lg'>
                    <img className="rounded-lg border border-white w-100 h-50" src={project.image.toString()} alt='not displayed'/>
                </div>

                <div className='p-2 w-120 h-70'>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                    <p className="text-justify mb-5 font-serif text-gray-700 dark:text-gray-400">{project.description}</p>
                    <div className="flex justify-center items-center gap-3 mt-2">
                                <a href={project.link}>
                                <button type="button" class="text-[#121a1f] !bg-[#EB3678] !text-lg flex items-center justify-center focus:ring-4 focus:outline-none focus:ring-[#FB773C]">
                                    <LanguageIcon className="!text-[#121a1f]"/>
                                    <a className="!text-[#121a1f]"></a>
                                </button>
                                </a>

                                <a href={project.gitLink} tooltip="GitHub Link">
                                <button type="button" class="text-[#121a1f] !bg-[#EB3678] !text-lg flex items-center justify-center focus:ring-4 focus:outline-none focus:ring-[#FB773C]">
                                    <GitHubIcon className="!text-[#121a1f]"/>
                                    <a className="!text-[#121a1f]"></a>
                                </button>
                                </a>
                    </div>
                </div>
            </div>
            )
        }) 
    }

        </div>
    </div>   
    );
}



// <button type="button" class="ml-5 !bg-[#EB3678] text-white !hover:bg-[#FB773C] focus:ring-4 focus:outline-none focus:ring-[#FB773C] font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
