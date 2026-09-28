-- Novu SDK exists test

local sdk = require("novu_sdk")

describe("NovuSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
