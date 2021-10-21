import { useState } from "react";
import FeedbackOptions from "../FeedbackOptions";
import s from "./FeedBack.module.css";
import Statistics from "../Statistics";
import Section from "../Section";

import { FEEDBACK_OPTIONS } from "../Options/Option";

export default function FeedBack() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const changeFeedback = (event) => {
    const { feedback } = event.target;
    switch (feedback) {
      case "good":
        setGood((state) => state + 1);
        break;

      case "bad":
        setBad((state) => state + 1);
        break;
      case "neutral":
        setNeutral((state) => state + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    if (good === 0) {
      return 0;
    }
    return Math.round((good / total) * 100);
  };

  return (
    <div className={s.Container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={FEEDBACK_OPTIONS}
          onGiveFeedback={changeFeedback}
        />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
}
