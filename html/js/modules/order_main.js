/*
* Created by yangyin on 2016/9/27.
* */

/* 头部下拉效果 */
var headerTopFn = (function(mod){
  var DropDownShow = $('.DropDown_show'),
    header_DDList=$('.header_DDList a');

  DropDownShow.on('touchstart',function(){
    $(this).parents('.headertop').toggleClass('headertop_downShow');
  });

  header_DDList.on('touchstart',function(){
    var txt = $(this).text();
    $(this).addClass('headerNav_active').siblings().removeClass('headerNav_active');
    $(this).parents('.header_dropDown').siblings('.title').find('em').text(txt);
  });

  return mod;
})(window.headerTopFn || {});

/* tabNav */
var tabNavFn = (function(mod){
  var tabNavCur= $('.tabNav a');
  tabNavCur.on('touchstart',function(){
    $(this).addClass('tabNav_cur').siblings().removeClass('tabNav_cur');
  });
  return mod;
})(window.tabNavFn || {});
