# Novu SDK utility: make_context
require_relative '../core/context'
module NovuUtilities
  MakeContext = ->(ctxmap, basectx) {
    NovuContext.new(ctxmap, basectx)
  }
end
