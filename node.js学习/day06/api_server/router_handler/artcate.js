
const db = require('../db/index')


exports.getArtCates = (req,res)=>{
    const sql = `select * from ev_article_cate where is_delete = 0 order by id`
    db.query(sql,(err,results)=>{
        if(err) return res.cc(err)
        res.send({
            status:0,
            message:'获取文章成功',
            data:results
        })
    })
}

exports.addArticleCates = (req,res)=>{
    const sql = `select * from ev_article_cate where name = ? or alias = ?`
    db.query(sql,[req.body.name,req.body.alias],(err,results)=>{
        if(err) return res.cc(err)
        if(results.length === 2) return res.cc('分类名称与分类别名被占用，请更换后再试')
        if(results.length ===1 && results[0].name == req.body.name) return res.cc('分类名称被占用,请更换后再试')
        if(results.length === 1 && results[0].alias == req.body.alias) return res.cc('分类别名被占用,请更换后再试')
        const sql = `insert into ev_article_cate set ?`
        db.query(sql,req.body,(err,results)=>{
            if(err) res.cc(err)
            if(results.affectedRows !== 1) return res.cc('新增文章分类失败')
            res.cc('新增文章成功',0)
        })
    })
}

exports.deleteCateById = (req,res)=>{
    const sql = `update ev_article_cate set is_delete = 1 where id = ?`
    db.query(sql,req.params.id,(err,results)=>{
        if(err) return res.cc(err)
        if(results.affectedRows !== 1) return res.cc('删除文章失败')
        res.cc('删除成功',0)
    })
}

exports.getArticleById = (req,res)=>{
    const sql = `select * from ev_article_cate where id = ?`
    db.query(sql,req.params.id,(err,results)=>{
        if(err) res.cc(err)
        if(results.length!==1) return res.cc('获取文章失败')
        res.send({
            status:0,
            message:'获取文章成功',
            data:results[0]
        })
    })
}

exports.updateCateById = (req,res)=>{
    const sql = `select * from ev_article_cate where Id<>? and (name = ? or alias = ?)`//<>排除Id
    db.query(sql,[req.body.Id,req.body.name,req.body.alias],(err,results)=>{
        if(err) return res.cc(err)
        if(results.length === 2) return res.cc('分类名称与别名被占用,请更换再试')
        if(results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias)
        return res.cc('分类名称与别名被占用,请更换再试')
        if(results.length === 1 && results[0].name === req.body.name) return res.cc('分类名称被占用,请更换后再试')
        if(results.length === 1 && results[0].alias === req.body.alias) return res.cc('分类别名被占用,请更换后再试') 
        const sql = `update ev_article_cate set ? where id = ?`
        db.query(sql,[req.body,req.body.Id],(err,results)=>{
            if(err) return res.cc(err)
            if(results.affectedRows!==1) return res.cc('更新文章失败')
            res.cc('更新文章成功',0)
        })
    })
}