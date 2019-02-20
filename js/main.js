// mailsender
$(document).ready(function() {
var hhru = document.documentElement.clientWidth;
// hashes
if (window.location.hash == "#toHS1") {
  var t = $('#health-spoiler-button-1').offset().top;
  t -= 50;
  $('html, body').animate({ scrollTop: t }, 500);
  healthSpoiler1Show();
  location.hash = "";
} else if (window.location.hash == "#toHS2") {
  var t = $('#health-spoiler-button-2').offset().top;
  t -= 50;
  $('html, body').animate({ scrollTop: t }, 500);
  healthSpoiler2Show();
  location.hash = "";
} else if (window.location.hash == "#toHS3") {
  var t = $('#health-spoiler-button-3').offset().top;
  t -= 50;
  $('html, body').animate({ scrollTop: t }, 500);
  healthSpoiler3Show();
  location.hash = "";
} else if (window.location.hash == "#toHS4") {
  var t = $('#health-spoiler-button-4').offset().top;
  t -= 50;
  $('html, body').animate({ scrollTop: t }, 500);
  healthSpoiler4Show();
  location.hash = "";
} else if (window.location.hash == "#toHS5") {
  var t = $('#health-spoiler-button-5').offset().top;
  t -= 50;
  $('html, body').animate({ scrollTop: t }, 500);
  healthSpoiler5Show();
  location.hash = "";
} else if (window.location.hash == "#toHS6") {
  var t = $('#health-spoiler-button-6').offset().top;
  t -= 50;
  $('html, body').animate({ scrollTop: t }, 500);
  healthSpoiler6Show();
  location.hash = "";
} else if (window.location.hash == "#toHS7") {
  var t = $('#health-spoiler-button-7').offset().top;
  t -= 50;
  $('html, body').animate({ scrollTop: t }, 500);
  healthSpoiler7Show();
  location.hash = "";
} else if (window.location.hash == "#toHS8") {
  var t = $('#health-spoiler-button-8').offset().top;
  t -= 50;
  $('html, body').animate({ scrollTop: t }, 500);
  healthSpoiler8Show();
  location.hash = "";
} else if (window.location.hash == "#toHS9") {
  var t = $('#health-spoiler-button-9').offset().top;
  t -= 50;
  $('html, body').animate({ scrollTop: t }, 500);
  healthSpoiler9Show();
  location.hash = "";
} else if (window.location.hash == "#toHS10") {
  var t = $('#health-spoiler-button-10').offset().top;
  t -= 50;
  $('html, body').animate({ scrollTop: t }, 500);
  healthSpoiler10Show();
  location.hash = "";
} else if (window.location.hash == "#toHS11") {
  var t = $('#health-spoiler-button-11').offset().top;
  t -= 50;
  $('html, body').animate({ scrollTop: t }, 500);
  healthSpoiler11Show();
  location.hash = "";
} else if (window.location.hash == "#toHS12") {
  var t = $('#health-spoiler-button-12').offset().top;
  t -= 50;
  $('html, body').animate({ scrollTop: t }, 500);
  healthSpoiler12Show();
  location.hash = "";
} else if (window.location.hash == "#toHS13") {
  var t = $('#health-spoiler-button-13').offset().top;
  t -= 50;
  $('html, body').animate({ scrollTop: t }, 500);
  healthSpoiler13Show();
  location.hash = "";
} else if (window.location.hash == "#toHS14") {
  var t = $('#health-spoiler-button-14').offset().top;
  t -= 50;
  $('html, body').animate({ scrollTop: t }, 500);
  healthSpoiler14Show();
  location.hash = "";
} else if (window.location.hash == "#toS1") {
  var t = $('#allservice-spoiler-button-1').offset().top;
  t -= 50;
  $('html, body').animate({ scrollTop: t }, 500);
  allServiceSpoiler1Show();
  location.hash = "";
} else if (window.location.hash == "#toS2") {
  var t = $('#allservice-spoiler-button-2').offset().top;
  t -= 50;
  $('html, body').animate({ scrollTop: t }, 500);
  allServiceSpoiler2Show();
  location.hash = "";
} else if (window.location.hash == "#toS3") {
  var t = $('#allservice-spoiler-button-3').offset().top;
  t -= 50;
  $('html, body').animate({ scrollTop: t }, 500);
  allServiceSpoiler3Show();
  location.hash = "";
}

// flex-elements Gallery Photo
$('#p-l').height($('#p-as').height()+20);
$('#p-l-1').height($('#p-as-1').height()+20);
$('#pl-pl').height($('#p-l').height()+30);

$('#p-a-1').click(function() {
  $('#pl-pl').css('left','-100%');
  var h1 = $('#p-l').height();
  var h2 = $('#p-l-1').height();
  if (h1 > h2) {
    setTimeout(function() {$('#pl-pl').height($('#p-l-1').height()+30);}, 1000);
  } else {
    $('#pl-pl').height($('#p-l-1').height()+30);
  }
});
$('#back-a').click(function() {
  $('#pl-pl').css('left','0');
  var h1 = $('#p-l-1').height();
  var h2 = $('#p-l').height();
  if (h1 > h2) {
    setTimeout(function() {$('#pl-pl').height($('#p-l').height()+30);}, 1000);
  } else {
    $('#pl-pl').height($('#p-l').height()+30);
  }
});

setTimeout(slide, 5000, 5);
$('#fon').hide();
$('#successmail').hide();

$('#button').click(function() {
  $.post( 
  
  "mail.php",
  
  {
    email: $('[name="email"]').val(),
    name: $('[name="name"]').val(),
    text: $('[name="text"]').val()
  }, 
  
  function( data ) {
    if (data === "sentmail") {
    $('#fon').show();
    $('#successmail').show();
    $('#fon').click(function() {
      $('#successmail').hide();
      $('#fon').hide();
    });
    $('#sentbutton').click(function() {
      $('#successmail').hide();
      $('#fon').hide();
    });
  }
  if (data === "noname") {
    $('#name').css('border','2px solid red');
  }
  if (data === "noemail") {
    $('#email').css('border','2px solid red');
  }
  if (data === "notext") {
    $('#text').css('border','2px solid red');
  }
  }
  
  );
});
// slider
$('.sliderbutton').mouseover(function() {
  $(this).css('backgroundColor','white');
});
$('.sliderbutton').mouseout(function() {
  $(this).css('backgroundColor','rgba(0, 0, 139, 0.5)');
});

});

