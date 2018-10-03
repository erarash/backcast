var VideoListView = Backbone.View.extend({

  // initialize: function () {
  //   this.collection.on('sync', this.render, this);
  // s

  render: function () {
    this.$el.children().detach();
    this.$el.html(this.template());
    // this.$el.append(this.collection.map(function (video) {
    // return new VideoListEntryView({ model: video }).el;
    this.collection.each(this.renderVideo);
    return this;
  },

  renderVideo: function (video) {
    this.$('.video-list').append(new VideoListEntryView({
      model: video
    }).render().el
    );
  },

  template: templateURL('src/templates/videoList.html')

});
