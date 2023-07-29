import React from "react";
import Link from "../general/link";
import { Carter_One } from "next/font/google";

const carterOne = Carter_One({
  weight: "400",
  subsets: ["latin"],
});

export default function formOnHomepage() {
  return (
    <div className="bg-slate-100">
      <h2
        className={`h2 capitalize my-6 bg-slate-200 px-3 py-2 ${carterOne.className}`}
      >
        Peluang Mitra Keagenan
      </h2>
      <div className="px-3 py-2 grid gap-4">
        <Link url="/agen" title="Info Selengkapnya" />
        <Link
          url="https://forms.gle/8aYA4UfAUomgt3Bi6"
          title="Daftar Jadi Agen JISS disini"
        />
      </div>
    </div>
  );
}
