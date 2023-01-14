import axios from "axios"

async function getQuote(category) {
    const config = {
        headers:{
            'X-Api-Key': "teVNI1Hb9cqmxRiTIVnkeQ==vAnflxJEeU3FCRwP"
        }
    }
    const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`
    const quote = (await axios.get(url,config)).data[0]
    console.log(quote)
    return quote ? quote : "missing"
}

export default getQuote