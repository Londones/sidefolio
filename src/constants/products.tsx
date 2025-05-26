import tmls from "public/images/TMLS.png";
import luxy from "public/images/luxy.png";
import julia from "public/images/julia.png";
import radian from "public/images/radian.png";
import starfire from "public/images/starfire.png";

export const products = [
  {
    href: "https://starfire.lol",
    title: "Starfire",
    description: "A bingo editor",
    thumbnail: starfire,
    images: [starfire, starfire],
    stack: [
      "NextJS 15",
      "Typescript",
      "Tailwindcss",
      "Prisma",
      "PostgreSQL",
      "ReactJS 18",
    ],
    slug: "starfire",
    content: (
      <div>
        <p>
          Developed a NextJS-based bingo making app that allows users to create
          and customize bingo cards with personalized backgrounds, titles, and
          fonts. Automatically deployed on Vercel through GitHub Actions, it
          uses AWS S3 bucket for image management.
        </p>
        <p>
          The project is open source and you can find it on{" "}
          <a href="https://github.com/Londones/bingo-maker">GitHub</a>.
        </p>
      </div>
    ),
  },
  {
    href: "https://londones.github.io/too-many-lux-skins/",
    title: "Too Many Lux Skins",
    description: "A League of Legends skins roulette.",
    thumbnail: tmls,
    images: [tmls, tmls],
    stack: ["ReactJS", "Typescript", "Tailwindcss"],
    slug: "too-many-lux-skins",
    content: (
      <div>
        <p>
          Made with ReactJS, Typescript, and Tailwindcss. This project was made
          to provide a way for League of Legends players to randomly select a
          skin for their champion. The project was inspired by the many skins
          that the champion Lux has in the game.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/Londones/luxy",
    title: "Luxy",
    description: "A website builder",
    thumbnail: luxy,
    images: [luxy, luxy],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "luxy",
    content: (
      <div>
        <p>
          Luxy is a website builder that allows users to create websites with
          ease. It is built with Nextjs and Tailwindcss. The project was
          inspired by the many website builders that are available online.
        </p>
        <p>
          I mostly used that project to learn Nextjs, no plans on pushing this
          project to production.
        </p>{" "}
      </div>
    ),
  },
];
