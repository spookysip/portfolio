"use client";

import React, { useState, useLayoutEffect, useRef } from "react";

import ReactPlayer from "react-player";

import Popcorn from "../emojis/Popcorn";
import Soda from "../icons/Soda";

interface Props {
  theaterBannerRef: any;
  theaterAnimationDuration: any;
  handlePrev: any;
  handleNext: any;
  videoId: any;
  videos: any;
  playerRefs: any;
  videoUrls: any;
  playing: any;
  setPlaying: any;
}

export default function Theater({
  theaterBannerRef,
  theaterAnimationDuration,
  handlePrev,
  handleNext,
  videoId,
  videos,
  playerRefs,
  videoUrls,
  playing,
  setPlaying,
}: Props) {
  const [load, setLoad] = useState(false) as any;
  const [videoSize, setVideoSize] = useState({
    width: "100%",
    height: "auto",
  }) as any;

  const videoAspectRatio = 16 / 9;

  useLayoutEffect(() => {
    const windowWidth = window.innerWidth;
    const videoWidth = windowWidth;
    const videoHeight = videoWidth / videoAspectRatio;
    async function updateVideoSize() {
      setVideoSize({ width: "100%", height: videoHeight + 2 });
    }

    window.addEventListener("resize", updateVideoSize);
    updateVideoSize();

    return () => {
      window.removeEventListener("resize", updateVideoSize);
    };
  }, []);

  return (
    <div>
      <div className="theater-title">
        <div className="horizontal-scrolling-items">
          <div
            ref={theaterBannerRef}
            style={{ animationDuration: `${theaterAnimationDuration}s` }}
            className="horizontal-scrolling-items__item"
          >
            THEATER
            <Popcorn />
            THEATER
            <Popcorn />
            THEATER
            <Popcorn />
            THEATER
            <Popcorn />
            THEATER
            <Popcorn />
            THEATER
            <Popcorn />
            THEATER
            <Popcorn />
            THEATER
            <Popcorn />
            THEATER
            <Popcorn />
            THEATER
            <Popcorn />
            THEATER
            <Popcorn />
            THEATER
            <Popcorn />
          </div>

          <div className="horizontal-scrolling-items__item">
            THEATER
            <Popcorn />
            THEATER
            <Popcorn />
            THEATER
            <Popcorn />
            THEATER
            <Popcorn />
            THEATER
            <Popcorn />
            THEATER
            <Popcorn />
            THEATER
            <Popcorn />
            THEATER
            <Popcorn />
            THEATER
            <Popcorn />
            THEATER
            <Popcorn />
            THEATER
            <Popcorn />
            THEATER
            <Popcorn />
          </div>
        </div>
      </div>

      <div className="theater-parent">
        <div className="theater">
          <div className="theater-seek">
            <div
              className="theater-seek-prev"
              onClick={() => {
                handlePrev(videoId);
              }}
            >
              {/* <div>{"<"}</div> */}
              <div>PREV</div>
            </div>
            <div
              className="theater-seek-next"
              onClick={() => {
                handleNext(videoId);
              }}
            >
              <div>NEXT</div>
              {/* <div>{"->"}</div> */}
            </div>
          </div>

          {videos.map((video: any, index: any) => (
            <div key={video.id} className="player-parent">
              <div
                className={
                  videoId === video.id && videoId === 1 && load
                    ? "player-wrapper-1"
                    : videoId === video.id && videoId === 1 && !load
                    ? "player-hide"
                    : videoId === video.id && videoId === 2
                    ? "player-wrapper-2"
                    : videoId === video.id && videoId === 3
                    ? "player-wrapper-3"
                    : videoId === video.id && videoId === 4
                    ? "player-wrapper-4"
                    : undefined
                }
                style={{ display: videoId === video.id ? "block" : "none" }}
              >
                {!load && videoId === video.id && (
                  <div
                    className="video-load"
                    style={{
                      width: videoSize.width,
                      height: videoSize.height,
                    }}
                  >
                    <div>
                      <Soda />
                    </div>
                  </div>
                )}

                <ReactPlayer
                  ref={playerRefs.current[index]}
                  key={video.id}
                  url={videoUrls[index]}
                  // className={load ? "react-player" : "player-hide"}
                  // className={!load ? "" : "react-player"}
                  className={`react-player ${load ? "loaded" : ""}`}
                  controls={true}
                  loop={true}
                  playing={videoId === video.id && playing}
                  onReady={() => {
                    setTimeout(() => {
                      setLoad(true);
                    }, 300);
                  }}
                  onPlay={() => setPlaying(true)}
                  onPause={() => setPlaying(false)}
                  width="100%"
                  height="100%"
                  style={{ display: load ? "block" : "none" }}
                />
              </div>
            </div>
          ))}

          {videos.map(
            (video: any) =>
              videoId === video.id && (
                <div className="description-parent" key={video.id}>
                  <div className="video-title">
                    {video.title} - {video.year}
                  </div>
                  <div className="video-role">
                    Role:{" "}
                    <span className="video-role-highlight">{video.role}</span>
                  </div>
                  <div className="video-description">
                    {videoId === 1 && (
                      <span>
                        This is a "tonality teaser" from various inspirations
                        for my in progress graphic novel{" "}
                        <span className="video-description-highlight">
                          The Fall of Mann
                        </span>
                        . It tells the story of a cynical journalist named
                        <span
                          className="video-description-highlight"
                          style={{ animationDelay: ".3s" }}
                        >
                          {" "}
                          Murray
                        </span>{" "}
                        who is framed for the{" "}
                        <span
                          className="video-description-highlight"
                          style={{ animationDelay: ".6s" }}
                        >
                          first murder
                        </span>{" "}
                        in the isolated city of{" "}
                        <span
                          className="video-description-highlight"
                          style={{ animationDelay: ".9s" }}
                        >
                          Mann
                        </span>{" "}
                        and must now discover its{" "}
                        <span
                          className="video-description-highlight"
                          style={{ animationDelay: "1.2s" }}
                        >
                          true origins
                        </span>{" "}
                        to clear his name.
                      </span>
                    )}

                    {videoId === 2 && (
                      <span>
                        <span className="video-description-highlight">
                          Voicemail
                        </span>{" "}
                        is a short promotional piece I wrote and directed for a
                        local escape room. The room was themed to be the
                        basement of a serial killer who has kidnapped the police
                        chief's wife.
                      </span>
                    )}

                    {videoId === 3 && (
                      <span>
                        <span className="video-description-highlight">
                          Rescate{" "}
                        </span>{" "}
                        is a documentary that tells the story of the Rescate
                        Ambar volunteer Paramedics and their leader Reynaldo
                        Ortiz, a group that sacrifices sleep and safety to
                        provide medical attention to the thousands of motor
                        vehicle accidents that plague Dominican Republic.
                        Without government funding or proper equipment, the
                        Rescate team operate on a stretch of road that has been
                        ranked one of the most dangerous in the world.
                      </span>
                    )}

                    {videoId === 4 && (
                      <span>
                        <span className="video-description-highlight">
                          Vast Expansion
                        </span>{" "}
                        is a short experimental film I wrote, filmed with a
                        friend and edited. It explores the concepts of what
                        truth can mean outside of perception.
                      </span>
                    )}
                  </div>

                  {videoId === 3 && (
                    <div className="awards">
                      <img
                        className="awards-pic-1"
                        src="/Awards_1.jpg"
                        alt="Rescate Awards 1"
                      />

                      <img
                        className="awards-pic-2"
                        src="/Awards_2.jpg"
                        alt="Rescate Awards 2"
                      />
                    </div>
                  )}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
