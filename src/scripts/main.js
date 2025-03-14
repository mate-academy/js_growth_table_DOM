'use strict';

const field = document.body.querySelector('.field');

/* #append-row-AND-remove-row */

const rowButton = document.body.querySelector('.append-row');

rowButton.addEventListener('click', (e) => {
  const fieldCildrens = field.querySelectorAll('tr');
  const lastChildField = fieldCildrens[fieldCildrens.length - 1].children;
  const tr = document.createElement('tr');

  if (fieldCildrens.length === 10) {
    return;
  }

  Array.from(lastChildField).forEach(() => {
    const td = document.createElement('td');

    tr.append(td);
  });

  field.append(tr);
});

const rowRemove = document.body.querySelector('.remove-row');

rowRemove.onclick = (e) => {
  const fieldNodeList = field.querySelectorAll('tr');

  if (fieldNodeList.length > 2) {
    fieldNodeList[fieldNodeList.length - 1].remove();
  }
};

/* #.append-column-AND-remove-column */

const columButton = document.body.querySelector('.append-column');

columButton.addEventListener('click', (e) => {
  const fieldCinds = field.querySelectorAll('tr');
  const FIRTS_CHILD_FIELD_LENGTH = fieldCinds[0].children.length;

  if (FIRTS_CHILD_FIELD_LENGTH === 10) {
    return;
  }

  fieldCinds.forEach((tr) => {
    const newTD = document.createElement('td');

    tr.append(newTD);
  });
});

const columRemove = document.body.querySelector('.remove-column');

columRemove.addEventListener('click', (e) => {
  const culumLength = field.querySelectorAll('tr')[0].children;

  if (culumLength.length === 2) {
    return;
  }

  field.querySelectorAll('tr').forEach((i) => {
    i.lastElementChild.remove();
  });
});
