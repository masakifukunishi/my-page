import JobExperience from "./JobExperience";

const Career = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mt-10">Career</h2>
      <JobExperience
        title="Full-Stack Web Developer"
        company="booost technologies"
        date="November 2020 - September 2022"
        subTitles={[
          "Web system to support decarbonation and customer management",
          "Automated solution to enhance sales department operations",
        ]}
        responsibilities={[
          [
            "Implemented a feature to calculate and check greenhouse gas emissions for each activity of an organization using Laravel and Vue.js. This feature has been patented",
            "Improved dashboard response speed and enhanced user experience through SQL optimization",
          ],
          [
            "Retrieved data from a website using Selenium, saving text data to a database. Additionally, designeda user-friendly web app using Laravel and Vue.js, enabling the convenient download of the scraped data. This initiative significantly improved team efficiency and data accessibility",
          ],
        ]}
      />
      <JobExperience
        title="Full-Stack Web Developer"
        company="Self-employed"
        date="July 2020 - October 2020"
        subTitles={["Web system to recruitment"]}
        responsibilities={[
          [
            "Created a scraping environment using Docker to quickly and easily set up a development environment. As a result, the time needed to onboard new developers has been significantly minimized",
            "Implemented messaging functionality using React, Express, and Node.js",
          ],
        ]}
      />

      <JobExperience
        title="Backend Developer"
        company="Threet"
        date="February 2018 - June 2020"
        subTitles={["Web system for customer management"]}
        responsibilities={[
          [
            "Implemented credit card payment and direct debit backend functionality using Paygent's API",
            "Created an API backend in PHP to receive application data from external systems",
            "Developed a batch process to generate invoices for a substantial volume of data, scheduled to run via Cron at a designated time each day",
          ],
        ]}
      />
    </>
  );
};

export default Career;
