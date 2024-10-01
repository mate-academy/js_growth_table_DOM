'use strict';

const buttons = [...document.querySelectorAll('button')];
const field = document.querySelector('.field > tbody');

const buttonActions = (buttonAction, table) => {
  switch (buttonAction) {
    case 'append-row':
      if (+[...field.children].length === 10) {
        return;
      }

      const newRow = table.children[0].cloneNode(true);

      table.appendChild(newRow);
      break;
    case 'remove-row':
      const lastRow = table.lastElementChild;

      lastRow.remove();
      break;
    case 'append-column':
      if (+[...field.children][0].cells.length === 10) {
        return;
      }

      [...table.children].forEach((row) => {
        const newColumnCell = document.createElement('td');

        row.append(newColumnCell);
      });
      break;
    case 'remove-column':
      [...table.children].forEach((row) => {
        const lastColumnCell = row.lastElementChild;

        lastColumnCell.remove();
      });
      break;

    default:
      break;
  }

  const rowsCount = +[...field.children].length;
  const colsCount = +[...field.children][0].cells.length;

  if (rowsCount === 10) {
    buttons[0].setAttribute('disabled', true);

    return table;
  } else {
    buttons[0].removeAttribute('disabled');
  }

  if (rowsCount <= 2) {
    buttons[1].setAttribute('disabled', true);
  } else {
    buttons[1].removeAttribute('disabled');
  }

  if (colsCount === 10) {
    buttons[2].setAttribute('disabled', true);
  } else {
    buttons[2].removeAttribute('disabled');
  }

  if (colsCount <= 2) {
    buttons[3].setAttribute('disabled', true);
  } else {
    buttons[3].removeAttribute('disabled');
  }

  return table;
};

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonClass = button.className.split(' ')[0];

    buttonActions(buttonClass, field);
  });
});
