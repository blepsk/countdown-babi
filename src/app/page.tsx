"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Grid from "@mui/material/Grid2";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [targetDate, setTargetDate] = useState<string>("2025-04-01T23:59:59");

  const countdownToDate = (targetDate: string) => {
    const targetTime = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const remainingTime = targetTime - currentTime;

      if (remainingTime <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
        return;
      }

      setTimeLeft(remainingTime);
    }, 1000);
  };
  useEffect(() => {
    countdownToDate(targetDate);
  }, [targetDate]);

  const totalDays = 42;
  const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const daysPassed = totalDays - daysLeft;
  const progressPercentage = (daysPassed / totalDays) * 100;
  useEffect(() => {
    setProgress(progressPercentage);
  }, [timeLeft]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className={styles.page}>
      <div
        className={styles.center}
        style={{
          fontFamily: "Balonku",
          fontSize: "50px",
          textAlign: "center",
          color: "#ff6d87",
        }}
      >
        Countdown Babi Working!!
      </div>
      <div className={styles.progressBar}>
        <div className={styles.progressBackground}>
          {Array.from({ length: 100 }).map((_, index) => (
            <div
              key={index}
              className={`${styles.progressStep} ${
                index < progress ? styles.completed : ""
              }`}
            ></div>
          ))}
        </div>
        {/* <div style={{ left: `${progress}%`, position: "absolute" }}>
          {progress.toFixed(0)} %
        </div> */}
        <div className={styles.marker} style={{ left: `${progress}%` }}>
          <img src="./img/cherry-marker.png" alt="Progress Marker" />
        </div>
      </div>
      <div className={styles.center}>
        <div
          // className={styles.card}
          style={{
            fontFamily: "fantasy",
            fontSize: "24px",
            color: "rgb(255 98 154)",
            marginTop: "0px",
            padding: "0 10px",
          }}
        >
          {progress.toFixed(1)} %
        </div>
      </div>

      <div className={styles.center} style={{ marginTop: "50px" }}>
        <div className={styles.card}>
          <div
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              display: "flex",
              fontFamily: "Balonku",
              color: "#94D980",
              padding: "20px",
            }}
          >
            <Grid container spacing={4} justifyContent="center">
              <Grid size={{ xs: 6, md: 2 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div style={{ fontFamily: "Balonku", color: "#FF813F" }}>
                    Day
                  </div>
                  <span style={{ margin: "0 10px", padding: "5px" }}>
                    {days}
                  </span>
                </div>
              </Grid>

              <Grid size={{ xs: 6, md: 3 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div style={{ fontFamily: "Balonku", color: "#FF813F" }}>
                    Hours
                  </div>
                  <span style={{ margin: "0 10px", padding: "5px" }}>
                    {hours}
                  </span>
                </div>
              </Grid>

              <Grid size={{ xs: 6, md: 3 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div style={{ fontFamily: "Balonku", color: "#FF813F" }}>
                    Minutes
                  </div>
                  <span style={{ margin: "0 10px", padding: "5px" }}>
                    {minutes}
                  </span>
                </div>
              </Grid>

              <Grid size={{ xs: 6, md: 4 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div style={{ fontFamily: "Balonku", color: "#FF813F" }}>
                    Seconds
                  </div>
                  <span style={{ margin: "0 10px", padding: "5px" }}>
                    {seconds}
                  </span>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
