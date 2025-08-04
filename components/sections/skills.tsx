"use client";

import { useEffect, useRef } from "react";

interface Technology {
  name: string;
  icon: string;
  category: string;
}

const technologies: Technology[] = [
  { name: "React", icon: "⚛️", category: "Frontend" },
  { name: "Next.js", icon: "▲", category: "Framework" },
  { name: "TypeScript", icon: "📘", category: "Language" },
  { name: "JavaScript", icon: "🟨", category: "Language" },
  { name: "Node.js", icon: "🟢", category: "Backend" },
  { name: "MongoDB", icon: "🍃", category: "Database" },
  { name: "PostgreSQL", icon: "🐘", category: "Database" },
  { name: "AWS", icon: "☁️", category: "Cloud" },
  { name: "Git", icon: "📚", category: "Tools" },
  { name: "Tailwind CSS", icon: "🎨", category: "Styling" },
  { name: "Redux", icon: "🔄", category: "State Management" },
  { name: "Express.js", icon: "🚀", category: "Backend" },
  { name: "Firebase", icon: "🔥", category: "Backend" },
  { name: "Vercel", icon: "▲", category: "Deployment" },
  { name: "Figma", icon: "🎨", category: "Design" },
];

export function Skills() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Clone the content for seamless loop
    const scrollerContent = Array.from(scroller.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scroller.appendChild(duplicatedItem);
    });
  }, []);

  return (
    <section className="py-20">
      <div className="relative">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tech{" "}
            <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life and build
            scalable solutions.
          </p>
        </div>

        {/* Scrolling Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10" />

          {/* Scroller */}
          <div className="overflow-hidden">
            <div
              ref={scrollerRef}
              className="flex gap-6 animate-scroll"
              style={{
                animation: "scroll 30s linear infinite",
              }}
            >
              {technologies.map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-blue-300 transition-all duration-300 min-w-[200px]">
                    <div className="text-center">
                      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <h3 className="text-gray-900 font-semibold mb-1">
                        {tech.name}
                      </h3>
                      <p className="text-gray-500 text-sm">{tech.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
