import TrackballMobile from "@/app/emojis/TrackballMobile";
import Download from "@/app/icons/Download";
import Link from "@/app/icons/Link";
import Clipboard from "@/app/icons/Clipboard";

interface Props {
  linkBannerRef1: any;
  linkAnimationDuration1: any;
  setCopy: any;
  copy: any;
  setDownload: any;
  handleDownload: any;
  download: any;
}

export default function MobileLinks({
  linkBannerRef1,
  linkAnimationDuration1,
  setCopy,
  copy,
  setDownload,
  handleDownload,
  download,
}: Props) {
  return (
    <div className="mobile-links">
      <div className="mobile-link-parent">
        <div className="horizontal-scrolling-items-link">
          <div
            ref={linkBannerRef1}
            style={{ animationDuration: `${linkAnimationDuration1}s` }}
            className="horizontal-scrolling-items__item"
          >
            Links
            <TrackballMobile />
            Links
            <TrackballMobile />
            Links
            <TrackballMobile />
            Links
            <TrackballMobile />
            Links
            <TrackballMobile />
            Links
            <TrackballMobile />
            Links
            <TrackballMobile />
            Links
            <TrackballMobile />
            Links
            <TrackballMobile />
            Links
            <TrackballMobile />
            Links
            <TrackballMobile />
            Links
            <TrackballMobile />
            Links
            <TrackballMobile />
            Links
            <TrackballMobile />
            Links
            <TrackballMobile />
            Links
            <TrackballMobile />
          </div>
        </div>
      </div>

      <div className="mobile-links-row-1">
        <div
          className="mobile-link"
          onClick={() => window.open("https://github.com/spookysip")}
        >
          💽 GitHub
          <div className="link-icon link-color">
            <Link />
          </div>
        </div>

        {/* <div
          className="mobile-link"
          onClick={() => window.open("https://linkedin.com/in/mattclaughlin")}
        >
          🤝 LinkedIn
          <span className="link-icon link-color">
            <Link />
          </span>
        </div> */}
      </div>

      <div className="mobile-links-row-2">
        <div
          className="mobile-link mobile-link-border-right"
          onClick={() => {
            navigator.clipboard.writeText("hi@mattlaughl.in");
            setCopy(true),
              setTimeout(() => {
                setCopy(false);
              }, 3000);
          }}
        >
          📬 Copy Email
          <span className={!copy ? "link-icon link-color" : "link-icon"}>
            <Clipboard copy={copy} />
          </span>
        </div>
        <div
          className="mobile-link"
          onClick={() => {
            setDownload(true),
              handleDownload(),
              setTimeout(() => {
                setDownload(false);
              }, 3000);
          }}
        >
          📜 Resume
          <span className={!download ? "link-icon link-color" : "link-icon"}>
            <Download download={download} />
          </span>
        </div>
      </div>
    </div>
  );
}
