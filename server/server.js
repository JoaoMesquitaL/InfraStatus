const express = require('express'); // chamando dependencia do express
const mysql = require('mysql'); // chamando dependencia do mysql
const cors = require('cors'); // chamando dependencia do cors  
const path = require('path'); // chamando dependencia do path

const app = express(); // criando a aplicação express

app.use(express.static(path.join(__dirname, "public"))); //função middleware para arquivos estáticos (css e javascript)
app.use(cors()); // cuidando de comparilhamento de Cross Origin para client - server
app.use(express.json()); // função middleware para lidar com requisições JSON

const port = 5000; // definindo a porta do servidor que ouvirá as requisições

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
}); // iniciando o servidor e exibindo mensagem no console
