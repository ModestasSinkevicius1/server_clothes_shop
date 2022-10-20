const clothesAPI = (app, con) =>{

  app.get('/clothes', (req, res) => {
      const sql = `
      SELECT * FROM clothes
      `;
      con.query(sql, (err, result) => {
        if(err) throw err;
        res.send(result);
      });
  })

  app.post('/clothes', (req, res) => {
    const sql = `
    INSERT INTO clothes (type, color, price)
    VALUES (?, ?, ?)
    `;
    con.query(sql, [req.body.type, req.body.color, req.body.price], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
  })

  app.delete('/clothes/:id', (req, res) => {
    const sql = `
      DELETE FROM clothes
      WHERE id = ?
      `;
      con.query(sql, [req.params.id], (err, result) => {
          if (err) throw err;
          res.send(result);
      });
  })

}

export { clothesAPI };

// READ RELATIONSHIP JOIN(LEFT, RIGHT, INNER)

// app.get("/resource", (req, res) => {
//   const sql = `
//   SELECT itemsA_atr.*, itemB.id AS itemB_id_rename, itemB.post
//   FROM itemsA AS itemsA_rename
//   LEFT JOIN itemsB AS itemsB_rename
//   ON itemsB_rename.itemA_id = itemsA_rename.id
//   ORDER BY itemsA_rename.title
//   `;
//   con.query(sql, (err, result) => {
//       if (err) throw err;
//       res.send(result);
//   });
// });