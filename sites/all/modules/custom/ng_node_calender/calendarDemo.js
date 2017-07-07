

/**
 * calendarDemoApp - 0.9.0
 */
var ng_node_calender = angular.module('ng_node_calender', ['ui.calendar', 'ui.bootstrap']);

ng_node_calender.controller('CalendarCtrl',
   function($scope, $compile, $timeout, uiCalendarConfig) {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $scope.changeTo = 'Hungarian';
    /* event source that pulls from google.com */
    $scope.eventSource = {
            url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
            className: 'gcal-event',           // an option!
            currentTimezone: 'America/Chicago' // an option!
    };
        /* event source that contains custom events on the scope */
    $scope.events = [
      {title: Drupal.settings.ng_node_calender.title_1, description: Drupal.settings.ng_node_calender.description_1, address:Drupal.settings.ng_node_calender.address_1, date:Drupal.settings.ng_node_calender.date_1, image:Drupal.settings.ng_node_calender.image_1,  start: new Date(Drupal.settings.ng_node_calender.start_1),end: new Date(Drupal.settings.ng_node_calender.end_1), lat:Drupal.settings.ng_node_calender.lat_1, long:Drupal.settings.ng_node_calender.long_1},
      {title: Drupal.settings.ng_node_calender.title_2, description: Drupal.settings.ng_node_calender.description_2, address:Drupal.settings.ng_node_calender.address_2, date:Drupal.settings.ng_node_calender.date_2, image:Drupal.settings.ng_node_calender.image_2, start: new Date(Drupal.settings.ng_node_calender.start_2),end: new Date(Drupal.settings.ng_node_calender.end_2), lat:Drupal.settings.ng_node_calender.lat_2, long:Drupal.settings.ng_node_calender.long_2},
      {title: Drupal.settings.ng_node_calender.title_3, description: Drupal.settings.ng_node_calender.description_3, address:Drupal.settings.ng_node_calender.address_3, date:Drupal.settings.ng_node_calender.date_3, image:Drupal.settings.ng_node_calender.image_3, start: new Date(Drupal.settings.ng_node_calender.start_3),end: new Date(Drupal.settings.ng_node_calender.end_3), lat:Drupal.settings.ng_node_calender.lat_3, long:Drupal.settings.ng_node_calender.long_3},
      {title: Drupal.settings.ng_node_calender.title_4, description: Drupal.settings.ng_node_calender.description_4, address:Drupal.settings.ng_node_calender.address_4, date:Drupal.settings.ng_node_calender.date_4, image:Drupal.settings.ng_node_calender.image_4, start: new Date(Drupal.settings.ng_node_calender.start_4),end: new Date(Drupal.settings.ng_node_calender.end_4), lat:Drupal.settings.ng_node_calender.lat_4, long:Drupal.settings.ng_node_calender.long_4},
      {title: Drupal.settings.ng_node_calender.title_5, description: Drupal.settings.ng_node_calender.description_5, address:Drupal.settings.ng_node_calender.address_5, date:Drupal.settings.ng_node_calender.date_5, image:Drupal.settings.ng_node_calender.image_5, start: new Date(Drupal.settings.ng_node_calender.start_5),end: new Date(Drupal.settings.ng_node_calender.end_5), lat:Drupal.settings.ng_node_calender.lat_5, long:Drupal.settings.ng_node_calender.long_5},
      {title: Drupal.settings.ng_node_calender.title_6, description: Drupal.settings.ng_node_calender.description_6, address:Drupal.settings.ng_node_calender.address_6, date:Drupal.settings.ng_node_calender.date_6, image:Drupal.settings.ng_node_calender.image_6, start: new Date(Drupal.settings.ng_node_calender.start_6),end: new Date(Drupal.settings.ng_node_calender.end_6), lat:Drupal.settings.ng_node_calender.lat_6, long:Drupal.settings.ng_node_calender.long_6},
      {title: Drupal.settings.ng_node_calender.title_7, description: Drupal.settings.ng_node_calender.description_7, address:Drupal.settings.ng_node_calender.address_7, date:Drupal.settings.ng_node_calender.date_7, image:Drupal.settings.ng_node_calender.image_7, start: new Date(Drupal.settings.ng_node_calender.start_7),end: new Date(Drupal.settings.ng_node_calender.end_7), lat:Drupal.settings.ng_node_calender.lat_7, long:Drupal.settings.ng_node_calender.long_7},
      {title: Drupal.settings.ng_node_calender.title_8, description: Drupal.settings.ng_node_calender.description_8, address:Drupal.settings.ng_node_calender.address_8, date:Drupal.settings.ng_node_calender.date_8, image:Drupal.settings.ng_node_calender.image_8, start: new Date(Drupal.settings.ng_node_calender.start_8),end: new Date(Drupal.settings.ng_node_calender.end_8), lat:Drupal.settings.ng_node_calender.lat_8, long:Drupal.settings.ng_node_calender.long_8},
      {title: Drupal.settings.ng_node_calender.title_9, description: Drupal.settings.ng_node_calender.description_9, address:Drupal.settings.ng_node_calender.address_9, date:Drupal.settings.ng_node_calender.date_9, image:Drupal.settings.ng_node_calender.image_9, start: new Date(Drupal.settings.ng_node_calender.start_9),end: new Date(Drupal.settings.ng_node_calender.end_9), lat:Drupal.settings.ng_node_calender.lat_9, long:Drupal.settings.ng_node_calender.long_9},
      {title: Drupal.settings.ng_node_calender.title_10, description: Drupal.settings.ng_node_calender.description_10, address:Drupal.settings.ng_node_calender.address_10, date:Drupal.settings.ng_node_calender.date_10, image:Drupal.settings.ng_node_calender.image_10, start: new Date(Drupal.settings.ng_node_calender.start_10),end: new Date(Drupal.settings.ng_node_calender.end_10), lat:Drupal.settings.ng_node_calender.lat_10, long:Drupal.settings.ng_node_calender.long_10},
      
    ];

/*
var events_info = []
$scope.events = events_info;
var title = Drupal.settings.ng_node_calender.title_1;
var address = Drupal.settings.ng_node_calender.address_1;
var date = Drupal.settings.ng_node_calender.date_1;
var image = Drupal.settings.ng_node_calender.image_1;
var start = new Date(y, m, 1);

var event_info = {
  "title": title,
  "address": address,
  "date": date,
  "image": image,
  "start": start,
}
$scope.events.push(event_info);
console.log(JSON.stringify($scope.events));
*/

    /* event source that calls a function on every view switch */
    $scope.eventsF = function (start, end, timezone, callback) {
      var s = new Date(start).getTime() / 1000;
      var e = new Date(end).getTime() / 1000;
      var m = new Date(start).getMonth();
      var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
      callback(events);
    };

    $scope.calEventsExt = {
       color: '#f00',
       textColor: 'yellow',
       events: [
          {type:'party',title: 'Lunch',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
          {type:'party',title: 'Lunch 2',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
          {type:'party',title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
        ]
    };
    /* alert on eventClick */
    $scope.alertOnEventClick = function( date, jsEvent, view){
        $scope.alertMessage = (date.title);
        $scope.alertMessageDescription = (date.description);
        $scope.alertMessageAddress = (date.address);
        $scope.alertMessageDate = (date.date);
        $scope.alertMessageImage = (date.image);
        $scope.alertMessageLat = (date.lat);
        $scope.alertMessageLong = (date.long);        
    };
    /* alert on Drop */
     $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view){
       $scope.alertMessage = ('Event Dropped to make dayDelta ' + delta);
    };
    /* alert on Resize */
    $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view ){
       $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
    };
    /* add and removes an event source of choice */
    $scope.addRemoveEventSource = function(sources,source) {
      var canAdd = 0;
      angular.forEach(sources,function(value, key){
        if(sources[key] === source){
          sources.splice(key,1);
          canAdd = 1;
        }
      });
      if(canAdd === 0){
        sources.push(source);
      }
    };
    /* add custom event*/
    $scope.addEvent = function() {
      $scope.events.push({
        title: 'Open Sesame',
        start: new Date(y, m, 28),
        end: new Date(y, m, 29),
        className: ['openSesame']
      });
    };
    /* remove event */
    $scope.remove = function(index) {
      $scope.events.splice(index,1);
    };
    /* Change View */
    $scope.changeView = function(view,calendar) {
      uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
    };
    /* Change View */
    $scope.renderCalendar = function(calendar) {
      $timeout(function() {
        if(uiCalendarConfig.calendars[calendar]){
          uiCalendarConfig.calendars[calendar].fullCalendar('render');
        }
      });
    };
     /* Render Tooltip */
    $scope.eventRender = function( event, element, view ) {
        element.attr({'tooltip': event.title,
                      'tooltip-append-to-body': true});
        $compile(element)($scope);
    };
    /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: 'title',
          center: '',
          right: 'today prev,next'
        },
        eventClick: $scope.alertOnEventClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize,
        eventRender: $scope.eventRender
      }
    };

    $scope.changeLang = function() {
      if($scope.changeTo === 'Hungarian'){
        $scope.uiConfig.calendar.dayNames = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];
        $scope.uiConfig.calendar.dayNamesShort = ["Vas", "Hét", "Kedd", "Sze", "Csüt", "Pén", "Szo"];
        $scope.changeTo= 'English';
      } else {
        $scope.uiConfig.calendar.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        $scope.uiConfig.calendar.dayNamesShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        $scope.changeTo = 'Hungarian';
      }
    };
    /* event sources array*/
    $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
    $scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];
});
/* EOF */
