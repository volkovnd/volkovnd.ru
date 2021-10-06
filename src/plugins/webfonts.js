const loadFonts = () => {
  import("webfontloader").then((WebFont) => {
    WebFont.load({
      google: {
        families: ["Open Sans:300,400,500,700:cyrillic"],
      },
    });
  });
};

loadFonts();
