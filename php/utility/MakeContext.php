<?php
declare(strict_types=1);

// Novu SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class NovuMakeContext
{
    public static function call(array $ctxmap, ?NovuContext $basectx): NovuContext
    {
        return new NovuContext($ctxmap, $basectx);
    }
}
