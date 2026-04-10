import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import resume from '../data/resume';

export default function Home() {
  return (
    <section className="hero-section">
      <Container>
        <div style={{ maxWidth: 700 }}>
          <p className="text-uppercase fw-semibold mb-2" style={{ color: '#667eea', letterSpacing: '0.12em', fontSize: '0.85rem' }}>
            Data Platform Engineer
          </p>
          <h1 className="hero-title mb-4">{resume.name}</h1>
          <p className="hero-subtitle mb-5">
            6+ years building modern data platforms end-to-end — pipelines, streaming,
            cloud infrastructure, and observability. Based in San Antonio, TX.
          </p>
          <div className="d-flex gap-3 flex-wrap">
            <Link to="/resume" className="btn btn-gradient btn-lg">
              View Resume
            </Link>
            <a
              href="https://github.com/migld/webdev"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-lg"
            >
              GitHub
            </a>
            <a
              href={`mailto:${resume.email}`}
              className="btn btn-outline-secondary btn-lg"
            >
              Contact
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
