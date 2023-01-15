import axios from "axios"

async function getQuote(category) {
    const config = {
        headers:{
            'X-Api-Key': "teVNI1Hb9cqmxRiTIVnkeQ==vAnflxJEeU3FCRwP"
        }
    }
    const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`
    try { 
        const res = (await axios.get(url,config))
        console.log(res.data[0].quote)
        return res
    }
    catch (error) {
        console.log(error)
    }
}

export default getQuote