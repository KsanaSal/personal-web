import { useId } from "react";

const AboutMe = ({ data }: { data: any }) => {
    const id = useId();
    return (
        <section className="mb-10">
            <h2 className="text-[32px] mb-4 md:text-[36px] lg:text-[42px] uppercase text-cyan-950">
                {data.title}
            </h2>
            {data.body?.map((e: any, i: any) => (
                <p key={`${id}_${i}`} className="mb-3 text-gray-800">
                    {e}
                </p>
            ))}
        </section>
    );
};
export default AboutMe;
