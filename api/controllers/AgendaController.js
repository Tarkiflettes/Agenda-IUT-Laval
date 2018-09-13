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

    if (typeof id == 'undefined') {
      res.badRequest("id non defini");
    } else {
      var url = 'http://edt.univ-lemans.fr/jsp/custom/modules/plannings/anonymous_cal.jsp?resources='+id+'&projectId=1&calType=ical&nbWeeks=4';

      var output = [];

      sails.ical.fromURL(url, {}, function(err, data) {

        if (err) {
          res.badRequest("erreur");
        } else {
          var i = 0;

          for (var k in data){
            if (data.hasOwnProperty(k)) {
              var ev = data[k];

              //console.log(ev);
              
              var start = sails.moment(ev.start);
              start = start.tz('Europe/Paris').format();

              var end = sails.moment(ev.end);
              end = end.tz('Europe/Paris').format();

              var description = "";
              if (typeof ev.description !== "undefined")
                description = ev.description.replace(/(\(Exported :(?:.*)\))/g, "");

              eventJ = {
                title: ev.summary+'\n'+ev.location+''+description,
                location: ev.location,
                start: start,
                end: end,
                color: AgendaService.eventColor(ev.summary),
                url: '/'+id+"/"+i
              };

              output.push(eventJ);

              i++;
            }
          }
          res.json(output);
        }
      });
    }
  },

  course: function(req, res) {

    var id = req.param('id');

    var idCours = req.param('idcours');

    if (typeof id == 'undefined') {
      res.badRequest("id non defini");
    } else if (typeof idCours == 'undefined') {
      res.badRequest("id cours non defini");
    } else {
      var url = 'http://edt.univ-lemans.fr/jsp/custom/modules/plannings/anonymous_cal.jsp?resources='+id+'&projectId=1&calType=ical&nbWeeks=4';

      var output = [];

      sails.ical.fromURL(url, {}, function(err, data) {

        AgendaService.eventColor("lapin");

        var ev = data[Object.keys(data)[idCours]];

        if (typeof ev == 'undefined') {
          res.badRequest("id cours n'existe pas");
        } else {
          var start = sails.moment(ev.start);
          start = start.tz('Europe/Paris').format();

          var end = sails.moment(ev.end);
          end = end.tz('Europe/Paris').format();

          var description = ev.description.replace(/(\(Exported :(?:.*)\))/g, "");

          output = {
            title: ev.summary,
            description: description,
            location: ev.location,
            start: start,
            end: end,
          };

          res.json(output);
        }
      });
    }
  }

};

