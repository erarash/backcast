var VideoListEntryView = Backbone.View.extend({

  initialize: function () {
    this.render();
  },


  render: function () {
    this.$el.html(this.template(this.model.attributes));
    console.log(this.model.attributes);
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
