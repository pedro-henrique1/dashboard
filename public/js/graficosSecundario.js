google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["", "", ""],
    ["mon", 1000, 400],
    ["tue", 1170, 460],
    ["wed", 660, 1120],
    ["thu", 1030, 540],
    ["fri", 1030, 540],
    ["set", 1030, 540],
    ["sun", 1030, 540]
  ]);

  var options = {
    width: 681,
    height: 359,
    colors: ["#42d9ae", "#6e78f5"]
    // title: "Company Performance",
    // curveType: "function",
    // legend: { position: "bottom" }
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("curve_chart")
  );

  chart.draw(data, options);
}
