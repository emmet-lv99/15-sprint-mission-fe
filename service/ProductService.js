import { BASE_URL } from "./Const.js"

// getProductList
const getProductList = async (page = 1, pageSize = 10, keyword = "") => {
  try {
    const response = await fetch(
      `${BASE_URL}/products?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
    )
    if (!response.ok) {
      throw new Error("데이터를 받아오지 못했습니다.")
      return
    }
    const productListData = await response.json()
    console.log(productListData)
  } catch (error) {
    console.log(error)
  }
}

// getProductList()

// getProduct
const getProduct = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`)
    if (!response.ok) {
      throw new Error("데이터를 받아오지 못했습니다.")
      return
    }
    const productData = await response.json()
    console.log(productData)
  } catch (error) {
    console.log(error)
  }
}

// getProduct(4172)

// createProdcut
const createProdcut = async (product) => {
  const response = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })

  if (!response.ok) {
    throw new Error("데이터를 받아오지 못했습니다.")
    return
  }
  const postProduct = await response.json()
  console.log(postProduct)
}

createProdcut({
  images: ["https://example.com/..."],
  tags: ["테스트 제품"],
  price: 0,
  description: "string",
  name: "테스트 상품 이름",
})

// patchProduct
const patchProduct = async (product, id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })

    if (!response.ok) {
      throw new Error("데이터를 받아오지 못했습니다.")
      return
    }
    const patchedProduct = await response.json()
    console.log(patchedProduct)
  } catch (error) {
    console.log(error)
  }
}
// patchProduct(
//   {
//     images: ["https://example.com/..."],
//     tags: ["테스트 제품"],
//     price: 0,
//     description: "string",
//     name: "수정 테스트 상품 이름",
//   },
//   4194,
// )

// deleteProduct
const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "DELETE",
    })

    if (!response.ok) {
      throw new Error("데이터를 받아오지 못했습니다.")
      return
    }
    const deletedProductId = await response.json()
    console.log(deletedProductId)
  } catch (error) {
    console.log(error)
  }
}

// deleteProduct(4212)
