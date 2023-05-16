// import { Static, Type } from '@sinclair/typebox';

// export const TestdataSchema = Type.Object({
//   requiredString: Type.String(),
//   string: Type.Optional(Type.String({ minLength: 3 })),
//   number: Type.Optional(Type.Number({ minimum: 42 })),
//   boolean: Type.Optional(Type.Boolean()),
//   email: Type.Optional(Type.String(/*{ format: 'email' }*/)),
//   nested: Type.Optional(Type.Object({
//     nestedText: Type.String(),
//     nestedNumber: Type.Number({ minimum: 50 }),
//   })),
//   list: Type.Optional(Type.Array(
//     Type.Object({
//       itemText: Type.String(),
//       itemNumber: Type.Number({ minimum: 50 }),
//     })
//   )),
// });

export const TestdataSchema = {
  type: 'object',
  properties: {
    requiredString: { type: 'string' },
    string: { type: 'string', minLength: 3 },
    number: { type: 'number', minimum: 42 },
    boolean: { type: 'boolean' },
    email: { type: 'string'/* , format: 'email'*/ },
    nested: {
      type: 'object',
      properties: {
        nestedText: { type: 'string' },
        nestedNumber: { type: 'number', minimum: 50 },
      },
    },
    list: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          itemText: { type: 'string' },
          itemNumber: { type: 'number', minimum: 50 },
        }
      }
    },
  },
  required: ['requiredString'],
};


// export type Testdata = Static<typeof TestdataSchema>;

export interface Testdata {
  requiredString: string;
  string?: string;
  number?: number;
  boolean?: boolean;
  email?: string;
  nested?: {
    nestedText: string;
    nestedNumber: number;
  },
  list: Array<{
    itemText: string;
    itemNumber: number;
  }>,
}

export const testdata: Testdata = {
  requiredString: 'This is a text',
  string: 'String value',
  number: 123,
  boolean: true,
  email: 'm@il.com',
  nested: {
    nestedText: 'Nested text',
    nestedNumber: 42,
  },
  list: [
    {
      itemText: 'Item text',
      itemNumber: 1001,
    },
    {
      itemText: 'Item text 2',
      itemNumber: 1002,
    }
  ]
}
