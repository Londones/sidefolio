import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { WorkHistory } from "@/components/WorkHistory";
import ClientSideRenderedFlipWords from "@/components/ui/flip-words";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { words } from "@/constants/highlightwords";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <TracingBeam>
        <span className="text-4xl">👋</span>
        <Heading className="font-black">Heya! I&apos;m Awa</Heading>
        <Paragraph className="max-w-xl mt-4 text-foreground">
          I&apos;m <ClientSideRenderedFlipWords words={words} /> that loves
          building things that boost people's creativity or include Lux in some
          way.
        </Paragraph>
        <Paragraph className="max-w-xl mt-4 text-foreground">
          I&apos;m a junior software engineer with{" "}
          <Highlight className="text-muted-foreground">
            2 years of experience
          </Highlight>{" "}
          working in the HR industry.
        </Paragraph>
        <Heading
          as="h2"
          className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
        >
          What I&apos;ve been working on
        </Heading>
        <Products />
        <WorkHistory />
      </TracingBeam>
    </Container>
  );
}
