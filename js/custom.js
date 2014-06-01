Page.init();
    
	//ドラッグ時のイベントをセット
var drag = d3.behavior.drag()
.on("drag", function(d,i) {
    d.x += d3.event.dx;
    d.y += d3.event.dy;
    d3.select(this).attr("transform", function(d,i){
        return "translate(" + [ d.x,d.y ] + ")"
    }) 
});    

var dgrop = d3.select("#twitter").select("g")
				.data([ {"x":20, "y":20} ])	
				.call(drag);   

