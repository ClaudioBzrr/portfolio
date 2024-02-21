import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

export const networkLinks: {
  name: string;
  link: string;
  icon: React.JSX.Element;
}[] = [
  {
    name: 'Github',
    link: 'https://github.com/ClaudioBzrr',
    icon: <FaGithub size={32} />,
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/claudio-bezerra-042511185',
    icon: <FaLinkedin size={32} />,
  },
  {
    name: 'E-mail',
    link: 'mailto:claudio.bezerra1998@gmail.com?subject=Gostaria de contato',
    icon: <IoIosMail size={32} />,
  },
];
