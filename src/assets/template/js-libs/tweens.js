function include(src){document.write('<script src="'+src+'" type="text/javascript"></script>')}

function getRandomFromRange(min, max){
  return Math.random() * (max - min) + min;
}

include('/scripts/libs/greensock/TweenMax.min.js');
include('/scripts/libs/jquery.superscrollorama.js');

$(function(){
  if ($('html').hasClass('desktop')) {
     
  
    var controller = $.superscrollorama({
      reverse: false,
      playoutAnimations: false
    }),
    from = {
      top: '30px', 
      topMinus: '-30px',
      left: '1200px',
      leftMinus: '-1200px',
      width: '0%'
    },
    heightCoef = 1.2;


    controller
        .addTween('.caption', TweenMax.from( $('.caption'), .7, {delay: 0.2, css:{opacity: 0, left: from.leftMinus}, ease: Cubic.easeOut}), 0, -300*heightCoef)
        .addTween('.anim_left', TweenMax.from( $('.anim_left'), .7, {delay: 0.2, css:{opacity: 0, left: from.leftMinus}, ease: Cubic.easeOut}), 0, -300*heightCoef)
        .addTween('.anim_right', TweenMax.from( $('.anim_right'), .7, {delay: 0.6, css:{opacity: 0, left: from.left}, ease: Cubic.easeOut}), 0, -300*heightCoef)
        .addTween('.anim_top', TweenMax.from( $('.anim_top'), .7, {delay: 1, css:{opacity: 0, top: from.topMinus}, ease: Cubic.easeOut}), 0, -300*heightCoef)
        .addTween('.block1', TweenMax.from( $('.block1'), .7, {delay: 0.4, css:{opacity: 0, top: from.top}, ease: Cubic.easeOut}), 0, -400*heightCoef)
        .addTween('.anim_left1', TweenMax.from( $('.anim_left1'), .5, {delay: 0.4, css:{opacity: 0, left: from.leftMinus}, ease: Cubic.easeOut}), 0, -300*heightCoef)
        .addTween('.anim_left2', TweenMax.from( $('.anim_left2'), .8, {delay: 0.4, css:{opacity: 0, left: from.leftMinus}, ease: Cubic.easeOut}), 0, -300*heightCoef)
        .addTween('.anim_left3', TweenMax.from( $('.anim_left3'), .11, {delay: 0.4, css:{opacity: 0, left: from.leftMinus}, ease: Cubic.easeOut}), 0, -300*heightCoef)
        .addTween('.bl2_left', TweenMax.from( $('.bl2_left'), .7, {delay: 0.2, css:{opacity: 0, left: from.leftMinus}, ease: Cubic.easeOut}), 0, -300*heightCoef)
        .addTween('.bl_right', TweenMax.from( $('.bl_right'), .7, {delay: 0.6, css:{opacity: 0, left: from.left}, ease: Cubic.easeOut}), 0, -300*heightCoef)
        .addTween('.anim_top1', TweenMax.from( $('.anim_top1'), .7, {delay: 1, css:{opacity: 0, top: from.topMinus}, ease: Cubic.easeOut}), 0, -300*heightCoef)

        $('.sheet_item').each(function() {
          controller.addTween('.sheet_item', TweenMax.from( $(this), .7, {delay: 0.2, css:{scale: 0, rotation: getRandomFromRange(-45,45)}, ease: Cubic.easeOut}), 0, -400*heightCoef);
        });

         $('.logos li').each(function() {
            controller.addTween('.logos li', TweenMax.from( $(this), .7, {delay: $(this).index()*0.2, css:{opacity: 0, top: from.top}, ease: Cubic.easeOut}), 0, -400*heightCoef);
         });

         $('.container .block3').each(function() {
            controller.addTween('.container .block3', TweenMax.from( $(this), .7, {delay: $(this).index()*0.2, css:{opacity: 0, top: from.top}, ease: Cubic.easeOut}), 0, -400*heightCoef);
         });

         $('.f_menu li').each(function() {
            controller.addTween('.f_menu li', TweenMax.from( $(this), .7, {delay: $(this).index()*0.2, css:{opacity: 0, top: from.top}, ease: Cubic.easeOut}), 0, -400*heightCoef);
        });

         $('.box').each(function() {
            controller.addTween(' .box', TweenMax.from( $(this), .7, {delay: $(this).index()*0.2, css:{opacity: 0, top: from.top}, ease: Cubic.easeOut}), 0, -400*heightCoef);
        });

          $('.footer_socials').each(function() {
            controller.addTween('.footer_socials', TweenMax.from( $(this), .7, {delay: $(this).index()*0.2, css:{opacity: 0, top: from.top}, ease: Cubic.easeOut}), 0, -400*heightCoef);
        });

          $('.rate li .scale .prog').each(function() {
            controller.addTween('.rate li .scale .prog', TweenMax.from( $(this), 6.7, {delay: $(this).index()*1.5, css:{opacity: 0, width: from.width}, ease: Cubic.easeOut}), 0, -400*heightCoef);
        });


  
  controller
      // .addTween('footer', TweenMax.from( $('footer'), 2.5, {delay: 0, css:{opacity: 0}}), 0, -350*heightCoef);

// slider for Theme Options section
}
});

$(function(){
  $('html,body').trigger('scroll');
})
