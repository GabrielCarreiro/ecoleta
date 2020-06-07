const express = require("express")
const server = express()

//Pegar o banco de dados
const db = require("./database/db.js")

// Configurar pasta publica 
server.use(express.static("public"))

// Habilitar o uso do req.bory da nossa aplicação
server.use(express.urlencoded({ extended: true }))

// Usando templete engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})
// Configurando caminhos da minha aplicação 
server.get("/", (req, res) => {
    return res.render("index.html", { title: "Um título" })
})

server.get("/create-point", (req, res) => {

    //  req.query



    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {

    //req.body: O corpo do nosso form
    // inserir dados no banco de dados 

    const query = `
              INSERT INTO places (
                  image,
                  name, 
                  address,
                  address2,
                  state,
                  city,
                  items
              ) VALUES (?,?,?,?,?,?,?);
          `
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if (err) {
            console.log(err)
            return res.send("ERRO no cadastro !")
        }

        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render("create-point.html", { saved: true })
    }

    db.run(query, values, afterInsertData)

})


server.get("/search", (req, res) => {

    const search = req.query.search

    if (search == "") {
        // pesquisa vazia 
        return res.render("search-results.html", { total: 0 })
    }

    // Pegar os dados do banco de dados

    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
        if (err) {
            return console.log(err)
        }

        // Total de elementos dentro do array

        const total = rows.length

        // Mostra a pagina html com os dados do banco de dados
        return res.render("search-results.html", { places: rows, total: total })
    })
})


server.listen(3000)

