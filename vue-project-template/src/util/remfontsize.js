function setRemFontSize (baseSize, baseWidth) {
  // 基本字体大小
  baseSize = baseSize || 100
  // 设计图的基本宽度640
  baseWidth = baseWidth || 750
  var clientWidth = document.documentElement.clientWidth
  if (document.documentElement.clientWidth >= 768) {
    clientWidth = 768
  } else if (document.documentElement.clientWidth <= 320) {
    clientWidth = 320
  }
  document.getElementsByTagName('html')[0].style.fontSize = clientWidth * baseSize / baseWidth + 'px'
  // document.getElementsByTagName('html')[0].setAttribute('style', 'font-size:' + clientWidth * baseSize / baseWidth + 'px !important')
}

setRemFontSize(32)
window.addEventListener('resize', function () {
  setTimeout(function () { setRemFontSize(32) }, 200)
})
