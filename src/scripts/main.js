'use strict';

// write code here
const list = document.querySelector('div.container');

list.addEventListener('click', (event) => {
  const item = event.target;

  switch (item) {
    case list.children[1]:
      list.children[4].deleteRow(0);
      break;
    case list.children[0]:
      const cloneRow = list.children[4].rows[0].cloneNode(true);

      list.children[4].append(cloneRow);
      break;

    case list.children[2]:
      for (let i = 0; i < list.children[4].rows.length; i++) {
        const cloneColumn = list.children[4].rows[i].cells[1].cloneNode(true);

        list.children[4].rows[i].append(cloneColumn);
      };
      break;

    case list.children[3]:
      for (let i = 0; i < list.children[4].rows.length; i++) {
        list.children[4].rows[i]
          .cells[list.children[4].rows[i].cells.length - 1].remove();
      }
      break;
  }

  const minLength = 2;
  const maxLength = 10;

  list.children[2].disabled
  = list.children[4].rows[0].cells.length >= maxLength;

  list.children[3].disabled
  = list.children[4].rows[0].cells.length <= minLength;
  list.children[0].disabled = list.children[4].rows.length >= maxLength;
  list.children[1].disabled = list.children[4].rows.length <= minLength;
});
