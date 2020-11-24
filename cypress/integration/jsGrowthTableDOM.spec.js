'use strict';

Cypress.Commands.add('multiClick',
(selector) => {
  for (let n = 0; n < 7; n++) {
    cy.get(selector).click( {force: true} );
  }
});

describe('Table', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('tbody > tr').as('rows');
    cy.get('tbody :nth-child(1) :nth-child(n)').as('columns');
    cy.get('.remove-row').click().as('rmRow');
    cy.get('.remove-column').click().as('rmColumn');
  });

  it('should have 4 rows by default', () => {
    cy.get('@rows').should('have.length', 4)
  });

  it('should have 4 columns by default', () => {
    cy.get('@columns').should('have.length', 4)
  });

  it.only('should have max 10 columns', () => {
    cy.multiClick('.append-column');
    cy.get('tbody > :nth-child(1) > :nth-child(n)')
      .should('have.length', 10)
  });

  it('add column button should be disabled after 10 column', () => {
    cy.multiClick('.append-column')
    cy.get('.append-column').should('be.disabled');
  });

  it('should remove one column', () => {
    cy.get('.remove-column').click();
    cy.get('@columns').should('have.length', 3)
  });

  it('should have max 10 rows', () => {
    cy.multiClick('.append-row')
    cy.get(':nth-child(7) > :nth-child(1)').should('exist');
  });

  it('add row button should be disabled after 10 rows', () => {
    cy.multiClick('.append-row');
    cy.get('.append-row').should('be.disabled');
  });

  it.only('should remove one row', () => {
    cy.get('@rmRow');
    cy.get('@rows').should('have.length', 3)
  });

  it.only('should have 2 columns and 2 rows minimum', () => {
    cy.get('@rmRow').click();
    cy.get('@rmColumn').click();
    cy.get('@rows').should('have.length', 2)
    cy.get('@columns').should('have.length', 2)
  });

  it.only('remove row button should be disabled', () => {
    cy.get('@rmRow').click();
    cy.get('.remove-row').should('be.disabled');
  });

  it('remove column button should be disabled', () => {
    cy.get('@rmColumn').click();
    cy.get('.remove-column').should('be.disabled');
  });
});
