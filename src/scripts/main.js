'use strict';

const table = document.querySelector('.field');
const buttonAppendRow = document.querySelector('.append-row');
const buttonRemoveRow = document.querySelector('.remove-row');
const buttonAppendColumn = document.querySelector('.append-column');
const buttonRemoveColumn = document.querySelector('.remove-column');
const maxValue = 10;
const minValue = 2;

const appendColumn = () => {
  buttonRemoveColumn.disabled = false;

  if (table.rows[0].children.length === maxValue - 1) {
    buttonAppendColumn.disabled = true;
  }

  for (let i = 0; i < table.rows.length; i++) {
    const newColumn = document.createElement('td');

    table.rows[i].append(newColumn);
  };
};

const removeColumn = () => {
  buttonAppendColumn.disabled = false;

  if (table.rows[0].children.length === minValue + 1) {
    buttonRemoveColumn.disabled = true;
  }

  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].children[0].remove();
  };
};

const appendRow = () => {
  buttonRemoveRow.disabled = false;

  if (table.rows.length === maxValue - 1) {
    buttonAppendRow.disabled = true;
  };

  const newRow = document.createElement('tr');

  newRow.innerHTML = table.rows[0].innerHTML;
  table.appendChild(newRow);
};

const removeRow = () => {
  buttonAppendRow.disabled = false;

  if (table.rows.length === minValue + 1) {
    buttonRemoveRow.disabled = true;
  };
  document.querySelector('tr').remove();
};

buttonAppendRow.addEventListener('click', appendRow);
buttonRemoveRow.addEventListener('click', removeRow);
buttonAppendColumn.addEventListener('click', appendColumn);
buttonRemoveColumn.addEventListener('click', removeColumn);
