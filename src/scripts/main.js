'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const growthTableInit = () => {
    const container = document.querySelector('.container');

    if (container) {
      const tableBody = container.querySelector('.field tbody');
      const btns = container.querySelectorAll('.button');

      const getItems = () => [...tableBody.querySelectorAll('tr')];

      const getNewRow = () => {
        const tr = document.createElement('tr');
        const tdLength = tableBody
          .querySelectorAll('tr')[0]
          .querySelectorAll('td').length;

        for (let i = 0; i < tdLength; i++) {
          tr.append(document.createElement('td'));
        }

        return tr;
      };

      const renderItems = (wrapper, items) => {
        wrapper.innerHTML = '';
        items.forEach((item) => wrapper.append(item));
      };

      const appendRow = (items) => {
        const removeBtn = container.querySelector('.remove-row');
        const addBtn = container.querySelector('.append-row');
        const newRow = getNewRow();
        const newItems = [...items, newRow];

        renderItems(tableBody, newItems);

        items.length === 9 && (addBtn.disabled = true);
        removeBtn.removeAttribute('disabled');
      };

      const removeRow = (items) => {
        const removeBtn = container.querySelector('.remove-row');
        const addBtn = container.querySelector('.append-row');

        items.pop();
        renderItems(tableBody, items);

        items.length === 2 && (removeBtn.disabled = true);
        addBtn.removeAttribute('disabled');
      };

      const appendColumn = (items) => {
        const removeBtn = container.querySelector('.remove-column');
        const addBtn = container.querySelector('.append-column');

        items.forEach((item) => {
          const tdArr = [...item.querySelectorAll('td')];
          const td = document.createElement('td');

          item.append(td);

          tdArr.length === 9 && (addBtn.disabled = true);
          removeBtn.removeAttribute('disabled');
        });
      };

      const removeColumn = (items) => {
        const removeBtn = container.querySelector('.remove-column');
        const addBtn = container.querySelector('.append-column');

        items.forEach((item) => {
          const tdArr = [...item.querySelectorAll('td')];

          tdArr.pop();
          renderItems(item, tdArr);

          tdArr.length === 2 && (removeBtn.disabled = true);
          addBtn.removeAttribute('disabled');
        });
      };

      const toggleTable = (btn) => {
        const items = getItems();

        switch (true) {
          case btn.classList.contains('remove-row'):
            removeRow(items);
            break;
          case btn.classList.contains('append-column'):
            appendColumn(items);
            break;
          case btn.classList.contains('remove-column'):
            removeColumn(items);
            break;
          default:
            appendRow(items);
        }
      };

      btns.forEach((btn) => {
        btn.addEventListener('click', ({ target }) => toggleTable(target));
      });
    }
  };

  growthTableInit();
});
