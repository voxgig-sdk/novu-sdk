# Novu SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

NovuUtility.registrar = ->(u) {
  u.clean = NovuUtilities::Clean
  u.done = NovuUtilities::Done
  u.make_error = NovuUtilities::MakeError
  u.feature_add = NovuUtilities::FeatureAdd
  u.feature_hook = NovuUtilities::FeatureHook
  u.feature_init = NovuUtilities::FeatureInit
  u.fetcher = NovuUtilities::Fetcher
  u.make_fetch_def = NovuUtilities::MakeFetchDef
  u.make_context = NovuUtilities::MakeContext
  u.make_options = NovuUtilities::MakeOptions
  u.make_request = NovuUtilities::MakeRequest
  u.make_response = NovuUtilities::MakeResponse
  u.make_result = NovuUtilities::MakeResult
  u.make_point = NovuUtilities::MakePoint
  u.make_spec = NovuUtilities::MakeSpec
  u.make_url = NovuUtilities::MakeUrl
  u.param = NovuUtilities::Param
  u.prepare_auth = NovuUtilities::PrepareAuth
  u.prepare_body = NovuUtilities::PrepareBody
  u.prepare_headers = NovuUtilities::PrepareHeaders
  u.prepare_method = NovuUtilities::PrepareMethod
  u.prepare_params = NovuUtilities::PrepareParams
  u.prepare_path = NovuUtilities::PreparePath
  u.prepare_query = NovuUtilities::PrepareQuery
  u.graphql_body = NovuUtilities::GraphqlBody
  u.graphql_errors = NovuUtilities::GraphqlErrors
  u.result_basic = NovuUtilities::ResultBasic
  u.result_body = NovuUtilities::ResultBody
  u.result_headers = NovuUtilities::ResultHeaders
  u.transform_request = NovuUtilities::TransformRequest
  u.transform_response = NovuUtilities::TransformResponse
}
