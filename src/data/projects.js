import roygbiv from '../images/projects/roygbiv.png';
import psitadel from '../images/projects/psitadel.png';
import portfolio from '../images/projects/portfolio.png';
import learnBtcWallet from '../images/learn-btc-wallet-addr.png';
import newsEdu from '../images/projects/news_edu.png';
import ticTacToe from '../images/projects/tic-tac-toe.png';
import redditClone from '../images/projects/project-reddit.png';
import awesomeWeather from '../images/projects/awesomer-weather.png';
import btcSite from '../images/projects/bitcoin_website_0.1.png';
import daGoodenoughTrial from '../images/projects/dagoodenough_0.1.png';

const projects = [
  {
    imageSrc: roygbiv,
    imageAlt: 'ROYGBIV frontend',
    title: 'BOLT 12 Lightning Prism 05/15/2023',
    description: `The winning hackathon project at btc++ 2023 in Austin, 
    TX. We created a CLN plugin and a user friendly UI that utilizes BOLT 12 to construct a "Prism" which can split lightning payments from the <strong>server side</strong>.
    </br></br><strong>Key Technologies: </strong>Python, CLN, bash scripting, Open Source Workflow`,
    link: 'https://roygbiv.money',
    github: 'https://github.com/farscapian/clams-app-docker',
  },
  {
    imageSrc: psitadel,
    imageAlt: 'Psitadel',
    title: 'Psitadel 04/01/2023',
    description: `A DAO-like community of sovereign individuals from all backgrounds operating on a bitcoin standard and exchanging value. I am building the website with plans to build a nostr bounty board.<br /><br />
    <strong>Key Technologies: </strong>React, NodeJS, GitHub Open Source Workflow`,
    link: 'https://psitadel.com',
    github: 'https://github.com/daGoodenough/psitadel',
  },
  {
    imageSrc: portfolio,
    imageAlt: 'This Portfolio Site',
    title: 'This Portfolio Site 03/01/2023',
    description: ` This portfolio site where you are viewing all of my projects and proof of work. Here you will find a multitude of reasons why you want me to be a part of your team or to work on you project. <br /><br />
    <strong>Key Technologies: </strong>React, Bootstrap`,
    link: 'http://dagoodenough.com',
    github: 'https://github.com/daGoodenough/portfolio',
  },
  {
    imageSrc: learnBtcWallet,
    imageAlt: 'Learn Bitcoin Wallet',
    title: 'Learn Bitcoin Wallet 02/20/2023',
    description: ` The Bitcoin wallet that helps you understand.
    Uses Docker to run a <em>Bitcoin Core</em> node in regtest mode.
    Users can create keys, address, and transactions all in the safe
    learning environment of regtest mode. <br /><br />
    <strong>Key Technologies: </strong>BitcoinJS, React, NodeJS,
    MongoDB, and Docker`,
    link: 'http://learnbtcwallet.com',
    github: 'https://github.com/daGoodenough/learn-btc-wallet',
  },
  {
    imageSrc: newsEdu,
    imageAlt: 'News Education App',
    title: 'News Edu 01/08/2023',
    description: `
  Frontend Hackathon built primarily using React and Redux, the News API, 
  and a web scraping API. Myself and 2 other team members completed 
  this project in just a week  with over 200 commits. I learned how 
  to work effectivley as part of a team and meet our goals with a 
  limited timeline. <br /><br />
  <strong>Key Technologies:</strong> React, Redux, Bootstrap, RESTful API`,
    github: 'https://github.com/daGoodenough/news-sifter',
  },
  {
    imageSrc: awesomeWeather,
    imageAlt: 'Weather App',
    title: 'Weather App 11/21/2022',
    description: `
  `,
    github: 'https://github.com/daGoodenough/redux-weather',
  },
  {
    imageSrc: redditClone,
    imageAlt: 'Reddit Clone',
    title: 'Reddit Clone 11/02/2022',
    description: `
 `,
    github: 'https://github.com/daGoodenough/project-reddit',
  },
  {
    imageSrc: ticTacToe,
    imageAlt: 'Tic Tac Toe',
    title: 'Tic Tac Toe 09/17/2022',
    description: `
 `,
    github: 'https://github.com/daGoodenough/tictactoe',
  },
  {
    imageSrc: daGoodenoughTrial,
    imageAlt: 'Blog Website screenshot',
    title: 'Blog Site 08/2022',
    description: `
  `,
    github: '',
  },
  {
    imageSrc: btcSite,
    imageAlt: 'Bitcoin Info',
    title: 'Bitcoin Info 07/2022',
    description: `
  `,
    github: '',
  },
];

export default projects;
