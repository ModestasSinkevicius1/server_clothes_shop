const orderAPI = (app, con) =>{

  app.get('/orders', (req, res) => {
      const sql = `
      SELECT _order.*, cl.type, cl.color, cl.price 
      FROM _order
      LEFT JOIN clothes AS cl
      ON _order.clothes_id = cl.id
      `;
      con.query(sql, (err, result) => {
        if(err) throw err;
        res.send(result);
      });
  })

  app.put('/orders/:id', (req, res) => {
    const sql = `
    UPDATE _order SET status = ? WHERE id = ?
    `;
    con.query(sql, [req.body.status, req.params.id], (err, result) => {
      if(err) throw err;
      res.send(result);
    });
  })

  app.post('/orders', (req, res) => {
    const sql = `
    INSERT INTO _order (size, comment, clothes_id)
    VALUES (?, ?, ?)
    `;
    con.query(sql, [req.body.size, req.body.comment, req.body.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
  })

  app.delete('/orders/:id', (req, res) => {
    const sql = `
      DELETE FROM _order
      WHERE id = ?
      `;
      con.query(sql, [req.params.id], (err, result) => {
          if (err) throw err;
          res.send(result);
      });
  })

}

export { orderAPI };