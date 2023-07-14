import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiPostgresql } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { Badge } from './components/Badge';

export function App() {
  return (
    <div className="bg-gray-950 w-screen min-h-screen flex flex-row items-center justify-center">
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
          <p className="italic text-slate-600 text-3xl font-medium w-full text-left mt-4">
            Desenvolvedor Fullstack
          </p>
        </section>
        <section className="Experience mt-20">
          <div className="text-slate-300 text-2xl">
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
            <ul className="w-full mt-10 text-md flex flex-col justify-center">
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
        <section className="projects mt-10"></section>
      </div>
    </div>
  );
}
