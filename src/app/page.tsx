import Gallery, { Gallery2, Gallery3 } from "@/components/gallery/Gallery"
import Image from "next/image"
import bg from "../../public/page-bg.jpg";
import Carusel from "@/components/carusel";
import Qarori from "../../public/qarori.jpg";
import Nizomi from "../../public/nizomi.jpg";
import Klinik from "../../public/klinik.jpg";
import Narxlar from "../../public/narxlar.jpg";
import Link from "next/link";
import { Questions } from "@/components/Questions";
import { About } from "@/components/About";
import Direktor from "../../public/direktor.jpg";

export default function Home() {
  return (
    <>
      <div className=" md:flex w-full bg-gradient-to-r from-sky-500 to-indigo-500 p-4 py-20 sm:px-20 ">
        <span></span>
      </div>

      <Carusel />

      <div className="flex flex-col w-full bg-gradient-to-r from-sky-500 to-indigo-500 p-4 py-20 sm:px-20 sm:flex-row justify-between items-center">
        <p className=" text-white">
          <span className="text-4xl font-medium">Biz bilan bog&apos;lanmoqchimisiz?</span>
          <br />
          <span className="text-lg">Hoziroq bog&apos;laning ! </span>
        </p>
        <div className="font-medium  pt-4  dark:text-white">

          <div className="text-white grid gap-4">
            <Image className="hover:opacity-75" src={Direktor} alt={""} width={300} height={300} />
            <h3 className=" font-semibold">Xashimov Xusan Achilovich</h3>
            <p className="text-gray-300">Bosh shifokor</p>
            <h4 className="font-medium  pt-4 leading-none"> Qabulxona </h4>
            <p className=" text-white text-sm text-muted-foreground">
              67-236-32-64
            </p>
          </div>

        </div>
      </div>


      <main className="flex min-h-screen flex-col items-center justify-between sm:p-24">

        <About />
        <Gallery />
        {/* <Gallery2 /> */}

        <Questions />


        <Gallery3 />


        <h2 className=" pt-8 text-3xl">Meyoriy hujjatlar</h2>
        <section id="hujjatlar" className="flex flex-row justify-center gap-4 py-8">
          <Link target="_blank" rel="noopener noreferrer" download href='https://drive.google.com/file/d/1PQ7vPT-yOfkKlScrjQmA7iFgQb1m21eW/view?usp=drive_link' title="Tashkilot qarori">
            <Image src={Qarori} alt={"qaror"} width={100} height={100} />
          </Link>
          <Link target="_blank" rel="noopener noreferrer" download href='https://drive.google.com/file/d/12Z2kfdG2og9AUIasacLEl9wPpxjmY73T/view?usp=drive_link' title="mygovdan hujjat">
            <Image src={Narxlar} alt={"mygovdan"} width={120} height={120} />
          </Link>

          <Link target="_blank" rel="noopener noreferrer" download href='https://drive.google.com/file/d/1-OIHHR1ndPLhSxA6L3W7DfKx3RC9qn0_/view?usp=drive_link' title="Tashkilot Nizomlari">
            <Image src={Nizomi} alt={"nizomi"} width={120} height={120} />
          </Link>
          <Link target="_blank" rel="noopener noreferrer" download href='https://drive.google.com/file/d/1Ii2r9ln4XR-BK8rrGBXRCkigleFLV5XX/view?usp=drive_link' title="Tashkilot Kadastri">
            <Image src={Klinik} alt={"Kadastr"} width={120} height={120} />
          </Link>
        </section>
      </main>
    </>

  )
}
