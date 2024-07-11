"use client";

import Monster from "../icons/Monster";
import Eye from "../emojis/Eye";

interface Props {
  stackElement: any;
  customStack: any;
  monsterHit: any;
  cornerClass: any;
  gamePower: any;
  techDisplay: any;
  setStackTitle: any;
  setTechDisplay: any;
  consolidatedStack: any;
  clickCustomStack: any;
  score: any;
  hitMonster: any;
  stackTitle: any;
  playGame: any;
  customStackRef: any;
  customStackAnimationDuration: any;
}

export default function CustomStack({
  stackElement,
  customStack,
  monsterHit,
  cornerClass,
  gamePower,
  techDisplay,
  setStackTitle,
  setTechDisplay,
  consolidatedStack,
  clickCustomStack,
  score,
  hitMonster,
  stackTitle,
  playGame,
  customStackRef,
  customStackAnimationDuration,
}: Props) {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="title">
        <div ref={stackElement} />

        <div
          className={
            !customStack && monsterHit
              ? `game-section game-background ${cornerClass}`
              : !customStack && !monsterHit
              ? `game-section ${cornerClass}`
              : "custom-stack"
          }
        >
          {!customStack && (
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
        {!customStack && (
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
