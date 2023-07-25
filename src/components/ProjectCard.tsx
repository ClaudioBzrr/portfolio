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
    <div>
      <div>
        <p>{name}</p>
      </div>
      <div>
        <p>{description}</p>
      </div>
      {url ? (
        <div>
          <a href={url}>Link</a>
        </div>
      ) : null}
      <div>
        <a href={repository}>Repositório</a>
      </div>
    </div>
  );
}
