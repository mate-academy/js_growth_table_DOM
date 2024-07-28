'use strict';

const MAXLIMIT = 10;
const MINLIMIT = 2;
const table = document.querySelector('.field');
const buttons = document.querySelector('.container');

buttons.addEventListener('click', (e) => {
  const target = e.target;

  if (target.classList.contains('button')) {
    switch (true) {
      case target.classList.contains('append-row'):
        const tr = document.createElement('tr');
        document.querySelector('.remove-row').disabled = '';

        if (document.querySelector('tbody').childElementCount < MAXLIMIT) {
          for (
            let i = 0;
            i < table.querySelector('tbody').children[0].childElementCount;
            i++
          ) {
            const td = document.createElement('td');

            tr.appendChild(td);
          }
          table.querySelector('tbody').appendChild(tr);
        }

        if (document.querySelector('tbody').childElementCount === MAXLIMIT) {
          document.querySelector('.append-row').disabled = true;
        }
        break;
      case target.classList.contains('remove-row'):
        document.querySelector('.append-row').disabled = '';

        table.querySelector('tbody').children[0].remove();

        if (document.querySelector('tbody').childElementCount === MINLIMIT) {
          document.querySelector('.remove-row').disabled = true;
        }
        break;
      case target.classList.contains('append-column'):
        const addColumn = table.querySelectorAll('tr');

        document.querySelector('.remove-column').disabled = '';

        for (const i of addColumn) {
          if (i.childElementCount > 0 && i.childElementCount < MAXLIMIT) {
            i.appendChild(document.createElement('td'));
          }
        }

        if (document.querySelector('tr').childElementCount === MAXLIMIT) {
          document.querySelector('.append-column').disabled = true;
        }
        break;
      case target.classList.contains('remove-column'):
        const removeColumn = table.querySelectorAll('tr');

        document.querySelector('.append-column').disabled = '';

        for (const i of removeColumn) {
          if (i.childElementCount > 0 && i.childElementCount > MINLIMIT) {
            i.children[0].remove();
          }
        }

        if (document.querySelector('tr').childElementCount === MINLIMIT) {
          document.querySelector('.remove-column').disabled = true;
        }
        break;
    }
  }
});

// childElementCount

// write code here
