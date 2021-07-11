import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import FacebookRoundedIcon from '@material-ui/icons/FacebookRounded';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';

interface IContact {
  link: string;
  label: string;
  icon: React.ReactNode;
}

const contacts: IContact[] = [
  {
    link: 'https://github.com/nileshmoradiya',
    label: 'Github',
    icon: <GitHubIcon />,
  },
  {
    link: 'https://www.facebook.com/NnileshH',
    label: 'Facebook',
    icon: <FacebookRoundedIcon />,
  },
  {
    link: 'https://www.instagram.com/nilesh_moradiya',
    label: 'Instagram',
    icon: <InstagramIcon />,
  },
  {
    link: 'https://www.linkedin.com/in/nilesh-moradiya',
    label: 'LinkedIn',
    icon: <LinkedInIcon />,
  },
  {
    link: 'https://twitter.com/Nilesh_Moradiya',
    label: 'Twitter',
    icon: <TwitterIcon />,
  },
  {
    link: 'mailto:nileshmoradiya_coder@outlook.com',
    label: 'Email',
    icon: <EmailRoundedIcon />,
  },
];

export default contacts;
