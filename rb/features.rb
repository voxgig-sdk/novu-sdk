# Novu SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/debug_feature'
require_relative 'feature/idempotency_feature'
require_relative 'feature/metrics_feature'
require_relative 'feature/paging_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module NovuFeatures
  def self.make_feature(name)
    case name
    when "base"
      NovuBaseFeature.new
    when "debug"
      NovuDebugFeature.new
    when "idempotency"
      NovuIdempotencyFeature.new
    when "metrics"
      NovuMetricsFeature.new
    when "paging"
      NovuPagingFeature.new
    when "ratelimit"
      NovuRatelimitFeature.new
    when "retry"
      NovuRetryFeature.new
    when "test"
      NovuTestFeature.new
    when "timeout"
      NovuTimeoutFeature.new
    else
      NovuBaseFeature.new
    end
  end
end
