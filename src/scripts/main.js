'use strict';

// write code here
const $buttons = {
  addRowButton: document.querySelector('button.append-row'),
  removeRowButton: document.querySelector('button.remove-row'),
  addColumnButton: document.querySelector('button.append-column'),
  removeColumnButton: document.querySelector('button.remove-column'),
};

const $fieldBody = document.querySelector('table.field').firstElementChild;

const fieldDimensions = {
  width: 4,
  height: 4,
};

$buttons.addRowButton.addEventListener('click', (e) => {
  if (fieldDimensions.height >= 10) {
    return;
  }

  fieldDimensions.height++;

  $fieldBody.appendChild($fieldBody.firstElementChild.cloneNode(true));

  if (fieldDimensions.height >= 10) {
    $buttons.addRowButton.disabled = true;
  }

  if (fieldDimensions.height >= 3) {
    $buttons.removeRowButton.disabled = false;
  }
});

$buttons.removeRowButton.addEventListener('click', (e) => {
  if (fieldDimensions.height <= 2) {
    return;
  }

  fieldDimensions.height--;

  $fieldBody.removeChild($fieldBody.lastElementChild);

  if (fieldDimensions.height <= 9) {
    $buttons.addRowButton.disabled = false;
  }

  if (fieldDimensions.height <= 2) {
    $buttons.removeRowButton.disabled = true;
  }
});

$buttons.addColumnButton.addEventListener('click', (e) => {
  if (fieldDimensions.width >= 10) {
    return;
  }

  fieldDimensions.width++;

  Array.from($fieldBody.children).forEach((row) => {
    row.appendChild(document.createElement('td'));
  });

  if (fieldDimensions.width >= 10) {
    $buttons.addColumnButton.disabled = true;
  }

  if (fieldDimensions.width >= 3) {
    $buttons.removeColumnButton.disabled = false;
  }
});

$buttons.removeColumnButton.addEventListener('click', (e) => {
  if (fieldDimensions.width <= 2) {
    return;
  }

  fieldDimensions.width--;

  Array.from($fieldBody.children).forEach((row) => {
    row.removeChild(row.lastElementChild);
  });

  if (fieldDimensions.width <= 9) {
    $buttons.addColumnButton.disabled = false;
  }

  if (fieldDimensions.width <= 2) {
    $buttons.removeColumnButton.disabled = true;
  }
});
