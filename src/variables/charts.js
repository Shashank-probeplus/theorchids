import { color } from "@chakra-ui/system";
import { position } from "stylis";

export const barChartDataDashboard = [
  {
    name: "Room Bookings %",
    data: [53, 66, 59, 60, 64, 58, 47, 60, 63, 53, 54],
  },
];

export const barChartOptionsDashboard = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: "Plus Jakarta Display",
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: "Plus Jakarta Display",
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: [
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
    ],
    show: false,
    labels: {
      show: false,
      style: {
        colors: "#fff",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: true,
    color: "#fff",
    labels: {
      show: true,
      style: {
        colors: "#fff",
        fontSize: "12px",
        fontFamily: "Plus Jakarta Display",
      },
    },
  },
  min: 0,
  max: 100,
  tickAmount: 5,
  grid: {
    show: false,
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    colors: "#fff",
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: "12px",
    },
  },
  responsive: [
    {
      breakpoint: 768,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
          },
        },
      },
    },
  ],
};

export const pieChartDataDashboard = [44, 55, 41, 17, 15];
export const pieChartCategories = [
  "Food",
  "Bar",
  "Rooms",
  "Recreation",
  "Ayurveda",
];
export const pieChartColors = [
  "#FF4560",
  "#00E396",
  "#FEB019",
  "#775DD0",
  "#3F51B5",
];

export const pieChartOptionsDashboard = {
  chart: {
    width: 500,
    type: "donut",
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: "Plus Jakarta Display",
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: "Plus Jakarta Display",
      },
    },
    theme: "dark",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
    },
    donut: {
      size: "110%", // Increase this value to make the donut hole larger
    },
  },
  labels: pieChartCategories,
  dataLabels: {
    enabled: true,
    style: {
      fontSize: "12px",
      color: "#fff",
      fontFamily: "Plus Jakarta Display",
    },
  },
  fill: {
    type: "gradient",
  },
  colors: pieChartColors,
  legend: {
    position: "bottom",
    fontSize: "16px",
    fontFamily: "Plus Jakarta Display",
    formatter: function (val, opts) {
      return `<span style="color:#fff">
        ${pieChartCategories[opts.seriesIndex]}
        - 
        ${opts.w.globals.series[opts.seriesIndex]}
        </span>
      `;
    },
  },

  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

export const lineChartDataDashboard = [
  {
    name: "Net Revenue",
    data: [
      7.951525,
      9.710229,
      10.089834,
      10.42201,
      9.546589,
      9.861599,
      9.053546,
      8.265256,
      10.012287,
      10.043834,
      8.968898,
    ],
  },
  {
    name: "Gross Operating Profit",
    data: [
      1.937778,
      2.553896,
      2.303914,
      2.528281,
      1.625966,
      1.960784,
      1.537821,
      1.116783,
      1.169787,
      1.44312,
      1.269783,
    ],
  },
];
export const roomsLineChartDataDashboard = [
  {
    name: "Net Revenue",
    data: [
      7951525,
      9710229,
      10089834,
      10422010,
      9546589,
      9861599,
      9053546,
      8265256,
      10012287,
      10043834,
      8968898,
    ],
  },
];

export const foodLineChartDataDashboard = [
  {
    name: "Food - Contribution Margin",
    data: [
      266818,
      459925,
      280428,
      418018,
      212420,
      140991,
      75964,
      -14113,
      87281,
      -123666,
      -163660,
    ],
  },
];

export const barLineChartDataDashboard = [
  {
    name: "Bar - Contribution Margin",
    data: [
      1464457,
      1841965,
      1964939,
      2216337,
      1779233,
      2005915,
      1865769,
      1235840,
      1973879,
      2009583,
      1639381,
    ],
  },
];

export const lineChartOptionsDashboard = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
    ],
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "12px",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "12px",
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    strokeDashArray: 5,
    borderColor: "#56577A",
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0,
      gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#2CD9FF", "#582CFF"],
  },
  colors: ["#2CD9FF", "#582CFF"],
};

export const lineChartDataProfile1 = [
  {
    name: "Mobile apps",
    data: [100, 250, 300, 220, 500, 250, 300, 230, 300, 350, 250, 400],
  },
];

export const lineChartOptionsProfile1 = {
  chart: {
    height: "50px",
    toolbar: {
      show: false,
    },
    redrawOnParentResize: true,
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    labels: {
      show: false,
      style: {
        colors: "#c8cfca",
        fontSize: "12px",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "12px",
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
    strokeDashArray: 5,
    borderColor: "#56577A",
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0,
      gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#01B574"],
  },
  colors: ["#01B574"],
};

export const lineChartDataProfile2 = [
  {
    name: "Mobile apps",
    data: [100, 250, 300, 220, 500, 250, 300, 230, 300, 350, 250, 400],
  },
];

export const lineChartOptionsProfile2 = {
  chart: {
    height: "50px",
    toolbar: {
      show: false,
    },
    redrawOnParentResize: true,
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    labels: {
      show: false,
      style: {
        colors: "#c8cfca",
        fontSize: "12px",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "12px",
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
    strokeDashArray: 5,
    borderColor: "#56577A",
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0,
      gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#582CFF"],
  },
  colors: ["#582CFF"],
};
