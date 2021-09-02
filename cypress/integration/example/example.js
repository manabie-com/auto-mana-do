import { Given } from "cypress-cucumber-preprocessor/steps";

const url = "http://localhost:3000";

Given("I open the TODO app", () => {
  cy.visit(url);
});
