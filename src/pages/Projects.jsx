import ProjectShowCard from "../components/ProjectShowCard";
import { getConfigData } from "../data/configReader";

export default function Home() {
  const configData = getConfigData();
  const projects = configData.projectShow;

  return (
    <>
      <div className="px-2">
        {projects.map((data, index) => (
          <ProjectShowCard title={data.title} description={data.description} screenShot={data.screenShot} />
        ))}
      </div>
    </>
  );
}
