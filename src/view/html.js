export const home = `
<section class="home d-flex justify-around">
    <div class="w-25">
        <img class="mick" src="./mick.png" alt="Mick the Hero" />
    </div>
    <div class="d-flex flex-column w-60">
        <h2 class="game-title">
            Mick Smith <br />
            & <br />
            the Atlante-Flow
        </h2>
        <p class="paragraph-home">
        You are <span>Mick Smith</span>, a <span>kangaroo explorer</span> fascinated by the legends of <span>Atlantide</span>.
        You have finally found, after years of research, the
        famous city of the sea bed. <br />
        <br />
        Its famous gemstone inlaid <span>trident</span> is
        hidden in the <span> treasure room</span>.
        <br />
        <br />
        To do so, you will have to solve the <span>puzzles</span> proposed in each room of the temple of Atlantis, otherwise, death is guaranteed !
      </p>
    </div>
</section>
`;

export const about = `
<section class="about d-flex justify-center items-start">
<div class="team w-40">
  <h2>Meet the Team</h2>
  <p class="p-about w-90 p-team">
  This project was carried out as part of our first Hackathon at Interface3. There are 6 of us: <span>three back-end developers</span> (Manon Priels, Nur Guclu and Zulikhan Usumova), <span>two game developers</span> (Berenice Lauren Pirlot and Sophie Lebigot) and <span>one front-end developer </span>(Camille Verriest). <br/> <br/> We had about 48 hours to come up with an idea to introduce people to the world of programming. We had to create a team, find an idea and make it happen. <br/> <br/> 
  <span>Here we are :</span>
  </p>
  <div class="team-img">
  <div class="tooltip">
      <img src="./PhotoProfilSophie.png" alt="Sophie" />
      <span class="tooltiptext">Sophie</span>
    </div>
    <div class="tooltip">
    <img src="./camille.png" alt="Sophie" />
    <span class="tooltiptext">Camille</span>
  </div>
  <div class="tooltip">
  <img src="./zouli.png" alt="Zouli" />
  <span class="tooltiptext">Zouli</span>
</div>
<div class="tooltip">
<img src="./bee.jpg" alt="Bee" />
<span class="tooltiptext">Bee</span>
</div>
<div class="tooltip">
<img src="./manon.jpg" alt="Manon" />
<span class="tooltiptext">Manon</span>
</div>
<div class="tooltip">
<img src="./nur.jpg" alt="Nur" />
<span class="tooltiptext">Nur</span>
  </div>
</div>
</div>
<div class="d-flex flex-column w-40 if3-hack">
  <div class="d-flex items-start">
    <img class="if3-img" src="./if3.png" alt="Interface 3" />
    <div class="d-flex flex-column">
      <h2> Interface3 : Brussels Women's Training Center</h2>
      <p class="p-about p-right">
      <span>Interface 3 </span> is a training center that aims to expand and diversify <span>women's</span> professional investment fields and enable them to build an effective foundation for a <span>professional career in IT</span>. 
      </p>
      <a class="link-if" target="_blank" href="https://www.interface3.be/">
        <i class="fas fa-location-arrow"></i> Visit Interface3</a
      >
    </div>
  </div>
  <div class="d-flex items-start">
    <img class="brain-img" src="./brain.jpg" alt="Hackathon" />
    <div class="d-flex flex-column">
    <h2> Hackathon </h2>
    <p class="p-about p-right">
    A hackaton is an event during which <span>specialists</span> (developers, designers, programmers) meet during generally <span>48 hours</span> around a <span>collaborative</span> project of computer programming or digital creation. 
    This year the conditions related to COVID-19 complicated things a bit because we had the hackathon <span>entirely online</span>.  
    </p>
    </div>
  </div>
</div>
</section>
`;

export const rules = `
<section class="rules d-flex">
<div class="game-description w-40">
  <img class="img-size" src="./vague1.png" alt="Vague" />
  <img class="img-size" src="./vague2.png" alt="Vague" />
  <span class="first-span"> “ </span>
  <p>
  This game is a fun and innovative coding game for learning the
  basics of programming and algorithmics. At each level,
  we will give you a riddle or a task to do. You will have to
  drag and drop shapes to solve the task. If you
  succeed, you will reach the next level. Don't worry
  if you have never programmed before - programming is like solving puzzles.
  </p>
  <span class="second-span"> ”</span>
</div>
<div class="tuto d-flex flex-column w-40">
  <div class="tuto1-video">
    <h2>Drag & Drop</h2>
    <img src ="./introgame.gif" alt="Game Intro" />
  </div>
  <div class="tuto2-video">
    <h2>Succeed a level</h2>
    <ol>
    <li>1. You arrive in the first room. In order to get out of one room and into the next, you will have to <span>solve</span> an algorithm in the form of a <span>puzzle</span>.</li>
    <li>2. <span>Move the blocks</span> to form a correct algorithm: your character will advance along the <span>path you have created</span>. </li>
    <li>3. If the algorithm is <span>correct</span>, you <span>move</span> on to the next room, <span>if not</span>, back to <span>square one</span> ! </li>
</ol>
  </div>
</div>
</section>
`;

export const game = `
<div class="webgl-content">
      <div class="margin-top"></div>
      <div id="unityContainer" style="width: 720px; height: 450px;"></div>
      <div class="footer">
        <div class="fullscreen" onclick="unityInstance.SetFullscreen(1)"></div>
        <div class="title title-game">Mick Smith & the Atlante-Flow</div>
      </div>
    </div>
`;
