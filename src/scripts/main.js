'use strict';

const field = document.querySelector('.field');
const btns = document.querySelectorAll('.button');

let fieldHeigth = field.firstElementChild.children.length;
let fieldLength = field.rows[0].cells.length;

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const idx = e.target.className.indexOf(' ');

    modifyTable(e.target.className.slice(0, idx));
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
      } else {
        setEnable('remove-row');
      }
      break;

    case 'remove-row':
      const rowCount = field.rows.length;

      field.deleteRow(rowCount - 1);

      fieldHeigth--;

      if (fieldHeigth === 2) {
        setDisabled(nameClass);
      } else {
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
      } else {
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
      } else {
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
