"use client";
import { timeline } from "@/constants/timeline";
import React from "react";
import { Paragraph } from "./Paragraph";
import { Heading } from "./Heading";
import { IconCircleCheckFilled } from "@tabler/icons-react";

export const WorkHistory = () => {
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20"
      >
        My work history
      </Heading>
      {timeline.map((item, index) => (
        <div
          className="flex md:flex-row flex-col space-y-10 md:space-y-0 space-x-10 my-20 relative"
          key={`timeline-${index}`}
        >
          <Paragraph className="w-40">{item.date}</Paragraph>
          <div>
            <Heading
              as="h5"
              className="text-lg md:text-lg lg:text-lg text-emerald-500"
            >
              {item.company}
            </Heading>
            <Paragraph className="text-base md:text-base lg:text-base font-semibold">
              {item.title}
            </Paragraph>
            <Paragraph className="text-sm md:text-sm lg:text-sm mb-4">
              {item.description}
            </Paragraph>
            <ul>
              {item.responsibilities.map((responsibility, index) => (
                <Step key={responsibility}>{responsibility}</Step>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

const Step = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="flex space-x-1 items-start my-2">
      <IconCircleCheckFilled className="w-4 h-2 mt-1 text-muted-foreground" />
      <Paragraph className=" text-sm md:text-sm lg:text-sm">
        {children}
      </Paragraph>
    </li>
  );
};
