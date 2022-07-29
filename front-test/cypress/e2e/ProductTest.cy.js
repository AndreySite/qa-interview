/// <reference types="cypress" />

import { HomePage } from "../support/pages/HomePage/HomePage";
import { SearchPage } from "../support/pages/SearchPage/SearchPage";

before(() => {
  cy.visit("https://inventa.shop/promocoes-1");
})

describe("Search for test products", () => {

  it("Will search for shampoo transparente product and we expect to get just one product with this name", () => {
    // cy.visit("https://inventa.shop/promocoes-1");

    cy.get("#modal-closer").click();
    // click(get(.search-bar-button)); 
    cy.get(".search-bar-button")

    cy.get("[placeholder='digitar produto']")
      .first()
      .type("Shampoo transparente")
      .type("{enter}")


    cy.get("").contains("Ver preço");

    cy.get("").contains("Shampoo transparente")
    expect("have.size", 2);
  
    // cy.log(si

    cy.visit("https://inventa.shop/collections/novidades")
     // cy.wait(5000)


    // cy.get(".spf-product-card__title").foreach(product => {
    //   expect(products).to.not.have.text('undefined')
    // })
    cy.get(".price").should('exist')
  });

  it("", () => {
    cy.vist("https://inventa.shop//promocoes-1");
    page = new HomePage();
    page.getSearchBarButton().click();
    page.getSearchBarInput().type("Shampoo transparente{enter}");

    cy.url().should('contain', '?q=Shampoo transparente')
    page = new SearchPage();
    page.getSeePriceLabel()
    page.verifyIfProductDoesNotExists("Shampoo claro e transparente");
    cy.get(".price").should('exist')
  });
});
