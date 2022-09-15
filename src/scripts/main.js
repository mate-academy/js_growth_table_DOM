'use strict';

const buttons = document.getElementsByClassName('container')[0].children;

for (const button of buttons) {
  if (button.classList.contains('button')) {
    button.addEventListener('click', () => {
      switch (true) {
        case button.classList.contains('append-row'):
          if (document.querySelector('tbody').children.length < 9) {
            document.querySelector('tbody')
              .append(document.querySelector('tbody')
                .children[0].cloneNode(true));
            document.getElementsByClassName('remove-row')[0].disabled = false;
          }

          if (document.querySelector('tbody').children.length === 9) {
            document.querySelector('tbody')
              .append(document.querySelector('tbody')
                .children[0].cloneNode(true));
            button.disabled = true;
          }
          break;
        case button.classList.contains('remove-row'):
          if (document.querySelector('tbody').children.length >= 3) {
            document.querySelector('tbody').children[0]
              .remove();
            document.getElementsByClassName('append-row')[0].disabled = false;
          }

          if (document.querySelector('tbody').children.length === 2) {
            button.disabled = true;
          }
          break;
        case button.classList.contains('append-column'):
          if (document.querySelector('tbody')
            .children[0].children.length < 9) {
            [...document.querySelector('tbody').children]
              .forEach(row => row.append(document.createElement('td')));

            document.getElementsByClassName('remove-column')[0]
              .disabled = false;
          }

          if (document.querySelector('tbody')
            .children[0].children.length === 9) {
            [...document.querySelector('tbody').children]
              .forEach(row => row.append(document.createElement('td')));
            button.disabled = true;
          }
          break;
        case button.classList.contains('remove-column'):
          if (document.querySelector('tbody').children[0]
            .children.length >= 3) {
            [...document.querySelector('tbody').children]
              .forEach(row => row.children[0].remove());

            document.getElementsByClassName('append-column')[0]
              .disabled = false;
          }

          if (document.querySelector('tbody')
            .children[0].children.length === 2) {
            button.disabled = true;
          }
          break;
        default:
      }
    });
  }
}
