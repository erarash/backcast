var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.render();
    console.log(this.model);
  },


  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
