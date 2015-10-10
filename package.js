Package.describe({
  name: 'lai:simple-schema-omit',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Adds omit support for Simple Schema',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/rclai/meteor-simple-schema-omit.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('aldeed:simple-schema@1.3.3');
  api.addFiles('simple-schema-omit.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('lai:simple-schema-omit');
  api.addFiles('simple-schema-omit-tests.js');
});
