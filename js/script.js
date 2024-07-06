// select element //

const $ = document

let wrapperElem = $.querySelector('.wrapper')
let searchInputElem = $.querySelector('.search-input')
let inputElem = $.querySelector('#input')
let autoComBoxElem = $.querySelector('.autocom-box')

// keypress event //

const keypressHandler = (event) => {
    let searchValue = inputElem.value

    if (searchValue) {
        searchInputElem.classList.add('active')

        let wordFiltered = suggestions.filter( word => {
            return word.toLowerCase().includes(searchValue.toLowerCase())
        })

        suggestionWordGenerator(wordFiltered)

    } else {
        searchInputElem.classList.remove('active')
    }
}

// li generator //

const suggestionWordGenerator = filterWordArray => {
    let wordGeneratedList = filterWordArray.map( word => {
        return `<li> ${word} </li>`
    });

    let customListItem
    
    if (wordGeneratedList) {
        customListItem = wordGeneratedList.join('')
    } else {
        customListItem = `<li> ${searchInputElem.value} </li>`
        searchInputElem.classList.remove('active')
    }

    autoComBoxElem.innerHTML = customListItem

    select()
}

// select word //

const select = () => {
    let allListItem = autoComBoxElem.querySelectorAll('li')
    
    allListItem.forEach( wordItem => {
        wordItem.addEventListener('click', (event) => {
            inputElem.value = event.target.textContent
            searchInputElem.classList.remove('active')
        })
    })
    
}

// set event //

inputElem.addEventListener('keyup', keypressHandler)