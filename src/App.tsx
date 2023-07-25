import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiPostgresql } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { Badge } from './components/Badge';

export function App() {
  return (
    <div className="bg-gray-950 max-w-screen min-h-screen flex flex-row items-center justify-center">
      <div className="flex flex-col items-center justify-center mx-10 pt-5">
        <article className="h-screen flex flex-col justify-evenly">
          <section className="presentation">
            <div className="text-slate-300 sm:text-5xl text-2xl">
              <h1 className="w-full text-left">Olá 👋,</h1>
              <h1 className="pt-2">
                Me chamo{' '}
                <span className="text-sky-500 font-semibold">
                  Claudio Bezerra
                </span>
              </h1>
            </div>
            <p className="italic text-slate-600 sm:text-3xl text-xl font-medium text-left sm:mt-4 mt-2">
              Desenvolvedor Fullstack
            </p>
          </section>
          <section className="Experience mt-10">
            <div className="text-slate-300 md:text-2xl sm:text-xl">
              <p className="w-full">
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
              <ul className="mt-10 text-md flex flex-col justify-center">
                <li>✔ Criar e Consumir Apis</li>
                <li>✔ Banco de dados (sql)</li>
                <li>✔ Tipar código (Typescript)</li>
                <li>✔ Gerenciar rotas</li>
                <li>✔ Gerenciar estado de variáveis</li>
                <li>✔ Componentização</li>
                <li>✔ Criar interfaces intuitivas</li>
                <li>✔ S.O.L.I.D. + Clean Architecture</li>
                <li>✔ Versionamento de código</li>
              </ul>
            </div>
          </section>
          <section className="tech-stack mt-10">
            <div className="md:min-w-[32em] ">
              <div className="flex flex-row items-center justify-between">
                <Badge icon={<FaReact />} />
                <Badge icon={<FaNodeJs />} />
                <Badge icon={<SiExpress />} />
                <Badge icon={<SiPostgresql />} />
                <Badge icon={<TbBrandVscode />} />
              </div>
            </div>
          </section>
        </article>
        <article className="h-screen"></article>
      </div>
    </div>
  );
}
