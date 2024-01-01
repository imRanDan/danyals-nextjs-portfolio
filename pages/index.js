import Head from "next/head";
import styles from "../styles/Home.module.css"
import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LatestCode from "@/components/LatestCode";
import getLatestRepos from "@/lib/getLatestRepos";
import userData from "@/constants/data";



export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Danyal Imran - Software Developer"
      description="Building websites since 2022. For more info please feel free to contact me!"
    >
      <Hero />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  )
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
    },
  };
};