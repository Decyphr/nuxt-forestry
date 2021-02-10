
    {% for block in entry.news.all() %}
    <h2>{{ block.newsHeadline }}</h2>

    <div class="news-listing">
      {% include '_includes/newsArticle' with { 'entry': block } %}
    </div>
    {% endfor %}