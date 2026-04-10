import { Container, Row, Col } from 'react-bootstrap';
import resume from '../data/resume';

export default function Resume() {
  return (
    <div style={{ paddingTop: '80px', paddingBottom: '60px' }}>
      <Container style={{ maxWidth: 860 }}>

        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold mb-1" style={{ fontSize: '2.2rem' }}>{resume.name}</h1>
          <p className="mb-0" style={{ color: '#8b949e' }}>
            <a href={`mailto:${resume.email}`} className="text-decoration-none" style={{ color: '#667eea' }}>
              {resume.email}
            </a>
            <span className="mx-2" style={{ color: '#30363d' }}>|</span>
            {resume.phone}
          </p>
        </div>

        {/* Summary */}
        <section className="mb-5">
          <h2 className="resume-section-title">Professional Summary</h2>
          <p style={{ color: '#c9d1d9', lineHeight: 1.75, fontSize: '0.95rem' }}>
            {resume.summary}
          </p>
        </section>

        {/* Skills */}
        <section className="mb-5">
          <h2 className="resume-section-title">Technical Skills</h2>
          <Row className="g-3">
            {resume.skills.map((cat) => (
              <Col xs={12} sm={6} key={cat.category}>
                <div className="glass-card p-3 h-100">
                  <p className="fw-semibold mb-2" style={{ fontSize: '0.8rem', color: '#a78bfa' }}>
                    {cat.category}
                  </p>
                  <div className="d-flex flex-wrap gap-1">
                    {cat.skills.map((skill) => {
                      const isSome = skill.endsWith('*');
                      const label = isSome ? skill.slice(0, -1) : skill;
                      return (
                        <span
                          key={skill}
                          className={`skill-badge ${isSome ? 'skill-badge-note' : ''}`}
                          title={isSome ? 'Some experience' : undefined}
                        >
                          {label}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <p className="mt-2" style={{ fontSize: '0.75rem', color: '#6e7681' }}>
            * Some experience
          </p>
        </section>

        {/* Experience */}
        <section className="mb-5">
          <h2 className="resume-section-title">Experience</h2>
          <div className="d-flex flex-column gap-4">
            {resume.experience.map((job) => (
              <div className="glass-card p-4" key={job.company}>
                <div className="d-flex flex-wrap justify-content-between align-items-start mb-1">
                  <div>
                    <span className="experience-company">{job.company}</span>
                    <span className="ms-2" style={{ fontSize: '0.82rem', color: '#6e7681' }}>
                      {job.location}
                    </span>
                  </div>
                  <span className="experience-period">{job.period}</span>
                </div>
                <p className="experience-title mb-3">{job.title}</p>
                <ul className="experience-bullets ps-3 mb-0">
                  {job.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="resume-section-title">Education</h2>
          {resume.education.map((edu) => (
            <div className="glass-card p-4" key={edu.school}>
              <div className="d-flex flex-wrap justify-content-between align-items-start mb-1">
                <span className="experience-company">{edu.school}</span>
                <span className="experience-period">{edu.location}</span>
              </div>
              <p className="experience-title mb-3">{edu.degree}</p>
              <ul className="experience-bullets ps-3 mb-0">
                {edu.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

      </Container>
    </div>
  );
}
