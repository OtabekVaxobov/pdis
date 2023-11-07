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
            <p className="text-xl font-medium text-slate-700 mt-3">Довольные пациенты</p>

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
              Квалифицированные специалисты</p>

          </div>

          <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-yellow-500 text-white shadow-lg shadow-yellow-200"><svg
              xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg></span>
            <p className="text-xl font-medium text-slate-700 mt-3">Обслуживание иностранных граждан</p>

          </div>


          <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-lime-500 text-white shadow-lg shadow-lime-200"><svg
              xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg></span>
            <p className="text-xl font-medium text-slate-700 mt-3">Опыт работы</p>

          </div>

          <div className="p-10 flex flex-col items-center text-center group    md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-teal-500 text-white shadow-lg shadow-teal-200"><svg
              xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg></span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              Ответственный подход</p>

          </div>

          <div className="p-10 flex flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-indigo-500 text-white shadow-lg shadow-indigo-200"><svg
              xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg></span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              Безопасность</p>
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
        <h2 id='rahbariyat' className="text-3xl py-8 flex justify-center">Руководство</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 max-w-[720px]">
          <div>
            <Image className="hover:opacity-75" src={Direktor} alt={""} width={350} height={350} />
            <h3 className=" font-semibold">Хашимов  Хусан Ачилович</h3>
            <p className="text-gray-500">Главный врач</p>
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
          <span className="text-4xl font-medium">Хотите связаться c нами?</span>
          <br />
          <span className="text-lg">Свяжитесь c нами сейчас! </span>
        </p>
        <div className="font-medium  pt-4  dark:text-white">

          <div className="text-white grid gap-4">
            <Image className="hover:opacity-75" src={Direktor} alt={""} width={300} height={300} />
            <h3 className=" font-semibold">Хашимов  Хусан Ачилович</h3>
            <p className="text-gray-300">Главный врач</p>
            <h4 className="font-medium  pt-4 leading-none"> Приемная </h4>
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


        <h2 className=" pt-8 text-3xl">Нормативные документы</h2>
        <section id="hujjatlar" className="flex flex-row justify-center gap-4 py-8">
          <Link target="_blank" rel="noopener noreferrer" download href='https://drive.google.com/file/d/1PQ7vPT-yOfkKlScrjQmA7iFgQb1m21eW/view?usp=drive_link' title="Решение организации">
            <Image src={Qarori} alt={"Решение организации"} width={100} height={100} />
          </Link>
          <Link target="_blank" rel="noopener noreferrer" download href='https://drive.google.com/file/d/12Z2kfdG2og9AUIasacLEl9wPpxjmY73T/view?usp=drive_link' title="документ из mygov">
            <Image src={Narxlar} alt={"документ из mygov"} width={120} height={120} />
          </Link>

          <Link target="_blank" rel="noopener noreferrer" download href='https://drive.google.com/file/d/1-OIHHR1ndPLhSxA6L3W7DfKx3RC9qn0_/view?usp=drive_link' title="Устав организации">
            <Image src={Nizomi} alt={"Устав организации"} width={120} height={120} />
          </Link>
          <Link target="_blank" rel="noopener noreferrer" download href='https://drive.google.com/file/d/1Ii2r9ln4XR-BK8rrGBXRCkigleFLV5XX/view?usp=drive_link' title="Кадастр организации">
            <Image src={Klinik} alt={"Кадастр организации"} width={120} height={120} />
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
                <a href="#about" className="mr-4 hover:underline md:mr-6 ">О нас</a>
              </li>
              <li>
                <a href="#rahbariyat" className="mr-4 hover:underline md:mr-6">Руководство</a>
              </li>
              <li>
                <a href="#hujjatlar" className="mr-4 hover:underline md:mr-6 ">Нормативные документы</a>
              </li>

            </ul>
            <div className="flex flex-col ">
              <p className="text-white">
                Улица Амира Темура, Гулистан, Узбекистан

              </p>

              <p className="text-white">

                Приемная 67-310-41-53
              </p>
            </div>

          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="flex items-center justify-center">
            <span className="text-sm text-white text-center ">&copy; {new Date().getFullYear()} Все права защищены.
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
          <h1>Сырдарьинский областной диспансер нервных и психических болезней</h1>
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
              <li className="border-b border-gray-400 my-8 uppercase">
                <a onClick={() => setIsNavOpen(false)} href="#about">O нас</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a onClick={() => setIsNavOpen(false)} href="#hujjatlar">Открытые данные</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a onClick={() => setIsNavOpen(false)} href="#footer">Контакт</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex ">
          <li>
            <a href="#about">O нас</a>
          </li>
          <li>
            <a href="#footer">Адрес</a>
          </li>
          <li>
            <a href="#hujjatlar">Документы</a>
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
      <h2 className=" text-2xl text-blue-600">О БОЛЬНИЦЕ</h2>
      <h1 className=" text-xl">Сырдарьинский областной диспансер нервных и психических болезней
      </h1>
      <ul className="text-gray-500 content-center">
        <li>
          За время работы нашей больницы мы постоянно развиваемся и совершенствуем все направления нашей деятельности.
        </li>
        <li>
          Это позволяет нам сохранять лидерство и максимально удовлетворять наших пациентов,а также то, что мы предоставляем.
          позволяет обеспечить высокое качество предоставляемых услуг.
        </li>
        <li>
          В целях оценки качества работы медицинских больниц и центров Узбекистана в процессе развития разрабатываются новые,
          Мы формируем современные, высокие стандарты.
        </li>
        <li>
          Уровень предоставляемых нами услуг аналогичен ведущим больницам мира и максимально приближен к ним.
          Мы стремимся предоставить. Совершенство не знает границ... Мы считаем это постоянным стимулом к ​​развитию и главной целью нашей работы.
        </li>
      </ul>
    </div>

  )
}

