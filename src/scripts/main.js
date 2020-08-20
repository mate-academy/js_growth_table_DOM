'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('.field');

const tableRow = table.children[0].children;
const tableColumn = table.children[0].children[0].children;
const tbody = table.tBodies[0];

container.addEventListener('click', (event) => {
  const item = event.target;

  const createTr = document.createElement('tr');
  let createTd = document.createElement('td');

  const buttonApRow = document.querySelector('.append-row');
  const buttonRemRow = document.querySelector('.remove-row');
  const buttonApCol = document.querySelector('.append-column');
  const buttonRemCol = document.querySelector('.remove-column');

  function buttonApRowFunc() {
    for (let i = 0; i < tableColumn.length; i++) {
      createTd = document.createElement('td');
      createTr.append(createTd);
    }
    tbody.append(createTr);

    if (tableRow.length === 10) {
      buttonApRow.disabled = true;

      return buttonApRow.disabled;
    }

    if (tableRow.length > 2 && tableRow.length < 10) {
      buttonRemRow.disabled = false;

      return buttonRemRow.disabled;
    }
  }

  function buttonRemRowFunc() {
    tbody.lastElementChild.parentNode.removeChild(tbody.lastElementChild);

    if (tableRow.length === 2) {
      buttonRemRow.disabled = true;

      return buttonRemRow.disabled;
    }

    if (tableRow.length < 10) {
      buttonApRow.disabled = false;

      return buttonApRow.disabled;
    }
  }

  function buttonApColFunc() {
    for (let i = 0; i < tableRow.length; i++) {
      createTd = document.createElement('td');
      tableRow[i].append(createTd);
    }

    if (tableColumn.length > 2 && tableColumn.length < 10) {
      buttonRemCol.disabled = false;

      return buttonRemCol.disabled;
    }

    if (tableColumn.length === 10) {
      buttonApCol.disabled = true;

      return buttonApCol.disabled;
    }
  }

  function buttonRemColFunc() {
    for (let i = 0; i < tableRow.length; i++) {
      tableRow[i].lastElementChild.parentNode
        .removeChild(tableRow[i].lastElementChild);
    }

    if (tableColumn.length === 2) {
      buttonRemCol.disabled = true;

      return buttonRemCol.disabled;
    }

    if (tableColumn.length < 10 && tableColumn.length > 2) {
      buttonApCol.disabled = false;

      return buttonApCol.disabled;
    }
  }

  switch (item.classList[0]) {
    case buttonApRow.classList[0]: buttonApRowFunc();
      break;

    case buttonRemRow.classList[0]: buttonRemRowFunc();
      break;

    case buttonApCol.classList[0]: buttonApColFunc();
      break;

    case buttonRemCol.classList[0]: buttonRemColFunc();
      break;
  }
});
