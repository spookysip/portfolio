"use client";

import React, { useEffect, useState, useRef } from "react";
import { Howl } from "howler";

import Monster from "../icons/Monster";
import Eye from "../emojis/Eye";

interface Props {
  stackElement: any;
  customStack: any;
  techDisplay: any;
  setStackTitle: any;
  setTechDisplay: any;
  consolidatedStack: any;
  clickCustomStack: any;
  stackTitle: any;
  customStackRef: any;
  customStackAnimationDuration: any;
  gamePower: any;
  setGamePower: any;
  score: any;
  setScore: any;
  setCopy: any;
  photoSelection: any;
  setPhotoSelection: any;
}

export default function CustomStack({
  stackElement,
  customStack,
  techDisplay,
  setStackTitle,
  setTechDisplay,
  consolidatedStack,
  clickCustomStack,
  stackTitle,
  customStackRef,
  customStackAnimationDuration,
  gamePower,
  setGamePower,
  score,
  setScore,
  setCopy,
  photoSelection,
  setPhotoSelection,
}: Props) {
  const [monsterHit, setMonsterHit] = useState(false) as any;

  const startGameSound = new Howl({
    src: ["/sounds/start-game.wav"],
    volume: 0.08,
    html5: true,
  });

  const stopGameSound = new Howl({
    src: ["/sounds/stop-game.wav"],
    volume: 0.08,
    html5: true,
  });

  const hit1Sound = new Howl({
    src: ["/sounds/hit-1.wav"],
    volume: 0.08,
    html5: true,
  });

  const hit2Sound = new Howl({
    src: ["/sounds/hit-2.wav"],
    volume: 0.08,
    html5: true,
  });

  const hit3Sound = new Howl({
    src: ["/sounds/hit-3.wav"],
    volume: 0.08,
    html5: true,
  });

  const hit4Sound = new Howl({
    src: ["/sounds/hit-4.wav"],
    volume: 0.08,
    html5: true,
  });

  const hit5Sound = new Howl({
    src: ["/sounds/hit-5.wav"],
    volume: 0.08,
    html5: true,
  });

  async function playGame() {
    if (gamePower) {
      setScore(0);
      stopGameSound.play();
      startGameSound.stop();
    }

    if (!gamePower) {
      startGameSound.play();
      stopGameSound.stop();
    }
    setGamePower((prev: any) => !prev);
  }

  async function hitMonster() {
    if (gamePower) {
      playHitSound();
      setScore((prev: any) => prev + 1);
      setMonsterHit(true);
      setTimeout(() => {
        setCopy(false);
        setMonsterHit(false);
      }, 30);
    }
  }

  const [cornerClass, setCornerClass] = useState("game-position-center");
  const gameIntervalRef = useRef() as any;

  useEffect(() => {
    if (gamePower) {
      // Function to get a random integer between min and max (inclusive)
      const getRandomInt = (min: any, max: any) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };

      // Array of corner classes
      const cornerClasses = [
        "game-position-center",
        "game-position-top",
        "game-position-bottom",
        "game-position-left",
        "game-position-right",
        "game-position-bottom-right",
        "game-position-top-right",
        "game-position-bottom-left",
        "game-position-top-left",
      ];

      // Function to randomly choose a corner class
      const randomizeCorner = () => {
        const randomIndex = getRandomInt(0, cornerClasses.length - 1);
        setCornerClass(cornerClasses[randomIndex]);
      };

      // Randomize initially and then every 3 seconds
      randomizeCorner();
      gameIntervalRef.current = setInterval(randomizeCorner, 750);

      // Clean up interval on component unmount
      return () => clearInterval(gameIntervalRef.current);
    }

    if (!gamePower) {
      setCornerClass("game-position-center");
      clearInterval(gameIntervalRef.current);
    }
  }, [gamePower]);

  async function playHitSound() {
    const hit = Math.floor(Math.random() * 5) + 1;

    if (hit === 1) {
      hit1Sound.play();
      setTimeout(() => {
        hit1Sound.stop();
      }, 1000);
    }

    if (hit === 2) {
      hit2Sound.play();
      setTimeout(() => {
        hit2Sound.stop();
      }, 1000);
    }

    if (hit === 3) {
      hit3Sound.play();
      setTimeout(() => {
        hit3Sound.stop();
      }, 1000);
    }

    if (hit === 4) {
      hit4Sound.play();
      setTimeout(() => {
        hit4Sound.stop();
      }, 1000);
    }

    if (hit === 5) {
      hit5Sound.play();
      setTimeout(() => {
        hit5Sound.stop();
      }, 1000);
    }
  }

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {!customStack && (
        <div className="photo-selection-parent">
          <div
            className={
              photoSelection === "digital"
                ? "digital-photo-selected"
                : "digital-photo"
            }
            onClick={() => setPhotoSelection("digital")}
          >
            <div>Digital Matt</div>
          </div>
          <div
            className={
              photoSelection === "irl" ? "irl-photo-selected" : "irl-photo"
            }
            onClick={() => {
              setPhotoSelection("irl");
              setScore(0);
              setGamePower(false);
            }}
          >
            <div>Matt IRL</div>
          </div>
        </div>
      )}
      <div className="title">
        <div ref={stackElement} />

        <div
          className={
            !customStack && monsterHit && photoSelection === "digital"
              ? `game-section game-background ${cornerClass}`
              : !customStack && !monsterHit && photoSelection === "digital"
              ? `game-section ${cornerClass}`
              : !customStack && !monsterHit && photoSelection === "irl"
              ? "photo-section"
              : "custom-stack"
          }
        >
          {!customStack && photoSelection !== "irl" && (
            <div
              className={gamePower ? "move" : "frozen"}
              // style={{
              //   animationDuration: `${animationSpeed}s`,
              //   marginTop: `${margin.marginTop}%`,
              //   marginLeft: `${margin.marginLeft}%`,
              // }}
              onClick={() => hitMonster()}
            >
              <Monster />
            </div>
          )}

          {/* {photoSelection === "irl" && <div className="photo" />} */}

          <img
            className={
              photoSelection === "irl" && !customStack ? "photo" : "hide-photo"
            }
            src="/Me.jpg"
            alt="Matt Laughlin Profile Picture"
          />

          <div className="custom-type">
            <div
              className={
                customStack
                  ? "custom-stack-title show"
                  : "custom-stack-title hidden"
              }
            >
              <div className="horizontal-scrolling-items">
                <div
                  ref={customStackRef}
                  style={{
                    animationDuration: `${customStackAnimationDuration}s`,
                  }}
                  className="horizontal-scrolling-items__item"
                >
                  {stackTitle === "" ? "Your" : stackTitle} Stack
                  <Eye />
                  {stackTitle === "" ? "Your" : stackTitle} Stack
                  <Eye />
                  {stackTitle === "" ? "Your" : stackTitle} Stack
                  <Eye />
                  {stackTitle === "" ? "Your" : stackTitle} Stack
                  <Eye />
                  {stackTitle === "" ? "Your" : stackTitle} Stack
                  <Eye />
                  {stackTitle === "" ? "Your" : stackTitle} Stack
                  <Eye />
                  {stackTitle === "" ? "Your" : stackTitle} Stack
                  <Eye />
                  {stackTitle === "" ? "Your" : stackTitle} Stack
                  <Eye />
                  {stackTitle === "" ? "Your" : stackTitle} Stack
                  <Eye />
                  {stackTitle === "" ? "Your" : stackTitle} Stack
                  <Eye />
                  {stackTitle === "" ? "Your" : stackTitle} Stack
                  <Eye />
                  {stackTitle === "" ? "Your" : stackTitle} Stack
                  <Eye />
                  {stackTitle === "" ? "Your" : stackTitle} Stack
                  <Eye />
                  {stackTitle === "" ? "Your" : stackTitle} Stack
                  <Eye />
                  {stackTitle === "" ? "Your" : stackTitle} Stack
                  <Eye />
                  {stackTitle === "" ? "Your" : stackTitle} Stack
                  <Eye />
                  {stackTitle === "" ? "Your" : stackTitle} Stack
                  <Eye />
                  {stackTitle === "" ? "Your" : stackTitle} Stack
                  <Eye />
                  {stackTitle === "" ? "Your" : stackTitle} Stack
                  <Eye />
                  {stackTitle === "" ? "Your" : stackTitle} Stack
                  <Eye />
                  {stackTitle === "" ? "Your" : stackTitle} Stack
                  <Eye />
                  {stackTitle === "" ? "Your" : stackTitle} Stack
                  <Eye />
                  {stackTitle === "" ? "Your" : stackTitle} Stack
                  <Eye />
                  {stackTitle === "" ? "Your" : stackTitle} Stack
                  <Eye />
                  {stackTitle === "" ? "Your" : stackTitle} Stack
                  <Eye />
                  {stackTitle === "" ? "Your" : stackTitle} Stack
                  <Eye />
                  {stackTitle === "" ? "Your" : stackTitle} Stack
                  <Eye />
                </div>
              </div>
            </div>
          </div>

          {customStack && (
            <div className="custom-stack-section">
              {techDisplay.filter((item: any) => item.selected).length > 4 && (
                <div
                  className="clear-all"
                  onClick={() => {
                    setStackTitle(""),
                      setTechDisplay((previous: any) =>
                        previous.map((tech: any) =>
                          tech.selected
                            ? {
                                ...tech,
                                selected: false,
                              }
                            : tech
                        )
                      );
                  }}
                >
                  Clear All
                </div>
              )}

              <div className="custom-options">
                {consolidatedStack.map(
                  (item: any) =>
                    item.selected && (
                      <div
                        key={item.id}
                        className="custom-item"
                        onClick={() => clickCustomStack(item)}
                      >
                        {item.name}
                      </div>
                    )
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div>
        {!customStack && photoSelection !== "irl" && (
          <div
            className={
              monsterHit ? "game-controls game-background" : "game-controls"
            }
          >
            <div className="socre">Score: {score}</div>
            <div
              className="game-start-stop"
              onClick={() => {
                playGame();
              }}
            >
              {!gamePower ? "Start" : "Stop"}
            </div>

            {/* <div className="speed-parent">
                  <div className="speed">Speed</div>
                  <div className="less-speed">-</div>
                  <div
                    className="more-speed"
                    onClick={() => setAnimationSpeed((prev) => prev - 0.1)}
                  >
                    +
                  </div>
                </div> */}
          </div>
        )}
      </div>
    </div>
  );
}
