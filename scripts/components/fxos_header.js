FxosUI.FxosHeaderComponent = Ember.Component.extend({
    actions: {
        editButton: function(){
            var event = new CustomEvent(this.get('editEventName'));
            window.dispatchEvent(event);
            console.log("editButton");
        },
        addButton: function(){
            var event = new CustomEvent(this.get('addEventName'));
            window.dispatchEvent(event);
            console.log("addButton");
        },
        closeButton: function(){
            var event = new CustomEvent(this.get('closeEventName'));
            window.dispatchEvent(event);
            console.log("closeButton");
        },
        doneButton: function(){
            var event = new CustomEvent(this.get('doneEventName'));
            window.dispatchEvent(event);
            console.log("doneButton");
        }
    }
});