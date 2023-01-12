'use strict';

const table = document.querySelector('tbody');
const addRow = document.querySelector('.append-row');
const delRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const delColumn = document.querySelector('.remove-column');

const creatTr = () => {
    const element = table.children[0].cloneNode(true)
    table.append(element);
}

const createTd = () => {
    for(const elem of table.children) {
       const element = elem.lastElementChild.cloneNode(true);
        elem.append(element);
    }
}

let colum = 4;
let row = 4;


addRow.onclick = () => {
    creatTr();
    if (row === 9) {
        addRow.disabled = true;
        row++;
        return;
    } else if (row === 2) {
        delRow.disabled = false;
    }
    row++; 
}

delRow.onclick = () => {
    const childs = table.children;
    const child = childs[childs.length - 1];

    if (row === 3) {
        delRow.disabled = true;
        child.remove();
        row--;
        return;
    } else if(row === 10) {
        addRow.disabled = false;
    }
    child.remove();
    row--;
}

addColumn.onclick = () => {
    createTd();
    if (colum === 9) {
        addColumn.disabled = true;
        colum++;
        return;
    } else if (colum === 2) {
        delColumn.disabled = false;
    }
    colum++; 
}

delColumn.onclick = () => {
    for(const elem of table.children) {
        elem.lastElementChild.remove();
    }
    if (colum === 3) {
        delColumn.disabled = true;
        
        colum--;
        return;
    } else if(colum === 10){
        addColumn.disabled = false;
    }
    colum--;
}