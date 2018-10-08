import React from "react"
//Can add a form action e.g. "/pages/success" for the redirect
const SignUpForm = () => (
  <form method="POST" action="http://localhost:5000/formPart1">
    <p>
      <label>
        Your Name: <input type="text" name="name" />
      </label>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>
)
export default SignUpForm
