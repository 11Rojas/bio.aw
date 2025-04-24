import { Facebook, Instagram, Pause, Play, SkipBack, SkipForward, SoupIcon } from "lucide-react";
import React from "react";
import { useParams } from "react-router";



const Profile:React.FC = () => {
    
    const { id } = useParams<{ id: string}>();
    

    return (
        <div className="flex flex-col gap-16 ">
            <div className="flex items-start justify-start p-4">
                <SoupIcon className="text-red-400"/>
                asd
            </div>

            <div className="flex flex-col items-center justify-center gap-y-2 relative">
                <img src="https://cdn.bio.link/uploads/profile_pictures/2022-04-15/vLMobYcIYjPDWTN04WId2rhevCdtD1md.png" className="w-40"/>
                <span className="font-bold text-white">@{id}</span>
                <div className="flex flex-row gap-x-2">
                    <Instagram className="text-white"/>
                    <Facebook className="text-white"/>
                </div>
                <div className="w-[90%] bg-black rounded-lg">
                    <div className="flex flex-col justify-center items-center relative ">
                        <div className="flex flex-row justify-center items-center p-4 gap-x-2">
                            <img src="https://i1.sndcdn.com/artworks-KiRpMWOwoSmt-0-t500x500.jpg" className="w-16 rounded-lg"/>
                            <div className="flex flex-col">
                            <span className="font-semibold text-white text-md ">Debi tirar mas fotos</span>
                            <span className="text-white text-sm">Bad bunny, Dei V</span>
                           <div className="flex flex-row justify-start gap-x-4 pt-2 text-gray-300">
                           <SkipBack width={17}/>
                            <Play width={17}/>
                            <SkipForward width={17}/>
                           </div>
                            </div>
                        </div>
                        <div className="bg-gray-800 rounded-full w-[70%] relative h-2">f<div className="absolute top-0 rounded-full h-2 w-[30%] bg-green-500"></div></div>
                        <span className="absolute left-13 -bottom-8 text-white">0:00</span>
                        <span className="absolute right-14 -bottom-8 text-white">3:40</span>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile