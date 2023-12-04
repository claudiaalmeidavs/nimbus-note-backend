CREATE TABLE projects (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL DEFAULT "Unknown",
    company VARCHAR(50) NULL,
    creation_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    project_title VARCHAR(150) NOT NULL,
    category VARCHAR(50) NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT "Not started",
    priority VARCHAR(50) NOT NULL,
    deadline DATETIME NOT NULL,
    description VARCHAR(1000) NULL
)  ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO projects (user_name, company, project_title, category, status, priority, deadline, description)
VALUES 
  ("John Doe", "StellarSolutions", "Add missing information to customer database", "Data Entry", "In progress", "High", "2023-12-15", "Complete customer records missing fields with public information"),
  ("Jane Smith", "Sprint Ventures", "AI Dataset Labeling", "Data Labeling", "Not started", "Medium", "2023-12-20", "Annotation of images for machine learning model training"),
  ("Alice Johnson", "NovaCraze", "Market Expansion Initiative", "Lead Generation", "Completed", "High", "2023-11-30", "Identifying and qualifying potential leads for market expansion"),
  ("Bob Williams", "Tech Innovators", "Data Cleansing Project", "Data Entry", "In progress", "High", "2023-11-25", "Cleanse and standardize existing data for improved accuracy"),
  ("Emily Brown", "GlobalTech", "Market Analysis Report", "Market Research", "In progress", "Medium", "2023-12-10", "Conduct market research and compile a comprehensive analysis report"),
  ("David Turner", "ByteCrafters", "Customer Outreach Campaign", "Outreach", "Not started", "High", "2024-01-05", "Plan and execute a customer outreach campaign for product promotion"),
  ("Sophie Martinez", "InnoWare", "Data Annotation for ML", "Data Labeling", "Not started", "High", "2023-11-20", "Annotate data for machine learning model training"),
  ("Michael Lee", "Data Dynamics", "Lead Scoring System", "Lead Generation", "In progress", "High", "2023-12-18", "Develop a lead scoring system to prioritize potential clients"),
  ("Elena Garcia", "CodeCrafters", "Outsourcing Partnership Research", "Market Research", "In progress", "High", "2023-11-28", "Research potential outsourcing partners for cost-effective collaboration"),
  ("Ryan Walker", "TechSolutions", "Data Entry Quality Assurance", "Data Entry", "Completed", "Medium", "2023-11-15", "Perform quality assurance checks on existing data entry work"),
  ("Olivia Davis", "InnoGlobe", "Other Project A", "Other", "In progress", "Medium", "2023-12-22", "Description for an unspecified project in the 'Other' category"),
  ("Daniel Chen", "TechInnovate", "Lead Nurturing Campaign", "Lead Generation", "Not started", "High", "2023-12-25", "Implement a lead nurturing campaign for relationship building");