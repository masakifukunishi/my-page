interface JobExperienceProps {
  title: string;
  company: string;
  date: string;
  subTitles: string[];
  responsibilities: string[][];
}

const JobExperience: React.FC<JobExperienceProps> = ({ title, company, date, subTitles, responsibilities }) => {
  return (
    <div className="mt-2 mb-10">
      <h3 className="text-lg font-bold">{company}</h3>
      <div className="flex items-end">
        <div className="mr-3">{title}</div>
        <div>{date}</div>
      </div>
      <div>
        {subTitles.map((subTitle, subTitleIndex) => (
          <div key={subTitleIndex}>
            <h4 className="font-semibold mt-2 mb-1 ">{subTitle}</h4>
            <ul className="list-disc list-inside mb-5">
              {responsibilities[subTitleIndex].map((responsibility, responsibilityIndex) => (
                <li key={responsibilityIndex}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobExperience;
