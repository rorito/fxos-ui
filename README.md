fxos-ui
=========

Provides Ember Web Components of common FirefoxOS UI widgets for use in [RecRoom]. Built using FirefoxOS [Building Blocks] from Telefonica.


Version
----

0.0.1


Installation
--------------
fxos-ui is a Bower dependency of the RecRoom yeoman generator, so you'll get access to the components when you create a new RecRoom project
```sh
npm install -g recroom
recroom new app_name
```

License
----

MPL v2.0

Widgets
-------------
## Action Menu
An action menu presents a list of actions, related to the app's content, from which the user may make a selection

#### Characteristics
* Opened from buttons within app content; these buttons are often inside toolbars (for example, the Browser app's "Share" button).
* Action menus contain one or more items.
* These menus expand in height to accomodate their items, to a maximum of the screen's height. Once that maximum height is reached, the content becomes scrollable vertically. Generally, the best practice is to try to include no more than five items plus a menu title.
* The title string is optional.
* The menu is closed by one of:
 * Selecting one of the actions.
 * Tapping the "Cancel" button.

![actionmenu image](examples/images/actionmenu.png)

####Example Usage
```sh
{{fxos-actionmenu title=title actionMenuButtonMapping=actionMenuButtonMapping action="fxosActionMenuActions"}}
```

Attributes
* title - The title that appears at the top of the action menu
* actionMenuButtonMapping - a map of button names to callback methods
* action - the name of the action in your controller. The Action Menu calls sendAction to send button clicks back to the controller for your current app context


#### Example Controller
```sh
Myapp.TestactionmenuController = Ember.ObjectController.extend({
	title: "This is the title",
	actionMenuButtonMapping: [
		{
			"buttonName": "Button 1", 
			"buttonAction": function(){
                alert("Button 1 click");
            }
		},
		{
			"buttonName": "Button 2",
            "disabled": true,
			"buttonAction": function(){
                alert("Button 2 click");
            }
		}
	],
	actions: {
    	fxosActionMenuActions: function(data) {
            this.actionMenuButtonMapping[data-1].buttonAction();
    	}
  	}
});
```

## Buttons
Buttons perform an action when tapped by the user. Firefox OS has a wide variety of button styles to accommodate different uses and contexts.

#### Characteristics
* Buttons have two components: a visual target and a hit target. The visual target is the button the user sees on the screen. The hit target is an invisible area that responds to the tap. To minimize tapping errors, the hit target is typically larger than the visual target.

* Buttons have two states: normal and pressed.
* Disabled buttons are buttons that do not respond to a tap. Disabled buttons are dimmed.

#### Default

Default buttons are used when there are only a few actions and a list isn't needed. A primary action button uses a special highlight color to improve visibility and simplify the choice for the user. Buttons that have potentially negative consequences, such as deleting an item, are highlighted in red.    

![default buttons image](examples/images/defaultbuttons.png)

####Example Usage
```sh
{{fxos-button text="Default"}}
{{fxos-button text="Primary" cls="recommend"}}
{{fxos-button text="Danger" cls="danger"}}
```
Attributes
* cls - The cls attribute sets the CSS class of the button tag inside the web component


#### Disabled buttons

Disabled buttons do not respond to users' taps.

![disabled buttons image](examples/images/disabledbuttons.png)

####Example Usage
```sh
{{fxos-button text="Default" disabled="true"}}
{{fxos-button text="Recommend" disabled="true" cls="recommend"}}
{{fxos-button text="Danger" disabled="true" cls="danger"}}
{{fxos-button text="Default" disabled="true" }}
{{fxos-button text="Recommend" disabled="true"}}
{{fxos-button text="Danger" disabled="true"}}
```


TODO
* Action menu - switch to events instead of action wiring
* Button - dark style
* Button - list buttons

[recroom]:https://github.com/mozilla/recroom
[Building Blocks]:http://buildingfirefoxos.com/

    