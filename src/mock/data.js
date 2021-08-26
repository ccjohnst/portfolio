import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Chris Johnston - Front End Dev', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'cvbuilder.png',
    title: 'CV Builder',
    info: "A CV making tool that makes good use of React's state management and features an option to save the CV as a PDF.",
    info2: '',
    url: 'https://ccjohnst.github.io/cv-creator/',
    repo: 'https://github.com/ccjohnst/cv-creator', // if no repo, the button will not show up
    techs: ['React', 'Javascript', 'Sass'],
  },
  {
    id: nanoid(),
    img: 'tmmarketing.png',
    title: 'Mock Marketing Website',
    info: 'A website for a mock marketing company built using React, Chakra UI framework and mobile first design.',
    info2: '',
    url: 'https://ccjohnst.github.io/true-marketing/#/',
    repo: 'https://github.com/ccjohnst/true-marketing', // if no repo, the button will not show up
    techs: ['Javascript', 'React', 'Chakra UI'],
  },
  {
    id: nanoid(),
    img: 'coopersonarchitects.png',
    title: 'Mock Architects Website',
    info: 'A mock Architects Website built with NextJS and vanilla CSS.',
    info2: '',
    url: 'https://cooperson-clarke.vercel.app/',
    repo: 'https://github.com/ccjohnst/cooperson-clarke', // if no repo, the button will not show up
    techs: ['Javascript', 'React', 'NextJS'],
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/cccjohnston',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ccjohnst/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ccjohnst',
    },
  ],
};
