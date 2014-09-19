Package.describe({
  summary: "Dynamic Physics Interactions for the Mobile Web. http://impulse.luster.io"
});

Package.on_use(function (api) {
  api.add_files('lib/impulse.js', 'client');
  api.add_files('export.js', 'client');
  api.export('Impulse');
});