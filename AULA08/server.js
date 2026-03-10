//importar o modulo HTTP
//Esse moódulo permite criar servidores WEB

const http = require("http");

//criar um servidor http
//Função que será executada toda vez que alguém acessar o servidor
const server = http.createServer((req, res) => {
    //definir status da resposta e o tipo de conteudo
    //200 significa "requisição bem sucedida"
    //"content-type": "text/html": informar que estamos enviando um HTML
    res.writeHead(200, {"content-type": "text/html"})

    //enviar resposta ao navegador
    res.end(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Página Inicial do Servidor</title>
            <style>
                /* Reset básico e estilos simples */
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f5f5f5;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    text-align: center;
                }

                h1 {
                    color: #333;
                    margin-bottom: 0.5em;
                }

                p {
                    color: #555;
                    margin-bottom: 1.5em;
                }

                a {
                    text-decoration: none;
                    background-color: #007bff;
                    color: white;
                    padding: 0.6em 1.2em;
                    border-radius: 4px;
                    transition: background-color 0.3s;
                }

                a:hover {
                    background-color: #0056b3;
                }

                footer {
                    position: absolute;
                    bottom: 1em;
                    color: #888;
                    font-size: 0.9em;
                }
            </style>
        </head>
        <body>
            <h1>Bem-vindo ao Servidor!</h1>
            <p>Esta é a página inicial. Use os links abaixo para navegar.</p>
            <a href="/api">Ver API</a>

            <footer>
                &copy; 2026 Meu Servidor
            </footer>
        </body>
        </html>
    `)
})

//FAzer o servidor começar a escutar uma porta (3000)
//Isso significa que ele ficara escutando requisições desta porta
server.listen(3000, () => {
    console.log("servidor rodando em http://localhost:3000");
})