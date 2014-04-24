Myapp.FxosButtonComponent = Ember.Component.extend({
    click: function() {
        this.sendAction('action');
    },
    tagName: 'a',
    attributeBindings: ['isEnabled::disabled'],
    isEnabled: true
});

//Handlebars.registerHelper('fxbutton', function(text, clazz, disabled) {
//    text = Handlebars.Utils.escapeExpression(text);
//    console.log("class1: " + clazz)
//    clazz  = Handlebars.Utils.escapeExpression(clazz);
//    console.log("class2: " + clazz)
//    disabled  = Handlebars.Utils.escapeExpression(disabled);
//
//
//    var result;
//    if (disabled === "disabled"){
//        result = '<button disabled="' + disabled +'" class="' + clazz + '">' + text + '</button>';
//    } else {
//        result = '<button class="' + clazz + '">' + text + '</button>';
//    }
//
//    return new Handlebars.SafeString(result);
//});