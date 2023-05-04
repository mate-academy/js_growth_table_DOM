'use strict';

// write code here
const appendRowButtonRef = document.querySelector('.append-row');
const removeRowButtonRef = document.querySelector('.remove-row');
const appendColumnButtonRef = document.querySelector('.append-column');
const removeColumnButtonRef = document.querySelector('.remove-column');
const tableRef = document.querySelector('.field');
const tbody = tableRef.children[0];

removeRowButtonRef.addEventListener('click', () => {
  const isAppendButtonDisabled = appendRowButtonRef.disabled;
  const lastRow = tbody.lastElementChild;
  const numberOfRows = tbody.children.length - 1;

  if (numberOfRows <= 2) {
    removeRowButtonRef.disabled = true;
  }

  if (isAppendButtonDisabled) {
    appendRowButtonRef.disabled = !isAppendButtonDisabled;
  }

  lastRow.remove();
});

appendRowButtonRef.addEventListener('click', () => {
  const isRemoveButtonDisabled = removeRowButtonRef.disabled;
  const newTableRow = document.createElement('tr');
  const numberOfRows = tbody.children.length + 1;

  newTableRow.innerHTML = tbody.children[0].innerHTML;

  if (numberOfRows >= 10) {
    appendRowButtonRef.disabled = true;
  }

  if (isRemoveButtonDisabled) {
    removeRowButtonRef.disabled = !isRemoveButtonDisabled;
  }

  tbody.append(newTableRow);
});

appendColumnButtonRef.addEventListener('click', () => {
  const isRemoveButtonDisabled = removeColumnButtonRef.disabled;
  const arrayOfTableRows = [...tbody.children];
  const numberOfCols = arrayOfTableRows[0].children.length + 1;

  if (numberOfCols >= 10) {
    appendColumnButtonRef.disabled = true;
  }

  if (isRemoveButtonDisabled) {
    removeColumnButtonRef.disabled = !isRemoveButtonDisabled;
  }

  arrayOfTableRows.forEach((element) => {
    const newTableCell = document.createElement('td');

    element.append(newTableCell);
  });
});

removeColumnButtonRef.addEventListener('click', () => {
  const isAppendButtonDisabled = appendColumnButtonRef.disabled;
  const arrayOfTableRows = [...tbody.children];
  const numberOfCols = arrayOfTableRows[0].children.length - 1;

  if (numberOfCols <= 2) {
    removeColumnButtonRef.disabled = true;
  }

  if (isAppendButtonDisabled) {
    appendColumnButtonRef.disabled = !isAppendButtonDisabled;
  }

  arrayOfTableRows.forEach((element) => {
    const lastTableCell = element.lastElementChild;

    lastTableCell.remove();
  });
});
