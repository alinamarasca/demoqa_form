export const commonObject = {
  pageEl: {
    categoryCard: ".category-cards > .card",
    formsCard: "Form",
    menuItemForms:
      ":nth-child(2) > .element-list > .menu-list > #item-0 > .text",
    modalBody: ".modal-dialog",
    modalClose: "button#closeLargeModal"
  },

  formEl: {
    studentForm: "#userForm",

    name: "#userEmail-wrapper",
    nameSectionLabel: "#userName-label",
    firstNameLabel: "#userName-label",
    firstNameInput: "#firstName",
    lastNameLabel: "#lastName-label",
    lastNameInput: "#lastName",

    emailSection: "#userEmail-wrapper",
    emailLabel: "#userEmail-label",
    emailInput: "#userEmail",
    // whaaat genTer?
    genderSection: "#genterWrapper",
    genderSectionLabel: "#genterWrapper > .col-md-3 .col-sm-12",
    inlineRadio: ".custom-control-input",
    radioMale: "#genterWrapper > .col-md-9 > :nth-child(1)",
    radioMaleLabelFor: "#gender-radio-1",
    radioFemale: "#gender-radio-2",
    radioFemaleLabelFor: "#gender-radio-2",
    radioOther: "#gender-radio-3",
    radioOtherLabelFor: "#gender-radio-3",

    mobilePhoneSection: "#userNumber-wrapper",
    mobileSectionLabel: "#userNumber-label",
    mobilePhoneInput: "#userNumber",

    dobSection: "#dateOfBirth-wrapper",
    dobSectionLabel: "#dateOfBirth-label",
    dobInput: "#dateOfBirthInput",

    subjectsSection: "#subjectsWrapper",
    subjectsSectionLabel: "#subjectsWrapper > #subjects-label",
    subjectsContainer: "#subjectsContainer",
    subjectsInput: "#subjectsInput",

    hobbiesSection: "#hobbiesWrapper",
    // wtf subjects has subjects label id and this too!
    hobbiesSectionLabel: "#hobbiesWrapper > #subjects-label",
    checkSports: "#hobbies-checkbox-1",
    checkReading: "#reading-checkbox-2",
    checkMusic: "#music-checkbox-3",

    // pictureSection:
    pictureUploadLabelFor: "uploadPicture",
    pictureUploadInput: "#uploadPicture",

    currentAddressSection: "#currentAddress-wrapper",
    currentAddressSectionLabel: "#currentAddress-label",
    currentAddressInput: "#currentAddress",

    stateCitySection: "#stateCity-wrapper",
    stateCitySectionLabel: "#stateCity-label",
    stateInput: "#state",
    cityInput: "#city",

    submitButton: "#submit"
  },

  datePicker: {
    calendar: ".react-datepicker",
    monthSelect: ".react-datepicker__month-select",
    yearSelect: ".react-datepicker__year-select",
    month: ".react-datepicker__month",
    week: ".react-datepicker__week",
    day: ".react-datepicker__day"
  }
};
