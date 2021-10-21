import {useState} from "react";
import FeedbackOptions from "../FeedbackOptions";
import s from "./FeedBack.module.css";
import Statistics from "../Statistics";
import Section from "../Section";

import { FEEDBACK_OPTIONS } from "../Options/Option";

export default function FeedBack() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const changeFeedback = event => {
    const { feedback } = event.target;
    switch (feedback) {
      case 'good':
        setGood()
    }

}

  

  countTotalFeedback = () => {
    const arrayFeedBack = Object.values(this.state);
    const ttl = arrayFeedBack.reduce((acc, sum) => acc + sum, 0);
    return ttl;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();

    if (this.state.good === 0) {
      return 0;
    }
    return Math.round((this.state.good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={s.Container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={FEEDBACK_OPTIONS}
            onGiveFeedback={this.changeFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}

export default FeedBack;
