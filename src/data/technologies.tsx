import { FaReact } from 'react-icons/fa';
import { SiExpress, SiTypescript } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';

export const technologies: { name: string; icon: React.JSX.Element }[] = [
  {
    name: 'React',
    icon: <FaReact size={32} />,
  },
  {
    name: 'Express',
    icon: <SiExpress size={32} />,
  },
  {
    name: 'Typescript',
    icon: <SiTypescript size={32} />,
  },
  {
    name: 'Postgresql',
    icon: <BiLogoPostgresql size={32} />,
  },
];
