import React, { useState, useEffect } from 'react';

import { Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Fade from 'react-reveal/Fade';

import Title from '../Title/Title';

// Technology icons
import css from '../../images/techicons/CSS3_logo_and_wordmark.svg';
import html from '../../images/techicons/HTML5_logo_and_wordmark.svg';
import js from '../../images/techicons/Javascript-shield.svg';
import react from '../../images/techicons/React-icon.svg';

const skillItems = [
  { skillName: 'React', subSkills: ['Node.js', 'Gatsby'], logo: react },
  { skillName: 'Javascript', subSkills: ['JSX', 'ES6'], logo: js },
  { skillName: 'HTML', logo: html },
  { skillName: 'CSS', subSkills: ['SCSS'], logo: css },
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
      <Container className="skills-container">
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <Title title="Skills" />
          <ListGroup horizontal="md" className="skill-items">
            {skillItems.map((skill) => (
              <>
                <ListGroup.Item>
                  <img src={skill.logo} width="100%" height="50px" alt={skill.Skillname} />
                  {skill.skillName}{' '}
                  {skill.subSkills &&
                    skill.subSkills.map((subSkill) => (
                      <ListGroup className="list-subgroup">
                        <ListGroup.Item>{subSkill}</ListGroup.Item>
                      </ListGroup>
                    ))}
                </ListGroup.Item>
              </>
            ))}
          </ListGroup>
        </Fade>
      </Container>
    </section>
  );
};

export default Skills;
