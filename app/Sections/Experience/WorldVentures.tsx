import Clock from "@/app/icons/Clock";

export default function WorldVentures() {
  return (
    <div>
      <div
        className="resume-dot"
        style={{
          backgroundColor: "#ffa8e7",
          outline: "3px solid #5959ff",
          outlineStyle: "dashed",
          marginTop: "-18px",
          marginLeft: "-7px",
        }}
      />

      <div className="experience-item-bottom experience-border-6">
        <div className="website-no-link website-7 animate">
          <span>WorldVentures</span>
        </div>

        <div className="experience-location-parent">
          📍
          <span className="experience-location" style={{ color: "#FFA8E7" }}>
            Plano, Texas
          </span>
        </div>

        <div className="experience-summary">
          🚀{" "}
          <span
            className="resume-color-highlight"
            style={{
              animationDelay: ".3s",
            }}
          >
            WorldVentures
          </span>{" "}
          is an{" "}
          <span
            className="resume-color-highlight"
            style={{
              animationDelay: ".6s",
            }}
          >
            international travel company
          </span>{" "}
          that offers exclusive travel packages, discounted vacations, and
          unique travel experiences to its members. I had the opportunity to
          work on their video production team covering various live events and
          international trips
        </div>

        <div className="experience-title-6">
          Video Producer, Editor & Motion Graphics Artist
        </div>
        <div className="timeframe-section-6">
          <Clock fill={"#ffa8e7"} stroke={"#3F2939"} />
          <div className="timeframe-6">Jul. 2012 - Feb. 2014</div>
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
              🎉 Shot and edited marketing and sponsorship material on member
              trips in{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: ".9s",
                }}
              >
                Cancún, Monaco and the Daytona 500
              </span>
            </li>

            <li className="highlight-item">
              📺 Shot and developed assets for{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "1.2s",
                }}
              >
                international training events
              </span>{" "}
              in Dallas, Las Vegas and Nashville
            </li>

            <li className="highlight-item">
              ✨ Shot, edited and created motion graphics for training material
              in{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "1.5s",
                }}
              >
                15+ languages
              </span>{" "}
              that were distributed internationally
            </li>

            <li className="highlight-item-bottom">
              🎙️ Helped develop and maintain a{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "1.8s",
                }}
              >
                full-service production studio
              </span>{" "}
              at the corporate office that was utilized for numerous productions
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
