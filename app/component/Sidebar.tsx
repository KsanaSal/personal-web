import Image from "next/image";
import { Behance, Envelope, Github, Linkedin } from "./icons";

const Sidebar = ({ data }: { data: any }) => {
    return (
        <div className="bg-cyan-950 flex flex-col h-auto content-between w-full sm:h-screen sm:justify-around sm:w-1/3 sm:fixed">
            {data && (
                <>
                    <div className="text-white flex flex-col py-10 px-6 items-center text-center">
                        <Image
                            priority
                            width={300}
                            height={300}
                            className="rounded-full h-full mb-6"
                            src="/images/OksanaSalivon.jpg"
                            alt="Oksana Salivon"
                        />
                        <h1 className="text-yellow-500 text-[40px] mb-2 md:text-[50px] lg:text-[60px]">
                            {data.name}
                        </h1>
                        <h2 className="text-[32px] mb-5 md:text-[36px] lg:text-[42px]">
                            {data.role}
                        </h2>
                        <div className="text-left mb-5">
                            <h3>Education</h3>
                            <p className="mb-3">{data.education}</p>
                            <h3>Additional Education</h3>
                            <p>{data.AdditionalEducation[0]}</p>
                            <p>{data.AdditionalEducation[1]}</p>
                            <p>{data.AdditionalEducation[2]}</p>
                        </div>
                        <div>
                            <h3>Contact me</h3>
                            <ul className="flex flex-row justify-center gap-3 text-white md:gap-4 lg:gap-6">
                                <li>
                                    <a
                                        href={data.contactLinks[0]}
                                        aria-label={"email link"}
                                    >
                                        <Envelope
                                            width="24"
                                            height="24"
                                            className="md:w-8 md:h-8 lg:w-10 lg:h-10"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={data.contactLinks[1]}
                                        aria-label={"linkedin link"}
                                    >
                                        <Linkedin
                                            width="24"
                                            height="24"
                                            className="md:w-8 md:h-8 lg:w-10 lg:h-10"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={data.contactLinks[2]}
                                        aria-label={"github link"}
                                    >
                                        <Github
                                            width="24"
                                            height="24"
                                            className="md:w-8 md:h-8 lg:w-10 lg:h-10"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={data.contactLinks[3]}
                                        aria-label={"behance link"}
                                    >
                                        <Behance
                                            width="24"
                                            height="24"
                                            className="md:w-8 md:h-8 lg:w-10 lg:h-10"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
export default Sidebar;
