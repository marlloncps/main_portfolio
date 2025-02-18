import { useEffect, useRef } from "react";

const technologies = [
  "HTML5",
  "CSS3",
  "git",
  "javaScript",
  "typeScript",
  "react",
  "MaterialUi",
  "lua",
  "nodejs",
  "mongoDB",
  "mysql",
  "aws",
  "bash",
];

const ScrollingTechnologies = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseEnter = () => container.classList.add("paused");
    const handleMouseLeave = () => container.classList.remove("paused");

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden py-8">
      {/* Gradientes nas laterais */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-20" />

      {/* Container rolável */}
      <div
        ref={containerRef}
        className="flex gap-12 md:gap-20 w-max animate-scroll hover:animate-paused"
      >
        {[...technologies, ...technologies, ...technologies].map(
          (tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 group transition-all duration-300"
            >
              <img
                src={`/svg/${tech}.svg`}
                alt={tech}
                className="h-7 w-auto object-contain transition-transform group-hover:scale-110 opacity-60"
                width="30"
                height="30"
                loading="lazy"
              />
              <span className="text-lg font-medium text-[var(--white-icon)]">
                {tech !== "mongoDB" &&
                  tech.charAt(0).toUpperCase() + tech.slice(1)}
              </span>
            </div>
          )
        )}
      </div>

      {/* Estilos Globais */}
      <style>
        {`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 60s linear infinite;
          }
          .animate-paused {
            animation-play-state: paused;
          }
          @media (min-width: 768px) {
            .animate-scroll {
              animation-duration: 50s;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ScrollingTechnologies;
