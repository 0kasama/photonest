<div align="center">
  <h1>Photonest</h1>
  <p>An image gallery application (like Unsplash or Pinterest) with simpler features including authentication, and uploading images.</p>
</div>

## Tech Stacks
<p  align="center"> 
<b>Backend</b><br>
<img  src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"> 
<img  src="https://img.shields.io/badge/Node.JS-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="NodeJS"> 
<img  src="https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white" alt="Express"> 
<br><b>Frontend</b><br>
<img  src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black" alt="React"> 
<img  src="https://img.shields.io/badge/Next.JS-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white"  alt="Next.JS"> 
<br><b>Database</b><br>
<img  src="https://img.shields.io/badge/Sequelize-52B0E7.svg?style=for-the-badge&logo=Sequelize&logoColor=white" alt="Sequelize"> 
<img  src="https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL"> 
<img  src="https://img.shields.io/badge/postman-FF6C37.svg?style=for-the-badge&logo=postman&logoColor=white" alt="postman"> 
</p>

## Getting Started

### Requirements
 - Code Editor (ex. VS Code, Sublime Text, etc.)
 - Web Browser (ex. Chrome, Firefox, Microsfot Edges, etc.)
 - [Node.JS LTS Version or Latest](https://nodejs.org/)
 - [PostgreSQL](https://www.postgresql.org/download/)

## Installation

### Step-by-step  how to run the app locally
1. Clone the repository
   ```
   git clone https://github.com/0kasama/photonest.git
   cd photonest
   ```
2. Open backend directory and install all packages
	```
   cd backend
   npm install
   ```
3. Create and set `.env` file [(check env-examples)](https://github.com/0kasama/photonest/blob/main/backend/env-examples)
4. Setup the database
	```
   npx sequelize-cli db:create
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all
   ```
5. Run the backend
	```
   npm run dev
   ```
6. Open the frontend directory and install all packages
	```
	cd ..
   cd frontend
   npm install
   ```
7. Set the `BASE_URL`: Adjust the `BASE_URL` in the [(frontend/src/utils/baseUrl)](https://github.com/0kasama/photonest/blob/main/frontend/src/utils/BaseUrl.js) file
8. Run the frontend
	```
   npm run dev
   ```

## Previews
![image](https://github.com/user-attachments/assets/99d1c51e-abae-4ee1-8347-17ea67c1fcaa)

### Visitor
![image](https://github.com/user-attachments/assets/c415da46-464a-4729-93a9-f7a413d9b4b3)

### Owner / User who upload the picture
![image](https://github.com/user-attachments/assets/1c28b9f2-2d07-46c4-98d7-e4f2831424f0)
