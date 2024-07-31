'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const tbody = document.querySelector('tbody');

appendRowButton.addEventListener('click', () => {
  if (tbody.children.length < 10) {
    const trs = document.querySelectorAll('tr');
    const tr = document.createElement('tr');

    for (let i = 0; i < trs[0].children.length; i++) {
      const td = document.createElement('td');

      tr.appendChild(td);
    }

    tbody.appendChild(tr);
  }

  if (tbody.children.length === 10) {
    appendRowButton.disabled = true;
  }

  if (tbody.children.length > 2) {
    removeRowButton.removeAttribute('disabled');
  }
});

removeRowButton.addEventListener('click', () => {
  if (tbody.children.length > 2) {
    tbody.removeChild(tbody.lastElementChild);
  }

  if (tbody.children.length === 2) {
    removeRowButton.disabled = true;
  }

  if (tbody.children.length < 10) {
    appendRowButton.removeAttribute('disabled');
  }
});

appendColumnButton.addEventListener('click', () => {
  const trs = document.querySelectorAll('tr');

  if (trs[0].children.length < 10) {
    for (let i = 0; i < trs.length; i++) {
      const td = document.createElement('td');

      trs[i].appendChild(td);
    }
  }

  if (trs[0].children.length === 10) {
    appendColumnButton.disabled = true;
  }

  if (trs[0].children.length > 2) {
    removeColumnButton.removeAttribute('disabled');
  }
});

removeColumnButton.addEventListener('click', () => {
  const trs = document.querySelectorAll('tr');

  if (trs[0].children.length > 2) {
    for (let i = 0; i < trs.length; i++) {
      trs[i].removeChild(trs[i].lastElementChild);
    }
  }

  if (trs[0].children.length === 2) {
    removeColumnButton.disabled = true;
  }

  if (trs[0].children.length < 10) {
    appendColumnButton.removeAttribute('disabled');
  }
});
