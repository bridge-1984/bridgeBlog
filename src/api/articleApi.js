import request from '@/utils/request'

// 获取所有文章
export const getArticleListAPI = function () {
  return request.get('/article/all')
}

// 通过文章的标签
export const getArtTaglistAPI = function (id) {
  return request.get('/article/tag?art_id=' + id)
}

// 获取所有的标签
export const getAllTagAPI = function () {
  return request.get('/article/tag/all')
}

// 通过标签获取文章
export const searchByTagAPI = function (tag) {
  return request.get('/article/tag/name?tagName=' + tag)
}

// 通过关键词获取文章
export const searchByKeywordAPI = function (keyword) {
  return request.get('/article/search?keyword=' + keyword)
}

export const getArtByIdAPI = function (id) {
  return request.get('/article/detail?id=' + id)
}
