# Novu SDK exists test

import pytest
from novu_sdk import NovuSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = NovuSDK.test(None, None)
        assert testsdk is not None
