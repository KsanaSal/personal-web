import { aboutMe } from "@/data/pageData";
import Image from "next/image";
import AboutMe from "./component/AboutMe";

export default function Home() {
    return (
        <div>
            <AboutMe data={aboutMe} />
        </div>
    );
}
