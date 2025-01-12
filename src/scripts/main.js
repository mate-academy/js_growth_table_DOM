'use strict';

const btnRowPlus = document.querySelector('.append-row');
const btnRowMinus = document.querySelector('.remove-row');
const btnColPlus = document.querySelector('.append-column');
const btnColMinus = document.querySelector('.remove-column');
const table = document.querySelector('.field');
const trMain = document.getElementsByTagName('tr');

btnRowPlus.onclick = () => {
  const tr = document.createElement('tr');

  if (trMain.length > 2 || btnRowMinus.hasAttribute('disabled')) {
    btnRowMinus.removeAttribute('disabled');
  }

  if (trMain.length > 0 && trMain.length < 10) {
    for (let i = 1; i <= trMain[0].cells.length; i++) {
      const td = document.createElement('td');

      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  if (trMain.length >= 10) {
    btnRowPlus.setAttribute('disabled', '');
  }
};

btnRowMinus.onclick = () => {
  if (trMain.length <= 10 || btnRowPlus.hasAttribute('disabled')) {
    btnRowPlus.removeAttribute('disabled');
  }

  if (trMain.length > 2) {
    const el = document.getElementsByTagName('tr');

    el[el.length - 1].remove();
  }

  if (trMain.length <= 2) {
    btnRowMinus.setAttribute('disabled', '');
  }
};

btnColPlus.onclick = () => {
  if (trMain[0].cells.length > 2 || btnColMinus.hasAttribute('disabled')) {
    btnColMinus.removeAttribute('disabled');
  }

  if (trMain[0].cells.length < 10) {
    for (let i = 0; i < table.rows.length; i++) {
      const td = document.createElement('td');

      trMain[i].appendChild(td);
    }
  }

  if (trMain[0].cells.length >= 10) {
    btnColPlus.setAttribute('disabled', '');
  }
};

btnColMinus.onclick = () => {
  if (trMain[0].cells.length <= 10 || btnColPlus.hasAttribute('disabled')) {
    btnColPlus.removeAttribute('disabled');
  }

  if (trMain[0].cells.length > 2) {
    for (let i = 0; i < table.rows.length; i++) {
      const td = trMain[i].cells;

      td[td.length - 1].remove();
    }
  }

  if (trMain[0].cells.length <= 2) {
    btnColMinus.setAttribute('disabled', '');
  }
};
//
