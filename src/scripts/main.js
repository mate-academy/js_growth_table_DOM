'use strict';

// write code here
const container = document.querySelector('.container');
const table = container.querySelector('.field');

const buttonAppendRow = container.querySelector('.append-row');
const buttonAppendColumn = container.querySelector('.append-column');
const buttonRemoveRow = container.querySelector('.remove-row');
const buttonRemoveColumn = container.querySelector('.remove-column');
const maxRows = 10;
const maxColumns = 10;
const minRows = 2;
const minColumns = 2;

container.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'button') {
    const trArr = [...table.querySelectorAll('tr')];
    let countOfRows = trArr.length;
    let countOfColumns = [...trArr[0].children].length;

    switch (e.target.classList[0]) {
      case 'append-row':
        if (buttonRemoveRow.disabled) {
          buttonRemoveRow.disabled = '';
        }

        if (countOfRows < maxRows) {
          const tr = document.createElement('tr');

          for (let i = 0; i < countOfColumns; i++) {
            tr.append(document.createElement('td'));
          }
          countOfRows++;

          if (countOfRows === maxRows) {
            buttonAppendRow.disabled = 'disabled';
          }
          table.append(tr);
        }
        break;
      case 'remove-row':
        if (buttonAppendRow.disabled) {
          buttonAppendRow.disabled = '';
        }

        if (countOfRows > minRows) {
          trArr[trArr.length - 1].remove();
          countOfRows--;

          if (countOfRows === minRows) {
            buttonRemoveRow.disabled = 'disabled';
          }
        }
        break;
      case 'append-column':
        if (buttonRemoveColumn.disabled) {
          buttonRemoveColumn.disabled = '';
        }

        if (countOfColumns < maxColumns) {
          trArr.map(el => el.append(document.createElement('td')));
          countOfColumns++;

          if (countOfColumns === maxColumns) {
            buttonAppendColumn.disabled = 'disabled';
          }
        }
        break;
      case 'remove-column':
        if (buttonAppendColumn.disabled) {
          buttonAppendColumn.disabled = '';
        }

        trArr.map(el => {
          const tdLast = [...el.children].pop();

          tdLast.remove();
        });

        countOfColumns--;

        if (countOfColumns === minColumns) {
          buttonRemoveColumn.disabled = 'disabled';
        }
        break;
    }
  }
});
