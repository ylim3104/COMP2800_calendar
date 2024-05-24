const schedule = new ej.schedule.Schedule({
  width: "100%",
  height: "650px",
  eventSettings: { dataSource: [] }, // Initialize with an empty array
  eventRendered: function (args) {
    let categoryColor = args.data.CategoryColor;
    if (!args.element || !categoryColor) {
      return;
    }
    if (schedule.currentView === "Agenda") {
      args.element.firstChild.style.borderLeftColor = categoryColor;
    } else {
      args.element.style.backgroundColor = categoryColor;
    }
  },
});
schedule.appendTo("#Schedule");

// Load JSON data asynchronously
fetch("defaultData/courses.json")
  .then((response) => response.json())
  .then((data) => {
    schedule.eventSettings.dataSource = courseData;
    schedule.refresh(); // Refresh the schedule to display the loaded data
  })
  .catch((error) => console.error("Error loading JSON file:", error));

// // Load JSON data asynchronously
// fetch("/events")
//   .then((response) => response.json())
//   .then((data) => {
//     schedule.eventSettings.dataSource = eventData;
//     schedule.refresh(); // Refresh the schedule to display the loaded data
//   })
//   .catch((error) => console.error("Error loading JSON file:", error));
