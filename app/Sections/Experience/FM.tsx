import Clock from "@/app/icons/Clock";
import ExperienceLink from "@/app/icons/ExperienceLink";

interface Props {
  setStackTitle: any;
  setTechDisplay: any;
  stackElement: any;
}

export default function FM({
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
          backgroundColor: "#ffff04",
          outline: "3px solid #ee702c",
          outlineStyle: "dashed",
          marginTop: "-18px",
          marginLeft: "-7px",
        }}
      />

      <div className="experience-item experience-border-3">
        <div
          className="website website-3 animate-3"
          onClick={() => window.open("https://filmsupply.com")}
        >
          <span className="website-text">Filmsupply</span>
          <span className="experience-link">
            <ExperienceLink color={"#9475bf"} />
          </span>
        </div>
        <div
          className="website-right website-4 animate-4"
          onClick={() => window.open("https://musicbed.com")}
        >
          <span className="website-text">Musicbed</span>
          <span className="experience-link">
            <ExperienceLink color={"#9475bf"} />
          </span>
        </div>

        <div className="experience-location-parent">
          📍
          <span className="experience-location" style={{ color: "#FFFF00" }}>
            Fort Worth, Texas
          </span>
        </div>

        <div className="experience-summary">
          🎥{" "}
          <span
            className="resume-color-highlight"
            style={{
              animationDelay: ".3s",
            }}
          >
            Filmsupply and 🎹 Musicbed
          </span>{" "}
          are sister companies dedicated to supporting creatives through
          <span
            className="resume-color-highlight"
            style={{
              animationDelay: ".6s",
            }}
          >
            &nbsp;licensing premium footage and music
          </span>
          . I had the opportunity to create an internal back end server and
          client to manage the footage curation pipeline and create another
          client to communicate its progress to filmmakers
        </div>

        <div className="experience-title-3">Product Manager</div>

        <div className="timeframe-section-3">
          <Clock fill={"#ffff00"} stroke={"#363600"} />
          <div className="timeframe-3">Jul. 2021 - Nov. 2021</div>
        </div>

        <div
          className="resume-small-dot"
          style={{
            backgroundColor: "#ffff04",
            outline: "2px solid #ee702c",
            outlineStyle: "dashed",
            marginLeft: "190px",
          }}
        />

        <div className="highlight-section">
          <ul className="highlights">
            <li className="highlight-item">
              🤝 Coordinated with cross-functional teams in the development and
              launch of{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: ".9s",
                }}
              >
                internal admin solutions
              </span>
              , resulting in{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "1.2s",
                }}
              >
                increased efficiency
              </span>
            </li>

            <li className="highlight-item">
              💬 Conducted internal team discussions to identify{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "1.5s",
                }}
              >
                key employee needs
              </span>
              , driving the creation of{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "1.8s",
                }}
              >
                product roadmaps
              </span>{" "}
              and
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: ".3s",
                }}
              >
                {" "}
                feature prioritization
              </span>
            </li>

            <li className="highlight-item">
              ➡️ Managed the product lifecycle{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: ".6s",
                }}
              >
                from ideation to launch
              </span>
              , ensuring timely delivery and{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: ".9s",
                }}
              >
                alignment with business goals
              </span>{" "}
              and employee expectations
            </li>

            <li className="highlight-item">
              📜 Developed and maintained{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "1.2s",
                }}
              >
                product documentation
              </span>
              , including user guides, release notes, and training materials,
              ensuring
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "1.5s",
                }}
              >
                {" "}
                seamless user adoption
              </span>{" "}
              and support
            </li>
          </ul>
        </div>

        <div className="experience-title-3">Full-Stack Developer</div>

        <div className="timeframe-section-3">
          <Clock fill={"#ffff00"} stroke={"#363600"} />
          <div className="timeframe-3">Jan. 2020 - Jun. 2021</div>
        </div>

        <div
          className="resume-small-dot"
          style={{
            backgroundColor: "#ffff04",
            outline: "2px solid #ee702c",
            outlineStyle: "dashed",
            marginLeft: "190px",
          }}
        />

        <div className="highlight-section">
          <ul className="highlights">
            <li className="highlight-item">
              💾 Spearheaded and implemented the development and continual
              maintenance of a{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "1.8s",
                }}
              >
                full-stack application
              </span>{" "}
              for Filmsupply's content department
            </li>

            <div
              className="create-stack-3"
              onClick={() => {
                setStackTitle("Filmsupply & Musicbed"),
                  setTechDisplay((previous: any) =>
                    previous.map((tech: any) =>
                      tech.id === 77762329 ||
                      tech.id === 68025628 ||
                      tech.id === 70890557 ||
                      tech.id === 60088648 ||
                      tech.id === 84071992 ||
                      tech.id === 65667794 ||
                      tech.id === 37311184 ||
                      tech.id === 64879801 ||
                      tech.id === 73030401 ||
                      tech.id === 73362079 ||
                      tech.id === 57009578 ||
                      tech.id === 65939392 ||
                      tech.id === 19033388 ||
                      tech.id === 48623093 ||
                      tech.id === 63043656 ||
                      tech.id === 21903310 ||
                      tech.id === 62746874 ||
                      tech.id === 78257886 ||
                      tech.id === 55882386 ||
                      tech.id === 56422034 ||
                      tech.id === 36976903 ||
                      tech.id === 92860268 ||
                      tech.id === 79545424 ||
                      tech.id === 38728182 ||
                      tech.id === 89930050 ||
                      tech.id === 75822646 ||
                      tech.id === 20947143 ||
                      tech.id === 68799176
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
              Create Stack ⬆️
            </div>

            <li className="highlight-item">
              🏠 Delivered continued{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: ".3s",
                }}
              >
                architecture imporvements
              </span>{" "}
              for services within{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: ".6s",
                }}
              >
                AWS
              </span>
              . Back End: NodeJS/Express server deployed to Lambda function
              through the serverless framework and accessed through API Gateway.
              Front End: React App deployed through Amplify
            </li>

            <li className="highlight-item">
              📎 Maintained integrity with{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: ".9s",
                }}
              >
                third party API's
              </span>
              , improved existing codebases through refactoring strategies and
              contributed to the transition of legacy monolithic architecture to
              microservices
            </li>

            <li className="highlight-item">
              ✒️ Contributed to{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "1.2s",
                }}
              >
                5+ repositories weekly
              </span>
              . Responsible for architecture support, front end stories in React
              and back end stories in NodeJS/Express within any given sprint
            </li>
          </ul>
        </div>

        <div className="experience-title-3">Administrative Coordinator</div>

        <div className="timeframe-section-3">
          <Clock fill={"#ffff00"} stroke={"#363600"} />
          <div className="timeframe-3">Nov. 2018 - Dec. 2019</div>
        </div>

        <div
          className="resume-small-dot"
          style={{
            backgroundColor: "#ffff04",
            outline: "2px solid #ee702c",
            outlineStyle: "dashed",
            marginLeft: "190px",
          }}
        />

        <div className="highlight-section">
          <ul className="highlights">
            <li className="highlight-item">
              📊 Assisted in developing and{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "1.5s",
                }}
              >
                maintaining department goals
              </span>{" "}
              and implemented{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "1.8s",
                }}
              >
                organizational systems
              </span>{" "}
              to measure progress and milestone achievements
            </li>

            <li className="highlight-item">
              💻 Built and utilized various workflows and technologies to
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: ".3s",
                }}
              >
                {" "}
                streamline productivity
              </span>{" "}
              across multiple departmental pipelines
            </li>

            <li className="highlight-item">
              🖇️ Coordinated with other departments to determine the most
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: ".6s",
                }}
              >
                {" "}
                efficient strategies
              </span>{" "}
              to collaborate and share data and knowledge
            </li>

            <li className="highlight-item">
              💾 Maintained{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: ".9s",
                }}
              >
                departmental databases
              </span>{" "}
              and{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "1.2s",
                }}
              >
                organized reports
              </span>{" "}
              to send to leadership for daily performance metrics and
              operational implementation
            </li>
          </ul>
        </div>

        <div className="experience-title-3">Marketing Coordinator</div>

        <div className="timeframe-section-3">
          <Clock fill={"#ffff00"} stroke={"#363600"} />
          <div className="timeframe-3">Jul. 2018 - Oct. 2018</div>
        </div>

        <div
          className="resume-small-dot"
          style={{
            backgroundColor: "#ffff04",
            outline: "2px solid #ee702c",
            outlineStyle: "dashed",
            marginLeft: "186px",
          }}
        />

        <div className="highlight-section">
          <ul className="highlights">
            <li className="highlight-item">
              📱 Managed the social media calendar for{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "1.5s",
                }}
              >
                multi-channel marketing campaigns
              </span>{" "}
              and coordinated with various stake holders to obtain the necessary
              assets in a timely manner
            </li>

            <li className="highlight-item">
              📅 Scheduled and posted on various social media accounts resulting
              in{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "1.8s",
                }}
              >
                increased engagement
              </span>{" "}
              for the duration of various campaigns
            </li>

            <li className="highlight-item">
              ✏️ Crafted compelling copy for various marketing materials,
              including website content, email campaigns and social media posts,
              enhancing brand voice and{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: ".3s",
                }}
              >
                driving customer engagement
              </span>
            </li>

            <li className="highlight-item">
              📈 Monitored and analyzed campaign performance metrics, providing
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: ".6s",
                }}
              >
                {" "}
                actionable insights
              </span>{" "}
              and recommendations to optimize{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: ".9s",
                }}
              >
                marketing strategies
              </span>
            </li>
          </ul>
        </div>

        <div className="experience-title-3">Account Manager</div>

        <div className="timeframe-section-3">
          <Clock fill={"#ffff00"} stroke={"#363600"} />
          <div className="timeframe-3">Nov. 2016 - Jun. 2018</div>
        </div>

        <div
          className="resume-small-dot"
          style={{
            backgroundColor: "#ffff04",
            outline: "2px solid #ee702c",
            outlineStyle: "dashed",
            marginLeft: "190px",
          }}
        />

        <div className="highlight-section">
          <ul className="highlights">
            <li className="highlight-item">
              📞 Reached out to new prospective filmmakers,{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "1.2s",
                }}
              >
                signing over 140+ professional filmmakers
              </span>{" "}
              to contribute footage to Filmsupply
            </li>

            <li className="highlight-item">
              🧑‍🤝‍🧑 Managed ongoing relationships and{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "1.5s",
                }}
              >
                maintained daily correspondence
              </span>{" "}
              with the filmmakers I signed, answering any questions they
              presented and coordinated with them to determine new collaboration
              opportunities{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "1.8s",
                }}
              >
                new collaboration opportunities
              </span>
            </li>

            <li className="highlight-item">
              💿 Utilized various technologies to lead the{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: ".3s",
                }}
              >
                development of sales pipelines
              </span>{" "}
              to scale the most efficient onboarding process for new filmmakers
            </li>

            <li className="highlight-item">
              ✈️ Traveled nationally and represented the company at industry
              events where I{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: ".6s",
                }}
              >
                promoted the company
              </span>{" "}
              at trade shows and scouted{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: ".9s",
                }}
              >
                new opportunities
              </span>{" "}
              with other companies
            </li>
          </ul>
        </div>

        <div className="experience-title-3">Video Editor, Colorist</div>

        <div className="timeframe-section-3">
          <Clock fill={"#ffff00"} stroke={"#363600"} />
          <div className="timeframe-3">Jan. 2016 - Oct. 2016</div>
        </div>

        <div
          className="resume-small-dot"
          style={{
            backgroundColor: "#ffff04",
            outline: "2px solid #ee702c",
            outlineStyle: "dashed",
            marginLeft: "190px",
          }}
        />

        <div className="highlight-section">
          <ul className="highlights">
            <li className="highlight-item">
              🖱️ Was responsible for maintaining{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "1.2s",
                }}
              >
                high quality and continuity
              </span>{" "}
              across all the edited footage that was sent in by filmmakers and
              uploaded to Filmsupply
            </li>

            <li className="highlight-item">
              🎞️ Sourced footage from filmmakers and{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "1.5s",
                }}
              >
                edited various promotional material
              </span>{" "}
              that was distributed across multiple marketing channels
            </li>

            <li className="highlight-item">
              💽 Organized and engaged in various endeavors to{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "1.8s",
                }}
              >
                {" "}
                strengthen organization
              </span>{" "}
              for physical media across the office and file storage across
              software systems
            </li>

            <li className="highlight-item">
              📎 Identified key areas to{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "1.8s",
                }}
              >
                {" "}
                increase effeciency
              </span>{" "}
              across various staff members and{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: ".3s",
                }}
              >
                optimize the post production workflow
              </span>{" "}
              both in the office and remotely
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
