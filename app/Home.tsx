"use client";

import "./home.scss";
import Link from "./icons/Link";
import ExperienceLink from "./icons/ExperienceLink";
import Download from "./icons/Download";
import Clipboard from "./icons/Clipboard";
import React, { useEffect, useState, useRef, createRef } from "react";
import Clock from "./icons/Clock";
import Monster from "./icons/Monster";
import MonsterIcon from "./icons/MonsterIcon";
import ReactPlayer from "react-player";

import Developer1 from "./joyride/Developer1";
import Developer2 from "./joyride/Developer2";
import Developer3 from "./joyride/Developer3";

import Admin1 from "./joyride/Admin1";
import Admin2 from "./joyride/Admin2";
import Admin3 from "./joyride/Admin3";

import Media1 from "./joyride/Media1";
import Media2 from "./joyride/Media2";
import Media3 from "./joyride/Media3";

import Frog from "./emojis/Frog";
import TV from "./emojis/TV";
import Floppy from "./emojis/Floppy";
import Folder from "./emojis/Folder";
import Dragon from "./emojis/Dragon";
import Eye from "./emojis/Eye";
import TrackballMobile from "./emojis/TrackballMobile";
import TrackballDesktop from "./emojis/TrackballDesktop";
import Crystal from "./emojis/Crystal";
import Devil from "./emojis/Devil";
import Popcorn from "./emojis/Popcorn";

interface Tech {
  id: Number;
  name: String;
  type: String;
  selected: Boolean;
}

interface Props {
  tech: Array<Tech>;
}

