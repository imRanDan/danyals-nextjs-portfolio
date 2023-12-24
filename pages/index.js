import Head from "next/head"
import ContainerBlock from "@/components/ContainerBlock"
import Hero from "@/components/Hero"

const index = () => {
  return (
    <ContainerBlock
      title="Danyal Imran - Software Developer"
      description="Looking for your next developer? Contact me to learn more!"
    >
      <Hero />
      

    </ContainerBlock>
  )
}

export default index