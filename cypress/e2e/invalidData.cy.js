/// <reference types="cypress"/>
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

import { commonObject as c } from "../page_objects/commonObject";
import { invalidData as d } from "./invalidData";

describe("fill the form", () => {
  context("invalid data in required fields", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get(c.pageEl.categoryCard).contains(c.pageEl.formsCard).click();
      cy.get(c.pageEl.menuItemForms).contains("Practice Form").click();
    });
    d.firstName.forEach(input => {
      it(`first name, value: "${input}" `, () => {
        cy.get(c.formEl.firstNameInput).invoke("val", input);
        cy.get(c.formEl.studentForm).submit();
        cy.checkInputValidity(c.formEl.firstNameInput, false);
      });
    });
    d.lastName.forEach(input => {
      it(`last name, value: "${input}"`, () => {
        cy.get(c.formEl.firstNameInput).invoke("val", input);
        cy.get(c.formEl.studentForm).submit();
        cy.checkInputValidity(c.formEl.firstNameInput, false);
      });
    }),
      d.email.forEach(input => {
        it(`email, value: "${input}"`, () => {
          cy.log(input);
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
      d.phone.forEach(input => {
        it(`phone, value: "${input}"`, () => {
          cy.get(c.formEl.mobilePhoneInput).invoke("val", input);
          cy.get(c.formEl.studentForm).submit();
          cy.checkInputValidity(c.formEl.mobilePhoneInput, false);
        });
      }),
      it("phone trims input to 10 digits", () => {
        cy.get(c.formEl.mobilePhoneInput).focus().type("00001234567");
        cy.get(c.formEl.mobilePhoneInput).should("have.value", "0000123456");
      });

    d.address.forEach(input => {
      it(`address, value: "${input}"`, () => {
        cy.get(c.formEl.currentAddressInput).invoke("val", input);
        cy.get(c.formEl.studentForm).submit();
        cy.checkInputValidity(c.formEl.currentAddressInput, false);
      });
    });
  });
});
