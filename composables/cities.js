export const useCities = () => {
    const router = useRouter()
    const cities = useState('cities', () => null)
    const provinces = useState('provinces', () => null)
    const toast = useToast()

    const getCities = async (req) => {
        await useFetch('https://api.37pajoohesh.ir/api/province_cities', {
            onRequest({ request, options }) {
                console.log('get cities')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'GET'
                options.body = req
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.addError("cities: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                console.log(response)
                cities.value = response._data.filter(x => x.parent > 0)
                provinces.value = response._data.filter(x => x.parent == 0)
                console.log(cities.value);
                console.log(provinces.value);
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                console.log(response._data)
                toast.addError("cities: " + response._data.data)
            },
            initialCache: false
        })
    }
    
    return { getCities, cities, provinces }
}