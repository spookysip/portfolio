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

import { Howl } from "howler";

const startGameSound = new Howl({
  src: ["/sounds/start-game.wav"],
  volume: 0.3,
});

const stopGameSound = new Howl({
  src: ["/sounds/stop-game.wav"],
  volume: 0.3,
});

const hit1Sound = new Howl({
  src: ["/sounds/hit-1.wav"],
  volume: 0.3,
});

const hit2Sound = new Howl({
  src: ["/sounds/hit-2.wav"],
  volume: 0.3,
});

const hit3Sound = new Howl({
  src: ["/sounds/hit-3.wav"],
  volume: 0.3,
});

const hit4Sound = new Howl({
  src: ["/sounds/hit-4.wav"],
  volume: 0.3,
});

const hit5Sound = new Howl({
  src: ["/sounds/hit-5.wav"],
  volume: 0.3,
});

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
  const [prevTechDisplay, setPrevTechDisplay] = useState() as any;
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

  const [isSticky, setIsSticky] = useState(false);
  const placeholderRef = useRef() as any;
  const bannerRef = useRef() as any;
  const [bannerTop, setBannerTop] = useState(0);

  useEffect(() => {
    const handleBannerScroll = () => {
      console.log({ bannerTop: bannerTop });
      console.log({ scrollY: window.scrollY });

      if (window.scrollY > bannerTop) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleBannerScroll);
    return () => {
      window.removeEventListener("scroll", handleBannerScroll);
    };
  }, [bannerTop]);

  async function updateBannerTop() {
    const bannerRect = experienceBannerRef.current.getBoundingClientRect();
    if (experienceBannerRef.current && bannerRect.top > 0) {
      console.log({ wtf: isSticky });
      const bannerRect = experienceBannerRef.current.getBoundingClientRect();
      console.log("Update Top:", bannerRect.top + window.scrollY);
      setBannerTop(bannerRect.top + window.scrollY);
    }
  }

  async function updatePlaceholderBannerTop() {
    const bannerRect = placeholderRef.current.getBoundingClientRect();
    if (placeholderRef.current) {
      console.log({ wtf: isSticky });
      console.log("Update Placeholder Top:", bannerRect.top + window.scrollY);
      setBannerTop(bannerRect.top + window.scrollY);
    }
  }

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const currentBannerTop = experienceBannerRef.current
        ? experienceBannerRef.current.getBoundingClientRect().top +
          window.scrollY
        : 0;
      if (window.scrollY > currentBannerTop) {
        updateBannerTop();
      }
    });

    const mutationObserver = new MutationObserver((mutations) => {
      const currentBannerTop = experienceBannerRef.current
        ? experienceBannerRef.current.getBoundingClientRect().top +
          window.scrollY
        : 0;
      if (window.scrollY > currentBannerTop) {
        updateBannerTop();
      }
    });

    if (experienceBannerRef.current) {
      mutationObserver.observe(experienceBannerRef.current, {
        attributes: true,
        childList: true,
        subtree: true,
      });
    }
    if (experienceBannerRef.current) {
      observer.observe(experienceBannerRef.current);
    }

    return () => {
      if (experienceBannerRef.current) {
        observer.unobserve(experienceBannerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      const currentBannerTop = placeholderRef.current
        ? placeholderRef.current.getBoundingClientRect().top + window.scrollY
        : 0;
      if (window.scrollY < currentBannerTop) {
        updatePlaceholderBannerTop();
      }
    });

    const mutationObserver = new MutationObserver(() => {
      const currentBannerTop = placeholderRef.current
        ? placeholderRef.current.getBoundingClientRect().top + window.scrollY
        : 0;
      if (window.scrollY < currentBannerTop) {
        updatePlaceholderBannerTop();
      }
    });

    if (placeholderRef.current) {
      mutationObserver.observe(placeholderRef.current, {
        attributes: true,
        childList: true,
        subtree: true,
      });
    }
    if (placeholderRef.current) {
      observer.observe(placeholderRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    console.log(isSticky);
    if (!isSticky && techDisplay !== prevTechDisplay) {
      updateBannerTop();
    }

    if (isSticky && techDisplay !== prevTechDisplay) {
      updatePlaceholderBannerTop();
    }

    if (techDisplay !== prevTechDisplay) {
      setPrevTechDisplay(techDisplay);
    }
  }, [techDisplay, prevTechDisplay, isSticky]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 800px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e: any) => {
      setIsMobile(e.matches);
      if (e.matches) {
        setIsSticky(false);
      }
    };

    mediaQuery.addListener(handleMediaQueryChange);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const [parentWidth, setParentWidth] = useState(0);

  useEffect(() => {
    const updateParentWidth = () => {
      const parentDiv = document.getElementById("parentDiv"); // Replace 'parentDiv' with the actual id or class of your parent div
      if (parentDiv) {
        const width = parentDiv.clientWidth;
        setParentWidth(width);
      }
    };

    updateParentWidth();

    // Event listener for window resize
    window.addEventListener("resize", updateParentWidth);

    // Clean up
    return () => {
      window.removeEventListener("resize", updateParentWidth);
    };
  }, []);

  const nameBannerRef = useRef() as any;
  const [nameAnimationDuration, setNameAnimationDuration] = useState(0);

  const roleBannerRef = useRef() as any;
  const [roleAnimationDuration, setRoleAnimationDuration] = useState(0);

  const linkBannerRef1 = useRef() as any;
  const linkBannerRef2 = useRef() as any;
  const [linkAnimationDuration1, setLinkAnimationDuration1] = useState(0);
  const [linkAnimationDuration2, setLinkAnimationDuration2] = useState(0);

  const techBannerRef = useRef() as any;
  const [techAnimationDuration, setTechAnimationDuration] = useState(0);

  const theaterBannerRef = useRef() as any;
  const [theaterAnimationDuration, setTheaterAnimationDuration] = useState(0);

  const experienceBannerRef = useRef() as any;
  const [experienceAnimationDuration, setExperienceAnimationDuration] =
    useState(0);

  const backTopBannerRef = useRef() as any;
  const [backTopAnimationDuration, setBackTopAnimationDuration] = useState(0);

  useEffect(() => {
    const nameContent = nameBannerRef.current;
    const roleContent = roleBannerRef.current;
    const linkContent1 = linkBannerRef1.current;
    const linkContent2 = linkBannerRef2.current;
    const techContent = techBannerRef.current;
    const theaterContent = theaterBannerRef.current;
    const experienceContent = experienceBannerRef.current;
    const backTopContent = backTopBannerRef.current;

    if (nameContent) {
      const contentWidth = nameContent.scrollWidth;
      const duration = contentWidth / 70;
      setNameAnimationDuration(duration);
    }

    if (roleContent) {
      const contentWidth = roleContent.scrollWidth;
      const duration = contentWidth / 120;
      setRoleAnimationDuration(duration);
    }

    if (linkContent1) {
      const contentWidth = linkContent1.scrollWidth;
      const duration = contentWidth / 35;
      setLinkAnimationDuration1(duration);
    }

    if (linkContent2) {
      const contentWidth = linkContent2.scrollWidth;
      const duration = contentWidth / 35;
      setLinkAnimationDuration2(duration);
    }

    if (techContent) {
      const contentWidth = techContent.scrollWidth;
      const duration = contentWidth / 20;
      setTechAnimationDuration(duration);
    }

    if (theaterContent) {
      const contentWidth = theaterContent.scrollWidth;
      const duration = contentWidth / 25;
      setTheaterAnimationDuration(duration);
    }

    if (experienceContent) {
      const contentWidth = experienceContent.scrollWidth;
      const duration = contentWidth / 60;
      setExperienceAnimationDuration(duration);
    }

    if (backTopContent) {
      const contentWidth = backTopContent.scrollWidth;
      const duration = contentWidth / 45;
      setBackTopAnimationDuration(duration);
    }
  }, []);

  const [cornerClass, setCornerClass] = useState("game-position-center");
  const [gamePower, setGamePower] = useState(false);
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
      gameIntervalRef.current = setInterval(randomizeCorner, 850);

      // Clean up interval on component unmount
      return () => clearInterval(gameIntervalRef.current);
    }

    if (!gamePower) {
      setCornerClass("game-position-center");
      clearInterval(gameIntervalRef.current);
    }
  }, [gamePower]);

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

  async function playHitSound() {
    const hit = Math.floor(Math.random() * 5) + 1;

    if (hit === 1) {
      hit1Sound.play();
    }

    if (hit === 2) {
      hit2Sound.play();
    }

    if (hit === 3) {
      hit3Sound.play();
    }

    if (hit === 4) {
      hit4Sound.play();
    }

    if (hit === 5) {
      hit5Sound.play();
    }
  }

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
          <div
            className="horizontal-scrolling-items__item"
            ref={nameBannerRef}
            style={{ animationDuration: `${nameAnimationDuration}s` }}
          >
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
          <div
            ref={roleBannerRef}
            style={{ animationDuration: `${roleAnimationDuration}s` }}
            className="horizontal-scrolling-items__item"
          >
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
                <div
                  className="game-start-stop"
                  onClick={() => {
                    gamePower && setScore(0);
                    setGamePower((prev) => !prev);
                    !gamePower && startGameSound.play();
                    gamePower && stopGameSound.play();
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

            <div className="desktop-links">
              <div className="link-title">
                <div className="horizontal-scrolling-items-link">
                  <div
                    ref={linkBannerRef2}
                    style={{ animationDuration: `${linkAnimationDuration2}s` }}
                    className="horizontal-scrolling-items__item"
                  >
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

        <div className="mobile-links">
          <div className="mobile-link-parent">
            <div className="horizontal-scrolling-items-link">
              <div
                ref={linkBannerRef1}
                style={{ animationDuration: `${linkAnimationDuration1}s` }}
                className="horizontal-scrolling-items__item"
              >
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
              <span className={!copy ? "link-icon link-color" : "link-icon"}>
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

        <div className="technologies-parent">
          <div
            ref={bannerRef}
            // className={`technologies-title ${
            //   isSticky ? "sticky-banner" : undefined
            // }`}
            // style={{ width: isMobile ? "100%" : parentWidth + "px" }}
            className="technologies-title"
          >
            <div className="horizontal-scrolling-items">
              <div
                ref={techBannerRef}
                style={{ animationDuration: `${techAnimationDuration}s` }}
                className="horizontal-scrolling-items__item"
              >
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
                              onClick={() => {
                                setTechDisplay((previous: any) =>
                                  previous.map((tech: any) =>
                                    tech.id === item.id
                                      ? {
                                          ...tech,
                                          selected: true,
                                        }
                                      : tech
                                  )
                                );
                                setScore(0);
                                setGamePower(false);
                              }}
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

      <div className="skills" id="parentDiv">
        <div
          ref={placeholderRef}
          style={{
            height: isSticky ? experienceBannerRef.current.clientHeight + 5 : 0,
          }}
        />
      </div>

      <div
        className={`container container-border-top ${
          isSticky ? "sticky-banner" : undefined
        }`}
      >
        <div className="horizontal-scrolling-items">
          <div
            ref={experienceBannerRef}
            style={{ animationDuration: `${experienceAnimationDuration}s` }}
            className="horizontal-scrolling-items__item"
          >
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
          <div
            className="resume-dot"
            style={{
              backgroundColor: "#9475bf",
              outline: "3px solid #ffc83d",
              outlineStyle: "dashed",
              marginTop: "-32px",
              marginLeft: "-7px",
            }}
          />

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
              campaign/rest timers
            </div>

            <div className="experience-title-1">
              Full-Stack Developer & UI/UX Designer
            </div>

            <div className="timeframe-section-1">
              <Clock fill={"#9475bf"} stroke={"#483285"} />
              <div className="timeframe-1">Jan. 2023 - Present</div>
            </div>
            <div
              className="resume-small-dot"
              style={{
                backgroundColor: "#9475bf",
                outline: "2px solid #ffc83d",
                outlineStyle: "dashed",
              }}
            />
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
                          tech.id === 77762329 ||
                          tech.id === 68025628 ||
                          tech.id === 70890557 ||
                          tech.id === 93206806 ||
                          tech.id === 60088648 ||
                          tech.id === 84071992 ||
                          tech.id === 65667794 ||
                          tech.id === 37311184 ||
                          tech.id === 64879801 ||
                          tech.id === 61503304 ||
                          tech.id === 89554979 ||
                          tech.id === 6593939244 ||
                          tech.id === 36976903 ||
                          tech.id === 26885185 ||
                          tech.id === 73111623 ||
                          tech.id === 39403119 ||
                          tech.id === 73662979 ||
                          tech.id === 68799196
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

          <div
            className="resume-dot"
            style={{
              backgroundColor: "#ee702c",
              outline: "3px solid #9475bf",
              outlineStyle: "dashed",
            }}
          />

          <div className="experience-item experience-border-2">
            <div className="website-no-link website-2 animate">
              <span>The Fall of Mann</span>
            </div>

            <div className="experience-summary">
              📗 The Fall of Mann is a{" "}
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
              to clear their name
              <br />
              <br /> Manuscript available upon request
            </div>

            <div className="experience-title-2">Writer</div>
            <div className="timeframe-section-2">
              <Clock fill={"#ed702d"} stroke={"#4B230E"} />
              <div className="timeframe-2">Dec. 2021 - Present</div>
            </div>

            <div
              className="resume-small-dot"
              style={{
                backgroundColor: "#ee702c",
                outline: "2px solid #9475bf",
                outlineStyle: "dashed",
              }}
            />

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

          <div
            className="resume-dot"
            style={{
              backgroundColor: "#ffff04",
              outline: "3px solid #ee702c",
              outlineStyle: "dashed",
            }}
          />

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
              client to communicate its progress to filmmakers
            </div>

            <div className="experience-title-3">Product Manager</div>

            <div className="timeframe-section-3">
              <Clock fill={"#ffff00"} stroke={"#363600"} />
              <div className="timeframe-3">Jul. 2020 - Nov. 2021</div>
            </div>

            <div
              className="resume-small-dot"
              style={{
                backgroundColor: "#ffff04",
                outline: "2px solid #ee702c",
                outlineStyle: "dashed",
                marginLeft: "190px",
              }}
            />

            <div className="highlight-section">
              <ul className="highlights">
                <li className="highlight-item">
                  🤝 Coordinated with cross-functional teams in the development
                  and launch of{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "3.6s",
                    }}
                  >
                    internal admin solutions
                  </span>
                  , resulting in{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "3.6s",
                    }}
                  >
                    increased efficiency
                  </span>
                </li>

                <li className="highlight-item">
                  💬 Conducted internal team discussions to{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "3.6s",
                    }}
                  >
                    identify key employee needs
                  </span>
                  , driving the creation of{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "3.6s",
                    }}
                  >
                    product roadmaps
                  </span>{" "}
                  and
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "3.6s",
                    }}
                  >
                    {" "}
                    feature prioritization
                  </span>
                </li>

                <li className="highlight-item">
                  ➡️ Managed the product lifecycle{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "3.6s",
                    }}
                  >
                    from ideation to launch
                  </span>
                  , ensuring timely delivery and{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "3.6s",
                    }}
                  >
                    alignment with business goals
                  </span>{" "}
                  and employee expectations
                </li>

                <li className="highlight-item">
                  📜 Developed and{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "3.6s",
                    }}
                  >
                    maintained product documentation
                  </span>
                  , including user guides, release notes, and training
                  materials, ensuring
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "3.6s",
                    }}
                  >
                    seamless user adoption
                  </span>{" "}
                  and support
                </li>
              </ul>
            </div>

            <div className="experience-title-3">Full-Stack Developer</div>

            <div className="timeframe-section-3">
              <Clock fill={"#ffff00"} stroke={"#363600"} />
              <div className="timeframe-3">Jan. 2020 - Jun. 2021</div>
            </div>

            <div
              className="resume-small-dot"
              style={{
                backgroundColor: "#ffff04",
                outline: "2px solid #ee702c",
                outlineStyle: "dashed",
                marginLeft: "190px",
              }}
            />

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
                  for Filmsupply's content department
                </li>

                <div
                  className="create-stack-3"
                  onClick={() => {
                    setStackTitle("Filmsupply & Musicbed"),
                      setTechDisplay((previous: any) =>
                        previous.map((tech: any) =>
                          tech.id === 77762329 ||
                          tech.id === 68025628 ||
                          tech.id === 70890557 ||
                          tech.id === 60088648 ||
                          tech.id === 84071992 ||
                          tech.id === 65667794 ||
                          tech.id === 37311184 ||
                          tech.id === 64879801 ||
                          tech.id === 73030401 ||
                          tech.id === 73362079 ||
                          tech.id === 57009578 ||
                          tech.id === 65939392 ||
                          tech.id === 19033388 ||
                          tech.id === 48623093 ||
                          tech.id === 63043656 ||
                          tech.id === 21903310 ||
                          tech.id === 62746874 ||
                          tech.id === 78257886 ||
                          tech.id === 55882386 ||
                          tech.id === 56422034 ||
                          tech.id === 36976903 ||
                          tech.id === 92860268 ||
                          tech.id === 79545424 ||
                          tech.id === 38728182 ||
                          tech.id === 89930050 ||
                          tech.id === 75822646 ||
                          tech.id === 20947143 ||
                          tech.id === 68799176
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
                  🏠 Delivered continued{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "3.6s",
                    }}
                  >
                    architecture imporvements
                  </span>{" "}
                  for services within{" "}
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
                  Gateway. Front End: React App deployed through Amplify
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
                  architecture to microservices
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
                  sprint
                </li>
              </ul>
            </div>

            <div className="experience-title-3">Administrative Coordinator</div>

            <div className="timeframe-section-3">
              <Clock fill={"#ffff00"} stroke={"#363600"} />
              <div className="timeframe-3">Nov. 2018 - Dec. 2019</div>
            </div>

            <div
              className="resume-small-dot"
              style={{
                backgroundColor: "#ffff04",
                outline: "2px solid #ee702c",
                outlineStyle: "dashed",
                marginLeft: "190px",
              }}
            />

            <div className="highlight-section">
              <ul className="highlights">
                <li className="highlight-item">
                  📊 Assisted in developing and{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "3.6s",
                    }}
                  >
                    maintaining department goals
                  </span>{" "}
                  and implemented{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "3.6s",
                    }}
                  >
                    organizational systems
                  </span>{" "}
                  to measure progress and milestone achievements
                </li>

                <li className="highlight-item">
                  💻 Built and utilized various workflows and technologies to
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "3.6s",
                    }}
                  >
                    streamline productivity
                  </span>{" "}
                  across multiple departmental pipelines
                </li>

                <li className="highlight-item">
                  🖇️ Coordinated with other departments to determine the most
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "3.6s",
                    }}
                  >
                    efficient strategies
                  </span>{" "}
                  to collaborate and share data and knowledge
                </li>

                <li className="highlight-item">
                  💾 Maintained{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "3.6s",
                    }}
                  >
                    departmental databases
                  </span>{" "}
                  and{" "}
                  <span
                    className="resume-color-highlight"
                    style={{
                      animationDelay: "3.6s",
                    }}
                  >
                    organized reports
                  </span>{" "}
                  to send to leadership for daily performance metics and
                  operational implementation
                </li>
              </ul>
            </div>

            <div className="experience-title-3">Marketing Coordinator</div>

            <div className="timeframe-section-3">
              <Clock fill={"#ffff00"} stroke={"#363600"} />
              <div className="timeframe-3">Jul. 2018 - Oct. 2018</div>
            </div>

            <div
              className="resume-small-dot"
              style={{
                backgroundColor: "#ffff04",
                outline: "2px solid #ee702c",
                outlineStyle: "dashed",
                marginLeft: "186px",
              }}
            />

            <div className="highlight-section">
              <ul className="highlights">
                <li className="highlight-item">
                  📱 Managed the social media calendar for multi-channel
                  marketing campaigns and coordinated with various stake holders
                  to obtain the necessary assets in a timely manner
                </li>

                <li className="highlight-item">
                  📅 Scheduled and posted on various social media accounts
                  resulting in increased engagement for the duration of various
                  campaigns
                </li>

                <li className="highlight-item">
                  ✏️ Crafted compelling copy for various marketing materials,
                  including website content, email campaigns, and social media
                  posts, enhancing brand voice and driving customer engagement
                </li>

                <li className="highlight-item">
                  📈 Monitored and analyzed campaign performance metrics,
                  providing actionable insights and recommendations to optimize
                  marketing strategies
                </li>
              </ul>
            </div>

            <div className="experience-title-3">Account Manager</div>

            <div className="timeframe-section-3">
              <Clock fill={"#ffff00"} stroke={"#363600"} />
              <div className="timeframe-3">Nov. 2016 - Jun. 2018</div>
            </div>

            <div
              className="resume-small-dot"
              style={{
                backgroundColor: "#ffff04",
                outline: "2px solid #ee702c",
                outlineStyle: "dashed",
                marginLeft: "190px",
              }}
            />

            <div className="highlight-section">
              <ul className="highlights">
                <li className="highlight-item">
                  📞 Reached out to new perspective filmmakers, signing over
                  140+ to contribute footage to Filmsupply
                </li>

                <li className="highlight-item">
                  🧑‍🤝‍🧑 Managed ongoing relationships and maintained daily
                  correspondence with the filmmakers I signed, answering any
                  questions they presented and coordinated with them to
                  determine new collaboration opportunities
                </li>

                <li className="highlight-item">
                  💿 Utilized various technologies to lead the development of
                  sales pipelines to scale the most efficient onboarding process
                  for new filmmakers
                </li>

                <li className="highlight-item">
                  ✈️ Traveled nationally and represented the company at industry
                  events where Ipromoted the company at trade shows and scouted
                  new opportunities with other companies
                </li>
              </ul>
            </div>
          </div>

          <div
            className="resume-dot"
            style={{
              backgroundColor: "#02c700",
              outline: "3px solid #ffff04",
              outlineStyle: "dashed",
            }}
          />

          <div className="experience-item experience-border-4">
            <div className="website-no-link website-5">
              <span className="website-text">Daystar</span>
            </div>

            <div className="experience-summary">
              📡 Daystar is an international broadcasting station and television
              studio. I was a member of the small "Predator" video team
              (Producer/Shooter/Editor) that created short and creative segments
              that broadcasted on air worldwide.
            </div>

            <div className="experience-summary">
              🏳️‍🌈 Important: While my previous and distant role within this
              company is relevant to my experience and worth including, it is
              personally important to me to note that I believe wholeheartedly
              in the unwavering support of inclusivity through all walks of life
              and embracing of all marginalized communities and do not support
              any systemic influence that prohibits or hinders that.
            </div>

            <div className="experience-title-4">
              Procuer, Cinematographer & Editor
            </div>
            <div className="timeframe-section-4">
              <Clock fill={"#00c700"} stroke={"#003500"} />
              <div className="timeframe-4">Jan. 2023 - Nov. 2016</div>
            </div>

            <div
              className="resume-small-dot"
              style={{
                backgroundColor: "#02c700",
                outline: "2px solid #ffff04",
                outlineStyle: "dashed",
                marginLeft: "188px",
              }}
            />

            <div className="highlight-section">
              <ul className="highlights">
                <li className="highlight-item">
                  ✍️ Developed and wrote engaging scripts that provided clear
                  direction on set and resonated with audiences
                </li>

                <li className="highlight-item">
                  🎬 Coordinated and managed logistics for shoots, including
                  securing locations, talent, crew, and equipment, resulting in
                  seamless production processes
                </li>

                <li className="highlight-item">
                  📽️ Performed duties as cinematographer, setting up, tearing
                  down and maintaining camera and lighting equipment both on
                  site and in remote locations as necessary
                </li>

                <li className="highlight-item">
                  🎞️ Oversaw and performed post production on various
                  productions including editing, color correction and sound
                  mixing through completion
                </li>
              </ul>
            </div>
          </div>

          <div
            className="resume-dot"
            style={{
              backgroundColor: "#5959ff",
              outline: "3px solid #02c700",
              outlineStyle: "dashed",
            }}
          />

          <div className="experience-item experience-border-5">
            <div className="website-no-link website-6 animate">
              <span className="website-text">Elevate Life</span>
            </div>

            <div className="experience-summary">
              🎤 Elevate Life is a church and event venue. I oversaw the
              production of every event along with the delivery of their locally
              broadcasted television show and shot and edited various video
              elements that were broadcasted during events.
            </div>

            <div className="experience-summary">
              🏳️‍🌈 Important: While my previous and distant role within this
              company is relevant to my experience and worth including, it is
              personally important to me to note that I believe wholeheartedly
              in the unwavering support of inclusivity through all walks of life
              and embracing of all marginalized communities and do not support
              any systemic influence that prohibits or hinders that.
            </div>

            <div className="experience-title-5">Broadcast Director</div>
            <div className="timeframe-section-5">
              <Clock fill={"#5959ff"} stroke={"#21215B"} />
              <div className="timeframe-5">Jan. 2023 - Present</div>
            </div>

            <div
              className="resume-small-dot"
              style={{
                backgroundColor: "#5959ff",
                outline: "2px solid #02c700",
                outlineStyle: "dashed",
                marginLeft: "178px",
              }}
            />

            <div className="highlight-section">
              <ul className="highlights">
                <li className="highlight-item">
                  🎸 Acted as lead producer and oversaw the production of events
                  with 1500+ in attendance, coordinating with broadcast, audio
                  crew, stage crew, performers and admin staff to make sure
                  events ran efficiently
                </li>

                <li className="highlight-item">
                  📣 Lead the training, scheduling and performance of 30+
                  volunteers across 13 roles across 4+ separate events weekly
                </li>

                <li className="highlight-item">
                  📎 Coordinated with department heads to determine key
                  opportunities for growth across all live event teams
                </li>

                <li className="highlight-item-bottom">
                  📹 Shot and edited various video productions in addition to
                  creating custom motion graphics that were broadcasted across
                  all events
                </li>
              </ul>
            </div>
          </div>

          <div
            className="resume-dot"
            style={{
              backgroundColor: "#ffa8e7",
              outline: "3px solid #5959ff",
              outlineStyle: "dashed",
            }}
          />

          <div className="experience-item-bottom experience-border-6">
            <div className="website-no-link website-7 animate">
              <span>WorldVentures</span>
            </div>

            <div className="experience-summary">
              🚀 WorldVentures is an international travel company that offers
              exclusive travel packages, discounted vacations, and unique travel
              experiences to its members. I had the opportunity to work on their
              video production team covering various live events and
              international trips.
            </div>

            <div className="experience-title-6">
              Video Producer, Editor & Motion Graphics Artist
            </div>
            <div className="timeframe-section-6">
              <Clock fill={"#ffa8e7"} stroke={"#3F2939"} />
              <div className="timeframe-6">Jan. 2023 - Present</div>
            </div>

            <div
              className="resume-small-dot"
              style={{
                backgroundColor: "#ffa8e7",
                outline: "2px solid #5959ff",
                outlineStyle: "dashed",
                marginLeft: "178px",
              }}
            />

            <div className="highlight-section">
              <ul className="highlights">
                <li className="highlight-item">
                  🎉 Shot and edited marketing and sponsorship material on
                  member trips in Cancún, Monaco and the Daytona 500
                </li>

                <li className="highlight-item">
                  📺 Shot and developed assets for international training events
                  in Dallas, Las Vegas and Nashville
                </li>

                <li className="highlight-item">
                  ✨ Shot, edited and created motion graphics for training
                  material in 15+ languages that were distributed
                  internationally
                </li>

                <li className="highlight-item-bottom">
                  🎙️ Helped develop and maintain an internal studio at the
                  corporate office that was utilized for numerous productions
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
        <div className="horizontal-scrolling-items">
          <div
            ref={backTopBannerRef}
            style={{ animationDuration: `${backTopAnimationDuration}s` }}
            className="horizontal-scrolling-items__item"
          >
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
