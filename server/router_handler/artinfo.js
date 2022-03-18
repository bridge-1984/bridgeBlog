const db = require('../db/index.js')

// 获取所有文章
const sql = 'select * from blog order by date desc'
exports.getArticleList = (req, res) => {
  db.query(sql, (err, results) => {
    if (err) return res.cc(err)

    res.send({
      status: 0,
      message: '获取文章列表成功',
      data: results
    })
  })
}

// 根据id获取对应文章的tag
const sql1 = 'select * from taglist where art_id=?'
exports.getArtTaglist = (req, res) => {
  db.query(sql1, req.query.art_id, (err, results) => {
    if (err) return res.cc(err)

    res.send({
      status: 0,
      message: '获取文章标签成功',
      data: results
    })
  })
}

// 获取所有的tag
const sql2 = 'select * from tag'
exports.getAllTag = (req, res) => {
  db.query(sql2, (err, results) => {
    if (err) return res.cc(err)

    res.send({
      status: 0,
      message: '获取标签列表成功',
      data: results
    })
  })
}

// 根据tag名字获取文章
const sql3 = 'select * from blog a,taglist b where a.id = b.art_id and b.tagname=?'
exports.getArtByTag = (req, res) => {
  // console.log(req.query)
  db.query(sql3, req.query.tagName, (err, results) => {
    if (err) return res.cc(err)

    res.send({
      status: 0,
      message: '通过标签获取文章成功',
      data: results
    })
  })
}

// 根据关键词获取文章
exports.getArtByKeyword = (req, res) => {
  const keyword = req.query.keyword
  const sql4 = `select distinct a.id,title,content,watch_num,dianzan,date,img,intro,art_id from blog a,taglist b where a.id = b.art_id and concat(title,content,intro,tagname) like '%${keyword}%'`
  // console.log(sql4)
  db.query(sql4, (err, results) => {
    if (err) return res.cc(err)

    res.send({
      status: 0,
      message: '通过关键词获取文章成功',
      data: results
    })
  })
}

const sql5 = 'select * from blog where id=?'
exports.getArtById = (req, res) => {
  db.query(sql5, req.query.id, (err, results) => {
    if (err) return res.cc(err)

    res.send({
      status: 0,
      message: '通过id获取文章成功',
      data: results
    })
  })
}
