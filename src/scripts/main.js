'use strict';

// write code here

const buttons = [...document.querySelectorAll('.button')];

for (let j = 0; j < buttons.length; j++) {
  buttons[j].addEventListener('click', (e) => {
    const field = document.querySelector('.field').children[0];
    const trs = document.getElementsByTagName('tr');

    switch (buttons[j].className) {
      case 'append-row button':
        if (field.childElementCount < 10) {
          const len = document.getElementsByTagName('tr')[0].children.length;
          const tr = document.createElement('tr');

          for (let i = 0; i < len; i++) {
            tr.appendChild(document.createElement('td'));
          }

          field.appendChild(tr);

          if (field.childElementCount === 10) {
            document.querySelector('.append-row').disabled = true;
          }

          if (field.childElementCount > 2) {
            document.querySelector('.remove-row').disabled = false;
          }
        }

        break;

      case 'remove-row button':
        if (field.childElementCount > 2) {
          field.removeChild(field.children[0]);
        }

        if (field.childElementCount < 10) {
          document.querySelector('.append-row').disabled = false;
        }

        if (field.childElementCount === 2) {
          document.querySelector('.remove-row').disabled = true;
        }
        break;

      case 'append-column button':
        if (document.getElementsByTagName('tr')[0].childElementCount < 10) {
          for (let i = 0; i < trs.length; i++) {
            trs[i].appendChild(document.createElement('td'));
          }
        }

        if (document.getElementsByTagName('tr')[0].childElementCount === 10) {
          document.querySelector('.append-column').disabled = true;
        }

        if (document.getElementsByTagName('tr')[0].childElementCount > 2) {
          document.querySelector('.remove-column').disabled = false;
        }
        break;

      case 'remove-column button':
        if (document.getElementsByTagName('tr')[0].childElementCount > 2) {
          for (let i = 0; i < trs.length; i++) {
            trs[i].removeChild(trs[i].children[trs[i].children.length - 1]);
          }

          if (document.getElementsByTagName('tr')[0].childElementCount === 2) {
            document.querySelector('.remove-column').disabled = true;
          }

          if (document.getElementsByTagName('tr')[0].childElementCount < 10) {
            document.querySelector('.append-column').disabled = false;
          }
        }
        break;
    }
  });
}
