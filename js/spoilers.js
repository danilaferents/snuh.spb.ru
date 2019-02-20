// achivmets
$('.achiv-spoiler-button').mouseover(function() {
  $(this).css('backgroundColor','#00aced');
  $(this).css('color','darkblue');
});
$('.achiv-spoiler-button').mouseout(function() {
  $(this).css('backgroundColor','darkblue');
  $(this).css('color','white');
});

$('#achiv-spoiler-button-1').click(function() {
  var sca = $('#achiv-spoiler-1').css('height');
  if(sca == '0px') {
    $('#achiv-spoiler-1').css('height','294px');
    $('#achiv-spoiler-2').css('height','0px');
    $('#achiv-spoiler-3').css('height','0px');
  } else {
    $('#achiv-spoiler-1').css('height','0px');
  }
});

$('#achiv-spoiler-button-2').click(function() {
  var sca = $('#achiv-spoiler-2').css('height');
  if(sca == '0px') {
    $('#achiv-spoiler-2').css('height','384px');
    $('#achiv-spoiler-1').css('height','0px');
    $('#achiv-spoiler-3').css('height','0px');
  } else {
    $('#achiv-spoiler-2').css('height','0px');
  }
});

$('#achiv-spoiler-button-3').click(function() {
  var sca = $('#achiv-spoiler-3').css('height');
  if(sca == '0px') {
    $('#achiv-spoiler-3').css('height','1662px');
    $('#achiv-spoiler-1').css('height','0px');
    $('#achiv-spoiler-2').css('height','0px');
  } else {
    $('#achiv-spoiler-3').css('height','0px');
  }
});

$('#achiv-spoiler-button-4').click(function() {
  var sca = $('#achiv-spoiler-4').css('height');
  console.log(sca);
  if(sca == '0px') {
    $('#achiv-spoiler-4').css('height','682px');
    $('#achiv-spoiler-5').css('height','0px');
    $('#achiv-spoiler-6').css('height','0px');
    $('#achiv-spoiler-8').css('height','0px');
    $('#achiv-spoiler-7').css('height','0px');
    $('#achiv-spoiler-9').css('height','0px');
  } else {
    $('#achiv-spoiler-4').css('height','0px');
  }
});

$('#achiv-spoiler-button-5').click(function() {
  var sca = $('#achiv-spoiler-5').css('height');
  console.log(sca);
  if(sca == '0px') {
    $('#achiv-spoiler-5').css('height','628px');
    $('#achiv-spoiler-4').css('height','0px');
    $('#achiv-spoiler-6').css('height','0px');
    $('#achiv-spoiler-8').css('height','0px');
    $('#achiv-spoiler-7').css('height','0px');
    $('#achiv-spoiler-9').css('height','0px');
  } else {
    $('#achiv-spoiler-5').css('height','0px');
  }
});

$('#achiv-spoiler-button-6').click(function() {
  var sca = $('#achiv-spoiler-6').css('height');
  console.log(sca);
  if(sca == '0px') {
    $('#achiv-spoiler-6').css('height','528px');
    $('#achiv-spoiler-5').css('height','0px');
    $('#achiv-spoiler-4').css('height','0px');
    $('#achiv-spoiler-8').css('height','0px');
    $('#achiv-spoiler-7').css('height','0px');
    $('#achiv-spoiler-9').css('height','0px');
  } else {
    $('#achiv-spoiler-6').css('height','0px');
  }
});

$('#achiv-spoiler-button-7').click(function() {
  var sca = $('#achiv-spoiler-7').css('height');
  console.log(sca);
  if(sca == '0px') {
    $('#achiv-spoiler-7').css('height','656px');
    $('#achiv-spoiler-5').css('height','0px');
    $('#achiv-spoiler-6').css('height','0px');
    $('#achiv-spoiler-8').css('height','0px');
    $('#achiv-spoiler-4').css('height','0px');
    $('#achiv-spoiler-9').css('height','0px');
  } else {
    $('#achiv-spoiler-7').css('height','0px');
  }
});

