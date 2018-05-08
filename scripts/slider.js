var slider = (function (Siema) {
    
    var slider = {};

    slider.init = function (params) {
        
        this.siema = new Siema();
        
        
        
    }

    slider.next = function () {
        this.siema.next();
    }

    slider.back = function () {
        this.siema.prev();
    }
    
    return slider;
    
})(Siema);


window.addEventListener('load', function (e) {

    slider.init();

})
