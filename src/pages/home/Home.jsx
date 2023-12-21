import "./home.scss";
import Front from "../../components/front/Front";
import About from "../../components/about/About";
import Projects_home from "../../components/projects_home/Projects_home";
import Break from "../../components/break/Break";

function Home() {
  return (
    <>
    <div className="home">
      <Front />
      <Break />
      <About />
      <Projects_home />
    </div>
    </>
  );
};

export default Home
