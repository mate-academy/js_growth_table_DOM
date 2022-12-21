'use strict';

const tableElement = document.getElementsByClassName('field')[0];

document.addEventListener('click', (e) => {
  const minRange = 2;
  const maxRange = 10;

  switch (true) {
    case e.target.classList.contains('append-row') :
      appendRow(tableElement);
      break;
    case e.target.classList.contains('remove-row') :
      removeRow(tableElement);
      break;
    case e.target.classList.contains('append-column') :
      appendColumn(tableElement);
      break;
    case e.target.classList.contains('remove-column') :
      removeColumn(tableElement);
      break;
  }

  const dimantion = dimensionTable(tableElement);

  const removeColButton = document.getElementsByClassName(
    'remove-column button')[0];
  const removeRowButton = document.getElementsByClassName(
    'remove-row button')[0];
  const appendColButton = document.getElementsByClassName(
    'append-column button')[0];
  const appendRowButton = document.getElementsByClassName(
    'append-row button')[0];

  removeColButton.disabled = dimantion.col === minRange;
  removeRowButton.disabled = dimantion.row === minRange;
  appendColButton.disabled = dimantion.col === maxRange;
  appendRowButton.disabled = dimantion.row === maxRange;
});

function dimensionTable(table) {
  return {
    row: table.getElementsByTagName('tr').length,
    col: table.rows[0].cells.length,
  };
}

function appendRow(table) {
  const elementTbody = document.getElementsByTagName('tbody')[0];
  const elementsTr = table.getElementsByTagName('tr');
  const lastTr = elementsTr[elementsTr.length - 1];

  elementTbody.append(lastTr.cloneNode(true));
}

function appendColumn(table) {
  for (const item of table.getElementsByTagName('tr')) {
    item.append(item.lastElementChild.cloneNode(true));
  }
}

function removeRow(table) {
  const arrayTr = table.getElementsByTagName('tr');
  const lastTr = arrayTr[arrayTr.length - 1];

  lastTr.remove();
}

function removeColumn(table) {
  for (const item of table.getElementsByTagName('tr')) {
    item.lastElementChild.remove();
  }
}
