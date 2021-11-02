import { WEB_FONT_CONFIG } from "@/config";

const install = function () {
  import("webfontloader").then((WebFont) => {
    return WebFont.load(WEB_FONT_CONFIG);
  });
};

export const WebFontPlugin = {
  install,
};
