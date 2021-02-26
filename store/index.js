import siteData from '../content/data/site-settings.json';

export const state = () => ({
  identity: {
    companyName: siteData.company,
    address: siteData.identity.streetAddress,
    locality: siteData.identity.addressLocality,
    region: siteData.identity.addressRegion,
    zipCode: siteData.identity.zipCode,
  },
});
