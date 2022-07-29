/// <reference types="cypress" />


before(()  => {
    cy.visit("https://qa-interview-inventa.netlify.app/")
})


describe("Cadastrar um novo produto", () => {


    it("Cadastrar um produto do tipo chocolate", () => {
    
        cy.get(".name-input").type("chocolate")
        cy.get(":nth-child(7) > input").clear().type("10")
        cy.get("#terms").check()
        cy.get("#categorias").select("Unha")
        cy.get("button").click()

        cy.contains("#toggle","Produto cadastrado com sucesso!").should("be.visible")

})
})