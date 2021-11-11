import config from "@/config";
import { pluginFactory } from "@/utils/plugins";

import WebFont from "webfontloader";

const webFontsConfig = config.webFonts || null;

const loadWebFonts = () => {
  if (webFontsConfig) WebFont.load(webFontsConfig);
};

export default pluginFactory(loadWebFonts);
