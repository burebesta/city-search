const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = []

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data))    //json to array

let input = document.querySelector('input')

input.addEventListener('input', function(){
    let searchValue = this.value    
    search(searchValue)
})

let ul = document.querySelector('ul')

function search(searchValue) {
    let results =  cities.filter(city => city.city.toLowerCase().includes(`${searchValue.toLowerCase()}`))
    let searchValueLength = searchValue.length
    let htmls = ''
    results.forEach(result => {
        let city =  result.city
        let index = city.toLowerCase().indexOf(searchValue.toLowerCase())
        let x = city.slice(0,index)+`<span>${city.slice(index,index+searchValueLength)}</span>`+city.slice(index+searchValueLength)
        //highlight search value
        
        if (htmls.length>3000) //limit number of cities
        return
        htmls += `
        <li> 
            ${x}
        </li>
        `
    })
    ul.innerHTML = htmls
}









