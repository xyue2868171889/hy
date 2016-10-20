/*
 * Created by yangyin on 2016/9/27.
 * */

/* 弹窗滑动函数： */
var layerPopupSlideObj=(function (mod){
  var layerwrap = $('.layerwrap');//弹窗总模块
  //左滑动函数:
  var layerPopupLFn = function(){
    layerwrap.css('display','block').animate({left:'0rem'},{ duration:300, easing:'ease', complete:function(){}});
  };
  //右滑动函数:
  var layerPopupRFn = function(){
    layerwrap.animate({left:'100%'},{ duration:300, easing:'ease', complete:function(){$(this).css('display','none')}});
  };
  return {
    'layerPopupRFn':layerPopupRFn,
    'layerPopupLFn':layerPopupLFn
  };
})(window.layerPopupSlideObj || {});


/* 弹窗滑动事件： */
var layerPopupSlideEv=(function (layerPopupSlideObj){
  var fanhui = $('.layerheader .icon-iconfontfanhui1'),//返回按钮
      layerTit = $('.layerheader em'),//头部文字显示
      layerSubmitBtn = $('.layercontent .submitbtn'); //弹窗确认按钮

  var contactInfor = $('#fillIn_contactInfor'),  //填写联系信息
      editBtnTxt = $('#editContactInfor'),// 编辑联系信息
      voiceBtn = $('#invoiceBtn'),//发票按钮
      backEditBtn = $('#editInvoiceBtn'),//编辑发票按钮
      couponBtn = $('#couponBtn'),//优惠券按钮
      couponEditBtn = $('#editCouponBtn'),//编辑优惠价按钮
      cbDeducBtn = $('.cbDeducBtn'),//C币抵扣按钮
      proCodeBtn = $('.proCodeBtn');//优惠码按钮

  // 弹窗右滑动事件：
  var layerPopupR = function(attr){
    attr.on('singleTap',function(){
      layerPopupSlideObj.layerPopupRFn();
      $('.layercontent').removeClass('linkpersonalShow invoiceShow couponShow cbDeducShow pcodeShow');
    });
  };
  layerPopupR(fanhui);
  //layerPopupR(layerSubmitBtn);

  // 弹窗左滑动事件：
  var layerPopupL =function(attr,txt,cla1,cla2){
    attr.on('singleTap',function(){
      layerPopupSlideObj.layerPopupLFn();
      layerTit.text(txt);
      $('.layercontent').addClass(cla1).removeClass(cla2);
    });
  };
  //联系信息：
  layerPopupL(contactInfor,'联系信息', 'linkpersonalShow','invoiceShow couponShow cbDeducShow pcodeShow');
  layerPopupL(editBtnTxt,'联系信息', 'linkpersonalShow','invoiceShow couponShow cbDeducShow pcodeShow');
  //发票信息：
  layerPopupL(voiceBtn,'发票信息', 'invoiceShow','linkpersonalShow couponShow cbDeducShow pcodeShow');
  layerPopupL(backEditBtn,'发票信息', 'invoiceShow','linkpersonalShow couponShow cbDeducShow pcodeShow');
  //优惠劵信息：
  layerPopupL(couponBtn,'优惠劵', 'couponShow','linkpersonalShow invoiceShow cbDeducShow pcodeShow');
  layerPopupL(couponEditBtn,'优惠劵', 'couponShow','linkpersonalShow invoiceShow cbDeducShow pcodeShow');
  //C币抵扣:
  layerPopupL(cbDeducBtn,'C币抵扣', 'cbDeducShow','linkpersonalShow invoiceShow couponShow pcodeShow');
  //优惠码:
  layerPopupL(proCodeBtn,'优惠码', 'pcodeShow','linkpersonalShow invoiceShow couponShow cbDeducShow');
})(layerPopupSlideObj);


/* 取消订单事件：*/
var cancelOrdeLayer=(function(mod){
  var cancelOrdeBtn=$('.cancelOrdeBtn'),
      cancelOrdeLayer_bg = $('.cancelOrdeLayer_bg'),
      cancelOrdeLayer_con = $('.cancelOrdeLayer_con'),
      COL_true=$('.COL_true'),
      COL_cancel=$('.COL_cancel');

  //显示：
  cancelOrdeBtn.on('singleTap',function(){
    cancelOrdeLayer_bg.show();
    cancelOrdeLayer_con.show();
  });
  //隐藏：
  var cancelOrdeHide = function(attr){
    attr.on('singleTap',function(){
      cancelOrdeLayer_bg.hide();
      cancelOrdeLayer_con.hide();
    });
  };
  //cancelOrdeHide(COL_true);
  cancelOrdeHide(COL_cancel);

  return mod;
})(window.cancelOrdeLayer || {});