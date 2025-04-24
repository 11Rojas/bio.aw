import React from "react";



const Features: React.FC = () => {

    return (
        <section className="text-white flex flex-col justify-center items-center px-4 gap-y-8">
            <article>
                <h1 className="text-2xl font-semibold text-start py-2">Ease of customization</h1>
                <p className="text-md text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aliquid modi quisquam neque maxime porro cupiditate rem ullam aperiam minus!
                </p>
            </article>

            <article>
                <h1 className="text-2xl font-semibold text-start py-2">Widges for you</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe et repellat ea blanditiis consequuntur assumenda quas pariatur quod impedit recusandae.</p>
            </article>
        </section>
    )
}


export default Features