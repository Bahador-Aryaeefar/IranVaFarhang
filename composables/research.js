export const useUser = () => {
    const cookie = useCookie('token')
    const toast = useToast()
    const research = useState('research', () => null)

    const addResearch = async (req) => {
        await useFetch('https://api.37pajoohesh.ir/api/research', {
            onRequest({ request, options }) {
                console.log('add research')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'POST'
                options.body = req
                options.headers.Authorization = 'Bearer ' + cookie.value
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.addError("Add Research: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.addError("Add Research: " + response._data.data)
            },
            initialCache: false,
        })
    }

    return { addResearch, research }
}