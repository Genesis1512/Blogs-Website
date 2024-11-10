
# Blog Full-Stack Website

A full-stack blog website designed for sharing articles with an intuitive, user-friendly experience. The application includes:

    => A Homepage that displays a preview of all blog posts, with each card linking to a detailed page for the full content and author details.
    => A Blog page that showcases all available blogs, allowing users to browse and read articles.
    => An Add blog page where users can create and publish new blog posts.

Built with the MERN stack (MongoDB, Express, React, Node.js) and integrated with MongoDB Atlas for reliable and efficient data management, enabling smooth creation, storage, and retrieval of blog posts. This structure allows users to easily add, view, and interact with blogs, making content management and sharing seamless.


## Tech Stack

**Client:** ReactJS, CSS, JavaScript

**Server:** Node, Express, MongoDB


## Environment Variables

To configure the application, create a .env file in the root directory or use the already existing and add the following environment variables:

**MongoDB_URI:** 
This is the MongoDB connection string, used to connect your application to the MongoDB Atlas database.

```http
  MongoDB_URI=mongodb+srv://kaustubhrthomso:FZ9IiPYPmpbde9A4@blogdb.bnjoj.mongodb.net/?retryWrites=true&w=majority&appName=BlogDB
```
**PORT:** 
Specifies the port number on which the server will listen.

```http
  PORT=5000
```


## Installation of npm Packages

Install npm of Backend and Frontend

```bash
  npm install
  cd .\frontend\
  npm install 
```
## Starting of Servers

```bash
  npm run dev
  cd .\frontend\
  npm start 
```
## API Reference

#### Get all Blogs

```http
  GET /api/blog/read
```


#### Get BLog by id

```http
  GET /api/blog/read/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Post new Blog

```http
  POST /api/blog/add
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Name of new blog |
| `author`      | `string` | **Required**. Author of new blog |
| `description`      | `string` | **Required**. Description of new blog |
| `imageUrl`      | `string` | **Required**. Image of new blog |


#### Delete Perfume by id

```http
  DELETE /api/read/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


## Cors

In this project, CORS (Cross-Origin Resource Sharing) is used to enable secure communication between the backend and frontend, as they are hosted on different origins (URLs). By configuring CORS, we allow the frontend to make HTTP requests to the backend API without encountering cross-origin restrictions. 

```http
  const cors = require('cors');
```
