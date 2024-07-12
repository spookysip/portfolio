"use client";

import DesktopLinks from "./DesktopLinks";
import MobileLinks from "./MobileLinks";

interface Props {
  linkBannerRef1: any;
  linkAnimationDuration1: any;
  linkBannerRef2: any;
  linkAnimationDuration2: any;
  setCopy: any;
  copy: any;
  setDownload: any;
  handleDownload: any;
  download: any;
}

export default function Links({
  linkBannerRef1,
  linkAnimationDuration1,
  linkBannerRef2,
  linkAnimationDuration2,
  setCopy,
  copy,
  setDownload,
  handleDownload,
  download,
}: Props) {
  return (
    <div className="link-root">
      <DesktopLinks
        linkBannerRef2={linkBannerRef2}
        linkAnimationDuration2={linkAnimationDuration2}
        setCopy={setCopy}
        copy={copy}
        setDownload={setDownload}
        handleDownload={handleDownload}
        download={download}
      />
      <MobileLinks
        linkBannerRef1={linkBannerRef1}
        linkAnimationDuration1={linkAnimationDuration1}
        setCopy={setCopy}
        copy={copy}
        setDownload={setDownload}
        handleDownload={handleDownload}
        download={download}
      />
    </div>
  );
}