$('#achiv-spoiler-button-8').click(function() {
  var sca = $('#achiv-spoiler-8').css('height');
  console.log(sca);
  if(sca == '0px') {
    $('#achiv-spoiler-8').css('height','370px');
    $('#achiv-spoiler-5').css('height','0px');
    $('#achiv-spoiler-6').css('height','0px');
    $('#achiv-spoiler-4').css('height','0px');
    $('#achiv-spoiler-7').css('height','0px');
    $('#achiv-spoiler-9').css('height','0px');
  } else {
    $('#achiv-spoiler-8').css('height','0px');
  }
});

$('#achiv-spoiler-button-9').click(function() {
  var sca = $('#achiv-spoiler-9').css('height');
  console.log(sca);
  if(sca == '0px') {
    $('#achiv-spoiler-9').css('height','418px');
    $('#achiv-spoiler-5').css('height','0px');
    $('#achiv-spoiler-6').css('height','0px');
    $('#achiv-spoiler-8').css('height','0px');
    $('#achiv-spoiler-7').css('height','0px');
    $('#achiv-spoiler-4').css('height','0px');
  } else {
    $('#achiv-spoiler-9').css('height','0px');
  }
});

// health-something spoiler
$('.health-spoiler-button').mouseover(function() {
  $(this).css('backgroundColor','#00aced');
  $(this).css('color','darkblue');
});
$('.health-spoiler-button').mouseout(function() {
  $(this).css('backgroundColor','darkblue');
  $(this).css('color','white');
});

$('#health-spoiler-button-1').click(function() {
  var sca = $('#health-spoiler-1').css('height');
  if(sca == '0px') {
    healthSpoiler1Show();
  } else {
    $('#health-spoiler-1').css('height','0px');
  }
});
function healthSpoiler1Show() {
  $('#health-spoiler-1').css('height','418px');
  $('#health-spoiler-2').css('height','0px');
  $('#health-spoiler-3').css('height','0px');
  $('#health-spoiler-4').css('height','0px');
  $('#health-spoiler-5').css('height','0px');
  $('#health-spoiler-6').css('height','0px');
  $('#health-spoiler-7').css('height','0px');
  $('#health-spoiler-8').css('height','0px');
  $('#health-spoiler-9').css('height','0px');
  $('#health-spoiler-10').css('height','0px');
  $('#health-spoiler-11').css('height','0px');
  $('#health-spoiler-12').css('height','0px');
}

$('#health-spoiler-button-2').click(function() {
  var sca = $('#health-spoiler-2').css('height');
  if(sca == '0px') {
    healthSpoiler2Show();
  } else {
    $('#health-spoiler-2').css('height','0px');
  }
});
function healthSpoiler2Show() {
  $('#health-spoiler-2').css('height','742px');
  $('#health-spoiler-1').css('height','0px');
  $('#health-spoiler-3').css('height','0px');
  $('#health-spoiler-4').css('height','0px');
  $('#health-spoiler-5').css('height','0px');
  $('#health-spoiler-6').css('height','0px');
  $('#health-spoiler-7').css('height','0px');
  $('#health-spoiler-8').css('height','0px');
  $('#health-spoiler-9').css('height','0px');
  $('#health-spoiler-10').css('height','0px');
  $('#health-spoiler-11').css('height','0px');
  $('#health-spoiler-12').css('height','0px');
}

$('#health-spoiler-button-3').click(function() {
  var sca = $('#health-spoiler-3').css('height');
  if(sca == '0px') {
    healthSpoiler3Show();
  } else {
    $('#health-spoiler-3').css('height','0px');
  }
});
function healthSpoiler3Show() {
    $('#health-spoiler-3').css('height','1542px');
    $('#health-spoiler-1').css('height','0px');
    $('#health-spoiler-2').css('height','0px');
    $('#health-spoiler-4').css('height','0px');
    $('#health-spoiler-5').css('height','0px');
    $('#health-spoiler-6').css('height','0px');
    $('#health-spoiler-7').css('height','0px');
    $('#health-spoiler-8').css('height','0px');
    $('#health-spoiler-9').css('height','0px');
    $('#health-spoiler-10').css('height','0px');
    $('#health-spoiler-11').css('height','0px');
    $('#health-spoiler-12').css('height','0px');
}

