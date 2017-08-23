import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('movies');
  },

  actions: {

    deleteMovie(movie) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        movie.destroyRecord();
      }
    }
  }

})
