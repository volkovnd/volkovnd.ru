import config from "@/config";
import WebFont from "webfontloader";

import { pluginFactory } from "@/utils/plugins";

const loadWebFonts = () => {
  if (config.webFonts) WebFont.load(config.webFonts);
};

export default pluginFactory(loadWebFonts);
