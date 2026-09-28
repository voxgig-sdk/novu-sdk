-- Novu SDK error

local NovuError = {}
NovuError.__index = NovuError


function NovuError.new(code, msg, ctx)
  local self = setmetatable({}, NovuError)
  self.is_sdk_error = true
  self.sdk = "Novu"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function NovuError:error()
  return self.msg
end


function NovuError:__tostring()
  return self.msg
end


return NovuError
