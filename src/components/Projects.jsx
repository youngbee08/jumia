import React from "react";
import Card from "./Card";
import { useState } from "react";
import Button from "./Button";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const projects = [
    {
      title: "Website",
      descrpition:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas error aspernatur.",
      type: "featured",
    },
    {
      title: "Website",
      descrpition:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas error aspernatur.",
      type: "featured",
    },
    {
      title: "site",
      descrpition:
        "Lorem, iptur adipisicing elit. Repellendus quas error aspernatur.",
      type: "personal",
    },
    {
      title: "site",
      descrpition:
        "Lorem, iptur adipisicing elit. Repellendus quas error aspernatur.",
      type: "personal",
    },
    {
      title: "site",
      descrpition:
        "Lorem, iptur adipisicing elit. Repellendus quas error aspernatur.",
      type: "personal",
    },
    {
      title: "site",
      descrpition:
        "Lorem, iptur adipisicing elit. Repellendus quas error aspernatur.",
      type: "personal",
    },
  ];
  return (
    <div>
      <p>Projects</p>
      <div className="">
        <Button text={"Personal"} action={() => setActiveTab("personal")} />
        <Button text={"Featured"} action={() => setActiveTab("featured")} />
      </div>
      {projects.map((project, index) =>
        activeTab === project.type && (
          <Card project={project} index={index} />
        )
      )}
    </div>
  );
};

export default Projects;
