---
---
// Concatenation of all CS10 JS Files.

{% include_relative lib/jquery.min.js %}

{% include_relative lib/moment.min.js %}

// Note this much come before the full Calendar script.
{% include_relative calendar.js %}

{% include_relative schedule.js %}

{% include_relative lib/fullcalendar/fullcalendar.min.js %}

{% include_relative lib/fullcalendar/gcal.js %}

{% include_relative cs10.js %}

{% include_relative staff.js %}