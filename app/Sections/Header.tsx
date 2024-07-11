"use client";

import Developer1 from "../joyride/Developer1";
import Developer2 from "../joyride/Developer2";
import Developer3 from "../joyride/Developer3";

import Admin1 from "../joyride/Admin1";
import Admin2 from "../joyride/Admin2";
import Admin3 from "../joyride/Admin3";

import Media1 from "../joyride/Media1";
import Media2 from "../joyride/Media2";
import Media3 from "../joyride/Media3";

import Frog from "../emojis/Frog";
import TV from "../emojis/TV";
import Floppy from "../emojis/Floppy";
import Folder from "../emojis/Folder";

interface Props {
  nameBannerRef: any;
  roleBannerRef: any;
  nameAnimationDuration: any;
  roleAnimationDuration: any;
}

export default function Header({
  nameBannerRef,
  roleBannerRef,
  nameAnimationDuration,
  roleAnimationDuration,
}: Props) {
  return (
    <div>
      <div className="name-container">
        <div className="horizontal-scrolling-items-name">
          <div
            className="horizontal-scrolling-items__item"
            ref={nameBannerRef}
            style={{ animationDuration: `${nameAnimationDuration}s` }}
          >
            <span className="english-name">
              <span className="english-name">MATT LAUGHLIN</span>
            </span>
            <span className="emoji-frog">
              <Frog />
            </span>
            マット ロフリン
            <span className="emoji-frog">
              <Frog />
            </span>
            <span className="english-name">MATT LAUGHLIN</span>
            <span className="emoji-frog">
              <Frog />
            </span>
            マット ロフリン
            <span className="emoji-frog">
              <Frog />
            </span>
            <span className="english-name">MATT LAUGHLIN</span>
            <span className="emoji-frog">
              <Frog />
            </span>
            マット ロフリン
            <span className="emoji-frog">
              <Frog />
            </span>{" "}
            <span className="english-name">MATT LAUGHLIN</span>
            <span className="emoji-frog">
              <Frog />
            </span>
            マット ロフリン
            <span className="emoji-frog">
              <Frog />
            </span>
            <span className="english-name">MATT LAUGHLIN</span>
            <span className="emoji-frog">
              <Frog />
            </span>
            マット ロフリン
            <span className="emoji-frog">
              <Frog />
            </span>
            <span className="english-name">MATT LAUGHLIN</span>
            <span className="emoji-frog">
              <Frog />
            </span>
            マット ロフリン
            <span className="emoji-frog">
              <Frog />
            </span>
          </div>

          <div className="name-horizontal-scrolling-items__item">
            <span className="english-name">MATT LAUGHLIN</span>
            <Frog />
            マット ロフリン
            <Frog />
            <span className="english-name">MATT LAUGHLIN</span>
            <Frog />
            マット ロフリン
            <Frog />
            <span className="english-name">MATT LAUGHLIN</span>
            <Frog />
            マット ロフリン
            <Frog />
            <span className="english-name">MATT LAUGHLIN</span>
            <Frog />
            マット ロフリン
            <Frog />
            <span className="english-name">MATT LAUGHLIN</span>
            <Frog />
            マット ロフリン
            <Frog />
            <span className="english-name">MATT LAUGHLIN</span>
            <Frog />
            マット ロフリン
            <Frog />
          </div>
        </div>
      </div>

      <div className="role">
        <div className="horizontal-scrolling-items-role">
          <div
            ref={roleBannerRef}
            style={{ animationDuration: `${roleAnimationDuration}s` }}
            className="horizontal-scrolling-items__item"
          >
            <Developer1 />
            <Folder />
            <Admin1 />
            <span>
              <TV />
            </span>
            <Media1 />
            <Floppy />
            <Developer2 />
            <Folder />
            <Admin2 />
            <span>
              <TV />
            </span>
            <Media2 />
            <Floppy />
            <Developer3 />
            <Folder />
            <Admin3 />
            <span>
              <TV />
            </span>
            <Media3 />
            <Floppy />
            <Developer1 />
            <Folder />
            <Admin1 />
            <span>
              <TV />
            </span>
            <Media1 />
            <Floppy />
            <Developer2 />
            <Folder />
            <Admin2 />
            <span>
              <TV />
            </span>
            <Media2 />
            <Floppy />
            <Developer3 />
            <Folder />
            <Admin3 />
            <span>
              <TV />
            </span>
            <Media3 />
            <Floppy />
          </div>

          <div className="horizontal-scrolling-items__item">
            <Developer1 />
            🗂️
            <Admin1 />
            📺
            <Media1 />
            💾
            <Developer2 />
            🗂️
            <Admin2 />
            📺
            <Media1 />
            💾
            <Developer3 />
            🗂️
            <Admin3 />
            📺
            <Media1 />
            💾
            <Developer1 />
            🗂️
            <Admin1 />
            📺
            <Media1 />
            💾
            <Developer2 />
            🗂️
            <Admin2 />
            📺
            <Media1 />
            💾
            <Developer3 />
            🗂️
            <Admin3 />
            📺
            <Media1 />
            💾
          </div>
        </div>
      </div>
    </div>
  );
}
