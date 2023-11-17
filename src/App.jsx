import Avatar2 from "../src/assets/images/giulia-mendonca-header-hero.png";
import BackgroundAvatar from "../src/assets/images/profileBackground.svg";
import Avatar1 from "./assets/images/avatar1.png";

import Card from "./components/Card/index";
import Navbar from "./components/NavBar";

import PsyMental from "./assets/Icons/psy-mental.svg";
import EspecPsy from "./assets/Icons/espec-psy.svg";
import PsychoExp from "./assets/Icons/psycho-exp.svg";

function App() {
  return (
    <>
      <section className="background bg-[#FAE7E34D]">
        <header className="flex flex-col  w-full m-auto">
          <nav className="h-[91px] mb-6 grid items-center">
            <Navbar />
          </nav>

          <section className="flex items-center justify-between mx-28 mr-28">
            <section>
              <h1 className="font-sans-serif text-6xl font-bold leading-[80px] mb-8">
                Psicoterapia individual <p />
                para adultos.
              </h1>
              <h2>
                venha cuidar da sua saúde mental.
                <br />
                <strong>psicologa em brasilia-df.</strong>
              </h2>
              <button className="bg-indigo-500 rounded-lg p-2">
                Saiba mais
              </button>
              <button class="bg-indigo">Entre em contato</button>
            </section>
            <img src={BackgroundAvatar} alt="" className="w-13.5 h-13.5" />
            <img
              src={Avatar1}
              alt=""
              className="rounded-full z-10 absolute right-16 w-[400px] h-[570px] mr-28"
            />
          </section>
        </header>

        <section className="relative w-full">
          <section className="absolute  py-48  -top-32 pb-80 w-full h-full bg-[#E5F9F7] opacity-80 rounded-tl-[22%]" />
          <section className="flex relative flex-row  gap-[30px] max-w-7xl m-auto mt-20">
            <Card
              color={"#FFDED4"}
              image={PsyMental}
              title="Abordagem"
              description="LOrem ipsum DOlor"
            />

            <Card
              color={"#FFEED4"}
              image={EspecPsy}
              title="Especialização"
              description="LOrem ipsum DOlor"
            />

            <Card
              color={"#D4EFFF"}
              image={PsychoExp}
              title="Experiência"
              description="LOrem ipsum DOlor"
            />
          </section>
        </section>

        <section className="flex mt-24 max-w-7xl m-auto gap-10">
          <img className="rounded-full w-64 h-72" src={Avatar2} alt="" />
          <section className="flex  flex-col justify-center">
            <h2 className="mb-10">Giulia Mendonça</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              porta purus dapibus, varius urna sit amet, mollis mauris.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Pellentesque suscipit justo sapien. Aliquam erat
              volutpat. Suspendisse placerat blandit condimentum.
            </p>
          </section>
        </section>
      </section>
    </>
  );
}

export default App;
