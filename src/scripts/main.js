'use strict';

const table = document.querySelector('.field tbody');
const buttons = document.querySelectorAll('.container .button');

[...buttons].forEach(element => {
  element.addEventListener('click', (e) => {
    const button = e.target;

    if (button.classList.contains('append-row')) {
      if (table.children.length < 10) {
        table.append(table.lastElementChild.cloneNode(true));

        if (document.querySelector('.remove-row').hasAttribute('disabled')) {
          document.querySelector('.remove-row').removeAttribute('disabled');
        }

        if (table.children.length === 10) {
          button.setAttribute('disabled', false);
        }
      }
    }

    if (button.classList.contains('remove-row')) {
      if (table.children.length > 2) {
        table.deleteRow(length - 1);

        if (table.children.length === 2) {
          button.setAttribute('disabled', false);
        }

        if (document.querySelector('.append-row').hasAttribute('disabled')) {
          document.querySelector('.append-row').removeAttribute('disabled');
        }
      }
    }

    if (button.classList.contains('append-column')) {
      [...table.children].forEach(item => {
        if (item.children.length < 10) {
          item.append(item.lastElementChild.cloneNode(true));

          if (item.children.length === 10) {
            button.setAttribute('disabled', false);
          }

          if (document.querySelector('.remove-column')
            .hasAttribute('disabled')) {
            document.querySelector('.remove-column')
              .removeAttribute('disabled');
          }
        }
      });
    }

    if (button.classList.contains('remove-column')) {
      [...table.children].forEach(item => {
        if (item.children.length > 2) {
          item.lastElementChild.remove();

          if (item.children.length === 2) {
            button.setAttribute('disabled', false);
          }

          if (document.querySelector('.append-column')
            .hasAttribute('disabled')) {
            document.querySelector('.append-column')
              .removeAttribute('disabled');
          }
        }
      });
    }
  });
});
