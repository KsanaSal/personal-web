"use client";
import { useState } from "react";

// type Skills = {
//     icon: string;
//     text: string;
// };
// type SkillsProps2 = {
//     dataSkills: {
//         soft: Skills[];
//         hard: Skills[];
//     };
// };

// type SkillsProps1 = {
//     dataSkills: {
//         soft: {
//             icon: string;
//             text: string;
//         }[];
//         hard: {
//             icon: string;
//             text: string;
//         }[];
//     };
// };

// type SkillsProps2 = {
//     dataSkills: {
//         soft: Skills[];
//         hard: Skills[];
//     };
// };
type SkillCategory = "soft" | "hard";

export type SkillsProps = {
    dataSkills: {
        [K in SkillCategory]: {
            icon: string;
            text: string;
        }[];
    };
};

const Skills = ({ dataSkills }: SkillsProps) => {
    const [activeBtn, setActiveBtn] = useState<SkillCategory>("soft");
    console.log(activeBtn);
    const setBg = (active: SkillCategory) =>
        activeBtn === active
            ? "bg-yellow-300 border-cyan-950"
            : "bg-gray-200 border-gray-200";
    const setTabAlignment = (tab: SkillCategory) =>
        tab === "soft" ? "text-left" : "text-right";
    const tabsType: SkillCategory[] = ["soft", "hard"];

    return (
        <div>
            <div className="flex flex-col sm:flex-row gap-1">
                {tabsType.map((el) => (
                    <button
                        key={el}
                        type="button"
                        className={`btn ${setBg(el)} ${setTabAlignment(el)}`}
                        onClick={() => setActiveBtn(el)}
                    >
                        {el} skills
                    </button>
                ))}
            </div>
            <ul
                className={`flex flex-row flex-wrap content-start list-none py-4 gap-2 ${
                    activeBtn === "soft" ? "justify-start" : "justify-end"
                }`}
            >
                {dataSkills[activeBtn].map(
                    ({ icon, text }: { icon: string; text: string }) => (
                        <li key={text} className="skill">
                            <span className="mr-2 text-fuchsia-600 border-2 border-slate-400 p-1 rounded-md bg-slate-100">
                                {icon}
                            </span>
                            {text}
                        </li>
                    )
                )}
            </ul>
        </div>
    );
};
export default Skills;
