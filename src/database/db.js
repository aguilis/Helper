// importar a depedencia do sqlite3
const sqlite3 = require("sqlite3").verbose();

//Criar o objeto que ira fazer operacoes no Banco de Dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//Utilizar o obejto de banco de dados, para nossas operacoes.
 db.serialize(() => {
//   //Criar uma tabela com comandos SQL

//   db.run(`
//     CREATE TABLE IF NOT EXISTS places(
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       image TEXT,
//       name TEXT,
//       address TEXT,
//       address2 TEXT,
//       state TEXT,
//       city TEXT,
//       items TEXT
//     );
//   `)

//   //Inserir dados na tabela
//   const query = `
//     INSERT INTO places (
//       image,
//       name,
//       address,
//       address2,
//       state,
//       city,
//       items
//     ) VALUES (
//       ?,?,?,?,?,?,?
//     );
//   `
//   const values = [
//     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
//     "Paper Side",
//     "Guilherme Gemballa, Jardim America ",
//     "Numero 260",
//     "Santa Catarina",
//     "Rio do Sul",
//     "Papeis e Papelao"
//   ]

//   function afterInsertData(err){
//     if(err){
//       return console.log(err)
//     }
//     console.log("Cadastrado com sucesso")
//     console.log(this)
//   }

//   db.run(query, values, afterInsertData)

//Consultar os dados na tabela
 db.all(`SELECT * FROM places`, function(err, rows){
  if(err){
    return console.log(err)
  }
  console.log("Aqui estao os seus registros")
  console.log(rows)
})
 })

//   //Deletar um dado na tabela
// db.run(`DELETE FROM places `, function(err) {
//   if(err){
//     return console.log(err)
//   }
//   console.log("Registro deletado com sucesso")

  
//  })})

 