import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home');
  this.route('movies', function() {
    this.route('new');
    this.route('edit', { path: '/:movie_id/edit' });
  });
});

export default Router;
