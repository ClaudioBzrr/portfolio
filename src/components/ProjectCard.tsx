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
    <div className="m-2 flex h-48 w-72 flex-col justify-evenly rounded-lg bg-slate-500 p-4 md:h-56 md:w-[36rem]">
      <div className="text-xl font-semibold md:text-3xl">
        <p>{name}</p>
      </div>
      <div className="text-md md:text-xl">
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
