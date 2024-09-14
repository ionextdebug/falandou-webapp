import Nav from "./shared/components/nav";

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        <section className="grid lg:grid-cols-2 p-10 sm:grid-cols-1 w-screen">
          <div className="h-screen">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Falandou Play
            </h1>
            <p>Aprenda Inglês 100% on-line.</p>
              <ul className="p-2">
                <li className="p-1 list-disc">
                  <b>Aprenda a falar</b> inglês com histórias incríveis.
                </li>

                <li className="p-1 list-disc">
                  <b>Pratique com perguntas</b> que evoluem com você, do simples
                  ao complexo.
                </li>

                <li className="p-1 list-disc">
                  <b>Desenvolva pensamento crítico</b> com diversas formas de se
                  questionar.
                </li>

                <li className="p-1 list-disc">
                  <b>Treine a audição</b> com material de apoio.
                </li>

                <li className="p-1 list-disc">
                  <b>Entenda o idioma</b> com traduções gerais e
                  contextualizadas.
                </li>
              </ul>
            <p>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white hover:text-black hover:bg-greenlight rounded-lg bg-greenlightalt my-10"
              >
                Clique aqui e comece a aprender
                
              </a>
            </p>
          </div>
          <div className="h-screen">
            <iframe
              src="https://www.youtube.com/embed/dElrVDrqtVQ"
              allowFullScreen={true}
              className="h-full w-full"
            />
          </div>
        </section>
      </main>
    </>
  );
}
