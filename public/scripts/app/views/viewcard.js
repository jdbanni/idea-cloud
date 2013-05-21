
/**
  A readonly view version of the Card
**/

var ReadonlyCardView = Backbone.View.extend({

    events: {
    },

    initialize: function(params) {
        // setup templates
        this.template = Handlebars.compile($("#ReadonlyCardTemplate").html());
    },

    render: function() {
      // render the card
      var html = this.template(profile.attributes);
      this.$el.html(html);
    }
});
