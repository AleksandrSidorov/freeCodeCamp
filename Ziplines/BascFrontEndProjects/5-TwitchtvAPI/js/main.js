var linkStreamsApi = "https://api.twitch.tv/kraken/streams/";
var linkChannelsApi = "https://api.twitch.tv/kraken/channels/";
var idClient = "yk7yjvzuwyfdmr6esl2fljod0queeu";
var listChannels = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "robotcaleb", "thomasballinger", "noobs2ninjas", "beohoff", "medrybw", "comster404"];
var listFaIcons = ['fa fa-exclamation-circle fa-lg purple', 'fa fa-check-circle fa-lg green', 'fa fa-close fa-lg red'];
var objAllChannels = {};

function getChannelStats() {
  $.each( listChannels, function( i, channel ) {
    var objChannel = {};
    $.when( $.getJSON( linkChannelsApi + channel ), $.getJSON ( linkStreamsApi + channel ) ).done(function( chData, stData ) {
      objChannel.chName = chData[0].name;
      objChannel.chUrl = chData[0].url;
      objChannel.chDisplayName = chData[0].display_name;
      objChannel.chLogo = chData[0].logo === null ? "https://drive.google.com/uc?export=download&id=0B41DdgPqKzCaWGhLMTRjOENlaTQ" : chData[0].logo;
      objChannel.stBool = stData[0].stream !== null ? 1 : 0;
      objChannel.stStatus = stData[0].stream === null ? "" : stData[0].stream.channel.status;
      objChannel.stStatus = objChannel.stStatus.length > 75 ? objChannel.stStatus.slice(0, 72) + "..." : objChannel.stStatus;
      objAllChannels[channel] = objChannel;
      appendChannel(objChannel);
    })
    .fail(function( a, b, c ) {
      objChannel.chName = channel;
      objChannel.chUrl = "http://twitch.tv";
      objChannel.chDisplayName = channel;
      objChannel.chLogo = "https://drive.google.com/uc?export=download&id=0B41DdgPqKzCaWGhLMTRjOENlaTQ";
      objChannel.stBool = 2;
      var respTextObj = jQuery.parseJSON(a.responseText);
      objChannel.stStatus = respTextObj.message;
      objAllChannels[channel] = objChannel;
      appendChannel(objChannel);
    });
  });
}

function appendChannel(obj) {
  $( "ul" ).append('<a href="' + obj.chUrl + '" target="_blank"><li id="' + obj.chName +'"><img src="'+ obj.chLogo + '"><span class="ch-name">' + obj.chDisplayName + '</span><span class="ch-status">' + obj.stStatus + '</span><i class="' + listFaIcons[obj.stBool] + '"></i></li></a>');
}

function changeView( elem ) {
  $( "button" ).removeClass();
  $( elem ).addClass("active-button");
  $( "ul" ).empty();
  $.each( objAllChannels, function( ch, chValue ) {
    if ( elem.id == 'all' ) {
      appendChannel(chValue);
    } else if ( elem.id == 'online' && chValue.stBool == 1 ) {
      appendChannel(chValue);
    } else if ( elem.id == 'offline' && (chValue.stBool == 0 || chValue.stBool == 2) ) {
      appendChannel(chValue);
    }
    searchInList( "#search" );
  });
}

function searchInList ( elem ) {
  var srchVal = $( elem ).val().toLowerCase();
  $( "li" ).hide();
  $( "li" ).each( function() {
    var chNameVal = $( this ).text().toLowerCase();
    if ( chNameVal.indexOf(srchVal) != -1 ) {
      $( this ).show();
    }
  });
}

$(document).ready( function() {
  getChannelStats();
});

$( "#search" ).keyup( function() {
  searchInList( this );
});

$( ".menu > button" ).click( function() {
  changeView( this );
});
