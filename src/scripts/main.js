'use strict';

const container = document.querySelector('.container');
const tbody = document.querySelector('tbody');
let rows = [...tbody.querySelectorAll('tr')];

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

container.addEventListener('click', e => {
  const newRow = tbody.children[0].cloneNode(true);

  if (e.target.tagName !== 'BUTTON') {
    return;
  }

  switch(e.target.className) {
    case 'append-row button':
      tbody.append(newRow);
      rows = [...tbody.querySelectorAll('tr')];
      break;
      
    case 'remove-row button':
      tbody.deleteRow(rows.length - 1);
      rows = [...tbody.querySelectorAll('tr')];
      break;
        
    case 'append-column button':
      rows.map(({ children }) => {
        const lastCell = children[children.length - 1];

        return lastCell.after(lastCell.cloneNode(true));
      });
      break;
          
    case 'remove-column button':
      rows.forEach(({ children }) => {
        const penultimateCell = children[children.length - 2];

        return penultimateCell.nextElementSibling.remove();
      });
      break;
      
      default: return;
    }
    
    if (rows.length !== 11) {
      appendRowBtn.disabled = false;
    } else {
      appendRowBtn.disabled = true;
    }
    
    if (rows.length === 2) {
      removeRowBtn.disabled = true;
    } else {
      removeRowBtn.disabled = false;
    }
    
    rows.forEach(cell => {
      const len = cell.children.length;
      if (len !== 11) {
        appendColumnBtn.disabled = false;
      } else {
        appendColumnBtn.disabled = true;
      }

      if (len === 2) {
        removeColumnBtn.disabled = true;
      } else {
        removeColumnBtn.disabled = false;
      }
    });

  });
        