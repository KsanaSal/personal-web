import { aboutMe, skills, professionalData } from "@/data/pageData";
import AboutMe from "./component/AboutMe";
import ProfessionalExperience from "./component/ProfessionalExperience";

export default function Home() {
    return (
        <div>
            <AboutMe data={aboutMe} skills={skills} />
            <ProfessionalExperience professional={professionalData} />
        </div>
    );
}
