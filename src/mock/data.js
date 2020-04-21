import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Tanner | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Portfolio-io-io', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "You've reached ",
  name: 'Tanner | ShibbyBro',
  subtitle: 'Unknown Developer Worldwide Extraordinaire!',
  cta: 'Onward →',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: 'Dynamic Programmer with over 10+ years in Sales & Marketing.',
  paragraphTwo: 'Born & Raised in Texas ',
  paragraphThree:
    "Spent 15 years in Cali soak'n up some sweet rays, meet'n the love of my life and making my way up the ladder of the CPG industry with Sales & Marketing.",
  resume: 'https://www.linkedin.com/in/tanneracord', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'RoboFriends.png',
    title: 'RoboFriends',
    info:
      'React App that searches through a Robot API of friends depending on the information you enter into the search bar.',
    info2: '',
    url: 'https://shibbybro.github.io/Robofriends/',
    repo: 'https://github.com/ShibbyBro/Robofriends', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'BackgroundGen.png',
    title: 'Background Generator',
    info: 'I needed background colors so I made a generator to do that.',
    info2: "A small project that helps getting some cool looking color combo's for backgrounds.",
    url: 'https://github.com/ShibbyBro/background-generator',
    repo: 'https://github.com/ShibbyBro/background-generator', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'Anchorman.jpg',
    title: 'Anchorman Quote Machine',
    info: 'Spitting out quotes from one of the best film in history.',
    info2: '',
    url: 'https://codepen.io/shibbybro/full/QGjWZd',
    repo: 'https://codepen.io/shibbybro/pen/QGjWZd?editors=0100', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Slip into my DM's | Lets Work together",
  btn: 'Press It',
  email: 'tanneracord@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/ShibbyBro',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/tanneracord',
    },
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/theshibbybro',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: 'https://codepen.io/shibbybro/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
