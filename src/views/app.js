var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function () {
    this.videos = new Videos(exampleVideoData);
    this.search = new SearchView();
    this.videoPlayer = new VideoPlayerView();
    this.render();
  },


  render: function () {
    this.$el.html(this.template());
    var videoListView = new VideoListView({ collection: this.videos }).render().el;
    // var videoPlayer= new VideoPlayer({ model: this.videos.at(0), collection: this.videos, el: this.$('.player')  })
    $('.list').append(videoListView);
    $('div.search').html(this.search.el);
    $('div.player').html(this.videoPlayer.el);
  },

  template: templateURL('src/templates/app.html')

});
