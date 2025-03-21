// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
// import React, { useState } from "react";
// import CreateProjects from "../ManageProjects/CreateProjects";
// import MaintainProjects from "../ManageProjects/MaintainProjects";
// import CreateBlogs from "../ManageBlogs/CreateBlogs";
// import MaintainBlogs from "../ManageBlogs/MaintainBlogs";
// type Tuser = {
//   user?: {
//     name?: string | null | undefined;
//     email?: string | null | undefined;
//     image?: string | null | undefined;
//   };
// };
// const DashboardComp = ({ user }: { user: Tuser | null }) => {
//   const [activeSection, setActiveSection] = useState("manageProjects");
//   const [openDropdown, setOpenDropdown] = useState(null);
//   console.log(user);
//   const toggleDropdown = (menu: any) => {
//     setOpenDropdown(openDropdown === menu ? null : menu);
//   };
//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 min-h-screen bg-gray-900 text-white p-5 flex flex-col space-y-4">
//         <h1 className="text-2xl font-bold">
//           Dashboard! Welcome {user?.user?.name}
//         </h1>

//         {/* Projects Dropdown */}
//         <div>
//           <button
//             className="py-2 px-4 w-full text-left bg-gray-800 rounded"
//             onClick={() => toggleDropdown("projects")}
//           >
//             Projects
//           </button>
//           {openDropdown === "projects" && (
//             <div className="ml-4 mt-2 space-y-2">
//               <button
//                 className="py-2 px-4 w-full text-left hover:bg-gray-700"
//                 onClick={() => setActiveSection("createProject")}
//               >
//                 Create Project
//               </button>
//               <button
//                 className="py-2 px-4 w-full text-left hover:bg-gray-700"
//                 onClick={() => setActiveSection("manageProjects")}
//               >
//                 Manage Projects
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Blogs Dropdown */}
//         <div>
//           <button
//             className="py-2 px-4 w-full text-left bg-gray-800 rounded"
//             onClick={() => toggleDropdown("blogs")}
//           >
//             Blogs
//           </button>
//           {openDropdown === "blogs" && (
//             <div className="ml-4 mt-2 space-y-2">
//               <button
//                 className="py-2 px-4 w-full text-left hover:bg-gray-700"
//                 onClick={() => setActiveSection("createBlog")}
//               >
//                 Create Blog
//               </button>
//               <button
//                 className="py-2 px-4 w-full text-left hover:bg-gray-700"
//                 onClick={() => setActiveSection("manageBlogs")}
//               >
//                 Manage Blogs
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Messages Dropdown */}
//         <div>
//           <button
//             className="py-2 px-4 w-full text-left bg-gray-800 rounded"
//             onClick={() => toggleDropdown("messages")}
//           >
//             Messages
//           </button>
//           {openDropdown === "messages" && (
//             <div className="ml-4 mt-2 space-y-2">
//               <button
//                 className="py-2 px-4 w-full text-left hover:bg-gray-700"
//                 onClick={() => setActiveSection("viewMessages")}
//               >
//                 View Messages
//               </button>
//             </div>
//           )}
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1">
//         {activeSection === "createProject" && <CreateProjects />}
//         {activeSection === "manageProjects" && <MaintainProjects />}
//         {activeSection === "createBlog" && <CreateBlogs />}
//         {activeSection === "manageBlogs" && <MaintainBlogs />}
//         {/* {activeSection === "viewMessages" && <Messages />} */}
//       </main>
//     </div>
//   );
// };

// export default DashboardComp;
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRouter } from "next/navigation";
type Tuser = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};
const DashboardComp = ({ user }: { user: Tuser | null }) => {
  // const [activeSection, setActiveSection] = useState("manageProjects");
  // const [openDropdown, setOpenDropdown] = useState(null);
  // console.log(user);
  // const toggleDropdown = (menu: any) => {
  //   setOpenDropdown(openDropdown === menu ? null : menu);
  // };
  const router = useRouter();
  const handleNavigate = (r: any) => {
    router.push(r);
  };
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      {/* Navbar */}
      <nav className="w-full max-w-6xl flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold">
          🚀 My Dashboard Welcome {user?.user?.name}
        </h1>
      </nav>

      {/* Button Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {/* Projects Button */}
        <div
          className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center hover:bg-gray-700 cursor-pointer"
          onClick={() => handleNavigate("/dashboard/projects")}
        >
          <h2 className="text-xl font-semibold mb-2">📁 Projects</h2>
          <p className="text-gray-400">Manage your projects easily</p>
        </div>

        {/* Messages Button */}
        <div
          className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center hover:bg-gray-700 cursor-pointer"
          onClick={() => handleNavigate("/dashboard/messages")}
        >
          <h2 className="text-xl font-semibold mb-2">💬 Messages</h2>
          <p className="text-gray-400">Check your latest messages</p>
        </div>

        {/* Blog Button */}
        <div
          className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center hover:bg-gray-700 cursor-pointer"
          onClick={() => handleNavigate("/dashboard/blogs")}
        >
          <h2 className="text-xl font-semibold mb-2">📝 Blog</h2>
          <p className="text-gray-400">Read and share articles</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardComp;
