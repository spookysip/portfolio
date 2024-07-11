import Clock from "@/app/icons/Clock";

interface Props {
  setVideoId: any;
  theaterElement: any;
}

export default function TFOM({ setVideoId, theaterElement }: Props) {
  return (
    <div>
      <div
        className="resume-dot"
        style={{
          backgroundColor: "#ee702c",
          outline: "3px solid #9475bf",
          outlineStyle: "dashed",
          marginTop: "-18px",
          marginLeft: "-7px",
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
              animationDelay: ".3s",
            }}
          >
            graphic novel
          </span>{" "}
          that I wrote and is currently in the first draft phase. It tells the
          story of a cynical journalist named{" "}
          <span
            className="resume-color-highlight"
            style={{
              animationDelay: ".6s",
            }}
          >
            Murray
          </span>{" "}
          who is framed for the{" "}
          <span
            className="resume-color-highlight"
            style={{
              animationDelay: ".9s",
            }}
          >
            first murder
          </span>{" "}
          in the isolated city of{" "}
          <span
            className="resume-color-highlight"
            style={{
              animationDelay: "1.2s",
            }}
          >
            Mann
          </span>{" "}
          and must now discover its{" "}
          <span
            className="resume-color-highlight"
            style={{
              animationDelay: "1.5s",
            }}
          >
            true origins
          </span>{" "}
          to clear their name
          <br />
          <br />{" "}
          <span className="italics">*Manuscript available upon request</span>
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
              setVideoId(1);
              theaterElement.current.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Watch Teaser 👆
          </div>
        </div>
      </div>
    </div>
  );
}
