# touchMenu 

A work in progress, working on an extension to create a touch Menu which opens on longer clicks. 


### Initialize touchMenu (example)

```javascript
	
	$('#move').touchMenu({
		action: 'init', // default value
    fadeAway: 1000,// default value
    fadeAwayStart: 200,// default value
    startClick: 50,// default value
    openMenu: 600, // default value
    fullscreen: false // default value
	});
		    
```

### Actions

```javascript
           
   $('#move').touchMenu({action: 'escape'});    
          
```


Installation
------------

Install the script with bower or make your own files

### Embed

```html
<script type="text/javascript" src="vendor/touchMenu.js"></script>
```

### Bower

```
bower install touchMenu --save
```