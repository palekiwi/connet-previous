const manageTranslations = require("react-intl-translations-manager").default;

manageTranslations({
  messagesDirectory: 'src/messages',
  translationsDirectory: 'src/i18n/translations/',
  languages: ['en', 'zh']
});
