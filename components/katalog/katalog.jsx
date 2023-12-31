import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Poppins } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin", "devanagari"],
  weight: ["400", "500", "600"],
  style: ["italic", "normal"],
});

export default function Katalog({ dataMitra }) {
  return (
    <div id="katalog" className="mb-10">
      <h2 className="h2 mb-6">Katalog Produk</h2>
      <h3 className="text-xl md:text-3xl font-semibold">
        PUSAT PENDIDIKAN & PELATIHAN SATUAN PENGAMANAN
      </h3>
      <p className="text-xl mb-3 md:text-2xl font-semibold mt-6">
        Kualifikasi :{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 text-left gap-4">
        {dataMitra.map((item) => {
          const { judulLink, slug, gambarIlustrasi } = item.fields;
          return (
            <Link href={`/mitra/${slug}`} key={slug} className="p-2 border-2 rounded-md group hover:scale-105 smooth">
              <Image
                width={400}
                height={400}
                src={"https:" + gambarIlustrasi.fields.file.url}
                alt="ilustrasi Diksar"
				className=" w-full bg-slate-200"
              />
              <p
                className="lg:min-w-[400px] text-lg md:text-2xl underline text-primary border-primary border-[1px] py-1 px-2 flex items-center gap-2 justify-between rounded-sm group-hover:bg-gradientPrimary group-hover:text-white smooth"
              >
                {judulLink}
                <BsBoxArrowUpRight />
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
