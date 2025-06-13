// search.js

function searchPatient() {
  const name = document.getElementById("nameFilter").value.trim().toLowerCase();
  const phone = document.getElementById("phoneFilter").value.trim();
  const date = document.getElementById("dateFilter").value;

  const resultContainer = document.getElementById("resultContainer");

  // Simulated result - replace with actual data search
  if (name || phone || date) {
    resultContainer.innerHTML = `
      <p><strong>Name:</strong> John Doe</p>
      <p><strong>Phone:</strong> 9876543210</p>
      <p><strong>Date:</strong> ${date || "2025-06-10"}</p>
      <p><strong>Prescription:</strong> +1.25 / -0.75</p>
    `;
  } else {
    resultContainer.innerHTML = `<p>Please enter a filter to search.</p>`;
  }
}
