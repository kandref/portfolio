export interface Project {
  id: string;
  title: string;
  client: string;
  period: string;
  description: string;
  techStack: string[];
  type: "work" | "training" | "self";
}

export const projects: Project[] = [
  // Power BI Projects
  {
    id: "eigerindo-dashboards",
    title: "Regional & Branch Manager Dashboards",
    client: "PT. Eigerindo MPI",
    period: "Jun 2025 - Present",
    description:
      "Designed and developed end-to-end Power BI dashboards tailored for Regional and Branch Managers across Indonesia. These dashboards provide actionable insights into sales performance, operational efficiency, and regional KPIs. Built with optimized data models using Power Query, DAX, and Dynamic RLS for secure, role-based access control.",
    techStack: ["Power BI", "Microsoft Fabric"],
    type: "work",
  },
  {
    id: "table-of-duty",
    title: "Table of Duty Dashboard",
    client: "PT. Mitra Solusi Telematika",
    period: "Sep 2023 - Present",
    description:
      "Developed an interactive dashboard to monitor and manage duty schedules across departments. The dashboard enables real-time tracking of task assignments, workload distribution, and team availability, improving operational coordination and resource allocation.",
    techStack: ["Power BI", "SQL"],
    type: "work",
  },
  {
    id: "kpi-incentive",
    title: "KPI and Incentive Dashboard Funnel",
    client: "PT. Mitra Solusi Telematika",
    period: "Jul 2022 - Present",
    description:
      "Supporting and handling issues for a comprehensive KPI tracking system that monitors employee performance metrics and calculates incentive distributions. The funnel visualization helps management identify performance bottlenecks and optimize incentive structures.",
    techStack: ["Power BI", "SQL"],
    type: "work",
  },
  {
    id: "innovation-funnel",
    title: "Innovation Funnel Dashboard",
    client: "PT. Mitra Solusi Telematika",
    period: "Aug 2022 - Sep 2022",
    description:
      "Built and supported a dashboard tracking the innovation pipeline from idea submission to implementation. The funnel visualization provides insights into innovation stages, success rates, and time-to-implementation metrics.",
    techStack: ["Power BI", "SQL"],
    type: "work",
  },
  {
    id: "activity-based-costing",
    title: "Activity Based Costing Dashboard",
    client: "PT. Mitra Solusi Telematika",
    period: "Feb 2022 - Oct 2022",
    description:
      "Developed an analytical dashboard implementing Activity Based Costing methodology to accurately allocate overhead costs to products and services. This enabled better pricing decisions and profitability analysis across business units.",
    techStack: ["Power BI", "SQL"],
    type: "work",
  },
  {
    id: "customer-profile",
    title: "Customer Profile and Repeat Order Dashboard",
    client: "PT. Tunas Dwipa Matra",
    period: "Apr 2021 - Jul 2021",
    description:
      "Created a comprehensive customer analytics dashboard identifying patterns in customer behavior, including social economic status (SES), occupation, and purchasing patterns. The insights helped marketing teams target regular customers and increase repeat order rates.",
    techStack: ["Power BI", "Python", "Excel"],
    type: "work",
  },
  {
    id: "market-share",
    title: "Dashboard Market Share",
    client: "PROA Kominfo - Binar Academy",
    period: "Mar 2023 - Apr 2023",
    description:
      "Final project for the Business Intelligence Analyst certification program. Developed a market share analysis dashboard that visualizes competitive positioning, market trends, and growth opportunities across different segments.",
    techStack: ["Power BI"],
    type: "training",
  },
  {
    id: "global-store",
    title: "Global Store Performance Dashboard",
    client: "Self Project",
    period: "Personal Portfolio",
    description:
      "A self-initiated project analyzing global retail store performance metrics including sales trends, regional comparisons, and product category analysis. Demonstrates proficiency in data visualization and business analytics storytelling.",
    techStack: ["Power BI"],
    type: "self",
  },

  // Python/ML Projects
  {
    id: "sentiment-analysis",
    title: "Trip Advisor Sentiment Analysis",
    client: "FGA Kominfo - STEI ITB",
    period: "Oct 2020",
    description:
      "Final project implementing Natural Language Processing techniques to analyze customer reviews from Trip Advisor. Used TF-IDF for feature extraction and LSTM neural networks for sentiment classification, achieving accurate prediction of customer satisfaction levels.",
    techStack: ["Python"],
    type: "training",
  },
  {
    id: "credit-segmentation",
    title: "Credit Card Customer Segmentation",
    client: "Shift Academy",
    period: "Nov 2021",
    description:
      "Applied unsupervised machine learning techniques to segment credit card customers based on spending behavior, payment patterns, and credit utilization. The clustering analysis helped identify distinct customer personas for targeted marketing strategies.",
    techStack: ["Python"],
    type: "training",
  },
  {
    id: "clustering-challenge",
    title: "Unsupervised Learning Clustering Lab Challenge",
    client: "Shift Academy Learning Festival (SALF)",
    period: "Nov 2021",
    description:
      "Participated in a competitive lab challenge applying various clustering algorithms to real-world datasets. Explored K-Means, Hierarchical Clustering, and DBSCAN to discover hidden patterns and validate cluster quality using silhouette scores.",
    techStack: ["Python"],
    type: "training",
  },
  {
    id: "bikeshare-analysis",
    title: "Toronto Bikeshare Data Analysis",
    client: "FGA Kominfo - STEI ITB",
    period: "Oct 2020",
    description:
      "Mid-project analyzing Toronto's bike-sharing system data to uncover usage patterns, peak hours, and station popularity. The analysis provided insights for optimizing bike distribution and predicting demand across different locations.",
    techStack: ["Python", "SQL"],
    type: "training",
  },

  // Microsoft Fabric Projects
  {
    id: "fabric-implementation",
    title: "Microsoft Fabric Enterprise Implementation",
    client: "PT. Eigerindo MPI",
    period: "Jun 2025 - Present",
    description:
      "Explored and implemented Microsoft Fabric to enhance enterprise analytics capabilities. The implementation covers end-to-end data pipeline including data ingestion from multiple sources, transformation using Dataflows Gen2, semantic modeling, and integration with Power BI for unified reporting.",
    techStack: ["Microsoft Fabric", "Power BI"],
    type: "work",
  },

  // Pentaho/ETL Projects
  {
    id: "pentaho-dw",
    title: "Data Warehouse Operations",
    client: "PT. Mitra Talenta Group (CELERATES)",
    period: "Feb 2022 - Jun 2025",
    description:
      "Operated and maintained the Data Warehouse infrastructure using Pentaho Data Integration. Responsibilities included running scheduled database batches, monitoring ETL job performance, troubleshooting data pipeline issues, and ensuring data quality across the warehouse.",
    techStack: ["Pentaho DI", "SQL"],
    type: "work",
  },
  {
    id: "dbs-archiving",
    title: "DBS Archiving Phase 2",
    client: "PT. Mitra Solusi Telematika",
    period: "Feb 2022 - Mar 2022",
    description:
      "Implemented the second phase of database archiving solution to optimize storage and improve query performance. The project involved designing archiving strategies, migrating historical data, and establishing retention policies.",
    techStack: ["SQL", "Pentaho DI"],
    type: "work",
  },

  // Excel Projects
  {
    id: "marketing-analytics",
    title: "Marketing Research Analytics",
    client: "PT. Tunas Dwipa Matra",
    period: "Jan 2021 - Jul 2021",
    description:
      "Conducted comprehensive marketing research using Excel for customer database analysis. Analyzed customer demographics including SES, occupation, salary, and location data to develop targeted marketing strategies and understand competitor positioning.",
    techStack: ["Excel", "Python"],
    type: "work",
  },
];

// Get projects by tech stack
export const getProjectsByTech = (tech: string): Project[] => {
  return projects.filter((project) => project.techStack.includes(tech));
};

// Get unique tech stacks
export const getAllTechStacks = (): string[] => {
  const techs = new Set<string>();
  projects.forEach((project) => {
    project.techStack.forEach((tech) => techs.add(tech));
  });
  return Array.from(techs);
};
