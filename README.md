# roast-my-ui - Kinoba Hackathon

*Developed in 1 week during the Svelte x AdonisJS Kinoba hackathon I organized from June 10th to June 14th 2024*

![Hackathon Logo](hackathon-logo.png)

## Tech stack
- Backend: 
![TypeScript](https://img.shields.io/badge/Typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white) ![AdonisJS](https://img.shields.io/badge/AdonisJS_6-%23220052.svg?style=flat&logo=adonisjs&logoColor=white) ![Bun](https://img.shields.io/badge/Bun-14151A.svg?style=flat&logo=Bun&logoColor=white)
![Postgres](https://img.shields.io/badge/Postgres-%23316192.svg?style=flat&logo=postgresql&logoColor=white)  

- Frontend: 
![Svelte](https://img.shields.io/badge/Svelte-%23f1413d.svg?style=flat&logo=svelte&logoColor=white) ![Inertia](https://img.shields.io/badge/Inertia-hotpink.svg?style=flat&logo=Inertia&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/Tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-%2335495e.svg?style=flat&logo=vite&logoColor=%234FC08D) 

- Tools: 
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=flat&logo=eslint&logoColor=white) ![Dependabot](https://img.shields.io/badge/dependabot-025E8C?style=flat&logo=dependabot&logoColor=white)

## Requirements

- Node >= 21
- typescript
- postgresql

- Bun: https://bun.sh/
```bash
brew tap oven-sh/bun
brew install bun
```

- Foreman: https://github.com/ddollar/foreman
```bash
gem install foreman
```

## Development

- **(ℹ️ only for first setup)** Create manually your DB via psql or TablePlus  
  - Open psql console: `psql postgres`
  - Create DB: `CREATE DATABASE db_name;`
  - Grant privileges to your DB: `GRANT ALL PRIVILEGES ON DATABASE db_name TO developer;`
- Run `./scripts/reset-db` to setup database and seed
- Run `./scripts/dev` to start development server
