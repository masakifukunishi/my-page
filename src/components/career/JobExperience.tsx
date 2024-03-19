interface JobExperienceProps {
  title: string;
  company: string;
  date: string;
  responsibilities: string[];
}

const JobExperience: React.FC<JobExperienceProps> = ({ title, company, date, responsibilities }) => {
  return (
    <div className="mt-2 mb-8">
      <h3 className="text-lg font-bold">{company}</h3>
      <div className="flex items-end">
        <div className="mr-3">{title}</div>
        <div>{date}</div>
      </div>
      <div>
        <ul className="list-disc list-inside mt-2">
          {responsibilities.map((responsibility, responsibilityIndex) => (
            <li key={responsibilityIndex}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobExperience;
