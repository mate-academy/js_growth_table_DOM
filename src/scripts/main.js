'use strict';

// write code here

const table = document.querySelector('table');

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

appendRowBtn.addEventListener('click', function () {
  const firstRow = table.querySelector('tr');

  if (table.querySelectorAll('tr').length < 10) {
    const newRow = document.createElement('tr');

    for (let i = 0; i < firstRow.children.length; i++) {
      const cell = document.createElement('td');

      cell.textContent = '';
      newRow.appendChild(cell);
    }

    table.appendChild(newRow);

    appendRowBtn.style.bottom = parseInt(appendRowBtn.style.bottom) + 50 + 'px';
    removeRowBtn.style.bottom = parseInt(removeRowBtn.style.bottom) + 50 + 'px';
  }

  if (table.querySelectorAll('tr').length >= 10) {
    appendRowBtn.setAttribute('disabled', '');
  }

  if (table.querySelectorAll('tr').length > 2) {
    removeRowBtn.removeAttribute('disabled');
  }
});

removeRowBtn.addEventListener('click', function () {
  const rows = table.querySelectorAll('tr');

  if (rows.length > 2) {
    const lastRow = rows[rows.length - 1];

    lastRow.remove();

    const appendBottom = parseInt(appendRowBtn.style.bottom);
    const removeBottom = parseInt(removeRowBtn.style.bottom);

    appendRowBtn.style.bottom = appendBottom - 50 + 'px';
    removeRowBtn.style.bottom = removeBottom - 50 + 'px';
  }

  if (table.querySelectorAll('tr').length < 10) {
    appendRowBtn.removeAttribute('disabled');
  }

  if (table.querySelectorAll('tr').length <= 2) {
    removeRowBtn.setAttribute('disabled', '');
  }
});

appendColBtn.addEventListener('click', function () {
  const rows = table.querySelectorAll('tr');

  if (rows[0].children.length < 10) {
    rows.forEach((row) => {
      const cell = document.createElement('td');

      cell.textContent = '';
      row.appendChild(cell);
    });

    const appendRight = parseInt(appendColBtn.style.right);
    const removeRight = parseInt(removeColBtn.style.right);

    removeColBtn.style.right = removeRight + 50 + 'px';
    appendColBtn.style.right = appendRight + 50 + 'px';
  }

  if (rows[0].children.length >= 10) {
    appendColBtn.setAttribute('disabled', '');
  }

  if (rows[0].children.length > 2) {
    removeColBtn.removeAttribute('disabled');
  }
});

removeColBtn.addEventListener('click', function () {
  const rows = table.querySelectorAll('tr');

  if (rows[0].children.length > 2) {
    rows.forEach((row) => {
      const lastCell = row.lastElementChild;

      row.removeChild(lastCell);
    });

    const appendRight = parseInt(appendColBtn.style.right);
    const removeRight = parseInt(removeColBtn.style.right);

    removeColBtn.style.right = removeRight - 50 + 'px';
    appendColBtn.style.right = appendRight - 50 + 'px';
  }

  if (rows[0].children.length < 10) {
    appendColBtn.removeAttribute('disabled');
  }

  if (rows[0].children.length <= 2) {
    removeColBtn.setAttribute('disabled', '');
  }
});
