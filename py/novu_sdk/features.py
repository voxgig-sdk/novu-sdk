# Novu SDK feature factory

from novu_sdk.feature.base_feature import NovuBaseFeature
from novu_sdk.feature.debug_feature import NovuDebugFeature
from novu_sdk.feature.idempotency_feature import NovuIdempotencyFeature
from novu_sdk.feature.metrics_feature import NovuMetricsFeature
from novu_sdk.feature.paging_feature import NovuPagingFeature
from novu_sdk.feature.ratelimit_feature import NovuRatelimitFeature
from novu_sdk.feature.retry_feature import NovuRetryFeature
from novu_sdk.feature.test_feature import NovuTestFeature
from novu_sdk.feature.timeout_feature import NovuTimeoutFeature


_FEATURES = {
    "base": lambda: NovuBaseFeature(),
    "debug": lambda: NovuDebugFeature(),
    "idempotency": lambda: NovuIdempotencyFeature(),
    "metrics": lambda: NovuMetricsFeature(),
    "paging": lambda: NovuPagingFeature(),
    "ratelimit": lambda: NovuRatelimitFeature(),
    "retry": lambda: NovuRetryFeature(),
    "test": lambda: NovuTestFeature(),
    "timeout": lambda: NovuTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
