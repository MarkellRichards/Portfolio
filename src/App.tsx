import React from "react";
import { Route, useParams, Switch } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Layout from "./shared/Layout";
import { projectData } from "./Data/Copywrite";
import ProjectInfo from "./Pages/Portfolio/ProjectInfo";
import ContactForm from "./Pages/Contact";
import NotFound from "./Errors/NotFound";

type ProjectParams = {
  id: string;
};

const ProjectInfoPage = () => {
  let { id } = useParams<ProjectParams>();

  return (
    <ProjectInfo
      project={projectData.filter((project) => project.id === parseInt(id))[0]}
    />
  );
};

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/portfolio/:id" component={ProjectInfoPage} />
          <Route path="/contact" component={ContactForm} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
