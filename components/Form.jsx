import Button from "./Button"

const Form = () => {
  return (
  <div className="form-container">
    <p>35.000 ALREADY JOIMED</p>
    <h2>Stay uo-to-date with what we are doing</h2>
    <form>
      <input type="text" placeholder="Your email address" />
      <Button red>Contact us</Button>
    </form>
  </div>
  )  
}

export default Form;