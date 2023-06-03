import { aboutMe, skills } from "@/data/pageData";
import AboutMe from "./component/AboutMe";

export default function Home() {
    return (
        <div>
            <AboutMe data={aboutMe} skills={skills} />
        </div>
    );
}
