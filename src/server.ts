import 'reflect-metadata';
import express from 'express';
import './database';

const app = express();

//http://localhost:3333/users

app.get("/", (request, response) => {
    return response.json({message: "Hello Wolrd"})
});

//1 param => rota (recurso api)
//2 param => request, response
app.post("/", (request, response) => {
    return response.json({ message: "Os dados foram salvos com sucesso!"})
});

app.listen(3333, () => console.log("Server is running!"));