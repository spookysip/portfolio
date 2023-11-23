"use client";

import "./home.scss";
import Link from "./icons/Link";
import Download from "./icons/Download";
import Clipboard from "./icons/Clipboard";
import React, { useEffect, useState, useRef } from "react";
import Heart from "./icons/Heart";
import Clock from "./icons/Clock";

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
  // const [cursorPosition, setCursorPosition] = useState({ left: 0, top: 0 });
  // const [cursorColor, setCursorColor] = useState("#fe8fe6") as any;
  const [scrolled, setScrolled] = useState() as any;
  // const [cursorPress, setCursorPress] = useState(false) as any;
  const [copy, setCopy] = useState(false) as any;
  const [download, setDownload] = useState(false) as any;
  const [stackTitle, setStackTitle] = useState("") as any;

  const stackElement = useRef() as any;

  useEffect(() => {
    // window.onscroll = function (e) {
    //   progressBarScroll(e);
    // };
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    })();
  }, []);

  document.addEventListener("scroll", handleScroll);

  function handleScroll() {
    // const pageY = window.scrollY / 100 + cursorPosition.top;
    let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop,
      height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    setScrolled((winScroll / height) * 100);
    // setCursorPosition({ ...cursorPosition, top: pageY });
  }

  // function handleMouseMove(e: any) {
  //   const { pageX, pageY } = e;
  //   setCursorPosition({ left: pageX, top: pageY });
  // }

  const groupedData = techDisplay.reduce((acc: any, obj: any) => {
    const type = obj.type;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(obj);
    return acc;
  }, {});

  function handleDownload() {
    const pdfURL = "/resume.pdf";
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
    // if (techDisplay.filter((item: any) => item.selected).length === 1) {
    //   setCursorColor("#fe8fe6");
    // }
  }

  const consolidateStackMap = {} as any;
  const selectedArray = techDisplay.filter((item: any) => item.selected);

  const consolidatedStack = selectedArray.filter((item: any) => {
    if (!consolidateStackMap[item.name]) {
      consolidateStackMap[item.name] = true;
      return true;
    }
    return false;
  });

  const customStack =
    techDisplay.filter((item: any) => item.selected).length > 0;

  return (
    <div
      // onMouseMove={handleMouseMove}
      // onMouseUp={() => setCursorPress(false)}
      className="all"
    >
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{
            width: scrolled + "%",
          }}
        ></div>
      </div>
      {/* <div
        className={
          !cursorPress ? "circular-cursor" : "circular-cursor cursor-press"
        }
        style={{
          left: cursorPosition.left,
          top: cursorPosition.top,
          backgroundColor: cursorColor,
        }}
      /> */}
      <div className="top">
        <div className="about">
          <div className="title">
            <div
              className="name-container"
              // onMouseEnter={() => setCursorColor("#22a094")}
              // onMouseLeave={() => setCursorColor("#fe8fe6")}
            >
              <div className="name-horizontal-scrolling-items">
                <div className="name-horizontal-scrolling-items__item">
                  Taylor Laughlin&nbsp;•&nbsp;Taylor Laughlin&nbsp;•&nbsp;Taylor
                  Laughlin&nbsp;•&nbsp;Taylor Laughlin&nbsp;•&nbsp;Taylor
                  Laughlin&nbsp;•&nbsp;Taylor Laughlin&nbsp;•&nbsp;Taylor
                  Laughlin&nbsp;•&nbsp;Taylor Laughlin&nbsp;•&nbsp;Taylor
                  Laughlin&nbsp;•&nbsp;Taylor Laughlin&nbsp;•&nbsp;Taylor
                  Laughlin&nbsp;•&nbsp;Taylor Laughlin&nbsp;•&nbsp;
                </div>

                <div className="name-horizontal-scrolling-items__item">
                  Taylor Laughlin&nbsp;•&nbsp;Taylor Laughlin&nbsp;•&nbsp;Taylor
                  Laughlin&nbsp;•&nbsp;Taylor Laughlin&nbsp;•&nbsp;Taylor
                  Laughlin&nbsp;•&nbsp;Taylor Laughlin&nbsp;•&nbsp; Taylor
                  Laughlin&nbsp;•&nbsp;Taylor Laughlin&nbsp;•&nbsp;Taylor
                  Laughlin&nbsp;•&nbsp;Taylor Laughlin&nbsp;•&nbsp;Taylor
                  Laughlin&nbsp;•&nbsp;Experience&nbsp;•&nbsp;
                </div>
              </div>
            </div>
            <div className="role">Full-Stack Developer</div>
            <div className="mobile-links">
              <div className="mobile-links-row-1">
                <div
                  className="mobile-link mobile-link-border-right"
                  onClick={() =>
                    window.open("https://github.com/taylorlaughlin")
                  }
                >
                  GitHub
                  <Link />
                </div>
                <div
                  className="mobile-link"
                  onClick={() =>
                    window.open("https://linkedin.com/in/taylor-laughlin")
                  }
                >
                  LinkedIn
                  <Link />
                </div>
              </div>

              <div className="mobile-links-row-2">
                <div
                  className="mobile-link mobile-link-border-right"
                  onClick={() => {
                    navigator.clipboard.writeText("hi@taylorlaughl.in");
                    setCopy(true),
                      setTimeout(() => {
                        setCopy(false);
                      }, 3000);
                  }}
                >
                  Copy Email
                  <Clipboard copy={copy} />
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
                  Resume
                  <Download download={download} />
                </div>
              </div>
            </div>

            <div ref={stackElement} />

            <div
              className={!customStack ? "section" : "custom-stack"}
              // onMouseEnter={() => setCursorColor("#F1F232")}
              // onMouseLeave={() => setCursorColor("#fe8fe6")}
            >
              {customStack && (
                <div>
                  <div className="custom-type">
                    {stackTitle === ""
                      ? "Custom Stack"
                      : "Custom Stack (" + stackTitle + ")"}
                  </div>

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

                  <div className="options">
                    {consolidatedStack.map(
                      (item: any) =>
                        item.selected && (
                          <div
                            key={item.id}
                            className="item custom-item"
                            // onMouseDown={() => setCursorPress(true)}
                            // onMouseEnter={() => setCursorColor("#23A094")}
                            // onMouseLeave={() => setCursorColor("#F1F232")}
                            onClick={() => clickCustomStack(item)}
                          >
                            {item.name}
                          </div>
                        )
                    )}
                  </div>
                </div>
              )}

              {!customStack && (
                <div className="heart">
                  <Heart />
                </div>
              )}
            </div>
          </div>

          <div className="links">
            <div
              className="link-parent"
              // onMouseDown={() => setCursorPress(true)}
              // onMouseEnter={() => setCursorColor("#6d6bfe")}
              // onMouseLeave={() => setCursorColor("#fe8fe6")}
              onClick={() => window.open("https://github.com/taylorlaughlin")}
            >
              <div>GitHub</div>
              <Link />
            </div>

            <div
              className="link-parent"
              // onMouseDown={() => setCursorPress(true)}
              // onMouseEnter={() => setCursorColor("#6d6bfe")}
              // onMouseLeave={() => setCursorColor("#fe8fe6")}
              onClick={() =>
                window.open("https://linkedin.com/in/taylor-laughlin")
              }
            >
              <div>LinkedIn</div>
              <Link />
            </div>

            <div
              className="link-parent"
              // onMouseEnter={() => setCursorColor("#6d6bfe")}
              // onMouseLeave={() => setCursorColor("#fe8fe6")}
              // onMouseDown={() => setCursorPress(true)}
              onClick={() => {
                navigator.clipboard.writeText("hi@taylorlaughl.in");
                setCopy(true),
                  setTimeout(() => {
                    setCopy(false);
                  }, 3000);
              }}
            >
              <div>Copy Email</div>
              <Clipboard copy={copy} />
            </div>

            <div
              className="link-parent"
              // onMouseEnter={() => setCursorColor("#6d6bfe")}
              // onMouseLeave={() => setCursorColor("#fe8fe6")}
              // onMouseDown={() => setCursorPress(true)}
              onClick={() => {
                setDownload(true),
                  handleDownload(),
                  setTimeout(() => {
                    setDownload(false);
                  }, 3000);
              }}
            >
              <div>Resume</div>
              <Download download={download} />
            </div>
          </div>
        </div>

        <div className="skills">
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
                            // onMouseDown={() => setCursorPress(true)}
                            // onMouseEnter={() => setCursorColor("#f1f233")}
                            // onMouseLeave={() => setCursorColor("#fe8fe6")}
                            onClick={
                              () =>
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
                              // techDisplay.filter(
                              //   (item: any) => !item.selected
                              // ).length === 1 && setCursorColor("#fe8fe6");
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

      <div
        className="container container-border-top"
        // onMouseEnter={() => setCursorColor("#f18458")}
        // onMouseLeave={() => setCursorColor("#fe8fe6")}
      >
        <div className="horizontal-scrolling-items">
          <div className="horizontal-scrolling-items__item">
            Experience&nbsp;•&nbsp;Experience&nbsp;•&nbsp;Experience&nbsp;•&nbsp;Experience&nbsp;•&nbsp;Experience&nbsp;•&nbsp;Experience&nbsp;•&nbsp;Experience&nbsp;•&nbsp;Experience&nbsp;•&nbsp;Experience&nbsp;•&nbsp;Experience&nbsp;•&nbsp;Experience&nbsp;•&nbsp;Experience&nbsp;•&nbsp;
          </div>

          <div className="horizontal-scrolling-items__item">
            Experience&nbsp;•&nbsp;Experience&nbsp;•&nbsp;Experience&nbsp;•&nbsp;Experience&nbsp;•&nbsp;Experience&nbsp;•&nbsp;Experience&nbsp;•&nbsp;
            Experience&nbsp;•&nbsp;Experience&nbsp;•&nbsp;Experience&nbsp;•&nbsp;Experience&nbsp;•&nbsp;Experience&nbsp;•&nbsp;Experience&nbsp;•&nbsp;
          </div>
        </div>
      </div>

      <div className="experience-inline">
        <div className="experience-item">
          <div
            className="website animate"
            onClick={() => window.open("https://cozypunk.io")}
            // onMouseEnter={() => setCursorColor("#f9e585")}
            // onMouseLeave={() => setCursorColor("#fe8fe6")}
            // onMouseDown={() => setCursorPress(true)}
          >
            cozyPunk
          </div>
          <div className="experience-title">Full-Stack Developer</div>
          <div className="timeframe-section">
            <Clock />
            <div className="timeframe">Jan. 2023 - Present</div>
          </div>
          <div className="highlight-section">
            <div className="experience-summary">
              cozyPunk is a "passion product" I created to be a comforting study
              buddy that makes working feel like a game. It allows users to play
              relaxing music and soundscapes, keep track of quests to achieve,
              and run campaign/rest timers.
            </div>
            <ul className="highlights">
              <li className="highlight-item">
                Developed a feature-rich, full-stack web application from
                concept to production. Front End: Next JS // React //
                Typescript. Back End: Node JS // Typescript // MySQL // REST //
                Planetscale // Prisma. Infrastructure: Vercel // S3.
                Infrastructure: Vercel // S3.
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
                    stackElement.current.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Create Stack
              </div>

              <li className="highlight-item">
                Designed a custom UI/UX for the entire site. Utilized Adobe XD
                and Figma to translate designs and svg's into a custom and fully
                responsive css design system.
              </li>

              <li className="highlight-item">
                Created functionality for the website to act as a fully
                functional product, including business formation, legal copy,
                cookie policies and Stripe API integration.
              </li>

              <li className="highlight-item">
                Continually designing, coding and shipping new features,
                auditing and improving infrastructure development and
                refactoring the current codebase for improved performance.
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div
            className="website animate"
            onClick={() => window.open("https://filmsupply.com")}
            // onMouseEnter={() => setCursorColor("#f9e585")}
            // onMouseLeave={() => setCursorColor("#fe8fe6")}
            // onMouseDown={() => setCursorPress(true)}
          >
            Filmsupply
          </div>
          <div
            className="website space animate"
            onClick={() => window.open("https://musicbed.com")}
            // onMouseEnter={() => setCursorColor("#f1f233")}
            // onMouseLeave={() => setCursorColor("#fe8fe6")}
            // onMouseDown={() => setCursorPress(true)}
          >
            Musicbed
          </div>
          <div className="experience-title">Full-Stack Developer</div>

          <div className="timeframe-section">
            <Clock />
            <div className="timeframe">Jan. 2020 - Nov. 2021</div>
          </div>
          <div className="highlight-section">
            <div className="experience-summary">
              Filmsupply and Musicbed are sister companies dedicated to
              supporting creatives through licensing premium footage and music.
              I had the opportunity to create an internal back end server and
              client to manage the footage curation pipeline and create another
              client to communicate its progress to filmmakers.
            </div>
            <ul className="highlights">
              <li className="highlight-item">
                Spearheaded and implemented the development and continual
                maintenance of a full-stack application for Filmsupply's content
                department. Back End: MySQL database // REST API //
                NodeJS/Express server built behind a Forest Admin application.
                Front End: React.
              </li>

              <div
                className="create-stack"
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
                    stackElement.current.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Create Stack
              </div>

              <li className="highlight-item">
                Delivered continued architecture imporvements for services
                within AWS. Back End: NodeJS/Express server deployed to Lambda
                function through the serverless framework and accessed through
                API Gateway. Front End: React App deployed through Amplify.
              </li>

              <li className="highlight-item">
                Maintained integrity with third party API's, improved existing
                codebases through refactoring strategies and contributed to the
                transition of legacy monolithic architecture to microservices.
              </li>

              <li className="highlight-item">
                Contributed to 5+ repositories weekly. Responsible for
                architecture support, front end stories in React and back end
                stories in NodeJS/Express within any given sprint.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="bottom-container"
        // onMouseEnter={() => setCursorColor("#f1f233")}
        // onMouseLeave={() => setCursorColor("#fe8fe6")}
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <div
          className="bottom-horizontal-scrolling-items"
          // onMouseDown={() => setCursorPress(true)}
        >
          <div className="bottom-horizontal-scrolling-items__item">
            Back to Top&nbsp;•&nbsp;Back to Top&nbsp;•&nbsp;Back to
            Top&nbsp;•&nbsp;Back to Top&nbsp;•&nbsp;Back to Top&nbsp;•&nbsp;Back
            to Top&nbsp;•&nbsp;Back to Top&nbsp;•&nbsp;Back to
            Top&nbsp;•&nbsp;Back to Top&nbsp;•&nbsp;Back to Top&nbsp;•&nbsp;Back
            to Top&nbsp;•&nbsp;Back to Top&nbsp;•&nbsp;
          </div>

          <div className="bottom-horizontal-scrolling-items__item">
            Back to Top&nbsp;•&nbsp;Back to Top&nbsp;•&nbsp;Back to
            Top&nbsp;•&nbsp;Back to Top&nbsp;•&nbsp;Back to Top&nbsp;•&nbsp;Back
            to Top&nbsp;•&nbsp; Back to Top&nbsp;•&nbsp;Back to
            Top&nbsp;•&nbsp;Back to Top&nbsp;•&nbsp;Back to Top&nbsp;•&nbsp;Back
            to Top&nbsp;•&nbsp;Back to Top&nbsp;•&nbsp;
          </div>
        </div>
      </div>
    </div>
  );
}
