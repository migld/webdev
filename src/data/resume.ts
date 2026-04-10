export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  location: string;
  title: string;
  period: string;
  bullets: string[];
}

export interface EducationItem {
  school: string;
  location: string;
  degree: string;
  highlights: string[];
}

export interface ResumeData {
  name: string;
  email: string;
  phone: string;
  summary: string;
  skills: SkillCategory[];
  experience: ExperienceItem[];
  education: EducationItem[];
}

const resume: ResumeData = {
  name: 'David I. Migl',
  email: 'dmigl6445@gmail.com',
  phone: '832-638-5533',
  summary:
    'Data Platform Engineer with 6+ years of experience building and maintaining modern data platforms ' +
    'end-to-end—orchestration, CI/CD, batch and real-time pipelines, CDC, containerization, cloud ' +
    'infrastructure, infrastructure as code, cloud data warehousing, and observability—while also ' +
    'ensuring that end user needs are prioritized and providing support to colleagues through code ' +
    'reviews, on-call incident response, and day-to-day engineering challenges.',
  skills: [
    {
      category: 'Languages & Scripting',
      skills: ['Python', 'Bash', 'SQL', 'Jinja', 'PromQL*', 'Scala*', 'Java*', 'C++*', 'JavaScript', 'HTML5/CSS'],
    },
    {
      category: 'Data Warehousing & Transformation',
      skills: ['Snowflake', 'dbt Core', 'dbt Cloud', 'Spark Scala*'],
    },
    {
      category: 'Orchestration',
      skills: ['Prefect', 'Control-M'],
    },
    {
      category: 'Streaming & CDC',
      skills: ['Redpanda', 'Kafka', 'Materialize', 'HVR (Change Data Capture)'],
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL (incl. Neon)', 'SQL Server', 'Oracle', 'MySQL', 'Netezza'],
    },
    {
      category: 'Cloud & Infrastructure',
      skills: ['AWS (ECS)', 'Azure (AKS)', 'Docker', 'Kubernetes', 'GCP*'],
    },
    {
      category: 'CI/CD',
      skills: ['GitHub Actions', 'GitLab CI'],
    },
    {
      category: 'IaC',
      skills: ['Terraform (HCL)'],
    },
    {
      category: 'Monitoring & Observability',
      skills: ['Grafana', 'Datadog', 'Incident.io'],
    },
  ],
  experience: [
    {
      company: 'Crane Worldwide Logistics',
      location: 'Houston, Texas',
      title: 'Data Engineer',
      period: 'February 2023 – Present',
      bullets: [
        'Expanded a modern greenfield data platform on AWS and Azure, built around Snowflake as the data warehouse and Prefect as the orchestrator, supporting downstream batch workflows (i.e. Power BI dashboards).',
        'Developed Prefect pipelines to ingest data from a variety of sources (REST APIs, SFTP, Cloud Storage) and utilized HVR CDC pipelines to replicate changes from various application databases into Snowflake.',
        'Enabled BI end users to develop and deploy dbt models in a medallion architecture by implementing and maintaining CI/CD pipelines via Prefect and GitHub Actions, supporting local development, testing, and validation workflows.',
        'Designed and implemented the deployment architecture and development lifecycle for our streaming infrastructure — Redpanda, Kafka, and Materialize — enabling near real-time data use cases on our data platform.',
        'Automated external data sharing via Snowflake listings, enabling internal data products to be shared with external customers.',
        'Implemented Docker-based containerization and automated deployment pipelines across ECS and AKS, enabling continuous delivery.',
        'Created alerts, integrations, and incidents via Incident.io and Grafana to monitor infrastructure resources, p95 latencies, and scheduled job run failures.',
        'Designed the development and deployment framework for Streamlit apps on Snowpark Container Services (SPCS), powering internal apps that plug directly into the data warehouse.',
      ],
    },
    {
      company: 'USAA Federal Savings Bank',
      location: 'San Antonio, Texas',
      title: 'Data Engineer II (promoted from Data Engineer III)',
      period: 'June 2020 – January 2023',
      bullets: [
        'Built and maintained ELT batch and streaming pipelines using dbt Cloud, NiFi, and internal tooling to load data into Snowflake, supporting analytical workflows and event-driven applications.',
        'Led migration of legacy ETL data flow pipelines from on-prem database services to dbt cloud framework – deployed 3 pipeline implementations to production, contributed to documentation, and hosted office hours.',
        'Investigated and implemented automated unit testing using dbt test functionality integrated with a GitLab CI/CD pipeline, replacing manual testing toil.',
        'Mentored and onboarded 8 team members and an intern on best practices and developing in a new tech stack.',
      ],
    },
  ],
  education: [
    {
      school: 'Trinity University',
      location: 'San Antonio, Texas',
      degree: 'Bachelor of Arts in Economics and in Computer Science (Second Major), Minor in Mathematics',
      highlights: [
        'Senior Capstone (HEB): Full-stack app built in Agile using FastAPI, PostgreSQL, Docker, and Kubernetes; deployed to GCP.',
        'Teaching Assistant and Tutor: Supported students in software engineering, big data, and CS fundamentals.',
        'Web Development Intern – Hexcal (Shanghai): Static website using JavaScript, HTML5/CSS, focused on UI/UX and SEO.',
        'Big Data and ML Project: Predictive models with Spark Scala using U.S. Census and health/pollution datasets.',
      ],
    },
  ],
};

export default resume;
