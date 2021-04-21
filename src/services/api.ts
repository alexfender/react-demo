import axios from 'axios'

export const getOrders = async (params: any) => {
  const res = await axios.get('https://adm.lider-truck.ru/adm/api/getOrders.php', {params})
  return res.data
}

export const getStatuses = async () => {
  const res = await axios.get('https://adm.lider-truck.ru/adm/api/getStatuses.php')
  return res.data
}

export const getManagers = async () => {
  const res = await axios.get('https://adm.lider-truck.ru/adm/api/getManagers.php')
  return res.data
}

export const getSuggestions = async (query:string) => {
  const res = await axios.get('https://adm.lider-truck.ru/adm/api/getSuggestions.php', {params: {query}})
  return res.data
}

export const getProducts = async (article:string, brand: string | null = null) => {
  const res = await axios.get('https://adm.lider-truck.ru/adm/api/getProducts.php', {params: {article, brand}})
  return res.data
}

export const getCart = async () => {
  const res = await axios.get('https://adm.lider-truck.ru/adm/api/getCart.php')
  return res.data
}

export const removeCart = async (id:number) => {
  const res = await axios.post('https://adm.lider-truck.ru/adm/api/removeFromCart.php', {id})
  return res.data
}

export const addCart = async (product:any) => {
  const res = await axios.post('https://adm.lider-truck.ru/adm/api/addToCart.php', {...product})
  return res.data
}

export const changeCountCart = async ({id, count}: {id: number, count: number}) => {
  const res = await axios.post('https://adm.lider-truck.ru/adm/api/changeCountCart.php', {id, count})
  return res.data
}

