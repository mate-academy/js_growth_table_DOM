'use strict';

const apRowBut = document.querySelector('.append-row');
const remRowBut = document.querySelector('.remove-row');
const apColBut = document.querySelector('.append-column');
const remColBut = document.querySelector('.remove-column');
const tableBody = document.querySelector('.field tbody');
const maxCount = 10;
const minCount = 2;
let rowCount = [...document.querySelectorAll('tr')].length;
let colCount = [...document.querySelector('tr').children].length;

document.addEventListener('click', (e) => {
  if (e.target === apRowBut) {
    if (rowCount < maxCount) {
      const row = document.querySelector('tr');
      const newRow = row.cloneNode(true);
      const cells = [...newRow.children];

      cells.forEach((cell) => {
        cell.textContent = '';
      });

      tableBody.appendChild(newRow);
      rowCount++;

      if (rowCount === maxCount) {
        apRowBut.setAttribute('disabled', 'true');
      }

      if (rowCount === minCount + 1) {
        remRowBut.removeAttribute('disabled');
      }
    }
  }

  if (e.target === remRowBut) {
    if (rowCount > minCount) {
      const lastRow = document.querySelector('tr:last-child');

      tableBody.removeChild(lastRow);
      rowCount--;

      if (rowCount === minCount) {
        remRowBut.setAttribute('disabled', 'true');
      }

      if (rowCount === maxCount - 1) {
        apRowBut.removeAttribute('disabled');
      }
    }
  }

  if (e.target === apColBut) {
    if (colCount < maxCount) {
      const trs = [...document.querySelectorAll('tr')];

      trs.forEach((tr) => {
        const td = tr.lastElementChild;
        const newTd = td.cloneNode(true);

        newTd.textContent = '';

        tr.appendChild(newTd);
      });

      colCount++;

      if (colCount === maxCount) {
        apColBut.setAttribute('disabled', 'true');
      }

      if (colCount === minCount + 1) {
        remColBut.removeAttribute('disabled');
      }
    }
  }

  if (e.target === remColBut) {
    if (colCount > minCount) {
      const trs = [...document.querySelectorAll('tr')];

      trs.forEach((tr) => {
        const td = tr.lastElementChild;

        tr.removeChild(td);
      });

      colCount--;

      if (colCount === minCount) {
        remColBut.setAttribute('disabled', 'true');
      }

      if (colCount === maxCount - 1) {
        apColBut.removeAttribute('disabled');
      }
    }
  }
});
