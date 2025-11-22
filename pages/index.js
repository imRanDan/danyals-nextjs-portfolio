import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LatestCode from "@/components/LatestCode";
import userData from "@/constants/data";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import GitHubActivity from "@/components/GitHubActivity";
import SocialBar from "@/components/SocialBar";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Danyal Imran – Full-Stack Developer"
      description="I am a Full-Stack Developer that works with React, Next.js, TypeScript, Go, and AI Tooling. I am open to full-time opportunities"
    >
      <SocialBar />
      <Hero />
      <Projects />
      <About />
      <Timeline />
      <GitHubActivity />
    </ContainerBlock>
  );
}
