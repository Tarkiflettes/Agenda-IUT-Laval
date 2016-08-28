/**
 * AgendaController
 *
 * @description :: Server-side logic for managing agenda
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  updateDatabase: function(req, res) {
  
    AgendaService.updateDatabase();

    return res.ok();

  }

};

