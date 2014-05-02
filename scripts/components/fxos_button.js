FxosUI.FxosButtonComponent = Ember.Component.extend({
    click: function() {
        this.sendAction('action');
    }
});