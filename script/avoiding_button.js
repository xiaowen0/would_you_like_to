/**
 * Created by Kevin on 2019/2/26.
 */

$('.greatButton').on('click', function(){

    alert('谢谢！');
    window.close()

});

$('.refuseButton').on('mouseover', function(){

    var leftDistanceRange = getWindowWidth() - this.offsetWidth;
    var topDistanceRange = getWindowHeight() - this.offsetHeight;
    addDebugLog('left distance range: 0-' + leftDistanceRange);
    addDebugLog('top distance range: 0-' + topDistanceRange);

    var left = Math.floor(Math.random() * leftDistanceRange);
    var top = Math.floor(Math.random() * topDistanceRange);
    addDebugLog('left distance: ' + left);
    addDebugLog('top distance: ' + top);

    document.body.appendChild(this);
    $(this).css({
        "position" : 'absolute',
        "z-index" : '1',
        "left" : left + "px",
        "top" : top + "px",
    });
});

