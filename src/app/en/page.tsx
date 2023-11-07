"use client"

import Image from "next/image"
import Carusel from "@/components/carusel";
import Qarori from "../../../public/qarori.jpg";
import Nizomi from "../../../public/nizomi.jpg";
import Klinik from "../../../public/klinik.jpg";
import Narxlar from "../../../public/narxlar.jpg";
import Link from "next/link";
import Direktor from "../../../public/direktor.jpg";
import { Suspense, useState } from "react";
import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/theme/theme-provider";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { LanguageChanger } from "@/components/Lang";



function Gallery() {
  return (
    <div>
      <div id="About" className="px-3 md:lg:xl:px-40 sm:p-0  border-t border-b py-20 bg-opacity-10">
        <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 sm:grid-cols-2 group ">
          <div
            className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-red-200"><svg
              xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg></span>
            <p className="text-xl font-medium text-slate-700 mt-3">Satisfied patients</p>

          </div>

          <div
            className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-200"><svg
              xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth="1.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg></span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              Qualified specialists</p>

          </div>

          <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-yellow-500 text-white shadow-lg shadow-yellow-200"><svg
              xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg></span>
            <p className="text-xl font-medium text-slate-700 mt-3">Service for foreign citizens</p>

          </div>


          <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-lime-500 text-white shadow-lg shadow-lime-200"><svg
              xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg></span>
            <p className="text-xl font-medium text-slate-700 mt-3">Experience</p>

          </div>

          <div className="p-10 flex flex-col items-center text-center group    md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-teal-500 text-white shadow-lg shadow-teal-200"><svg
              xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg></span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              Responsible approach</p>

          </div>

          <div className="p-10 flex flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-indigo-500 text-white shadow-lg shadow-indigo-200"><svg
              xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg></span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              Safety</p>
            <p className="  hidden sm:flex mt-2 text-sm text-slate-500">
            </p>
          </div>




        </div>
      </div>
    </div>
  )
}

function Gallery3() {
  return (
    <section>
      <Suspense>
        <h2 id='rahbariyat' className="text-3xl py-8">Doctors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 max-w-[720px]">
          <div>
            <Image className="hover:opacity-75" src={Direktor} alt={""} width={350} height={350} />
            <h3 className=" font-semibold"> Khashimov Khusan Achilovich</h3>
            <p className="text-gray-500">Chief physician</p>
          </div>
        </div>
      </Suspense>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Header />
      <div className=" md:flex w-full bg-gradient-to-r from-sky-500 to-indigo-500 p-4 py-20 sm:px-20 ">
        <span></span>
      </div>

      <Carusel />

      <div className="flex flex-col w-full bg-gradient-to-r from-sky-500 to-indigo-500 p-4 py-20 sm:px-20 sm:flex-row justify-between items-center">
        <p className=" text-white">
          <span className="text-4xl font-medium">Want to contact us?</span>
          <br />
          <span className="text-lg">Contact us now!</span>
        </p>
        <div className="font-medium  pt-4  dark:text-white">

          <div className="text-white grid gap-4">
            <Image className="hover:opacity-75" src={Direktor} alt={""} width={300} height={300} />
            <h3 className=" font-semibold">Khashimov Khusan Achilovich</h3>
            <p className="text-gray-300">Chief physician</p>
            <h4 className="font-medium  pt-4 leading-none"> Reception </h4>
            <p className=" text-white text-sm text-muted-foreground">
              67-236-32-64
            </p>
          </div>

        </div>
      </div>


      <main className="flex min-h-screen flex-col items-center justify-between sm:p-24">

        <About />
        <Gallery />

        <Questions />


        <Gallery3 />


        <h2 className=" pt-8 text-3xl">Regulations</h2>
        <section id="hujjatlar" className="flex flex-row justify-center gap-4 py-8">
          <Link target="_blank" rel="noopener noreferrer" download href='https://drive.google.com/file/d/1PQ7vPT-yOfkKlScrjQmA7iFgQb1m21eW/view?usp=drive_link' title="Organization decision">
            <Image src={Qarori} alt={"Organization decision"} width={100} height={100} />
          </Link>
          <Link target="_blank" rel="noopener noreferrer" download href='https://drive.google.com/file/d/12Z2kfdG2og9AUIasacLEl9wPpxjmY73T/view?usp=drive_link' title="document from mygov">
            <Image src={Narxlar} alt={"document from mygov"} width={120} height={120} />
          </Link>

          <Link target="_blank" rel="noopener noreferrer" download href='https://drive.google.com/file/d/1-OIHHR1ndPLhSxA6L3W7DfKx3RC9qn0_/view?usp=drive_link' title="Articles of association">
            <Image src={Nizomi} alt={"Articles of association"} width={120} height={120} />
          </Link>
          <Link target="_blank" rel="noopener noreferrer" download href='https://drive.google.com/file/d/1Ii2r9ln4XR-BK8rrGBXRCkigleFLV5XX/view?usp=drive_link' title="Organization cadastre">
            <Image src={Klinik} alt={"Organization cadastre"} width={120} height={120} />
          </Link>
        </section>

      </main>
      <Footer />
    </>

  )
}

