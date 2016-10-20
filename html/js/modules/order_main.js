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


$(function(){
  var page=2;
  var has_more = true;
  var loading = false;
  var bodyh;
  $("#container").scroll( function() {
  loadData();
  });
  var totalheight = 0;
  function loadData(){
    totalheight = parseFloat($("#container").height()) + parseFloat($("#container").scrollTop());
    bodyh = $("#container")[0].scrollHeight;
    if (totalheight>=bodyh  && loading == false){
    loading = true;
    $("#container").scrollTop(parseFloat($("#container").scrollTop()) -1);

    if(has_more){
    $.getJSON(url+'&pageno='+page, function(data){
    if (data.status){
    $('.show_list').append(data.html);
    page=page+1;
    loading = false;
    if (!data.has_more){
    has_more = false;
    }
  }else{
    loading = false;
    has_more = false;
    // console.log(data);
    }
  //$('#get_more').fadeOut();
  });
  } else{alert('加载到底了');
    //$('#get_more').html('加载到底了');
    }

  }
  }
});


