'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');

appendRow.addEventListener('click', (e) => {
  const listTr = document.querySelectorAll('tr');

  if (listTr.length < 10) {
    const tr = listTr[0].outerHTML;

    listTr[0].insertAdjacentHTML('beforebegin', tr);
    removeRow.disabled = false;
    e.target.disabled = listTr.length === 9;
  }
});

removeRow.addEventListener('click', (e) => {
  const listTr = document.querySelectorAll('tr');

  if (listTr.length > 2) {
    listTr[0].remove();
    appendRow.disabled = false;
    e.target.disabled = listTr.length === 3;
  }
});

appendCol.addEventListener('click', (e) => {
  const listTr = document.querySelectorAll('tr');

  if (listTr[0].children.length < 10) {
    for (const item of listTr) {
      const tr = item.children[0].outerHTML;

      item.insertAdjacentHTML('beforeend', tr);
    }

    removeCol.disabled = false;
    e.target.disabled = listTr[0].children.length === 10;
  }
});

removeCol.addEventListener('click', (e) => {
  const listTr = document.querySelectorAll('tr');

  if (listTr[0].children.length > 2) {
    for (const item of listTr) {
      item.children[0].outerHTML = '';
    }
    appendCol.disabled = false;
    e.target.disabled = listTr[0].children.length === 2;
  }
});
