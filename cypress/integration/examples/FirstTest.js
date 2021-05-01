describe('My First Test suite', function()
 {
    it('Verify title of the page - Positive', function() 
    {
     cy.visit('https://demo.nopcommerce.com/')
     cy.title().should('eq', 'nopCommerce demo store')
    })

    it('Verify title of the page - Negative', function() 
    {
     cy.visit('https://demo.nopcommerce.com/')
     cy.title().should('eq', 'nopCommerce store')
    })
  })