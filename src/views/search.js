var SearchView = Backbone.View.extend({

  events: {
    'click .btn': 'buttonClick'
  },

  buttonClick: function () {
    this.collection.search();
    // var searchText = document.getElementsByClassName("form-control")[0].value
    console.log(this);
  },


  render: function () {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
