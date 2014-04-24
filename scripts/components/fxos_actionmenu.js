Myapp.FxosActionmenuComponent = Ember.Component.extend({
  actions: {
    cancelAction: function(){
      this.hide();
    }
  },
  click: function(event) {
    this.sendAction('action', $(event.target).data('ember-action'));
  },
  show: function(){
  		this.$('form').show();
  },
  hide: function(){
  		this.$('form').hide();
  }
});