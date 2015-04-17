/* This builds the weekly schedule on the front page.
 * It is based of the FullCalendar plugin and connects to bCal.
 * There are custom functions defined to modify event titles, URLs
 * and descriptions
 * Google Calendar needs an API key which is defined in _config.yml
 * but shouldn't need to be changed unless it's own cant be contacted.
 * Docs: http://fullcalendar.io/docs/
 */


// Link event to the building on the Berkeley map
var getRoomURL = function(loc) {
    if (!loc) { return ''; }

    var base = "http://www.berkeley.edu/map/3dmap/3dmap.shtml?",
        url  = { sd: 'sutardja',
                 sdh: 'sutardja',
                 lks: 'likashing',
                 etch: 'etcheverry',
                 vlsb: 'valleylifesciences' },
        room = loc ? loc.split(' ')[1].toLowerCase() : '';

    if (url[room]) {
        room = url[room];
    }

    return base + room;
}

// Most events have "CS10" in the title (OH) but this is redundant
var editTitle = function(t) {
    return t.replace(/CS10\s*/gi, '');
}

// Use this to modify the data fullcalendar gets from google
var fullCalTransorm = function(event) {
    event.url = getRoomURL(event.location);
    event.title = editTitle(event.title);
    return event;
};

// This changes the display of each event
// It modifies links to open in a new window and adds descriptions
// and locations to the event text
var fullCalRender = function(event, element, view) {
    var content = '';

    if (event.location) {
        content += event.location;
        element.attr({'target':'_blank'}); // open links in a new window
    } else {
        element.attr({'href': '#weekly'});
    }
    if (event.description) {
        content += ' &ndash; ' + event.description;
    }
    element.append($('<div class="fc-content">').html(content));
    return element;
};

// These are exam dates and will show the weekend slots on the calendar
// if a review session is coming up.
var quest   = daysUntil(moment('{{ site.questDate }}')),
    midterm = daysUntil(moment('{{ site.midtermDate }}')),
    final   = daysUntil(moment('{{ site.finalDate }}'));

function daysUntil(from, to) {
  var MS_DAY = 1000*60*60*24;
  return Math.floor((from - (to || moment())) / MS_DAY);
}

function inRange(num) { return num <= 9 && num > -1; }

// This shows "today" while the semester is in progress
// Defaults to the first week of class before or after the semester.
function calendarStartDate() {
  if (moment().isBefore(moment('{{ site.endDate}}')) &&
      moment().isAfter(moment('{{ site.startDate }}'))) {
        return moment();
    }

    return '{{ site.startDate }}';
}

$(document).ready(function() {
    // Show weekends when we are close to at least one review session.
    // exclude Quest from calendar during spring (review sesh is monday)
    var wkends = inRange(midterm) || inRange(final);

    $('#oh-cal').fullCalendar({
      allDaySlot: false,
      slotDuration: "1:00:00",
      slotEventOverlap: false,
      weekends: wkends,
      defaultView: 'agendaWeek',
      minTime: "09:00:00",
      maxTime: "20:00:00",
      defaultDate: calendarStartDate(),
      contentHeight: "auto",
      googleCalendarApiKey: '{{ site.gcalAPIKey }}',
      eventDataTransform: fullCalTransorm,
      eventRender: fullCalRender,
      eventSources: [
        { googleCalendarId: 'berkeley.edu_7qpoo4ph13p55e4ukmnpvqusdk@group.calendar.google.com',
          cache: true,
          className: 'lecture' },
        { googleCalendarId: 'berkeley.edu_d358eocqj23pak3atie23vk35o@group.calendar.google.com',
          cache: true,
          className: 'lab' },
        { googleCalendarId: 'berkeley.edu_k2g60q1sehd2u0ujd257jqm7h0@group.calendar.google.com',
          cache: true,
          className: 'oh' },
        { googleCalendarId: 'berkeley.edu_1g3duo9lb53vu09orjictriud4@group.calendar.google.com',
          cache: true,
          className: 'disc' }
      ]
    });
});