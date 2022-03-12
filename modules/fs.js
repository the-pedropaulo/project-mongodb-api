const fs = require('fs');
const path = require('path');

// Criar uma pasta

// fs.mkdir(path.join(__dirname, '/test'), (error) =>{
//     if(error) {
//         console.log("Deu erro ", error)
//         return false
//     };

//     console.log('Criada com sucesso');
//     return true
// });

fs.writeFile(path.join(__dirname, '/test', 'arqquivo.html'), 
    "<h1>i</h1>", 
    (error) => {
        if(error) {
            console.log("Deu erro ", error)
        };

        console.log('Arquivo criado com sucesso');

        fs.appendFile(path.join(__dirname, '/test', 'arqquivo.html'), 
            "<h2>hell</h2>", 
            (error) => {
                if(error) {
                    console.log("Deu erro ", error)
                };

                console.log('Arquivo criado com sucesso');
        });

        fs.readFile(path.join(__dirname, '/test', 'arqquivo.html'), 
            "utf8", 
            (error, data) => {
                if(error) {
                    console.log("Deu erro ", error)
                };

                console.log(data);
        });
});

