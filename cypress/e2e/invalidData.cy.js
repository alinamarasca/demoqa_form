/// <reference types="cypress"/>
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

import { commonObject as c } from "../page_objects/commonObject";

describe("fill the form", () => {
  context("invalid data in required fields", () => {
    before(() => {
      cy.fixture("invalidData").then(function (data) {
        this.d = data;
      });
      cy.visit("/");
      cy.get(c.pageEl.categoryCard).contains(c.pageEl.formsCard).click();
      cy.get(c.pageEl.menuItemForms).contains("Practice Form").click();
    });

    it("first name", function () {
      this.d.firstName.forEach(input => {
        cy.get(c.formEl.firstNameInput).invoke("val", input);
        cy.get(c.formEl.studentForm).submit();
        cy.checkInputValidity(c.formEl.firstNameInput, false);
      });
    }),
      it("last name", function () {
        this.d.lastName.forEach(input => {
          cy.get(c.formEl.lastNameInput).invoke("val", input);
          cy.get(c.formEl.studentForm).submit();
          cy.checkInputValidity(c.formEl.lastNameInput, false);
        });
      }),
      it("email", function () {
        this.d.lastName.forEach(input => {
          cy.get(c.formEl.emailInput).invoke("val", input);
          cy.get(c.formEl.studentForm).submit();
          cy.checkInputValidity(c.formEl.emailInput, false);
        });
      }),
      it("gender not selected", function () {
        cy.get(c.formEl.studentForm).submit();
        cy.get(c.formEl.genderSection).within(() => {
          cy.checkInputValidity(c.formEl.inlineRadio, false);
        });
      }),
      it("phone", function () {
        this.d.phone.forEach(input => {
          cy.get(c.formEl.mobilePhoneInput).invoke("val", input);
          cy.get(c.formEl.studentForm).submit();
          cy.checkInputValidity(c.formEl.mobilePhoneInput, false);
        });
      }),
      it("address", function () {
        this.d.address.forEach(input => {
          cy.get(c.formEl.addressInput).invoke("val", input);
          cy.get(c.formEl.studentForm).submit();
          cy.checkInputValidity(c.formEl.addressInput, false);
        });
      });
  });
});
