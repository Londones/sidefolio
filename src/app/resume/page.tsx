import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { WorkHistory } from "@/components/WorkHistory";
import { Button } from "@/components/ui/button";
import { IconDownload } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Work History</Heading>
      <Paragraph className=" mt-4">
        I&apos;m a full-stack developer that loves
        <Highlight>building things</Highlight> that can impact people&apos;s
        lives.
      </Paragraph>
      <div>
        <Heading
          as="h2"
          className="font-black text-lg md:text-lg lg:text-lg mt-10"
        >
          Download my full resume
        </Heading>
        <div className="flex justify-center pt-8 gap-8">
          <Button variant="outline">
            <Link href="/resumeFR.pdf" target="_blank" className="flex">
              <IconDownload className="w-4 h-4 mr-2" />
              In French
            </Link>
          </Button>
          <Button variant="outline">
            <Link href="/resumeEN.pdf" target="_blank" className="flex">
              <IconDownload className="w-4 h-4 mr-2" />
              In English
            </Link>
          </Button>
        </div>
      </div>
      <WorkHistory />
    </Container>
  );
}
