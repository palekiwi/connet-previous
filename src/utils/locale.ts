import * as locale from 'browser-locale';

export function getLocale(): Lang {
  return parseLocale();
}

export const saveLocale = (lang: Lang) => window.localStorage.setItem('lang', lang);

function parseLocale (): Lang {
  const s = window.localStorage.getItem('lang') || (() => locale())();

  switch (s.toLowerCase().substr(0,2)) {
    case 'zh': return 'zh';
    default:   return 'en';
  }
}
