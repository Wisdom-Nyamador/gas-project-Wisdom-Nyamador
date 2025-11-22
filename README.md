📦 GAS Project (Node.js + Docker + Monitoring + CI/CD)

A production-ready Node.js application containerized with Docker and fully instrumented with Prometheus and Grafana for monitoring.
Includes a complete CI/CD pipeline, linting, and Docker Compose orchestration.

🚀 Features

✔ Node.js API with health & metrics endpoints

✔ Dockerized application

✔ Prometheus metrics exporter

✔ Grafana dashboards ready

✔ Docker Compose stack: App + Prometheus + Grafana

✔ GitHub Actions CI (install, lint, test)

✔ Production-ready Dockerfile

✔ Monitoring folder structure already prepared
📁 Project Structure

gas-project/
│
├── src/
│   ├── index.js          # Main server
│   ├── health.js         # Health check endpoint
│   └── metrics.js        # Prometheus metrics
│
├── docker/
│   ├── Dockerfile        # Container build configuration
│   └── docker-compose.yml
│
├── infra/
│   └── monitoring/
│       └── prometheus-config.yml
│
├── package.json
├── README.md
└── .github/workflows/
    └── ci.yml            # GitHub CI pipeline
    
🐳 Running the Application with Docker

1. Build & Run App Only
<img width="1366" height="768" alt="Screenshot (63)" src="https://github.com/user-attachments/assets/672b50ae-1b25-42ed-b5ba-60fbd8a3805b" />

📊 Running Full Monitoring Stack (App + Prometheus + Grafana)
<img width="1366" height="768" alt="Screenshot (64)" src="https://github.com/user-attachments/assets/a36fd16e-8c14-4589-8fd8-6a84df61602e" />
<img width="1366" height="768" alt="Screenshot (66)" src="https://github.com/user-attachments/assets/c498f217-d850-4cda-af5b-b8a2a264e97e" />
<img width="1366" height="768" alt="Screenshot (65)" src="https://github.com/user-attachments/assets/d0adac45-fa8d-44ec-80ff-23cddb781968" />

Running Lint & Tests Locally
<img width="1366" height="768" alt="Screenshot (67)" src="https://github.com/user-attachments/assets/b3374e3d-b1b8-41cc-84f0-8f75edba41a6" />
<img width="1366" height="768" alt="Screenshot (68)" src="https://github.com/user-attachments/assets/e789307e-bb74-4553-9965-6438af0e3fa1" />










