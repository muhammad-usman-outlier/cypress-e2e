Cypress.on('uncaught:exception', (_err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  