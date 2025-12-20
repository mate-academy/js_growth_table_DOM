'use strict';
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

appendColumnBtn.addEventListener('click', (event) => {
  appendColumn(table);
});

removeColumnBtn.addEventListener('click', (event) => {
  removeColumn(table);
  updateRemoveColumnBtn(table)
});

appendRowBtn.addEventListener('click', (event) => {
  appendRow(table);
});

removeRowBtn.addEventListener('click', (event) => {
  removeRow(table);
});


function appendColumn(elem) {
  const len = elem.rows[0].cells.length;

  if (len < 10) {
    for (const child of elem.rows) {
      const cell = document.createElement('td');
      child.prepend(cell);
    }
  }

  updateRemoveColumnBtn(elem);

}

function removeColumn(elem) {
  let len = elem.rows[0].cells.length;

  if (len > 2) {
    for (const child of elem.rows) {
      child.cells[0].remove();
    }
  };

  len = elem.rows[0].cells.length;

  updateRemoveColumnBtn(elem);
}

function appendRow(elem) {
  const columnLen = elem.rows[0].cells.length;
  const rowLen = elem.tBodies[0].children.length;

  if (rowLen < 10) {
    const row = document.createElement('tr');
    for (let i = 0; i < columnLen; i++) {
      const cell = document.createElement('td');
      row.append(cell);
    }
    elem.tBodies[0].prepend(row);
  }

  updateRemoveRowBtn(elem);
}

function removeRow(elem) {
  const rowLen = elem.tBodies[0].children.length;

  if (rowLen > 2) {
    elem.tBodies[0].children[0].remove();

  }

  updateRemoveRowBtn(elem);
}

function updateRemoveColumnBtn(elem) {
  const len = elem.rows[0].cells.length;

  removeColumnBtn.disabled = len <= 2;
  appendColumnBtn.disabled = len >= 10;
}

function updateRemoveRowBtn(elem) {
  const len = elem.tBodies[0].children.length;

  removeRowBtn.disabled = len <= 2;
  appendRowBtn.disabled = len >= 10;
}



