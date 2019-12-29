const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const Http = new XMLHttpRequest()
const buildUrl = require('build-url')

exports.http = function http(from,subject,message){
    const url = 
        buildUrl('https://dykhm43gng.execute-api.us-east-2.amazonaws.com/BMFutureInitial/bm-future-api?',
        {
            queryParams: {
                from: from,
                subject: subject,
                text: message
            }
        })

    Http.open('GET', url)
    Http.send()

    Http.onreadystatechange=(e)=>{
        console.log(Http.responseText)
    }

    
    console.log(url.queryParams)
}