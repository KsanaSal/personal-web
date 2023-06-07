type ProfessionalExperienceProps = {
    professional: {
        title: string;
        experiences: {
            role: string;
            description: string;
            current: boolean;
        }[];
    };
};

const ProfessionalExperience = ({
    professional,
}: ProfessionalExperienceProps) => {
    return (
        <div>
            <h2 className="text-[32px] mb-4 md:text-[36px] lg:text-[42px] uppercase text-cyan-950">
                {professional.title}
            </h2>
            <div className="flex flex-col gap-4">
                {professional.experiences.map(
                    ({
                        role,
                        description,
                        current,
                    }: {
                        role: string;
                        description: string;
                        current: boolean;
                    }) => (
                        <div key={role} className="flex flex-col rounded-lg">
                            <span
                                className={`h-2 ${
                                    current ? "bg-cyan-300" : "bg-slate-300"
                                }`}
                            />
                            <div className="bg-gray-100 p-6 drop-shadow-md">
                                <h3 className="text-cyan-900 normal-case">
                                    {role}
                                </h3>
                                <p>{description}</p>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default ProfessionalExperience;
