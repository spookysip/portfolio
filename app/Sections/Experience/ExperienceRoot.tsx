import ExperienceHeader from "./ExperienceHeader";
import CozyPunk from "./Cozypunk";
import TFOM from "./Tfom";
import FM from "./Fm";
import Daystar from "./Daystar";
import Elevate from "./Elevate";
import WorldVentures from "./WorldVentures";

interface Props {
  placeholderRef: any;
  isSticky: any;
  experienceBannerRef: any;
  experienceAnimationDuration: any;
  setStackTitle: any;
  setTechDisplay: any;
  stackElement: any;
  setVideoId: any;
  theaterElement: any;
}

export default function ExperienceRoot({
  placeholderRef,
  isSticky,
  experienceBannerRef,
  experienceAnimationDuration,
  setVideoId,
  theaterElement,
  setStackTitle,
  setTechDisplay,
  stackElement,
}: Props) {
  return (
    <div>
      <div className="experience-parent">
        <ExperienceHeader
          placeholderRef={placeholderRef}
          isSticky={isSticky}
          experienceBannerRef={experienceBannerRef}
          experienceAnimationDuration={experienceAnimationDuration}
        />
        <div className="experience-inline">
          <CozyPunk
            setStackTitle={setStackTitle}
            setTechDisplay={setTechDisplay}
            stackElement={stackElement}
          />
          <TFOM setVideoId={setVideoId} theaterElement={theaterElement} />
          <FM
            setStackTitle={setStackTitle}
            setTechDisplay={setTechDisplay}
            stackElement={stackElement}
          />
          <Daystar />
          <Elevate />
          <WorldVentures />
        </div>
      </div>
    </div>
  );
}
