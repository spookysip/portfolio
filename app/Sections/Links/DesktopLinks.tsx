import TrackballDesktop from "@/app/emojis/TrackballDesktop";
import Download from "@/app/icons/Download";
import Link from "@/app/icons/Link";
import Clipboard from "@/app/icons/Clipboard";

interface Props {
  linkBannerRef2: any;
  linkAnimationDuration2: any;
  setCopy: any;
  copy: any;
  setDownload: any;
  handleDownload: any;
  download: any;
}

export default function DesktopLinks({
  linkBannerRef2,
  linkAnimationDuration2,
  setCopy,
  copy,
  setDownload,
  handleDownload,
  download,
}: Props) {
  return (
    <div className="desktop-links">
      <div className="link-title">
        <div className="horizontal-scrolling-items-link">
          <div
            ref={linkBannerRef2}
            style={{ animationDuration: `${linkAnimationDuration2}s` }}
            className="horizontal-scrolling-items__item"
          >
            Links
            <TrackballDesktop />
            Links
            <TrackballDesktop />
            Links
            <TrackballDesktop />
            Links
            <TrackballDesktop />
            Links
            <TrackballDesktop />
            Links
            <TrackballDesktop />
            Links
            <TrackballDesktop />
            Links
            <TrackballDesktop />
            Links
            <TrackballDesktop />
            Links
            <TrackballDesktop />
            Links
            <TrackballDesktop />
            Links
            <TrackballDesktop />
          </div>

          <div className="horizontal-scrolling-items__item">
            Links
            <TrackballDesktop />
            Links
            <TrackballDesktop />
            Links
            <TrackballDesktop />
            Links
            <TrackballDesktop />
            Links
            <TrackballDesktop />
            Links
            <TrackballDesktop />
            Links
            <TrackballDesktop />
            Links
            <TrackballDesktop />
            Links
            <TrackballDesktop />
            Links
            <TrackballDesktop />
            Links
            <TrackballDesktop />
            Links
            <TrackballDesktop />
          </div>
        </div>
      </div>

      <div
        className="link-parent-first"
        onClick={() => window.open("https://github.com/spookysip")}
      >
        <div>💽 GitHub</div>
        <span className="link-icon link-color">
          <Link />
        </span>
      </div>

      {/* <div
        className="link-parent"
        onClick={() => window.open("https://linkedin.com/in/mattclaughlin")}
      >
        <div>🤝 LinkedIn</div>
        <span className="link-icon link-color">
          <Link />
        </span>
      </div> */}

      <div
        className="link-parent"
        onClick={() => {
          navigator.clipboard.writeText("hi@mattlaughl.in");
          setCopy(true),
            setTimeout(() => {
              setCopy(false);
            }, 3000);
        }}
      >
        <div>📬 Copy Email</div>
        <span className={!copy ? "link-icon link-color" : "link-icon"}>
          <Clipboard copy={copy} />
        </span>
      </div>

      <div
        className="link-parent"
        onClick={() => {
          setDownload(true),
            handleDownload(),
            setTimeout(() => {
              setDownload(false);
            }, 3000);
        }}
      >
        <div>📜 Resume</div>
        <span className={!download ? "link-icon link-color" : "link-icon"}>
          <Download download={download} />
        </span>
      </div>
    </div>
  );
}
