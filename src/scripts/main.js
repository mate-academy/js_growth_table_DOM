'use strict';

// write code here

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', (even) => {
  const listOfTr = document.body.querySelectorAll('tr');

  if (listOfTr.length < 10) {
    const tr = listOfTr[0].outerHTML;

    listOfTr[0].insertAdjacentHTML('beforebegin', tr);
    removeRow.disabled = false;
    even.target.disabled = listOfTr.length === 9
  }
});

removeRow.addEventListener('click', (even) => {
  const listOfTr = document.body.querySelectorAll('tr');

  if (listOfTr.length > 2) {
    listOfTr[0].remove();
    appendRow.disabled = false;
    even.target.disabled = listOfTr.length === 3
  }
});


appendColumn.addEventListener('click', (even) => {
  const listOfTr = document.body.querySelectorAll('tr');

  if (listOfTr[0].children.length < 10) {
    for (let item of listOfTr) {
      const tr = item.children[0].outerHTML;

      item.insertAdjacentHTML('beforeend', tr);
    }
    removeColumn.disabled = false;
    even.target.disabled = listOfTr[0].children.length === 10;
  }
});

removeColumn.addEventListener('click', (even) => {
  const listOfTr = document.body.querySelectorAll('tr');

  if (listOfTr[0].children.length > 2) {
    for (let item of listOfTr) {
      item.children[0].outerHTML = '';
    }
    appendColumn.disabled = false;
    even.target.disabled = listOfTr[0].children.length === 2;
  }
});
