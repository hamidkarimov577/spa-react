import { API_URL } from "./config";

const getMealById = async (mealID) => {
  const response = await fetch(API_URL + 'lookup.php?i=' + mealID)
  return await response.json()
}
const getAllCategories = async () => {
  const response = await fetch(API_URL + 'categories.php')
  return await response.json()
}
const getFilter = async (categoryName) => {
  const response = await fetch(API_URL + 'filter.php?c=' + categoryName)
  return await response.json()
}

export {getMealById, getAllCategories, getFilter}