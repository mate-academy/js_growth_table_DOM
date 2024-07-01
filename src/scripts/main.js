'use strict';

const field = document.querySelector('.field');
const btns = document.querySelectorAll('.button');

let fieldHeigth = field.firstElementChild.children.length;
let fieldLength = field.rows[0].cells.length;

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    modifyTable(e.target.className.replace(/button/g, '').trim());
  });
});

function modifyTable(nameClass) {
  switch (nameClass) {
    case 'append-row':
      const newRow = field.firstElementChild.insertRow();

      for (let i = 0; i < fieldLength; i++) {
        newRow.insertCell(i);
      }
      fieldHeigth++;

      if (fieldHeigth === 10) {
        setDisabled(nameClass);
      }

      if (fieldHeigth < 10 && fieldHeigth > 2) {
        setEnable('remove-row');
      }

      break;

    case 'remove-row':
      const rowCount = field.rows.length;

      field.deleteRow(rowCount - 1);

      fieldHeigth--;

      if (fieldHeigth === 2) {
        setDisabled(nameClass);
      }

      if (fieldHeigth < 10 && fieldHeigth > 2) {
        setEnable('append-row');
      }
      break;

    case 'append-column':
      [...field.firstElementChild.children].forEach((row) => {
        row.insertCell();
      });

      fieldLength++;

      if (fieldLength === 10) {
        setDisabled(nameClass);
      }

      if (fieldLength < 10 && fieldLength > 2) {
        setEnable('remove-column');
      }
      break;

    default:
      [...field.firstElementChild.children].forEach((row) => {
        row.deleteCell(row.children.length - 1);
      });

      fieldLength--;

      if (fieldLength === 2) {
        setDisabled(nameClass);
      }

      if (fieldLength < 10 && fieldLength > 2) {
        setEnable('append-column');
      }
      break;
  }
}

function setDisabled(nameClass) {
  btns.forEach((btn) => {
    if (btn.className.startsWith(nameClass)) {
      btn.disabled = true;
    }
  });
}

function setEnable(nameClass) {
  btns.forEach((btn) => {
    if (btn.className.startsWith(nameClass)) {
      btn.disabled = false;
    }
  });
}
