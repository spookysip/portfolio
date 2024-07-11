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

        <div className="experience-summary">
          📡 Daystar is an international broadcasting station and television
          studio. I was a member of the small "Predator" video team
          (Producer/Shooter/Editor) that created short and creative segments
          that broadcasted on air worldwide.
        </div>

        <div className="experience-summary">
          🏳️‍🌈 Important: While my previous and distant role within this company
          is relevant to my experience and worth including, it is personally
          important to me to note that I believe wholeheartedly in the
          unwavering support of inclusivity through all walks of life and
          embracing of all marginalized communities and do not support any
          systemic influence that prohibits or hinders that.
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
              📽️ Performed duties as cinematographer, setting up, tearing down
              and maintaining camera and lighting equipment both on site and in
              remote locations as necessary
            </li>

            <li className="highlight-item">
              🎞️ Oversaw and performed post production on various productions
              including editing, color correction and sound mixing through
              completion
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
