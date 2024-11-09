'use strict';

const buttons = Array.from(document.querySelectorAll('button'));
const tableBody = document.querySelector('.field tbody');

buttons.forEach((button) => {
  button.onclick = function (events) {
    const target = events.target.className;

    switch (target) {
      case 'append-row button':
        appendRow();
        break;

      case 'remove-row button':
        removeRow();
        break;

      case 'append-column button':
        appendColumn();
        break;

      case 'remove-column button':
        removeColumn();
        break;
    }
  };
});

function appendRow() {
  const rowCount = tableBody.children.length;
  const removeRowButton = document.querySelector('.remove-row');
  const appendRowButton = document.querySelector('.append-row');

  if (rowCount < 10) {
    const tr = document.createElement('tr');
    const trElements = document.querySelectorAll('tr');

    for (let i = 0; i < trElements[0].children.length; i++) {
      const td = document.createElement('td');

      tr.appendChild(td);
    }
    tableBody.appendChild(tr);

    if (rowCount + 1 === 10) {
      appendRowButton.setAttribute('disabled', 'true');
    }

    removeRowButton.removeAttribute('disabled');
  }
}

function removeRow() {
  const rowCount = tableBody.children.length;
  const removeRowButton = document.querySelector('.remove-row');
  const appendRowButton = document.querySelector('.append-row');

  if (rowCount > 2) {
    const tr = tableBody.lastChild;

    tableBody.removeChild(tr);

    if (rowCount === 2) {
      removeRowButton.setAttribute('disabled', 'true');
    }

    appendRowButton.removeAttribute('disabled');
  }
}

function appendColumn() {
  const trElements = document.querySelectorAll('tr');
  const trLength = trElements[0].children.length;
  const appendColumnButton = document.querySelector('.append-column');
  const removeColumnButton = document.querySelector('.remove-column');

  if (trLength < 10) {
    trElements.forEach((tr) => {
      const td = document.createElement('td');

      tr.appendChild(td);
    });

    if (trLength + 1 === 10) {
      appendColumnButton.setAttribute('disabled', 'true');
    }

    removeColumnButton.removeAttribute('disabled');
  }
}

function removeColumn() {
  const trElements = document.querySelectorAll('tr');
  const trLength = trElements[0].children.length;
  const appendColumnButton = document.querySelector('.append-column');
  const removeColumnButton = document.querySelector('.remove-column');

  if (trLength > 2) {
    trElements.forEach((tr) => {
      const lastTd = tr.lastElementChild;

      tr.removeChild(lastTd);
    });

    if (trLength - 1 === 2) {
      removeColumnButton.setAttribute('disabled', 'true');
    }

    appendColumnButton.removeAttribute('disabled');
  }
}
