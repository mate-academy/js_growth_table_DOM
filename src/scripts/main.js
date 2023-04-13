'use strict';

// write code here
const btns = document.querySelectorAll('.button')
const appRowBtn = document.querySelector('.append-row')
const remRowBtn = document.querySelector('.remove-row')
const appColBtn = document.querySelector('.append-column')
const remColBtn = document.querySelector('.remove-column')

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');


let rowsCount = tbody.rows.length;
let cellCount = tbody.rows[0].cells.length;

btns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    funcTable(btn.classList[0]);
  })
});

function funcTable(btnClass) {  
  if (btnClass === 'append-row') {
    remRowBtn.disabled = false
    tbody.insertRow();
    rowsCount++;

    for (let i = 0; i < cellCount; i++) {
      tbody.lastElementChild.insertCell();
    }

    if (rowsCount > 9) {
      appRowBtn.disabled = true;
    }
  }

  if (btnClass === 'remove-row') { 
    appRowBtn.disabled = false;
    tbody.deleteRow(1);
    rowsCount--;

    if(rowsCount < 3) {
      remRowBtn.disabled = true;
    }
  }

  if (btnClass === 'append-column') {
   remColBtn.disabled = false;
   cellCount++;

   for (let i = 0; i < rowsCount; i++) {
    tbody.rows[i].insertCell();
   }

   if(cellCount > 9) {
    appColBtn.disabled = true;
   }
  }

  if (btnClass === 'remove-column') {
    // if(cellCount <= 2) {
    //   remColBtn.disabled = true;
    // }
    appColBtn.disabled = false;
    cellCount--;

    for (let i = 0; i < rowsCount; i++) {
      tbody.rows[i].deleteCell(1);
    }

    if(cellCount < 3) {
      remColBtn.disabled = true;
    }
  }
}
console.log(rowsCount);