import axios from 'axios'
import _ from 'lodash'

function setHeader(params = {}) {
  if (params.common !== undefined) {
    _.map(params.common, (item, key) => {
      axios.defaults.headers.common[key] = item
    })
  }
}

 function axiosGet (url, params = {}, header = {}) {
  return new Promise((resolve, reject) => {
    setHeader(header)

    axios.get(url, { params })
      .then(({data}) => {
        resolve(data)  
      })
      .catch(error => {
        let data = error
        if (error.response !== undefined) {
          data = error.response.data
        }
        reject(data)
      })
  })
}

function axiosPost (url, data, header = {}, config = {}) {
  return new Promise((resolve, reject) => {
    setHeader(header)
    axios({
      method: 'post',
      url: url,
      data: data,
      config: config,
      headers: header
    })
      .then(({data}) => {
        resolve(data)
      })
      .catch(error => {
        let data = error
        if (error.response !== undefined) {
          data = error.response.data
        }
        reject(data)
      })
  })
}

function axiosPut (url, data, header = {}, config = {}) {
  return new Promise((resolve, reject) => {
    setHeader(header)
    axios({
      method: 'put',
      url: url,
      data: data,
      config: config
    })
      .then(({data}) => {
        resolve(data)
      })
      .catch(error => {
        let data = error
        if (error.response !== undefined) {
          data = error.response.data
        }
        reject(data)
      })
  })
}

function axiosDelete (url, header = {}, config = {}) {
  return new Promise((resolve, reject) => {
    setHeader(header)
    axios({
      method: 'delete',
      url: url,
      config: config
    })
      .then(({data}) => {
        resolve(data)
      })
      .catch(error => {
        let data = error
        if (error.response !== undefined) {
          data = error.response.data
        }
        reject(data)
      })
  })
}

export { setHeader, axiosGet, axiosPost, axiosPut, axiosDelete }