function Footer() {
  return (
    <section>
      <div id='footer' className="flex items-center justify-center py-8 ">
        <div className="mapouter"><div className="gmap_canvas">
          <iframe src="https://maps.google.com/maps?q=40%C2%B029'33.0%22N%2068%C2%B045'00.1%22E%C2%A0&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style={{ width: 790, height: 500 }}></iframe>
          <style>{`
      .mapouter{position:relative;height:400px;min-width:375px;background:#fff;}
      `}
          </style>

          <style>{`.gmap_canvas{overflow:hidden;height:400px;min-width:375px}.gmap_canvas iframe{position:relative;z-index:2}`}</style></div></div>

      </div><footer className="p-4 bg-white sm:p-6 dark:bg-gray-800 pt-8 bg-gradient-to-r from-sky-500 to-indigo-500">
        <div className="mx-auto max-w-screen-xl">
          <div className="md:flex md:justify-center flex-col ">


            <ul className="flex justify-end  items-end mb-6 text-sm font-medium text-white sm:mb-0 ">
              <li>
                <a href="#about" className="mr-4 hover:underline md:mr-6 ">About Us</a>
              </li>
              <li>
                <a href="#rahbariyat" className="mr-4 hover:underline md:mr-6">Doctors</a>
              </li>
              <li>
                <a href="#hujjatlar" className="mr-4 hover:underline md:mr-6 ">Regulations</a>
              </li>

            </ul>
            <div className="flex flex-col ">
              <p className="text-white">
                Amir Temur Street, Gulistan, Uzbekistan

              </p>

              <p className="text-white">

                Reception 67-310-41-53
              </p>
            </div>

          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="flex items-center justify-center">
            <span className="text-sm text-white text-center ">&copy; {new Date().getFullYear()}   All rights reserved.
            </span>

          </div>
        </div>
      </footer>
    </section>

  )
}

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-8 m-4 dark:bg-gray-900">
      <div className="hidden md:flex">
        <a className="items-center justify-center px-4" href="/">
          <Logo />

        </a>
        <div className="font-sans font-semibold text-3xl">
          <h1>Syrdarya Regional Dispensary for Nervous and Mental Diseases</h1>
        </div>


      </div>

      <nav>
        <section className="MOBILE-MENU flex lg:hidden mx-4">
          {isNavOpen ||
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>}


          <div className={isNavOpen ? "showMenuNav dark:bg-slate-950" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-11 "
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              qwe
              <li className="border-b border-gray-400 my-8 uppercase">

                <a onClick={() => setIsNavOpen(false)} href="#about">ABOUT US</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a onClick={() => setIsNavOpen(false)} href="#hujjatlar">OPEN DATA</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a onClick={() => setIsNavOpen(false)} href="#footer">CONTACT</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex ">
          <li>
            <a href="#about">ABOUT US</a>
          </li>
          <li>
            <a href="#footer">Adress</a>
          </li>
          <li>
            <a href="#hujjatlar">Documentation</a>
          </li>
          <li className="px-4">
            <ModeToggle />
          </li>
        </ul>
        <LanguageChanger />
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        background-color: white;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
      
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}


