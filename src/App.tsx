export function App() {
  return (
    <div className="bg-slate-900 w-screen h-screen flex flex-row items-center justify-center">
      <div className="flex flex-col items-center justify-center mx-9">
        <section className="presentation">
          <div className="text-slate-300 text-5xl">
            <h1 className="w-full text-left">Olá 👋,</h1>
            <h1 className="pt-2">
              Me chamo{' '}
              <span className="text-sky-500 font-semibold">
                Claudio Bezerra
              </span>
            </h1>
          </div>
          <p className="italic text-gray-950 text-3xl font-medium w-full text-left mt-4">
            Desenvolvedor Fullstack
          </p>
        </section>
        <section className="Experience mt-20">
          <div className="text-slate-300 text-2xl">
            <p className="">
              Estudo React, React Native e Node js desde{' '}
              <a
                className="underline text-indigo-400"
                href="https://github.com/ClaudioBzrr/semanaomnistack11-be-the-hero"
                target="__blank"
              >
                2020.
              </a>
            </p>
            <p>De lá pra cá aprendi coisas como :</p>
            <ul className="w-full mt-10 text-md list-disc flex flex-col justify-center">
              <li>Criar e Consumir Apis</li>
              <li>Banco de dados (sql)</li>
              <li>Tipar código (Typescript)</li>
              <li>Gerenciar rotas</li>
              <li>Gerenciar estado de variáveis</li>
              <li>Componentização</li>
              <li>Criar interfaces intuitivas</li>
              <li>S.O.L.I.D. + Clean Architecture</li>
              <li>Versionamento de código</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
