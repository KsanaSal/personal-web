import { useId } from "react";
import Skills, { SkillsProps } from "./Skills";
// import type SkillsProps from "./Skills";

type AboutMeProps = {
    data: {
        title: string;
        body: string[];
    };
    skills?: SkillsProps;
};

const AboutMe = ({
    data,
    skills,
}: {
    data: AboutMeProps;
    skills: SkillsProps["dataSkills"];
}) => {
    const id = useId();
    return (
        <section className="mb-10">
            <div className="mb-5">
                <h2 className="text-[32px] mb-4 md:text-[36px] lg:text-[42px] uppercase text-cyan-950">
                    {data.data.title}
                </h2>
                {data.data.body?.map((e: any, i: any) => (
                    <p key={`${id}_${i}`} className="mb-3 text-gray-800">
                        {e}
                    </p>
                ))}
            </div>
            <Skills dataSkills={skills} />
        </section>
    );
};
export default AboutMe;
