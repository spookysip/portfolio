"use client";

import ReactPlayer from "react-player";
import ResponsiveEmbed from "react-responsive-embed";

import Popcorn from "../emojis/Popcorn";

interface Props {
  theaterElement: any;
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
  theaterElement,
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
  return (
    <div>
      <div ref={theaterElement} />

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
          <div>
            <div className="theater-seek">
              <div
                className="theater-seek-prev"
                onClick={() => {
                  handlePrev(videoId);
                }}
              >
                <div>{"<"}</div>
                <div>PREV</div>
              </div>
              <div
                className="theater-seek-next"
                onClick={() => {
                  handleNext(videoId);
                }}
              >
                <div>NEXT</div>
                <div>{">"}</div>
              </div>
            </div>

            {videos.map((video: any, index: any) => (
              <div key={video.id}>
                <div
                  className="player-wrapper"
                  style={{ display: videoId === video.id ? "block" : "none" }}
                >
                  <ReactPlayer
                    ref={playerRefs.current[index]}
                    url={videoUrls[index]}
                    className="react-player"
                    controls={true}
                    loop={true}
                    playing={videoId === video.id && playing}
                    onPlay={() => setPlaying(true)}
                    onPause={() => setPlaying(false)}
                  />
                  <div className="description-parent">
                    <div className="video-title">{video.title}</div>
                    <div className="video-role">
                      Role:{" "}
                      <span className="video-role-highlight">{video.role}</span>
                    </div>
                    <div className="video-description">Description</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
