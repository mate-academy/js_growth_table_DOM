'use strict';

// eslint-disable-next-line no-shadow
document.querySelector('.container').addEventListener('click', (event) => {
  const tbody = document.querySelector('tbody');
  const row = tbody.querySelectorAll('tr');
  let clickrow = row.length;
  let clickcolum = row[0].children.length;

  if (event.target.classList.contains('append-row')) {
    tbody.append(row[0].cloneNode(true));
    clickrow++;
  }

  if (event.target.classList.contains('remove-row')) {
    tbody.querySelector('tr').remove();
    clickrow--;
  }

  if (event.target.classList.contains('append-column')) {
    for (let i = 0; i < row.length; i++) {
      row[i].firstElementChild.insertAdjacentHTML('beforebegin', '<td></td>');
    }
    clickcolum++;
  }

  if (event.target.classList.contains('remove-column')) {
    for (let i = 0; i < row.length; i++) {
      row[i].firstElementChild.remove();
    }
    clickcolum--;
  }

  document.querySelector('.append-column').disabled = (clickcolum > 9);
  document.querySelector('.remove-column').disabled = (clickcolum < 3);

  document.querySelector('.remove-row').disabled = clickrow < 3;
  document.querySelector('.append-row').disabled = clickrow > 9;
});
