import axios from "./axios";

export async function createDocAPI(title, content) {
  const token = localStorage.getItem('token')

  if (token === null) {
    return null
  }

  const {data} =  await axios.post(
    '/doc',
    JSON.stringify({title, data:content}),
    {
      headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
      withCredentials: true,
    },
  );
  return data;
}

export async function getAllDocsAPI() {
  const token = localStorage.getItem('token')

  if (token === null) {
    return null
  }
  const {data} =  await axios.get('/doc', {
      headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
      withCredentials: true,
  });
  return data
}

export async function getDocAPI(_id) {
  const token = localStorage.getItem('token')

  if (token === null) {
    return null
  }
  const {data} =  await axios.get(`/doc/${_id}`, {
      headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
      withCredentials: true,
  });

  return data
}

export async function updateDocAPI(_id, content) {
  const token = localStorage.getItem('token')
  if (token === null) {
    return null
  }

  await axios.patch(`/doc/${_id}`, {
    data: content
  }, {
      headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
      withCredentials: true,
  })
}

export async function deleteDocAPI(_id) {
  const token = localStorage.getItem('token')
  if (token === null) {
    return null
  }

  await axios.delete(`/doc/${_id}`,{
      headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
      withCredentials: true,
  })

}
