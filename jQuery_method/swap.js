import $ from 'jquery'
function swap() {
    $(function () {
        $('#payButton').popup({
            popup: $('.payQR.popup'),
            on: 'click',
            position: 'bottom center'
        })
    })
}
function wechatQR() {
    $(function () {
        $('.wechat').popup({
            popup: $('.wechatQR.popup'),
            position: 'top center'
        })
    })
}
function qqQR() {
    $(function () {
        $('.qq').popup({
            popup: $('.qqQR.popup'),
            position: 'top center'
        })
    })
}
export {
    swap,
    wechatQR,
    qqQR
}