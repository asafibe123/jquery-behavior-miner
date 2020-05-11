;(function ( $, window, document, undefined ) {
	$.behaviorMiner.behaviors.mousecoordes = {
		load : function()  {
            $(document).onmousemove = function(e){
                var x = e.pageX;
                var y = e.pageY;
            }
		},
		logData : function(el,x,y){
			var $el = $(el),
            data = {
                type : "mouse_coordes",
                elem : {
                    tagname : el.nodeName.toLowerCase(),
                    text    : $el.text(),
                    class   : $el.attr("class"),
                    id      : $el.attr("id")
                },
                behavior : ["Mouse coordinates are",e.pageX,',',e.pageY,"."],
            };
            $(document).trigger("behaviorMiner_data", [data]);
		}
	};
})( jQuery, window, document );