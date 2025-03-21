"use client";
import CreateProjects from "@/Components/ManageProjects/CreateProjects";
import MaintainProjects from "@/Components/ManageProjects/MaintainProjects";
import Link from "next/link";
import { useState } from "react";
import { BiExit } from "react-icons/bi";

const ProjectsPage = () => {
  const [activeSection, setActiveSection] = useState("create");

  return (
    <div className="min-h-screen flex bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6 shadow-lg">
        <Link className="flex items-center" href={"/dashboard"}>
          <BiExit className="text-5xl "></BiExit>REturn to dashboard
        </Link>
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <button
          className={`w-full mb-2 px-4 py-2 rounded-lg ${
            activeSection === "create" ? "bg-blue-600" : "bg-gray-700"
          }`}
          onClick={() => setActiveSection("create")}
        >
          ➕ Create Project
        </button>
        <button
          className={`w-full px-4 py-2 rounded-lg ${
            activeSection === "maintain" ? "bg-blue-600" : "bg-gray-700"
          }`}
          onClick={() => setActiveSection("maintain")}
        >
          🔧 Maintain Project
        </button>
      </aside>

      {/* Main Section */}
      <main className="flex-1 p-8">
        {activeSection === "create" && <CreateProjects />}
        {activeSection === "maintain" && <MaintainProjects />}
      </main>
    </div>
  );
};

export default ProjectsPage;
