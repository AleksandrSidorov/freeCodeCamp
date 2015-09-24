var linkStreamsApi = "https://api.twitch.tv/kraken/streams/";
var linkChannelsApi = "https://api.twitch.tv/kraken/channels/";
var idClient = "yk7yjvzuwyfdmr6esl2fljod0queeu";
var listChannels = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "robotcaleb", "thomasballinger", "noobs2ninjas", "beohoff", "medrybw"];
var listFaIcons = ['fa fa-exclamation-circle', 'fa fa-check-circle'];
var objAllChannels = {};

function getChannelStats() {
  $.each( listChannels, function( i, channel ) {
    var objChannel = {};
    $.when( $.getJSON( linkChannelsApi + channel ), $.getJSON ( linkStreamsApi + channel ) ).done(function( chData, stData ) {
      objChannel.chName = chData[0].name;
      objChannel.chUrl = chData[0].url;
      objChannel.chDisplayName = chData[0].display_name;
      objChannel.chLogo = chData[0].logo === null ? "https://drive.google.com/uc?export=download&id=0B41DdgPqKzCaWGhLMTRjOENlaTQ" : chData[0].logo;
      objChannel.stBool = stData[0].stream !== null;
      objChannel.stStatus = stData[0].stream === null ? "" : stData[0].stream.channel.status;
      objAllChannels[channel] = objChannel;
      appendChannel(objChannel);
    });
  });
}

function appendChannel(obj) {
  $( "ul" ).append('<li id="' + obj.chName +'"><a href="' + obj.chUrl + '" target="_blank"><img src="'+ obj.chLogo + '" width="50px">' + obj.chDisplayName + '<i class="' + listFaIcons[Number(obj.stBool)] + '"></i></a></li>');
}

function changeView( elem ) {
  $( "ul" ).empty();
  $.each( objAllChannels, function( ch, chValue ) {
    if ( elem.id == 'all' ) {
      appendChannel(chValue);
    } else if ( elem.id == 'online' && chValue.stBool ) {
      appendChannel(chValue);
    } else if ( elem.id == 'offline' && !chValue.stBool ) {
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
