import siteData from '../content/data/site-settings.json';
import headerFooterContent from '../content/global/headerFooterContent.json';

export const state = () => ({
  globals: {
    displayHelloBar: headerFooterContent.display_hello_bar,
    helloBarContent: headerFooterContent.hello_bar_content,
    socialNetworks: headerFooterContent.social_networks,
  },

  identity: {
    companyName: siteData.company,
    address: siteData.identity.street_address,
    locality: siteData.identity.address_locality,
    region: siteData.identity.address_region,
    zipCode: siteData.identity.zip_code,
  },
});
