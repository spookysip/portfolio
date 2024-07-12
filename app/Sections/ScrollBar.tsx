"use client";

import MonsterIcon from "../icons/MonsterIcon";

interface Props {
  scrolled: any;
  avatarRef: any;
}

export default function ScrollBar({ scrolled, avatarRef }: Props) {
  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{
          width: scrolled + "%",
        }}
      ></div>
      <div
        className="progress-monster"
        ref={avatarRef}
        // onMouseDown={handleMouseDown}
        style={{
          marginLeft: scrolled + "%",
        }}
      >
        <MonsterIcon />
      </div>
    </div>
  );
}
