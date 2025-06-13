// dashboard.js

// Simulated data - replace with real API calls later
const stats = {
  today: 5,
  thisMonth: 40,
  lastMonth: 32,
  total: 150
};

document.getElementById("todayCount").textContent = stats.today;
document.getElementById("monthCount").textContent = stats.thisMonth;
document.getElementById("lastMonthCount").textContent = stats.lastMonth;
document.getElementById("totalCount").textContent = stats.total;