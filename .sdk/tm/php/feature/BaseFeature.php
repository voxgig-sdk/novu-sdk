<?php
declare(strict_types=1);

// Novu SDK base feature

class NovuBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(NovuContext $ctx, array $options): void {}
    public function PostConstruct(NovuContext $ctx): void {}
    public function PostConstructEntity(NovuContext $ctx): void {}
    public function SetData(NovuContext $ctx): void {}
    public function GetData(NovuContext $ctx): void {}
    public function GetMatch(NovuContext $ctx): void {}
    public function SetMatch(NovuContext $ctx): void {}
    public function PrePoint(NovuContext $ctx): void {}
    public function PreSpec(NovuContext $ctx): void {}
    public function PreRequest(NovuContext $ctx): void {}
    public function PreResponse(NovuContext $ctx): void {}
    public function PreResult(NovuContext $ctx): void {}
    public function PreDone(NovuContext $ctx): void {}
    public function PreUnexpected(NovuContext $ctx): void {}
}
