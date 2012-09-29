require.config({
  shim: {
    ember: {
        deps: ['jquery'],
        exports: 'Ember'
    },
    handlebars: 'Handlebars'
  },

paths: {
    ember: 'ember',
    handlebars: 'handlebars'
  }
});

require(['app'], function(App) {
    App.initialize();
});