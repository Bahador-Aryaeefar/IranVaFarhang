export const useResearch = () => {
    const cookie = useCookie('token')
    const toast = useToast()
    const research = useState('research', () => null)
    const researches = useState('research', () => null)

    const addResearch = async (req) => {
        await useFetch('https://api.37pajoohesh.ir/api/research/store', {
            onRequest({ request, options }) {
                toast.addLoad()
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
                toast.clearLoad()
                toast.addError("Add Research: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                toast.clearLoad()
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    navigateTo('/projects/research')
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.addError("Add Research: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }


    const getResearches = async (req) => {
        await useFetch('https://api.37pajoohesh.ir/api/research', {
            onRequest({ request, options }) {
                toast.addLoad()
                console.log('get research')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'GET'
                options.headers.Authorization = 'Bearer ' + cookie.value
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.clearLoad()
                toast.addError("get Research: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                toast.clearLoad()
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    researches.value = response._data
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.addError("get Research: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    
    const updateResearch = async (req) => {
        await useFetch('https://api.37pajoohesh.ir/api/researchs/update', {
            onRequest({ request, options }) {
                toast.addLoad()
                console.log('Update research')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'POST'
                options.body = req
                options.headers.Authorization = 'Bearer ' + cookie.value
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.clearLoad()
                toast.addError("Update Research: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                toast.clearLoad()
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    navigateTo('/projects/research')
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.addError("Update Research: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }
    return { addResearch, research, getResearches, researches, updateResearch }
}