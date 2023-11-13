export const useWorks = () => {
    const lineCount = useState('lineCount', () => null)
    const research = useState('research', () => null)
    const mostBooks = useState('mostBooks', () => null)
    const mostExperiences = useState('mostExperiences', () => null)
    const book = useState('book', () => null)
    const toast = useToast()
    const author = useState('author', () => null)

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

    const getMostExperiences = async (req) => {
        await useFetch('https://api.37pajoohesh.ir/api/mostVisitedExperiences', {
            onRequest({ request, options }) {
                console.log('get mostExperiences')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'GET'
                options.body = req
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.addError("mostExperiences: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    mostExperiences.value =  response._data
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.addError("mostExperiences: " + response._data.data)
            },
            initialCache: false
        })
    }

    const getAuthor = async (id) => {
        await useFetch(`https://api.37pajoohesh.ir/api/profile/${id}`, {
            onRequest({ request, options }) {
                console.log('get author')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'GET'
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.addError("author: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    author.value =  response._data
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.addError("author: " + response._data.data)
            },
            initialCache: false
        })
    }

    const getBook = async (id) => {
        book.value = null
        author.value = null
        await useFetch(`https://api.37pajoohesh.ir/api/research/${id}`, {
            onRequest({ request, options }) {
                console.log('get book')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'GET'
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.addError("book: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    book.value =  response._data
                    getAuthor(book.value.user_id)
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.addError("book: " + response._data.data)
            },
            initialCache: false
        })
    }

    const getResearch = async (req) => {
        await useFetch('https://api.37pajoohesh.ir/api/research', {
            onRequest({ request, options }) {
                console.log('get research')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'GET'
                options.body = req
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.addError("research: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    research.value =  response._data
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.addError("research: " + response._data.data)
            },
            initialCache: false
        })
    }
    
    return { research,getResearch,getMostExperiences, mostExperiences,getCount, lineCount, getMostBooks, mostBooks, book, getBook, getAuthor, author }
}