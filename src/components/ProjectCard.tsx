interface IProject {
  name: string;
  description: string;
  url: string;
  repository: string;
}

export function ProjectCard({ name, description, url, repository }: IProject) {
  return <div></div>;
}
