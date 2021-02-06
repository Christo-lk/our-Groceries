import request from 'superagent'

export function getUsers () {
  return request.get('/api/v1/')
    .then(response => response.body)
    .catch(err => {
      res.status(500).send(err.message)
    })
}

export function apiGetUserItems (id) {
  return request.get('/api/v1/getUserItems')
    .then(res => res.body)
}

export function apiGetAllItems (id) {
  return request.get(`/api/v1/getAllItems/${id}`)
    .then(res => res.body)
}