export default function Home({ tech }: Props) {
  const [techDisplay, setTechDisplay] = useState(tech) as any;
  const [scrolled, setScrolled] = useState(0) as any;
  const [copy, setCopy] = useState(false) as any;
  const [download, setDownload] = useState(false) as any;
  const [stackTitle, setStackTitle] = useState("") as any;
  const [animationSpeed, setAnimationSpeed] = useState(4);
  const [score, setScore] = useState(0) as any;
  const [monsterHit, setMonsterHit] = useState(false) as any;
  // const [videoUrl, setVideoUrl] = useState(
  //   "https://vimeo.com/112625544"
  // ) as any;
  const [videoId, setVideoId] = useState(1);
  const stackElement = useRef() as any;
  const theaterElement = useRef() as any;
  const [videos, setVideos] = useState([
    {
      id: 1,
      url: "https://vimeo.com/112625544",
      title: "VAST EXPANSION",
      role: "Writer~Director~Editor",
    },
    {
      id: 2,
      url: "https://vimeo.com/238017469",
      title: "VOICEMAIL",
      role: "Writer~Director~Editor",
    },
    {
      id: 3,
      url: "https://vimeo.com/245921296",
      title: "RESCATE",
      role: "Additional Editor",
    },
    {
      id: 4,
      url: "https://drive.google.com/file/d/1Tdl47a9dvRxTMOLtSSt71opD7z58vCFL/preview",
      title: "THE FALL OF MANN (CONCEPT TEASER)",
      role: "Editor",
    },
  ]) as any;
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    })();
  }, []);

  const avatarRef = useRef(null);
  const isDragging = useRef(false);
  const prevMouseX = useRef(0);

  useEffect(() => {
    if (!isDragging.current) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  function handleScroll() {
    let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop,
      height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    setScrolled((winScroll / height) * 100);
  }

  const handleMouseDown = (e: any) => {
    isDragging.current = true;
    prevMouseX.current = e.clientX;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: any) => {
    // console.log(scrolled);

    if (isDragging.current) {
      console.log(e.clientX, document.documentElement.clientWidth);
      prevMouseX.current = e.clientX;
      const widthPercentage =
        (e.clientX / document.documentElement.clientWidth) * 100 + 2;

      if (
        e.clientX < document.documentElement.clientWidth - 13 &&
        widthPercentage > 0
      ) {
        setScrolled(widthPercentage);
      }

      window.scrollTo({
        top: document.documentElement.clientHeight * (widthPercentage / 100),
      });
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const groupedData = techDisplay.reduce((acc: any, obj: any) => {
    const type = obj.type;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(obj);
    return acc;
  }, {});

  function handleDownload() {
    const pdfURL = "/Matt_Laughlin_Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfURL;
    link.download = "Matt_Laughlin_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function clickCustomStack(item: any) {
    setTechDisplay((previous: any) =>
      previous.map((tech: any) =>
        tech.id === item.id
          ? {
              ...tech,
              selected: false,
            }
          : tech
      )
    );
  }

  const playerRefs = useRef(videos.map(() => createRef<ReactPlayer>()));

  const handlePrev = (id: any) => {
    const currentIndex = videos.findIndex((video: any) => video.id === videoId);
    const newId = videoId > 1 ? videoId - 1 : 4;

    const currentPosition =
      playerRefs.current[currentIndex].current.getCurrentTime();

    if (currentPosition > 0) {
      const updatedUrls = [...videoUrls];
      updatedUrls[currentIndex] = "";
      setVideoUrls(updatedUrls);

      if (playerRefs.current[currentIndex].current) {
        playerRefs.current[currentIndex].current.seekTo(0);
      }

      setTimeout(() => {
        updatedUrls[currentIndex] = videos[currentIndex].url;
        setVideoUrls(updatedUrls);
      }, 10);
    }

    setVideoId(newId);
    setPlaying(false);
  };

  const [videoUrls, setVideoUrls] = useState(
    videos.map((video: any) => video.url)
  );

  const handleNext = (id: any) => {
    const currentIndex = videos.findIndex((video: any) => video.id === videoId);
    const newId = videoId < 4 ? videoId + 1 : 1;

    const currentPosition =
      playerRefs.current[currentIndex].current.getCurrentTime();

    if (currentPosition > 0) {
      const updatedUrls = [...videoUrls];
      updatedUrls[currentIndex] = "";
      setVideoUrls(updatedUrls);

      if (playerRefs.current[currentIndex].current) {
        playerRefs.current[currentIndex].current.seekTo(0);
      }

      setTimeout(() => {
        updatedUrls[currentIndex] = videos[currentIndex].url;
        setVideoUrls(updatedUrls);
      }, 1);
    }

    setVideoId(newId);
    setPlaying(false);
  };

  // function videoSort(id: any) {
  //   const findVideo = videos.filter((video) => video.id === id)[0];
  //   // console.log(findVideo);
  //   setVideoUrl(findVideo.url);
  // }

  const consolidateStackMap = {} as any;
  const selectedArray = techDisplay.filter((item: any) => item.selected);

  const consolidatedStack = selectedArray.filter((item: any) => {
    if (!consolidateStackMap[item.name]) {
      consolidateStackMap[item.name] = true;
      return true;
    }
    return false;
  });

  const getRandomNumber = () => (Math.random() * 180 - 90).toFixed(2);

  const customStack =
    techDisplay.filter((item: any) => item.selected).length > 0;

  const getRandomMargin = () => {
    const marginTop = getRandomNumber();
    const marginLeft = getRandomNumber();
    return { marginTop, marginLeft };
  };

  const [margin, setMargin] = useState(getRandomMargin());

  useEffect(() => {
    const interval = setInterval(() => {
      setMargin(getRandomMargin());
    }, 700);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="all">
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{
            width: scrolled + "%",
          }}
        ></div>
        <div
          className="progress-monster"
          ref={avatarRef}
          // onMouseDown={handleMouseDown}
          style={{
            marginLeft: scrolled + "%",
          }}
        >
          <MonsterIcon />
        </div>
      </div>

      <div className="name-container">
        <div className="horizontal-scrolling-items-name">
          <div className="horizontal-scrolling-items__item">
            <span className="english-name">
              <span className="english-name">MATT LAUGHLIN</span>
            </span>
            <span className="emoji-frog">
              <Frog />
            </span>
            マット ロフリン
            <span className="emoji-frog">
              <Frog />
            </span>
            <span className="english-name">MATT LAUGHLIN</span>
            <span className="emoji-frog">
              <Frog />
            </span>
            マット ロフリン
            <span className="emoji-frog">
              <Frog />
            </span>
            <span className="english-name">MATT LAUGHLIN</span>
            <span className="emoji-frog">
              <Frog />
            </span>
            マット ロフリン
            <span className="emoji-frog">
              <Frog />
            </span>{" "}
            <span className="english-name">MATT LAUGHLIN</span>
            <span className="emoji-frog">
              <Frog />
            </span>
            マット ロフリン
            <span className="emoji-frog">
              <Frog />
            </span>
            <span className="english-name">MATT LAUGHLIN</span>
            <span className="emoji-frog">
              <Frog />
            </span>
            マット ロフリン
            <span className="emoji-frog">
              <Frog />
            </span>
            <span className="english-name">MATT LAUGHLIN</span>
            <span className="emoji-frog">
              <Frog />
            </span>
            マット ロフリン
            <span className="emoji-frog">
              <Frog />
            </span>
          </div>

          <div className="name-horizontal-scrolling-items__item">
            <span className="english-name">MATT LAUGHLIN</span>
            <Frog />
            マット ロフリン
            <Frog />
            <span className="english-name">MATT LAUGHLIN</span>
            <Frog />
            マット ロフリン
            <Frog />
            <span className="english-name">MATT LAUGHLIN</span>
            <Frog />
            マット ロフリン
            <Frog />
            <span className="english-name">MATT LAUGHLIN</span>
            <Frog />
            マット ロフリン
            <Frog />
            <span className="english-name">MATT LAUGHLIN</span>
            <Frog />
            マット ロフリン
            <Frog />
            <span className="english-name">MATT LAUGHLIN</span>
            <Frog />
            マット ロフリン
            <Frog />
          </div>
        </div>
      </div>

      <div className="role">
        <div className="horizontal-scrolling-items-role">
          <div className="horizontal-scrolling-items__item">
            <Developer1 />
            <Folder />
            <Admin1 />
            <span>
              <TV />
            </span>
            <Media1 />
            <Floppy />
            <Developer2 />
            <Folder />
            <Admin2 />
            <span>
              <TV />
            </span>
            <Media2 />
            <Floppy />
            <Developer3 />
            <Folder />
            <Admin3 />
            <span>
              <TV />
            </span>
            <Media3 />
            <Floppy />
            <Developer1 />
            <Folder />
            <Admin1 />
            <span>
              <TV />
            </span>
            <Media1 />
            <Floppy />
            <Developer2 />
            <Folder />
            <Admin2 />
            <span>
              <TV />
            </span>
            <Media2 />
            <Floppy />
            <Developer3 />
            <Folder />
            <Admin3 />
            <span>
              <TV />
            </span>
            <Media3 />
            <Floppy />
          </div>

          <div className="horizontal-scrolling-items__item">
            <Developer1 />
            🗂️
            <Admin1 />
            📺
            <Media1 />
            💾
            <Developer2 />
            🗂️
            <Admin2 />
            📺
            <Media1 />
            💾
            <Developer3 />
            🗂️
            <Admin3 />
            📺
            <Media1 />
            💾
            <Developer1 />
            🗂️
            <Admin1 />
            📺
            <Media1 />
            💾
            <Developer2 />
            🗂️
            <Admin2 />
            📺
            <Media1 />
            💾
            <Developer3 />
            🗂️
            <Admin3 />
            📺
            <Media1 />
            💾
          </div>
        </div>
      </div>

      <div className="top">
        <div className="about">
          <div className="title">
            <div className="mobile-links">
              <div className="mobile-link-parent">
                <div className="horizontal-scrolling-items-link">
                  <div className="horizontal-scrolling-items__item">
                    Links
                    <TrackballMobile />
                    Links
                    <TrackballMobile />
                    Links
                    <TrackballMobile />
                    Links
                    <TrackballMobile />
                    Links
                    <TrackballMobile />
                    Links
                    <TrackballMobile />
                    Links
                    <TrackballMobile />
                    Links
                    <TrackballMobile />
                    Links
                    <TrackballMobile />
                    Links
                    <TrackballMobile />
                    Links
                    <TrackballMobile />
                    Links
                    <TrackballMobile />
                  </div>

                  <div className="horizontal-scrolling-items__item">
                    Links
                    <TrackballMobile />
                    Links
                    <TrackballMobile />
                    Links
                    <TrackballMobile />
                    Links
                    <TrackballMobile />
                    Links
                    <TrackballMobile />
                    Links
                    <TrackballMobile />
                    Links
                    <TrackballMobile />
                    Links
                    <TrackballMobile />
                    Links
                    <TrackballMobile />
                    Links
                    <TrackballMobile />
                    Links
                    <TrackballMobile />
                    Links
                    <TrackballMobile />
                  </div>
                </div>
              </div>

              <div className="mobile-links-row-1">
                <div
                  className="mobile-link mobile-link-border-right"
                  onClick={() => window.open("https://github.com/spookysip")}
                >
                  💽 GitHub
                  <div className="link-icon link-color">
                    <Link />
                  </div>
                </div>
                <div
                  className="mobile-link"
                  onClick={() =>
                    window.open("https://linkedin.com/in/mattclaughlin")
                  }
                >
                  🤝 LinkedIn
                  <span className="link-icon link-color">
                    <Link />
                  </span>
                </div>
              </div>

              <div className="mobile-links-row-2">
                <div
                  className="mobile-link mobile-link-border-right"
                  onClick={() => {
                    navigator.clipboard.writeText("hi@mattlaughl.in");
                    setCopy(true),
                      setTimeout(() => {
                        setCopy(false);
                      }, 3000);
                  }}
                >
                  📬 Copy Email
                  <span
                    className={!copy ? "link-icon link-color" : "link-icon"}
                  >
                    <Clipboard copy={copy} />
                  </span>
                </div>
                <div
                  className="mobile-link"
                  onClick={() => {
                    setDownload(true),
                      handleDownload(),
                      setTimeout(() => {
                        setDownload(false);
                      }, 3000);
                  }}
                >
                  📜 Resume
                  <span
                    className={!download ? "link-icon link-color" : "link-icon"}
                  >
                    <Download download={download} />
                  </span>
                </div>
              </div>
            </div>

            <div ref={stackElement} />

            <div
              className={
                !customStack && monsterHit
                  ? "section game-background"
                  : !customStack && !monsterHit
                  ? "section"
                  : "custom-stack"
              }
            >
              {!customStack && (
                <div
                  className="move"
                  // style={{
                  //   animationDuration: `${animationSpeed}s`,
                  //   marginTop: `${margin.marginTop}%`,
                  //   marginLeft: `${margin.marginLeft}%`,
                  // }}
                  onClick={() => {
                    setScore((prev: any) => prev + 1);
                    setMonsterHit(true);
                    setTimeout(() => {
                      setCopy(false);
                      setMonsterHit(false);
                    }, 30);
                  }}
                >
                  <Monster />
                </div>
              )}

              {customStack && (
                <div>
                  <div className="custom-type">
                    {stackTitle === "" ? (
                      <div className="custom-stack-title">
                        <div className="horizontal-scrolling-items">
                          <div className="horizontal-scrolling-items__item">
                            Your Stack
                            <Eye />
                            Your Stack
                            <Eye />
                            Your Stack
                            <Eye />
                            Your Stack
                            <Eye />
                            Your Stack
                            <Eye />
                            Your Stack
                            <Eye />
                            Your Stack
                            <Eye />
                            Your Stack
                            <Eye />
                            Your Stack
                            <Eye />
                            Your Stack
                            <Eye />
                            Your Stack
                            <Eye />
                            Your Stack
                            <Eye />
                          </div>

                          <div className="horizontal-scrolling-items__item">
                            Your Stack
                            <Eye />
                            Your Stack
                            <Eye />
                            Your Stack
                            <Eye />
                            Your Stack
                            <Eye />
                            Your Stack
                            <Eye />
                            Your Stack
                            <Eye />
                            Your Stack
                            <Eye />
                            Your Stack
                            <Eye />
                            Your Stack
                            <Eye />
                            Your Stack
                            <Eye />
                            Your Stack
                            <Eye />
                            Your Stack
                            <Eye />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="custom-stack-title">
                        <div className="horizontal-scrolling-items">
                          <div className="horizontal-scrolling-items__item">
                            {stackTitle} Stack
                            <Eye />
                            {stackTitle} Stack
                            <Eye />
                            {stackTitle} Stack
                            <Eye />
                            {stackTitle} Stack <Eye />
                            {stackTitle} Stack
                            <Eye />
                            {stackTitle} Stack <Eye />
                            {stackTitle} Stack <Eye />
                            {stackTitle} Stack
                            <Eye />
                            {stackTitle} Stack <Eye />
                            {stackTitle} Stack <Eye />
                            {stackTitle} Stack
                            <Eye />
                            {stackTitle} Stack <Eye />
                          </div>

                          <div className="horizontal-scrolling-items__item">
                            Custom Stack: {stackTitle}
                            <Eye />
                            Custom Stack -{stackTitle} <Eye />
                            Custom Stack - {stackTitle}
                            <Eye />
                            Custom Stack - {stackTitle}
                            <Eye />
                            Custom Stack - {stackTitle}
                            <Eye />
                            Custom Stack - {stackTitle}
                            <Eye />
                            Custom Stack - {stackTitle}
                            <Eye />
                            Custom Stack - {stackTitle}
                            <Eye />
                            Custom Stack - {stackTitle}
                            <Eye />
                            Custom Stack - {stackTitle}
                            <Eye />
                            Custom Stack - {stackTitle}
                            <Eye />
                            Custom Stack - {stackTitle}
                            <Eye />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="custom-stack-section">
                    {techDisplay.filter((item: any) => item.selected).length >
                      4 && (
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
                <div>Start</div>

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

            <div className="desktop-links">
              <div className="link-title">
                <div className="horizontal-scrolling-items-link">
                  <div className="horizontal-scrolling-items__item">
                    Links
                    <TrackballDesktop />
                    Links
                    <TrackballDesktop />
                    Links
                    <TrackballDesktop />
                    Links
                    <TrackballDesktop />
                    Links
                    <TrackballDesktop />
                    Links
                    <TrackballDesktop />
                    Links
                    <TrackballDesktop />
                    Links
                    <TrackballDesktop />
                    Links
                    <TrackballDesktop />
                    Links
                    <TrackballDesktop />
                    Links
                    <TrackballDesktop />
                    Links
                    <TrackballDesktop />
                  </div>

                  <div className="horizontal-scrolling-items__item">
                    Links
                    <TrackballDesktop />
                    Links
                    <TrackballDesktop />
                    Links
                    <TrackballDesktop />
                    Links
                    <TrackballDesktop />
                    Links
                    <TrackballDesktop />
                    Links
                    <TrackballDesktop />
                    Links
                    <TrackballDesktop />
                    Links
                    <TrackballDesktop />
                    Links
                    <TrackballDesktop />
                    Links
                    <TrackballDesktop />
                    Links
                    <TrackballDesktop />
                    Links
                    <TrackballDesktop />
                  </div>
                </div>
              </div>

              <div
                className="link-parent-first"
                onClick={() => window.open("https://github.com/spookysip")}
              >
                <div>💽 GitHub</div>
                <span className="link-icon link-color">
                  <Link />
                </span>
              </div>

              <div
                className="link-parent"
                onClick={() =>
                  window.open("https://linkedin.com/in/mattclaughlin")
                }
              >
                <div>🤝 LinkedIn</div>
                <span className="link-icon link-color">
                  <Link />
                </span>
              </div>

              <div
                className="link-parent"
                onClick={() => {
                  navigator.clipboard.writeText("hi@mattlaughl.in");
                  setCopy(true),
                    setTimeout(() => {
                      setCopy(false);
                    }, 3000);
                }}
              >
                <div>📬 Copy Email</div>
                <span className={!copy ? "link-icon link-color" : "link-icon"}>
                  <Clipboard copy={copy} />
                </span>
              </div>

              <div
                className="link-parent"
                onClick={() => {
                  setDownload(true),
                    handleDownload(),
                    setTimeout(() => {
                      setDownload(false);
                    }, 3000);
                }}
              >
                <div>📜 Resume</div>
                <span
                  className={!download ? "link-icon link-color" : "link-icon"}
                >
                  <Download download={download} />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="skills">
          <div className="technologies-title">
            <div className="horizontal-scrolling-items">
              <div className="horizontal-scrolling-items__item">
                Technologies
                <Dragon />
                Technologies
                <Dragon />
                Technologies
                <Dragon />
                Technologies
                <Dragon />
                Technologies
                <Dragon />
                Technologies
                <Dragon />
                Technologies
                <Dragon />
                Technologies
                <Dragon />
                Technologies
                <Dragon />
                Technologies
                <Dragon />
                Technologies
                <Dragon />
                Technologies
                <Dragon />
              </div>

              <div className="horizontal-scrolling-items__item">
                Technologies
                <Dragon />
                Technologies
                <Dragon />
                Technologies
                <Dragon />
                Technologies
                <Dragon />
                Technologies
                <Dragon />
                Technologies
                <Dragon />
                Technologies
                <Dragon />
                Technologies
                <Dragon />
                Technologies
                <Dragon />
                Technologies
                <Dragon />
                Technologies
                <Dragon />
                Technologies
                <Dragon />
              </div>
            </div>
          </div>

          <div className="skill-section-parent">
            {Object.keys(groupedData).map(
              (type) =>
                techDisplay.filter(
                  (item: any) => item.type === type && !item.selected
                ).length > 0 && (
                  <div key={type} className="skill-section">
                    <div className="type">{type}</div>

                    <div className="options">
                      {groupedData[type].map(
                        (item: any) =>
                          !item.selected && (
                            <div
                              key={item.id}
                              className="item"
                              onClick={() =>
                                setTechDisplay((previous: any) =>
                                  previous.map((tech: any) =>
                                    tech.id === item.id
                                      ? {
                                          ...tech,
                                          selected: true,
                                        }
                                      : tech
                                  )
                                )
                              }
                            >
                              {item.name}
                            </div>
                          )
                      )}
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>

      <div ref={theaterElement} />

      <div className="theater-title">
        <div className="horizontal-scrolling-items">
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
        <div className="theater">
          <div>
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

      <div className="container container-border-top">
        <div className="horizontal-scrolling-items">
          <div className="horizontal-scrolling-items__item">
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
          </div>

          <div className="horizontal-scrolling-items__item">
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
          </div>
        </div>
      </div>

      <div className="experience-parent">
        <div className="experience-inline">
          <div className="experience-item experience-border-1">
            <div
              className="website website-1 animate-1"
              onClick={() => window.open("https://cozypunk.io")}
            >
              <span className="website-text">cozyPunk</span>
              <span className="experience-link">
                <ExperienceLink color={"#ffc83d"} />
              </span>
            </div>

            <div className="experience-summary">
              🍵{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "0.3s",
                }}
              >
                cozyPunk
              </span>{" "}
              is a{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "0.6s",
                }}
              >
                "passion product"
              </span>{" "}
              I created to be a comforting study buddy that makes working feel
              like a game. It allows users to play relaxing music and
              soundscapes, keep track of quests to achieve, and run
              campaign/rest timers.
            </div>

            <div className="experience-title-1">
              Full-Stack Developer & UI/UX Designer
            </div>
            <div className="timeframe-section-1">
              <Clock fill={"#9475bf"} stroke={"#483285"} />
              <div className="timeframe-1">Jan. 2023 - Present</div>
            </div>
            <div className="highlight-section">
              <ul className="highlights">
                <li className="highlight-item">
                  💻 Developed a feature-rich, full-stack web application{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "0.9s",
                    }}
                  >
                    from concept to production
                  </span>
                </li>

                <div
                  className="create-stack-1"
                  onClick={() => {
                    setStackTitle("cozyPunk"),
                      setTechDisplay((previous: any) =>
                        previous.map((tech: any) =>
                          tech.id === 1 ||
                          tech.id === 2 ||
                          tech.id === 3 ||
                          tech.id === 5 ||
                          tech.id === 7 ||
                          tech.id === 9 ||
                          tech.id === 10 ||
                          tech.id === 11 ||
                          tech.id === 25 ||
                          tech.id === 31 ||
                          tech.id === 4 ||
                          tech.id === 8 ||
                          tech.id === 32 ||
                          tech.id === 33 ||
                          tech.id === 35
                            ? {
                                ...tech,
                                selected: true,
                              }
                            : tech
                        )
                      ),
                      stackElement.current.scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                >
                  Create Stack ☝️
                </div>

                <li className="highlight-item">
                  🎨 Designed a custom UI/UX{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "1.2s",
                    }}
                  >
                    for the entire site
                  </span>
                  . Utilized Adobe XD and Figma to translate designs and svg's
                  into a custom and fully responsive css design system.
                </li>

                <li className="highlight-item">
                  📋 Seamlessly integrated a{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "1.5s",
                    }}
                  >
                    robust MySQL database solution{" "}
                  </span>
                  , optimizing data storage and retrieval processes. Implemented
                  effective data schemas and management strategies , ensuring
                  data integrity, security, and scalability.
                </li>

                <li className="highlight-item-bottom">
                  ⛟ Continually{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "1.8s",
                    }}
                  >
                    designing, coding and shipping
                  </span>{" "}
                  new features, auditing and improving infrastructure
                  development and refactoring the current codebase for improved
                  performance.
                </li>
              </ul>
            </div>
          </div>

          <div className="experience-item experience-border-2">
            <div className="website-no-link website-2 animate">
              <span>The Fall of Mann</span>
            </div>

            <div className="experience-summary">
              The Fall of Mann is a{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "1.8s",
                }}
              >
                graphic novel
              </span>{" "}
              that I wrote and is currently in the first draft phase. It tells
              the story of a cynical journalist named{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "1.8s",
                }}
              >
                Murray
              </span>{" "}
              who is framed for the{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "1.8s",
                }}
              >
                first murder
              </span>{" "}
              in the isolated city of{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "1.8s",
                }}
              >
                Mann
              </span>{" "}
              and must now discover its{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "1.8s",
                }}
              >
                true origins
              </span>{" "}
              to clear their name.
            </div>

            <div className="experience-title-2">Writer</div>
            <div className="timeframe-section-2">
              <Clock fill={"#ed702d"} stroke={"#4B230E"} />
              <div className="timeframe-2">Dec. 2021 - Present</div>
            </div>

            <div className="highlight-section">
              {" "}
              <div
                className="create-stack-2"
                onClick={() => {
                  setVideoId(4);
                  theaterElement.current.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Watch Teaser 👆
              </div>
            </div>
          </div>

          <div className="experience-item experience-border-3">
            <div
              className="website website-3 animate-3"
              onClick={() => window.open("https://filmsupply.com")}
            >
              <span className="website-text">Filmsupply</span>
              <span className="experience-link">
                <ExperienceLink color={"#9475bf"} />
              </span>
            </div>
            <div
              className="website-right website-4 animate-4"
              onClick={() => window.open("https://musicbed.com")}
            >
              <span className="website-text">Musicbed</span>
              <span className="experience-link">
                <ExperienceLink color={"#9475bf"} />
              </span>
            </div>

            <div className="experience-summary">
              🎥{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: ".21s",
                }}
              >
                Filmsupply and 🎹 Musicbed
              </span>{" "}
              are sister companies dedicated to supporting creatives through
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "2.4s",
                }}
              >
                &nbsp;licensing premium footage and music
              </span>
              . I had the opportunity to create an internal back end server and
              client to manage the footage curation pipeline and create another
              client to communicate its progress to filmmakers.
            </div>

            <div className="experience-title-3">Product Manager</div>

            <div className="timeframe-section-3">
              <Clock fill={"#ffff00"} stroke={"#363600"} />
              <div className="timeframe-3">Jul. 2020 - Nov. 2021</div>
            </div>
            <div className="highlight-section">
              <ul className="highlights">
                <li className="highlight-item">
                  💾 Spearheaded and implemented the development and continual
                  maintenance of a{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "2.7s",
                    }}
                  >
                    full-stack application
                  </span>{" "}
                  for Filmsupply's content department. Back End: MySQL database
                  // REST API // NodeJS/Express server built behind a Forest
                  Admin application. Front End: React.
                </li>

                <li className="highlight-item">
                  🏠 Delivered continued architecture imporvements for services
                  within{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "3.0s",
                    }}
                  >
                    AWS
                  </span>
                  . Back End: NodeJS/Express server deployed to Lambda function
                  through the serverless framework and accessed through API
                  Gateway. Front End: React App deployed through Amplify.
                </li>

                <li className="highlight-item">
                  📎 Maintained integrity with{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "3.3s",
                    }}
                  >
                    third party API's
                  </span>
                  , improved existing codebases through refactoring strategies
                  and contributed to the transition of legacy monolithic
                  architecture to microservices.
                </li>

                <li className="highlight-item">
                  ✒️ Contributed to{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "3.6s",
                    }}
                  >
                    5+ repositories weekly
                  </span>
                  . Responsible for architecture support, front end stories in
                  React and back end stories in NodeJS/Express within any given
                  sprint.
                </li>
              </ul>
            </div>

            <div className="experience-title-3">Full-Stack Developer</div>

            <div className="timeframe-section-3">
              <Clock fill={"#ffff00"} stroke={"#363600"} />
              <div className="timeframe-3">Jan. 2020 - Jun. 2021</div>
            </div>
            <div className="highlight-section">
              <ul className="highlights">
                <li className="highlight-item">
                  💾 Spearheaded and implemented the development and continual
                  maintenance of a{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "2.7s",
                    }}
                  >
                    full-stack application
                  </span>{" "}
                  for Filmsupply's content department.
                </li>

                <div
                  className="create-stack-3"
                  onClick={() => {
                    setStackTitle("Filmsupply & Musicbed"),
                      setTechDisplay((previous: any) =>
                        previous.map((tech: any) =>
                          tech.id === 2 ||
                          tech.id === 3 ||
                          tech.id === 4 ||
                          tech.id === 5 ||
                          tech.id === 6 ||
                          tech.id === 7 ||
                          tech.id === 8 ||
                          tech.id === 9 ||
                          tech.id === 15 ||
                          tech.id === 16 ||
                          tech.id === 17 ||
                          tech.id === 19 ||
                          tech.id === 20 ||
                          tech.id === 21 ||
                          tech.id === 22 ||
                          tech.id === 23 ||
                          tech.id === 24 ||
                          tech.id === 25 ||
                          tech.id === 26 ||
                          tech.id === 27 ||
                          tech.id === 28 ||
                          tech.id === 29 ||
                          tech.id === 30 ||
                          tech.id === 34 ||
                          tech.id === 36
                            ? {
                                ...tech,
                                selected: true,
                              }
                            : tech
                        )
                      ),
                      stackElement.current.scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                >
                  Create Stack ⬆️
                </div>

                <li className="highlight-item">
                  🏠 Delivered continued architecture imporvements for services
                  within{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "3.0s",
                    }}
                  >
                    AWS
                  </span>
                  . Back End: NodeJS/Express server deployed to Lambda function
                  through the serverless framework and accessed through API
                  Gateway. Front End: React App deployed through Amplify.
                </li>

                <li className="highlight-item">
                  📎 Maintained integrity with{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "3.3s",
                    }}
                  >
                    third party API's
                  </span>
                  , improved existing codebases through refactoring strategies
                  and contributed to the transition of legacy monolithic
                  architecture to microservices.
                </li>

                <li className="highlight-item">
                  ✒️ Contributed to{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "3.6s",
                    }}
                  >
                    5+ repositories weekly
                  </span>
                  . Responsible for architecture support, front end stories in
                  React and back end stories in NodeJS/Express within any given
                  sprint.
                </li>
              </ul>
            </div>

            <div className="experience-title-3">Administrative Coordinator</div>

            <div className="timeframe-section-3">
              <Clock fill={"#ffff00"} stroke={"#363600"} />
              <div className="timeframe-3">Nov. 2018 - Dec. 2019</div>
            </div>
            <div className="highlight-section">
              <ul className="highlights">
                <li className="highlight-item">
                  Helped develop and maintain department goals and implemented
                  organizational systems to measure progress and milestone
                  achievements.
                </li>

                <li className="highlight-item">
                  Built and utilized various workflows and technologies to
                  streamline productivity across multiple departmental
                  pipelines.
                </li>

                <li className="highlight-item">
                  Coordinated with other departments to determine the most
                  efficient strategies to collaborate and share data and
                  knowledge.
                </li>

                <li className="highlight-item">
                  Maintained departmental databases and organized reports to
                  send to leadership for daily performance metics and
                  operational implementation.
                </li>
              </ul>
            </div>

            <div className="experience-title-3">Marketing Coordinator</div>

            <div className="timeframe-section-3">
              <Clock fill={"#ffff00"} stroke={"#363600"} />
              <div className="timeframe-3">Jul. 2018 - Oct. 2018</div>
            </div>
            <div className="highlight-section">
              <ul className="highlights">
                <li className="highlight-item">
                  Reached out to new perspective filmmakers, signing over 140+
                  to contribute footage to Filmsupply.
                </li>

                <li className="highlight-item">
                  Managed ongoing relationships and maintained daily
                  correspondence with the filmmakers Isigned, answering any
                  questions they presented and coordinated with them to
                  determine new collaboration opportunities.
                </li>

                <li className="highlight-item">
                  Utilized various technologies to lead the development of sales
                  pipelines to scale the most efficient onboarding process for
                  new filmmakers.
                </li>

                <li className="highlight-item">
                  Traveled and represented the company at industry events where
                  Ipromoted the company at trade shows and scouted new
                  opportunities with other companies.
                </li>
              </ul>
            </div>

            <div className="experience-title-3">Account Manager</div>

            <div className="timeframe-section-3">
              <Clock fill={"#ffff00"} stroke={"#363600"} />
              <div className="timeframe-3">Nov. 2016 - Jun. 2018</div>
            </div>
            <div className="highlight-section">
              <ul className="highlights">
                <li className="highlight-item">
                  Reached out to new perspective filmmakers, signing over 140+
                  to contribute footage to Filmsupply.
                </li>

                <li className="highlight-item">
                  Managed ongoing relationships and maintained daily
                  correspondence with the filmmakers Isigned, answering any
                  questions they presented and coordinated with them to
                  determine new collaboration opportunities.
                </li>

                <li className="highlight-item">
                  Utilized various technologies to lead the development of sales
                  pipelines to scale the most efficient onboarding process for
                  new filmmakers.
                </li>

                <li className="highlight-item">
                  Traveled and represented the company at industry events where
                  Ipromoted the company at trade shows and scouted new
                  opportunities with other companies.
                </li>
              </ul>
            </div>
          </div>

          <div className="experience-item experience-border-4">
            <div className="website-no-link website-5">
              <span className="website-text">Daystar</span>
            </div>

            <div className="experience-summary">
              🍵{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "0.3s",
                }}
              >
                cozyPunk
              </span>{" "}
              is a{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "0.6s",
                }}
              >
                "passion product"
              </span>{" "}
              I created to be a comforting study buddy that makes working feel
              like a game. It allows users to play relaxing music and
              soundscapes, keep track of quests to achieve, and run
              campaign/rest timers.
            </div>

            <div className="experience-title-4">
              Full-Stack Developer & UI/UX Designer
            </div>
            <div className="timeframe-section-4">
              <Clock fill={"#00c700"} stroke={"#003500"} />
              <div className="timeframe-4">Jan. 2023 - Present</div>
            </div>
            <div className="highlight-section">
              <ul className="highlights">
                <li className="highlight-item">
                  💻 Developed a feature-rich, full-stack web application{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "0.9s",
                    }}
                  >
                    from concept to production
                  </span>
                  . Front End: Next JS // React // Typescript. Back End: Node JS
                  // Typescript // MySQL // REST // Planetscale // Prisma.
                  Infrastructure: Vercel // S3. Infrastructure: Vercel // S3.
                </li>

                <li className="highlight-item">
                  🎨 Designed a custom UI/UX{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "1.2s",
                    }}
                  >
                    for the entire site
                  </span>
                  . Utilized Adobe XD and Figma to translate designs and svg's
                  into a custom and fully responsive css design system.
                </li>

                <li className="highlight-item">
                  📋 Seamlessly integrated a{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "1.5s",
                    }}
                  >
                    robust MySQL database solution{" "}
                  </span>
                  , optimizing data storage and retrieval processes. Implemented
                  effective data schemas and management strategies , ensuring
                  data integrity, security, and scalability.
                </li>

                <li className="highlight-item">
                  ⛟ Continually{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "1.8s",
                    }}
                  >
                    designing, coding and shipping
                  </span>{" "}
                  new features, auditing and improving infrastructure
                  development and refactoring the current codebase for improved
                  performance.
                </li>
              </ul>
            </div>
          </div>

          <div className="experience-item experience-border-5">
            <div className="website-no-link website-6 animate">
              <span className="website-text">Elevate Life</span>
            </div>

            <div className="experience-summary">
              🍵{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "0.3s",
                }}
              >
                cozyPunk
              </span>{" "}
              is a{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "0.6s",
                }}
              >
                "passion product"
              </span>{" "}
              I created to be a comforting study buddy that makes working feel
              like a game. It allows users to play relaxing music and
              soundscapes, keep track of quests to achieve, and run
              campaign/rest timers.
            </div>

            <div className="experience-title-5">Broadcast Director</div>
            <div className="timeframe-section-5">
              <Clock fill={"#5959ff"} stroke={"#21215B"} />
              <div className="timeframe-5">Jan. 2023 - Present</div>
            </div>
            <div className="highlight-section">
              <ul className="highlights">
                <li className="highlight-item">
                  💻 Developed a feature-rich, full-stack web application{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "0.9s",
                    }}
                  >
                    from concept to production
                  </span>
                  . Front End: Next JS // React // Typescript. Back End: Node JS
                  // Typescript // MySQL // REST // Planetscale // Prisma.
                  Infrastructure: Vercel // S3. Infrastructure: Vercel // S3.
                </li>

                <li className="highlight-item">
                  🎨 Designed a custom UI/UX{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "1.2s",
                    }}
                  >
                    for the entire site
                  </span>
                  . Utilized Adobe XD and Figma to translate designs and svg's
                  into a custom and fully responsive css design system.
                </li>

                <li className="highlight-item">
                  📋 Seamlessly integrated a{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "1.5s",
                    }}
                  >
                    robust MySQL database solution{" "}
                  </span>
                  , optimizing data storage and retrieval processes. Implemented
                  effective data schemas and management strategies , ensuring
                  data integrity, security, and scalability.
                </li>

                <li className="highlight-item-bottom">
                  ⛟ Continually{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "1.8s",
                    }}
                  >
                    designing, coding and shipping
                  </span>{" "}
                  new features, auditing and improving infrastructure
                  development and refactoring the current codebase for improved
                  performance.
                </li>
              </ul>
            </div>
          </div>

          <div className="experience-item-bottom experience-border-6">
            <div className="website-no-link website-7 animate">
              <span>WorldVentures</span>
            </div>

            <div className="experience-summary">
              🍵{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "0.3s",
                }}
              >
                cozyPunk
              </span>{" "}
              is a{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "0.6s",
                }}
              >
                "passion product"
              </span>{" "}
              I created to be a comforting study buddy that makes working feel
              like a game. It allows users to play relaxing music and
              soundscapes, keep track of quests to achieve, and run
              campaign/rest timers.
            </div>

            <div className="experience-title-6">
              Full-Stack Developer & UI/UX Designer
            </div>
            <div className="timeframe-section-6">
              <Clock fill={"#ffa8e7"} stroke={"#3F2939"} />
              <div className="timeframe-6">Jan. 2023 - Present</div>
            </div>
            <div className="highlight-section">
              <ul className="highlights">
                <li className="highlight-item">
                  💻 Developed a feature-rich, full-stack web application{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "0.9s",
                    }}
                  >
                    from concept to production
                  </span>
                  . Front End: Next JS // React // Typescript. Back End: Node JS
                  // Typescript // MySQL // REST // Planetscale // Prisma.
                  Infrastructure: Vercel // S3. Infrastructure: Vercel // S3.
                </li>

                <div
                  className="create-stack"
                  onClick={() => {
                    setStackTitle("cozyPunk"),
                      setTechDisplay((previous: any) =>
                        previous.map((tech: any) =>
                          tech.id === 1 ||
                          tech.id === 2 ||
                          tech.id === 3 ||
                          tech.id === 5 ||
                          tech.id === 7 ||
                          tech.id === 9 ||
                          tech.id === 10 ||
                          tech.id === 11 ||
                          tech.id === 25 ||
                          tech.id === 31 ||
                          tech.id === 4 ||
                          tech.id === 8 ||
                          tech.id === 32 ||
                          tech.id === 33 ||
                          tech.id === 35
                            ? {
                                ...tech,
                                selected: true,
                              }
                            : tech
                        )
                      ),
                      stackElement.current.scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                >
                  Create Stack
                </div>

                <li className="highlight-item">
                  🎨 Designed a custom UI/UX{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "1.2s",
                    }}
                  >
                    for the entire site
                  </span>
                  . Utilized Adobe XD and Figma to translate designs and svg's
                  into a custom and fully responsive css design system.
                </li>

                <li className="highlight-item">
                  📋 Seamlessly integrated a{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "1.5s",
                    }}
                  >
                    robust MySQL database solution{" "}
                  </span>
                  , optimizing data storage and retrieval processes. Implemented
                  effective data schemas and management strategies , ensuring
                  data integrity, security, and scalability.
                </li>

                <li className="highlight-item-bottom">
                  ⛟ Continually{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "1.8s",
                    }}
                  >
                    designing, coding and shipping
                  </span>{" "}
                  new features, auditing and improving infrastructure
                  development and refactoring the current codebase for improved
                  performance.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          scrolled > 0
            ? "show-bottom-banner"
            : scrolled === 0
            ? "hide-bottom-banner"
            : undefined
        }
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <div className="bottom-horizontal-scrolling-items">
          <div className="bottom-horizontal-scrolling-items__item">
            back to top
            <Devil />
            back to top
            <Devil />
            Back to Top
            <Devil />
            back to top
            <Devil />
            back to top
            <Devil />
            Back to Top
            <Devil />
            back to top
            <Devil />
            Back to Top
            <Devil />
            back to top
            <Devil />
            back to top
            <Devil />
            Back to Top
            <Devil />
            back to top
            <Devil />
          </div>

          <div className="bottom-horizontal-scrolling-items__item">
            back to top
            <Devil />
            back to top
            <Devil />
            Back to Top
            <Devil />
            back to top
            <Devil />
            back to top
            <Devil />
            Back to Top
            <Devil /> back to top
            <Devil />
            Back to Top
            <Devil />
            back to top
            <Devil />
            back to top
            <Devil />
            Back to Top
            <Devil />
            back to top
            <Devil />
          </div>
        </div>
      </div>
    </div>
  );
}
