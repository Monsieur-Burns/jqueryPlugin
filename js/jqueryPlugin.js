$(document).ready(function() {
   // Stuff to do as soon as the DOM is ready
   console.log("départ console");

// init plugin ---------------------------------------------------------------------
  //globaloption Placeholdem
    Placeholdem( document.querySelectorAll( '[placeholder]' ) );
  //globaloption animate css
    $.fn.extend({
      animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
          $(this).removeClass('animated ' + animationName);
        });
      }
    });
  // //globaloption tooltipster
    $.fn.tooltipster('setDefaults', {
      position: 'bottom',
      theme: 'tooltipster-shadow',
      animation: 'swing',
      multiple:true,
      trigger:'hover',
    });

  // globaloption summernote
  $('#summernote').summernote({
    toolbar: [
      // [groupName, [list of button]]
      ['style', ['bold', 'italic', 'underline', 'clear']],
      ['fontsize', ['fontsize']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
    ],
    height: 200,                 // set editor height
    minHeight: null,             // set minimum height of editor
    maxHeight: null,             // set maximum height of editor
    //focus: true                  // set focus to editable area after initializing summernote
  });

// globaloption Moment.js

    moment().format();


// init var regex ------------------------------------------------------------------
var regexVoiture = /^[a-z\- ]{5,}$/i;
var regexMotClef = /^([a-z0-9\,\- ]{7,})$/i;
var regexSummernote = /^[a-z0-9\-\,\;\ ]{20,}$/i


// init var globale ----------------------------------------------------------------

/*
* Formulaire de Fich Auto (avec Boostrap Twitter bien entendu!!)
* Et Bower si possible... :)
*
* Good Luck !! ^^
*
* Voici les différents champs de ce dernier formulaire ,
* vous pouvez jouer sur les classe has-error, has-success, alert etc..
 de Bootstrap pour afficher vos erreurs
*
*
Nom de la voiture:TODO
    + Champs de saisie avec caractères alpha
     tiret espace compris et minimum 5 caractères
    + Utiliser le plugin http://placeholdem.jackrugile.com/
*/

  $('input#rechercheVoit').blur(function() {
    console.log('blur recherche ok');
    var elt = $(this);

    if (regexVoiture.test(elt.val()) === false) {
      console.log("regex recherche false");
      elt.animateCss("shake");
      elt.parents('div.form-group').removeClass("has-success");
      elt.parents('div.form-group').addClass("has-warning");
      $('div#alrtRechercheVoit').text("Vous avez une erreur de saisie").slideDown("slow");
    }else {
      console.log("regex recherche true");
      elt.parents('div.form-group').removeClass("has-warning");
      elt.parents('div.form-group').addClass("has-success");
      $('div#alrtRechercheVoit').hide();
    }
  }); //endFunction


/*
Accroche de la voiture:TODO
    + Champs de saisie avec caractères alpha numérique
    minimum de 7 caractères
    + Utiliser le plugin http://iamceege.github.io/tooltipster/

*/
  $('input#motClefVoiture').focus(function () {
    console.log("focus ok");
    var elt = $(this);
    elt.tooltipster({
      content:'Vous devez saisir une accroche pour affiner votre recherche',
    });
  }); //endFunction


  $('input#motClefVoiture').blur(function () {
    console.log("blur ok");
    var elt = $(this);
    if (regexMotClef.test(elt.val())== false) {
      console.log("regex motclef false");
      elt.animateCss("shake");
      elt.parents('div.form-group').removeClass("has-success");
      elt.parents('div.form-group').addClass("has-warning");
      $('div#alrtMotCleVoit').text("Vous devez saisir un minimum de 7 chiffres et lettres").slideDown("slow").show();
      $('div#champMotsClef span').show();
    }else {
      console.log("regex motclef true");
      elt.parents('div.form-group').removeClass("has-warning");
      elt.parents('div.form-group').addClass("has-success");
      $('div#alrtMotCleVoit').hide();
      $('div#champMotsClef span').show();
    }

  }); //endFunction







/*

Description de la voiture: TODO
    + Zone de saisie : minimum 20 caractères
    + Utiliser le plugin summernote http://summernote.org/

*/
$('div#champEditeur div.note-editable').blur(function(){
  console.log("blur champEditeur ok");
  var elt = $(this);
  console.log($('div#champEditeur div.note-editable p').text());
  if (regexSummernote.test(elt.children('p').text())==false) {
    console.log("regex summer false");
    $('div#alrtSummer').text("Vous devez saisir un minimum de 20 caractères").slideDown("slow").show();
  }else {
    console.log("regex summer true");
    $('div#alrtSummer').text("Vous devez saisir un minimum de 20 caractères").slideDown("slow").hide();
  }

});


/*

*
Date de la sortie de la voiture: champs de saisie:TODO
    * Vérifier un format date en fr dd/mm/YYY
    * Utiliser le plugin datepicker https://eonasdan.github.io/bootstrap-datetimepicker/
*
*/
  $(function () {
    $('#datetimepicker1').datetimepicker({
      format:'DD/MM/YYYY',
      //format:moment().format("DD/MM/YYYY")
      });
  });//endFunction



/*
Couleur de la voiture: champs de saisie d'une couleur hexadécimal ou rgba:TODO
    * Utiliser le plugin Colopicker avec le plugin https://mjolnic.com/bootstrap-colorpicker/
*
*/

  $(function() {
    $('div#colorpick').colorpicker();
  });



/*

Video de la voiture de Youtube à partir de son URL: champs de siais ed'une URL TODO
    * + Utiliser le plugin Youtube Popup PLayer pour afficher une fenetre et la video http://lab.abhinayrathore.com/jquery_youtube/#Examples
*/

//$("a.youtube").YouTubePopup({ autoplay: 0, draggable: true });
$(function() {
	$("a.youtube").YouTubePopup();
});

/*
*
*******************************************************************************************
*
* Quand je soumet le formulaire, cela me cache le Formulaire TODO
    * et m'affiche le nom ainsi que l'accroche saisie de ma voiture


* Bonus: Une fois le formualier soumis, afficher la gallerie de photo de la voiture saisie avec le plugin Jquery Gallery TODO
    * https://github.com/blueimp/Bootstrap-Image-Gallery#demo
*
*/


}); //end document
