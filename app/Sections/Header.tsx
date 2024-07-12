"use client";

import Frog from "../emojis/Frog";

interface Props {
  nameBannerRef: any;
  nameAnimationDuration: any;
}

export default function Header({
  nameBannerRef,
  nameAnimationDuration,
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
              <span className="english-name">TAYLOR LAUGHLIN</span>
            </span>
            <span className="emoji-frog">
              <Frog />
            </span>
            テーラー ロフリン
            <span className="emoji-frog">
              <Frog />
            </span>
            <span className="english-name">TAYLOR LAUGHLIN</span>
            <span className="emoji-frog">
              <Frog />
            </span>
            テーラー ロフリン
            <span className="emoji-frog">
              <Frog />
            </span>
            <span className="english-name">TAYLOR LAUGHLIN</span>
            <span className="emoji-frog">
              <Frog />
            </span>
            テーラー ロフリン
            <span className="emoji-frog">
              <Frog />
            </span>{" "}
            <span className="english-name">TAYLOR LAUGHLIN</span>
            <span className="emoji-frog">
              <Frog />
            </span>
            テーラー ロフリン
            <span className="emoji-frog">
              <Frog />
            </span>
            <span className="english-name">TAYLOR LAUGHLIN</span>
            <span className="emoji-frog">
              <Frog />
            </span>
            テーラー ロフリン
            <span className="emoji-frog">
              <Frog />
            </span>
            <span className="english-name">TAYLOR LAUGHLIN</span>
            <span className="emoji-frog">
              <Frog />
            </span>
            テーラー ロフリン
            <span className="emoji-frog">
              <Frog />
            </span>
          </div>

          <div className="name-horizontal-scrolling-items__item">
            <span className="english-name">TAYLOR LAUGHLIN</span>
            <Frog />
            テーラー ロフリン
            <Frog />
            <span className="english-name">TAYLOR LAUGHLIN</span>
            <Frog />
            テーラー ロフリン
            <Frog />
            <span className="english-name">TAYLOR LAUGHLIN</span>
            <Frog />
            テーラー ロフリン
            <Frog />
            <span className="english-name">TAYLOR LAUGHLIN</span>
            <Frog />
            テーラー ロフリン
            <Frog />
            <span className="english-name">TAYLOR LAUGHLIN</span>
            <Frog />
            テーラー ロフリン
            <Frog />
            <span className="english-name">TAYLOR LAUGHLIN</span>
            <Frog />
            テーラー ロフリン
            <Frog />
          </div>
        </div>
      </div>
    </div>
  );
}
