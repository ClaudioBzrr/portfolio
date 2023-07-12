export function App() {
  return (
    <div className="bg-slate-900 w-screen h-screen flex flex-row items-center justify-center">
      <div className="flex flex-col items-center justify-center mx-9 md:max-w-xl">
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
                2020
              </a>
              ,desde então aprendi :
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
