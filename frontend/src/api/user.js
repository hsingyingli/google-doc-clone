import axios from './axios';

export async function loginAPI(name, password) {
  const {data: {user, token}} = await axios.post('/user/login', JSON.stringify({name, password}), {
    headers: {'Content-Type': 'application/json'},
    withCredentials: true,
  });

  return {user, token}
}

export function signUpAPI(name, password) {
  return axios.post(
    '/user',
    JSON.stringify({name, password}),
    {
      headers: {'Content-Type': 'application/json'},
      withCredentials: true,
    },
  );
}

export async function getIndoAPI() {
  const token = localStorage.getItem('token')

  if (token === null) {
    return null
  }
  const {data} =  await axios.get('/user/me', {
      headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
      withCredentials: true,
  });

  return data
} 
