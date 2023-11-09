export const useWorks = () => {
    const lineCount = useState('lineCount', () => null)
    const mostBooks = useState('mostBooks', () => null)
    const toast = useToast()

    const getCount = async (req) => {
        await useFetch('https://api.37pajoohesh.ir/api/lineCounts', {
            onRequest({ request, options }) {
                console.log('get lineCount')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'GET'
                options.body = req
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.addError("lineCount: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    lineCount.value =  response._data
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.addError("lineCount: " + response._data.data)
            },
            initialCache: false
        })
    }

    const getMostBooks = async (req) => {
        await useFetch('https://api.37pajoohesh.ir/api/mostVisitedBooks', {
            onRequest({ request, options }) {
                console.log('get mostBooks')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'GET'
                options.body = req
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.addError("mostBooks: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    mostBooks.value =  response._data
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.addError("mostBooks: " + response._data.data)
            },
            initialCache: false
        })
    }
    
    return { getCount, lineCount, getMostBooks, mostBooks }
}