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
// <g x="0" y="0" transform="translate(0,0)" >
//   <image id="svgBGImg"  x="0" y="0" width="300" height="300" xlink:href="http://jsrun.it/assets/i/j/u/t/ijutL.png"></image>
// </g>

var dgrop = d3.select("#drag-image")
	.append("svg:g")
	.data([ {"x":118, "y":280} ])
	.attr("transform", "translate(" + 118 + "," + 280 + ")")
	.call(drag);   

dgrop.append('image')
	.attr('id', 'svgBGImg')
	.attr('x', 0)
	.attr('y', 0)
	.attr('width',"400")
	.attr('height',"400")
	.attr('xlink:href', 'http://jsrun.it/assets/i/j/u/t/ijutL.png');

