const client = require("./database");

(async () => {
  await client.connect();
  await client.query(
    `select * from person where id_person = $1`,
    [2],
    (error, result) => {
      if (!error) {
        console.log(result.rows);
      }
      client.end();
    }
  );
})();
