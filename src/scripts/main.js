'use strict';

const table = document.querySelector('.field > tbody');
const buttonRowUp = document.querySelector('.append-row');
const buttonRowDown = document.querySelector('.remove-row');
const buttonColumnUp = document.querySelector('.append-column');
const buttonColumnDown = document.querySelector('.remove-column');

let numOfRow = 4;
let numOfColumn = 4;

const disabledButton = () => {
  buttonRowUp.disabled = numOfRow === 10;
  buttonRowDown.disabled = numOfRow === 2;
  buttonColumnUp.disabled = numOfColumn === 10;
  buttonColumnDown.disabled = numOfColumn === 2;
};

buttonRowUp.addEventListener('click', () => {
  table.insertAdjacentHTML('afterbegin', `
    <tr>
    ${`<td></td>`.repeat(numOfColumn)}
    </tr>`);

  numOfRow++;

  disabledButton();
});

buttonRowDown.addEventListener('click', () => {
  document.querySelector('tr').remove();

  numOfRow--;

  disabledButton();
});

buttonColumnUp.addEventListener('click', () => {
  [...table.children].forEach(element => {
    element.insertAdjacentHTML('afterbegin', `
    ${`<td></td>`}`);
  });

  numOfColumn++;

  disabledButton();
});

buttonColumnDown.addEventListener('click', () => {
  [...table.children].forEach(element => (
    element.querySelector('td').remove()
  ));

  numOfColumn--;

  disabledButton();
});
