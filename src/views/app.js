var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function () {
    this.videos = new Videos(exampleVideoData);
    this.render();
  },


  render: function () {
    this.$el.html(this.template());
    var videoListView = new VideoListView({ collection: this.videos }).render().el;
    // var videoPlayer= new VideoPlayer({ collection: this.videos }).render().el;
    $('.list').append(videoListView);
  },

  template: templateURL('src/templates/app.html')

});
