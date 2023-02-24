'use strict';

function growthTable(table, maxSize, minSize) {
  // eslint-disable-next-line no-shadow
  document.addEventListener('click', (event) => {
    let rowsCount = table.children.length;
    let columnCount = table.children[0].children.length;

    const targetButton = '.' + event.target.classList[0];

    const addRow = '.' + document.querySelectorAll('button')[0].classList[0];
    const delRow = '.' + document.querySelectorAll('button')[1].classList[0];
    const addColumn = '.' + document.querySelectorAll('button')[2].classList[0];
    const delColumn = '.' + document.querySelectorAll('button')[3].classList[0];

    const removeDisabled = (inputClass) => document.querySelector(inputClass)
      .removeAttribute('disabled');

    const setDisabled = (inputClass) => document.querySelector(inputClass)
      .setAttribute('disabled', '');

    switch (targetButton) {
      case addRow : {
        table.append(table.children[0].cloneNode(true));
        rowsCount++;
        break;
      }

      case delRow : {
        table.children[0].remove();
        rowsCount--;
        break;
      }

      case addColumn : {
        for (const i of table.children) {
          i.append(document.createElement('td'));
        }
        columnCount++;
        break;
      }

      case delColumn: {
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

    if (rowsCount === maxSize) {
      setDisabled(addRow);
    }

    if (rowsCount === minSize) {
      setDisabled(delRow);
    }

    if (columnCount === maxSize) {
      setDisabled(addColumn);
    }

    if (columnCount === minSize) {
      setDisabled(delColumn);
    }
  });
}

const myTable = document.querySelector('tbody');

growthTable(myTable, 10, 2);