var timer;
var last = true;
var rwidth = ($('#dev').width())*(-1);
var cr = rwidth;

function slide(sli) {
  clearTimeout(timer);
  var r = /\d+/;
  if (sli == 5) {
    el = $('#sliders img');
    if (el.css('left') == "0px") {
      cr = rwidth;
      el.css('left',cr);
      last = false;
    } else if (el.css('left') == "-2700px") {
      cr = 2*rwidth;
      el.css('left',cr);
      last = true;
    } else if (last == true) {
      t = el.css('left');
      p = t.match(r);
      p *= -1;
      p += (-1)*rwidth;
      t = p + "px";
      el.css('left',t);
    } else {
      t = el.css('left');
      p = t.match(r);
      p *= -1;
      p -= (-1)*rwidth;
      t = p + "px";
      el.css('left',t);
    }
  }
  if(sli == 1) {
    last = true;
    el = $('#sliders img');
    el.css('left','0');
  }
  if(sli == 2) {
    if (last == true) {
      last = false;
    } else {
      last = true;
    }
    el = $('#sliders img');
    el.css('left',rwidth);
  }
  if(sli == 3) {
    if (last == true) {
      last = false;
    } else {
      last = true;
    }
    el = $('#sliders img');
    el.css('left',2*rwidth);
  }
  if(sli == 4) {
    last = false;
    el = $('#sliders img');
    el.css('left',3*rwidth);
  }
  timer = setTimeout(slide, 5000, 5);
}
// support
$('#support').mouseover(function() {
  $(this).css('transform','rotate(360deg)');
});
$('#support').mouseout(function() {
  $(this).css('transform','rotate(0deg)');
});
// fixed menu after scroll
var h_hght = 356;
var h_mrg = 0;
$(function() {
  var el1 = $('#cssmenu');
  var el2 = $('#linksfon');
  var top = $(this).scrollTop();

  if(top > h_hght) {
    el1.css('top',h_mrg);
    el2.css('position','fixed');
  }

  $(window).scroll(function() {
    top = $(this).scrollTop();
    if(top+h_mrg < h_hght) {
      el1.css('top',(h_hght-top));
      el2.css('position','absolute');
    } else {
      el1.css('top',h_mrg);
      if ($('body').width() > 979) {
        el2.css('position','fixed');
      }
    }
  });
});
// footerlinks
$('.footerli').mouseover(function() {
  $(this).css('color','white');
});
$('.footerli').mouseout(function() {
  $(this).css('color','#00aced');
});

