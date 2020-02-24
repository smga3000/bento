---
title: http_server
type: output
---

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the contents of:
     lib/output/http_server.go
-->


Sets up an HTTP server that will send messages over HTTP(S) GET requests. HTTP
2.0 is supported when using TLS, which is enabled when key and cert files are
specified.


import Tabs from '@theme/Tabs';

<Tabs defaultValue="common" values={[
  { label: 'Common', value: 'common', },
  { label: 'Advanced', value: 'advanced', },
]}>

import TabItem from '@theme/TabItem';

<TabItem value="common">

```yaml
# Common config fields, showing default values
output:
  http_server:
    address: ""
    path: /get
    stream_path: /get/stream
    ws_path: /get/ws
```

</TabItem>
<TabItem value="advanced">

```yaml
# All config fields, showing default values
output:
  http_server:
    address: ""
    path: /get
    stream_path: /get/stream
    ws_path: /get/ws
    timeout: 5s
    cert_file: ""
    key_file: ""
```

</TabItem>
</Tabs>

Sets up an HTTP server that will send messages over HTTP(S) GET requests. HTTP
You can leave the `address` config field blank in order to use the
default service wide server address, but this will ignore TLS options.

Three endpoints will be registered at the paths specified by the fields
`path`, `stream_path` and `ws_path`. Which allow you to consume a
single message batch, a continuous stream of line delimited messages, or a
websocket of messages for each request respectively.

When messages are batched the `path` endpoint encodes the batch
according to [RFC1341](https://www.w3.org/Protocols/rfc1341/7_2_Multipart.html).
This behaviour can be overridden by
[archiving your batches](/docs/configuration/batching#post-batch-processing).

## Fields

### `address`

An optional address to listen from. If left empty the service wide HTTP server is used.


Type: `string`  
Default: `""`  

### `path`

The path from which discrete messages can be consumed.


Type: `string`  
Default: `"/get"`  

### `stream_path`

The path from which a continuous stream of messages can be consumed.


Type: `string`  
Default: `"/get/stream"`  

### `ws_path`

The path from which websocket connections can be established.


Type: `string`  
Default: `"/get/ws"`  

### `timeout`

The maximum time to wait before a blocking, inactive connection is dropped (only applies to the `path` endpoint).


Type: `string`  
Default: `"5s"`  

### `cert_file`

An optional certificate file to use for TLS connections. Only applicable when an `address` is specified.


Type: `string`  
Default: `""`  

### `key_file`

An optional certificate key file to use for TLS connections. Only applicable when an `address` is specified.


Type: `string`  
Default: `""`  

