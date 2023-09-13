import AboutMe from "../components/about-me";

const Home = () => {
  return (
    <main className="px-4">
      <AboutMe />
      <h2 className="text-3xl font-bold mt-10">Career</h2>
      <h3>Full-Stack Web Developer</h3>
      <div>booost technologies</div>
      <div>November 2020 - September 2022</div>
      <h4>Web system to support decarbonation and customer management</h4>
      <ul>
        <li>
          Implemented a feature to calculate and check greenhouse gas emissions for each activity of an organization using Laravel and
          Vue.js. This feature has been patented
        </li>
        <li>Improved dashboard response speed and enhanced user experience through SQL optimization</li>
      </ul>
      <h4>Automated solution to enhance sales department operations</h4>
      <ul>
        <li>
          Retrieved data from a website using Selenium, saving text data to a database. Additionally, designeda user-friendly web app using
          Laravel and Vue.js, enabling the convenient download of the scraped data. This initiative significantly improved team efficiency
          and data accessibility
        </li>
      </ul>
      <h3>Full-Stack Web Developer</h3>
      <div>Self-employed</div>
      <div>July 2020 - October 2020</div>
      <h4>Web system to recruitment</h4>
      <ul>
        <li>
          Created a scraping environment using Docker to quickly and easily set up a development environment. As a result, the time needed
          to onboard new developers has been significantly minimized
        </li>
        <li>Implemented messaging functionality using React, Express, and Node.js</li>
      </ul>
      <h3>Backend Developer </h3>
      <div>Threet</div>
      <div>February 2018 - June 2020</div>
      <h4>Web system for customer management</h4>
      <ul>
        <li>Implemented credit card payment and direct debit backend functionality using Paygent's API</li>
        <li>Created an API backend in PHP to receive application data from external systems</li>
        <li>
          Developed a batch process to generate invoices for a substantial volume of data, scheduled to run via Cron at a designated time
          each day.
        </li>
      </ul>
    </main>
  );
};

export default Home;
