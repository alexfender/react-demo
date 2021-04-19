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

