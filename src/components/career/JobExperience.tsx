interface JobExperienceProps {
  title: string;
  company: string;
  date: string;
  subTitles: string[];
  responsibilities: string[][];
}

const JobExperience: React.FC<JobExperienceProps> = ({ title, company, date, subTitles, responsibilities }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>{company}</div>
      <div>{date}</div>
      <ul>
        {subTitles.map((subTitle, subTitleIndex) => (
          <div key={subTitleIndex}>
            <h4>{subTitle}</h4>
            <ul>
              {responsibilities[subTitleIndex].map((responsibility, responsibilityIndex) => (
                <li key={responsibilityIndex}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default JobExperience;
