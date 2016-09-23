// Rotating Name

var Emblem = {
  init: function(el, str) {
    var element = document.querySelector(el);
    var text = str ? str : element.innerHTML;
    element.innerHTML = '';
    for (var i = 0; i < text.length; i++) {
      var letter = text[i];
      var span = document.createElement('span');
      var node = document.createTextNode(letter);
      var r = (360/text.length)*(i);
      var x = (Math.PI/text.length).toFixed(0) * (i);
      var y = (Math.PI/text.length).toFixed(0) * (i);
      span.appendChild(node);
      span.style.webkitTransform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
      span.style.transform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
      element.appendChild(span);
    }
  }
};

Emblem.init('.emblem');

// Jquery

$(function(){

$('#offset-logo-box').mouseover(function() {
  $(this).css('right', '5px')
  $(this).css('bottom', '5px')
  $(this).css('transition', 'right 0.5s, bottom 0.5s')
  $("#coloured-camo").css('left', '15px')
  $("#coloured-camo").css('top', '15px')
  $("#coloured-camo").css('transition', 'top 0.5s, left 0.5s')

});
$('#offset-logo-box').mouseout(function() {
  $(this).css('right', '15px')
  $(this).css('bottom', '15px')
  $("#coloured-camo").css('left', '25px')
  $("#coloured-camo").css('top', '25px')
});

$('.portfolio-item a').mouseover(function() {
  $('.accent', this).css('background-color', '#FCE4EC')
  $('.accent', this).css('transition', '0.5s')
});
$('.portfolio-item a').mouseout(function() {
  $('.accent', this).css('background-color', '#F2EBF5')
});
});
