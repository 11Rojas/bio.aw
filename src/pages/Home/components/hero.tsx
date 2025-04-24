import React from "react";


const Hero:React.FC = () => {

    return (
        <main>
            <article className="text-white flex flex-col p-8 gap-2 justify-center items-center text-center gap-y-4" >
                <h1 className="text-xl font-bold md:text-4xl bg-gradient-to-r from-pink-500 to-violet-400 bg-clip-text text-transparent">Create your bio.aw fast</h1>
                <p className="text-gray-300 text-center md:text-lg md:w-3xl ">Create business cards to showcase your social media or skills in an easier and more customizable way, accessible from a link.</p>
              <div className="flex items-center">
              <div className="flex px-3 py-4 border-violet-400 border border-r-0 rounded-l-lg w-44">
                    <span>bio.aw/</span>
                    <input placeholder="yourname" className="focus:outline-none ml-1"/>
                </div>
                <div className="bg-violet-400 px-2 py-4 border border-violet-400 rounded-r-lg">
                    <span>Claim my link</span>
                </div>
              </div>
                <span className="font-semibold">Get started for free!</span>
            </article>
        </main>
    )
}

export default Hero