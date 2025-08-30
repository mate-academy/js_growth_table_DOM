'use strict';

const buttons = Array.from(document.querySelectorAll('button'));
const table = document.querySelector('table');

const updateButtons = () => {
  const rows = Array.from(document.querySelectorAll('tr'));
  const maxCols = Math.max(...rows.map((r) => r.children.length));

  buttons.forEach((btn) => {
    if (btn.classList.contains('remove-row')) {
      if (rows.length <= 2) {
        btn.setAttribute('disabled', '');
      } else {
        btn.removeAttribute('disabled');
      }
    }

    if (btn.classList.contains('append-row')) {
      if (rows.length >= 10) {
        btn.setAttribute('disabled', '');
      } else {
        btn.removeAttribute('disabled');
      }
    }

    if (btn.classList.contains('remove-column')) {
      if (maxCols <= 2) {
        btn.setAttribute('disabled', '');
      } else {
        btn.removeAttribute('disabled');
      }
    }

    if (btn.classList.contains('append-column')) {
      if (maxCols >= 10) {
        btn.setAttribute('disabled', '');
      } else {
        btn.removeAttribute('disabled');
      }
    }
  });
};

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const rows = Array.from(document.querySelectorAll('tr'));
    const tbody = table.querySelector('tbody') || table;

    if (btn.classList.contains('append-row')) {
      if (rows.length < 10) {
        const createTr = document.createElement('tr');
        const cols = rows[0].children.length;

        for (let i = 0; i < cols; i++) {
          const td = document.createElement('td');

          createTr.appendChild(td);
        }

        tbody.appendChild(createTr);
      }
    }

    if (btn.classList.contains('append-column')) {
      const maxCols = Math.max(...rows.map((r) => r.children.length));

      if (maxCols < 10) {
        rows.forEach((row) => {
          const td = document.createElement('td');

          row.appendChild(td);
        });
      }
    }

    if (btn.classList.contains('remove-row')) {
      if (rows.length > 2) {
        const deleteTr = rows[rows.length - 1];

        if (deleteTr) {
          deleteTr.remove();
        }
      }
    }

    if (btn.classList.contains('remove-column')) {
      const maxCols = Math.max(...rows.map((r) => r.children.length));

      if (maxCols > 2) {
        rows.forEach((row) => {
          const deleteTd = row.lastElementChild;

          if (deleteTd) {
            deleteTd.remove();
          }
        });
      }
    }

    updateButtons();
  });
});

// первичная инициализация
updateButtons();
