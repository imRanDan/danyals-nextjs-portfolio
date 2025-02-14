import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LatestCode from "@/components/LatestCode";
import getLatestRepos from "@/lib/getLatestRepos";
import userData from "@/constants/data";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Danyal Imran - Software Developer"
      description="Building websites since 2022. For more info please feel free to contact me!"
    >
      <Hero />
      <About />
      <Timeline />
      <Projects />
    </ContainerBlock>
  );
}
