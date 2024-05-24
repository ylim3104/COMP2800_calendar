const schedule = new ej.schedule.Schedule({
  width: "100%",
  height: "650px",
  selectedDate: new Date(2024, 1, 15),
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
fetch("/courses.json")
  .then((response) => response.json())
  .then((data) => {
    schedule.eventSettings.dataSource = data;
    schedule.refresh(); // Refresh the schedule to display the loaded data
  })
  .catch((error) => console.error("Error loading JSON file:", error));

/*
// Fetch the JSON data
fetch("courses.json")
  .then((response) => response.json())
  .then((data) => {
    // Initialize the schedule with the fetched data as the dataSource
    const schedule = new ej.schedule.Schedule({
      width: "100%",
      height: "650px",
      selectedDate: new Date(2021, 1, 15),
      eventSettings: { dataSource: data }, // Set the fetched data as the dataSource
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
  })
  .catch((error) => console.error("Error fetching or parsing JSON:", error));
*/
