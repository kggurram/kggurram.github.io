import React from "react";
import Image from "next/image";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="mb-8 flex flex-col lg:flex-row gap-4">
      <div className="w-full lg:w-1/3">
        <div className="lg:p-4 flex flex-row sm:flex-row lg:flex-col items-start sm:items-center lg:items-start lg:gap-4 sm:gap-8 gap-8">
          {experience.logo && (
            <img
              src={experience.logo}
              alt={`${experience.company} logo`}
              className="lg:w-16 lg:h-16 h-24 w-24 object-contain rounded-xl my-auto"
            />
          )}
          <div>
            <h3 className="text-xl font-bold text-foreground">
              {experience.title}
            </h3>
            <p className="text-lg text-foreground-mid mb-2">
              {experience.company}
            </p>
            <p className="text-sm text-foreground-mid">{experience.duration}</p>
            <p className="text-sm text-foreground-mid">{experience.location}</p>
          </div>
        </div>
      </div>
      <div className="w-full xs:w-2/3 lg:px-4">
        <ul className="list-disc lg:list-outside list-outside text-md space-y-2 ml-4">
          {experience.description.map((item, index) => (
            <li key={index} className="text-foreground-mid">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-4 mb-10 flex flex-wrap gap-y-3">
          {experience.technologies.map((tech, index) => (
            <span
              key={index}
              className="ml-3 px-3 py-1 text-gray-400 text-sm bg-gray-700/25 text-foreground shadow rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
