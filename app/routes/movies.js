import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['World War Z', 'Young Frankenstein', 'Okja'];
  }
});
