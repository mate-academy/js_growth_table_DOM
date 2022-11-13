'use strict';

const table = document.querySelector('.field tbody');
const td = document.createElement('td');

document.body.addEventListener('click', e => {
  switch (e.target.classList[0]) {
    case ('append-column') :
      for (let i = 0; i < table.children.length; i++) {
        table.children[i].append(td.cloneNode(true));
      }
      break;

    case ('append-row') :
      table.append(table.children[0].cloneNode(true));
      break;

    case ('remove-column') :
      for (let i = 0; i < table.children.length; i++) {
        table.children[i].lastElementChild.remove();
      }
      break;

    case ('remove-row'):
      table.lastElementChild.remove();
  }

  const toggleMaxRow = table.children.length === 10;
  const toggleMinRow = table.children.length === 2;
  const toggleMaxCol = table.children[0].children.length === 10;
  const toggleMinCol = table.children[0].children.length === 2;

  document.querySelector('.append-row').disabled = toggleMaxRow;
  document.querySelector('.remove-row').disabled = toggleMinRow;
  document.querySelector('.append-column').disabled = toggleMaxCol;
  document.querySelector('.remove-column').disabled = toggleMinCol;
});
