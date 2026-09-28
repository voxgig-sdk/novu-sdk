<?php
declare(strict_types=1);

// Novu SDK utility: result_headers

class NovuResultHeaders
{
    public static function call(NovuContext $ctx): ?NovuResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
