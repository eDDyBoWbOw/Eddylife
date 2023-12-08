import ProfilePicture from "../../assets/profilePic.webp";
import './style.css';

export default function About() {
  return (
    <div className="about-container">
      <img
        src={ProfilePicture}
        alt="Edward (Eddy) T. Caldwell"
        height="150"
        width="150"
        className="rounded-circle my-3 profile-picture"
      />
      <div className="about-content">
        <h1 className="my-3 about-title">About Me</h1>
        <p className="my-3 about-text">
          Hey, I'm Edward (Eddy) T. Caldwell; a Full-Stack Developer, leveling up my coding craft while being the best bartender you ever had (hehe).
          I'm a well-rounded mellow guy, with a huge personality. With a crazy sense of humor, born in Long Beach, CA, but raised in the world.
        </p>
      </div>
    </div>
  );
}
