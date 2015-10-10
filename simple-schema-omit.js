/**
 * @method SimpleSchema.prototype.omit
 * @param {[fields]} The list of fields to omit to instantiate the subschema
 * @returns {SimpleSchema} The subschema
 */
SimpleSchema.prototype.omit= function(/* arguments */) {
  var self = this;
  var args = _.toArray(arguments);
  args.unshift(self._schema);

  var newSchema = _.omit.apply(null, args);
  return new SimpleSchema(newSchema);
};
