import "cypress-file-upload";

import { commonObject as c } from "../page_objects/commonObject";

Cypress.Commands.add("selectDateInDatePicker", (date = "5/6/1976") => {
  const dateAr = date.split("/");
  cy.get(c.datePicker.monthSelect).select(dateAr[1] - 1);
  cy.get(c.datePicker.yearSelect).select(dateAr[2]);
  cy.get(c.datePicker.day).contains(dateAr[0]).click();
});

Cypress.Commands.add("uploadFile", filename => {
  let filepath = `../fixtures/${filename}`;
  cy.get(c.formEl.pictureUploadInput).click();
  cy.get('input[type="file"]').attachFile(filepath, { subjectType: "input" });
});

Cypress.Commands.add("pullFixtureData", fixtureName => {
  cy.fixture(fixtureName).then(function (data) {
    this.data = data;
  });
});

Cypress.Commands.add("checkInputValidity", (element, bool) => {
  cy.get(element)
    .then($el => $el[0].checkValidity())
    .should(`be.${bool}`);
});
