'use strict';

// write code here

const pageTable = document.querySelector('.field');

function handleTableSize(table) {
  const rowAddBtn = document.querySelector('.append-row');
  const rowRemoveBtn = document.querySelector('.remove-row');
  const columnAddBtn = document.querySelector('.append-column');
  const columnRemoveBtn = document.querySelector('.remove-column');
  const minCountOfCells = 2;
  const maxCountOfCells = 10;

  let countOfRowCells = table.rows[0].cells.length;
  let countOfColumnCells = table.rows.length;

  rowAddBtn.addEventListener('click', () => {
    if (countOfColumnCells >= maxCountOfCells) {
      return;
    }

    const newRow = table.insertRow();

    for (let i = 0; i < countOfRowCells; i++) {
      newRow.insertCell();
    }

    countOfColumnCells++;

    if (countOfColumnCells >= maxCountOfCells) {
      rowAddBtn.disabled = true;
    }

    if (countOfColumnCells > minCountOfCells) {
      rowRemoveBtn.disabled = false;
    }
  });

  rowRemoveBtn.addEventListener('click', () => {
    if (countOfColumnCells <= minCountOfCells) {
      return;
    }

    table.deleteRow(-1);
    countOfColumnCells--;

    if (countOfColumnCells <= minCountOfCells) {
      rowRemoveBtn.disabled = true;
    }

    if (countOfColumnCells > minCountOfCells) {
      rowAddBtn.disabled = false;
    }
  });

  columnAddBtn.addEventListener('click', () => {
    if (countOfRowCells >= maxCountOfCells) {
      return;
    }

    countOfRowCells++;

    const allRows = table.rows;

    for (let i = 0; i < allRows.length; i++) {
      allRows[i].insertCell();
    }

    if (countOfRowCells >= maxCountOfCells) {
      columnAddBtn.disabled = true;
    }

    if (countOfRowCells > minCountOfCells) {
      columnRemoveBtn.disabled = false;
    }
  });

  columnRemoveBtn.addEventListener('click', () => {
    if (countOfRowCells <= minCountOfCells) {
      return;
    }

    countOfRowCells--;

    const allRows = table.rows;

    for (let i = 0; i < allRows.length; i++) {
      allRows[i].deleteCell(-1);
    }

    if (countOfRowCells <= minCountOfCells) {
      columnRemoveBtn.disabled = true;
    }

    if (countOfRowCells > minCountOfCells) {
      columnAddBtn.disabled = false;
    }
  });
}

handleTableSize(pageTable);
