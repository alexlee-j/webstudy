const mysql = require('mysql')

const db = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'admin',
    database:'my_db_01'
})
// db.query('select * from users',(err,results)=>{
//     if(err) return console.log(err.message);
//     console.log(result);
// })

// db.query('insert into users (username,password) values ("spider-man","pcc123")',(err,results)=>{
//     if(err) return console.log(err.message);
//     if(results.affectedRows === 1) console.log('插入成功');
// })

//或者这样
// const user = {username:'splider-Man',password:'pcc123'}
// const sqlstr = 'insert into users (username,password) values (?,?)'//?为占位符
// db.query(sqlstr,[user.username,user.password],(err,results)=>{
//     if(err) return console.log(err.message);
//     if(results.affectedRows === 1) console.log('插入成功');
// })

//插入数据的便捷方式
// const user = {username:'splider-Man2',password:'pcc12345'}
// const sqlstr = 'insert into users set ? '//?为占位符
// db.query(sqlstr,user,(err,results)=>{
//     if(err) return console.log(err.message);
//     if(results.affectedRows === 1) console.log('插入数据成功');
// })

// const user = {id:6,username:'splider-Man2',password:'123456'}
// const sqlstr = 'update users set username = ? , password  = ? where id = ? '//?为占位符
// db.query(sqlstr,[user.username,user.password,user.id],(err,results)=>{
//     if(err) return console.log(err.message);
//     if(results.affectedRows === 1) console.log('插入数据成功');
// })

//更新数据的便捷方式
// const user = {id:6,username:'splider-Man2',password:'12345'}
// const sqlstr = 'update users set ? where id = ? '//?为占位符
// db.query(sqlstr,[user,user.id],(err,results)=>{
//     if(err) return console.log(err.message);
//     if(results.affectedRows === 1) console.log('插入数据成功');
// })

//删除数据
// const sqlstr = 'delete from users where id = ?'
// db.query(sqlstr,6,(err,results)=>{
//     if(err) return console.log(err.message);

//     if(results.affectedRows === 1) console.log('删除数据成功');
// })



//标记删除
const sqlstr = 'update users set status = ? where id = ?'
db.query(sqlstr,[1,4],(err,results)=>{
    if(err) return console.log(err.message);
    if(results.affectedRows === 1) console.log('标记删除成功');
})