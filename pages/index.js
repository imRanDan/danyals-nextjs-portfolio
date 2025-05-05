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
import ServicesSection from "@/components/Services";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Danyal Imran – Web Developer for Small Businesses & Brands"
      description="I build clean, fast, mobile-friendly websites for small businesses, creators, and local brands. Let's bring your online presence to life."
    >
      <SocialBar />
      <Hero />
      <Projects />
      <ServicesSection />
      <About />
      <Timeline />
      <GitHubActivity />
    </ContainerBlock>
  );
}
