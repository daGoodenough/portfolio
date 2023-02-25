import learnBtcWallet from '../images/learn-btc-wallet-addr.png';
import newsEdu from '../images/projects/news_edu.png';
import ticTacToe from '../images/projects/tic-tac-toe.png';
import redditClone from '../images/projects/project-reddit.png';
import awesomeWeather from '../images/projects/awesomer-weather.png';
import btcSite from '../images/projects/bitcoin_website_0.1.png';
import daGoodenoughTrial from '../images/projects/dagoodenough_0.1.png';

const projects = {
  1: {
    imageSrc: learnBtcWallet,
    imageAlt: 'Learn Bitcoin Wallet',
    title: 'Learn Bitcoin Wallet 02/20/2023',
    description: ` The Bitcoin wallet that helps you understand.
    Uses Docker to run a <em>Bitcoin Core</em> node in regtest mode.
    Users can create keys, address, and transactions all in the safe
    learning environment of regtest mode. <br />
    <strong>Key Technologies: </strong>BitcoinJS, React, NodeJS,
    MongoDB, and Docker`,
    link: 'http://learnbtcwallet.com',
    github: 'https://github.com/daGoodenough/learn-btc-wallet',
  },
  2: {
    imageSrc: newsEdu,
    imageAlt: 'News Education App',
    title: 'News Edu 01/08/2023',
    description: `
  Frontend Hackathon built primarily using React and Redux, the News API, 
  and a web scraping API. Myself and 2 other team members completed 
  this project in just a week  with over 200 commits. I learned how 
  to work effectivley as part of a team and meet out goals with a 
  limited timeline.`,
    github: 'https://github.com/daGoodenough/news-sifter',
  },
  3: {
    imageSrc: redditClone,
    imageAlt: 'Reddit Clone',
    title: 'Reddit Clone 11/02/2022',
    description: `
 Project Description...`,
    github: 'https://github.com/daGoodenough/project-reddit',
  },
  4: {
    imageSrc: ticTacToe,
    imageAlt: 'Tic Tac Toe',
    title: 'Tic Tac Toe 09/17/2022',
    description: `
  Project Description...`,
    github: 'https://github.com/daGoodenough/tictactoe',
  },
  5: {
    imageSrc: awesomeWeather,
    imageAlt: 'Weather App',
    title: 'Weather App 11/21/2022',
    description: `
  Project Description...`,
    github: 'https://github.com/daGoodenough/redux-weather',
  },
  6: {
    imageSrc: btcSite,
    imageAlt: 'Bitcoin Info',
    title: 'Bitcoin Info 07/2023',
    description: `
  Project Description...`,
    github: '#',
  },
  7: {
    imageSrc: daGoodenoughTrial,
    imageAlt: 'Blog Website screenshot',
    title: 'Blog Site 08/2023',
    description: `
  Project Description...`,
    github: '#',
  },
};

export default projects;
