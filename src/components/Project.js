import React from 'react';

function Project(props) {

  const projectsArray = [
    {
      name: "Type Ninja",
      link: "https://typeninja.herokuapp.com/",
      github: "https://github.com/MasynNay/TypeNinja",
      imgSrc: "./images/Type Ninja Screenshot.png",
      imgAlt: "A website for practicing typing"
    },
    {
      name: "Password Generator",
      link: "https://mersopolis.github.io/Mersopolis-Random-Password-Generator/",
      github: "https://github.com/Mersopolis/Mersopolis-Random-Password-Generator",
      imgSrc: "./images/Password Generator Screenshot.png",
      imgAlt: "A website for a password generator"
    },
    {
      name: "README Generator",
      link: "https://github.com/Mersopolis/Mersopolis-README-Generator",
      github: "https://github.com/Mersopolis/Mersopolis-README-Generator",
      imgSrc: "./images/Terminal ASCII Notepad.png",
      imgAlt: "A command line program to generate professional READMEs"
    },
    {
      name: "Movie Recommender",
      link: "https://jsheen98.github.io/coding-bootcamp-project1-movie-recommender/",
      github: "https://github.com/JSheen98/coding-bootcamp-project1-movie-recommender",
      imgSrc: "./images/Movie Recommender Screenshot.png",
      imgAlt: "A website titled 'Movie Recommender' displaying posters for the Top 5 Movies Now Playing in Theaters"
    },
    {
      name: "E-commerce Back End",
      link: "https://github.com/Mersopolis/Mersopolis-E-commerce-Back-End",
      github: "https://github.com/Mersopolis/Mersopolis-E-commerce-Back-End",
      imgSrc: "./images/Terminal ASCII Dollar Sign.png",
      imgAlt: "A command terminal displaying ASCII art of a US dollar sign"
    },
    {
      name: "Social Network Back End",
      link: "https://github.com/Mersopolis/Cloud-Merso",
      github: "https://github.com/Mersopolis/Cloud-Merso",
      imgSrc: "./images/Terminal ASCII Cloud.png",
      imgAlt: "ASCII art of a cloud"
    },
    {
      name: "Photographer/Videographer Finder Network",
      link: "http://viewfinder.herokuapp.com/",
      github: "https://github.com/Mersopolis/Cloud-Merso",
      imgSrc: "./images/View Finder Logo Zoomed In.png",
      imgAlt: "An outline of a camera with the title View Finder"
    }
  ];
  
  if (props.arg === "0") {
    return (
      <div id="first-app" className="app">
        <a href={projectsArray[0].link}>
          <img src={projectsArray[0].imgSrc} alt ={projectsArray[0].imgAlt} />
          <h3>{projectsArray[0].name}</h3>
        </a>
        <a className="github" href={projectsArray[0].github}>GitHub</a>
      </div>
    );
  }
  return (
    <div className="app">
      <a href={projectsArray[props.arg].link}>
        <img src={projectsArray[props.arg].imgSrc} alt ={projectsArray[props.arg].imgAlt} />
        <h3>{projectsArray[props.arg].name}</h3>
      </a>
      <a className="github" href={projectsArray[props.arg].github}>GitHub</a>
    </div>
  );
}

export default Project;