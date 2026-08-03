import { BASE_URL } from "./Const.js"

// getArticleList
const getArticleList = async (page = 1, pageSize = 10, keyword = "") => {
  const response = await fetch(
    `${BASE_URL}/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
  )
  if (!response.ok) {
    throw new Error("데이터를 받아오지 못했습니다.")
    return
  }
  const articleListData = await response.json()
  console.log(articleListData)
}

// getArticleList()

// getArticle
const getArticle = async (id) => {
  const response = await fetch(`${BASE_URL}/articles/${id}`)
  if (!response.ok) {
    throw new Error("데이터를 받아오지 못했습니다.")
    return
  }
  const articleData = await response.json()
  console.log(articleData)
}

// getArticle(6813)

// createArticle
const createArticle = async (article) => {
  const response = await fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(article),
  })

  if (!response.ok) {
    throw new Error("데이터를 받아오지 못했습니다.")
    return
  }
  const postArticle = await response.json()
  console.log(postArticle)
}

// createArticle({
//   image: "https://example.com/...",
//   content: "테스트 게시글입니다..",
//   title: "테스트 제목입니다.",
// })

// patchArticle
const patchArticle = async (article, id) => {
  const response = await fetch(`${BASE_URL}/articles/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(article),
  })

  if (!response.ok) {
    throw new Error("데이터를 받아오지 못했습니다.")
    return
  }
  const patchedArticle = await response.json()
  console.log(patchedArticle)
}
// patchArticle(
//   {
//     image: "https://test.com/...",
//     content: "변경된 게시글입니다..",
//     title: "변경된 제목입니다.",
//   },
//   6821,
// )

// deleteArtice
const deleteArtice = async (id) => {
  const response = await fetch(`${BASE_URL}/articles/${id}`, {
    method: "DELETE",
  })

  if (!response.ok) {
    throw new Error("데이터를 받아오지 못했습니다.")
    return
  }
  const deletedArticleId = await response.json()
  console.log(deletedArticle)
}

// deleteArtice(6822)
