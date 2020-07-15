google.charts.load("current", { packages: ["bar"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["", "", ""],
    ["jan", 1000, 400],
    ["fev", 1170, 460],
    ["mar", 660, 1120],
    ["abr", 1030, 540],
    ["maio", 1030, 540],
    ["jun", 1030, 540],
    ["jul", 1030, 540],
    ["ago", 1030, 540],
    ["set", 1030, 540],
    ["out", 1030, 540],
    ["nov", 1030, 540],
    ["dez", 1030, 540]
  ]);

  var options = {
    width: 538,
    height: 220,
    colors: ["#9174d8", "#e3eaef"]
    // chart: {
    //   title: "Company Performance",
    //   subtitle: "Sales, Expenses, and Profit: 2014-2017"
    // }
  };

  var chart = new google.charts.Bar(
    document.getElementById("columnchart_material")
  );

  chart.draw(data, google.charts.Bar.convertOptions(options));
}
