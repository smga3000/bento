---
title: socket
slug: socket
type: input
status: stable
categories: ["Network"]
---

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the corresponding source file under internal/impl/<provider>.
-->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Connects to a tcp or unix socket and consumes a continuous stream of messages.

```yml
# Config fields, showing default values
input:
  label: ""
  socket:
    network: "" # No default (required)
    address: /tmp/bento.sock # No default (required)
    auto_replay_nacks: true
    scanner:
      lines: {}
```

## Fields

### `network`

A network type to assume (unix|tcp).


Type: `string`  
Options: `unix`, `tcp`.

### `address`

The address to connect to.


Type: `string`  

```yml
# Examples

address: /tmp/bento.sock

address: 127.0.0.1:6000
```

### `auto_replay_nacks`

Whether messages that are rejected (nacked) at the output level should be automatically replayed indefinitely, eventually resulting in back pressure if the cause of the rejections is persistent. If set to `false` these messages will instead be deleted. Disabling auto replays can greatly improve memory efficiency of high throughput streams as the original shape of the data can be discarded immediately upon consumption and mutation.


Type: `bool`  
Default: `true`  

### `scanner`

The [scanner](/docs/components/scanners/about) by which the stream of bytes consumed will be broken out into individual messages. Scanners are useful for processing large sources of data without holding the entirety of it within memory. For example, the `csv` scanner allows you to process individual CSV rows without loading the entire CSV file in memory at once.


Type: `scanner`  
Default: `{"lines":{}}`  
Requires version 4.25.0 or newer  


