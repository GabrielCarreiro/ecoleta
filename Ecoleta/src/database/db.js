// importar a dpendencia do sqlite 3
const sqlite3 = require("sqlite3").verbose()

// Criar objeto que ira fazer operaçoes no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
// Utilizar o objeto de dados, para nossas operaçoes
//db.serialize(() => {

    // Com comandos SQL eu vou:

    // Criar Tabela

  // db.run(`
     //  CREATE TABLE IF NOT EXISTS places (
         //  id INTEGER PRIMARY KEY AUTOINCREMENT,
         //   image TEXT,
         //   name TEXT,
         //   address TEXT,
         //   address2 TEXT,
        //  state TEXT,
         //  city TEXT,
        //   items TEXT

       // );
 //  `)

   // Inserir dados na tabela

 //  const query = `
      // INSERT INTO places (
        //   image,
        //    name, 
         //  address,
         //   address2,
        //    state,
        //    city,
        //  items
     //   ) VALUES (?,?,?,?,?,?,?);
  // `
    //const values = [
      //  "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
       // "Papel",
       // "Joao",
       // "N 1569",
       // "minas Gerais ",
       // "bento silva",
       // "Oleo"
  //  ]

      // function afterInsertData(err){
          // if(err){
            // return console.log (err)
       //    }

          //  console.log("Cadastrado com sucesso")
         //   console.log(this)
      //  }
   // db.run(query, values, afterInsertData)

    // Consultar dados da tabela

   // db.all(`SELECT * FROM places`, function(err, rows){
    //    if(err){
    //        return console.log (err)
   //     }
   //     console.log("Aqui estão seus dados")
    //    console.log(rows)
  //  })

    // Deletar os dados

   // db.run(`DELETE FROM places WHERE id= ?`, [2], function(err){
     //  if(err){
      //     return console.log (err)
      //  }
       //          console.log("Deletado")

 //  })
//})  