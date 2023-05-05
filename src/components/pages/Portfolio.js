import React from 'react';
import Project from '../Project';

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <Project arg="0" />
      <div id="other-apps">
        <Project arg="1"/>
        <Project arg="2"/>
        <Project arg="3"/>
        <Project arg="4"/>
        <Project arg="5"/>
      </div>
    </section>
  );
}
