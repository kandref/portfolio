// Single source for every fact on the page. Keep it in sync with the CV.

export const profile = {
  name: "Kurnia Andre Febrian",
  role: "Business Intelligence Developer",
  company: "PT Eigerindo MPI",
  location: "Indonesia",
  email: "kurniaandre39@gmail.com",
  linkedin: "https://www.linkedin.com/in/kurniaandref6/",
  github: "https://github.com/kandref",
  whatsapp: "https://wa.me/6281278139229",
  whatsappLabel: "+62 812 7813 9229",
  cv: "/cv-kurnia-andre-febrian.pdf",
};

export const intro =
  "I build the reporting layer for a national retail company: Power BI models on top of BigQuery, the access rules around them, and the small cloud jobs that keep them running and delivered on time. I came to data from theoretical physics, and I have worked in business intelligence since 2022.";

export const spec = [
  { label: "Role", value: "BI Developer, Eigerindo" },
  { label: "In BI since", value: "Feb 2022" },
  { label: "Main stack", value: "Power BI · BigQuery · Fabric · Cloud Run" },
  { label: "Degree", value: "B.Sc. Physics, ITERA" },
];

export interface NowItem {
  title: string;
  body: string;
  stack: string;
}

export const now: NowItem[] = [
  {
    title: "Retail dashboards on BigQuery",
    body: "Power BI dashboards for regional and branch managers across Indonesia, covering sales, store performance and incentive tracking. Heavy models run in DirectQuery against BigQuery. Row-level security reads one master access table, so changing who sees which region is a table update, not a model edit.",
    stack: "Power BI, DAX, BigQuery, Dynamic RLS",
  },
  {
    title: "Fabric capacity autoscaler",
    body: "A small Cloud Run service that sets the Microsoft Fabric capacity size by schedule: smaller overnight, standard during working hours, larger on request. Every change is logged, and a monthly email summarises hours per size and the estimated cost.",
    stack: "Python, FastAPI, Cloud Run, Cloud Scheduler, Fabric API",
  },
  {
    title: "Report automation",
    body: "Recurring reports that used to be pulled and sent by hand now run as scheduled jobs: query BigQuery, build the Excel file, email it to the people who need it. The daily sales report goes out this way.",
    stack: "Python, Cloud Run Jobs, Cloud Scheduler, SMTP",
  },
  {
    title: "Power BI under version control",
    body: "Moved 17 Power BI projects from folders of manual backups into Git, using the PBIP format. Each repo has the same layout, a changelog, and a tag for every version published to the Service, so rolling back is a checkout.",
    stack: "PBIP, TMDL, Git, PowerShell",
  },
];

export interface Job {
  period: string;
  company: string;
  role: string;
  points: string[];
  current?: boolean;
}

export const jobs: Job[] = [
  {
    period: "Jun 2025 –",
    company: "PT Eigerindo MPI",
    role: "Business Intelligence Developer",
    current: true,
    points: [
      "Implemented Microsoft Fabric for ingestion, transformation and semantic models, alongside the existing BigQuery warehouse.",
      "Built and maintain the nationwide dashboards for regional and branch managers (see the work listed above).",
      "Standardised visual templates so reports look and behave the same across regions.",
    ],
  },
  {
    period: "Feb 2022 – Jun 2025",
    company: "PT Mitra Talenta Group (CELERATES)",
    role: "Business Intelligence Developer",
    points: [
      "Built 3 Power BI dashboards and supported 2 more for client PT Mitra Solusi Telematika: Activity Based Costing, Innovation Funnel, KPI & Incentive, Table of Duty.",
      "Ran data warehouse batches in Pentaho Data Integration and handled data anomaly and discrepancy tickets.",
      "Mentored 23 students in the Kampus Merdeka certified independent study programme.",
    ],
  },
  {
    period: "Jan – Jul 2021",
    company: "PT Tunas Dwipa Matra",
    role: "Marketing Research & Development",
    points: [
      "Analysed the customer database (socio-economic status, occupation, income, age, city) with KNIME, Python and Excel.",
      "Built Power BI and Tableau dashboards on repeat orders and regular-customer behaviour.",
      "Ran customer and competitor surveys; tracked commodity prices at farm and market level.",
    ],
  },
  {
    period: "Sep 2016 – May 2019",
    company: "Institut Teknologi Sumatera",
    role: "Laboratory Assistant, Physics",
    points: [
      "Ran physics practicum sessions with lecturers and reported on student progress.",
    ],
  },
];

export interface Project {
  name: string;
  what: string;
  stack: string;
  year: string;
  url: string;
}

