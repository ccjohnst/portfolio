import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';

const skillItems = [
  { skillName: 'React' },
  { skillName: 'Javascript' },
  { skillName: 'HTML' },
  { skillName: 'CSS' },
];

const Skills = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="skills">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1>Skills</h1>
          <ul>
            {skillItems.map((skill) => (
              <li>{skill.skillName}</li>
            ))}
          </ul>
        </Fade>
      </Container>
    </section>
  );
};

export default Skills;
