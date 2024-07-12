import Devil from "../emojis/Devil";

interface Props {
  scrolled: any;
  backTopBannerRef: any;
  backTopAnimationDuration: any;
}

export default function Footer({
  scrolled,
  backTopBannerRef,
  backTopAnimationDuration,
}: Props) {
  return (
    <div
      className={
        scrolled > 0
          ? "show-bottom-banner"
          : scrolled === 0
          ? "hide-bottom-banner"
          : undefined
      }
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    >
      <div className="horizontal-scrolling-items">
        <div
          ref={backTopBannerRef}
          style={{ animationDuration: `${backTopAnimationDuration}s` }}
          className="horizontal-scrolling-items__item"
        >
          back to top
          <Devil />
          back to top
          <Devil />
          Back to Top
          <Devil />
          back to top
          <Devil />
          back to top
          <Devil />
          Back to Top
          <Devil />
          back to top
          <Devil />
          Back to Top
          <Devil />
          back to top
          <Devil />
          back to top
          <Devil />
          Back to Top
          <Devil />
          back to top
          <Devil />
        </div>
      </div>
    </div>
  );
}
