package core

type NovuError struct {
	IsNovuError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewNovuError(code string, msg string, ctx *Context) *NovuError {
	return &NovuError{
		IsNovuError: true,
		Sdk:              "Novu",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *NovuError) Error() string {
	return e.Msg
}
