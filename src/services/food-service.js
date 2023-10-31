import apiFetch from "./api-fetch";

export function getFoods() {
  return apiFetch("/products");
}

export function showFood(id) {
  return apiFetch(`/products/${id}`);
}

export function createFood(data) {
  return apiFetch("/products", { body: data });
}

export function updateFood(data, id) {
  return apiFetch(`/products/${id}`, { method: "PATCH", body: data });
}

export function deleteFood(id) {
  return apiFetch(`/products/${id}`, { method: "DELETE" });
}
