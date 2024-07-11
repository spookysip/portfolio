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

        <div className="experience-summary">
          🎤 Elevate Life is a church and event venue. I oversaw the production
          of every event along with the delivery of their locally broadcasted
          television show and shot and edited various video elements that were
          broadcasted during events.
        </div>

        <div className="experience-summary">
          🏳️‍🌈 Important: While my previous and distant role within this company
          is relevant to my experience and worth including, it is personally
          important to me to note that I believe wholeheartedly in the
          unwavering support of inclusivity through all walks of life and
          embracing of all marginalized communities and do not support any
          systemic influence that prohibits or hinders that.
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
              with 1500+ in attendance, coordinating with broadcast, audio crew,
              stage crew, performers and admin staff to make sure events ran
              efficiently
            </li>

            <li className="highlight-item">
              📣 Lead the training, scheduling and performance of 30+ volunteers
              across 13 roles across 4+ separate events weekly
            </li>

            <li className="highlight-item">
              📎 Coordinated with department heads to determine key
              opportunities for growth across all live event teams
            </li>

            <li className="highlight-item-bottom">
              📹 Shot and edited various video productions in addition to
              creating custom motion graphics that were broadcasted across all
              events
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
