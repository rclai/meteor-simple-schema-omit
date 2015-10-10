# SimpleSchema.prototype.omit

### What is this?

Allows you take a `SimpleSchema` object and get a new one with omitted fields.

### Why did I make this?

Because [this PR](https://github.com/aldeed/meteor-simple-schema/pull/339) hasn't been merged yet.

### What can you do with this?

```js
MySchema = new SimpleSchema({
  field1: {
    type: String
  },
  field2: {
    type: String
  }
});

NewPrunedSchema = MySchema.omit(['field1']);
```

The prototype method was modeled after its counter part, [pick](https://github.com/aldeed/meteor-simple-schema/blob/302388c2f2418267a8ef5be767b5d0595875ccb2/simple-schema.js#L658-L665).
