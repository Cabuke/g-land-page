import Avatar2 from "../src/assets/images/giulia_mendonca_psi_brasilia_df_profile.webp";
import BackgroundAvatar from "../src/assets/images/giulia_mendonca_psi_brasilia_df_background.webp";
import { Link } from "react-scroll";
import Card from "./components/Card/index";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer/index";
import PsyMental from "./assets/Icons/psy-mental.svg";
import EspecPsy from "./assets/Icons/espec-psy.svg";
import PsychoExp from "./assets/Icons/psycho-exp.svg";
import ATimg from "./assets/images/giulia_mendonca_psi_brasilia_df_ATM.jpeg";
import { useMediaQuery } from "react-responsive";

function App() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });
  return (
    <>
      <section className="background bg-[#FAFAFA] dark:bg-gray-900 min-h-screen">
        <header className="flex flex-col   mx-5">
          <nav className="h-[91px] mb-6 grid items-center">
            <Navbar />
          </nav>

          <section className="lg:flex lg:items-center lg:justify-between lg:space-x-0">
            <div className="max-sm:items-center max-sm:text-start max-sm:flex">
              <section className=" lg:mb-4  max-sm:text-center">
                <h1 className="dark:text-gray-200 font-sf text-3xl lg:text-5xl font-bold max-sm:leading-10 mb-4 leading-[80px] lg:mb-8">
                  Psicoterapia individual para adultos.
                </h1>
                <h2 className="dark:text-gray-300 font-sf text-gray-500 text-lg mb-4 lg:mb-10">
                  Psicóloga em Brasília-DF.
                </h2>
              </section>
            </div>
            <div className="lg:w-1/2 lg:order-2 flex flex-col items-center">
              <span>
                <img
                  src={BackgroundAvatar}
                  alt=""
                  className="w-13.5 h-13.5 mb-4 lg:mb-0"
                />
              </span>

              <span className="flex flex-row lg:flex-row lg:justify-center lg: pt-9 justify-center gap-6 max-sm:flex-col max-sm:w-full">
                <button className="font-sf bg-[#7D7BEB] text-white dark:text-gray-200  text-lg rounded-lg w-48 h-16  max-sm:w-full">
                  Entre em contato
                </button>
                <Link
                  activeClass="active"
                  to="bottom"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <button className="font-sf bg-indigo text-[#4745CA] border-[#4745CA] border  rounded-lg max-sm:w-full max-sm:h-16 w-48 h-16 lg:mr-4 lg:mb-0 text-lg">
                    Saiba mais
                  </button>
                </Link>
              </span>
            </div>
          </section>
        </header>

        <section className="bg-[#E5F9F7]/80 dark:bg-[#010A16] lg:rounded-tl-[22%] max-sm:rounded-tl-[10%] rounded-tl-[13%] w-full h-full mt-24">
          <div className="mx-5">
            <section className="flex flex-col  items-center pt-24">
              <div className="flex lg:flex-col max-sm:flex-col lg:flex-wrap justify-center gap-[30px] lg:max-w-7xl m-auto">
                <Card
                  iconBgcolor={"#FFDED4"}
                  image={PsyMental}
                  title="Abordagem"
                  description="Atuo com psicoterapia na abordagem humanista existencial da Gestalt-Terapia."
                  expandedDescription="Essa perspectiva compreende o processo saúde-doença a partir dos significados construídos pela pessoa, indo além da tentativa de retirada do sofrimento mas compreendendo as funções e sistemas envolvidos no mesmo. É uma abordagem que visa a autonomia e o ajustamento criativo como recursos."
                />

                <Card
                  iconBgcolor={"#FFEED4"}
                  image={EspecPsy}
                  title="Especialização"
                  description="Especialista em saúde mental do Adulto (ESCS)."
                  expandedDescription="Psicóloga, formada pela Universidade Católica de Brasilia(UCB), especialista em saúde mental do Adulto(ESCS) com experiência de atuação interdisciplinar na RAPS-SUS do DF. Especialista em Psicologia Clínica na Abordagem Gestalt-Terapia(ITGT/PUC-GO). Mestre em Psicologia Social, do Trabalho e das Organizações(PSTO/UnB). "
                />

                <Card
                  iconBgcolor={"#D4EFFF"}
                  image={PsychoExp}
                  title="Experiência"
                  description="Atuo como psicóloga clínica, acompanhante terapêutica e docente de psicologia."
                  expandedDescription="Atuo com psicoterapia na abordagem humanista existencial da Gestalt-Terapia. Essa perspectiva compreende o processo saúde-doença a partir dos significados construídos pela pessoa, indo além da tentativa de retirada do sofrimento mas compreendendo as funções e sistema envolvidos no mesmo.É uma abordagem que visa a autonomia e o ajustamento criativo como recurso."
                />
              </div>
            </section>
            <section className="flex pt-24 pb-24 m-auto p-1 gap-10 ml-5 mr-5 max-sm:flex-col">
              <section className="flex flex-col justify-center text-start">
                <h2 className="dark:text-[#FAFAFA] font-sf mb-10 text-2xl max-lg:text-3xl text-center">
                  Acompanhamento Terapêutico
                </h2>
                <section className={`${isSmallScreen ? "" : "hidden"} pb-3`}>
                  <img className="rounded-lg w-96" src={ATimg} alt="" />
                </section>
                <p className="dark:text-[#FAFAFA] font-sf text-lg max-lg:text-lg">
                  O acompanhamento terapêutico é uma prática que dialoga como
                  dispositivo de cuidado de saúde mental em uma perspectiva de
                  clínica ampliada. Destinado a variadas possibilidades
                  interventivas, é capaz de ir ao encontro do sujeito
                  institucionalizado, com necessidades específicas, cronificação
                  dos processos de adoecimento advindos de diagnósticos, entre
                  outras possibilidades. É capaz de oferecer articulação com o
                  território, comunidade e aspectos intrafamiliares das pessoas
                  em cuidado. Oferecendo suporte em rede e convivência social.
                </p>
              </section>
              <section className={`${isSmallScreen ? "hidden" : ""}`}>
                <img className="rounded-lg sm:w-96" src={ATimg} alt="" />
              </section>
            </section>
          </div>
        </section>

        <section id="bottom" className="flex mt-24 mx-5 gap-10 max-sm:flex-col">
          <section className="flex flex-col justify-center text-justify ">
            <h2 className="font-sf text-2xl mb-10 dark:text-gray-200 text-center">
              Giulia Mendonça
            </h2>
            <section
              className={`${
                isSmallScreen ? "" : "hidden"
              } pb-3 justify-center flex`}
            >
              <img className="rounded-full h-72" src={Avatar2} alt="" />
            </section>
            <p className="font-sf text-lg dark:text-gray-200">
              Sou psicóloga clínica, formada há 8 anos e desde então sigo me
              aperfeiçoando. Atuo no Distrito Federal, com psicoterapia
              individual de adultos na modalidade online ou presencial. A minha
              especialização em saúde mental me possibilita repertório para
              atender demandas de adoecimento psicossociais complexas, manejo de
              crises e intervenções ampliadas e intersetoriais, de pessoas com
              diagnóstico prévio ou em processo de avaliação.
            </p>
          </section>
          <section className={`${isSmallScreen ? "hidden" : ""}`}>
            <img className="" src={Avatar2} alt="" />
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default App;
