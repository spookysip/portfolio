import Crystal from "@/app/emojis/Crystal";

interface Props {
  placeholderRef: any;
  isSticky: any;
  experienceBannerRef: any;
  experienceAnimationDuration: any;
}

export default function ExperienceHeader({
  placeholderRef,
  isSticky,
  experienceBannerRef,
  experienceAnimationDuration,
}: Props) {
  return (
    <div className="experience-parent">
      <div className="skills" id="parentDiv">
        <div
          ref={placeholderRef}
          style={{
            height: isSticky ? experienceBannerRef.current.clientHeight + 5 : 0,
          }}
        />
      </div>

      <div
        className={`container container-border-top ${
          isSticky ? "sticky-banner" : undefined
        }`}
      >
        <div className="horizontal-scrolling-items">
          <div
            ref={experienceBannerRef}
            style={{ animationDuration: `${experienceAnimationDuration}s` }}
            className="horizontal-scrolling-items__item"
          >
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
          </div>

          <div className="horizontal-scrolling-items__item">
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
            Experience
            <Crystal />
          </div>
        </div>
      </div>
    </div>
  );
}
