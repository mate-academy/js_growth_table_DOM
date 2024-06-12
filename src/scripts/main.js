'use strict';

'use strict';

const field = document.querySelector('.field');
const btns = document.querySelectorAll('.button');
const addRowBtn = document.querySelector('.append-row');
const delRowBtn = document.querySelector('.remove-row');
const addColBtn = document.querySelector('.append-column');
const delColBtn = document.querySelector('.remove-column');
const MIN_UNIT = 2;
const MAX_UNIT = 10;

let rowCount = field.rows.length;
let colCount = field.rows[0].cells.length;

btns.forEach((btn) => {
  btn.addEventListener('click', handleBtnClick);
});

function handleBtnClick(e) {
  const activeBtn = e.target.className;

  switch (true) {
    case activeBtn.includes('append-row'):
      addRow();
      rowCount += 1;
      break;
    case activeBtn.includes('remove-row'):
      removeRow();
      rowCount -= 1;
      break;
    case activeBtn.includes('append-column'):
      addCol();
      colCount += 1;
      break;
    case activeBtn.includes('remove-column'):
      removeCol();
      colCount -= 1;
      break;
    default:
      // eslint-disable-next-line no-console
      console.log('Smth going wrong with this btn: ', activeBtn);
  }
  checkTableSize();
}

function addRow() {
  const row = field.rows[0].cloneNode(true);

  field.appendChild(row);
}

function removeRow() {
  field.rows[rowCount - 1].remove();
}

function addCol() {
  [...field.rows].forEach((row) => {
    const dupNode = row.cells[0].cloneNode(true);

    row.insertBefore(dupNode, row.cells[row.cells.length - 1]);
  });
}

function removeCol() {
  const rows = [...field.rows];

  for (let i = 0; i < rows.length; i++) {
    field.rows[i].cells[colCount - 1].remove();
  }
}

function checkTableSize() {
  addRowBtn.disabled = rowCount >= MAX_UNIT;
  delRowBtn.disabled = rowCount <= MIN_UNIT;
  addColBtn.disabled = colCount >= MAX_UNIT;
  delColBtn.disabled = colCount <= MIN_UNIT;
}
