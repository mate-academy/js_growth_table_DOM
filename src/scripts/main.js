'use strict';
/*eslint-disable*/
// write code here
const appendRow = document.querySelector(`.append-row`);
const removeRow = document.querySelector(`.remove-row`);
const appendColumn = document.querySelector(`.append-column`);
const removeColumn = document.querySelector(`.remove-column`);

const table = document.querySelector(`tbody`);

let rows = [...table.children].length;
let columns = 4;

console.log(`columns:`,columns)
const buttonFader = () => {
  appendRow.disabled = (rows >= 10) ;
  removeRow.disabled = (rows <= 2);
  appendColumn.disabled = (columns >= 10);
  removeColumn.disabled = (columns <= 2);
}

appendRow.addEventListener(`click`, function() {
  if(rows >= 10 ) return;
  const row = document.createElement(`tr`);

  let html = ``
   
  const concat = () => {
    let i = 0;
    while(i < columns){
      html += `<td></td>`
      i++;
    }
  }
  concat()


  row.innerHTML = html;
  
  table.appendChild(row);
  rows++;
  buttonFader();
});

removeRow.addEventListener(`click`, function() {
  if (rows <= 2) return;
  let allrows = [...table.children];
  allrows[allrows.length-1].remove()
  rows--;
  buttonFader();
});

appendColumn.addEventListener(`click`, function() {
  if(columns >= 10 ) return
  [...table.children].forEach(tr => {
    console.log(tr)
    const td = document.createElement(`td`);
    tr.appendChild(td)
  })
  columns++;
  buttonFader();
})

removeColumn.addEventListener(`click`, function() {
  if(columns <= 2 ) return;
  [...table.children].forEach(tr => {
    let columnsInTable = [...tr.children];
    columnsInTable[0].remove()
  });
  columns--;
  buttonFader();
})


