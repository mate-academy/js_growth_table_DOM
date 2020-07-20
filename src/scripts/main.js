'use strict';

const table = document.querySelector('.field').firstElementChild;
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');
const rows = table.rows;
const cells = rows[0].children;
const maxCount = 10;
const minCount = 2;

appendRowBtn.onclick = () => {
  if (rows.length < maxCount) {
    removeRowBtn.disabled = false;
    table.append(rows[0].cloneNode(true));
  }

  if (rows.length === maxCount) {
    appendRowBtn.disabled = true;
  }
};

removeRowBtn.onclick = () => {
  if (rows.length > minCount) {
    appendRowBtn.disabled = false;
    rows[rows.length - 1].remove();
  }

  if (rows.length <= minCount) {
    removeRowBtn.disabled = true;
  }
};

appendColBtn.onclick = () => {
  if (cells.length < maxCount) {
    removeColBtn.disabled = false;

    [...rows].forEach((row) => {
      const cell = cells[0].cloneNode(true);

      row.append(cell);
    });
  }

  if (cells.length === maxCount) {
    appendColBtn.disabled = true;
  }
};

removeColBtn.onclick = () => {
  if (cells.length > minCount) {
    appendColBtn.disabled = false;

    [...rows].forEach((row) => {
      const cell = row.children;

      cell[cell.length - 1].remove();
    });
  }

  if (cells.length === minCount) {
    removeColBtn.disabled = true;
  }
};