function Questions() {
  return (
    <div className="flex flex-col justify-center pt-8">
      <p className="flex justify-center">Часто задаваемые вопросы</p>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Причины нервных заболеваний?</AccordionTrigger>
          <AccordionContent className="p-4">
            Причин возникновения этих заболеваний множество. Они появляются под влиянием внутренних и внешних факторов.
            <ul>
              <br />
              <li>
                Если рассматривать внутренние причины, то страдающие различными соматическими и неврологическими заболеваниями, острыми нарушениями кровообращения головного мозга, черепно-мозговыми травмами, вызванными хроническими нарушениями нервно-мышечной проводимости, длительным течением заболевания, приемом различных лекарственных препаратов в результате длительного употребления больных может наблюдаться астения нервной системы.
              </li>
              <li>
                Теперь, если перейти к внешним факторам, интенсивности времени, неправильному образу жизни, неправильной организации дня, т. е. отсутствию нормализации труда и отдыха, недостатку сна, различным нагрузкам, даваемым организму без принятия учитывать физические возможности.Это может быть вызвано тягой к еде, несвоевременным приемом пищи, а также неправильным питанием.
              </li>
              <li>
                Кроме того, к астении нервной системы может привести и неправильная организация рабочих мест: недостаточное освещение, шум, неправильная циркуляция воздуха в здании, длительное сидение в одном и том же положении и работа во влажных помещениях.
              </li>
              <li>
                Причиной возникновения этого состояния у детей подросткового возраста может быть влияние семейного окружения. При потерях в семье или постоянном жестком контроле ситуации, когда у ребенка подавляется чувство свободы и самооценка, также приводят к напряжению нервной системы.
              </li>
            </ul>


          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Профилактика нервных заболеваний</AccordionTrigger>
          <AccordionContent className="p-4">
            <ul>
              <li>
                Известно, что лучше предотвратить заболевание, чем лечить его. Поэтому важнейшим методом лечения является профилактика стресса нервной системы, астиневротического синдрома и депрессии.
              </li>
              <li>
                Для этого прежде всего необходимо наладить правильный образ жизни. Правильное распределение труда и отдыха, занятия спортом, своевременное питание повышают устойчивость к этому заболеванию.
              </li>
            </ul>


          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Что такое НЕВРОЗ?</AccordionTrigger>
          <AccordionContent className="p-4">
            <ul>
              <li>
                Невроз, психоневроз, невротическое расстройство, неврозная болезнь (от древнегреческого Neuron «нерв», от новолатинского невроз) — комплекс длительно продолжающихся функциональных психогенных расстройств. Клиническая картина таких расстройств характеризуется астеническими, настойчивыми мыслями или признаками истерии, а также временным снижением умственной и физической работоспособности.</li>
              <li>
                Во всех случаях психогенными факторами являются конфликты (внутренние или внешние), воздействие ситуаций, вызывающих психологическую травму, стресс или длительное напряжение эмоционально-психической сферы психики.
                Понятие «невроз» ввел в медицину в 1776 году шотландский врач Уильям Каллен. Значение термина неоднократно пересматривалось, но до сих пор не существует общепринятого определения. Следует также отметить, что в медицине и биологии «неврозами» называют еще различные функциональные нарушения высшей нервной системы.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}