import React from "react";

const Stats: React.FC = () => {

    const stats = [
        {
            label: "Users Active",
            value: 400
        },
        {
            label: "Links created",
            value: 124000
        },
        {
            label: "Profile Views",
            value: 30000000
        }
    ]

    return (
        <div className="flex flex-col text-white justify-center items-center">
            { stats.map((s) => {
                return (
                    <div className="flex flex-col justify-center items-center p-2">
                        <span className="text-violet-200 text-lg uppercase">{s.label}</span>
                        <span className="text-2xl text-violet-400">{s.value}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Stats