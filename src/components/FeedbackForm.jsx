import { useState } from "react";
import Card from "./shared/Card";

export default function FeedbackForm() {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2>
          How would you rate your service with us
          {/* @todo - rating select component */}
          <div className="input-group">
            <input
              onChange={handleTextChange}
              value={text}
              type="text"
              placeholder="Write a review"
            />
            <button type="submit">Send</button>
          </div>
        </h2>
      </form>
    </Card>
  );
}
