import Clock from "@/app/icons/Clock";

export default function Daystar() {
  return (
    <div>
      <div
        className="resume-dot"
        style={{
          backgroundColor: "#02c700",
          outline: "3px solid #ffff04",
          outlineStyle: "dashed",
          marginTop: "-18px",
          marginLeft: "-7px",
        }}
      />

      <div className="experience-item experience-border-4">
        <div className="website-no-link website-5">
          <span className="website-text">Daystar</span>
        </div>

        <div className="experience-location-parent">
          📍
          <span className="experience-location" style={{ color: "#00C700" }}>
            Bedford, Texas
          </span>
        </div>

        <div className="experience-summary">
          📡{" "}
          <span
            className="resume-color-highlight"
            style={{
              animationDelay: ".3s",
            }}
          >
            Daystar
          </span>{" "}
          is an{" "}
          <span
            className="resume-color-highlight"
            style={{
              animationDelay: ".6s",
            }}
          >
            international broadcasting station
          </span>{" "}
          and television studio. I was a member of the small{" "}
          <span
            className="resume-color-highlight"
            style={{
              animationDelay: ".9s",
            }}
          >
            "Predator"
          </span>{" "}
          video team <span className="italics">(Producer/Shooter/Editor)</span>{" "}
          that created short and creative segments that broadcasted on air{" "}
          <span
            className="resume-color-highlight"
            style={{
              animationDelay: "1.2s",
            }}
          >
            worldwide
          </span>
          .
        </div>

        <div className="experience-summary">
          🏳️‍🌈{" "}
          <span
            className="resume-color-highlight"
            style={{
              animationDelay: "1.5s",
            }}
          >
            Important
          </span>
          : While my previous role within this company is relevant to my
          experience and worth including, it is personally important to me to
          note that I believe{" "}
          <span
            className="resume-color-highlight"
            style={{
              animationDelay: "1.8s",
            }}
          >
            wholeheartedly
          </span>{" "}
          in the{" "}
          <span
            className="resume-color-highlight"
            style={{
              animationDelay: ".3s",
            }}
          >
            unwavering support
          </span>{" "}
          of inclusivity through all walks of life and embracing of all
          marginalized communities and do not support nor endorse any systemic
          influence that prohibits or hinders that.
        </div>

        <div className="experience-title-4">
          Procuer, Cinematographer & Editor
        </div>
        <div className="timeframe-section-4">
          <Clock fill={"#00c700"} stroke={"#003500"} />
          <div className="timeframe-4">Jul. 2015 - Dec. 2016</div>
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
              ✍️ Developed and wrote{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: ".6s",
                }}
              >
                engaging scripts
              </span>{" "}
              that provided clear direction on set and resonated with audiences
            </li>

            <li className="highlight-item">
              🎬 Coordinated and managed logistics for shoots, including
              securing locations, talent, crew, and equipment, resulting in
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: ".9s",
                }}
              >
                seamless production processes
              </span>
            </li>

            <li className="highlight-item">
              📽️ Performed duties as cinematographer, setting up, tearing down
              and{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "1.2s",
                }}
              >
                maintaining camera and lighting equipment
              </span>{" "}
              both on site and in remote locations as necessary
            </li>

            <li className="highlight-item">
              🎞️ Oversaw and performed{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "1.5s",
                }}
              >
                post production
              </span>{" "}
              duties on various productions including editing, color correction
              and sound mixing through completion
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
