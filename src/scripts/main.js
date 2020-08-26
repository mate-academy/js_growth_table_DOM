'use strict';

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

addRow.onclick = () => {
  if ([...document.querySelectorAll('tbody tr')].length < 10) {
    const clone = document.querySelector('tbody tr')
      .cloneNode(document.querySelector('tbody'));

    document.querySelector('tbody').append(clone);
  }
};

addColumn.onclick = () => {
  const round = [...document.querySelectorAll('tbody td')].length;
  const rows = [...document.querySelectorAll('tbody tr')].length;

  if (round / rows < 10) {
    [...document.querySelectorAll('tbody tr')].map(item => {
      item.innerHTML += item.innerHTML.trim().split(' ')[0];

      return item.innerHTML;
    });
  }
};

removeColumn.onclick = () => {
  const round = [...document.querySelectorAll('tbody td')].length;
  const rows = [...document.querySelectorAll('tbody tr')].length;

  if (round / rows > 4) {
    ([...document.querySelectorAll('tbody tr')]
      .map(item => [...item.children][0].remove()));
  }
};

removeRow.onclick = () => {
  if ([...document.querySelectorAll('tbody tr')].length > 4) {
    document.querySelector('tbody tr').remove();
  }
};
