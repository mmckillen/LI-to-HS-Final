// Declare variables
const profileDataElement = document.getElementById("profileData")
const statusElement = document.getElementById("status")

// Function to extract spans (example, replace with actual logic)
function getSpans() {
  // This is a placeholder.  In a real extension, you'd likely
  // query the DOM of the active tab to get the spans.
  // For now, return a dummy array.
  return ["span1", "span2", "span3"]
}

const spans = getSpans()

fetch("https://li-to-hs-v3.vercel.app/api/interpretProfile", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ spans }),
})
  .then((response) => {
    if (!response.ok) {
      return response.text().then((text) => {
        throw new Error(`Network response was not ok: ${response.status} ${response.statusText} - ${text}`)
      })
    }
    return response.json()
  })
  .then((data) => {
    // Display the processed data
    document.getElementById("firstName").textContent = data.firstName || "-"
    document.getElementById("lastName").textContent = data.lastName || "-"
    document.getElementById("currentCompany").textContent = data.currentCompany || "-"
    document.getElementById("currentRole").textContent = data.currentRole || "-"
    document.getElementById("headline").textContent = data.headline || "-"
    document.getElementById("connectionType").textContent = data.connectionType || "-"

    profileDataElement.classList.add("visible")
    statusElement.textContent = "Profile data processed successfully"
  })
  .catch((error) => {
    console.error("Error details:", error)
    statusElement.textContent = "Error: " + error.message
  })
