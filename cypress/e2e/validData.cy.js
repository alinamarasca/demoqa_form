/// <reference types="cypress"/>
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

import { commonObject as c } from "../page_objects/commonObject";

describe("fill the form", () => {
  context("submit properly filled form", () => {
    before(() => {
      cy.fixture("validData").then(function (data) {
        this.d = data;
      });
      cy.visit("/");
      cy.get(c.pageEl.categoryCard).contains(c.pageEl.formsCard).click();
      cy.get(c.pageEl.menuItemForms).contains("Practice Form").click();
    });

    it("fills all the fields with valid data", function () {
      cy.get(c.formEl.firstNameInput)
        .type(this.d.firstName)
        .should("have.value", this.d.firstName);
      cy.get(c.formEl.lastNameInput)
        .type(this.d.lastName)
        .should("have.value", this.d.lastName);
      cy.get(c.formEl.emailInput).click().type(this.d.email);
      cy.get(c.formEl.genderSection).within(() => {
        cy.get("label").contains(this.d.gender).click();
      });
      cy.get(c.formEl.mobilePhoneInput).click().type(this.d.phone);
      cy.get(c.formEl.dobInput).click();
      cy.selectDateInDatePicker(this.d.dateOfBirth);
      this.d.subjects.forEach(subject => {
        cy.get(c.formEl.subjectsInput).click().type(`${subject}{Enter}`);
      });
      cy.get(c.formEl.hobbiesSection).within(() => {
        cy.get("label").contains(this.d.hobbies).click();
      });
      cy.uploadFile("smallFile.jpeg");
      cy.get(c.formEl.currentAddressInput).type(this.d.address);
      cy.get(c.formEl.stateInput).click().type(`${this.d.state}{Enter}`);
      cy.get(c.formEl.cityInput).click().type(`${this.d.city}{Enter}`);
      cy.get(c.formEl.studentForm).submit();
      cy.get(c.pageEl.modalBody);
      cy.get(c.pageEl.modalClose).click();
    });
  });
});
