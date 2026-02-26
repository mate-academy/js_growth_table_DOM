'use strict';

const container = document.querySelector('.container');

container.addEventListener('click', (e) => {
  const pressedItem = e.target;
  //  кнопки, які додають і видаляють рядки та колонки
  const appendRow = document.querySelector('.append-row');
  const removeRow = document.querySelector('.remove-row');
  const appendColumn = document.querySelector('.append-column');
  const removeColumn = document.querySelector('.remove-column');

  const table = document.querySelector('.field');
  const tbody = table.tBodies[0];
  //  довжина одного рядка і довжина всіх рядків

  if (
    pressedItem instanceof HTMLElement &&
    table instanceof HTMLElement &&
    tbody instanceof HTMLElement
  ) {
    if (pressedItem === appendRow) {
      const trCopy = table.rows[0];

      if (trCopy instanceof HTMLElement) {
        const tr = trCopy.cloneNode(true);

        tbody.append(tr);
      }

      const totalRowLength = table.rows.length;

      if (totalRowLength === 10) {
        appendRow.disabled = true;
      }

      if (totalRowLength === 3 && removeRow.hasAttribute('disabled')) {
        removeRow.removeAttribute('disabled');
      }
    }

    if (pressedItem === removeRow) {
      const trRemove = tbody.lastElementChild;

      if (trRemove instanceof HTMLElement) {
        trRemove.remove();
      }

      const totalRowLength = table.rows.length;

      if (totalRowLength === 2) {
        removeRow.disabled = true;
      }

      if (totalRowLength === 9 && appendRow.hasAttribute('disabled')) {
        appendRow.removeAttribute('disabled');
      }
    }

    if (pressedItem === appendColumn) {
      Array.from(tbody.children).forEach((tr) => {
        const td = document.createElement('td');

        tr.append(td);
      });

      const firstRowLength = tbody.children[0].cells.length;

      if (firstRowLength === 10) {
        appendColumn.disabled = true;
      }

      if (firstRowLength === 3 && removeColumn.hasAttribute('disabled')) {
        removeColumn.removeAttribute('disabled');
      }
    }

    if (pressedItem === removeColumn) {
      Array.from(tbody.children).forEach((tr) => {
        const td = tr.lastElementChild;

        td.remove();
      });

      const firstRowLength = tbody.children[0].cells.length;

      if (firstRowLength === 2) {
        removeColumn.disabled = true;
      }

      if (firstRowLength === 9 && appendColumn.hasAttribute('disabled')) {
        appendColumn.removeAttribute('disabled');
      }
    }
  }
});
