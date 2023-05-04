import React from 'react';

function Project(props) {

  const projectsArray = [
    {
      name: "Type Ninja",
      link: "https://typeninja.herokuapp.com/",
      imgSrc: "./images/Type Ninja Screenshot.png",
      imgAlt: "A website for practicing typing"
    },
    {
      name: "Password Generator",
      link: "https://mersopolis.github.io/Mersopolis-Random-Password-Generator/",
      imgSrc: "./images/Password Generator 692p.png",
      imgAlt: "A website for a password generator"
    },
    {
      name: "README Generator",
      link: "https://github.com/Mersopolis/Mersopolis-README-Generator",
      imgSrc: "./images/README Generator screenshot.png",
      imgAlt: "A command line program to generate professional READMEs"
    },
    {
      name: "Movie Recommender",
      link: "https://jsheen98.github.io/coding-bootcamp-project1-movie-recommender/",
      imgSrc: "./images/movie-recommender-ss.jpg",
      imgAlt: "A website titled 'Movie Recommender' displaying posters for the Top 5 Movies Now Playing in Theaters"
    },
    {
      name: "E-commerce Back End",
      link: "https://github.com/Mersopolis/Mersopolis-E-commerce-Back-End",
      imgSrc: "./images/Terminal-ASCII-Dollar-Sign.png",
      imgAlt: "A command terminal displaying ASCII art of a US dollar sign"
    },
    {
      name: "Social Network Back End",
      link: "https://github.com/Mersopolis/Cloud-Merso",
      imgSrc: "./images/Terminal-ASCII-Cloud.png",
      imgAlt: "ASCII art of a cloud"
    }
  ];
  
  if (props.arg === 0) {
    return (
      <div id="first-app" class="app">
        <a href={projectsArray[0].link}>
          <img src={projectsArray[0].imgSrc} alt ={projectsArray[0].imgAlt} />
          <h3>{projectsArray[0].name}</h3>
        </a>
      </div>
    );
  }
  return (
    <div class="app">
      <a href={projectsArray[props.arg].link}>
        <img src={projectsArray[props.arg].imgSrc} alt ={projectsArray[props.arg].imgAlt} />
        <h3>{projectsArray[props.arg].name}</h3>
      </a>
    </div>
  );
}

export default Project;
