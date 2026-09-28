package entity

import (
	"github.com/voxgig-sdk/novu-sdk/go/core"

	vs "github.com/voxgig-sdk/novu-sdk/go/utility/struct"
)

type GenerateChatOAuthUrlResponseDtoEntity struct {
	name    string
	client  *core.NovuSDK
	utility *core.Utility
	entopts map[string]any
	data    map[string]any
	match   map[string]any
	entctx  *core.Context
	deleted bool
}

func NewGenerateChatOAuthUrlResponseDtoEntity(client *core.NovuSDK, entopts map[string]any) *GenerateChatOAuthUrlResponseDtoEntity {
	if entopts == nil {
		entopts = map[string]any{}
	}
	if _, ok := entopts["active"]; !ok {
		entopts["active"] = true
	} else if entopts["active"] == false {
		// keep false
	} else {
		entopts["active"] = true
	}

	e := &GenerateChatOAuthUrlResponseDtoEntity{
		name:    "generate_chat_o_auth_url_response_dto",
		client:  client,
		utility: client.GetUtility(),
		entopts: entopts,
		data:    map[string]any{},
		match:   map[string]any{},
	}

	e.entctx = e.utility.MakeContext(map[string]any{
		"entity":  e,
		"entopts": entopts,
	}, client.GetRootCtx())

	e.utility.FeatureHook(e.entctx, "PostConstructEntity")

	return e
}

func (e *GenerateChatOAuthUrlResponseDtoEntity) GetName() string { return e.name }

func (e *GenerateChatOAuthUrlResponseDtoEntity) MarkDeleted() {
	e.deleted = true
}


// Deleted reports whether a successful Remove has resolved on this instance.
func (e *GenerateChatOAuthUrlResponseDtoEntity) Deleted() bool {
	return e.deleted
}


func (e *GenerateChatOAuthUrlResponseDtoEntity) Make() core.Entity {
	opts := map[string]any{}
	for k, v := range e.entopts {
		opts[k] = v
	}
	return NewGenerateChatOAuthUrlResponseDtoEntity(e.client, opts)
}

func (e *GenerateChatOAuthUrlResponseDtoEntity) Data(args ...any) any {
	if len(args) > 0 && args[0] != nil {
		e.data = core.ToMapAny(vs.Clone(args[0]))
		if e.data == nil {
			e.data = map[string]any{}
		}
		e.utility.FeatureHook(e.entctx, "SetData")
	}

	e.utility.FeatureHook(e.entctx, "GetData")
	out := vs.Clone(e.data)
	return out
}

func (e *GenerateChatOAuthUrlResponseDtoEntity) Match(args ...any) any {
	if len(args) > 0 && args[0] != nil {
		e.match = core.ToMapAny(vs.Clone(args[0]))
		if e.match == nil {
			e.match = map[string]any{}
		}
		e.utility.FeatureHook(e.entctx, "SetMatch")
	}

	e.utility.FeatureHook(e.entctx, "GetMatch")
	out := vs.Clone(e.match)
	return out
}

// DataTyped is the statically-typed accessor for this entity's data. With no
// argument it returns the current data as an GenerateChatOAuthUrlResponseDto; with an argument it
// sets the data and returns the stored value. It delegates to the untyped Data
// (identical runtime) and converts at the typed boundary.
func (e *GenerateChatOAuthUrlResponseDtoEntity) DataTyped(data ...GenerateChatOAuthUrlResponseDto) GenerateChatOAuthUrlResponseDto {
	if len(data) > 0 {
		return typedFrom[GenerateChatOAuthUrlResponseDto](e.Data(asMap(data[0])))
	}
	return typedFrom[GenerateChatOAuthUrlResponseDto](e.Data())
}

// MatchTyped mirrors DataTyped for the entity's match filter. The match is a
// partial of the entity, so it round-trips through GenerateChatOAuthUrlResponseDto (all fields
// optional at the wire level).
func (e *GenerateChatOAuthUrlResponseDtoEntity) MatchTyped(match ...GenerateChatOAuthUrlResponseDto) GenerateChatOAuthUrlResponseDto {
	if len(match) > 0 {
		return typedFrom[GenerateChatOAuthUrlResponseDto](e.Match(asMap(match[0])))
	}
	return typedFrom[GenerateChatOAuthUrlResponseDto](e.Match())
}

