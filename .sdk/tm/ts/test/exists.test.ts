
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { NovuSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = NovuSDK.test()
    equal(testsdk instanceof NovuSDK, true,
      'NovuSDK.test() must return a client synchronously')
  })

})
