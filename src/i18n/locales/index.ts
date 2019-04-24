const localeData = [
  ...require("react-intl/locale-data/en"),
  ...require("react-intl/locale-data/zh"),
];

export interface Language {
  name: string;
  code: string;
}

const languages: Language[] = [
  { code: "en", name: "English" },
  //{ code: "zh", name: "中文" },
];

export { languages, localeData };
