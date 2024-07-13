"use client";

import Developer from "../joyride/Developer";
import Admin from "../joyride/Admin";
import Media from "../joyride/Media";
import Writer from "../joyride/Writer";
import ProductManager from "../joyride/ProductManager";
import Designer from "../joyride/Designer";

import TV from "../emojis/TV";
import Floppy from "../emojis/Floppy";
import Folder from "../emojis/Folder";
import Paint from "../emojis/Paint";
import Hands from "../emojis/Hands";
import Pen from "../emojis/Pen";

interface Props {
  roleBannerRef: any;
  roleAnimationDuration: any;
}

export default function Header({
  roleBannerRef,
  roleAnimationDuration,
}: Props) {
  return (
    <div>
      <div className="role">
        <div className="horizontal-scrolling-items-role">
          <div
            ref={roleBannerRef}
            style={{ animationDuration: `${roleAnimationDuration}s` }}
            className="horizontal-scrolling-items__item"
          >
            <Developer />
            <Folder />
            <Admin />
            <TV />
            <Media />
            <Pen />
            <Writer />
            <Hands />
            <ProductManager />
            <Paint />
            <Designer />
            <Floppy />

            <Developer />
            <Folder />
            <Admin />
            <TV />
            <Media />
            <Pen />
            <Writer />
            <Hands />
            <ProductManager />
            <Paint />
            <Designer />
            <Floppy />
          </div>
        </div>
      </div>
    </div>
  );
}
