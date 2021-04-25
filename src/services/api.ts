import axios from 'axios'
import { IProduct, TBrand, IGetOrdersParams } from '../interfaces'

const baseUrl = process.env.REACT_APP_BASE_URL


export const getOrders = async (params: IGetOrdersParams) => {
  const res = await axios.get(`${baseUrl}/getOrders.php`, {params})
  return res.data
}

export const getStatuses = async () => {
  const res = await axios.get(`${baseUrl}/getStatuses.php`)
  return res.data
}

export const getManagers = async () => {
  const res = await axios.get(`${baseUrl}/getManagers.php`)
  return res.data
}

export const getSuggestions = async (query:string) => {
  const res = await axios.get(`${baseUrl}/getSuggestions.php`, {params: {query}})
  return res.data
}

export const getProducts = async (article:string, brand: TBrand = null) => {
  const res = await axios.get(`${baseUrl}/getProducts.php`, {params: {article, brand}})
  return res.data
}

export const getCart = async () => {
  const res = await axios.get(`${baseUrl}/getCart.php`)
  return res.data
}

export const removeCart = async (id:number) => {
  const res = await axios.post(`${baseUrl}/removeFromCart.php`, {id})
  return res.data
}

export const addCart = async (product:IProduct) => {
  const res = await axios.post(`${baseUrl}/addToCart.php`, {...product})
  return res.data
}

export const changeCountCart = async ({id, count}: {id: number, count: number}) => {
  const res = await axios.post(`${baseUrl}/changeCountCart.php`, {id, count})
  return res.data
}

