import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Art | Awa Bah",
  description: "Awa Bah is a developer, artist and amateur designer.",
};

export default function ArtGallery() {
  return (
    <Container>
      <span className="text-4xl">🎨</span>
      <Heading className="font-black pb-4">The art I create</Heading>
      <Paragraph className="pb-10">
        I love creating art in my free time. Here are some of my recent works.
      </Paragraph>
    </Container>
  );
}
