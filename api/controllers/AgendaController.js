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

  },

  icalToJson: function(req, res) {

    var id = req.param('id');

    var url = 'http://edt.univ-lemans.fr/jsp/custom/modules/plannings/anonymous_cal.jsp?resources='+id+'&projectId=2&calType=ical&nbWeeks=4';

    sails.ical.fromURL(url, {}, function(err, data) {
      for (var k in data){
        if (data.hasOwnProperty(k)) {
          var ev = data[k];
          console.log("Conference",
          ev.summary,
          'is in',
          ev.location,
          'on the', ev.start.getDate(), 'of', ev.start.getMonth());
        }
      }
    });

    return res.send(output);

  }

};

