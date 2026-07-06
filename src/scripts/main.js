'use strict';

// write code here
const button = document.querySelectorAll('.button');
const table = document.querySelector('.field');

button.forEach((btn) => {
  btn.addEventListener('click', () => {
    const addRowBtn = document.querySelector('.append-row'); 
    const removeRowBtn = document.querySelector('.remove-row');
    const addColumnBtn = document.querySelector('.append-column');
    const removeColumnBtn = document.querySelector('.remove-column');

    const action = btn.classList;
    let actionName = '';

    switch (true) {
      case action.contains('append-row'):
        actionName = 'append-row';
        break;
      case action.contains('remove-row'):
        actionName = 'remove-row';
        break;
      case action.contains('append-column'):
        actionName = 'append-column';
        break;
      case action.contains('remove-column'):
        actionName = 'remove-column';
        break;
    }

    if (actionName === 'append-row') {
  const rowCount = table.rows.length;

  if (rowCount >= 10) {
    if (addRowBtn) addRowBtn.disabled = true;
        return;
      }

      const newRow = document.createElement('tr');
      const columnCount = table.rows[0]?.cells.length || 0;

      for (let i = 0; i < columnCount; i++) {
        const newCell = document.createElement('td');
        newRow.appendChild(newCell);
      }

      const targetContainer = table.tBodies[0] || table;
      targetContainer.appendChild(newRow);

      const updatedRowCount = table.rows.length;

      if (updatedRowCount >= 10 && addRowBtn) {
        addRowBtn.disabled = true;
      }
      
      if (updatedRowCount > 2 && removeRowBtn) {
        removeRowBtn.disabled = false;
      }
    }

    if (actionName === 'remove-row') {
      const rowCount = table.rows.length;

      if (rowCount > 2) {
        table.deleteRow(rowCount - 1);
        
        const updatedRowCount = table.rows.length;
        if (updatedRowCount <= 2 && removeRowBtn) {
          removeRowBtn.disabled = true;
        }
        if (updatedRowCount < 10 && addRowBtn) {
          addRowBtn.disabled = false;
        }
      }
    }

    if (actionName === 'append-column') {
      const columnCount = table.rows[0].cells.length;
      
      if (columnCount < 10) {
        for (let i = 0; i < table.rows.length; i++) {
          const newCell = document.createElement('td');

          table.rows[i].appendChild(newCell);
        }
      }
      
      if (columnCount + 1 >= 10 && addColumnBtn) {
        addColumnBtn.disabled = true;
      }
      
      if (columnCount + 1 > 2 && removeColumnBtn) {
        removeColumnBtn.disabled = false;
      }
    }

    if (actionName === 'remove-column') {
      const columnCount = table.rows[0].cells.length;

      if (columnCount > 2) {
        for (let i = 0; i < table.rows.length; i++) {
          table.rows[i].deleteCell(columnCount - 1);
        }

        if(columnCount - 1 <= 2 && removeColumnBtn) {
          removeColumnBtn.disabled = true;
        }
        if (columnCount - 1 < 10 && addColumnBtn) {
          addColumnBtn.disabled = false;
        }
      }
    }
  });
});
