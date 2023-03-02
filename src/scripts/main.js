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
    return;
  }

  if (amountRow >= 2) {
    removeRow.disabled = false;
  }
  tabl.append(tabl.firstElementChild.cloneNode(true));
  amountRow++;

  if (amountRow >= 10) {
    appendRow.disabled = true;
  }
};

const AddColumn = () => {
  if (amountColum >= 10) {
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

  if (amountColum >= 10) {
    appendColumn.disabled = true;
  }
};

const RemoveRow = () => {
  if (amountRow < 3) {
    return;
  }

  if (amountRow <= 10) {
    appendRow.disabled = false;
  }

  tabl.firstElementChild.remove();
  amountRow--;

  if (amountRow < 3) {
    removeRow.disabled = true;
  }
};

const RemoveColumn = () => {
  if (amountColum < 3) {
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

  if (amountColum < 3) {
    removeColumn.disabled = true;
  }
};

appendRow.addEventListener('click', AddRow);
appendColumn.addEventListener('click', AddColumn);
removeRow.addEventListener('click', RemoveRow);
removeColumn.addEventListener('click', RemoveColumn);
