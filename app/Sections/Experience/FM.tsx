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

        <div className="experience-summary">
          🎥{" "}
          <span
            className="resume-color-highlight"
            style={{
              animationDelay: ".21s",
            }}
          >
            Filmsupply and 🎹 Musicbed
          </span>{" "}
          are sister companies dedicated to supporting creatives through
          <span
            className="resume-color-highlight"
            style={{
              animationDelay: "2.4s",
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
          <div className="timeframe-3">Jul. 2020 - Nov. 2021</div>
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
                  animationDelay: "3.6s",
                }}
              >
                internal admin solutions
              </span>
              , resulting in{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "3.6s",
                }}
              >
                increased efficiency
              </span>
            </li>

            <li className="highlight-item">
              💬 Conducted internal team discussions to{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "3.6s",
                }}
              >
                identify key employee needs
              </span>
              , driving the creation of{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "3.6s",
                }}
              >
                product roadmaps
              </span>{" "}
              and
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "3.6s",
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
                  animationDelay: "3.6s",
                }}
              >
                from ideation to launch
              </span>
              , ensuring timely delivery and{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "3.6s",
                }}
              >
                alignment with business goals
              </span>{" "}
              and employee expectations
            </li>

            <li className="highlight-item">
              📜 Developed and{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "3.6s",
                }}
              >
                maintained product documentation
              </span>
              , including user guides, release notes, and training materials,
              ensuring
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "3.6s",
                }}
              >
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
                  animationDelay: "2.7s",
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
                  stackElement.current.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
            >
              Create Stack ⬆️
            </div>

            <li className="highlight-item">
              🏠 Delivered continued{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "3.6s",
                }}
              >
                architecture imporvements
              </span>{" "}
              for services within{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "3.0s",
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
                  animationDelay: "3.3s",
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
                  animationDelay: "3.6s",
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
                  animationDelay: "3.6s",
                }}
              >
                maintaining department goals
              </span>{" "}
              and implemented{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "3.6s",
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
                  animationDelay: "3.6s",
                }}
              >
                streamline productivity
              </span>{" "}
              across multiple departmental pipelines
            </li>

            <li className="highlight-item">
              🖇️ Coordinated with other departments to determine the most
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "3.6s",
                }}
              >
                efficient strategies
              </span>{" "}
              to collaborate and share data and knowledge
            </li>

            <li className="highlight-item">
              💾 Maintained{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "3.6s",
                }}
              >
                departmental databases
              </span>{" "}
              and{" "}
              <span
                className="resume-color-highlight"
                style={{
                  animationDelay: "3.6s",
                }}
              >
                organized reports
              </span>{" "}
              to send to leadership for daily performance metics and operational
              implementation
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
              📱 Managed the social media calendar for multi-channel marketing
              campaigns and coordinated with various stake holders to obtain the
              necessary assets in a timely manner
            </li>

            <li className="highlight-item">
              📅 Scheduled and posted on various social media accounts resulting
              in increased engagement for the duration of various campaigns
            </li>

            <li className="highlight-item">
              ✏️ Crafted compelling copy for various marketing materials,
              including website content, email campaigns, and social media
              posts, enhancing brand voice and driving customer engagement
            </li>

            <li className="highlight-item">
              📈 Monitored and analyzed campaign performance metrics, providing
              actionable insights and recommendations to optimize marketing
              strategies
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
              📞 Reached out to new perspective filmmakers, signing over 140+ to
              contribute footage to Filmsupply
            </li>

            <li className="highlight-item">
              🧑‍🤝‍🧑 Managed ongoing relationships and maintained daily
              correspondence with the filmmakers I signed, answering any
              questions they presented and coordinated with them to determine
              new collaboration opportunities
            </li>

            <li className="highlight-item">
              💿 Utilized various technologies to lead the development of sales
              pipelines to scale the most efficient onboarding process for new
              filmmakers
            </li>

            <li className="highlight-item">
              ✈️ Traveled nationally and represented the company at industry
              events where Ipromoted the company at trade shows and scouted new
              opportunities with other companies
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