$('#health-spoiler-button-4').click(function() {
  var sca = $('#health-spoiler-4').css('height');
  if(sca == '0px') {
    healthSpoiler4Show();
  } else {
    $('#health-spoiler-4').css('height','0px');
  }
});
function healthSpoiler4Show() {
    $('#health-spoiler-4').css('height','1281px');
    $('#health-spoiler-1').css('height','0px');
    $('#health-spoiler-2').css('height','0px');
    $('#health-spoiler-3').css('height','0px');
    $('#health-spoiler-5').css('height','0px');
    $('#health-spoiler-6').css('height','0px');
    $('#health-spoiler-7').css('height','0px');
    $('#health-spoiler-8').css('height','0px');
    $('#health-spoiler-9').css('height','0px');
    $('#health-spoiler-10').css('height','0px');
    $('#health-spoiler-11').css('height','0px');
    $('#health-spoiler-12').css('height','0px');
}

$('#health-spoiler-button-5').click(function() {
  var sca = $('#health-spoiler-5').css('height');
  if(sca == '0px') {
    healthSpoiler5Show();
  } else {
    $('#health-spoiler-5').css('height','0px');
  }
});
function healthSpoiler5Show() {
    $('#health-spoiler-5').css('height','1445px');
    $('#health-spoiler-1').css('height','0px');
    $('#health-spoiler-2').css('height','0px');
    $('#health-spoiler-3').css('height','0px');
    $('#health-spoiler-4').css('height','0px');
    $('#health-spoiler-6').css('height','0px');
    $('#health-spoiler-7').css('height','0px');
    $('#health-spoiler-8').css('height','0px');
    $('#health-spoiler-9').css('height','0px');
    $('#health-spoiler-10').css('height','0px');
    $('#health-spoiler-11').css('height','0px');
    $('#health-spoiler-12').css('height','0px');
}

$('#health-spoiler-button-6').click(function() {
  var sca = $('#health-spoiler-6').css('height');
  if(sca == '0px') {
    healthSpoiler6Show();
  } else {
    $('#health-spoiler-6').css('height','0px');
  }
});
function healthSpoiler6Show() {
    $('#health-spoiler-6').css('height','1913px');
    $('#health-spoiler-1').css('height','0px');
    $('#health-spoiler-2').css('height','0px');
    $('#health-spoiler-3').css('height','0px');
    $('#health-spoiler-5').css('height','0px');
    $('#health-spoiler-4').css('height','0px');
    $('#health-spoiler-7').css('height','0px');
    $('#health-spoiler-8').css('height','0px');
    $('#health-spoiler-9').css('height','0px');
    $('#health-spoiler-10').css('height','0px');
    $('#health-spoiler-11').css('height','0px');
    $('#health-spoiler-12').css('height','0px');
}

$('#health-spoiler-button-7').click(function() {
  var sca = $('#health-spoiler-7').css('height');
  if(sca == '0px') {
    healthSpoiler7Show();
  } else {
    $('#health-spoiler-7').css('height','0px');
  }
});
function healthSpoiler7Show() {
    $('#health-spoiler-7').css('height','294px');
    $('#health-spoiler-1').css('height','0px');
    $('#health-spoiler-2').css('height','0px');
    $('#health-spoiler-3').css('height','0px');
    $('#health-spoiler-5').css('height','0px');
    $('#health-spoiler-6').css('height','0px');
    $('#health-spoiler-4').css('height','0px');
    $('#health-spoiler-8').css('height','0px');
    $('#health-spoiler-9').css('height','0px');
    $('#health-spoiler-10').css('height','0px');
    $('#health-spoiler-11').css('height','0px');
    $('#health-spoiler-12').css('height','0px');
}

