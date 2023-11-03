export const useAuth = () => {
    const router = useRouter()
    const toast = useToast()

    const login = async (req) => {
        await useFetch('https://api.37pajoohesh.ir/api/login', {
            onRequest({ request, options }) {
                console.log('login')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'POST'
                options.body = req
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.addError("Login: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                console.log(response)
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                console.log(response._data)
                toast.addError("Login: " + message)
            },
            initialCache: false
        })
    }

    const register = async (req) => {
        await useFetch('https://api.37pajoohesh.ir/api/register', {
            onRequest({ request, options }) {
                console.log('register')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'POST'
                options.body = req
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.addError("Register: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                console.log(response)
                console.log("200")
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                console.log(response._data)
                toast.addError("Register: " + message)
            },
            initialCache: false
        })
    }
    
    return { login, register }
}