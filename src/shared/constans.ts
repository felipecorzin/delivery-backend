export const languages = ['es','en', 'sk', 'cs'];

export const countryLang = {
  default: 'es',
  es: 'es',
  en: 'en',
  sk: 'sk',
  cz: 'cs',
};

export const shippingTypes = ['basic', 'extended'];

export const shippingCost = {
    es: { basic: { cost: 5, limit: 100 }, extended: { cost: 10, limit: 200 } },
    en: { basic: { cost: 5, limit: 100 }, extended: { cost: 10, limit: 200 } },
    sk: { basic: { cost: 5, limit: 100 }, extended: { cost: 10, limit: 200 } },
    cs: {
        basic: { cost: 150, limit: 3000 },
        extended: { cost: 300, limit: 6000 },
    },
};

export const paginationLimit = 12;