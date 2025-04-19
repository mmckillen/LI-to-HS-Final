//Comment
const { OpenAI } = require("openai")

module.exports = function handler(req, res) {
  // Add CORS headers
  res.setHeader("Access-Control-Allow-Credentials", true)
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS,POST,GET")
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  )

  // Handle preflight OPTIONS request
  if (req.method === "OPTIONS") {
    res.status(200).end()
    return
  }

  try {
    // Simple response that doesn't depend on request body
    const mockResponse = {
      firstName: "Jane",
      lastName: "Doe",
      currentCompany: "Acme Inc.",
      currentRole: "Senior Product Manager",
      headline: "Driving product innovation | Tech enthusiast | MBA",
      connectionType: "2nd",
    }

    return res.status(200).json(mockResponse)
  } catch (error) {
    console.error("Error:", error)
    return res.status(500).json({ error: "Internal server error" })
  }
}
