---
id: "protocol.protocol.Entity"
title: "Class: Entity"
sidebar_label: "Entity"
custom_edit_url: null
---

[protocol](../namespaces/protocol.md).[protocol](../namespaces/protocol.protocol.md).Entity

Represents an Entity.

## Implements

- [`IEntity`](../interfaces/protocol.protocol.IEntity.md)

## Constructors

### constructor

• **new Entity**(`properties?`): [`Entity`](protocol.protocol.Entity.md)

Constructs a new Entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `properties?` | [`IEntity`](../interfaces/protocol.protocol.IEntity.md) | Properties to set |

#### Returns

[`Entity`](protocol.protocol.Entity.md)

## Properties

### id

• **id**: `string`

Entity id.

#### Implementation of

[IEntity](../interfaces/protocol.protocol.IEntity.md).[id](../interfaces/protocol.protocol.IEntity.md#id-4)

___

### metadata

• **metadata**: `string`

Entity metadata.

#### Implementation of

[IEntity](../interfaces/protocol.protocol.IEntity.md).[metadata](../interfaces/protocol.protocol.IEntity.md#metadata-4)

___

### operation

• **operation**: [`Operation`](../enums/protocol.protocol.Entity-1.Operation.md)

Entity operation.

#### Implementation of

[IEntity](../interfaces/protocol.protocol.IEntity.md).[operation](../interfaces/protocol.protocol.IEntity.md#operation-4)

___

### type

• **type**: `string`

Entity type.

#### Implementation of

[IEntity](../interfaces/protocol.protocol.IEntity.md).[type](../interfaces/protocol.protocol.IEntity.md#type-4)

## Methods

### create

▸ **create**(`properties?`): [`Entity`](protocol.protocol.Entity.md)

Creates a new Entity instance using the specified properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `properties?` | [`IEntity`](../interfaces/protocol.protocol.IEntity.md) | Properties to set |

#### Returns

[`Entity`](protocol.protocol.Entity.md)

Entity instance

___

### decode

▸ **decode**(`reader`, `length?`): [`Entity`](protocol.protocol.Entity.md)

Decodes an Entity message from the specified reader or buffer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reader` | `Uint8Array` \| `Reader` | Reader or buffer to decode from |
| `length?` | `number` | Message length if known beforehand |

#### Returns

[`Entity`](protocol.protocol.Entity.md)

Entity

**`Throws`**

If the payload is not a reader or valid buffer

**`Throws`**

If required fields are missing

___

### decodeDelimited

▸ **decodeDelimited**(`reader`): [`Entity`](protocol.protocol.Entity.md)

Decodes an Entity message from the specified reader or buffer, length delimited.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reader` | `Uint8Array` \| `Reader` | Reader or buffer to decode from |

#### Returns

[`Entity`](protocol.protocol.Entity.md)

Entity

**`Throws`**

If the payload is not a reader or valid buffer

**`Throws`**

If required fields are missing

___

### encode

▸ **encode**(`message`, `writer?`): `Writer`

Encodes the specified Entity message. Does not implicitly [verify](protocol.protocol.Entity.md#verify-4) messages.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | [`IEntity`](../interfaces/protocol.protocol.IEntity.md) | Entity message or plain object to encode |
| `writer?` | `Writer` | Writer to encode to |

#### Returns

`Writer`

Writer

___

### encodeDelimited

▸ **encodeDelimited**(`message`, `writer?`): `Writer`

Encodes the specified Entity message, length delimited. Does not implicitly [verify](protocol.protocol.Entity.md#verify-4) messages.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | [`IEntity`](../interfaces/protocol.protocol.IEntity.md) | Entity message or plain object to encode |
| `writer?` | `Writer` | Writer to encode to |

#### Returns

`Writer`

Writer

___

### fromObject

▸ **fromObject**(`object`): [`Entity`](protocol.protocol.Entity.md)

Creates an Entity message from a plain object. Also converts values to their respective internal types.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `Object` | Plain object |

#### Returns

[`Entity`](protocol.protocol.Entity.md)

Entity

___

### getTypeUrl

▸ **getTypeUrl**(`typeUrlPrefix?`): `string`

Gets the default type url for Entity

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `typeUrlPrefix?` | `string` | your custom typeUrlPrefix(default "type.googleapis.com") |

#### Returns

`string`

The default type url

___

### toJSON

▸ **toJSON**(): `Object`

Converts this Entity to JSON.

#### Returns

`Object`

JSON object

___

### toObject

▸ **toObject**(`message`, `options?`): `Object`

Creates a plain object from an Entity message. Also converts values to other types if specified.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | [`Entity`](protocol.protocol.Entity.md) | Entity |
| `options?` | `IConversionOptions` | Conversion options |

#### Returns

`Object`

Plain object

___

### verify

▸ **verify**(`message`): `string`

Verifies an Entity message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `Object` | Plain object to verify |

#### Returns

`string`

`null` if valid, otherwise the reason why it is not
