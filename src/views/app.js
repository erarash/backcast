var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    var videoListView = new VideoListView({collection: this.videos});
    this.render();
    this.$el.find('.list').children().detach();
    // this.$el.find('.list').append(videoListView.$el);
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
