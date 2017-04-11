// default nav 选中页按钮加深
$(function() {
    var index = window.location.href.split("/").length - 1;
    var href = window.location.href.split("/")[index].substr(0, 4);
    if (href.length > 0) {
        $(".nav li a[href*='" + href + "']").addClass("on");
    } else {
        $(".nav li a[href^='index']").addClass("on");
    }
})

// 中英切换导航条 jQuery版 
$(function() {
    $(".nav2 a").hover(function() {
        $(this).stop().animate({ marginTop: -40 }, 300);
    }, function() {
        $(this).stop().animate({ marginTop: 0 }, 300);
    })
})