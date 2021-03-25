'use strict';

const table = document.querySelector('tbody');
const buttonPlusRow = document.querySelector('.append-row');
const buttonMinusRow = document.querySelector('.remove-row');
const buttonPlusColumn = document.querySelector('.append-column');
const buttonMinusColumn = document.querySelector('.remove-column');

const addRow = function(e) {
  const a = table.children[0].cloneNode(true);

  buttonMinusRow.removeAttribute('disabled');
  table.append(a);

  if (table.children.length === 10) {
    buttonPlusRow.setAttribute('disabled', 'disabled');
  }
};

const addColumn = function(e) {
  const tr = [...document.querySelectorAll('tr')];
  const td = [...tr[0].querySelectorAll('td')];

  buttonMinusColumn.removeAttribute('disabled');

  for (let i = 0; i < tr.length; i++) {
    tr[i].insertAdjacentHTML('beforeend', `<td></td>`);
  }

  if (td.length === 9) {
    buttonPlusColumn.setAttribute('disabled', 'disabled');
  }
};

const minusRow = function(e) {
  buttonPlusRow.removeAttribute('disabled');
  table.children[0].remove();

  if (table.children.length === 2) {
    buttonMinusRow.setAttribute('disabled', 'disabled');
  }
};

const minusColumn = function(e) {
  const tr = [...document.querySelectorAll('tr')];
  const td = [...tr[0].querySelectorAll('td')];

  buttonPlusColumn.removeAttribute('disabled');

  for (let i = 0; i < tr.length; i++) {
    tr[i].children[0].remove();
  }

  if (td.length === 3) {
    buttonMinusColumn.setAttribute('disabled', 'disabled');
  }
};

buttonPlusRow.addEventListener('click', addRow);
buttonMinusRow.addEventListener('click', minusRow);
buttonPlusColumn.addEventListener('click', addColumn);
buttonMinusColumn.addEventListener('click', minusColumn);
