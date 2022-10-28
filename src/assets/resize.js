(function() {
  function resizeFont() {
    //获取屏幕宽度
    let clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    //设计图参考宽度
    let design = 750;
    if (clientWidth > 750)
        document.getElementsByTagName('html').item(0).style.fontSize = '100px';
    else
        document.getElementsByTagName('html').item(0).style.fontSize = clientWidth / design * 100 + 'px';
  }
  resizeFont();
  window.onresize = function () {
    resizeFont();
  }
})();