$('#footerli2').click(function() {
  window.open('https://www.facebook.com/Seoul-National-University-Hospital-944514769055498');
});
$('#footerli1').click(function() {
  window.open('https://twitter.com/HospitalSeoul');
});
$('#footerli3').click(function() {
  window.open('https://ok.ru');
});
// links to health
function toHealth_1() {
  if (location.href == "http://projectden.ru/health_something_1.php#") {
    location.hash = "#toHS1";
    location.reload();
  } else {
    window.location.href = 'http://projectden.ru/health_something_1.php#toHS1';
  }
}
function toHealth_2() {
  if (location.href == "http://projectden.ru/health_something_1.php#") {
    location.hash = "#toHS2";
    location.reload();
  } else {
    window.location.href = 'http://projectden.ru/health_something_1.php#toHS2';
  }
}
function toHealth_3() {
  if (location.href == "http://projectden.ru/health_something_1.php#") {
    location.hash = "#toHS3";
    location.reload();
  } else {
    window.location.href = 'http://projectden.ru/health_something_1.php#toHS3';
  }
}
function toHealth_4() {
  if (location.href == "http://projectden.ru/health_something_1.php#") {
    location.hash = "#toHS4";
    location.reload();
  } else {
    window.location.href = 'http://projectden.ru/health_something_1.php#toHS4';
  }
}
function toHealth_5() {
  if (location.href == "http://projectden.ru/health_something_1.php#") {
    location.hash = "#toHS5";
    location.reload();
  } else {
    window.location.href = 'http://projectden.ru/health_something_1.php#toHS5';
  }
}
function toHealth_6() {
  if (location.href == "http://projectden.ru/health_something_1.php#") {
    location.hash = "#toHS6";
    location.reload();
  } else {
    window.location.href = 'http://projectden.ru/health_something_1.php#toHS6';
  }
}
function toHealth_7() {
  if (location.href == "http://projectden.ru/health_something_1.php#") {
    location.hash = "#toHS7";
    location.reload();
  } else {
    window.location.href = 'http://projectden.ru/health_something_1.php#toHS7';
  }
}
function toHealth_8() {
  if (location.href == "http://projectden.ru/health_something_1.php#") {
    location.hash = "#toHS8";
    location.reload();
  } else {
    window.location.href = 'http://projectden.ru/health_something_1.php#toHS8';
  }
}
function toHealth_9() {
  if (location.href == "http://projectden.ru/health_something_1.php#") {
    location.hash = "#toHS9";
    location.reload();
  } else {
    window.location.href = 'http://projectden.ru/health_something_1.php#toHS9';
  }
}
function toHealth_10() {
  if (location.href == "http://projectden.ru/health_something_1.php#") {
    location.hash = "#toHS10";
    location.reload();
  } else {
    window.location.href = 'http://projectden.ru/health_something_1.php#toHS10';
  }
}
function toHealth_11() {
  if (location.href == "http://projectden.ru/health_something_1.php#") {
    location.hash = "#toHS11";
    location.reload();
  } else {
    window.location.href = 'http://projectden.ru/health_something_1.php#toHS11';
  }
}
function toHealth_12() {
  if (location.href == "http://projectden.ru/health_something_1.php#") {
    location.hash = "#toHS12";
    location.reload();
  } else {
    window.location.href = 'http://projectden.ru/health_something_1.php#toHS12';
  }
}
function toHealth_13() {
  if(location.href == "http://projectden.ru/health_something_4.php#") {
    location.hash = "toHS13";
    location.reload();
  } else {
    window.location.href = 'http://projectden.ru/health_something_4.php#toHS13';
  }
}
function toHealth_14() {
  if(location.href == "http://projectden.ru/health_something_4.php#") {
    location.hash = "toHS14";
    location.reload();
  } else {
    window.location.href = 'http://projectden.ru/health_something_4.php#toHS14';
  }
}
function toServices_1() {
  if(location.href == "http://projectden.ru/services.php#") {
    location.hash = "toS1";
    location.reload();
  } else {
    window.location.href = 'http://projectden.ru/services.php#toS1';
  }
}
function toServices_2() {
  if(location.href == "http://projectden.ru/services.php#") {
    location.hash = "toS2";
    location.reload();
  } else {
    window.location.href = 'http://projectden.ru/services.php#toS2';
  }
}
function toServices_3() {
  if(location.href == "http://projectden.ru/services.php#") {
    location.hash = "toS3";
    location.reload();
  } else {
    window.location.href = 'http://projectden.ru/services.php#toS3';
  }
}

// Gallery
$('#gal-p-3').mouseover(function() {
  $('#gal-p-1').css('transform','rotate(25deg)');
  $('#gal-p-2').css('transform','rotate(-25deg)');
  $('#gal-p-3').css({'width':'204px','height':'254px','marginLeft':'-102px','marginTop':'-2px'});
});
$('#gal-p-3').mouseout(function() {
  $('#gal-p-1').css('transform','rotate(15deg)');
  $('#gal-p-2').css('transform','rotate(-15deg)');
  $('#gal-p-3').css({'width':'200px','height':'250px','marginLeft':'-100px','marginTop':'0'});
});
$('#gal-b-1').mouseover(function() {
  $('#gal-b-1').css('backgroundColor','white');
  $('#gal-b-1').css('color','darkblue');
});
$('#gal-b-1').mouseout(function() {
  $('#gal-b-1').css('backgroundColor','darkblue');
  $('#gal-b-1').css('color','white');
});
$('#gal-b-2').mouseover(function() {
  $('#gal-b-2').css('backgroundColor','white');
  $('#gal-b-2').css('color','darkblue');
});
$('#gal-b-2').mouseout(function() {
  $('#gal-b-2').css('backgroundColor','darkblue');
  $('#gal-b-2').css('color','white');
});
// Gallery Photos
$('.back-gal').mouseover(function() {
  $(this).css('backgroundColor','white');
  $(this).css('color','darkblue');
});
$('.back-gal').mouseout(function() {
  $(this).css('backgroundColor','darkblue');
  $(this).css('color','white');
});
$('.p-a-text').mouseover(function() {
  $(this).css('backgroundColor','white');
  $(this).css('color','darkblue');
});
$('.p-a-text').mouseout(function() {
  $(this).css('backgroundColor','darkblue');
  $(this).css('color','white');
});