const localeData = [
  ...require("react-intl/locale-data/en"),
  ...require("react-intl/locale-data/zh"),
];

interface Language {
  name: string;
  code: string;
}

const languages: Language[] = [
  { code: "en", name: "English" },
  //{ code: "zh", name: "中文" },
];

export { Language, languages, localeData };
