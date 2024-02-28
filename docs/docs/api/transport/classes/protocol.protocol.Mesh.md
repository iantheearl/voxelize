---
id: "protocol.protocol.Mesh"
title: "Class: Mesh"
sidebar_label: "Mesh"
custom_edit_url: null
---

[protocol](../namespaces/protocol.md).[protocol](../namespaces/protocol.protocol.md).Mesh

Represents a Mesh.

## Implements

- [`IMesh`](../interfaces/protocol.protocol.IMesh.md)

## Constructors

### constructor

• **new Mesh**(`properties?`): [`Mesh`](protocol.protocol.Mesh.md)

Constructs a new Mesh.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `properties?` | [`IMesh`](../interfaces/protocol.protocol.IMesh.md) | Properties to set |

#### Returns

[`Mesh`](protocol.protocol.Mesh.md)

## Properties

### geometries

• **geometries**: [`IGeometry`](../interfaces/protocol.protocol.IGeometry.md)[]

Mesh geometries.

#### Implementation of

[IMesh](../interfaces/protocol.protocol.IMesh.md).[geometries](../interfaces/protocol.protocol.IMesh.md#geometries-4)

___

### level

• **level**: `number`

Mesh level.

#### Implementation of

[IMesh](../interfaces/protocol.protocol.IMesh.md).[level](../interfaces/protocol.protocol.IMesh.md#level-4)

## Methods

### create

▸ **create**(`properties?`): [`Mesh`](protocol.protocol.Mesh.md)

Creates a new Mesh instance using the specified properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `properties?` | [`IMesh`](../interfaces/protocol.protocol.IMesh.md) | Properties to set |

#### Returns

[`Mesh`](protocol.protocol.Mesh.md)

Mesh instance

___

### decode

▸ **decode**(`reader`, `length?`): [`Mesh`](protocol.protocol.Mesh.md)

Decodes a Mesh message from the specified reader or buffer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reader` | `Uint8Array` \| `Reader` | Reader or buffer to decode from |
| `length?` | `number` | Message length if known beforehand |

#### Returns

[`Mesh`](protocol.protocol.Mesh.md)

Mesh

**`Throws`**

If the payload is not a reader or valid buffer

**`Throws`**

If required fields are missing

___

### decodeDelimited

▸ **decodeDelimited**(`reader`): [`Mesh`](protocol.protocol.Mesh.md)

Decodes a Mesh message from the specified reader or buffer, length delimited.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reader` | `Uint8Array` \| `Reader` | Reader or buffer to decode from |

#### Returns

[`Mesh`](protocol.protocol.Mesh.md)

Mesh

**`Throws`**

If the payload is not a reader or valid buffer

**`Throws`**

If required fields are missing

___

### encode

▸ **encode**(`message`, `writer?`): `Writer`

Encodes the specified Mesh message. Does not implicitly [verify](protocol.protocol.Mesh.md#verify-4) messages.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | [`IMesh`](../interfaces/protocol.protocol.IMesh.md) | Mesh message or plain object to encode |
| `writer?` | `Writer` | Writer to encode to |

#### Returns

`Writer`

Writer

___

### encodeDelimited

▸ **encodeDelimited**(`message`, `writer?`): `Writer`

Encodes the specified Mesh message, length delimited. Does not implicitly [verify](protocol.protocol.Mesh.md#verify-4) messages.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | [`IMesh`](../interfaces/protocol.protocol.IMesh.md) | Mesh message or plain object to encode |
| `writer?` | `Writer` | Writer to encode to |

#### Returns

`Writer`

Writer

___

### fromObject

▸ **fromObject**(`object`): [`Mesh`](protocol.protocol.Mesh.md)

Creates a Mesh message from a plain object. Also converts values to their respective internal types.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `Object` | Plain object |

#### Returns

[`Mesh`](protocol.protocol.Mesh.md)

Mesh

___

### getTypeUrl

▸ **getTypeUrl**(`typeUrlPrefix?`): `string`

Gets the default type url for Mesh

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

Converts this Mesh to JSON.

#### Returns

`Object`

JSON object

___

### toObject

▸ **toObject**(`message`, `options?`): `Object`

Creates a plain object from a Mesh message. Also converts values to other types if specified.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | [`Mesh`](protocol.protocol.Mesh.md) | Mesh |
| `options?` | `IConversionOptions` | Conversion options |

#### Returns

`Object`

Plain object

___

### verify

▸ **verify**(`message`): `string`

Verifies a Mesh message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `Object` | Plain object to verify |

#### Returns

`string`

`null` if valid, otherwise the reason why it is not
