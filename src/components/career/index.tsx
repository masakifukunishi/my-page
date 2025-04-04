import JobExperience from "./JobExperience";

const Career = () => {
  return (
    <div className="mt-10">
      <h2 id="career" className="text-2xl font-semibold mb-4">
        Career
      </h2>
      <div className="mt-1">
        <JobExperience
          title="Full-Stack Web Developer"
          company="HashHub"
          date="Jan 2024 - Present"
          responsibilities={["Working on a cryptocurrency lending service and blockchain research media"]}
        />
        <JobExperience
          title="Full-Stack Web Developer"
          company="booost technologies"
          date="Nov 2020 - Sep 2022"
          responsibilities={[
            "Worked on web system to support decarbonation",
            "Improved dashboard response speed by modifying backend logic, optimizing SQL queries",
            "Implemented a feature to calculate and view greenhouse gas emissions",
          ]}
        />
        <JobExperience
          title="Backend Developer"
          company="Threet"
          date="Feb 2018 - Jun 2020"
          responsibilities={[
            "Worked on backend development for a customer management system",
            "Implemented credit card and account transfer payment feature",
            "Designed the DB table schema",
          ]}
        />
        <p className="mb-12">
          See more on&nbsp;
          <a className="text-blue-400" href="https://www.linkedin.com/in/masaki-fukunishi/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
};

export default Career;
