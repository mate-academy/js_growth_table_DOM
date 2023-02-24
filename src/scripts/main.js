'use strict';

function growthTable(table) {
  // eslint-disable-next-line no-shadow
  document.addEventListener('click', (event) => {
    let rowsCount = table.children.length;
    let columnCount = table.children[0].children.length;

    const classButton = event.target.className;

    const addRow = '.' + document.querySelectorAll('button')[0].classList[0];
    const delRow = '.' + document.querySelectorAll('button')[1].classList[0];
    const addColumn = '.' + document.querySelectorAll('button')[2].classList[0];
    const delColumn = '.' + document.querySelectorAll('button')[3].classList[0];

    const removeDisabled = (inputClass) => document.querySelector(inputClass)
      .removeAttribute('disabled');

    const setDisabled = (inputClass) => document.querySelector(inputClass)
      .setAttribute('disabled', '');

    switch (classButton) {
      case 'append-row button' : {
        table.append(table.children[0].cloneNode(true));
        rowsCount++;
        break;
      }

      case 'remove-row button' : {
        table.children[0].remove();
        rowsCount--;
        break;
      }

      case 'append-column button' : {
        for (const i of table.children) {
          i.append(document.createElement('td'));
        }
        columnCount++;
        break;
      }

      case 'remove-column button': {
        for (const i of table.children) {
          i.children[0].remove();
        }
        columnCount--;
        break;
      }
    }

    removeDisabled(addRow);
    removeDisabled(delRow);
    removeDisabled(addColumn);
    removeDisabled(delColumn);

    if (rowsCount === 10) {
      setDisabled(addRow);
    }

    if (rowsCount === 2) {
      setDisabled(delRow);
    }

    if (columnCount === 10) {
      setDisabled(addColumn);
    }

    if (columnCount === 2) {
      setDisabled(delColumn);
    }
  });
}

growthTable(document.querySelector('tbody'));
