import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import FloatingContact from "./FloatingContact";
import BackToTop from "./BackToTop";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Danyal Imran - Full-Stack Developer",
    description: "Developing since 2022",
    image: "/itsame-danyal",
    type: "website",
    ...customMeta,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://danyalimran.com/${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://danyalimran.com/${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Danyal Imran" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="dark:bg-gray-800 w-full relative">
        <ScrollProgress />
        <Navbar />
        <div>{children}</div>
        <Footer />
        <FloatingContact />
        <BackToTop />
      </main>
    </div>
  );
}
