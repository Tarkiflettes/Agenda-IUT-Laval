
// api/services/AgendaService.js
module.exports = {

  updateDatabase: function() {

    Agenda.destroy().exec(function(err) {
    });

    var database = 
    [

        { name: 'Etudiants', identifier: -1, parent: 0 },
        { name: 'IUT Laval', identifier: 669, parent: -1 },
        { name: 'DU Manag dévelop com TPE', identifier: 687, parent: 669 },
        { name: 'DUT GB1', identifier: 670, parent: 669 },
        { name: 'DUT GB2', identifier: 716, parent: 669 },
        { name: 'DUT GB2', identifier: 7087, parent: 669 },
        { name: 'DUT Info1', identifier: 674, parent: 669 },
        { name: 'DUT Info2', identifier: 675, parent: 669 },
        { name: 'DUT Info2 S4', identifier: 5131, parent: 669 },
        { name: 'DUT MMI1', identifier: 677, parent: 669 },
        { name: 'DUT MMI1 LV2', identifier: 1366, parent: 669 },
        { name: 'DUT MMI2 S3', identifier: 678, parent: 669 },
        { name: 'DUT MMI2 S4', identifier: 6683, parent: 669 },
        { name: 'DUT MMI2- LV2', identifier: 1116, parent: 669 },
        { name: 'DUT TC1', identifier: 672, parent: 669 },
        { name: 'DUT TC2', identifier: 673, parent: 669 },
        { name: 'LP CAA', identifier: 680, parent: 669 },
        { name: 'LP CRSPM', identifier: 683, parent: 669 },
        { name: 'LP Chargé aff. peinture', identifier: 679, parent: 669 },
        { name: 'LP GIE', identifier: 681, parent: 669 },
        { name: 'LP HESPAA', identifier: 3026, parent: 669 },
        { name: 'LP SIL TQL', identifier: 3383, parent: 669 },
        { name: 'LP TECHNIQUES ET ACTIVITES IMAGE ET SON spé: infographie 3D', identifier: 682, parent: 669 },
        { name: 'AB1', identifier: 2763, parent: 670 },
        { name: 'CD1', identifier: 2764, parent: 670 },
        { name: 'EF1', identifier: 2765, parent: 670 },
        { name: 'AB2', identifier: 2774, parent: 716 },
        { name: 'CD2', identifier: 2779, parent: 716 },
        { name: 'E2', identifier: 2783, parent: 716 },
        { name: 'GB2 - IPLP', identifier: 4973, parent: 7087 },
        { name: 'GB2 - PEL', identifier: 6239, parent: 7087 },
        { name: 'TD11', identifier: 2659, parent: 674 },
        { name: 'TD12', identifier: 1147, parent: 674 },
        { name: 'DUT Info2 S3', identifier: 857, parent: 675 },
        { name: 'IPLP', identifier: 914, parent: 5131 },
        { name: 'PEL', identifier: 953, parent: 5131 },
        { name: 'TD11', identifier: 2672, parent: 677 },
        { name: 'TD12', identifier: 2712, parent: 677 },
        { name: 'TD13', identifier: 2738, parent: 677 },
        { name: 'ALLEMAND', identifier: 5646, parent: 1366 },
        { name: 'ANGLAIS RENFORCE', identifier: 1438, parent: 1366 },
        { name: 'ESPAGNOL GROUPE G1 VCOLLET', identifier: 1369, parent: 1366 },
        { name: 'ESPAGNOL GROUPE G2 DLECLEZIO', identifier: 1427, parent: 1366 },
        { name: 'TD21', identifier: 2840, parent: 678 },
        { name: 'TD22', identifier: 2842, parent: 678 },
        { name: 'TD2ALT', identifier: 6700, parent: 678 },
        { name: 'TD2-ALT', identifier: 5226, parent: 6683 },
        { name: 'TD21-PDM', identifier: 6703, parent: 6683 },
        { name: 'TD21-PP', identifier: 6701, parent: 6683 },
        { name: 'TD22-PCAG', identifier: 6702, parent: 6683 },
        { name: 'ALLEMAND', identifier: 1174, parent: 1116 },
        { name: 'ANGLAIS LV2', identifier: 1171, parent: 1116 },
        { name: 'ESPAGNOL GROUPE G1 EZOMENO', identifier: 1139, parent: 1116 },
        { name: 'ESPAGNOL GROUPE G2 DHUAULT', identifier: 1169, parent: 1116 },
        { name: 'TD 11', identifier: 2860, parent: 672 },
        { name: 'TD 12', identifier: 2861, parent: 672 },
        { name: 'TD 13', identifier: 2862, parent: 672 },
        { name: 'TD 14', identifier: 2863, parent: 672 },
        { name: 'TD 21', identifier: 2877, parent: 673 },
        { name: 'TD 22', identifier: 2878, parent: 673 },
        { name: 'TD 23', identifier: 2879, parent: 673 },
        { name: 'TD 24', identifier: 2880, parent: 673 },
        { name: 'LPAGRO', identifier: 2898, parent: 680 },
        { name: 'LPCRSPM-ALT', identifier: 2857, parent: 683 },
        { name: 'LPGIE1', identifier: 2895, parent: 681 },
        { name: 'A3', identifier: 3526, parent: 3026 },
        { name: 'B3', identifier: 3551, parent: 3026 },
        { name: 'LP SIL TQL', identifier: 1151, parent: 3383 },
        { name: 'A1', identifier: 2766, parent: 2763 },
        { name: 'B1', identifier: 2767, parent: 2763 },
        { name: 'C1', identifier: 2768, parent: 2764 },
        { name: 'D1', identifier: 2770, parent: 2764 },
        { name: 'E1', identifier: 2771, parent: 2765 },
        { name: 'F1', identifier: 2772, parent: 2765 },
        { name: 'A2', identifier: 2777, parent: 2774 },
        { name: 'B2', identifier: 2778, parent: 2774 },
        { name: 'C2', identifier: 2780, parent: 2779 },
        { name: 'D2', identifier: 2781, parent: 2779 },
        { name: 'E2', identifier: 2782, parent: 2783 },
        { name: 'IPLP12', identifier: 7088, parent: 4973 },
        { name: 'IPLP3', identifier: 7089, parent: 4973 },
        { name: 'PEL12', identifier: 7090, parent: 6239 },
        { name: 'Grp 11A', identifier: 2660, parent: 2659 },
        { name: 'Grp 11B', identifier: 2661, parent: 2659 },
        { name: 'Grp 12C', identifier: 1149, parent: 1147 },
        { name: 'Grp 12D', identifier: 1150, parent: 1147 },
        { name: 'TD21', identifier: 2662, parent: 857 },
        { name: 'TD22', identifier: 3112, parent: 857 },
        { name: 'Grp IPLP-A', identifier: 992, parent: 914 },
        { name: 'Grp IPLP-B', identifier: 1129, parent: 914 },
        { name: 'Grp PEL-A', identifier: 5133, parent: 953 },
        { name: 'Grp PEL-B', identifier: 5134, parent: 953 },
        { name: '11A', identifier: 2700, parent: 2672 },
        { name: '11B', identifier: 2711, parent: 2672 },
        { name: '12C', identifier: 2775, parent: 2712 },
        { name: '12D', identifier: 2776, parent: 2712 },
        { name: '13E', identifier: 2808, parent: 2738 },
        { name: '13F', identifier: 2839, parent: 2738 },
        { name: '21A', identifier: 2844, parent: 2840 },
        { name: '21B', identifier: 2845, parent: 2840 },
        { name: '22C', identifier: 2846, parent: 2842 },
        { name: '22D', identifier: 2847, parent: 2842 },
        { name: '2ALT', identifier: 2849, parent: 6700 },
        { name: '2-ALT', identifier: 5222, parent: 5226 },
        { name: '2A-PDM', identifier: 6704, parent: 6703 },
        { name: '2B1-PP', identifier: 6707, parent: 6701 },
        { name: '2B2-PP', identifier: 3954, parent: 6701 },
        { name: '2C-PCAG', identifier: 6705, parent: 6702 },
        { name: '2D-PCAG', identifier: 6706, parent: 6702 },
        { name: 'TP 111', identifier: 2865, parent: 2860 },
        { name: 'TP 112', identifier: 2866, parent: 2860 },
        { name: 'TP 121', identifier: 2870, parent: 2861 },
        { name: 'TP 122', identifier: 2871, parent: 2861 },
        { name: 'TP 131', identifier: 2873, parent: 2862 },
        { name: 'TP 132', identifier: 2874, parent: 2862 },
        { name: 'TP 141', identifier: 2875, parent: 2863 },
        { name: 'TP 142', identifier: 2876, parent: 2863 },
        { name: 'TP 211', identifier: 2881, parent: 2877 },
        { name: 'TP 212', identifier: 2882, parent: 2877 },
        { name: 'TP 221', identifier: 2884, parent: 2878 },
        { name: 'TP 222', identifier: 2885, parent: 2878 },
        { name: 'TP 231', identifier: 2886, parent: 2879 },
        { name: 'TP 232', identifier: 2887, parent: 2879 },
        { name: 'TP 241', identifier: 2889, parent: 2880 },
        { name: 'TP 242', identifier: 2890, parent: 2880 },
        { name: 'IPLP1', identifier: 7091, parent: 7088 },
        { name: 'IPLP2', identifier: 7093, parent: 7088 },
        { name: 'IPLP3', identifier: 7094, parent: 7089 },
        { name: 'PEL1', identifier: 7095, parent: 7090 },
        { name: 'PEL2', identifier: 7096, parent: 7090 },
        { name: 'Grp 21A', identifier: 2667, parent: 2662 },
        { name: 'Grp 21B', identifier: 2668, parent: 2662 },
        { name: 'Grp 22C', identifier: 3113, parent: 3112 },
        { name: 'Grp 22D', identifier: 3115, parent: 3112 },
        { name: 'Enseignants', identifier: -2, parent: 0 },
        { name: 'IUT Laval', identifier: 17, parent: -2 },
        { name: 'Conférenciers', identifier: 5719, parent: 17 },
        { name: 'Titulaires', identifier: 773, parent: 17 },
        { name: 'Vacataires', identifier: 796, parent: 17 },
        { name: 'FAIRIER Samuel', identifier: 5721, parent: 5719 },
        { name: 'GB', identifier: 3598, parent: 773 },
        { name: 'INFO', identifier: 3593, parent: 773 },
        { name: 'MMI', identifier: 3560, parent: 773 },
        { name: 'TC', identifier: 452, parent: 773 },
        { name: 'CLOASTRE ISABELLE', identifier: 1667, parent: 796 },
        { name: 'FAIRIER SAMUEL', identifier: 1751, parent: 796 },
        { name: 'GB', identifier: 3631, parent: 796 },
        { name: 'GEORGEAULT PHILIPPE', identifier: 5832, parent: 796 },
        { name: 'INFO', identifier: 4260, parent: 796 },
        { name: 'JOUBERT VANESSA', identifier: 788, parent: 796 },
        { name: 'MMI', identifier: 3561, parent: 796 },
        { name: 'MNASRI TAHA', identifier: 2015, parent: 796 },
        { name: 'MORICE ELISABETH', identifier: 4443, parent: 796 },
        { name: 'NAUWELAERS GWENDOLINE', identifier: 2605, parent: 796 },
        { name: 'OLD MMI', identifier: 846, parent: 796 },
        { name: 'RAVET MARYLENE', identifier: 2155, parent: 796 },
        { name: 'RIHET ISABELLE', identifier: 2163, parent: 796 },
        { name: 'TC', identifier: 453, parent: 796 },
        { name: 'TEXIER NICOLAS', identifier: 3922, parent: 796 },
        { name: 'BLANCKAERT VINCENT', identifier: 39, parent: 3598 },
        { name: 'BRAUD GILLES', identifier: 54, parent: 3598 },
        { name: 'ERGAN FRANCOISE', identifier: 125, parent: 3598 },
        { name: 'GAUVRY LAURENT', identifier: 144, parent: 3598 },
        { name: 'HERAULT JOSIANE', identifier: 171, parent: 3598 },
        { name: 'JUSSEAUME PHILIPPE', identifier: 187, parent: 3598 },
        { name: 'LAUNAY JEAN-MICHEL', identifier: 201, parent: 3598 },
        { name: 'LEDRU-BAEY SOPHIE', identifier: 212, parent: 3598 },
        { name: 'LOISEAU CELINE', identifier: 229, parent: 3598 },
        { name: 'LOURDAIS FRANCOISE', identifier: 233, parent: 3598 },
        { name: 'MARTIN ISABELLE', identifier: 6579, parent: 3598 },
        { name: 'MIMOUNI VIRGINIE', identifier: 264, parent: 3598 },
        { name: 'OBITZ-LUMBROSO BÉNÉDICTE', identifier: 4279, parent: 3598 },
        { name: 'PENCREACH GAËLLE', identifier: 289, parent: 3598 },
        { name: 'POISSON LAURENT', identifier: 301, parent: 3598 },
        { name: 'SOULTANI-VIGNERON SAMIA', identifier: 340, parent: 3598 },
        { name: 'ULMANN LIONEL', identifier: 3012, parent: 3598 },
        { name: 'ANCIENS', identifier: 1729, parent: 3593 },
        { name: 'BARRE VINCENT', identifier: 26, parent: 3593 },
        { name: 'COULAND QUENTIN', identifier: 3341, parent: 3593 },
        { name: 'ERNET BRUNO', identifier: 1550, parent: 3593 },
        { name: 'GEORGE SEBASTIEN', identifier: 4605, parent: 3593 },
        { name: 'HAMON LUDOVIC', identifier: 3195, parent: 3593 },
        { name: 'KAROUI AOUS', identifier: 5772, parent: 3593 },
        { name: 'LABORIE CLEMENT', identifier: 3717, parent: 3593 },
        { name: 'LABORIE CLEMENT (TEMP)', identifier: 2757, parent: 3593 },
        { name: 'LAFORCADE PIERRE', identifier: 195, parent: 3593 },
        { name: 'MARFISI IZA', identifier: 2013, parent: 3593 },
        { name: 'OUBAHSSI LAHCEN', identifier: 281, parent: 3593 },
        { name: 'TADJINE ZEYNEB', identifier: 4936, parent: 3593 },
        { name: 'VIEILLARD NATHALIE', identifier: 4639, parent: 3593 },
        { name: 'WALKOWIAK YANN', identifier: 368, parent: 3593 },
        { name: 'BUCHET BRUNO', identifier: 59, parent: 3560 },
        { name: 'CHEVALIER MANUEL', identifier: 81, parent: 3560 },
        { name: 'CHOQUET CHRISTOPHE', identifier: 82, parent: 3560 },
        { name: 'CORBIERE ALAIN', identifier: 86, parent: 3560 },
        { name: 'DUBOURG XAVIER', identifier: 114, parent: 3560 },
        { name: 'GUNTZ FABIEN', identifier: 163, parent: 3560 },
        { name: 'HABAULT JEAN-CHRISTOPHE', identifier: 164, parent: 3560 },
        { name: 'HOULIERE ERIC', identifier: 848, parent: 3560 },
        { name: 'IKSAL SEBASTIEN', identifier: 176, parent: 3560 },
        { name: 'LOUP GUILLAUME', identifier: 5612, parent: 3560 },
        { name: 'OUALI MOHAND AKLI', identifier: 4846, parent: 3560 },
        { name: 'PIROLLI RAPHAELLE', identifier: 90, parent: 3560 },
        { name: 'PUIZILLOUT ANNE-MARIE', identifier: 758, parent: 3560 },
        { name: 'SAINT-GERAND FRANCOIS', identifier: 3527, parent: 3560 },
        { name: 'SCHMIDT COLIN', identifier: 336, parent: 3560 },
        { name: 'CLIQUETEUX DAVID', identifier: 84, parent: 452 },
        { name: 'DIAWARA TIEFING', identifier: 4294, parent: 452 },
        { name: 'DRINE RHOUMA', identifier: 1629, parent: 452 },
        { name: 'FRANKEL MICHAEL', identifier: 138, parent: 452 },
        { name: 'GUEGUEN JEAN-CLAUDE', identifier: 6712, parent: 452 },
        { name: 'LALLAI PHILIPPE', identifier: 197, parent: 452 },
        { name: 'LE JEUNE JEAN-YVES', identifier: 207, parent: 452 },
        { name: 'PEAN PHILIPPE', identifier: 288, parent: 452 },
        { name: 'ROBERTS LISE-ANNE', identifier: 322, parent: 452 },
        { name: 'SABAS JEAN-CHRISTOPHE', identifier: 5340, parent: 452 },
        { name: 'SAUVAGE GILLES', identifier: 335, parent: 452 },
        { name: 'TANGUY SOLENNE', identifier: 2989, parent: 452 },
        { name: 'Autres Intervenants', identifier: 5010, parent: 3631 },
        { name: 'BANDJE KOSSIWA', identifier: 4202, parent: 3631 },
        { name: 'BERDIN BRUNO', identifier: 2455, parent: 3631 },
        { name: 'BETTON PASCALE', identifier: 3655, parent: 3631 },
        { name: 'BOUTROUX KARINE', identifier: 3666, parent: 3631 },
        { name: 'BRUNEAU FANNY', identifier: 6982, parent: 3631 },
        { name: 'CADIO SANDRINE', identifier: 5091, parent: 3631 },
        { name: 'CHAUVEAU HERVE', identifier: 5911, parent: 3631 },
        { name: 'CHOMEL NICOLAS', identifier: 3684, parent: 3631 },
        { name: 'DAVALLAN EMILIE', identifier: 3604, parent: 3631 },
        { name: 'DE SOJANAR CEDRIC', identifier: 4819, parent: 3631 },
        { name: 'DIMITRIJEVIC CHRISTELE', identifier: 3019, parent: 3631 },
        { name: 'ESSAYED-MESSAOUDI NAJAT', identifier: 6184, parent: 3631 },
        { name: 'EUSTACHE MARIE-CHRISTINE', identifier: 3401, parent: 3631 },
        { name: 'FESSARD VALERIE', identifier: 2546, parent: 3631 },
        { name: 'FIABANE LIONEL', identifier: 4069, parent: 3631 },
        { name: 'FROGER-COLLEAUX CHRISTELLE', identifier: 2090, parent: 3631 },
        { name: 'GAILLARD OLIVIER', identifier: 3729, parent: 3631 },
        { name: 'GAUTEUR FRANCK', identifier: 3734, parent: 3631 },
        { name: 'GAZENGEL ERIC', identifier: 4105, parent: 3631 },
        { name: 'GOUDOT DAMIEN', identifier: 3873, parent: 3631 },
        { name: 'GRIZON LUDIVINE', identifier: 3252, parent: 3631 },
        { name: 'HOCHE-DELCHET CYRIL', identifier: 5425, parent: 3631 },
        { name: 'HUBERT FLORENCE', identifier: 5604, parent: 3631 },
        { name: 'HUGUET ANTOINE', identifier: 3850, parent: 3631 },
        { name: 'LANCELIN FRANÇOIS', identifier: 6365, parent: 3631 },
        { name: 'LAURENTIE MICHEL', identifier: 3034, parent: 3631 },
        { name: 'LE HEGARAT LUDOVIC', identifier: 4483, parent: 3631 },
        { name: 'LE PAGE CYRIELLE', identifier: 4304, parent: 3631 },
        { name: 'LENAIN FLAVIA', identifier: 5661, parent: 3631 },
        { name: 'LOUIS MARION', identifier: 1461, parent: 3631 },
        { name: 'MORCHE NADINE', identifier: 3057, parent: 3631 },
        { name: 'MOULARAT STEPHANE', identifier: 3816, parent: 3631 },
        { name: 'OGIER DE BAULNY MYRIAM', identifier: 2190, parent: 3631 },
        { name: 'PEAN NATHALIE', identifier: 3826, parent: 3631 },
        { name: 'PEINTRE MARJORIE', identifier: 5241, parent: 3631 },
        { name: 'PERRIN AGNES', identifier: 5049, parent: 3631 },
        { name: 'PICOT VERONIQUE', identifier: 3700, parent: 3631 },
        { name: 'QUESNEL MARIE-FRANCOISE', identifier: 2937, parent: 3631 },
        { name: 'RONDOUIN OLIVIER', identifier: 6363, parent: 3631 },
        { name: 'ROUSSEAU FLAVIE', identifier: 4289, parent: 3631 },
        { name: 'ROUX SYLVAIN', identifier: 328, parent: 3631 },
        { name: 'SAVARIS CHRISTIAN', identifier: 3061, parent: 3631 },
        { name: 'SERVANT ALBERT', identifier: 3862, parent: 3631 },
        { name: 'THEBAULT ELODIE', identifier: 3062, parent: 3631 },
        { name: 'ANCIENS', identifier: 1731, parent: 4260 },
        { name: 'BALAS (TEMP)', identifier: 3589, parent: 4260 },
        { name: 'BEGOT CHRISTOPHE', identifier: 6972, parent: 4260 },
        { name: 'BERTIN CAMILLE', identifier: 1797, parent: 4260 },
        { name: 'BORDEAU DAMIEN', identifier: 4098, parent: 4260 },
        { name: 'BROCHARD EMMANUEL', identifier: 5963, parent: 4260 },
        { name: 'CADI TAZI TAWFIQ', identifier: 5743, parent: 4260 },
        { name: 'CHAUVIN JEAN-BERNARD', identifier: 3583, parent: 4260 },
        { name: 'CHOMETON ADRIEN', identifier: 6323, parent: 4260 },
        { name: 'COPIE CECILE', identifier: 4582, parent: 4260 },
        { name: 'DENIS JULIEN', identifier: 4882, parent: 4260 },
        { name: 'DUMONT JONATHAN', identifier: 2047, parent: 4260 },
        { name: 'FOUCAULT ADELINE', identifier: 3364, parent: 4260 },
        { name: 'GERMAIN CHRISTOPHE', identifier: 1630, parent: 4260 },
        { name: 'GUIZE ADELAIDE', identifier: 5521, parent: 4260 },
        { name: 'HARDY SERGE', identifier: 3046, parent: 4260 },
        { name: 'HEBERT ERIC', identifier: 6973, parent: 4260 },
        { name: 'HEDOUX TONY', identifier: 1798, parent: 4260 },
        { name: 'HIMDI MAROUANE', identifier: 5523, parent: 4260 },
        { name: 'JAILLAIS SIMON', identifier: 5400, parent: 4260 },
        { name: 'KIEFFER BEN MERZOUGA JEAN-JACQUES', identifier: 3521, parent: 4260 },
        { name: 'KOUMTANI MOHAMED', identifier: 3204, parent: 4260 },
        { name: 'LE GUEN DE KERNEIZON MICHEL', identifier: 4111, parent: 4260 },
        { name: 'LEBORGNE CHRISTOPHE', identifier: 6717, parent: 4260 },
        { name: 'LESTEVEN JEROME', identifier: 4127, parent: 4260 },
        { name: 'LETENDU GERALDINE', identifier: 1132, parent: 4260 },
        { name: 'MEGHIRBI CYRIL', identifier: 4118, parent: 4260 },
        { name: 'NGOUAGNA TCHOFFO MERLIN', identifier: 5791, parent: 4260 },
        { name: 'QAFSAOUI MAHMOUD', identifier: 4122, parent: 4260 },
        { name: 'RIBAULT ALAIN', identifier: 6040, parent: 4260 },
        { name: 'ROULIN OLIVIER', identifier: 3264, parent: 4260 },
        { name: 'VESVARD VINCENT (TEMP)', identifier: 2789, parent: 4260 },
        { name: 'BAILLET VINCENT', identifier: 1563, parent: 3561 },
        { name: 'BATARDIERE AMINA', identifier: 6423, parent: 3561 },
        { name: 'BERTRAND SARAH', identifier: 721, parent: 3561 },
        { name: 'BOULET MAGALI', identifier: 2038, parent: 3561 },
        { name: 'COLOMBANI PASCALINE', identifier: 2351, parent: 3561 },
        { name: 'COSSET PASCAL', identifier: 2132, parent: 3561 },
        { name: 'COURONNE FABIEN', identifier: 4079, parent: 3561 },
        { name: 'DA COSTA MAXIME', identifier: 3650, parent: 3561 },
        { name: 'DAVIDSON ELIZABETH', identifier: 4081, parent: 3561 },
        { name: 'DEFRANCHI MARYLINE', identifier: 1574, parent: 3561 },
        { name: 'DESDOIT AIMERICK', identifier: 5428, parent: 3561 },
        { name: 'DUFOUR TRISTAN', identifier: 3667, parent: 3561 },
        { name: 'EL GANAOUI OMAR', identifier: 3670, parent: 3561 },
        { name: 'FAYE THIERRY', identifier: 4755, parent: 3561 },
        { name: 'FREZZA ROLAND', identifier: 4087, parent: 3561 },
        { name: 'GRAYO AURELIEN', identifier: 3694, parent: 3561 },
        { name: 'HERVAGAULT REGIS', identifier: 3701, parent: 3561 },
        { name: 'HUAULT DIANA', identifier: 3707, parent: 3561 },
        { name: 'JAFFRENNOU GILDAS', identifier: 4116, parent: 3561 },
        { name: 'LECOURTOIS GERMAIN', identifier: 1459, parent: 3561 },
        { name: 'LEMARCHAND ARMAND', identifier: 3538, parent: 3561 },
        { name: 'LOUAISIL MARYSE', identifier: 4093, parent: 3561 },
        { name: 'MESSOUDI YOUNSS', identifier: 4097, parent: 3561 },
        { name: 'PLARD JACQUES', identifier: 1631, parent: 3561 },
        { name: 'ROBERT FRANCOIS-XAVIER', identifier: 1632, parent: 3561 },
        { name: 'SAUGER ROMAIN', identifier: 3129, parent: 3561 },
        { name: 'TEMP_Espagnol', identifier: 875, parent: 3561 },
        { name: 'TEMP_Espagnol_Antoine COLLET', identifier: 4352, parent: 3561 },
        { name: 'TEMP_Espagnol_Esperanza ZOMENO', identifier: 4353, parent: 3561 },
        { name: 'TURNER MALCOLM CHRISTOPHER', identifier: 3576, parent: 3561 },
        { name: 'ZUBER RICHARD', identifier: 6434, parent: 3561 },
        { name: 'AUBURTIN MARIE', identifier: 5728, parent: 846 },
        { name: 'CALLY PIERRE-ERIK', identifier: 6347, parent: 846 },
        { name: 'CHAUDET ALEXANDRE', identifier: 3808, parent: 846 },
        { name: 'COTTIER PHILIPPE', identifier: 89, parent: 846 },
        { name: 'GAGNANT LOIC', identifier: 5456, parent: 846 },
        { name: 'GATINAULT JULIEN', identifier: 3060, parent: 846 },
        { name: 'HAVARD GAEL-IAN', identifier: 4614, parent: 846 },
        { name: 'JAMES FRANCOISE', identifier: 558, parent: 846 },
        { name: 'LOUP-ESCANDE EMILIE', identifier: 3197, parent: 846 },
        { name: 'PASQUIER FRANCK', identifier: 3356, parent: 846 },
        { name: 'RAY CHARLES-EDOUARD', identifier: 1607, parent: 846 },
        { name: 'x DEV WEB', identifier: 199, parent: 846 },
        { name: 'x-GprojW_AG', identifier: 2832, parent: 846 },
        { name: 'AMBROISE VALERIE', identifier: 589, parent: 453 },
        { name: 'AZE JEAN-FRANCOIS', identifier: 1734, parent: 453 },
        { name: 'BEVERAGGI JEAN-MARIE', identifier: 3740, parent: 453 },
        { name: 'BOHERS LOÏC', identifier: 4075, parent: 453 },
        { name: 'BOUILLE MAELLE', identifier: 3205, parent: 453 },
        { name: 'BOUTILLIER DE ST ANDRE NICOLAS', identifier: 4710, parent: 453 },
        { name: 'BULLENGER JEAN-CLAUDE', identifier: 1624, parent: 453 },
        { name: 'BURLET ANDRE', identifier: 5974, parent: 453 },
        { name: 'CAPITAINE CATHERINE', identifier: 4747, parent: 453 },
        { name: 'CHASSIN DU GUERNY GUILLAUME', identifier: 5350, parent: 453 },
        { name: 'CHEMIN LAURENT', identifier: 5970, parent: 453 },
        { name: 'CIBOIS ODILE', identifier: 5318, parent: 453 },
        { name: 'CONSTANTIN SAMUEL', identifier: 3111, parent: 453 },
        { name: 'DAUWE LUCILLE', identifier: 2671, parent: 453 },
        { name: 'DENECE ERIC', identifier: 4881, parent: 453 },
        { name: 'DEUIL PATRICK', identifier: 3227, parent: 453 },
        { name: 'FAGNOT CENDRINE', identifier: 3432, parent: 453 },
        { name: 'GANDON CHANTAL', identifier: 3171, parent: 453 },
        { name: 'HENOCQ SABRINA', identifier: 5757, parent: 453 },
        { name: 'HEURTEBIZE BRUNO', identifier: 4620, parent: 453 },
        { name: 'LOUKILI YASSINE', identifier: 2969, parent: 453 },
        { name: 'MARINO-GARCIA ALICIA', identifier: 3100, parent: 453 },
        { name: 'MORICE AMPARO', identifier: 4080, parent: 453 },
        { name: 'PAPILLON THIERRY', identifier: 4142, parent: 453 },
        { name: 'ROSARD FREDERIC', identifier: 1617, parent: 453 },
        { name: 'SALMON STANISLAS', identifier: 3531, parent: 453 },
        { name: 'STEPHANT ISABELLE', identifier: 3160, parent: 453 },
        { name: 'TC anciens vacataires', identifier: 5687, parent: 453 },
        { name: 'WANG WEIYAN', identifier: 4744, parent: 453 },
        { name: 'ABEDMOULEH AYMEN', identifier: 5815, parent: 1729 },
        { name: 'ATER (TEMP)', identifier: 3509, parent: 1729 },
        { name: 'CLAYER JEAN-PIERRE', identifier: 2306, parent: 1729 },
        { name: 'EL MAWAS NOUR', identifier: 3845, parent: 1729 },
        { name: 'KACEM AMINA', identifier: 4621, parent: 1729 },
        { name: 'TIBBS SHANNON', identifier: 5553, parent: 1729 },
        { name: 'COLLIC GUILLAUME', identifier: 1790, parent: 1731 },
        { name: 'LE CLERCQ DE LANNOY OLIVIER', identifier: 5975, parent: 1731 },
        { name: 'OIRY HERVE', identifier: 5984, parent: 1731 },
        { name: 'BEN MESSAOUD SONIA', identifier: 1612, parent: 5687 },
        { name: 'COIFFARD BRUNO', identifier: 1668, parent: 5687 },
        { name: 'DOUETTE FRANCOISE', identifier: 5726, parent: 5687 },
        { name: 'FERANDIN CHRISTOPHE', identifier: 4078, parent: 5687 },
        { name: 'GEMOND DENIS', identifier: 5338, parent: 5687 },
        { name: 'PERMASSE XAVIER', identifier: 4326, parent: 5687 },
        { name: 'Salles', identifier: -3, parent: 0 },
        { name: 'IUT Laval', identifier: 781, parent: -3 },
        { name: 'Salles Communes', identifier: 2639, parent: 781 },
        { name: 'Salles GB', identifier: 2670, parent: 781 },
        { name: 'Salles INFO', identifier: 2675, parent: 781 },
        { name: 'Salles MMI', identifier: 2677, parent: 781 },
        { name: 'Salles TC', identifier: 2678, parent: 781 },
        { name: 'Amphi 1', identifier: 2663, parent: 2639 },
        { name: 'Amphi 2', identifier: 2665, parent: 2639 },
        { name: 'Amphi TC', identifier: 2664, parent: 2639 },
        { name: 'Bibliothèque', identifier: 2945, parent: 2639 },
        { name: 'Labo multimédia GB', identifier: 2946, parent: 2639 },
        { name: 'Labo multimédia TC', identifier: 1511, parent: 2639 },
        { name: 'Salle de réunion bureau directrice', identifier: 1869, parent: 2639 },
        { name: 'Salle examen', identifier: 2666, parent: 2639 },
        { name: 'Salle visio', identifier: 372, parent: 2639 },
        { name: 'salle visio pavillon', identifier: 1358, parent: 2639 },
        { name: 'scolarité', identifier: 1368, parent: 2639 },
        { name: 'E 209 info LS', identifier: 2715, parent: 2670 },
        { name: 'E100', identifier: 2701, parent: 2670 },
        { name: 'E101', identifier: 2702, parent: 2670 },
        { name: 'E103', identifier: 2703, parent: 2670 },
        { name: 'E104', identifier: 2704, parent: 2670 },
        { name: 'E105', identifier: 2705, parent: 2670 },
        { name: 'E203', identifier: 2706, parent: 2670 },
        { name: 'E204', identifier: 2707, parent: 2670 },
        { name: 'E206', identifier: 2708, parent: 2670 },
        { name: 'E207', identifier: 2709, parent: 2670 },
        { name: 'E208', identifier: 2710, parent: 2670 },
        { name: 'GB ext bis', identifier: 505, parent: 2670 },
        { name: 'Hall d\'entrée', identifier: 2716, parent: 2670 },
        { name: 'Halle-Lande du Breil', identifier: 2717, parent: 2670 },
        { name: 'Lycée Agricole', identifier: 2718, parent: 2670 },
        { name: 'Palier 1er étage', identifier: 3762, parent: 2670 },
        { name: 'Salle de réunion', identifier: 2719, parent: 2670 },
        { name: 'Salle projet tutoré', identifier: 2720, parent: 2670 },
        { name: 'Salles TD', identifier: 2721, parent: 2670 },
        { name: 'Hall', identifier: 2142, parent: 2675 },
        { name: 'Salle de réunion', identifier: 3208, parent: 2675 },
        { name: 'Salles TD', identifier: 9, parent: 2675 },
        { name: 'Salles TDm', identifier: 356, parent: 2675 },
        { name: 'Salles TP', identifier: 531, parent: 2675 },
        { name: 'FOX-MMI', identifier: 2146, parent: 2677 },
        { name: 'HIP HOP-MMI', identifier: 2150, parent: 2677 },
        { name: 'JAVA-MMI', identifier: 2157, parent: 2677 },
        { name: 'MACARENA-MMI', identifier: 2524, parent: 2677 },
        { name: 'MAMBO-MMI', identifier: 2219, parent: 2677 },
        { name: 'MMI - EX LISP INUTILISEE', identifier: 2131, parent: 2677 },
        { name: 'ROCK 2-MMI', identifier: 4213, parent: 2677 },
        { name: 'ROCK-MMI', identifier: 864, parent: 2677 },
        { name: 'SALLE REUNION-MMI', identifier: 2521, parent: 2677 },
        { name: 'SALSA-MMI', identifier: 2515, parent: 2677 },
        { name: 'SAMBA-MMI', identifier: 4873, parent: 2677 },
        { name: 'Salles TD', identifier: 2525, parent: 2677 },
        { name: 'TANGO-MMI', identifier: 2523, parent: 2677 },
        { name: 'Labo de langues (TC)', identifier: 2579, parent: 2678 },
        { name: 'S info LS bas', identifier: 2581, parent: 2678 },
        { name: 'S info LS haut', identifier: 2582, parent: 2678 },
        { name: 'S info cours', identifier: 2602, parent: 2678 },
        { name: 'S1', identifier: 2603, parent: 2678 },
        { name: 'S2', identifier: 2628, parent: 2678 },
        { name: 'S3', identifier: 2629, parent: 2678 },
        { name: 'S4', identifier: 2630, parent: 2678 },
        { name: 'S5', identifier: 2637, parent: 2678 },
        { name: 'S6', identifier: 2638, parent: 2678 },
        { name: 'S7', identifier: 2640, parent: 2678 },
        { name: 'S8', identifier: 2641, parent: 2678 },
        { name: 'Salle Licence', identifier: 2580, parent: 2678 },
        { name: 'E200', identifier: 2722, parent: 2721 },
        { name: 'E201 A', identifier: 2723, parent: 2721 },
        { name: 'E202', identifier: 2724, parent: 2721 },
        { name: 'GB EXT', identifier: 2725, parent: 2721 },
        { name: 'Arrakis-TD1', identifier: 1304, parent: 9 },
        { name: 'Mordor-TD2', identifier: 1303, parent: 9 },
        { name: 'LV426-TDm2', identifier: 1300, parent: 356 },
        { name: 'Tatooine-TDm3', identifier: 1293, parent: 356 },
        { name: 'Vulcain-TDm1', identifier: 1299, parent: 356 },
        { name: 'Westeros-TDm4', identifier: 1302, parent: 356 },
        { name: 'Azeroth-TP4', identifier: 1216, parent: 531 },
        { name: 'Gotham-TP3', identifier: 1099, parent: 531 },
        { name: 'Hyrule-TP2', identifier: 1038, parent: 531 },
        { name: 'Tamriel-TP1', identifier: 839, parent: 531 },
        { name: 'TD1-MMI', identifier: 2526, parent: 2525 },
        { name: 'TD2-MMI', identifier: 2527, parent: 2525 },
        { name: 'TD4-MMI', identifier: 2528, parent: 2525 },
        { name: 'Equipements', identifier: -4, parent: 0 },
        { name: 'IUT Laval', identifier: 802, parent: -4 },
        { name: 'Equipements communs', identifier: 2905, parent: 802 },
        { name: 'GB', identifier: 1446, parent: 802 },
        { name: 'MMI', identifier: 1781, parent: 802 },
        { name: 'Voitures', identifier: 2907, parent: 2905 },
        { name: 'PC Portable', identifier: 1702, parent: 1446 },
        { name: 'PC portable Dell', identifier: 5739, parent: 1446 },
        { name: 'PC portable Toshiba', identifier: 5816, parent: 1446 },
        { name: 'Vidéoprojecteur SANYO', identifier: 1837, parent: 1446 },
        { name: 'Examens', identifier: 636, parent: 1781 },
        { name: 'Fil rouge DUT S4', identifier: 3899, parent: 1781 },
        { name: 'Fil rouge LPCRSPM', identifier: 4025, parent: 1781 },
        { name: 'LV2', identifier: 4310, parent: 1781 },
        { name: 'TP autonome JCH', identifier: 3040, parent: 1781 },
        { name: 'TPs autonomes', identifier: 1811, parent: 1781 },
        { name: 'CLIO', identifier: 2643, parent: 2907 },
        { name: 'KANGOO', identifier: 2644, parent: 2907 },
        { name: 'XSARA', identifier: 2658, parent: 2907 },
        { name: 'Mini Pc portable Asus', identifier: 6283, parent: 1702 },
        { name: 'DUT S1', identifier: 2437, parent: 636 },
        { name: 'DUT S2', identifier: 2953, parent: 636 },
        { name: 'DUT S3', identifier: 3014, parent: 636 },
        { name: 'DUT S4', identifier: 3015, parent: 636 },
        { name: 'LP-CRSPM', identifier: 3016, parent: 636 },
        { name: 'Fil rouge 2ALT', identifier: 4001, parent: 3899 },
        { name: 'Fil rouge 2B-PP', identifier: 4000, parent: 3899 },
        { name: 'Fil rouge 2C-PCAG', identifier: 3997, parent: 3899 },
        { name: 'Fil rouge 2D-PCAG', identifier: 3999, parent: 3899 },
        { name: 'MMI1-LV2', identifier: 4314, parent: 4310 },
        { name: 'MMI2-LV2', identifier: 4315, parent: 4310 },
        { name: 'TP autonome JCH', identifier: 5993, parent: 3040 },
        { name: 'Examen pratique', identifier: 3018, parent: 2437 },
        { name: 'Examen théorique', identifier: 3050, parent: 2437 },
        { name: 'Examen pratique', identifier: 1809, parent: 2953 },
        { name: 'Examen théorique', identifier: 1800, parent: 2953 },
        { name: 'Examen pratique', identifier: 3030, parent: 3014 },
        { name: 'Examen théorique', identifier: 3028, parent: 3014 },
        { name: 'Examen pratique', identifier: 3021, parent: 3015 },
        { name: 'Examen théorique', identifier: 3020, parent: 3015 },
        { name: 'Examen pratique', identifier: 3065, parent: 3016 },
        { name: 'Examen théorique', identifier: 3067, parent: 3016 }
    ];
     
    Agenda.create(database).exec(function (err, records) {
      if (err) { console.log(err); }
    });
    
  },
  
  eventColor: function(text) {
    var colors = [
      "#1abc9c",
      "#2ecc71",
      "#3498db",
      "#9b59b6",
      "#f39c12",
      "#e67e22",
      "#e74c3c",
      "#7f8c8d",
    ];
    var idColor = (AgendaService.textToBinary(text).split("1").length - 1);
    return colors[(idColor%8)];
  },

  textToBinary: function(input) {
    var output = "";
    for (i=0; i < input.length; i++) {
      output += input[i].charCodeAt(0).toString(2) + "";
    }
    return output;
  }

};
