'use strict';

function growthTable(table) {
  document.addEventListener('click', (evenFunc) => {
    let rowsCount = table.children.length;
    let columnCount = table.children[0].children.length;

    const classButton = evenFunc.target.className;

    switch (classButton) {
      case 'append-row button' : {
        table.append(table.children[0].cloneNode(true));
        rowsCount = rowsCount + 1;
        break;
      }

      case 'remove-row button' : {
        table.children[0].remove();
        rowsCount = rowsCount - 1;
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

    if (rowsCount <= 9) {
      document.querySelector('.append-row').removeAttribute('disabled');
    } else {
      document.querySelector('.append-row').setAttribute('disabled', '');
    }

    if (rowsCount >= 3) {
      document.querySelector('.remove-row').removeAttribute('disabled');
    } else {
      document.querySelector('.remove-row').setAttribute('disabled', '');
    }

    if (columnCount <= 9) {
      document.querySelector('.append-column').removeAttribute('disabled');
    } else {
      document.querySelector('.append-column').setAttribute('disabled', '');
    }

    if (columnCount >= 3) {
      document.querySelector('.remove-column').removeAttribute('disabled');
    } else {
      document.querySelector('.remove-column').setAttribute('disabled', '');
    }
  });
}

growthTable(document.querySelector('tbody'));
