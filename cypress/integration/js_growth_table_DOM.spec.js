'use strict';

describe('Test', () => {
  beforeEach('Open site', () => {
    cy.visit('http://localhost:8080/');
  });

  it('table should have 4 rows', () => {
    cy.get('tbody > tr')
      .then(($tr) => {
        expect($tr, '4 rows').to.have.length(4);
      });
  });

  it('table should have 4 column', () => {
    cy.get('tbody :nth-child(1) :nth-child(n)')
      .then(($td) => {
        expect($td, '4 column').to.have.length(4);
      });
  });

  it('max 10 column', () => {
    for (let n = 0; n < 6; n++) {
      cy.get('.append-column').click();
    }

    cy.get('tbody > :nth-child(1) > :nth-child(n)')
      .then(($td) => {
        expect($td, '10 items').to.have.length(10);
      });
  });

  it('add column button should be disabled', () => {
    for (let n = 0; n < 6; n++) {
      cy.get('.append-column').click();
    }
    cy.get('.append-column').should('be.disabled');
  });

  it('remove one column', () => {
    cy.get('.remove-column').click();

    cy.get('tbody > :nth-child(1) > :nth-child(n)')
      .then(($td) => {
        expect($td, '3 items').to.have.length(3);
      });
  });

  it('max 10 row', () => {
    for (let n = 0; n < 6; n++) {
      cy.get('.append-row').click();
    }
    cy.get(':nth-child(7) > :nth-child(1)').should('exist');
  });

  it('add row button should be disabled', () => {
    for (let n = 0; n < 6; n++) {
      cy.get('.append-row').click();
    }
    cy.get('.append-row').should('be.disabled');
  });

  it('remove one row', () => {
    cy.get('.remove-row').click();

    cy.get('tbody > tr')
      .then(($tr) => {
        expect($tr, '3 items').to.have.length(3);
      });
  });

  it('min table', () => {
    cy.get('.remove-row').click().click();
    cy.get('.remove-column').click().click();

    cy.get('tbody > tr')
      .then(($tr) => {
        expect($tr, '2 items').to.have.length(2);
      });

    cy.get('tbody > :nth-child(1) > :nth-child(n)')
      .then(($td) => {
        expect($td, '2 items').to.have.length(2);
      });
  });

  it('remove row button should be disabled', () => {
    cy.get('.remove-row').click().click();
    cy.get('.remove-row').should('be.disabled');
  });

  it('remove column button should be disabled', () => {
    cy.get('.remove-column').click().click();
    cy.get('.remove-column').should('be.disabled');
  });
});
