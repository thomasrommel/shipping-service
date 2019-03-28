var productService = require('../src/services/product-service')

describe('Product service', function () {

  it('Should call http endpoint', async function () {
    let weight = await productService.getProductWeight('13')
    expect(weight).toBe(15.5)
  })
})