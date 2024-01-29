const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const now = new Date();
let date = document.querySelector("#date");
date.textContent = `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
document.querySelector("#now").textContent = `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;

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
        backgroundColor: ["rgba(52, 202, 165, 0.1)"],
        borderRadius: 20,
        hoverBackgroundColor: greenGradient,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: () => "",
          label: (context) => {
            let label = context.dataset.label || "";
            if (context.parsed.y !== null) {
                label += new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                }).format(context.parsed.y);
            }
            return label;
          },
        },
        bodyFont: {
          family: "'Inter', 'sans-serif'",
          size: 12,
        },
        displayColors: false,
        padding: {
            left: 10,
            right: 10,
            top: 8,
            bottom: 8
        },
        yAlign: "bottom",
        position: "nearest",
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
