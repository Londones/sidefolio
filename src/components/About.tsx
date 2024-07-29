"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "/images/lux1.jpg",
    "/images/lux2.jpg",
    "/images/lux3.jpg",
    "/images/lux4.jpg",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl text-foreground">
        <Paragraph className=" mt-4">
          Heya there, I&apos;m Awa Bah - a developer, failed artist, and wannabe
          designer. Welcome to my corner of the digital space! Enjoy your stay.
        </Paragraph>
        <Paragraph className=" mt-4">
          A proud parisian at heart, I&apos;ve always been inspired by pretty
          things. From a young age, I was drawn to the allure of art, the magic
          of storytelling, and the logic of science. This trifecta of
          creativity, logic, and aesthetics led me to the world of web
          development, where I could blend my passions into beautiful,
          functional websites and applications.
        </Paragraph>

        <Paragraph className=" mt-4">
          Though this did not come to fruition as I would have liked. Failing
          getting into art school, I decided to pursue studies in English
          literature in which I ended up getting a degree. Knowing that I did
          not want to be a teacher, and having a passion for technology, I
          decided to go back to school.
        </Paragraph>
        <Paragraph className=" mt-4">
          I ended up getting a second degree, this time in computer science. I
          studied at the University of Paris 7 and graduated in 2022. I then
          went on to get a mastere&apos;s degree in web engineering at ESGI in
          2024 as a working student.
        </Paragraph>
        <Paragraph className=" mt-4">
          My adaptability, curiosity, and love for learning have allowed me to
          easily transition between different career paths. The challenges I
          faced also shaped me into a resilient and resourceful individual.
        </Paragraph>
        <Paragraph className=" mt-4">
          Through this website, I aim to share my journey, my learnings, and my
          art! I hope to inspire others to pursue their passions, embrace their
          creativity, and never stop learning. (By the way, this is my art you
          see up there!)
        </Paragraph>
        <Paragraph className=" mt-4">
          And if you&apos;ve read up until this part, thank you!
        </Paragraph>
      </div>
    </div>
  );
}
