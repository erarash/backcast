var Videos = Backbone.Collection.extend({

  model: Video,

  search: function (query) {
    this.fetch({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {
        part: 'snippet',
        type: 'video',
        q: query,
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        videoEmbeddable: 'true'
      },
      success: function (data) {
        console.log(data);
      },
      error: function (data) {
        console.log('this failed' + data);
      }


    });
  },

  parse: function (response) {
    return response.results;
  }

});
