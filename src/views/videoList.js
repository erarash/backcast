var VideoListView = Backbone.View.extend({

  initialize: function () {
    // var videoListEntry = new VideoListEntryView();
    // this.$el.find('.video-list').children().detach();
    // this.render();

    // this.$el.find('.video-list').append(videoListEntry.$el);
  },

  render: function () {
    // this.$el.children().detach();
    this.$el.html(this.template());
    this.$el.append(this.collection.map(function (video) {
      return new VideoListEntryView({ model: video }).el;
    }));
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
