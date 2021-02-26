<template>
  <div class="container">
    <h1>Atoms</h1>

    <a name="colors"></a>
    <h2 class="sg-subheading">Colors</h2>

    <ul class="sg-colors no-bullets">
      <li>
        <span class="sg-swatch bg black"></span>
        <span class="sg-label">black</span>
      </li>
      <li>
        <span class="sg-swatch bg white"></span>
        <span class="sg-label">white</span>
      </li>
      <li>
        <span class="sg-swatch bg error"></span>
        <span class="sg-label">error</span>
      </li>
      <li>
        <span class="sg-swatch bg md-primary-color"></span>
        <span class="sg-label">md-primary-color</span>
      </li>
      <li>
        <span class="sg-swatch bg dk-primary-color"></span>
        <span class="sg-label">dk-primary-color</span>
      </li>
      <li>
        <span class="sg-swatch bg md-secondary-color"></span>
        <span class="sg-label">md-secondary-color</span>
      </li>
    </ul>

    <a name="fonts"></a>
    <h2 class="sg-subheading">Fonts</h2>

    <p>Primary font: "Font-Family", sans-serif;</p>
    <p><em>Primary font italic: "Font-Family", sans-serif;</em></p>
    <p><strong>Primary font bold: "Font-Family", sans-serif;</strong></p>
    <p class="font-secondary">Secondary font: "Font-Family", cursive;</p>
    <p class="font-secondary">
      <em>Secondary font italic: "Font-Family", cursive;</em>
    </p>
    <p class="font-secondary">
      <strong>Secondary font bold: "Font-Family", cursive;</strong>
    </p>

    <a name="headings"></a>
    <h2 class="sg-subheading">Headings</h2>

    <h1>Heading Level 1</h1>
    <h2>Heading Level 2</h2>
    <h3>Heading Level 3</h3>
    <h4>Heading Level 4</h4>
    <h5>Heading Level 5</h5>
    <h6>Heading Level 6</h6>

    <a name="paragraphs"></a>
    <h2 class="sg-subheading">Paragraphs</h2>

    <p>
      A paragraph (from the Greek paragraphos, "to write beside" or "written
      beside") is a self-contained unit of a discourse in writing dealing with a
      particular point or idea. A paragraph consists of one or more sentences.
      Though not required by the syntax of any language, paragraphs are usually
      an expected part of formal writing, used to organize longer prose.
    </p>

    <div class="sg-element">
      <a name="blockquotes"></a>
      <h2 class="sg-subheading">Blockquotes</h2>

      <!-- {% include 'styleguide/_includes/blocks/blockquote' with { 'position':
      'full' } %} {% include 'styleguide/_includes/blocks/blockquote' with {
      'position': 'right' } %} {% include
      'styleguide/_includes/blocks/blockquote' with { 'position': 'left' } %} -->
    </div>

    <div class="sg-element">
      <a name="text"></a>
      <h2 class="sg-subheading">Text</h2>

      <div class="text">
        <p><a href="#">This is a text link</a></p>

        <p><strong>Strong is used to indicate strong importance</strong></p>

        <p><em>This text has added emphasis</em></p>
      </div>
    </div>

    <a name="hr"></a>
    <h2 class="sg-subheading">Horizontal Rule</h2>

    <hr />

    <a name="unordered-lists"></a>
    <h2 class="sg-subheading">Unordered Lists</h2>

    <div class="block-content">
      <ul>
        <li>This is a list item in an unordered list</li>
        <li>
          An unordered list is a list in which the sequence of items is not
          important. Sometimes, an unordered list is a bulleted list. And this
          is a long list item in an unordered list that can wrap onto a new
          line.
        </li>
        <li>
          Lists can be nested inside of each other
          <ul>
            <li>This is a nested list item</li>
            <li>This is another nested list item in an unordered list</li>
          </ul>
        </li>
        <li>This is the last list item</li>
      </ul>
    </div>

    <a name="ordered-lists"></a>
    <h2 class="sg-subheading">Ordered Lists</h2>

    <div class="block-content">
      <ol>
        <li>This is a list item in an ordered list</li>
        <li>
          An ordered list is a list in which the sequence of items is important.
          An ordered list does not necessarily contain sequence characters.
        </li>
        <li>
          Lists can be nested inside of each other
          <ol>
            <li>This is a nested list item</li>
            <li>This is another nested list item in an ordered list</li>
          </ol>
        </li>
        <li>This is the last list item</li>
      </ol>
    </div>

    <a name="form-elements"></a>
    <h2 class="sg-subheading">Form Elements</h2>

    <!-- {% include 'styleguide/_includes/blocks/sampleForm' %} -->

    <a name="buttons"></a>
    <h2 class="sg-subheading">Buttons</h2>

    <p>
      <a class="btn btn-primary" href="#">Primary Button - Link</a>
      <a class="btn btn-secondary" href="#">Secondary Button - Link</a>
    </p>

    <p>
      <button class="btn btn-primary">Primary Button - Button</button>
      <button class="btn btn-secondary">Secondary Button - Button</button>
    </p>

    <p>
      <a class="play-button" href="#" aria-label="Play Video">
        <span class="fa fa-play"></span>
      </a>
    </p>

    <a name="callout-links"></a>
    <h2 class="sg-subheading">Callout Links</h2>

    <p><!-- {% include 'styleguide/_includes/blocks/calloutLink' %} --></p>

    <a name="tables"></a>
    <h2 class="sg-subheading">Tables</h2>

    <table>
      <thead>
        <tr>
          <th>Table Heading 1</th>
          <th>Table Heading 2</th>
          <th>Table Heading 3</th>
          <th>Table Heading 4</th>
          <th>Table Heading 5</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Table Cell 1</td>
          <td>Table Cell 2</td>
          <td>Table Cell 3</td>
          <td>Table Cell 4</td>
          <td>Table Cell 5</td>
        </tr>
        <tr>
          <td>Table Cell 1</td>
          <td>Table Cell 2</td>
          <td>Table Cell 3</td>
          <td>Table Cell 4</td>
          <td>Table Cell 5</td>
        </tr>
        <tr>
          <td>Table Cell 1</td>
          <td>Table Cell 2</td>
          <td>Table Cell 3</td>
          <td>Table Cell 4</td>
          <td>Table Cell 5</td>
        </tr>
        <tr>
          <td>Table Cell 1</td>
          <td>Table Cell 2</td>
          <td>Table Cell 3</td>
          <td>Table Cell 4</td>
          <td>Table Cell 5</td>
        </tr>
      </tbody>
    </table>

    <div class="sg-element">
      <a name="disclaimer"></a>
      <h2 class="sg-subheading">Disclaimer</h2>

      <div class="block-disclaimer">
        <p>
          Disclaimer text style: Special must be booked a minimum of two weeks
          from planned arrival date. Also, must include your telephone number so
          a theme can be discussed. Valid for 1, 2 or 3 bedroom condo, lakeview
          or lakefront. Valid Fall-Spring.
        </p>
      </div>
    </div>

    <div class="sg-element">
      <a name="social-icons"></a>
      <h2 class="sg-subheading">Social Icons</h2>

      <social-icons />
    </div>
  </div>
</template>
<script>
import SocialIcons from '~/components/SocialIcons';

export default {
  layout: 'styleguide',
  components: { SocialIcons },
};
</script>