function About() {
  return (

    <div id="about" className="flex flex-col justify-center p-8">
      <h2 className=" text-2xl text-blue-600">ABOUT THE HOSPITAL</h2>
      <h1 className=" text-xl">Syrdarya Regional Dispensary for Nervous and Mental Diseases
      </h1>
      <ul className="text-gray-500 content-center">
        <li>
          This allows us to maintain leadership and maximize the satisfaction of our patients and what we provide. allows us to ensure high quality of services provided.
        </li>
        <li>
          In order to assess the quality of work of medical hospitals and centers in Uzbekistan, new ones are being developed in the development process.
        </li>
        <li>
          We are forming modern, high standards.
          The level of services we provide is similar to the leading hospitals in the world and is as close as possible to them.
        </li>
        <li>
          We strive to provide. Perfection knows no bounds... We consider this a constant incentive for development and the main goal of our work.
        </li>
      </ul>
    </div>

  )
}

function Questions() {
  return (
    <div className="flex flex-col justify-center pt-8">
      <p className="flex justify-center">FAQ</p>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Causes of nervous diseases?</AccordionTrigger>
          <AccordionContent className="p-4">
            There are many reasons for the occurrence of these diseases. They appear under the influence of internal and external factors.
            <ul>
              <br />
              <li>
                If we consider internal causes, then those suffering from various somatic and neurological diseases, acute cerebral circulatory disorders, traumatic brain injuries caused by chronic disorders of neuromuscular conduction, long-term course of the disease, taking various medications as a result of prolonged use of patients may experience asthenia of the nervous system.
              </li>
              <li>
                Now, if we move on to external factors, time intensity, improper lifestyle, improper organization of the day, i.e. lack of normalization of work and rest, lack of sleep, various stresses given to the body without taking into account physical capabilities. This can be caused by cravings for food , untimely eating, as well as poor nutrition
              </li>
              <li>
                In addition, improper organization of workplaces can also lead to asthenia of the nervous system: insufficient lighting, noise, improper air circulation in the building, prolonged sitting in the same position and work in damp rooms.
              </li>
              <li>
                The cause of this condition in adolescent children may be the influence of the family environment. With losses in the family or constant tight control, situations where the child’s sense of freedom and self-esteem are suppressed also lead to tension in the nervous system.
              </li>
            </ul>


          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Prevention of nervous diseases</AccordionTrigger>
          <AccordionContent className="p-4">
            <ul>
              <li>
                It is known that it is better to prevent a disease than to treat it. Therefore, the most important treatment method is the prevention of stress in the nervous system, astyneurotic syndrome and depression.
              </li>
              <li>
                To do this, first of all, you need to establish the right lifestyle. Proper distribution of work and rest, exercise, and timely nutrition increase resistance to this disease.
              </li>
            </ul>


          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is NEUROSIS?</AccordionTrigger>
          <AccordionContent className="p-4">
            <ul>
              <li>
                Neurosis, psychoneurosis, neurotic disorder, neurotic disease (from the ancient Greek Neuron “nerve”, from the New Latin neurosis) is a complex of long-term functional psychogenic disorders. The clinical picture of such disorders is characterized by asthenic, persistent thoughts or signs of hysteria, as well as a temporary decrease in mental and physical performance.
              </li>
              <li>
                In all cases, psychogenic factors are conflicts (internal or external), exposure to situations that cause psychological trauma, stress or prolonged tension in the emotional and mental sphere of the psyche. The concept of “neurosis” was introduced into medicine in 1776 by the Scottish physician William Cullen. The meaning of the term has been revised several times, but there is still no generally accepted definition. It should also be noted that in medicine and biology, “neuroses” are also called various functional disorders of the higher nervous system.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}