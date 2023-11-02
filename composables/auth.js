export const useAuth = () => {
    const router = useRouter()
    

    const login = async (req) => {
        await useFetch('https://api.37pajoohesh.ir/login', {
            onRequest({ request, options }) {
                console.log('login')
                options.headers = {
                    "Accept": "application/json",
                }
                options.method = 'POST'
                options.body = req,
                options.mode = "no-cors"
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                console.log(error)
                console.log(response)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                console.log(response)
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                console.log(response._data.error)
            },
            initialCache: false
        })
    }
    return { login }
}