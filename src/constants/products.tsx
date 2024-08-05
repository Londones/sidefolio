import tmls from "public/images/TMLS.png";
import luxy from "public/images/luxy.png";
import julia from "public/images/julia.png";

export const products = [
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
  {
    href: "https://github.com/Londones/fractalRenderer",
    title: "Fractal Renderer",
    description: "A simple fractal renderer",
    thumbnail: julia,
    images: [julia, julia],
    stack: ["Golang", "Typescript", "ReactJS"],
    slug: "fractal-renderer",
    content: (
      <div>
        <p>
          Fractal Renderer is a simple fractal renderer that I made with Golang.
          The project was made to learn more about Golang and rewrite a school
          project that I thought was really cool with more knowledge.
        </p>
        <p>
          It leverages the speed of Golang to calculate and render the fractals
          and the power of Websockets to display the result in real-time.
        </p>
      </div>
    ),
  },
];
