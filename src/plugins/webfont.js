import { WEB_FONT_CONFIG } from "@/config";

const loadFonts = (config) => {
  import("webfontloader").then((WebFont) => {
    WebFont.load(config);
  });
};

const install = function (Vue, options) {
  loadFonts(options);
};

export default {
  install,
};
