import Head from "next/head";
import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";



export default function Home() {
  return (
    <ContainerBlock
      title="Danyal Imran - Software Developer"
      description="Building websites since 2022. For more info please feel free to contact me!"
    >
      <Hero />
      
    </ContainerBlock>
  )
}