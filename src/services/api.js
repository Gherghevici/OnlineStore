import { formatQueryParams } from "./utils";

export async function getProducts(pageQty, pageNo) {
    const params = formatQueryParams({
        skip: pageNo * pageQty,
        limit: pageQty
    })
  const res = await fetch(`https://dummyjson.com/products${params}`);
  const response = await res.json();
  return response.products;
}

export async function getProductsCategories() {
  const res = await fetch('https://dummyjson.com/products/categories');
  const response = await res.json();
  return response;
}
export async function getSoloProduct(id){
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const response = await res.json();
  return response;
}