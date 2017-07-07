<div id="ng_node_calender" ng-app="ng_node_calender">
  <div ng-view></div>

  <div role="main" >
    <div class="container">
        <section id="directives-calendar" ng-controller="CalendarCtrl">
            <div class="main-content">
                <div class="row-fluid">
                
                    <div class="span8" style="width: auto;">
                        <tabset>
                            <tab select="renderCalendar('myCalendar1');">
                              <!--<tab-heading>
                               <i class="glyphicon glyphicon-bell"></i> Calendar One
                              </tab-heading>-->
                              <div class="alert alert-info" ng-show="alertMessage != undefined && alertMessage != ''">

                               <h4>{{alertMessage}}</h4>
                               {{alertMessageDescription}}
                               <h4>Venue: {{alertMessageAddress}}</h4>
                               <h4>Time & Date: {{alertMessageDate}}</h4>
                               <img src="<?php print "{{alertMessageImage}}"; ?>" style="width: 100px; height: 100px;" />
                               <iframe width="300" height="170" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=<?php print "{{alertMessageLat}}"; ?>,<?php print "{{alertMessageLong}}"; ?>&hl=es;z=14&amp;output=embed"></iframe><br /><small><a href="https://maps.google.com/maps?q='+data.lat+','+data.lon+'&hl=es;z=14&amp;output=embed" style="color:#0000FF;text-align:left" target="_blank">See map bigger</a></small>

                              </div>
                              <div class="btn-toolbar">  
                                <div class="btn-group">
                                    <button class="btn btn-success" ng-click="changeView('agendaDay', 'myCalendar1')">Day</button>
                                    <button class="btn btn-success" ng-click="changeView('agendaWeek', 'myCalendar1')">Week</button>
                                    <button class="btn btn-success" ng-click="changeView('month', 'myCalendar1')">Month</button>
                                </div>
                              </div>
                        <div class="calendar" ng-model="eventSources" calendar="myCalendar1" ui-calendar="uiConfig.calendar"></div>
                           </tab>
                        </tabset>
                    </div>
                </div>
            </div>
           
        </section>
    </div>
</div>
</div>


