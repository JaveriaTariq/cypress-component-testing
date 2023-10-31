import App from "./App";

describe("<App>", () => {
  it("mounts", () => {
    cy.mount(<App />);
  });

  it("contains the text 'Learn React'", () => {
    cy.mount(<App />);
    cy.contains("Learn React").should("exist");
  });
});
