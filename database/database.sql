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
    description VARCHAR(255) NULL
)  ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO projects (user_name, company, project_title, category, status, priority, deadline, description)
VALUES 
  ("John Doe", "StellarSolutions", "Add missing information to customer database", "Data Entry", "In Progress", "High", "2023-12-15", "Complete customer records missing fields with public information"),
  ("Jane Smith", "Sprint Ventures", "AI Dataset Labeling", "Data Labeling", "Not started", "Medium", "2023-12-20", "Annotation of images for machine learning model training"),
  ("Alice Johnson", "NovaCraze", "Market Expansion Initiative", "Lead Generation", "Completed", "High", "2023-11-30", "Identifying and qualifying potential leads for market expansion");