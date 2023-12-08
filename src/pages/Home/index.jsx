import React from 'react';
import './style.css';

function Home() {
  return (
    <div className="home-container">
      <div className="hero">
        <h1 className="hero-title">Welcome to My Cool Website!</h1>
        <p className="hero-subtitle">Explore the world through my eyes and get to know me better.</p>
      </div>
      <div className="home-content">
        <section className="bio">
          <h2>About Me</h2>
          <p>
          Hey there! 👋 I'm Edward (Eddy) T. Caldwell, a passionate and determined individual who recently emerged victorious from the intense coding boot camp experience. In just a few months, I've transformed from a coding enthusiast to a full-fledged code wizard.<br /><br />

      During the boot camp, I delved into the world of programming languages, tackled challenging projects, and collaborated with an amazing group of fellow coders. From debugging headaches to the triumphant feeling of making code work seamlessly, every moment was a step forward in my coding odyssey.<br /><br />

      I specialize in the <strong>MERN (MongoDB, Express.js, React.js, Node.js) stack</strong>, and I'm always eager to explore new technologies that push the boundaries of what's possible.<br /><br />

      My journey doesn't stop here; I'm on a mission to turn ideas into elegant solutions, one line of code at a time.<br /><br />

      If I'm not glued to my keyboard, you can find me exploring the latest tech trends, experimenting with side projects, or sipping on coffee while contemplating the next big coding adventure.<br /><br />

      Let's connect, collaborate, and create something extraordinary together!<br /><br />

      ✨ Let's code the future! ✨


          </p>
        </section>

        <section className="fun-facts">
  <h2>Fun Facts</h2>
  <ul>
    <li className="hover-effect">Tech Enthusiast: Always up for a coding challenge.</li>
    <li className="hover-effect">Gamer: Dive into the world of video games for fun.</li>
    <li className="hover-effect">Noodle Connoisseur: Believe that noodles make the world go round.</li>
  </ul>
</section>

      </div>
    </div>
  );
}

export default Home;
