// Syncfusion.Licensing.registerLicense("ESSENTIAL_STUDIO_KEY");
function applyCategoryColor(args, currentView) {
  var categoryColor = args.data.CategoryColor;
  if (!args.element || !categoryColor) {
    return;
  }
  if (currentView === "Agenda") {
    args.element.firstChild.style.borderLeftColor = categoryColor;
  } else {
    args.element.style.backgroundColor = categoryColor;
  }
}

var eventData = [
  {
    Id: 1,
    Subject: "COMP 1800",
    StartTime: new Date(2024, 0, 8, 8, 30),
    EndTime: new Date(2024, 0, 8, 10, 30),
    RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=TU;UNTIL=20240419T235959Z",
    CategoryColor: "#357cd2",
  },
  {
    Id: 2,
    Subject: "COMP 2800",
    StartTime: new Date(2024, 3, 29, 10, 0),
    EndTime: new Date(2024, 3, 29, 12, 0),
    RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=MO,TH;UNTIL=20240531T235959Z",
    CategoryColor: "#7fa900"
  },
  {
    Id: 3,
    Subject: "Walk with",
    StartTime: new Date(2024, 2, 17, 0, 0),
    EndTime: new Date(2024, 2, 17, 2, 30),
    IsAllDay: true,
    CategoryColor: "#7fa900",
  },
  {
    Id: 4,
    Subject: "Black Cockatoos Playtime",
    StartTime: new Date(2024, 3, 18, 1, 0),
    EndTime: new Date(2024, 3, 18, 2, 30),
    CategoryColor: "#ea7a57",
  },
  {
    Id: 5,
    Subject: "Croco World",
    StartTime: new Date(2021, 4, 19, 0, 0),
    EndTime: new Date(2021, 4, 19, 2, 30),
    IsAllDay: true,
    CategoryColor: "#00bdae",
  },
];

var scheduleObj = new ej.schedule.Schedule({
  height: "650px",
  currentView: "Month",
  eventSettings: { dataSource: eventData },
  eventRendered: function (args) {
    applyCategoryColor(args, scheduleObj.currentView);
  },
});

scheduleObj.appendTo("#Schedule");
// initButtons();
// load();
