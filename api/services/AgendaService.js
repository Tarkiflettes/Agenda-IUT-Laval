
// api/services/AgendaService.js
module.exports = {

  updateDatabase: function() {

    Agenda.destroy().exec(function(err) {
    });

    var database = 
    [
      
    ];
     
    Agenda.create(database).exec(function (err, records) {
      if (err) { console.log(err); }
    });
    
  },
  
  eventColor: function(text) {

    var colors = [
      "#EF5350", "#F44336",
      "#B71C1C", "#F06292",
      "#E91E63", "#880E4F",
      "#9C27B0", "#BA68C8",
      "#4A148C", "#673AB7",
      "#9575CD", "#311B92",
      "#3F51B5", "#7986CB",
      "#1A237E", "#2196F3",
      "#2196F3", "#0D47A1",
      "#039BE5", "#01579B",
      "#0097A7", "#006064",
      "#009688", "#009688",
      "#004D40", "#43A047",
      "#1B5E20", "#689F38",
      "#33691E", "#827717",
      "#EF6C00", "#E65100",
      "#FF5722", "#BF360C",
      "#3E2723", "#795548",
      "#A1887F", "#757575",
      "#212121", "#607D8B",
      "#263238", "#78909C",
      "#000000", "#DAA520",
      "#D2691E", "#A0522D",
      "#2F4F4F", "#556B2F",
      "#008080", "#32CD32",
    ];
    var idColor = (AgendaService.textToBinary(text).split("1").length - 1)+text.length;
    if (idColor<50)
      idColor = 50
    return colors[(idColor%50)];
  },

  textToBinary: function(input) {
    var output = "";
    for (i=0; i < input.length; i++) {
      output += input[i].charCodeAt(0).toString(2) + "";
    }
    return output;
  }

};
