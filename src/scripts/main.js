'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const tBody = document.querySelector('tBody');

appendRow.addEventListener('click', e => {
  condition(removeRow);
  maxLength(tBody.children.length, appendRow);

  const cloneEl = tBody.lastElementChild.cloneNode(true);

  tBody.append(cloneEl);
});

removeRow.addEventListener('click', e => {
  condition(appendRow);
  minLength(tBody.children.length, removeRow);

  tBody.lastElementChild.remove();
});

appendColumn.addEventListener('click', e => {
  condition(removeColumn);
  maxLength(tBody.lastElementChild.children.length, appendColumn);

  for (const item of tBody.children) {
    item.insertAdjacentHTML('beforeend', `
    <tr>
      <td></td>
    </tr>
    `);
  }
});

removeColumn.addEventListener('click', e => {
  condition(appendColumn);
  minLength(tBody.lastElementChild.children.length, removeColumn);

  for (const item of tBody.children) {
    item.lastElementChild.remove();
  }
});

function condition(button) {
  if (button.disabled === true) {
    button.disabled = false;
  }
}

function minLength(short, button) {
  if (short === 3) {
    button.disabled = true;
  }
}

function maxLength(long, button) {
  if (long === 9) {
    button.disabled = true;
  }
}
