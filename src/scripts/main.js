'use strict';

let rows = document.getElementsByTagName('tr')
let table = document.getElementsByTagName('tbody')[0]
let appendRowBtn = document.querySelector('.append-row')
let removeRowBtn = document.querySelector('.remove-row')
let appendColBtn = document.querySelector('.append-column')
let removeColBtn = document.querySelector('.remove-column')
let maxElems = 10
let minElems = 2

function updateButtons(){
    removeRowBtn.disabled = rows.length <= minElems
    appendRowBtn.disabled  = rows.length >= maxElems
    appendColBtn.disabled = rows[0].children.length >= maxElems
    removeColBtn.disabled = rows[0].children.length <= minElems
}

appendRowBtn.addEventListener('click', (e) => {
    if(rows.length < maxElems){
        let newRow = document.createElement('tr')

        for (let index = 0; index < rows[0].children.length; index++) {
            newRow.append(document.createElement('td'))
        }

        table.append(newRow)

        updateButtons()
    }
})

removeRowBtn.addEventListener('click', (e) => {
    if(rows.length > minElems){
        rows[rows.length - 1].remove()

        updateButtons()
    }
})

appendColBtn.addEventListener('click', (e) => {
    if(rows[0].children.length < maxElems){
        for (let row of rows) {
            row.append(document.createElement('td'))
        }        

        updateButtons()
    }
})

removeColBtn.addEventListener('click', (e) => {
    if(rows[0].children.length > minElems){
        for (let row of rows) {
            row.children[0].remove()
        }        

        updateButtons()
    }
})