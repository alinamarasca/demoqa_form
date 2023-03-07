/// <reference types="cypress"/>
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

import { commonObject as c } from "../page_objects/commonObject";

describe("fill the form", () => {
  before(() => {
    cy.viewport(550, 750);

    cy.visit("/");
    cy.get(c.pageEl.categoryCard).contains(c.pageEl.formsCard).click();
    cy.get(c.pageEl.menuItemForms).contains("Practice Form").click();
  });

  context("submit untouched form", () => {
    it("shows errors on required fields", () => {
      cy.get(c.formEl.studentForm).should("not.have.class", "was-validated");
      cy.get(c.formEl.submitButton).contains("Submit").click();
      cy.get(c.formEl.studentForm).should("have.class", "was-validated");

      cy.get("input:required").each($el => {
        cy.get("input:required").each($el => {
          cy.checkInputValidity($el, false);
        });
      });
    });
  });

  context("fill and erase", () => {
    it("validated form shows errors on required fields", () => {
      cy.get(c.formEl.studentForm).should("not.have.class", "was-validated");
      cy.get(c.formEl.submitButton).contains("Submit").click();
      cy.get(c.formEl.studentForm).should("have.class", "was-validated");
      cy.get("input:required").each($el => {
        console.log($el);
        cy.checkInputValidity($el, false);
      });
    });
  });
});
