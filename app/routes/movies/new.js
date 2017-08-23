import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return this.store.createRecord('movies');
  },

  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new movie');
    controller.set('buttonLabel', 'Create');
  },

  renderTemplate() {
    this.render('movies/form');
  },

  actions: {

    saveMovie(newMovie) {
      newMovie.save().then(() => this.transitionTo('movies'));
    },

    willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
