"use client";

import "./home.scss";
import Link from "./icons/Link";
import Download from "./icons/Download";
import Clipboard from "./icons/Clipboard";
import React, { useEffect, useState } from "react";

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
  const [cursorPosition, setCursorPosition] = useState({ left: 0, top: 0 });
  const [cursorColor, setCursorColor] = useState("#fe8fe6") as any;
  const [scrolled, setScrolled] = useState() as any;
  const [cursorPress, setCursorPress] = useState(false) as any;
  const [copy, setCopy] = useState(false) as any;
  const [download, setDownload] = useState(false) as any;

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

  function handleMouseMove(e: any) {
    const { pageX, pageY } = e;
    setCursorPosition({ left: pageX, top: pageY });
  }

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
    if (techDisplay.filter((item: any) => item.selected).length === 1) {
      setCursorColor("#fe8fe6");
    }
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
      onMouseMove={handleMouseMove}
      onMouseUp={() => setCursorPress(false)}
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
      <div
        className={
          !cursorPress ? "circular-cursor" : "circular-cursor cursor-press"
        }
        style={{
          left: cursorPosition.left,
          top: cursorPosition.top,
          backgroundColor: cursorColor,
        }}
      />
      <div className="top">
        <div className="about">
          <div className="title">
            <div
              className="name-container"
              onMouseEnter={() => setCursorColor("#22a094")}
              onMouseLeave={() => setCursorColor("#fe8fe6")}
            >
              <div className="name-horizontal-scrolling-items">
                <div className="name-horizontal-scrolling-items__item">
                  Matt Laughlin&nbsp;•&nbsp;Matt Laughlin&nbsp;•&nbsp;Matt
                  Laughlin&nbsp;•&nbsp;Matt Laughlin&nbsp;•&nbsp;Matt
                  Laughlin&nbsp;•&nbsp;Matt Laughlin&nbsp;•&nbsp;Matt
                  Laughlin&nbsp;•&nbsp;Matt Laughlin&nbsp;•&nbsp;Matt
                  Laughlin&nbsp;•&nbsp;Matt Laughlin&nbsp;•&nbsp;Matt
                  Laughlin&nbsp;•&nbsp;Matt Laughlin&nbsp;•&nbsp;
                </div>

                <div className="name-horizontal-scrolling-items__item">
                  Matt Laughlin&nbsp;•&nbsp;Matt Laughlin&nbsp;•&nbsp;Matt
                  Laughlin&nbsp;•&nbsp;Matt Laughlin&nbsp;•&nbsp;Matt
                  Laughlin&nbsp;•&nbsp;Matt Laughlin&nbsp;•&nbsp; Matt
                  Laughlin&nbsp;•&nbsp;Matt Laughlin&nbsp;•&nbsp;Matt
                  Laughlin&nbsp;•&nbsp;Matt Laughlin&nbsp;•&nbsp;Matt
                  Laughlin&nbsp;•&nbsp;Experience&nbsp;•&nbsp;
                </div>
              </div>
            </div>
            <div className="role">Full-Stack Developer</div>

            {customStack && (
              <div
                className={!customStack ? "section" : "section custom-stack"}
                onMouseEnter={() => setCursorColor("#F1F232")}
                onMouseLeave={() => setCursorColor("#fe8fe6")}
              >
                <div className="custom-type">Custom Stack</div>
                <div className="options">
                  {consolidatedStack.map(
                    (item: any) =>
                      item.selected && (
                        <div
                          key={item.id}
                          className="item custom-item"
                          onMouseDown={() => setCursorPress(true)}
                          onMouseEnter={() => setCursorColor("#23A094")}
                          onMouseLeave={() => setCursorColor("#F1F232")}
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

          <div className="links">
            <div
              className="link-parent"
              onMouseDown={() => setCursorPress(true)}
              onMouseEnter={() => setCursorColor("#6d6bfe")}
              onMouseLeave={() => setCursorColor("#fe8fe6")}
              onClick={() => window.open("https://github.com/matt-laughlin")}
            >
              <div>GitHub</div>
              <Link />
            </div>

            <div
              className="link-parent"
              onMouseDown={() => setCursorPress(true)}
              onMouseEnter={() => setCursorColor("#6d6bfe")}
              onMouseLeave={() => setCursorColor("#fe8fe6")}
              onClick={() => window.open("https://linkedin.com/matt-laughlin")}
            >
              <div>LinkedIn</div>
              <Link />
            </div>

            <div
              className="link-parent"
              onMouseEnter={() => setCursorColor("#6d6bfe")}
              onMouseLeave={() => setCursorColor("#fe8fe6")}
              onMouseDown={() => setCursorPress(true)}
              onClick={() => {
                navigator.clipboard.writeText("hi@mattlaughl.in");
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
              onMouseEnter={() => setCursorColor("#6d6bfe")}
              onMouseLeave={() => setCursorColor("#fe8fe6")}
              onMouseDown={() => setCursorPress(true)}
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
                <div key={type} className="section">
                  <div className="type">{type}</div>

                  <div className="options">
                    {groupedData[type].map(
                      (item: any) =>
                        !item.selected && (
                          <div
                            key={item.id}
                            className="item"
                            onMouseDown={() => setCursorPress(true)}
                            onMouseEnter={() => setCursorColor("#f1f233")}
                            onMouseLeave={() => setCursorColor("#fe8fe6")}
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
                              ),
                                techDisplay.filter(
                                  (item: any) => !item.selected
                                ).length === 1 && setCursorColor("#fe8fe6");
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

      <div
        className="container"
        onMouseEnter={() => setCursorColor("#f18458")}
        onMouseLeave={() => setCursorColor("#fe8fe6")}
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
            onMouseEnter={() => setCursorColor("#f9e585")}
            onMouseLeave={() => setCursorColor("#fe8fe6")}
            onMouseDown={() => setCursorPress(true)}
          >
            cozyPunk
          </div>
          <div className="timeframe">Jan. 2023 - Present</div>
          <ul className="highlights">
            <li className="highlight-item">
              Spearheaded and implemented the development and continual
              maintenance of a full-stack application for Filmsupply's content
              department. // Back End: SQL relational database, Node/Express
              API, Node/Express service built behind a Forest Admin application
              // Front End: React with CRUD functionality.
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="website">Independent</div>
          <div className="timeframe">Dec. 2021 - Present</div>
          <ul className="highlights">
            <li className="highlight-item">
              Spearheaded and implemented the development and continual
              maintenance of a full-stack application for Filmsupply's content
              department. // Back End: SQL relational database, Node/Express
              API, Node/Express service built behind a Forest Admin application
              // Front End: React with CRUD functionality.
            </li>
          </ul>
        </div>

        <div>
          <div
            className="website animate"
            onClick={() => window.open("https://filmsupply.com")}
            onMouseEnter={() => setCursorColor("#f9e585")}
            onMouseLeave={() => setCursorColor("#fe8fe6")}
            onMouseDown={() => setCursorPress(true)}
          >
            Filmsupply
          </div>
          <div
            className="website space animate"
            onClick={() => window.open("https://musicbed.com")}
            onMouseEnter={() => setCursorColor("#f1f233")}
            onMouseLeave={() => setCursorColor("#fe8fe6")}
            onMouseDown={() => setCursorPress(true)}
          >
            Musicbed
          </div>
          <div className="timeframe">Nov. 2016 - Nov. 2021</div>
          <ul className="highlights">
            <li className="highlight-item">
              Spearheaded and implemented the development and continual
              maintenance of a full-stack application for Filmsupply's content
              department. // Back End: SQL relational database, Node/Express
              API, Node/Express service built behind a Forest Admin application
              // Front End: React with CRUD functionality.
            </li>

            <li className="highlight-item">
              Delivered continued architecture improvements for services within
              AWS. // Back End: Express services built on a serverless Lambda,
              accessed through API Gateway // Front End: Amplify App.
              Architecture is deployed through CDK and Serverless written within
              the services.
            </li>

            <li className="highlight-item">
              Contributor of 5+ repositories, weekly. Responsible for
              architecture support, front end and back end stories in React,
              Node/Express and Javascript/Typescript within a given sprint.
            </li>

            <li className="highlight-item">
              Maintained integrity with third party APIs, improving the current
              codebases with refactoring strategies. Contributed to the
              transition of legacy monolithic architecture to microservices.
            </li>
          </ul>
        </div>
      </div>

      <div
        className="bottom-container"
        onMouseEnter={() => setCursorColor("#f1f233")}
        onMouseLeave={() => setCursorColor("#fe8fe6")}
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <div
          className="bottom-horizontal-scrolling-items"
          onMouseDown={() => setCursorPress(true)}
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
