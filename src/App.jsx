import Avatar2 from "../src/assets/images/giulia_mendonca_psi_brasilia_df_profile.webp";
import BackgroundAvatar from "../src/assets/images/giulia_mendonca_psi_brasilia_df_background.png";
import { Link } from "react-scroll";
import Card from "./components/Card/index";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer/index";
import PsyMental from "./assets/Icons/psy-mental.svg";
import EspecPsy from "./assets/Icons/espec-psy.svg";
import PsychoExp from "./assets/Icons/psycho-exp.svg";
import ATimg from "./assets/images/img-AT.jpeg";
import { useMediaQuery } from "react-responsive";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { HandHeart } from "@phosphor-icons/react";

function App() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const whatsappLink =
    "https://api.whatsapp.com/send?phone=5561981525162&text=Ol%C3%A1!%0AGostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20psicoterapia.%0APoderia%20me%20fornecer%20mais%20informa%C3%A7%C3%B5es,%20por%20favor%3F";

  return (
    <>
      <section className=" bg-[#e9def1] min-h-screen pb-2">
        <header
          className="flex flex-col   max-sm:mx-5 sm:mx-5 lg:mx-32 xl:mx-40 mx-40"
          id="inicio"
        >
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <nav className="h-[91px] mb-6 grid items-center">
            <Navbar />
          </nav>

          <section className="lg:flex lg:items-center lg:justify-between lg:space-x-0">
            <div className="lg:items-center lg:text-start lg:flex flex-col">
              <section className=" lg:mb-4  max-lg:text-center flex flex-col">
                <h1 className="text-[#44241d] font-sf text-3xl lg:text-5xl font-bold max-sm:leading-10 mb-4 leading-[80px] lg:mb-8">
                  Psicoterapia individual para adultos.
                </h1>
                <h2 className="font-sf text-[#44241d]text-lg mb-4 lg:mb-10">
                  Psicóloga em Brasília-DF.
                </h2>
              </section>
              <span className="w-[100%] flex flex-row lg:flex-row lg:justify-start lg: pt-9 justify-center gap-6 max-sm:flex-col max-sm:w-full">
                <button
                  className="font-sf bg-[#44241d] text-white text-lg cursor-pointer rounded-[15px] w-48 h-16  max-sm:w-full"
                  onClick={() => window.open(whatsappLink, "_blank")}
                >
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
                  <button className="font-sf bg-[#fee6db] text-[#130301] cursor-pointer border-[#c78d81] border  rounded-[15px] max-sm:w-full max-sm:h-16 w-48 h-16 lg:mr-4 lg:mb-0 text-lg">
                    Saiba mais
                  </button>
                </Link>
              </span>
            </div>
            <div className="relative inline-block flex-shrink-0">
              {/* Círculo de fundo */}
              <div
                className="absolute  
              w-[400px] 
              h-[400px] 
              rounded-full 
              bg-[#D9A8A1]
              top-[342px] left-[79px]
              transform
              -translate-x-[20px] 
              -translate-y-1/2
              "
              />

              {/* Imagem da psicóloga */}

              <img
                className="relative z-10 w-[410px] h-auto object-cover"
                src={BackgroundAvatar}
                alt="Imagem da psicóloga referente ao site."
              />
            </div>
          </section>
        </header>

        <section className="bg-[#E5F9F7]/80 dark:bg-[#010A16] lg:rounded-tl-[22%] max-sm:rounded-tl-[10%] rounded-tl-[13%] w-full h-full mt-24">
          <SpeedInsights />
          <div className="max-sm:mx-5 sm:mx-5 lg:mx-32 xl:mx-40 mx-40">
            <section
              className="flex flex-col  items-center pt-24"
              id="qualificacoes"
            >
              <div className="flex max-sm:flex-col justify-center gap-[30px]">
                <Card
                  iconBgcolor={"#FFDED4"}
                  icon={<HandHeart size={42} color="#FFF" />}
                  title="Abordagem"
                  description="Atuo com psicoterapia na abordagem humanista existencial da Gestalt-Terapia."
                  expandedDescription="Essa perspectiva compreende o processo saúde-doença a partir dos significados construídos pela pessoa, indo além da tentativa de retirada do sofrimento mas compreendendo as funções e sistemas envolvidos no mesmo. É uma abordagem que visa a autonomia e o ajustamento criativo como recursos."
                />

                <Card
                  iconBgcolor={"#FFEED4"}
                  // image={EspecPsy}
                  title="Especialização"
                  description="Especialista em saúde mental do Adulto (ESCS)."
                  expandedDescription="Psicóloga, formada pela Universidade Católica de Brasilia(UCB), especialista em saúde mental do Adulto(ESCS) com experiência de atuação interdisciplinar na RAPS-SUS do DF. Especialista em Psicologia Clínica na Abordagem Gestalt-Terapia(ITGT/PUC-GO). Mestre em Psicologia Social, do Trabalho e das Organizações(PSTO/UnB). "
                />

                <Card
                  iconBgcolor={"#D4EFFF"}
                  // image={PsychoExp}
                  title="Experiência"
                  description="Atuo como psicóloga clínica, acompanhante terapêutica e docente de psicologia."
                  expandedDescription="Atuo com psicoterapia na abordagem humanista existencial da Gestalt-Terapia. Essa perspectiva compreende o processo saúde-doença a partir dos significados construídos pela pessoa, indo além da tentativa de retirada do sofrimento mas compreendendo as funções e sistema envolvidos no mesmo.É uma abordagem que visa a autonomia e o ajustamento criativo como recurso."
                />
              </div>
            </section>
            <section className="flex pt-24 pb-24 m-auto p-1 gap-10 max-sm:flex-col">
              <section className="flex flex-col justify-center text-start flex-1">
                <h2 className="dark:text-[#FAFAFA] font-sf mb-10 text-2xl max-lg:text-3xl text-center lg:text-start">
                  Acompanhamento Terapêutico
                </h2>
                <section
                  className={`${
                    isSmallScreen ? "" : "hidden"
                  } pb-3 flex justify-center`}
                >
                  <img className="rounded-lg w-96 " src={ATimg} alt="" />
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

        <section
          id="bottom"
          className="flex mt-24 max-sm:mx-5 sm:mx-5 lg:mx-32 xl:mx-40 mx-40 gap-10 max-sm:flex-col"
        >
          <section
            className="flex flex-col justify-center text-justify flex-1"
            id="perfil"
          >
            <h2 className="font-sf text-2xl mb-10 dark:text-gray-200 text-center md:text-start">
              Giulia Mendonça
            </h2>
            <section
              className={`${
                isSmallScreen ? "" : "hidden"
              } pb-3 justify-center flex`}
            >
              <img className="rounded-full h-80" src={Avatar2} alt="" />
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
            <img className="rounded-full h-80" src={Avatar2} alt="" />
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default App;
