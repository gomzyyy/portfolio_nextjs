import { darkTheme } from "@/hooks/useTheme";
import React, { useState } from "react";

const WhyHireMe = () => {
  const [selected, setSelected] = useState<
    "frontend" | "backend" | "fullstack"
  >("frontend");

  const tabData = {
    frontend: {
      title: "Frontend Developer",
      description:
        "I specialize in building visually appealing, interactive, and responsive web applications. My expertise includes React, Next.js, JavaScript, and CSS to create seamless user experiences.",
      skills: [
        "React.js",
        "Next.js",
        "Module Federation",
        "Tailwind CSS",
        "JavaScript",
        "TypeScript",
      ],
    },
    backend: {
      title: "Backend Developer",
      description:
        "I design and develop scalable and secure backend architectures using Node.js and Express. I handle API development, authentication, and database management efficiently.",
      skills: [
        "Node.js",
        "Express.js",
        "Micro services",
        "MongoDB",
        "RESTful APIs",
        "JWT Auth",
        "ejs",
      ],
    },
    fullstack: {
      title: "Full-Stack Developer",
      description:
        "Combining frontend and backend expertise, I build highly performant, user-friendly and scalable SEO-friendly applications. From designing UI to managing databases, I ensure seamless functionality.",
      skills: [
        "MERN Stack",
        "Next.js",
        "Module Federation",
        "Redux",
        "Serverless Functions",
        "WebSockets",
        "Web RTC",
      ],
    },
  };

  return (
    <div
      className="select-none"
      style={{
        backgroundColor: darkTheme.rootBg,
        color: darkTheme.textLight,
        padding: "20px",
        borderRadius: "12px",
        border: `1px solid ${darkTheme.border}`,
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <h2
        style={{ textAlign: "center", color: darkTheme.text }}
        className="font-bold text-xl mb-2"
      >
        Why Hire Me?
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "10px",
        }}
      >
        {["frontend", "backend", "fullstack"].map((type) => (
          <button
            key={type}
            onClick={() =>
              setSelected(type as "frontend" | "backend" | "fullstack")
            }
            style={{
              background:
                selected === type ? darkTheme.button : darkTheme.button1,
              color:
                selected === type ? darkTheme.textDark : darkTheme.textLight,
              border: "none",
              padding: "8px 16px",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            className="font-semibold"
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <div
        style={{
          background: darkTheme.rootBg,
          padding: "15px",
          borderRadius: "8px",
          color: darkTheme.textDark,
        }}
      >
        <h3 className="font-bold text-xl" style={{ color: darkTheme.text }}>
          {tabData[selected].title}
        </h3>
        <p className="" style={{ color: darkTheme.text }}>
          {tabData[selected].description}
        </p>
        <h4
          style={{ color: darkTheme.text }}
          className="underline font-semibold mt-2 mb-2"
        >
          Key Skills:
        </h4>
        <ul
          className="flex flex-wrap gap-2 border rounded-md justify-center px-4 py-2"
          style={{ borderColor: darkTheme.border }}
        >
          {tabData[selected].skills.map((skill, i) => (
            <ul
              key={skill}
              style={{
                listStyle: "disc",
                color: darkTheme.text,
                fontSize:14,
                lineHeight:1
              }}
              className="font-semibold smooth"
            >
              {skill}
              {i === tabData[selected].skills.length - 1 ? "" : ","}
            </ul>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhyHireMe;
