import pool from '../configs/connectDB'

let getHomepage = async (req, res) => {
    // let data = [];
    // connection.query(
    //     'SELECT * FROM `users` ',
    //       function (err, results, fields) {
    //         //   console.log('check mysql')
    //         //   console.log(results); // results contains rows returned by server
    //         //   console.log(results[0]);
    //         results.map((row) => {
    //             data.push({
    //                 id: row.id,
    //                 email: row.email,
    //                 address: row.address,
    //                 firstName: row.firstName,
    //                 lastName: row.lastName
    //             })
    //         });
              
    //         // return res.render('index.ejs', { dataUser: data,test:'abc test' })
    //   })
  
  const [rows, fields] = await pool.execute('SELECT * FROM `users`');
  return res.render('index.ejs', { dataUser: rows,test:'abc test' })
    
}

let getDetaiPage = async (req, res) => {
  let id = req.params.userId;
  let [user, fields] = await pool.execute(`select * from users where id = ?`, [id]);
  console.log('check req params:', user)
  return res.send(JSON.stringify(user[0]));
}
let creatNewUser = async (req, res) => {
  // console.log('check req:', req.body);
  let { firstName, lastName, email, address } = req.body;
  await pool.execute('insert into users(firstName, lastName, email, address) values (?,?,?,?)', [firstName, lastName, email, address])
  return res.redirect('/');
}

let creatDeleteUser = async (req, res) => {
  let userId = req.body.userId;

  await pool.execute('delete from users where id = ?', [userId]);
  return res.redirect('/');
  
}

let creatEditUser = async (req, res) => {
  let id = req.params.id
  let [user] = await pool.execute('Select * from users where id = ?', [id]);
  return res.render('updateUser.ejs', { dataUser: user [0]});
}

let updateUser = async (req, res) => {
  let { firstName, lastName, email, address, id } = req.body;
  await pool.execute('update users set firstName= ?, lastName = ?, email=?, address=? where id =?',[firstName,lastName,email,address,id])

  // console.log('check req:', req.body);
  // return res.send('helo');
  return res.redirect('/');

}

module.exports = {
    getHomepage, getDetaiPage, creatNewUser, creatDeleteUser, creatEditUser, updateUser
}