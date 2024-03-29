import { useState } from "react";
import "./App.css";

export default function App() {
  const [travelMode, setTravelMode] = useState("");
  const [travelFrequency, setTravelFrequency] = useState("");
  const [comments, setComments] = useState("");
  const [experience, setExperience] = useState("");
  const [condition, setCondition] = useState(false);
  const [formData, setFormData] = useState(false);

  const handleRadioBtn = (event) => {
    setExperience(event.target.value);
  };

  const formHandler = (event) => {
    event.preventDefault();
    if (travelMode && travelFrequency && experience && condition) {
      setFormData(true);
    }
  };

  return (
    <main>
      <h1>Transportation Preference Form</h1>
      <form onSubmit={formHandler}>
        <label htmlFor="mode">Preferred Mode of Transportation: </label>
        <select
          id="mode"
          required
          onChange={(event) => setTravelMode(event.target.value)}
        >
          <option value="">Select</option>
          <option value="Car">Car</option>
          <option value="Bus">Bus</option>
          <option value="Train">Train</option>
          <option value="Bicycle">Bicycle</option>
          <option value="Walk">Walk</option>
        </select>
        <br />
        <br />
        <label htmlFor="frequency">Frequency of Usage: </label>
        <select
          id="frequency"
          required
          onChange={(event) => setTravelFrequency(event.target.value)}
        >
          <option value="">Select</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Occasionally">Occasionally</option>
        </select>
        <br />
        <br />
        <label htmlFor="comments">Comments (if any): </label>
        <br />
        <textarea
          id="comments"
          rows="4"
          cols="40"
          onChange={(event) => setComments(event.target.value)}
        />
        <br />
        <br />
        <label>Experience Level</label>
        <br />
        <input
          type="radio"
          required
          value="Beginner"
          name="experience"
          onChange={handleRadioBtn}
        />
        Beginner
        <br />
        <input
          type="radio"
          required
          value="Intermediate"
          name="experience"
          onChange={handleRadioBtn}
        />
        Intermediate
        <br />
        <input
          type="radio"
          required
          value="Advanced"
          name="experience"
          onChange={handleRadioBtn}
        />
        Advanced
        <br />
        <br />
        <label>
          <input
            type="checkbox"
            required
            onChange={(event) => setCondition(event.target.checked)}
          />
          I agree to the terms and condtitons.
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      {formData && (
        <div>
          <h2>Submitted Details:</h2>
          <p>Preferred Mode of Transport: {travelMode}</p>
          <p>Frequency of Usage: {travelFrequency}</p>
          <p>Comments: {comments ? comments : "none"}</p>
          <p>Experience Level: {experience}</p>
        </div>
      )}
    </main>
  );
}
