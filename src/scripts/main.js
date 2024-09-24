'use strict';

const container = document.querySelector('.container');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const field = document.querySelector('.field');
const tbody = field.tBodies[0];

appendRow.addEventListener('click', (_event) => {
  const trClone = document.querySelector('tr').cloneNode(true);

  if (tbody.children.length < 10) {
    tbody.append(trClone);
  }
});

removeRow.addEventListener('click', (_event) => {
  document.querySelector('tr').remove();
});

appendColumn.addEventListener('click', (_event) => {
  if ([...tbody.children].every((element) => element.children.length < 10)) {
    for (const child of [...tbody.children]) {
      const tdClone = document.querySelector('td').cloneNode(true);

      child.append(tdClone);
    }
  }
});

removeColumn.addEventListener('click', (_event) => {
  for (const child of [...tbody.children]) {
    child.lastElementChild.remove();
  }
});

container.addEventListener('click', (_event) => {
  checkMaxRowsCount(appendRow);
  checkMinRowsCount(removeRow);
  checkMaxColumnCount(appendColumn);
  checkMinColumnCount(removeColumn);
});

// #region checkFunctions

function checkMaxRowsCount(append) {
  if (tbody.children.length === 10) {
    append.setAttribute('disabled', '');
  } else {
    append.removeAttribute('disabled');
  }
}

function checkMinRowsCount(remove) {
  if (tbody.children.length === 2) {
    remove.setAttribute('disabled', '');
  } else {
    remove.removeAttribute('disabled');
  }
}

function checkMaxColumnCount(append) {
  if ([...tbody.children].every((element) => element.children.length === 10)) {
    append.setAttribute('disabled', '');
  } else {
    append.removeAttribute('disabled');
  }
}

function checkMinColumnCount(remove) {
  if ([...tbody.children].every((element) => element.children.length === 2)) {
    remove.setAttribute('disabled', '');
  } else {
    remove.removeAttribute('disabled');
  }
}

// #endregion
