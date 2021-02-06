import request from 'superagent'

export function getUsers () {
  return request.get('/api/v1/')
    .then(response => response.body)
    .catch(err => {
      res.status(500).send(err.message)
    })
}

export function apiGetUserItems (id) {
  return request.get(`/api/v1/getUserItems/${id}`)
    .then(res => res.body)
}
