
// api/services/AgendaService.js
module.exports = {

  updateDatabase: function() {

    Agenda.destroy().exec(function(err) {
    });

    var database = 
    [      
      { name: 'INFO', identifier: 1, parent: 0, type: 0, department: 1, level: 1 },
        { name: 'Etudiants', identifier: 11, parent: 1, type: 1, department: 1, level: 2 },
          { name: 'DUT Info1', identifier: 674, parent: 11, type: 2, department: 1, level: 2 },
            { name: 'Grp 11A', identifier: 2660, parent: 674, type: 3, department: 1, level: 3 },
            { name: 'Grp 11B', identifier: 2661, parent: 674, type: 3, department: 1, level: 3 },
            { name: 'Grp 12C', identifier: 1149, parent: 674, type: 3, department: 1, level: 3 },
            { name: 'Grp 12D', identifier: 1150, parent: 674, type: 3, department: 1, level: 3 },
          { name: 'DUT Info2', identifier: 675, parent: 11, type: 2, department: 1, level: 2 },
            { name: 'Grp 21A', identifier: 2667, parent: 675, type: 3, department: 1, level: 3 },
            { name: 'Grp 21B', identifier: 2668, parent: 675, type: 3, department: 1, level: 3 },
            { name: 'Grp 22C', identifier: 3113, parent: 675, type: 3, department: 1, level: 3 },
            { name: 'Grp 22D', identifier: 3115, parent: 675, type: 3, department: 1, level: 3 },
          { name: 'DUT Info2 S4', identifier: 5131, parent: 11, type: 2, department: 1, level: 2 },
            { name: 'Grp IPLP-A', identifier: 992, parent: 5131, type: 3, department: 1, level: 3 },
            { name: 'Grp IPLP-B', identifier: 1129, parent: 5131, type: 3, department: 1, level: 3 },
            { name: 'Grp PEL-A', identifier: 5133, parent: 5131, type: 3, department: 1, level: 3 },
            { name: 'Grp PEL-B', identifier: 5134, parent: 5131, type: 3, department: 1, level: 3 },
        { name: 'Enseignants', identifier: 12, parent: 1, type: 1, department: 1, level: 2 },
          { name: 'Titulaires', identifier: 121, parent: 12, type: 2, department: 1, level: 2 },
            { name: 'BARRE VINCENT', identifier: 26, parent: 121, type: 3, department: 1, level: 3 },
            { name: 'COULAND QUENTIN', identifier: 3341, parent: 121, type: 3, department: 1, level: 3 },
            { name: 'ERNET BRUNO', identifier: 1550, parent: 121, type: 3, department: 1, level: 3 },
            { name: 'GEORGE SEBASTIEN', identifier: 4605, parent: 121, type: 3, department: 1, level: 3 },
            { name: 'HAMON LUDOVIC', identifier: 3195, parent: 121, type: 3, department: 1, level: 3 },
            { name: 'KAROUI AOUS', identifier: 5772, parent: 121, type: 3, department: 1, level: 3 },
            { name: 'LABORIE CLEMENT', identifier: 3717, parent: 121, type: 3, department: 1, level: 3 },
            { name: 'LABORIE CLEMENT (TEMP)', identifier: 2757, parent: 121, type: 3, department: 1, level: 3 },
            { name: 'LAFORCADE PIERRE', identifier: 195, parent: 121, type: 3, department: 1, level: 3 },
            { name: 'MARFISI IZA', identifier: 2013, parent: 121, type: 3, department: 1, level: 3 },
            { name: 'OUBAHSSI LAHCEN', identifier: 281, parent: 121, type: 3, department: 1, level: 3 },
            { name: 'TADJINE ZEYNEB', identifier: 4936, parent: 121, type: 3, department: 1, level: 3 },
            { name: 'VIEILLARD NATHALIE', identifier: 4639, parent: 121, type: 3, department: 1, level: 3 },
            { name: 'WALKOWIAK YANN', identifier: 368, parent: 121, type: 3, department: 1, level: 3 },
          { name: 'Vacataires', identifier: 122, parent: 12, type: 2, department: 1, level: 2 },
            { name: 'BALAS (TEMP)', identifier: 3589, parent: 122, type: 3, department: 1, level: 3 },
            { name: 'BEGOT CHRISTOPHE', identifier: 6972, parent: 122, type: 3, department: 1, level: 3 },
            { name: 'BERTIN CAMILLE', identifier: 1797, parent: 122, type: 3, department: 1, level: 3 },
            { name: 'BORDEAU DAMIEN', identifier: 4098, parent: 122, type: 3, department: 1, level: 3 },
            { name: 'BROCHARD EMMANUEL', identifier: 5963, parent: 122, type: 3, department: 1, level: 3 },
            { name: 'CADI TAZI TAWFIQ', identifier: 5743, parent: 122, type: 3, department: 1, level: 3 },
            { name: 'CHAUVIN JEAN-BERNARD', identifier: 3583, parent: 122, type: 3, department: 1, level: 3 },
            { name: 'CHOMETON ADRIEN', identifier: 6323, parent: 122, type: 3, department: 1, level: 3 },
            { name: 'COPIE CECILE', identifier: 4582, parent: 122, type: 3, department: 1, level: 3 },
            { name: 'DENIS JULIEN', identifier: 4882, parent: 122, type: 3, department: 1, level: 3 },
            { name: 'DUMONT JONATHAN', identifier: 2047, parent: 122, type: 3, department: 1, level: 3 },
            { name: 'FOUCAULT ADELINE', identifier: 3364, parent: 122, type: 3, department: 1, level: 3 },
            { name: 'GERMAIN CHRISTOPHE', identifier: 1630, parent: 122, type: 3, department: 1, level: 3 },
            { name: 'GUIZE ADELAIDE', identifier: 5521, parent: 122, type: 3, department: 1, level: 3 },
            { name: 'HARDY SERGE', identifier: 3046, parent: 122, type: 3, department: 1, level: 3 },
            { name: 'HEBERT ERIC', identifier: 6973, parent: 122, type: 3, department: 1, level: 3 },
            { name: 'HEDOUX TONY', identifier: 1798, parent: 122, type: 3, department: 1, level: 3 },
            { name: 'HIMDI MAROUANE', identifier: 5523, parent: 122, type: 3, department: 1, level: 3 },
            { name: 'JAILLAIS SIMON', identifier: 5400, parent: 122, type: 3, department: 1, level: 3 },
            { name: 'KIEFFER BEN MERZOUGA JEAN-JACQUES', identifier: 3521, parent: 122, type: 3, department: 1, level: 3 },
            { name: 'KOUMTANI MOHAMED', identifier: 3204, parent: 122, type: 3, department: 1, level: 3 },
            { name: 'LE GUEN DE KERNEIZON MICHEL', identifier: 4111, parent: 122, type: 3, department: 1, level: 3 },
            { name: 'LEBORGNE CHRISTOPHE', identifier: 6717, parent: 122, type: 3, department: 1, level: 3 },
            { name: 'LESTEVEN JEROME', identifier: 4127, parent: 122, type: 3, department: 1, level: 3 },
            { name: 'LETENDU GERALDINE', identifier: 1132, parent: 122, type: 3, department: 1, level: 3 },
            { name: 'MEGHIRBI CYRIL', identifier: 4118, parent: 122, type: 3, department: 1, level: 3 },
            { name: 'NGOUAGNA TCHOFFO MERLIN', identifier: 5791, parent: 122, type: 3, department: 1, level: 3 },
            { name: 'QAFSAOUI MAHMOUD', identifier: 4122, parent: 122, type: 3, department: 1, level: 3 },
            { name: 'RIBAULT ALAIN', identifier: 6040, parent: 122, type: 3, department: 1, level: 3 },
            { name: 'ROULIN OLIVIER', identifier: 3264, parent: 122, type: 3, department: 1, level: 3 },
            { name: 'VESVARD VINCENT (TEMP)', identifier: 2789, parent: 122, type: 3, department: 1, level: 3 },
        { name: 'Salles', identifier: 13, parent: 1, type: 1, department: 1, level: 2 },
          { name: 'Hall', identifier: 2142, parent: 13, type: 3, department: 1, level: 2 },
          { name: 'Salle de réunion', identifier: 3208, parent: 13, type: 3, department: 1, level: 2 },
          { name: 'Salles TD', identifier: 9, parent: 13, type: 2, department: 1, level: 2 },
            { name: 'Arrakis-TD1', identifier: 1304, parent: 9, type: 3, department: 1, level: 3 },
            { name: 'Mordor-TD2', identifier: 1303, parent: 9, type: 3, department: 1, level: 3 },
          { name: 'Salles TDm', identifier: 356, parent: 13, type: 2, department: 1, level: 2 },
            { name: 'LV426-TDm2', identifier: 1300, parent: 356, type: 3, department: 1, level: 3 },
            { name: 'Tatooine-TDm3', identifier: 1293, parent: 356, type: 3, department: 1, level: 3 },
            { name: 'Vulcain-TDm1', identifier: 1299, parent: 356, type: 3, department: 1, level: 3 },
            { name: 'Westeros-TDm4', identifier: 1302, parent: 356, type: 3, department: 1, level: 3 },
          { name: 'Salles TP', identifier: 531, parent: 13, type: 2, department: 1, level: 2 },
            { name: 'Azeroth-TP4', identifier: 1216, parent: 531, type: 3, department: 1, level: 3 },
            { name: 'Gotham-TP3', identifier: 1099, parent: 531, type: 3, department: 1, level: 3 },
            { name: 'Hyrule-TP2', identifier: 1038, parent: 531, type: 3, department: 1, level: 3 },
            { name: 'Tamriel-TP1', identifier: 839, parent: 531, type: 3, department: 1, level: 3 },
      
      { name: 'GB', identifier: 2, parent: 0, type: 0, department: 2, level: 1 },
        { name: 'Etudiants', identifier: 21, parent: 2, type: 1, department: 2, level: 2 },
        { name: 'Enseignants', identifier: 22, parent: 2, type: 1, department: 2, level: 2 },
          { name: 'Titulaires', identifier: 221, parent: 22, type: 2, department: 2, level: 2 },
          { name: 'Vacataires', identifier: 222, parent: 22, type: 2, department: 2, level: 2 },
        { name: 'Salles', identifier: 23, parent: 2, type: 1, department: 2, level: 2 },
      
      { name: 'MMI', identifier: 3, parent: 0, type: 0, department: 3, level: 1 },
        { name: 'Etudiants', identifier: 31, parent: 3, type: 1, department: 3, level: 2 },
        { name: 'Enseignants', identifier: 32, parent: 3, type: 1, department: 3, level: 2 },
          { name: 'Titulaires', identifier: 321, parent: 32, type: 2, department: 3, level: 2 },
          { name: 'Vacataires', identifier: 322, parent: 32, type: 2, department: 3, level: 2 },
        { name: 'Salles', identifier: 33, parent: 3, type: 1, department: 3, level: 2 },
      
      { name: 'TC', identifier: 4, parent: 0, type: 0, department: 4, level: 1 },
        { name: 'Etudiants', identifier: 41, parent: 4, type: 1, department: 4, level: 2 },
        { name: 'Enseignants', identifier: 42, parent: 4, type: 1, department: 4, level: 2 },
          { name: 'Titulaires', identifier: 421, parent: 42, type: 2, department: 4, level: 2 },
          { name: 'Vacataires', identifier: 422, parent: 42, type: 2, department: 4, level: 2 },
        { name: 'Salles', identifier: 43, parent: 4, type: 1, department: 4, level: 2 },
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
