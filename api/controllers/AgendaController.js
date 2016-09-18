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

    var output = [];

    sails.ical.fromURL(url, {}, function(err, data) {
      
      var i = 0;
      
      AgendaService.eventColor("lapin");

      for (var k in data){
        if (data.hasOwnProperty(k)) {
          var ev = data[k];
          
          //console.log(ev);
                   
          var start = sails.moment(ev.start);
          start = start.tz('Europe/Paris').format();
          
          var end = sails.moment(ev.end);
          end = end.tz('Europe/Paris').format();

          var description = ev.description.replace(/(\(Exported :(?:.*)\))/g, "");

          eventJ = {
            title: ev.summary+'\n'+ev.location+'\n'+description,
            location: ev.location,
            start: start,
            end: end,
            color: '#2980b9',
            //color: '#'+AgendaService.eventColor(ev.summary),
            url: '/e/'+i
          };
          
          output.push(eventJ);
          
          i++;
        }
      }
      res.send(output);
    });

  }

};

