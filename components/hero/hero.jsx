import Button1 from "../general/button1";
import Button2 from "../general/button2";
import RunningText from "./runningText";
import VideoBackground from "./videoBackground/video";
import {  Carter_One } from "next/font/google";

const carterOne = Carter_One({
  weight: "400",
  subsets: ["latin"],
});

export default function hero({ data }) {
  const video = data.items[0].fields.backgroundVideo.fields.file.url;
  return (
    <section id="home" className="md:mb-[5.5625rem] mb-4  ">
      <div>
        <div className="mt-16">
          <h1
            className={`h1 my-6 md:max-w-[35ch] text-white md:px-10 lg:px-[8.6875rem] px-4 ${carterOne.className}`}
          >
            Hai !, Selamat Datang Di Pusat Informasi JISS Agency
          </h1>
          <h2 className={`h2 font-bold text-primary md:px-10 lg:px-[8.6875rem] px-4 ${carterOne.className}`}>
            {" "}
            &ldquo;Bergabung Bertumbuh Bersama&ldquo;
          </h2>
          <VideoBackground videoSrc={video} />
        </div>
        <p className="mb-8 md:mt-[8rem] mt-[2rem] py-6 p lg:text-left text-justify md:px-10 lg:px-[8.6875rem] px-4 bg-white">
          Kami, Jasa Inti Solusi Sukses, adalah startup marketing agency yang
          menyediakan solusi lengkap untuk memenuhi kebutuhan pemasaran produk
          Anda.
          <br />
          <br />
          Dengan logo heksagonal berbentuk rumah lebah dan simbol kupu-kupu
          kuning, kami hadir sebagai mitra yang melengkapi, bukan pesaing, untuk
          membantu mewujudkan kesuksesan usaha Anda. Dalam mengatasi berbagai
          tantangan dalam pemasaran produk.
          <br />
          <br />
          kami selalu berusaha untuk mencapai progress yang baik dan
          mengedepankan nilai-nilai simbiosis mutualisme, sebagaimana kupu-kupu
          menjadi penstabil ekosistem alam. Dengan dedikasi kami, kami siap
          membantu Anda mencapai kejayaan dan kesuksesan dalam dunia pemasaran.
        </p>

        <div className={`${carterOne.className}`}>
			<RunningText />
		</div>
      </div>
    </section>
  );
}
