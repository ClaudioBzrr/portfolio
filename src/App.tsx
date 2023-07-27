import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiPostgresql } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { Badge } from './components/Badge';
import { ProjectCard } from './components/ProjectCard';

export function App() {
  return (
    <div className="flex min-h-screen max-w-full flex-row items-center justify-center bg-gray-950">
      <div className="mx-10 flex flex-col items-center justify-center pt-5">
        <article className="flex h-screen flex-col justify-evenly">
          <section>
            <div className="text-2xl text-slate-300 sm:text-5xl">
              <h1 className="w-full text-left">Olá 👋,</h1>
              <h1 className="pt-2">
                Me chamo{' '}
                <span className="font-semibold text-sky-500">
                  Claudio Bezerra
                </span>
              </h1>
            </div>
            <p className="mt-2 text-left text-xl font-medium italic text-slate-500 sm:mt-4 sm:text-3xl">
              Desenvolvedor Fullstack
            </p>
          </section>
          <section className="mt-10">
            <div className="text-slate-300 sm:text-xl md:text-2xl">
              <p className="w-full">
                Estudo React, React Native e Node js desde{' '}
                <a
                  className="text-indigo-400 underline"
                  href="https://github.com/ClaudioBzrr/semanaomnistack11-be-the-hero"
                  target="__blank"
                >
                  2020.
                </a>
              </p>
              <p>De lá pra cá aprendi coisas como :</p>
              <ul className="mt-10 flex flex-col justify-center">
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
          <section className="mt-10">
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
        <article className="min-h-screen">
          <section className="mt-10">
            <div>
              <p className="text-center text-2xl text-slate-300 sm:text-5xl">
                🚀 Meus projetos
              </p>
            </div>
            <div className="mt-10 flex min-h-full flex-col items-center justify-center">
              <ProjectCard
                name="eslint-config"
                description="Minha configuração pessoal do Eslint, aplicado para react e node js"
                url="https://www.npmjs.com/package/@claudiobzrr/eslint-config"
                repository="https://github.com/ClaudioBzrr/eslint-config"
              />
              <ProjectCard
                name="UserRegistration"
                description="Um sistema que tem o objetivo de cadastrar e gerenciar usuários"
                repository="https://github.com/ClaudioBzrr/UserRegistration"
              />
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
