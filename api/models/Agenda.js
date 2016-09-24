/**
 * Agenda.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: {
      type: 'string',
      required: false,
      defaultsTo: '?'
    },

    identifier: {
      type: 'integer',
      required: true,
      primaryKey: true,
      unique: true
    },
    
    type: {
      type: 'integer',
      required: true
    },

    children: {
      collection: 'agenda',
      via: 'parent'
    },

    parent: {
      model: 'agenda'
    }

  }
};

