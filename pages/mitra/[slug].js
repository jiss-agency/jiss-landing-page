import React from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/layout/navigation/navbar";
import { client } from "@/contentful/client";
import AllPages from "@/components/pdf/all-pages";
import { BsBoxArrowUpRight } from "react-icons/bs";
import InfoContainer from "@/components/general/infoContainer";
import LinkComp from "@/components/general/link";

export async function getStaticPaths() {
  const product = await client.getEntries({
    content_type: "mitra",
  });
  const paths = product.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "mitra",
    "fields.slug": params.slug,
  });

  return {
    props: {
      mitra: items[0],
    },
  };
}
const Mitra = ({ mitra }) => {
  const {
    namaMitra,
    judulProduk,
    gambarIlustrasi,
    deskripsi,
    infoDetail,
    judulLink,
    fileRefrensi,
    urlFormulir,
    lokasiPendidikan,
	embedHtmlLokasi,
	fotoFasilitas,
	fotoKegiatan
  } = mitra.fields;

  return (
    <>
      <Head>
        <title>{judulProduk} | Jasa Inti Solusi Sukses</title>
        <meta
          name="description"
          content="Jasa Inti Solusi Sukses Landing Page"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoipsum-223 2.svg" />
      </Head>
      <Navbar>
        <div className="main-padding">
          {urlFormulir && (
            <div className="mb-10 md:grid  md:place-items-center">
              <h2 className="text-3xl font-semibold max-md:text-2xl capitalize my-6">
                Formulir Pendaftaran
              </h2>
              <LinkComp url={urlFormulir} title="Isi Formulir Disini" />
            </div>
          )}
          <h2 className="h2 mb-2">{judulLink}</h2>
          <p className="md:text-[32px] text-primary text-[15px]">
            {judulProduk}
          </p>
          <div className="my-6">
            <div className="lg:float-right lg:ml-4 max-lg:my-4 max-md:w-full">
              <Image
                src={`https:${gambarIlustrasi.fields.file.url}`}
                alt="ilustrasi"
                width={500}
                height={600}
                className="rounded-md w-[300px] max-h-auto md:ml-4 shadow-lg max-md:w-full"
              />
            </div>
            <p className="text-justify p">{deskripsi}</p>
          </div>

          <div>
            {infoDetail.map((item, i) => {
              const { judulInfo, infoDetail } = item.fields;

              return (
                <InfoContainer key={i} title={judulInfo}>
                  {infoDetail.map((info, i) => (
                    <p key={i}>• {info}</p>
                  ))}
                </InfoContainer>
              );
            })}
          </div>

          <div className="mb-6">
            <h2 className="h2 capitalize mb-6">Foto Kegiatan {judulLink}</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-md:gap-4">
				{
					fotoKegiatan?.map((foto, i) => (
						<div key={i}>
						<p className="mb-2 font-semibold text-xl capitalize">{i +1}. {foto.fields.title}</p>
							<Image
								src={"https:" + foto.fields.file.url}
								width={400}
								height={400}
								alt={foto.fields.title}
								className="w-full h-auto md:h-[400px] object-cover rounded-sm border"
							/>
						</div>
					))
				}
			</div>
          </div>
          <div>
            <h2 className="h2 capitalize mb-4">Fasilitas Pendidikan</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-md:gap-4">
				{
					fotoFasilitas?.map((foto, i) => (
						<div key={i}>
						<p className="mb-2 font-semibold text-xl capitalize">{i +1}. {foto.fields.title}</p>
							<Image
								src={"https:" + foto.fields.file.url}
								width={400}
								height={400}
								alt={foto.fields.title}
								className="w-full h-auto md:h-[400px] object-cover rounded-sm border"
							/>
						</div>
					))
				}
			</div>
          </div>

          <div>
            <h2 className="h2 capitalize my-4">Lokasi Pendidikan</h2>
            <p className="text-xl md:text-2xl font-semibold">Bertempat di PUSDIKLAT SATPAM {namaMitra}.</p>
            <p className="text-primary text-lg md:text-2xl mb-6">{lokasiPendidikan}</p>
			<iframe src={embedHtmlLokasi} width="400" height="300" className="w-full" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          {fileRefrensi && (
            <div className="mt-10">
              <h2 className="h2 capitalize mb-6">
                Informasi & Dokumen Penting
              </h2>
              {fileRefrensi.map((item, i) => {
                const { file, judulFileRefrensi } = item.fields;
                return (
                  <div key={i}>
                    <h3 className="text-xl md:text-3xl font-semibold mb-4 text-primary">
                      {judulFileRefrensi}
                    </h3>
                    {fileRefrensi ? (
                      <iframe
                        src={"https:" + file.fields.file.url}
                        className="w-full h-[700px]"
                      />
                    ) : null}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </Navbar>
    </>
  );
};

export default Mitra;
