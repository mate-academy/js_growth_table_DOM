'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

document.querySelector('.container').addEventListener('click', (e) => {
  const field = document.querySelector('.field').children[0];
  const trs = document.getElementsByTagName('tr');

  switch (e.target) {
    case appendRow:
      if (field.childElementCount < 10) {
        const len = document.getElementsByTagName('tr')[0].children.length;
        const tr = document.createElement('tr');

        for (let i = 0; i < len; i++) {
          tr.appendChild(document.createElement('td'));
        }

        field.appendChild(tr);
      }

      break;

    case removeRow:
      if (field.childElementCount > 2) {
        field.removeChild(field.children[0]);
      }
      break;

    case appendColumn:
      if (document.getElementsByTagName('tr')[0].childElementCount < 10) {
        for (let i = 0; i < trs.length; i++) {
          trs[i].appendChild(document.createElement('td'));
        }
      }
      break;

    case removeColumn:
      if (document.getElementsByTagName('tr')[0].childElementCount > 2) {
        for (let i = 0; i < trs.length; i++) {
          trs[i].removeChild(trs[i].children[trs[i].children.length - 1]);
        }
      }
      break;
  }

  document.querySelector('.remove-row').disabled
    = field.childElementCount === 2;

  document.querySelector('.append-row').disabled
    = field.childElementCount === 10;

  document.querySelector('.append-column').disabled
    = document.getElementsByTagName('tr')[0].childElementCount === 10;

  document.querySelector('.remove-column').disabled
    = document.getElementsByTagName('tr')[0].childElementCount === 2;
});
