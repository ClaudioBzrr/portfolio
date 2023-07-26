import { BsGithub } from 'react-icons/bs';
import { BiLink } from 'react-icons/bi';

interface IProjectCard {
  name: string;
  description: string;
  url?: string;
  repository: string;
}

export function ProjectCard({
  name,
  description,
  repository,
  url,
}: IProjectCard) {
  return (
    <div className="bg-slate-500 rounded-lg p-4 flex flex-col justify-evenly md:h-56 md:w-[36rem] h-48 w-72 m-2">
      <div className="md:text-3xl text-xl font-semibold">
        <p>{name}</p>
      </div>
      <div className="md:text-xl text-md">
        <p>{description}</p>
      </div>
      {url ? (
        <div className="flex flex-row items-center">
          <span className="text-3xl">
            <BiLink />
          </span>
          <a className="ml-4 text-lg font-medium" href={url} target="__blank">
            Link
          </a>
        </div>
      ) : null}
      <div className="flex flex-row items-center">
        <span className="text-3xl">
          <BsGithub />
        </span>
        <a
          className="ml-4 text-lg font-medium"
          href={repository}
          target="__blank"
        >
          Repositório
        </a>
      </div>
    </div>
  );
}
