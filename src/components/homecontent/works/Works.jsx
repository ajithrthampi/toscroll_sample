import { BsStars } from "react-icons/bs"
import important from "../../../assets/benifits/important.png"
import './work.css'

const Works = () => {

    const projects = [
        {
            id: 1,
            title: "Project 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem totam error eum mollitia in laudantium.",
            img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
            year: "2014"
        },
        {
            id: 2,
            title: "Project 2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem totam error eum mollitia in laudantium.",
            img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
            year: "2015"
        },
        {
            id: 3,
            title: "Project 3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem totam error eum mollitia in laudantium.",
            img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
            year: "2016"
        },
        {
            id: 4,
            title: "Project 4",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem totam error eum mollitia in laudantium.",
            img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
            year: "2017"
        },
        {
            id: 5,
            title: "Project 5",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem totam error eum mollitia in laudantium.",
            img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
            year: "2018"
        },
        {
            id: 6,
            title: "Project 6",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem totam error eum mollitia in laudantium.",
            img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
            year: "2019"
        }
    ];

    return (
        <div className=' pb-[130px] ' id="benifits">
            <hr className="h-px  bg-gray-900 bg-gradient-to-r from-[#0b011d]  via-[#3e2f5b] to-[#0b011d]  border-0 " />
            <div className='xl:px-[210px lg:px-[160px]  sm:px-[50px] vsm:px-[12px] px-[7px]'>

                <div className='flex flex-col  justify-center items-center sm:pt-28 pt-32'>
                    <h2 className='bg-clip-text bg-gradient-to-br from-white via-[#bbb8c0] to-[#bbb8c0] text-transparent md:text-[88px] sm:text-[70px] vsm:text-[40px] text-[40px]  font-interV font-medium '>Works</h2>
                    <p className='text-[#b4abcb] font-interV text font-normal md:text-xl md:pt-0 pt-5'>Our recent Projects</p>
                </div>

                <div className='xl:pt-14 md:pt-32 pt-20'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <div key={project.id} className={`grid  ${index % 2 === 1 ? 'pt-10' : ''}`}>
                                <div>
                                <div className="xl:px-16 xl:py-7 lg:px-10 lg:py-5 px-7 py-5 rounded-2xl" style={{ border: "1px solid rgb(43, 28, 67)" }}>
                                    <img className="h-auto max-w-full rounded-lg" src={project.img} alt={project.title} />
                                </div>
                                <div className="flex md:flex-row  flex-col-reverse justify-between mdLgap-0 gap-5  w-full pt-5">
                                    <div className="w-full">
                                        <h2 className="font-interV text font-normal lg:text-3xl text-2xl bg-clip-text bg-gradient-to-br from-white via-[#bbb8c0] to-[#bbb8c0] text-transparent">{project.title}</h2>
                                        <p className="font-interV text-[#665b78] pt-3 max-w-lg text-[15px]">{project.description}</p>
                                    </div>
                                    <button className="md:w-24 w-20 md:h-8 h-7 md:text-base text-sm border-[1px] rounded-3xl font-interV">{project.year}</button>
                                </div>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Works