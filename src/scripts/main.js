'use strict';

const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');
const tabl = document.getElementsByTagName('tbody')[0];
let amountColum = 4;
let amountRow = 4;

const AddRow = () => {
  if (amountRow >= 10) {
    appendRow.disabled = true;

    return;
  }

  if (amountRow >= 2) {
    removeRow.disabled = false;
  }
  tabl.append(tabl.firstElementChild.cloneNode(true));
  amountRow++;
};

const AddColumn = () => {
  if (amountColum >= 10) {
    appendColumn.disabled = true;

    return;
  }

  if (amountColum >= 2) {
    removeColumn.disabled = false;
  }

  for (const child of tabl.children) {
    const td = document.createElement('td');

    child.append(td);
  }
  amountColum++;
};

const RemoveRow = () => {
  if (amountRow <= 2) {
    removeRow.disabled = true;

    return;
  }

  if (amountRow <= 10) {
    appendRow.disabled = false;
  }

  tabl.firstElementChild.remove();
  amountRow--;
};

const RemoveColumn = () => {
  if (amountColum <= 2) {
    removeColumn.disabled = true;

    return;
  }

  if (amountColum <= 10) {
    appendColumn.disabled = false;
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
