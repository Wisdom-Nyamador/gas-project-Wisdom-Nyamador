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


