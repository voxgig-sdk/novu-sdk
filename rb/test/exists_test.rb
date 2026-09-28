# Novu SDK exists test

require "minitest/autorun"
require_relative "../Novu_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = NovuSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
