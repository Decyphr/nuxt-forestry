<template>
  <!--TODO: Fix Footer -->
  <footer class="page-footer">
    <div class="page-footer-main">
      <div class="page-footer-main-container">
        <section class="footer-contact-info">
          <!-- <img src="/assets/images/logo.svg" alt="" />
          <span class="address"
            >{{ seomatic.site.identity.genericStreetAddress }},
            {{ seomatic.site.identity.genericAddressLocality }},
            {{ seomatic.site.identity.genericAddressRegion }}
            {{ seomatic.site.identity.genericPostalCode }}</span
          >
          <span class="copyright"
            >&copy; Copyright {{ now | date('Y') }} {{ siteName }}</span
          >
        </section>

        <section class="footer-navigation">
          <nav class="footer-nav-primary" aria-label="Footer Primary">
            <ul>
              {% include '_includes/nav/core' with {showChildren: false} %}
            </ul>
          </nav>
          <nav class="footer-nav-bottom" aria-label="Footer Copyright">
            <ul>
              {% for link in headerFooterContent.footerAuxNavigation.all() %}
              <li>
                <a {{ link.navLink.getLinkAttributes() }}>{{
                  link.navLink.getText()
                }}</a>
              </li>
              {% endfor %}
            </ul>
          </nav> -->
        </section>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
