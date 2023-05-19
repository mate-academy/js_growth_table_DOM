'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tableBody = document.querySelector('tbody');
  const aRow = document.querySelector('.append-row');
  const rRow = document.querySelector('.remove-row');
  const aCol = document.querySelector('.append-column');
  const rCol = document.querySelector('.remove-column');
  const minValue = 2;
  const maxValue = 10;

  document.body.addEventListener('click', e => {

    switch (true) {
      case e.target === aRow:
        tableBody.append(tableBody.lastElementChild.cloneNode(true));
        break;

      case e.target === rRow:
        tableBody.lastElementChild.remove();
        break;

      case e.target === aCol:
        [...tableBody.children].forEach(row => {
          row.append(row.lastElementChild.cloneNode(false));
        });
        break;

      case e.target === rCol:
        [...tableBody.children].forEach(row => {
          row.lastElementChild.remove();
        });
        break;

      default:
        return;
    }

    // check qty of rows

    switch (true) {
      case tableBody.children.length > maxValue - 1:
        aRow.disabled = true;
        break;

      case tableBody.children.length < minValue + 1:
        rRow.disabled = true;
        break;

      default:
        aRow.disabled = false;
        rRow.disabled = false;
    }

    // check qty of cols

    switch (true) {
      case tableBody.firstElementChild.children.length > maxValue - 1:
        aCol.disabled = true;
        break;
      case tableBody.firstElementChild.children.length < minValue + 1:
        rCol.disabled = true;
        break;
      default:
        aCol.disabled = false;
        rCol.disabled = false;
    }
  });
});
