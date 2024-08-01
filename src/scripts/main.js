'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const maxRowLength = 10;
const minRowLength = 2;
const maxColumnLength = 10;
const minColumnLength = 2;

const tbody = document.querySelector('tbody');

appendRowButton.addEventListener('click', () => {
  if (tbody.children.length < maxRowLength) {
    const trs = document.querySelectorAll('tr');
    const tr = document.createElement('tr');

    for (let i = 0; i < trs[0].children.length; i++) {
      const td = document.createElement('td');

      tr.appendChild(td);
    }

    tbody.appendChild(tr);
  }

  if (tbody.children.length === maxRowLength) {
    appendRowButton.disabled = true;
  }

  if (tbody.children.length > minRowLength) {
    removeRowButton.removeAttribute('disabled');
  }
});

removeRowButton.addEventListener('click', () => {
  if (tbody.children.length > minRowLength) {
    tbody.removeChild(tbody.lastElementChild);
  }

  if (tbody.children.length === minRowLength) {
    removeRowButton.disabled = true;
  }

  if (tbody.children.length < maxRowLength) {
    appendRowButton.removeAttribute('disabled');
  }
});

appendColumnButton.addEventListener('click', () => {
  const trs = document.querySelectorAll('tr');

  if (trs[0].children.length < maxColumnLength) {
    for (let i = 0; i < trs.length; i++) {
      const td = document.createElement('td');

      trs[i].appendChild(td);
    }
  }

  if (trs[0].children.length === maxColumnLength) {
    appendColumnButton.disabled = true;
  }

  if (trs[0].children.length > minColumnLength) {
    removeColumnButton.removeAttribute('disabled');
  }
});

removeColumnButton.addEventListener('click', () => {
  const trs = document.querySelectorAll('tr');

  if (trs[0].children.length > minColumnLength) {
    for (let i = 0; i < trs.length; i++) {
      trs[i].removeChild(trs[i].lastElementChild);
    }
  }

  if (trs[0].children.length === minColumnLength) {
    removeColumnButton.disabled = true;
  }

  if (trs[0].children.length < maxColumnLength) {
    appendColumnButton.removeAttribute('disabled');
  }
});
