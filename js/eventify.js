//! eventify.js
//! version : 1.0.0
//! author: www.github.com/dellax/
//! license : MIT
//! https://github.com/dellax/eventify

function mainEventify(settings) {	
	moment.locale(settings.locale);
	if (settings.theme != "") {
		settings.theme = '-'+settings.theme;
	}

	function sortByStartTimes(a,b) {
		if(a.start < b.start) return -1;
		if(a.start > b.start) return 1;
		return 0;
	}

	var data = $(''+settings.div.selector+' .ei-event').map(function() {
		var $item = $(this);
		//	collect data from html
		return {
			start: moment($item.data('start')), 
   		end: moment($item.data('end')),
   		name: $item.find(".ei-name").text(),
   		description: $item.find(".ei-description").text(),
   		loc: $item.data('loc')
	  };
	}).get();

	// sort collected data by start date and time
	data.sort(sortByStartTimes);

	var currentDate = moment();

	// vymysliet komplexnejsie riesenie? aj pre all 
	function getEvents(data, year, month) {
		var monthName = moment(month+1,'MM').format('MMMM');
		var out = ['<div id="ei-events'+settings.theme+'">', '<h2>'+monthName+' '+year+'</h2>', '<div class="ei-events-container">'];

		for (i = 0; i < data.length; i++) {
			if (month === data[i].start.month() && year === data[i].start.year() && currentDate.date() <= data[i].start.date()) {
				out.push('<div class="ei-event">');
					out.push('<div class="ei-date">');
						out.push('<div class="ei-day">'+data[i].start.date()+'</div>');
						out.push('<div class="ei-day_end">- '+data[i].end.date()+'</div>');
						out.push('<div class="ei-month">'+data[i].start.format('MMM')+'</div>');
					out.push('</div>');
					out.push('<div class="ei-content">');
						out.push('<div class="ei-name">'+data[i].name+'</div>');
						out.push('<div class="ei-time"><i class="fa fa-clock-o"></i> '+data[i].start.format('HH:mm')+' - '+data[i].end.format('HH:mm')+' <i class="fa fa-location-arrow"></i> '+data[i].loc+'</div>');
						out.push('<div class="ei-description">'+data[i].description+'</div>');		
					out.push('</div>');	
				out.push('</div>');	
			}
		}

		out.push('</div>', '</div>');
		return out.join('\n');
	}

	// write initial data
	var onPageLoad = getEvents(data, currentDate.year(), currentDate.month());
	
	$("div"+settings.div.selector+"").replaceWith(onPageLoad);
}	

(function ($) {

    $.fn.eventify = function(options) {    
        var settings = $.extend({
            // Default settings
            div: "#ei-events",
            locale: "en",
            theme: ""
        }, options );
 
        return mainEventify({
        		div: $(this),
            locale: settings.locale,
            theme: settings.theme
        });
 
    };

}( jQuery ));