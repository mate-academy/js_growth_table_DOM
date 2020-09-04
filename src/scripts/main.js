'use strict';

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

addRow.onclick = () => {
  if ([...document.querySelectorAll('tbody tr')].length < 10) {
    removeRow.disabled = false;

    const clone = document.querySelector('tbody tr')
      .cloneNode(document.querySelector('tbody'));

    document.querySelector('tbody').append(clone);
  }

  if ([...document.querySelectorAll('tbody tr')].length === 10) {
    addRow.disabled = true;
  }
};

addColumn.onclick = () => {
  const round = [...document.querySelectorAll('tbody td')].length;
  const rows = [...document.querySelectorAll('tbody tr')].length;

  if (round / rows < 10) {
    removeColumn.disabled = false;

    [...document.querySelectorAll('tbody tr')].map(item => {
      item.innerHTML += item.innerHTML.trim().split(' ')[0];

      return item.innerHTML;
    });
  }

  if (round / rows === 10) {
    addColumn.disabled = true;
  }
};

removeColumn.onclick = () => {
  const round = [...document.querySelectorAll('tbody td')].length;
  const rows = [...document.querySelectorAll('tbody tr')].length;

  if (round / rows > 2) {
    addColumn.disabled = false;

    ([...document.querySelectorAll('tbody tr')]
      .map(item => [...item.children][0].remove()));
  }

  if (round / rows === 3) {
    removeColumn.disabled = true;
  }
};

removeRow.onclick = () => {
  if ([...document.querySelectorAll('tbody tr')].length > 2) {
    addRow.disabled = false;
    document.querySelector('tbody tr').remove();
  }

  if ([...document.querySelectorAll('tbody tr')].length === 2) {
    removeRow.disabled = true;
  }
};
