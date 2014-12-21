# Eventify
Simple upcoming events javascript app. More features will be added soon.

demo: http://dellax.github.io/eventify/
## Requirements
they are all included:

* [jQuery](http://jquery.com)
* [moment.js](http://momentjs.com/)
* [Font Awesome](http://fortawesome.github.io/Font-Awesome/)


## How to use?
Include these js and css files:
```
<script src="js/jquery-2.1.1.min.js"></script>
<script src="js/moment.js"></script>
<script src="js/eventify.js"></script>
```
Add this in end of your HTML code:
```
<script type="text/javascript">
  $( "#ei-events" ).eventify({
      locale: "en"
  });
</script>
```
HTML code with events:
```
<div id="ei-events">
	<div class="ei-event" data-start="2014-12-24 17:30" data-end="2014-12-24 08:30" data-loc="London">
		<div class="ei-name">Club opening</div>
		<div class="ei-description">Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
	</div>
	<div class="ei-event" data-start="2013-12-26 16:30" data-end="2014-12-29 19:30" data-loc="Paris">
		<div class="ei-name">IT conf</div>
		<div class="ei-description">Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
	</div>
	<div class="ei-event" data-start="2014-12-20 16:30" data-end="2014-12-26 11:30" data-loc="New York">
		<div class="ei-name">Meteor.js meeting</div>
		<div class="ei-description">Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
	</div>
	<div class="ei-event" data-start="2014-12-24 16:30" data-end="2014-12-24 17:30" data-loc="Sidney">
		<div class="ei-name">Christmas party</div>
		<div class="ei-description">Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
	</div>
</div>
```
## Settings
theme: "dark" // dark, elegant

locale: "en" // default en

## To do
+ show all events
+ pagination and max events per page option
+ show event in lightbox on click
+ responsive - dotdotdot.frebsite.nl
+ css improvements
