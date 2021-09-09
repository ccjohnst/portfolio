import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Obfuscate from 'react-obfuscate';
import PortfolioContext from '../../context/context';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  // const { networks } = footer;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          <a
            // key={id}
            href="https://twitter.com/cccjohnston"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="twitter"
          >
            <i className="fa fa-twitter fa-inverse" />
          </a>
          <a
            // key={id}
            href="https://www.linkedin.com/in/ccjohnst/"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="linkedin"
          >
            <i className="fa fa-linkedin fa-inverse" />
          </a>
          <a
            // key={id}
            href="https://github.com/ccjohnst"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="github"
          >
            <i className="fa fa-github fa-inverse" />
          </a>

          <Obfuscate
            // key={id}
            email="christopherjohnston@protonmail.com"
          >
            <i className="fa fa-envelope fa-inverse" />
          </Obfuscate>

          {/* {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })} */}
        </div>
        <hr />
      </Container>
    </footer>
  );
};

export default Footer;
