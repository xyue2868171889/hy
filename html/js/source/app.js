/*
 *  cmd 模块调用
 *
    define(function(require, exports, module){
        var app1 = require('./app1');
        console.log(app1.a);
    });

*/


/**
 *  amd 模块调用
 *
 * */
define(['../modules/app1'],function(app1){
   console.log(app1);
});








