'use strict';

const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');
const tabl = document.getElementsByTagName('tbody')[0];
let amountColum = 4;
let amountRow = 4;

const AddRow = () => {
  const tr = document.createElement('tr');

  if (amountRow >= 10) {
    return;
  }

  for (let i = 0; i < amountColum; i++) {
    const td = document.createElement('td');

    tr.append(td);
  }
  tabl.prepend(tr);
  amountRow++;
};

const AddColumn = () => {
  if (amountColum >= 10) {
    return;
  }

  for (const child of tabl.children) {
    const td = document.createElement('td');

    child.append(td);
  }
  amountColum++;
};

const RemoveRow = () => {
  if (amountRow <= 2) {
    return;
  }

  const RemoveChild = tabl.firstElementChild;

  RemoveChild.remove();

  amountRow--;
};

const RemoveColumn = () => {
  if (amountColum <= 2) {
    return;
  }

  for (const child of tabl.children) {
    const RemoveFirstElement = child.firstElementChild;

    RemoveFirstElement.remove();
  }

  amountColum--;
};

appendRow.addEventListener('click', AddRow);
appendColumn.addEventListener('click', AddColumn);
removeRow.addEventListener('click', RemoveRow);
removeColumn.addEventListener('click', RemoveColumn);
