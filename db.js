const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./CasaCriativa.db')

db.serialize(function() {
    //criar tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );
    `)

    //inserir dado na tabela
   const query = `
   INSERT INTO ideas(
       image,
       title,
       category,
      description,
       link
   ) VALUES (?,?,?,?,?);
   `
   const values = [(
       'https://image.flaticon.com/icons/svg/2729/2729032.svg',
       'Karaokê',
       'Diversão em Família',
       'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam at natus delectus iure iusto dolore! Laborum accusamus non inventore mollitia, sapiente asperiores eligendi impedit, error ipsum modi vero, enim alias.',
       'https://www.facebook.com/?ref=tn_tnmn'
        )    
   ]

   db.run(query, values, function(err) {
       if (err) return console.log(err)

       console.log(this)
   })

    //consultar dados na tabela
    //db.all(`SELECT * FROM ideas`, function(err, rows){
    //    if (err) return console.log(err)

    //    console.log(rows)
    //})
    //deletar um dado da tabela
    //db.run(`DELETE FROM ideas WHERE id = ?`, [1], function(err) {
    //   if (err) return console.log(err)

    //    console.log("Deletei", this)
    //})
})

module.exports = db