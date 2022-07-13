'use strict';

const buttons = document.querySelectorAll('.button');
const rows = document.querySelector('.field').firstElementChild;

function isEnough() {
  for (const button of buttons) {
    if (button.classList.contains('append-row')) {
      button.disabled = rows.children.length >= 10;
    }

    if (button.classList.contains('remove-row')) {
      button.disabled = rows.children.length <= 2;
    }

    if (button.classList.contains('append-column')) {
      button.disabled = rows.children[0].children.length >= 10;
    }

    if (button.classList.contains('remove-column')) {
      button.disabled = rows.children[0].children.length <= 2;
    }
  }
}

for (const button of buttons) {
  if (button.classList.contains('append-row')) {
    button.addEventListener('click', (e) => {
      rows.append(rows.children[0].cloneNode(true));

      isEnough();
    });
  }

  if (button.classList.contains('remove-row')) {
    button.addEventListener('click', (e) => {
      rows.removeChild(rows.children[0]);

      isEnough();
    });
  }

  if (button.classList.contains('append-column')) {
    button.addEventListener('click', (e) => {
      for (const row of rows.children) {
        row.append(row.children[0].cloneNode(true));
      }

      isEnough();
    });
  }

  if (button.classList.contains('remove-column')) {
    button.addEventListener('click', (e) => {
      for (const row of rows.children) {
        row.removeChild(row.children[0]);
      }

      isEnough();
    });
  }
}
