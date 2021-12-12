/// <reference types="cypress" />

describe('cypress test', () => {
  it('works', () => {
    expect(true).to.be.true
  })

  it('checks null', () => {
    expect(null).to.be.null
  })

  it('checks string', () => {
    expect('hello').to.be.string('hello')
  })
})