$('#health-spoiler-button-8').click(function() {
  var sca = $('#health-spoiler-8').css('height');
  if(sca == '0px') {
    healthSpoiler8Show();
  } else {
    $('#health-spoiler-8').css('height','0px');
  }
});
function healthSpoiler8Show() {
    $('#health-spoiler-8').css('height','3090px');
    $('#health-spoiler-1').css('height','0px');
    $('#health-spoiler-2').css('height','0px');
    $('#health-spoiler-3').css('height','0px');
    $('#health-spoiler-5').css('height','0px');
    $('#health-spoiler-6').css('height','0px');
    $('#health-spoiler-7').css('height','0px');
    $('#health-spoiler-4').css('height','0px');
    $('#health-spoiler-9').css('height','0px');
    $('#health-spoiler-10').css('height','0px');
    $('#health-spoiler-11').css('height','0px');
    $('#health-spoiler-12').css('height','0px');
}

$('#health-spoiler-button-9').click(function() {
  var sca = $('#health-spoiler-9').css('height');
  if(sca == '0px') {
    healthSpoiler9Show();
  } else {
    $('#health-spoiler-9').css('height','0px');
  }
});
function healthSpoiler9Show() {
    $('#health-spoiler-9').css('height','1600px');
    $('#health-spoiler-1').css('height','0px');
    $('#health-spoiler-2').css('height','0px');
    $('#health-spoiler-3').css('height','0px');
    $('#health-spoiler-5').css('height','0px');
    $('#health-spoiler-6').css('height','0px');
    $('#health-spoiler-7').css('height','0px');
    $('#health-spoiler-8').css('height','0px');
    $('#health-spoiler-4').css('height','0px');
    $('#health-spoiler-10').css('height','0px');
    $('#health-spoiler-11').css('height','0px');
    $('#health-spoiler-12').css('height','0px');
}

$('#health-spoiler-button-10').click(function() {
  var sca = $('#health-spoiler-10').css('height');
  if(sca == '0px') {
    healthSpoiler10Show();
  } else {
    $('#health-spoiler-10').css('height','0px');
  }
});
function healthSpoiler10Show() {
    $('#health-spoiler-10').css('height','1916px');
    $('#health-spoiler-1').css('height','0px');
    $('#health-spoiler-2').css('height','0px');
    $('#health-spoiler-3').css('height','0px');
    $('#health-spoiler-5').css('height','0px');
    $('#health-spoiler-6').css('height','0px');
    $('#health-spoiler-7').css('height','0px');
    $('#health-spoiler-8').css('height','0px');
    $('#health-spoiler-9').css('height','0px');
    $('#health-spoiler-4').css('height','0px');
    $('#health-spoiler-11').css('height','0px');
    $('#health-spoiler-12').css('height','0px');
}

$('#health-spoiler-button-11').click(function() {
  var sca = $('#health-spoiler-11').css('height');
  if(sca == '0px') {
    healthSpoiler11Show();
  } else {
    $('#health-spoiler-11').css('height','0px');
  }
});
function healthSpoiler11Show() {
    $('#health-spoiler-11').css('height','741px');
    $('#health-spoiler-1').css('height','0px');
    $('#health-spoiler-2').css('height','0px');
    $('#health-spoiler-3').css('height','0px');
    $('#health-spoiler-5').css('height','0px');
    $('#health-spoiler-6').css('height','0px');
    $('#health-spoiler-7').css('height','0px');
    $('#health-spoiler-8').css('height','0px');
    $('#health-spoiler-9').css('height','0px');
    $('#health-spoiler-4').css('height','0px');
    $('#health-spoiler-10').css('height','0px');
    $('#health-spoiler-12').css('height','0px');
}

