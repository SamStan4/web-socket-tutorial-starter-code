import {
  validateName,
  validateEmail,
  validateCity,
  validateState
} from "@util/validation";
import "./SignatureFormStyles.css";

export default function SignatureForm({ onSubmitForm }) {
  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const city = event.target.city.value;
    const state = event.target.state.value;
    if (!validateName(name)) {
      alert("bad name");
      return;
    } else if (!validateEmail(email)) {
      alert("bad email");
      return;
    } else if (!validateCity(city)) {
      alert("bad city");
      return;
    } else if (!validateState(state)) {
      alert("bad state");
      return;
    }
    onSubmitForm(name, email, city, state);
    event.target.reset();
  }
  return (
    <div className="signature-form-wrapper">
      <h2 className="sign-text">
        Sign The Petition
      </h2>
      <form className="form-styles" onSubmit={handleSubmitForm}>
        <input type="text" required name="name" placeholder="Your Name" className="form-input-style"/>
        <input type="email" required name="email" placeholder="Your Email" className="form-input-style"/>
        <input type="text" required name="city" placeholder="City" className="form-input-style"/>
        <input type="text" required name="state" placeholder="State (e.g. WA)" className="form-input-style"/>
        <input type="submit" value="Sign Petition" className="form-submit-button-style"/>
      </form>
    </div>
  );
};