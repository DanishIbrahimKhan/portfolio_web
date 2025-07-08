const projectShow = [
  {
    screenShot: "https://raw.githubusercontent.com/DanishIbrahimKhan/assets/main/sanlamSS.png",
    title: "Sanlam Maroc - Online Insurance Service",
    description: `
      I played a key role in developing the Online Car Insurance Service Page for Sanlam Maroc. The project aimed to provide users with a streamlined and efficient process for obtaining car insurance quotes and services online.<br /><br />
      <strong>Key Contributions:</strong><br />
      <ul style="list-style: disc; margin-left: 1.2rem">
        <li><strong>User-Friendly Interface:</strong> Designed an intuitive and visually appealing interface that guides users through the car insurance process.</li>
        <li><strong>Quote Simulation Tool:</strong> Developed a simulation feature for real-time insurance quotes.</li>
        <li><strong>Camera Functionality:</strong> Integrated camera access for uploading vehicle images.</li>
        <li><strong>Informative Sections:</strong> Structured content to help users understand insurance plans quickly.</li>
      </ul>
    `,
  },
  {
    screenShot: "https://raw.githubusercontent.com/DanishIbrahimKhan/assets/main/quetelo.jpg",
    title: "Quotelo – Smart Booking Platform for Meetings & Events",
    description: `
      Quotelo is a French SaaS platform for managing quotations and invoices in the events sector.<br /><br />
      <strong>Key Contributions:</strong><br />
      <ul style="list-style: disc; margin-left: 1.2rem">
        <li><strong>Responsive UI:</strong> Built mobile-friendly layouts with React.js and Tailwind CSS.</li>
        <li><strong>Localization:</strong> Integrated French translation using <code>next-i18next</code>.</li>
        <li><strong>API Integration:</strong> Connected dynamic quote and booking data via RESTful APIs.</li>
        <li><strong>Team Collaboration:</strong> Worked with cross-functional teams to deliver consistent UX.</li>
      </ul>
    `,
  },
  {
    screenShot: "https://raw.githubusercontent.com/DanishIbrahimKhan/assets/main/343c65f54ca652598d01f48046e894cf.jpg",
    title: "Fisheries & Aquaculture Management Portal – Government of Morocco",
    description: `
      A web platform created for Morocco's government to streamline aquaculture licensing and compliance workflows.<br /><br />
      <strong>Key Contributions:</strong><br />
      <ul style="list-style: disc; margin-left: 1.2rem">
        <li><strong>Full-Stack Role:</strong> Built frontend (React.js) and connected with secure backend APIs.</li>
        <li><strong>Organization Registration:</strong> Developed multi-step forms with validation and uploads.</li>
        <li><strong>Legal Verification:</strong> Created workflows for agency approvals and compliance checks.</li>
        <li><strong>UX Optimization:</strong> Designed simple flows for non-technical government users.</li>
      </ul>
    `,
  },
];

export default function Home() {
  return (
    <>
      {projectShow.map((project, index) => (
        <div className="px-2" key={index}>
          {/* Project Showcase Card */}
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg mb-2">
            <div className="relative w-full h-auto">
              {/* Mac PNG Frame */}
              <img
                src="https://raw.githubusercontent.com/DanishIbrahimKhan/assets/main/macbook-air-medium.png"
                alt="Mac frame"
                className="w-full h-auto z-10"
              />
              {/* Website Screenshot Inside Mac */}
              <div className="absolute top-[5%] left-[11%] w-[78%] h-[86%] z-0 overflow-hidden">
                <img
                  src={project.screenShot}
                  alt="Website screenshot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p
                className="text-gray-600 mt-2 whitespace-pre-line text-left"
                dangerouslySetInnerHTML={{ __html: project.description.replace(/\n/g, "<br/>") }}
              ></p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
