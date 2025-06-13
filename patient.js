// patient.js

// 🔍 Search function for patient
function searchPatient() {
  const query = document.getElementById("searchInput").value.trim();

  if (!query) {
    alert("Please enter a name or phone number to search.");
    return;
  }

  // Simulate patient search
  alert("Searching for patient with: " + query);

  // Future implementation: fetch patient from server
  // window.location.href = "search.html?query=" + encodeURIComponent(query);
}

// ✅ Handle patient form submission
document.getElementById("patientForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const patient = {
    fullName: document.getElementById("fullName").value,
    phone: document.getElementById("phone").value,
    age: document.getElementById("age").value,
    gender: document.getElementById("gender").value,
    prescription: document.getElementById("prescription").value
  };

  // Simulate saving
  console.log("Saving patient:", patient);
  alert("Patient record saved!");

  // Reset form
  document.getElementById("patientForm").reset();
});


