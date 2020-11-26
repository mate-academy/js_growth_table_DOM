'use strict';

Cypress.Commands.add('clickButton',
(selector, times) => {
  for (let n = 0; n < times; n++) {
    cy.get(selector).click( {force: true} );
  }
});

describe('Table', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('tbody > tr').as('rows');
    cy.get('tbody :nth-child(1) :nth-child(n)').as('columns');
  });

  it('should have 4 rows by default', () => {
    cy.get('@rows').should('have.length', 4);
  });

  it('should add 1 row by click', () => {
    cy.get('.append-row').click();
    cy.get('@rows').should('have.length', 5);
  });

  it('should have 4 columns by default', () => {
    cy.get('@columns').should('have.length', 4);
  });

  it('should add 1 column by click', () => {
    cy.get('.append-column').click();
    cy.get('@columns').should('have.length', 5);
  });

  it('should have max 10 columns', () => {
    // 4 columns by default and click 7 times to add 7 columns
    cy.clickButton('.append-column', 7);
    cy.get('@columns').should('have.length', 10)
  });

  it('add column button should be disabled after 10 column', () => {
    // 4 columns by default and click 6 times to add 6 columns
    cy.clickButton('.append-column', 6)
    cy.get('.append-column').should('be.disabled');
  });

  it('should remove one column', () => {
    cy.get('.remove-column').click();
    cy.get('@columns').should('have.length', 3)
  });

  it('should have max 10 rows', () => {
    // 4 columns by default and click 7 times to add 7 rows
    cy.clickButton('.append-row', 7)
    cy.get('@rows').should('have.length', 10)
  });

  it('add row button should be disabled after 10 rows', () => {
    // 4 columns by default and click 6 times to add 6 rows
    cy.clickButton('.append-row', 6);
    cy.get('.append-row').should('be.disabled');
  });

  it('should remove one row', () => {
    cy.get('.remove-row').click();
    cy.get('@rows').should('have.length', 3)
  });

  it('should have 2 columns and 2 rows minimum', () => {
    cy.get('.remove-row').click().click();
    cy.get('.remove-column').click().click();
    cy.get('@rows').should('have.length', 2)
    cy.get('@columns').should('have.length', 2)
  });

  it(`remove row button should be disabled
      when only 2 rows exist`, () => {
    cy.get('.remove-row').click().click();
    cy.get('.remove-row').should('be.disabled');
  });

  it(`remove column button should be disabled
      when only 2 columns exist`, () => {
    cy.get('.remove-column').click().click();
    cy.get('.remove-column').should('be.disabled');
  });
});
