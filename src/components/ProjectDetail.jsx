import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const PROJECTS = [
  {
    id: 0,
    title: "Solitude in Light",
    category: "Portrait Photography",
    year: "2024",
    description:
      "A study in natural light and shadow, exploring the quiet moments between stillness and movement. Each frame captured at the golden hour, tracing the contours of solitude through a contemporary lens.",
    tags: ["Photography", "Portrait", "Fine Art"],
    image:
      "https://images.unsplash.com/photo-1774606570918-aa9d70b2932b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1,
    title: "Urban Cartography",
    category: "Architecture & Space",
    year: "2024",
    description:
      "Mapping the invisible grammar of cities — the way facades speak, streets breathe, and buildings lean into each other like old friends. A visual language for the built environment.",
    tags: ["Architecture", "Urban", "Documentary"],
    image:
      "https://images.unsplash.com/photo-1774523195578-121a2d1da490?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Chromatic Fields",
    category: "Abstract Colour Study",
    year: "2023",
    description:
      "An immersive investigation into the emotional resonance of colour as a primary subject. No objects, no narratives — only the raw experience of chromatic tension and release.",
    tags: ["Abstract", "Colour", "Installation"],
    image:
      "https://images.unsplash.com/photo-1773772255047-74744067601e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Temporal Drift",
    category: "Long Exposure Series",
    year: "2023",
    description:
      "Time made visible. Long exposures stretching seconds into luminous trails, transforming the ordinary flow of life into something closer to memory — impressionistic, layered, irreversible.",
    tags: ["Photography", "Long Exposure", "Time"],
    image:
      "https://images.unsplash.com/photo-1749303544314-cb8ec06223d5?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Verdant Systems",
    category: "Nature & Botany",
    year: "2022",
    description:
      "Nature as infrastructure. Botanical forms examined through the lens of systems thinking — root networks, branching hierarchies, and the elegant logic that underpins all organic growth.",
    tags: ["Botany", "Nature", "Systems"],
    image:
      "https://images.unsplash.com/photo-1775119221769-6b0af28704ed?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Still Life, Moving",
    category: "Object & Materiality",
    year: "2022",
    description:
      "Objects caught mid-gesture. A re-examination of the still life tradition — surfaces, textures, and the uncanny sense that every object is in the process of becoming something else entirely.",
    tags: ["Still Life", "Material", "Contemporary"],
    image:
      "https://images.unsplash.com/photo-1775563655673-c28ac3802166?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const detail = PROJECTS[parseInt(id)];

  const next = PROJECTS[(parseInt(id) + 1) % PROJECTS.length];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [id]);

  return (
    <div className="px-[3vw]">
      <div className="info h-[40vh] flex flex-col justify-end   w-full ">
        <div className="information w-[40%] text-balance">
          <p className="text-[2.2rem] leading-[1.1] font-[530]">
            {detail.description}
          </p>
        </div>
        <div className="moreinfo mt-[2.5vw] flex gap-[15vw] ">
          <div className="title">
            <div className="head">
              <h3 className="text-[1.7rem] font-[500]">Title</h3>
            </div>
            <div className="content">
              <h3 className="text-[2.2rem] font-[540]">{detail.title}</h3>
            </div>
          </div>
          <div className="category">
            <div className="head">
              <h3 className="text-[1.7rem] font-[500]">Category</h3>
            </div>
            <div className="content">
              <h3 className="text-[2.2rem] font-[540]">{detail.category}</h3>
            </div>
          </div>
          <div className="tags">
            <div className="head">
              <h3 className="text-[1.7rem] font-[500]">Tags</h3>
            </div>
            <div className="content mt-[1rem]">
              {detail.tags.map((tag) => {
                return (
                  <h3 className="text-[1.9rem] leading-[1] font-[540]">
                    {tag}
                  </h3>
                );
              })}
            </div>
          </div>
          <div className="year">
            <div className="head">
              <h3 className="text-[1.7rem] font-[500]">Year</h3>
            </div>
            <div className="content">
              <h3 className="text-[2.2rem] font-[540]">{detail.year}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="mockups my-[2vw]">
        <div className="firstImage h-screen w-full">
          <img
            className="h-full w-full object-cover"
            src={detail.image}
            alt=""
          />
        </div>
        <div className="secondImage h-[120vh] w-full flex gap-[1.4rem] mt-[1.5rem] ">
          <div className="leftImage h-full w-[50%]">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1778426141078-50e2eb21ff2d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="rightImage h-full w-[50%]">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1779107940345-a4bf20499215?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div className="thirdImage h-[140vh] w-full mt-[1.5rem] ">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1779006887917-79a8034ee875?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        <div className="nextProject h-[35vh] w-full flex flex-col items-center justify-center ">
          <Link to={`/project/${next.id}`}>
            <h3 className="text-[2.3rem]">Next Project</h3>
          </Link>
          <h3 className="text-[2.1rem] text-[#dbdbdb]">{next.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
