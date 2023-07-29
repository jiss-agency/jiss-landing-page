import Head from "next/head";
// import all section components
import Navbar from "@/layout/navigation/navbar";
import Hero from "@/components/hero/hero";
import Services from "@/components/services/services";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import News from "@/components/news/news";
import Questions from "@/components/questions/question";
import SliderPeople from "@/components/people/sliderPeople";
import Katalog from "@/components/katalog/katalog";
import FormOnHomepage from "@/components/agent/formOnHomepage";
// others
import { client } from "@/contentful/client";

// fetching data from Contentful CMS
export async function getStaticProps(type) {
  const layanan = await client.getEntries({ content_type: "layanan" });
  const mitra = await client.getEntries({ content_type: "mitra" });
  const orang = await client.getEntries({ content_type: "orang" });
  const redaksi = await client.getEntries({ content_type: "redaksi" });
  const mediaSatpam = await client.getEntries({ content_type: "mediaSatpam" });
  // passing props for each content-model response
  return {
    props: {
      layanan,
      mitra,
      orang,
      redaksi,
	  mediaSatpam
    },
  };
}

export default function Home({ layanan, mitra, orang, redaksi, mediaSatpam }) {
  return (
    <>
      <Head>
        <title>Jasa Inti Solusi Sukses</title>
        <meta
          name="description"
          content="Jasa Inti Solusi Sukses Landing Page"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoipsum-223 2.svg" />
      </Head>
      <Navbar>
        <Hero data={redaksi} />
        <main className="main-padding">
          <Services dataLayanan={layanan.items} />
          <SliderPeople dataOrang={orang.items} />
          <Questions/>
		  <Katalog dataMitra={mitra.items}/>
          <News dataMedia={mediaSatpam.items}/>
		  <FormOnHomepage/>
        </main>
      </Navbar>
      <div className="bg-gradientPrimary">
        <Contact />
        <Footer />
      </div>
    </>
  );
}