$('#health-spoiler-button-12').click(function() {
  var sca = $('#health-spoiler-12').css('height');
    if(sca == '0px') {
    healthSpoiler12Show();
  } else {
    $('#health-spoiler-12').css('height','0px');
  }
});
function healthSpoiler12Show() {
    $('#health-spoiler-12').css('height','1920px');
    $('#health-spoiler-1').css('height','0px');
    $('#health-spoiler-2').css('height','0px');
    $('#health-spoiler-3').css('height','0px');
    $('#health-spoiler-5').css('height','0px');
    $('#health-spoiler-6').css('height','0px');
    $('#health-spoiler-7').css('height','0px');
    $('#health-spoiler-8').css('height','0px');
    $('#health-spoiler-9').css('height','0px');
    $('#health-spoiler-4').css('height','0px');
    $('#health-spoiler-11').css('height','0px');
    $('#health-spoiler-10').css('height','0px');
}

$('#health-spoiler-button-13').click(function() {
  var sca = $('#health-spoiler-13').css('height');
  console.log(sca);
    if(sca == '0px') {
    healthSpoiler13Show();
  } else {
    $('#health-spoiler-13').css('height','0px');
  }
});
function healthSpoiler13Show() {
  $('#health-spoiler-13').css('height','300px');
  $('#health-spoiler-14').css('height','0px');
}

$('#health-spoiler-button-14').click(function() {
  var sca = $('#health-spoiler-14').css('height');
  console.log(sca);
    if(sca == '0px') {
    healthSpoiler14Show();
  } else {
    $('#health-spoiler-14').css('height','0px');
  }
});
function healthSpoiler14Show() {
  $('#health-spoiler-14').css('height','300px');
  $('#health-spoiler-13').css('height','0px');
}
$('.achiv-spoiler-button').mouseover(function() {
  $(this).css('backgroundColor','#00aced');
  $(this).css('color','darkblue');
});
$('.achiv-spoiler-button').mouseout(function() {
  $(this).css('backgroundColor','darkblue');
  $(this).css('color','white');
});

//service-spoilers

$('#service-spoiler-button-1').mouseover(function() {
  $(this).css('backgroundColor','white');
  $(this).css('color','#00aced');
});
$('#service-spoiler-button-1').mouseout(function() {
  $(this).css('backgroundColor','#00aced');
  $(this).css('color','white');
});

$('#service-spoiler-button-2').mouseover(function() {
  $(this).css('backgroundColor','white');
  $(this).css('color','#32CD32');
});
$('#service-spoiler-button-2').mouseout(function() {
  $(this).css('backgroundColor','#32CD32');
  $(this).css('color','white');
});

$('#service-spoiler-button-3').mouseover(function() {
  $(this).css('backgroundColor','white');
  $(this).css('color','#FF69B4');
});
$('#service-spoiler-button-3').mouseout(function() {
  $(this).css('backgroundColor','#FF69B4');
  $(this).css('color','white');
});

$('#service-spoiler-button-4').mouseover(function() {
  $(this).css('backgroundColor','white');
  $(this).css('color','#8A2BE2');
});
$('#service-spoiler-button-4').mouseout(function() {
  $(this).css('backgroundColor','#8A2BE2');
  $(this).css('color','white');
});

$('#service-spoiler-button-5').mouseover(function() {
  $(this).css('backgroundColor','white');
  $(this).css('color','#DAA520');
});
$('#service-spoiler-button-5').mouseout(function() {
  $(this).css('backgroundColor','#DAA520');
  $(this).css('color','white');
});


$('#service-spoiler-button-1').click(function() {
  var sca = $('#service-spoiler-1').css('height');
  if(sca == '0px') {
    $('#service-spoiler-1').css('height','560px');
    $('#service-spoiler-2').css('height','0px');
    $('#service-spoiler-3').css('height','0px');
    $('#service-spoiler-4').css('height','0px');
    $('#service-spoiler-5').css('height','0px');
  } else {
    $('#service-spoiler-1').css('height','0px');
  }
});

$('#service-spoiler-button-2').click(function() {
  var sca = $('#service-spoiler-2').css('height');
  if(sca == '0px') {
    $('#service-spoiler-1').css('height','0px');
    $('#service-spoiler-2').css('height','680px');
    $('#service-spoiler-3').css('height','0px');
    $('#service-spoiler-4').css('height','0px');
    $('#service-spoiler-5').css('height','0px');
  } else {
    $('#service-spoiler-2').css('height','0px');
  }
});