export const projects: Project[] = [
  {
    name: "retail-dashboard",
    what: "Web version of a retail KPI dashboard: target achievement, retail associate performance, daily to yearly sales trends. Fictional brands, built to explore what Power BI can't do.",
    stack: "Next.js, TypeScript, Recharts, NextAuth",
    year: "2026",
    url: "https://github.com/kandref/retail-dashboard",
  },
  {
    name: "jakarta-traffic-congestion-analysis",
    what: "Peak-hour speeds on Jakarta's main corridors (Dishub open data, 2023), read as a demand-versus-capacity problem: bottlenecks and queue-like density waves.",
    stack: "Python, pandas",
    year: "2026",
    url: "https://github.com/kandref/jakarta-traffic-congestion-analysis",
  },
  {
    name: "original_reproduction · enhanced_simulation",
    what: "My undergraduate thesis on traffic flow, moved from Scilab to Python. One repo is a faithful reproduction; the other extends it into a finite-volume solver with a Streamlit dashboard.",
    stack: "Python, NumPy, Streamlit",
    year: "2026",
    url: "https://github.com/kandref/enhanced_simulation",
  },
  {
    name: "supply-chain-research",
    what: "Numerical study of bottlenecks in production flow using the Armbruster–Degond–Ringhofer conservation-law model, with Monte Carlo uncertainty.",
    stack: "Python, finite volume, Godunov flux",
    year: "2026",
    url: "https://github.com/kandref/supply-chain-research",
  },
  {
    name: "artemis-ii-analysis",
    what: "Reconstruction of the Artemis II crewed lunar flyby from NASA JPL Horizons ephemeris data: trajectory, distance from Earth and Moon across the whole mission.",
    stack: "Python, Jupyter",
    year: "2026",
    url: "https://github.com/kandref/artemis-ii-analysis",
  },
  {
    name: "cashora",
    what: "Telegram bot for personal finance: log spending in a tap, budget alerts per category, daily digest, synced to Google Sheets and Looker Studio.",
    stack: "Python, SQLite, APScheduler, Sheets API",
    year: "2026",
    url: "https://github.com/kandref/cashora",
  },
  {
    name: "dicoding-clustering-and-classification",
    what: "Clustering and classification on financial transaction data for fraud exploration. Dicoding final submission.",
    stack: "Python, scikit-learn",
    year: "2026",
    url: "https://github.com/kandref/dicoding-clustering-and-classification",
  },
  {
    name: "Power-BI",
    what: "Earlier Power BI reports, including the market share project from the PROA Business Intelligence Analyst programme.",
    stack: "Power BI",
    year: "2023",
    url: "https://github.com/kandref/Power-BI",
  },
  {
    name: "Training-Fundamental-Pyhton · Statistics-Test · R",
    what: "Teaching material from mentoring: Python basics, hypothesis testing, R exercises.",
    stack: "Python, R, Jupyter",
    year: "2021–23",
    url: "https://github.com/kandref?tab=repositories",
  },
];

export interface Talk {
  date: string;
  title: string;
  host: string;
  kind: string;
  url?: string;
}

export const talks: Talk[] = [
  {
    date: "Aug – Dec 2024",
    title: "Mentor, Data Analytics & BI track, batch 7",
    host: "CELERATES × Kampus Merdeka",
    kind: "Mentoring",
  },
  {
    date: "Sep 2024",
    title: "Data Analytics untuk Efisiensi dan Inovasi Bisnis",
    host: "Studium Generale, Fisika ITERA",
    kind: "Talk",
    url: "https://fs.itera.ac.id/studium-generale-fisika-kebumian-itera-dorong-inovasi-sains-untuk-pembangunan-berkelanjutan/",
  },
  {
    date: "Jul 2023",
    title: "Building Captivating Interactive Reports with Power BI",
    host: "Celerates School",
    kind: "Training",
  },
  {
    date: "May 2023",
    title: "Future Business Intelligence for the Mining Industry",
    host: "Sains Data, ITERA",
    kind: "Webinar",
    url: "https://sd.itera.ac.id/future-business-intelligence-for-industry-mining/",
  },
  {
    date: "Feb – Jun 2023",
    title: "Mentor, Data Analytics & BI track, batch 4 (23 students)",
    host: "CELERATES × Kampus Merdeka",
    kind: "Mentoring",
  },
];

export const tools = [
  { group: "Reporting", items: "Power BI (DAX, Power Query, RLS, PBIP), Looker Studio, Tableau, Excel" },
  { group: "Data", items: "BigQuery SQL, PostgreSQL, SQL Server, MySQL, Pentaho Data Integration" },
  { group: "Platform", items: "Microsoft Fabric, Google Cloud Run, Cloud Scheduler, Vercel" },
  { group: "Code", items: "Python, R, TypeScript / Next.js, PowerShell, Git" },
];

export const education = {
  school: "Institut Teknologi Sumatera (ITERA)",
  degree: "B.Sc. Physics, Theoretical Physics group",
  period: "Aug 2015 – Mar 2020",
  thesis: "Thesis: traffic dynamics interaction analysis, modelled with numerical methods.",
};

export const certificates = [
  { year: "2023", name: "PROA Business Intelligence Analyst", by: "Kominfo × Binar Academy" },
  { year: "2022", name: "SQL", by: "Progate" },
  { year: "2021", name: "Belajar Machine Learning dan Visualisasi Data", by: "Dicoding" },
  { year: "2020", name: "FGA Data Science", by: "Kominfo × STEI ITB" },
  { year: "2020–21", name: "Data Analyst Track", by: "DQLab" },
];
