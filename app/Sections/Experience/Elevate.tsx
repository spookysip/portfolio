import Clock from "@/app/icons/Clock";

export default function Elevate() {
  return (
    <div>
      <div
        className="resume-dot"
        style={{
          backgroundColor: "#5959ff",
          outline: "3px solid #02c700",
          outlineStyle: "dashed",
          marginTop: "-18px",
          marginLeft: "-7px",
        }}
      />

      <div className="experience-item experience-border-5">
        <div className="website-no-link website-6 animate">
          <span className="website-text">Elevate Life</span>
        </div>

        <div className="experience-location-parent">
          📍
          <span className="experience-location" style={{ color: "#5959FF" }}>
            Frisco, Texas
          </span>
        </div>

        <div className="experience-summary">
          🎤{" "}
          <span
            className="resume-color-highlight"
            style={{
              animationDelay: ".3s",
            }}
          >
            Elevate Life
          </span>{" "}
          is a church and event venue. I{" "}
          <span
            className="resume-color-highlight"
            style={{
              animationDelay: ".6s",
            }}
          >
            oversaw the production of all events
          </span>{" "}
          along with the delivery of their locally broadcasted television show
          and shot and edited various video elements that were broadcasted
          during events.
        </div>

        <div className="experience-summary">
          🏳️‍🌈{" "}
          <span
            className="resume-color-highlight"
            style={{
              animationDelay: ".9s",
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
              animationDelay: "1.2s",
            }}
          >
            wholeheartedly
          </span>{" "}
          in the{" "}
          <span
            className="resume-color-highlight"
            style={{
              animationDelay: "1.5s",
            }}
          >
            unwavering support
          </span>{" "}
          of inclusivity through all walks of life and embracing of all
          marginalized communities and do not support nor endorse any systemic
          influence that prohibits or hinders that.
        </div>

        <div className="experience-title-5">Broadcast Director</div>
        <div className="timeframe-section-5">
          <Clock fill={"#5959ff"} stroke={"#21215B"} />
          <div className="timeframe-5">Mar. 2014 - Jun. 2015</div>
        </div>

        <div
          className="resume-small-dot"
          style={{
            backgroundColor: "#5959ff",
            outline: "2px solid #02c700",
            outlineStyle: "dashed",
            marginLeft: "188px",
          }}
        />

        <div className="highlight-section">
          <ul className="highlights">
            <li className="highlight-item">
              🎸 Acted as{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "1.8s",
                }}
              >
                lead producer
              </span>{" "}
              and oversaw the production of events with 1500+ in attendance,
              coordinating with broadcast, audio crew, stage crew, performers
              and admin staff to make sure events{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: ".3s",
                }}
              >
                ran efficiently
              </span>
            </li>

            <li className="highlight-item">
              📣 Lead the training, scheduling and performance of{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: ".6s",
                }}
              >
                30+ volunteers
              </span>{" "}
              across 13 roles across 4+ separate events weekly
            </li>

            <li className="highlight-item">
              📎 Coordinated with department heads to{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: ".9s",
                }}
              >
                determine key opportunities
              </span>{" "}
              for growth across all live event teams
            </li>

            <li className="highlight-item-bottom">
              📹 Shot and edited various{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "1.2s",
                }}
              >
                video productions
              </span>{" "}
              in addition to creating custom{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "1.5s",
                }}
              >
                motion graphics
              </span>{" "}
              that were broadcasted across all events
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
