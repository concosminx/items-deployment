# items-deployment
A simple app to ilustrate depolyment with Docker (backend - Render, frontend - Netlify, db - Neon Serverless Postgres)

## Uses: 
- Docker
- PostgreSQL
- SpringBoot (backend)
- React (frontend)

### Create a Docker image and upload it to Docker Hub
- check the provided Dockerfile
- build and tag an image with `docker build -t your_docker_username/your_project_name:latest .`
- check the result with `docker image ls`
- push the image to docker hub with `docker push your_docker_username/your_project_name`

### Host the database on [neon.tech](https://neon.tech/)
- create an account (it's free)
- create a new project & database
- get the database acces information (extract the user, password and actual connection string)

### Host the backend on [render.com](https://render.com/)
- create an account (it's free)
- create a new WebService using the previous uploaded Docker Image `docker.io/your_docker_username/your_project_name:latest`
- provide the Environment Variables (see [.env](https://raw.githubusercontent.com/concosminx/items-deployment/refs/heads/main/backend/.env.example)); for FRONTEND_URL use http://localhost:3000
- check the deployment log
- get the service address and use it in your frontend app in [.env](https://raw.githubusercontent.com/concosminx/items-deployment/refs/heads/main/frontend/.env.example)

### Host the backend on [netlify](https://www.netlify.com/)
- build the static version of the frontend using the URL of the deployed backend with `npm run build`
- create an account (it's free)
- deploy the `build` folder with drag & drop
- get the frontend URL, go to the deployed backend and modify the env. variable FRONTEND_URL (in order to fix cors filters)
- test everything
