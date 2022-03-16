const express = require('express');
const app = express();
app.use(express.json());


app.get('/', (require, response) => {
    return response.json({text: 'retornando Json'})
});

app.get('/api', (require, response) => {
    response.json({message:'ola, esta é minha api em node.'})
})

const PORT = 4000
app.listen(PORT, () => {
    console.log(`aplicação node rodando na porta ${PORT}`)
});