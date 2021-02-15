import {
  home, about, rules, game,
} from './src/view/html';
import { addToMain } from './src/helpers/functions';
import './style.scss';

import { promise } from './src/promise-of-unity';
// import $ from 'jquery';
// import axios from 'axios';

const btnHome = document.getElementById('btn-home');

btnHome.addEventListener('click', (e) => {
  e.preventDefault();
  addToMain(home);
  document.getElementById('game-container').style.display = 'none';
});

const btnAbout = document.getElementById('btn-about');

btnAbout.addEventListener('click', (e) => {
  e.preventDefault();
  addToMain(about);
  document.getElementById('game-container').style.display = 'none';
});

const btnRules = document.getElementById('btn-rules');

btnRules.addEventListener('click', (e) => {
  e.preventDefault();
  addToMain(rules);
  document.getElementById('game-container').style.display = 'none';
});

const btnPlay = document.getElementById('btn-play');

btnPlay.addEventListener('click', (e) => {
  e.preventDefault();
  addToMain('');
  document.getElementById('game-container').style.display = 'block';
  promise();
});

const score = 0;

// si le score recu est plus grand que le score du webgl, tu mets le nouveau score dans le localstorage (HIGHSCORE), un seul highscore.
// boucle for
// bonus : array qui contient pour chaque partie le score (fait de pouvoir identifier une partie a instant T genre date) + score (objets)
// json stringify pour mettre dans local storage puis json.parse pour
