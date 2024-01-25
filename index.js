let canvas = document.querySelector("#sales-trends");
let ctx = canvas.getContext("2d");

let greenGradient = ctx.createLinearGradient(0, 0, 0, 300);
greenGradient.addColorStop(0, "rgba(52, 202, 165)");
greenGradient.addColorStop(1, "rgba(52, 202, 165, 0.1)");

let salesChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
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
    datasets: [
      {
        data: [
          7000, 21000, 3000, 26000, 18000, 45000, 18000, 23000, 32000, 6000,
          30000, 26000,
        ],
        backgroundColor: [
          "rgba(52, 202, 165, 0.1)",
          "rgba(52, 202, 165, 0.1)",
          "rgba(52, 202, 165, 0.1)",
          "rgba(52, 202, 165, 0.1)",
          "rgba(52, 202, 165, 0.1)",
          greenGradient,
          "rgba(52, 202, 165, 0.1)",
          "rgba(52, 202, 165, 0.1)",
          "rgba(52, 202, 165, 0.1)",
          "rgba(52, 202, 165, 0.1)",
          "rgba(52, 202, 165, 0.1)",
          "rgba(52, 202, 165, 0.1)",
        ],
        borderRadius: 20,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          drawOnChartArea: false,
          drawTicks: false,
        },
        ticks: {
          font: {
            family: "'Plus Jakarta Sans', 'sans-serif'",
            weight: 600,
            size: 15,
          },
        },
      },
      y: {
        beginAtZero: true,
        max: 50000,
        grid: {
          drawTicks: false,
        },
        border: {
          dash: [4, 4],
          display: false,
        },
        ticks: {
            font: {
                family: "'Plus Jakarta Sans', 'sans-serif'",
                weight: 600,
                size: 15,
            },
            align: "center",
            callback: (value, index) => {
              if (value === 5000) {
                return (value = 5000);
              } else if (value > 5000) {
                return index % 2 === 0 ? value : "";
              }
            },
        },
      },
    },
  },
});