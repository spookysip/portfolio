import Clock from "@/app/icons/Clock";
import ExperienceLink from "../../icons/ExperienceLink";

interface Props {
  setStackTitle: any;
  setTechDisplay: any;
  stackElement: any;
}

export default function CozyPunk({
  setStackTitle,
  setTechDisplay,
  stackElement,
}: Props) {
  const scrollToElement = () => {
    if (stackElement.current) {
      const offset = 120; // Extra room on top
      const elementPosition = stackElement.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div
        className="resume-dot"
        style={{
          backgroundColor: "#9475bf",
          outline: "3px solid #ffc83d",
          outlineStyle: "dashed",
          marginTop: "-20px",
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
          I created to be a comforting study buddy that makes working feel like
          a game. It allows users to play relaxing music and soundscapes, keep
          track of quests to achieve, and run campaign/rest timers
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
                  scrollToElement();
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
              . Utilized Adobe XD and Figma to translate designs and svg's into
              a custom and fully responsive css design system.
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
              effective data schemas and management strategies , ensuring data
              integrity, security, and scalability.
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
              new features, auditing and improving infrastructure development
              and refactoring the current codebase for improved performance.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
