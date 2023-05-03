import React, { useState } from 'react';

function Project() {
  return (
    <section id="projects">
        <h2>Projects</h2>
        <a id="firstapp" class="app" href="https://typeninja.herokuapp.com/">
          <div>
            <img src="assets/images/Type Ninja Screenshot.png" alt="A website for practicing typing" />
            <h3>Type Ninja</h3>
          </div>
        </a>
      <div id="otherapps">
        <a class="app" href="https://mersopolis.github.io/Mersopolis-Random-Password-Generator/">
          <div>
            <img src="assets/images/Password Generator 692p.png" alt="A website for a password generator" />
            <h3>Password Generator</h3>
          </div>
        </a>
        
        <a class="app" href="https://github.com/Mersopolis/Mersopolis-README-Generator">
          <div>
            <img src="assets/images/README Generator screenshot.png" alt="A command line program to generate professional READMEs" />
            <h3>README Generator</h3>
          </div>
        </a>

        <a class="app" href="https://jsheen98.github.io/coding-bootcamp-project1-movie-recommender/">
          <div>
            <img src="assets/images/movie-recommender-ss.jpg" alt="A website titled 'Movie Recommender' displaying posters for the Top 5 Movies Now Playing in Theaters" />
            <h3>Movie Recommender</h3>
          </div>
        </a>

        <a class="app" href="#">
          <div>
            <img src="assets/images/coming-soon.jpg" alt="Coming Soon" />
            <h3>Coming soon</h3>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Project;
