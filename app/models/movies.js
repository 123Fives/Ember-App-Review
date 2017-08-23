import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({

  name: DS.attr('string'),
  year: DS.attr('string'),
  review: DS.attr('string'),

  isValid: Ember.computed.notEmpty('name')
});
