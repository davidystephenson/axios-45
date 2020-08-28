const axios = require('axios')

const getNos = async () => {
  try {
    const response = await axios.get('http://nos.nl')

    const { data } = response
    // const data = response.data

    console.log('done')
  } catch (error) {
    console.log(error.message)
  }
}

console.log('before')
getNos()
console.log('after')