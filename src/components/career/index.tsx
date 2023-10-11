import JobExperience from "./JobExperience";

const Career = () => {
  return (
    <>
      <h2 id="career" className="text-2xl font-bold mt-12">
        Career
      </h2>
      <div className="mt-1">
        <JobExperience
          title="Full-Stack Web Developer"
          company="booost technologies"
          date="Nov 2020 - Sep 2022"
          subTitles={["Web system to support decarbonization and customer management", "Web scraping to streamline operations"]}
          responsibilities={[
            [
              "Improved dashboard response speed by modifying backend logic, optimizing SQL queries, and separating APIs. This has enhanced the user experience as all the charts in the dashboard are displayed about 2,500 milliseconds faster",
              "Implemented a feature to calculate and view greenhouse gas emissions for each of the company's activities using Laravel and Vue.js. This feature has been patented",
            ],
            [
              "Retrieved electricity-related data from websites using Selenium, saving data to a database. Additionally, created a web system using Laravel and Vue.js to be able to download scraped data. This system has reduced the sales department's work time by more than 10 minutes each day",
            ],
          ]}
        />
        <JobExperience
          title="Full-Stack Web Developer"
          company="Self-employed"
          date="Jul 2020 - Oct 2020"
          subTitles={["Web system for recruitment"]}
          responsibilities={[
            [
              "Implemented messaging functionality using React, Express, and Node.js",
              "Created a scraping environment using Docker to quickly and easily set up a development environment. As a result, the time needed to onboard new developers has been significantly minimized",
            ],
          ]}
        />

        <JobExperience
          title="Backend Developer"
          company="Threet"
          date="Feb 2018 - Jun 2020"
          subTitles={["Web system for customer management"]}
          responsibilities={[
            [
              "Implemented credit card payment and direct debit backend functionality using Paygent's API with PHP. No errors occurred since the start of the operation, which increased customer trust",
              "Created an API backend in PHP to receive application data from external systems",
              "Developed batch processing to calculate and create a large number of invoices",
            ],
          ]}
        />
      </div>
    </>
  );
};

export default Career;
