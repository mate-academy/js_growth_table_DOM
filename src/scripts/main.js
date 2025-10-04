'use strict';

const counterMaxRow = 10;
const counterMinRow = 2;
const counterMaxColumn = 10;
const counterMinColumn = 2;

const tbody = document.querySelectorAll('.field tbody');

const countTr = tbody.querySelectorAll('.field tr');
let countRow = countTr.length;

let countColumn = 0;

if (countRow > 0) {
  const firstRow = countTr[0];

  const columnsIn = firstRow.querySelectorAll('td');

  countColumn = columnsIn.length;
}

//  додавання рядків внизу (done)

const downAdder = tbody.querySelectorAll('.append-row button');

if (countRow < counterMaxRow) {
  downAdder.forEach((row) => {
    row.addEventListener('click', () => {
      const newTrRow = document.createElement('tr');

      for (let i = 0; i < countColumn; i++) {
        const newTdRow = document.createElement('td');

        newTrRow.appendChild(newTdRow);
      }

      tbody.appendChild(newTrRow);

      countRow++;

      if (countRow === counterMaxRow) {
        row.disabled = true;
      }
    });
  });
}

// видалення рядків внизу (done but not work)

const downRemover = tbody.querySelectorAll('.remove-row button');

downRemover.forEach((row) => {
  row.addEventListener('click', () => {
    if (countRow > counterMinRow) {
      const rem = tbody.querySelectorAll('tr');
      const remover = [...rem];

      const lastRow = remover[remover.length - 1];

      lastRow.remove();
      countRow--;
    }

    if (countRow === counterMinRow) {
      row.disabled = true;
    }
  });
});

// додавання рядків справа (done)

const rightAdder = tbody.querySelectorAll('.append-column button');

if (countColumn < counterMaxColumn) {
  rightAdder.forEach((column) => {
    column.addEventListener('click', () => {
      const trColumn = tbody.querySelectorAll('tr');
      const masa = [...trColumn];

      masa.forEach((col) => {
        const newTdRow = tbody.createElement('td');

        col.appendChild(newTdRow);
      });
      countColumn++;

      if (countColumn === counterMaxColumn) {
        column.disabled = true;
      }
    });
  });
}

// видалення рядків справа

const rightRemover = tbody.querySelectorAll('.remove-column button');

rightRemover.forEach((column) => {
  column.addEventListener('click', () => {
    if (countColumn > counterMinColumn) {
      const rem = tbody.querySelectorAll('tr');

      rem.forEach((element) => {
        const remover = element.querySelectorAll('td');

        const lastColumn = remover[remover.length - 1];

        lastColumn.remove();
      });
      countColumn--;
    }

    if (countColumn === counterMinColumn) {
      column.disabled = true;
    }
  });
});