func (e *GenerateChatOAuthUrlResponseDtoEntity) Stream(action string, args map[string]any, callopts map[string]any) <-chan any {
	out := make(chan any)

	if callopts == nil {
		callopts = map[string]any{}
	}

	var signal <-chan struct{}
	switch s := callopts["signal"].(type) {
	case <-chan struct{}:
		signal = s
	case chan struct{}:
		signal = s
	}

	ctrl := map[string]any{}
	if c := core.ToMapAny(callopts["ctrl"]); c != nil {
		for k, v := range c {
			ctrl[k] = v
		}
	}

	ctxmap := map[string]any{
		"opname": action,
		"ctrl":   ctrl,
		"match":  e.match,
		"data":   e.data,
	}
	for k, v := range args {
		ctxmap[k] = v
	}

	utility := e.utility
	ctx := utility.MakeContext(ctxmap, e.entctx)
	ctx.Meta["stream"] = callopts

	// Outbound: expose the caller's payload so the request builder / transport
	// can stream it as the request body.
	if body := callopts["body"]; body != nil {
		ctx.Reqdata["body$"] = body
		ctx.Meta["stream_out"] = body
	}

	send := func(item any) bool {
		select {
		case <-signal:
			return false
		case out <- item:
			return true
		}
	}

	go func() {
		defer close(out)

		utility.FeatureHook(ctx, "PrePoint")
		point, err := utility.MakePoint(ctx)
		ctx.Out["point"] = point
		if err != nil {
			return
		}

		utility.FeatureHook(ctx, "PreSpec")
		spec, err := utility.MakeSpec(ctx)
		ctx.Out["spec"] = spec
		if err != nil {
			return
		}

		utility.FeatureHook(ctx, "PreRequest")
		req, err := utility.MakeRequest(ctx)
		ctx.Out["request"] = req
		if err != nil {
			return
		}

		utility.FeatureHook(ctx, "PreResponse")
		resp, err := utility.MakeResponse(ctx)
		ctx.Out["response"] = resp
		if err != nil {
			return
		}

		utility.FeatureHook(ctx, "PreResult")
		result, err := utility.MakeResult(ctx)
		ctx.Out["result"] = result
		if err != nil {
			return
		}

		utility.FeatureHook(ctx, "PreDone")

		// Inbound: prefer the streaming feature's incremental iterator; else
		// fall back to the materialised items so Stream always yields.
		if ctx.Result != nil && ctx.Result.Stream != nil {
			for item := range ctx.Result.Stream() {
				if !send(item) {
					return
				}
			}
			return
		}

		data, derr := utility.Done(ctx)
		if derr != nil {
			return
		}
		switch d := data.(type) {
		case []any:
			for _, item := range d {
				if !send(item) {
					return
				}
			}
		case nil:
			// nothing to yield
		default:
			send(d)
		}
	}()

	return out
}

func (e *GenerateChatOAuthUrlResponseDtoEntity) Load(_ map[string]any, _ map[string]any) (any, error) {
	return core.UnsupportedOp("load", e.name)
}


func (e *GenerateChatOAuthUrlResponseDtoEntity) List(_ map[string]any, _ map[string]any) (any, error) {
	return core.UnsupportedOp("list", e.name)
}



func (e *GenerateChatOAuthUrlResponseDtoEntity) Create(reqdata map[string]any, ctrl map[string]any) (any, error) {
	utility := e.utility
	ctx := utility.MakeContext(map[string]any{
		"opname":  "create",
		"ctrl":    ctrl,
		"match":   e.match,
		"data":    e.data,
		"reqdata": reqdata,
	}, e.entctx)

	return e.runOp(ctx, func() {
		if ctx.Result != nil {
			if ctx.Result.Resdata != nil {
				e.data = core.ToMapAny(vs.Clone(ctx.Result.Resdata))
				if e.data == nil {
					e.data = map[string]any{}
				}
			}
		}
	})
}

// CreateTyped is the statically-typed variant of Create: it takes an
// GenerateChatOAuthUrlResponseDtoCreateData and returns an GenerateChatOAuthUrlResponseDto. It delegates to the untyped
// Create (identical runtime) and converts at the typed boundary.
func (e *GenerateChatOAuthUrlResponseDtoEntity) CreateTyped(reqdata GenerateChatOAuthUrlResponseDtoCreateData, ctrl map[string]any) (GenerateChatOAuthUrlResponseDto, error) {
	res, err := e.Create(asMap(reqdata), ctrl)
	if err != nil {
		return GenerateChatOAuthUrlResponseDto{}, err
	}
	return typedFrom[GenerateChatOAuthUrlResponseDto](res), nil
}



func (e *GenerateChatOAuthUrlResponseDtoEntity) Update(_ map[string]any, _ map[string]any) (any, error) {
	return core.UnsupportedOp("update", e.name)
}


func (e *GenerateChatOAuthUrlResponseDtoEntity) Remove(_ map[string]any, _ map[string]any) (any, error) {
	return core.UnsupportedOp("remove", e.name)
}


func (e *GenerateChatOAuthUrlResponseDtoEntity) runOp(ctx *core.Context, postDone func()) (any, error) {
	utility := e.utility

	utility.FeatureHook(ctx, "PrePoint")
	point, err := utility.MakePoint(ctx)
	ctx.Out["point"] = point
	if err != nil {
		return utility.MakeError(ctx, err)
	}

	utility.FeatureHook(ctx, "PreSpec")
	spec, err := utility.MakeSpec(ctx)
	ctx.Out["spec"] = spec
	if err != nil {
		return utility.MakeError(ctx, err)
	}

	utility.FeatureHook(ctx, "PreRequest")
	resp, err := utility.MakeRequest(ctx)
	ctx.Out["request"] = resp
	if err != nil {
		return utility.MakeError(ctx, err)
	}

	utility.FeatureHook(ctx, "PreResponse")
	resp2, err := utility.MakeResponse(ctx)
	ctx.Out["response"] = resp2
	if err != nil {
		return utility.MakeError(ctx, err)
	}

	utility.FeatureHook(ctx, "PreResult")
	result, err := utility.MakeResult(ctx)
	ctx.Out["result"] = result
	if err != nil {
		return utility.MakeError(ctx, err)
	}

	utility.FeatureHook(ctx, "PreDone")
	postDone()

	out, doneErr := utility.Done(ctx)
	if doneErr != nil {
		return out, doneErr
	}

	opname := ""
	if ctx.Op != nil {
		opname = ctx.Op.Name
	}

	if ctx.Result != nil && ctx.Result.Ok && opname != "list" {
		if opname == "remove" {
			e.MarkDeleted()
		}
		return e, nil
	}

	return out, nil
}
