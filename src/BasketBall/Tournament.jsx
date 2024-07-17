import { useEffect, useState } from "react";
import "./tournament.css";

const Tournament = () => {
  const calculateTimeLeft = () => {
    const tournamentDate = new Date("July 25, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = tournamentDate - now;

    let time = {};

    if (timeLeft > 0) {
      time = {
        days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
      };
    } else {
      time = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return time;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="tournament" id="tournament">
      <div className="left-tournament">
        <h2>Big Tournament Coming Soon</h2>
        <div className="tournament-details">
          <p>Join us for an exciting basketball tournament!</p>
          <p>Date: July 25, 2024</p>
          <div className="countdown">
            <p>Countdown to the event:</p>
            <div id="timer">
              <span id="days">{timeLeft.days} Days </span>
              <span id="hours">{timeLeft.hours} Hours </span>
              <span id="minutes">{timeLeft.minutes} Minutes </span>
              <span id="seconds">{timeLeft.seconds} Seconds</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img
          src="../../public/artimg-3.png"
          alt=""
          className="right-tournament"
        />
      </div>
    </section>
  );
};

export default Tournament;