$('#service-spoiler-button-3').click(function() {
  var sca = $('#service-spoiler-3').css('height');
  if(sca == '0px') {
    $('#service-spoiler-1').css('height','0px');
    $('#service-spoiler-2').css('height','0px');
    $('#service-spoiler-3').css('height','746px');
    $('#service-spoiler-4').css('height','0px');
    $('#service-spoiler-5').css('height','0px');
  } else {
    $('#service-spoiler-3').css('height','0px');
  }
});

$('#service-spoiler-button-4').click(function() {
  var sca = $('#service-spoiler-4').css('height');
  if(sca == '0px') {
    $('#service-spoiler-1').css('height','0px');
    $('#service-spoiler-2').css('height','0px');
    $('#service-spoiler-3').css('height','0px');
    $('#service-spoiler-4').css('height','818px');
    $('#service-spoiler-5').css('height','0px');
  } else {
    $('#service-spoiler-4').css('height','0px');
  }
});

$('#service-spoiler-button-5').click(function() {
  var sca = $('#service-spoiler-5').css('height');
  if(sca == '0px') {
   $('#service-spoiler-1').css('height','0px');
   $('#service-spoiler-2').css('height','0px');
   $('#service-spoiler-3').css('height','0px');
   $('#service-spoiler-4').css('height','0px');
   $('#service-spoiler-5').css('height','922px');
  } else {
    $('#service-spoiler-5').css('height','0px');
  }
});
//spoilers allservice
$('.allservice-spoiler-button').mouseover(function() {
  $(this).css('backgroundColor','#00aced');
  $(this).css('color','darkblue');
});
$('.allservice-spoiler-button').mouseout(function() {
  $(this).css('backgroundColor','darkblue');
  $(this).css('color','white');
});


$('#allservice-spoiler-button-1').click(function() {
  var sca = $('#allservice-spoiler-1').css('maxHeight');
  if(sca == '0px') {
    allServiceSpoiler1Show();
  } else {
    allServiceSpoiler1Hide();
  }
});
function  allServiceSpoiler1Show() {
  $('#allservice-spoiler-1').css('maxHeight','350px');
  setTimeout(function() {$('#allservice-spoiler-1').css('maxHeight','none');}, 400);
  $('#allservice-spoiler-2').css('height','0px');
  $('#allservice-spoiler-3').css('height','0px');
}
function allServiceSpoiler1Hide() {
  $('#service-spoiler-1').css('height','0px');
  $('#service-spoiler-2').css('height','0px');
  $('#service-spoiler-3').css('height','0px');
  $('#service-spoiler-4').css('height','0px');
  $('#service-spoiler-5').css('height','0px');
  $('#allservice-spoiler-1').css('maxHeight','350px');
  setTimeout(function() {$('#allservice-spoiler-1').css('maxHeight','0px');}, 1);
}

$('#allservice-spoiler-button-2').click(function() {
  var sca = $('#allservice-spoiler-2').css('height');
  if(sca == '0px') {
    allServiceSpoiler2Show();
  } else {
    $('#allservice-spoiler-2').css('height','0px');
  }
});
function allServiceSpoiler2Show() {
  $('#allservice-spoiler-2').css('height','1502px');
  allServiceSpoiler1Hide();
  $('#allservice-spoiler-3').css('height','0px');
}

$('#allservice-spoiler-button-3').click(function() {
  var sca = $('#allservice-spoiler-3').css('height');
  if(sca == '0px') {
    allServiceSpoiler3Show();
  } else {
    $('#allservice-spoiler-3').css('height','0px');
  }
});
function allServiceSpoiler3Show() {
    $('#allservice-spoiler-3').css('height','1135px');
    allServiceSpoiler1Hide();
    $('#allservice-spoiler-2').css('height','0px');

}
