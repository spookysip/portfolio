"use client";

import "./home.scss";

import React, { useEffect, useState, useRef, createRef } from "react";
import ReactPlayer from "react-player";

import ScrollBar from "./Sections/ScrollBar";
import Header from "./Sections/Header";
import Roles from "./Sections/Roles";
import CustomStack from "./Sections/CustomStack";
import LinkRoot from "./Sections/Links/LinkRoot";
import Technologies from "./Sections/Technologies";
import Theater from "./Sections/Theater";
import ExperienceRoot from "./Sections/Experience/ExperienceRoot";
import Footer from "./Sections/Footer";

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
  const [score, setScore] = useState(0) as any;
  const [animationSpeed, setAnimationSpeed] = useState(4);

  const [videoId, setVideoId] = useState(1);
  const stackElement = useRef() as any;
  const theaterElement = useRef() as any;
  const [videos, setVideos] = useState([
    {
      id: 1,
      url: "https://vimeo.com/983668282",
      title: "THE FALL OF MANN (TONALITY TEASER)",
      role: "Writer~Editor",
      year: 2024,
    },
    {
      id: 2,
      url: "https://vimeo.com/983677026",
      title: "VOICEMAIL",
      role: "Writer~Director~Editor",
      descriptionTitle: "Voicemail",
      year: 2018,
    },
    {
      id: 3,
      url: "https://vimeo.com/245921296",
      title: "RESCATE",
      role: "Additional Editor",
      year: 2017,
    },
    {
      id: 4,
      url: "https://vimeo.com/983671844",
      title: "VAST EXPANSION",
      role: "Writer~Director~Editor",
      descriptionTitle: "Vast Expansion",
      year: 2013,
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

  const handleMouseMove = (e: any) => {
    if (isDragging.current) {
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
      const bannerRect = experienceBannerRef.current.getBoundingClientRect();
      setBannerTop(bannerRect.top + window.scrollY - 96);
    }
  }

  async function updatePlaceholderBannerTop() {
    const bannerRect = placeholderRef.current.getBoundingClientRect();
    if (placeholderRef.current) {
      setBannerTop(bannerRect.top + window.scrollY - 96);
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

  const customStackRef = useRef() as any;
  const [customStackAnimationDuration, setCustomStackAnimationDuration] =
    useState(0);

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
    const customStack = customStackRef.current;
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

    if (customStack) {
      const contentWidth = customStack.scrollWidth;
      const duration = contentWidth / 28;
      setCustomStackAnimationDuration(duration);
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
  }, [customStackRef]);

  const [gamePower, setGamePower] = useState(false);

  return (
    <div className="all">
      <ScrollBar scrolled={scrolled} avatarRef={avatarRef} />

      <Header
        nameBannerRef={nameBannerRef}
        nameAnimationDuration={nameAnimationDuration}
      />

      <Roles
        roleBannerRef={roleBannerRef}
        roleAnimationDuration={roleAnimationDuration}
      />

      <div className="top-section">
        <div className="top">
          <div className="about">
            <CustomStack
              customStackRef={customStackRef}
              customStackAnimationDuration={customStackAnimationDuration}
              stackElement={stackElement}
              customStack={customStack}
              techDisplay={techDisplay}
              setStackTitle={setStackTitle}
              setTechDisplay={setTechDisplay}
              consolidatedStack={consolidatedStack}
              clickCustomStack={clickCustomStack}
              stackTitle={stackTitle}
              gamePower={gamePower}
              setGamePower={setGamePower}
              score={score}
              setScore={setScore}
              setCopy={setCopy}
            />

            <LinkRoot
              linkBannerRef1={linkBannerRef1}
              linkAnimationDuration1={linkAnimationDuration1}
              linkBannerRef2={linkBannerRef2}
              linkAnimationDuration2={linkAnimationDuration2}
              setCopy={setCopy}
              copy={copy}
              setDownload={setDownload}
              handleDownload={handleDownload}
              download={download}
            />
          </div>
        </div>

        <div className="technologies-root">
          <Technologies
            bannerRef={bannerRef}
            techBannerRef={techBannerRef}
            techAnimationDuration={techAnimationDuration}
            groupedData={groupedData}
            techDisplay={techDisplay}
            setTechDisplay={setTechDisplay}
            setScore={setScore}
            setGamePower={setGamePower}
            customStack={customStackRef}
            setCustomStackAnimationDuration={setCustomStackAnimationDuration}
          />
        </div>
      </div>

      <div ref={theaterElement} />

      <Theater
        theaterBannerRef={theaterBannerRef}
        theaterAnimationDuration={theaterAnimationDuration}
        handlePrev={handlePrev}
        handleNext={handleNext}
        videoId={videoId}
        videos={videos}
        playerRefs={playerRefs}
        videoUrls={videoUrls}
        playing={playing}
        setPlaying={setPlaying}
      />

      <ExperienceRoot
        placeholderRef={placeholderRef}
        isSticky={isSticky}
        experienceBannerRef={experienceBannerRef}
        experienceAnimationDuration={experienceAnimationDuration}
        setVideoId={setVideoId}
        theaterElement={theaterElement}
        setStackTitle={setStackTitle}
        setTechDisplay={setTechDisplay}
        stackElement={stackElement}
      />

      <Footer
        scrolled={scrolled}
        backTopBannerRef={backTopBannerRef}
        backTopAnimationDuration={backTopAnimationDuration}
      />
    </div>
  );
}
