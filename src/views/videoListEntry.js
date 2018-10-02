var VideoListEntryView = Backbone.View.extend({

  initialize: function () {
    this.render();
  },

  events: {
    'click': 'clicked'
  },

  clicked: function(e) {
    console.log(this.model.select);
    this.model.select();
  },


  render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
