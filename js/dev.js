// NOTES
// The click will uncheck before JS runs

$(window).ready(function(){
    updateparentHeight();
    $('.checkbox').click(function(){
        var thisLayer = $(this).attr('id');
        checkIfActive(thisLayer);
    })
});

function checkIfActive(thisLayer) {
    var thisLayerID = '#'+thisLayer;
    var thisLayerClass = '.'+thisLayer;

    if ($(thisLayerID).is(':checked')) {
        $(thisLayerClass).show(225);
    } else {
        $(thisLayerClass).hide(225);
    }
};

function updateparentHeight() {
    var totalTogglers = $('.main-layer-toggler-container').length;
    
    for (i = 1; i <= totalTogglers; i++) {
        var parentID = "#layer-toggler-" + i;
        var thisSelector = parentID +' .viewer > :nth-child(1)';
        var childImageHeight = $(thisSelector).height();
        $(parentID).css('height', childImageHeight)
    };
    
}