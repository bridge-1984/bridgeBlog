const express = require('express')

// 创建路由对象
const router = express.Router()

// 导入获取文章列表函数
const artinfoHandler = require('../router_handler/artinfo.js')

// 获取所有文章
router.get('/all', artinfoHandler.getArticleList)

router.get('/tag', artinfoHandler.getArtTaglist)

router.get('/tag/all', artinfoHandler.getAllTag)

router.get('/tag/name', artinfoHandler.getArtByTag)

router.get('/search', artinfoHandler.getArtByKeyword)

router.get('/detail', artinfoHandler.getArtById)

module.exports = router
