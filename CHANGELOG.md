# Changelog

## 0.1.0-alpha.1 (2025-05-24)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/llrightll/antire-netsuite/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **client:** add withOptions helper ([c2b4e5c](https://github.com/llrightll/antire-netsuite/commit/c2b4e5c82f0ce8ee99aed6cb30feea6d56999a50))
* **mcp:** support dynamically discovering and invoking tools for APIs with many endpoints ([2a480b1](https://github.com/llrightll/antire-netsuite/commit/2a480b17b4656704730f9147516256acfda62f0c))
* more gracefully handle $refs and work around schema limitations ([e8d3645](https://github.com/llrightll/antire-netsuite/commit/e8d3645845bc18ff5817466cada5224668170822))


### Bug Fixes

* **client:** always overwrite when merging headers ([107116e](https://github.com/llrightll/antire-netsuite/commit/107116e2e451481d6f1c20d8645fac0e6538982a))
* **mcp:** explicitly include zod and zod-to-json-schema in package.json ([2137e8e](https://github.com/llrightll/antire-netsuite/commit/2137e8e9d934f3cc0f54efea3a75d0bf50f7d0e3))
* **mcp:** fix cursor schema transformation issue with recursive references ([e92602f](https://github.com/llrightll/antire-netsuite/commit/e92602fda4d6e327b1ac9a666141edaa4f16d59f))
* **mcp:** remove ajv dependency so MCP servers are more compatible with Cloudflare Workers ([ceb2826](https://github.com/llrightll/antire-netsuite/commit/ceb2826f03f111649c73b6ea2e5c8ba748046098))


### Chores

* **build:** automatically build subpackages if present ([3f5ae21](https://github.com/llrightll/antire-netsuite/commit/3f5ae21fa4cfe038e1b7c0837bbede3fd120ab94))
* **ci:** add timeout thresholds for CI jobs ([882cfb9](https://github.com/llrightll/antire-netsuite/commit/882cfb9bcdcc150b347d1a4a343cf5a2a79f4a2f))
* **ci:** only use depot for staging repos ([df49b97](https://github.com/llrightll/antire-netsuite/commit/df49b97e357433b853276b716524b48bf0de0c08))
* **client:** drop support for EOL node versions ([33f7035](https://github.com/llrightll/antire-netsuite/commit/33f70357a8f87950afdaac11dbbb4e52451b779e))
* **client:** minor internal fixes ([e3d17d0](https://github.com/llrightll/antire-netsuite/commit/e3d17d0b5b1d943a85f733449ca9b5f91c5b3756))
* configure new SDK language ([364982b](https://github.com/llrightll/antire-netsuite/commit/364982b0eb46a9e980130c00d807291c013dd93c))
* **docs:** grammar improvements ([f063ecc](https://github.com/llrightll/antire-netsuite/commit/f063ecc8d4113f51938a44602fbc7b6219457e72))
* go live ([c02e257](https://github.com/llrightll/antire-netsuite/commit/c02e25726f4ebcb75b77caaca08426682e19a686))
* **internal:** codegen related update ([d180261](https://github.com/llrightll/antire-netsuite/commit/d180261880c1066d80603bcb363f20ee85810d3b))
* **internal:** codegen related update ([8d96099](https://github.com/llrightll/antire-netsuite/commit/8d96099a769fdb55e3d09e88fc9f74ebf4c601d9))
* **internal:** codegen related update ([d454753](https://github.com/llrightll/antire-netsuite/commit/d45475301a19a294e8ca004c05b1effdf437e787))
* **internal:** codegen related update ([913dac0](https://github.com/llrightll/antire-netsuite/commit/913dac0f5a7fcc623ef452860c30ec2517892784))
* **internal:** refactor utils ([dd53ecc](https://github.com/llrightll/antire-netsuite/commit/dd53ecc9e8a96a124731279a51f961ccbd50c2be))
* **internal:** share typescript helpers ([ca4d8c1](https://github.com/llrightll/antire-netsuite/commit/ca4d8c1a95083eba3a2ccd171fbff1439360e469))
* **package:** remove engines ([c106c8a](https://github.com/llrightll/antire-netsuite/commit/c106c8a5df6fd0f3b089894417a9b17fa58a27b7))
* **perf:** faster base64 decoding ([0aa54c0](https://github.com/llrightll/antire-netsuite/commit/0aa54c0b01a5ab286f3aeb79e56ac62704bef5eb))
* **tests:** use node 22 for CI tests ([2916dc0](https://github.com/llrightll/antire-netsuite/commit/2916dc00b5b18315634095dcc1521b5f47be40c6))


### Documentation

* **readme:** fix typo ([217a0bc](https://github.com/llrightll/antire-netsuite/commit/217a0bca1174c215f7197a3715e08dfba38085f2))
