FxosUI.FxosConfirmComponent = Ember.Component.extend({
    actions: {
        confirmButton: function() {
            var event = new CustomEvent(this.get('confirmButtonEventName'));
            window.dispatchEvent(event);
        },
        cancelButton: function(){
            this.hide();
        }
    }
});