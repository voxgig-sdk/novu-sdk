# Novu SDK utility: make_context

from novu_sdk.core.context import NovuContext


def make_context_util(ctxmap, basectx):
    return NovuContext(ctxmap, basectx)
