import Dragon from "../emojis/Dragon";

interface Props {
  bannerRef: any;
  techBannerRef: any;
  techAnimationDuration: any;
  groupedData: any;
  techDisplay: any;
  setTechDisplay: any;
  setScore: any;
  setGamePower: any;
  customStack: any;
  setCustomStackAnimationDuration: any;
}

export default function Technologies({
  bannerRef,
  techBannerRef,
  techAnimationDuration,
  groupedData,
  techDisplay,
  setTechDisplay,
  setScore,
  setGamePower,
  customStack,
  setCustomStackAnimationDuration,
}: Props) {
  return (
    <div className="technologies-parent">
      <div
        ref={bannerRef}
        // className={`technologies-title ${
        //   isSticky ? "sticky-banner" : undefined
        // }`}
        // style={{ width: isMobile ? "100%" : parentWidth + "px" }}
        className="technologies-title"
      >
        <div className="horizontal-scrolling-items">
          <div
            ref={techBannerRef}
            style={{ animationDuration: `${techAnimationDuration}s` }}
            className="horizontal-scrolling-items__item"
          >
            Technologies
            <Dragon />
            Technologies
            <Dragon />
            Technologies
            <Dragon />
            Technologies
            <Dragon />
            Technologies
            <Dragon />
            Technologies
            <Dragon />
            Technologies
            <Dragon />
            Technologies
            <Dragon />
            Technologies
            <Dragon />
            Technologies
            <Dragon />
            Technologies
            <Dragon />
            Technologies
            <Dragon />
          </div>

          <div className="horizontal-scrolling-items__item">
            Technologies
            <Dragon />
            Technologies
            <Dragon />
            Technologies
            <Dragon />
            Technologies
            <Dragon />
            Technologies
            <Dragon />
            Technologies
            <Dragon />
            Technologies
            <Dragon />
            Technologies
            <Dragon />
            Technologies
            <Dragon />
            Technologies
            <Dragon />
            Technologies
            <Dragon />
            Technologies
            <Dragon />
          </div>
        </div>
      </div>

      <div className="skill-section-parent">
        {Object.keys(groupedData).map(
          (type) =>
            techDisplay.filter(
              (item: any) => item.type === type && !item.selected
            ).length > 0 && (
              <div key={type} className="skill-section">
                <div className="type">{type}</div>

                <div className="options">
                  {groupedData[type].map(
                    (item: any) =>
                      !item.selected && (
                        <div
                          key={item.id}
                          className="item"
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
                            );
                            setScore(0);
                            setGamePower(false);
                            setCustomStackAnimationDuration(
                              customStack.scrollWidth / 50
                            );
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
  );
}
