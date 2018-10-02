var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function () {
    this.videos = new Videos(exampleVideoData);
    this.search = new SearchView();
    this.videoPlayer = new VideoPlayerView({model: this.videos.at(0), collection: this.videos});
    this.render();
  },


  render: function () {
    this.$el.html(this.template());

    var videoListView = new VideoListView({ collection: this.videos }).render().el;
    $('.list').html(videoListView);

    // var videoPlayer= new VideoPlayer({ model: this.videos.at(0), collection: this.videos, el: this.$('.player')  })
    // var videoPlayer= new VideoPlayerView({ model: this.videos.at(0), collection: this.videos })
    $('div.search').html(this.search.el);
    $('div.player').html(this.videoPlayer.el);
  },

  template: templateURL('src/templates/app.html')

});
