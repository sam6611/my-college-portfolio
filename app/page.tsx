"use client";

import Image from "next/image";
import { useState } from "react";
import Animation1 from "./animation"
import { useRouter } from "next/navigation";
import {
  SiC,
  SiCplusplus,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiJira,
  SiPython,
  SiReact,
} from "react-icons/si";

export default function Home() {
  const [page, setPage] = useState<
    "Home" | "About" | "Projects" | "Experience" | "Contact" | "Skills"
    >("Home");
  const router = useRouter();

  const icons = [
    // Languages
    { Icon: SiCplusplus, label: "C++", color: "text-[#00599C]" },
    { Icon: SiJavascript, label: "JavaScript", color: "text-[#F7DF1E]" },
    { Icon: SiC, label: "C", color: "text-[#00599C]" },
    { Icon: SiPython, label: "Python", color: "text-[#3776AB]" },
    // { Icon: SiJava, label: "Java", color: "text-[#007396]" },
    // Frameworks
    { Icon: SiHtml5, label: "HTML", color: "text-[#E34F26]" },
    // { Icon: SiCss3, label: "CSS", color: "text-[#1572B6]" },
    { Icon: SiReact, label: "React", color: "text-[#61DAFB]" },
    { Icon: SiNodedotjs, label: "Node.js", color: "text-[#339933]" },
    // Tools / Platforms
    { Icon: SiMysql, label: "MySQL", color: "text-[#4479A1]" },
    { Icon: SiMongodb, label: "MongoDB", color: "text-[#47A248]" },
    // { Icon: SiOracle, label: "Oracle APEX", color: "text-[#F80000]" },
    { Icon: SiGit, label: "Git", color: "text-[#F05032]" },
    { Icon: SiGithub, label: "GitHub", color: "text-[#181717]" },
    { Icon: SiJira, label: "JIRA", color: "text-[#0052CC]" },
    // { Icon: SiPowerbi, label: "Power BI", color: "text-[#F2C811]" },
  ];
    const tile = (Icon : any, label:any, color:any) => (
      <div
        key={label + Math.random()}
        className="relative flex-shrink-0 w-20 h-20 rounded-xl flex items-center justify-center hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 group"
        aria-hidden={false}
      >
        <Icon className={`text-6xl ${color}`} title={label} aria-label={label} />
        {/* tooltip shown on hover */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-black/80 text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {label}
        </div>
      </div>
    );
    const loopIcons = [...icons, ...icons];

    const skillCategories = [
    {
      title: "Programming",
      skills: ["C", "C++", "Java", "Python", "JavaScript", "HTML"]
    },
    {
      title: "Data Analytics",
      skills: ["SQL", "Excel", "Pandas", "NumPy", "Scikit-learn", "SciPy"]
    },
    {
      title: "Visualization",
      skills: ["Power BI", "Matplotlib", "Plotly"]
    },
    {
      title: "Cloud",
      skills: ["AWS", "Azure", "Google Cloud"]
    },
    {
      title: "Design",
      skills: ["Figma", "Canva", "Sketch"]
    },
    {
      title: "Tools",
      skills: ["Oracle", "Jira", "Trello"]
    }
  ];


  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900">
      {/* NAVBAR */}

      <nav className="sticky top-0 z-50 flex justify-between items-center px-12 py-5 bg-white/70 backdrop-blur-xl border-b border-gray-200">
        <h1 className="font-semibold text-lg">Satyam.dev</h1>

        <div className="flex gap-8 text-gray-600 text-sm font-medium">
          {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => setPage(item as any)}
                className={`hover:text-black transition ${
                  page === item ? "text-black font-semibold" : ""
                }`}
              >
                {item}
              </button>
            )
          )}
        </div>

        <a
          href="/satcv.pdf"
          className="bg-black text-white px-5 py-2 rounded-lg text-sm hover:scale-105 transition"
        >
          Resume
        </a>
      </nav>

      {/* HOME */}

      {page === "Home" && (
        <section className="grid md:grid-cols-2 gap-20 px-12 py-24 items-center">
          <div>
            <h1 className="text-6xl font-bold leading-tight font-[var(--font-poppins)]">
              Satyam Sachan <br />
              <span className="bg-gradient-to-r from-[#0C7779] to-[#005461] bg-clip-text text-transparent">
             Data Scientist
              </span>
            </h1>

            <p className="text-gray-600 mt-6 max-w-lg text-lg leading-relaxed">
              Computer Science undergraduate at Lovely Professional University
              specializing in database systems, and data
              analysis.
            </p>

            <div className="flex gap-5 mt-10">
              <button
                onClick={() => setPage("Projects")}
                className="bg-black text-white px-7 py-3 rounded-xl font-medium hover:scale-105 transition shadow-md"
              >
                View Projects
              </button>

              <button
                onClick={() => setPage("Contact")}
                className="border border-gray-300 px-7 py-3 rounded-xl text-sm hover:bg-gray-100 transition"
              >
                Contact Me
              </button>
            </div>

            <div className="flex gap-16 mt-16 text-sm">
              <div>
                <p className="text-2xl font-bold">2+</p>
                <p className="text-gray-500">Major Projects</p>
              </div>

              <div>
                <p className="text-2xl font-bold">100+</p>
                <p className="text-gray-500">LeetCode Problems</p>
              </div>

              <div>
                <p className="text-2xl font-bold">2027</p>
                <p className="text-gray-500">Graduation</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-200">
              <Image
                src="/abcde.jpeg"
                width={350}
                height={450}
                alt="profile"
                className="rounded-xl"
              />
            </div>
          </div>
        </section>
      )}

      {/* ABOUT */}

      {page === "About" && (
        <div className="px-12 py-24 space-y-24">
          {/* ABOUT INTRO */}

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="text-xl">
              <h1 className="text-6xl font-bold mb-6">
                About <span className="text-[#005461]">Me</span>
              </h1>

              <p className="text-gray-600 leading-relaxed">
                I'm a Computer Science undergraduate at Lovely Professional
                University specializing in web development, database systems,
                and data analysis.
              </p>

              <p className="text-gray-600 mt-4 leading-relaxed">
                I enjoy building end-to-end products — from clean UIs to
                reliable database-backed APIs — and using data to guide product
                decisions.
              </p>
            </div>

            <Image
              src="/about.jpg"
              alt="about"
              width={500}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* ACHIEVEMENTS */}

          <div>
            <h2 className="text-3xl font-bold mb-10">Achievements</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-lg">
                  Solved 100+ questions on LeetCode
                </h3>

                <p className="text-gray-600 text-sm mt-2">
                  Consistently practiced DSA and problem solving on LeetCode to
                  strengthen algorithms and coding fundamentals.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-lg">
                  Solved 100+ questions on GeeksforGeeks
                </h3>

                <p className="text-gray-600 text-sm mt-2">
                  Built strong foundations across core topics through regular
                  problem solving on GeeksforGeeks.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-lg">
                  HackerRank: 5 Star in C++
                </h3>

                <p className="text-gray-600 text-sm mt-2">
                  Earned a 5-star rating in C++ on HackerRank through consistent
                  practice and performance.
                </p>
              </div>
            </div>
          </div>

          {/* CERTIFICATES */}

          <div>
            <h2 className="text-3xl font-bold mb-10">Certificates</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Certificate 1 */}

              <div
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition overflow-hidden"
                onClick={() => {
                  window.open(
                    "https://www.hackerrank.com/skills-verification/sql_advanced"
                  );
                }}
              >
                <Image
                  src="/sql(advanced).png"
                  alt="SQL Advanced Certificate"
                  width={500}
                  height={300}
                />

                <div className="p-5">
                  <h3 className="font-semibold text-lg">
                    SQL Advanced Certificate — HackerRank
                  </h3>

                  <p className="text-gray-600 text-sm mt-2">
                    Earned in February 2026, covering advanced SQL concepts and
                    problem solving.
                  </p>
                </div>
              </div>

              {/* Certificate 2 */}

              <div
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition overflow-hidden"
                onClick={() => {
                  window.open(
                    "https://neocolab.com/"
                  );
                }}
              >
                <Image
                  src="/DSA.png"
                  alt="DSA Certificate"
                  width={500}
                  height={300}
                />

                <div className="p-5">
                  <h3 className="font-semibold text-lg">
                    Data Structures and Algorithms — NeoColab
                  </h3>

                  <p className="text-gray-600 text-sm mt-2">
                    Completed in December 2024, focused on core DSA concepts and
                    problem solving.
                  </p>
                </div>
              </div>

              {/* Certificate 4 */}
              <div
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition overflow-hidden"
                onClick={() => {
                  window.open("https://www.nextleap.app/");
                }}
              >
                <Image
                  src="/iit.png"
                  alt="Product Management Workshop Certificate"
                  width={500}
                  height={300}
                />

                <div className="p-5">
                  <h3 className="font-semibold text-lg">
                    Workshop on Product Management — Nextleap
                  </h3>

                  <p className="text-gray-600 text-sm mt-2">
                    Completed in December 2023, focused on product thinking and
                    fundamentals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* EDUCATION */}
          <div>
            <h2 className="text-3xl font-bold mb-10">Education</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-lg">
                  B.Tech in Computer Science & Engineering
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Lovely Professional University, Phagwara, Punjab
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  August 2023 – Present | CGPA: 7.23
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-lg">Intermediate (12th)</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Aims International School, Gonda, Uttar Pradesh
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  April 2020 – March 2022 | 67%
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-lg">Matriculation (10th)</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Aims International School, Gonda, Uttar Pradesh
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  April 2018 – March 2020 | 84%
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Skills */}

      {page === "Skills" && (
        <section id="skills" className="py-20  text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-6xl font-bold text-center mb-14 text-black">
          My <span className="text-[#005461]">Skills</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-700 rounded-md text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section> 
      )}

      {/* PROJECTS */}

      {page === "Projects" && (
        <div className="px-12 py-24">
          <h1 className="text-5xl font-bold mb-16">
            Selected <span className="text-[#005461]">Projects</span>
          </h1>

          <div className="grid md:grid-cols-3 gap-10">
            {/* PROJECT */}

            <div
              className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition overflow-hidden"
              onClick={() => {
                window.open("https://github.com/sam6611/Customer-Churn-Retention-Analysis-Power-BI-Dashboard");
              }}
            >
              <Image src="/dashproject.png" alt="" width={600} height={400} />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Customer Churn & Retention Analysis (Nov 2025)
                </h3>

                <p className="text-gray-600 text-sm">
                  Interactive Power BI dashboard analyzing customer churn and
                  retention across 7,000+ records. Identified churn patterns by
                  contract type, tenure, and service usage — enabling retention
                  strategies that could reduce churn by ~8–12%. Tech: Power BI,
                  DAX, Microsoft Excel, Data Analysis & Visualization.
                </p>
              </div>
            </div>

            <div
              className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition overflow-hidden"
              onClick={() => {
                window.open("https://github.com/sam6611/Faculty-Leave-Management-System-");
              }}
            >
              <Image src="/crop.png" alt="" width={600} height={400} />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Faculty Leave Management System (Jul 2025)
                </h3>

                <p className="text-gray-600 text-sm">
                  Streamlined faculty leave approval using Oracle APEX and
                  PL/SQL with 4 automated triggers for Gmail validation, leave
                  quota monitoring, overlap detection, and auto log updates —
                  reducing manual effort and improving data integrity. Tech:
                  Oracle APEX, PL/SQL, Triggers, Regex, MySQL.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* EXPERIENCE */}

      {page === "Experience" && (
        <div className="px-12 py-24 max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-16">
             <span className="text-[#005461]">Training</span>
          </h1>

          {/* EXPERIENCE ITEM */}

          <div className="grid md:grid-cols-[120px_1fr] gap-10 items-start">
            {/* Company Logo */}

            <div className="flex justify-center md:justify-start">
              <img
                src="/company.png"
                alt="Egel Softwares"
                className="w-20 h-20 object-contain border border-gray-200 rounded-xl p-2"
              />
            </div>

            {/* Experience Content */}

            <div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-semibold">
                    CodeQuery — PL/SQL & Data Science Training
                  </h2>

                  <div className="flex items-center gap-3 mt-1">
                    <p className="text-[#005461] font-semibold">
                      CodeQuery
                    </p>

                    <a
                      href="https://www.linkedin.com/in/satyam-sachan89/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>

                <p className="text-gray-500 text-sm mt-2 md:mt-0">
                  June 2025 – August 2025
                </p>
              </div>

              {/* WORK DETAILS */}

              <ul className="space-y-4 text-gray-600 leading-relaxed">
                <li>
                  Hands-on experience writing, debugging, and optimizing PL/SQL
                  queries, procedures, and functions.
                </li>

                <li>
                  Worked with Oracle APEX, triggers, cursors, and exception
                  handling to automate workflows and enforce data integrity.
                </li>

                <li>
                  Built real-time database projects integrating front-end
                  interfaces with backend logic.
                </li>
              </ul>

              {/* TECH STACK */}

              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  "Oracle APEX",
                  "PL/SQL",
                  "Triggers",
                  "Cursors",
                  "Query Optimization",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm text-white bg-zinc-800 rounded-full border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CONTACT */}

      {page === "Contact" && (
        <div className="px-12 py-24">
          <h1 className="text-4xl font-bold mb-12">
            Contact <span className="text-[#005461]">Me</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 ">
              {[
                ["Email", "satyamsachan6611@gmail.com"],
                ["Mobile", "+91-8957186611"],
                ["GitHub", "https://github.com/sam6611"],
                ["LinkedIn", "https://www.linkedin.com/in/satyam-sachan89/"],
              ].map(([title, value]) => (
                <div
                  key={title}
                  className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
                >
                  <p className="text-sm text-gray-500">{title}</p>
                  <p className="text-blue-600 cursor-pointer" onClick={()=>{window.open(`${value}`)}}>{value}</p>
                </div>
              ))}
            </div>

            <form className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md space-y-4">
              <input
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <textarea
                placeholder="Message"
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <button className="bg-black text-white px-6 py-3 rounded-lg w-full hover:scale-105 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Tools and Tech  */}
      <section
        id="tools"
        className="!py-20 overflow-hidden relative text-gray-900 font-[var(--font-inter)]"
      >
        <div className="w-full mx-auto px-6 bg-transparent">
          {/* Single scrolling row */}
          <div className="relative h-auto">
            <div className="flex overflow-hidden">
              <div className="flex animate-scroll-right space-x-8 gap-12">
                {loopIcons.map((item, idx) =>
                  tile(
                    item.Icon || item,
                    item.label || `icon-${idx}`,
                    item.color
                  )
                )}
              </div>
              <div className="absolute inset-y-0 right-0 w-80 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>

              {/* Left fade */}
              <div className="absolute inset-y-0 left-0 w-80 bg-gradient-to-r from-gray-50 via-gray-50 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>

        <div className="flex absolute bottom-0">
          <Animation1 />
        </div>

        <style jsx>{`
          @keyframes scrollRight {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0%);
            }
          }

          /* make the animation continuous and smooth.
                 adjust duration to speed up/slow down (e.g., 60s -> slower) */
          .animate-scroll-right {
            animation: scrollRight 60s linear infinite;
          }
        `}</style>
      </section>
    </main>
  );
}
