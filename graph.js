function rbt(a,b){
    // Returns random real number between a & b
    return (Math.random() * b) + a
}

function polypointscircle(N,x0,y0,R) {
    // Returns an array with the coodrdinates of a regular polygon.
    var polypoints = new Array();
    for (i=0; i<N; i++){
      alpha = i * (2*Math.PI)/N + (Math.PI/2);
      x = x0 + R*Math.cos(alpha)
      y = y0 - R*Math.sin(alpha)
      polypoints.push({x:x,y:y})
    }
    return polypoints;
};

function rndisc(pt,r,R){
    // Generates a coordinate such that it lies inside a disc centered at Point "pt" from r to R. (randomly)
    // pt = {x:<some_value>,y:<some_value>}
    alpha = rbt(0,2*Math.PI)
    var coordinates = new Array();
    l = rbt(r,R)
    x = pt.x + l*Math.cos(alpha)
    y = pt.y - l*Math.sin(alpha)
    return {x:x,y:y}
}

var pp = polypointscircle(5,500,500,200)

$('#cy').cytoscape({
  showOverlay: false,

  layout: {
    name: 'preset'
  },
  
  style: cytoscape.stylesheet()
    .selector('.ganeti-node')
      .css({
        'shape': 'data(faveShape)',
        'height': 'mapData(weight, 40, 80, 10, 30)',
        'width': 'mapData(weight, 40, 80, 10, 30)',
        'content': 'data(name)',
        'text-valign': 'center',
        'text-outline-width': 1,
        'text-outline-color': 'data(faveColor)',
        'background-color': 'data(faveColor)',
        'color': '#fff'
      })
    .selector('.ganeti-instance')
      .css({
        'shape': 'data(faveShape)',
        'height':2,
        'width': 20,
        'content': 'data(name)',
        'text-valign': 'center',
        'text-outline-width': 0.5,
        'font-size':3,
        'text-outline-color': 'data(faveColor)',
        'background-color': 'data(faveColor)',
        'color': '#fff',
        //'visibility': 'hidden'
      })
    .selector(':selected')
      .css({
        'border-width': 2,
        'border-color': '#333'
      })
    .selector('edge')
      .css({
        'width': 'mapData(strength, 70, 100, 2, 6)',
        'target-arrow-shape': 'triangle',
        'source-arrow-shape': 'none',
        'line-color': 'data(faveColor)',
        'source-arrow-color': 'data(faveColor)',
        'target-arrow-color': 'data(faveColor)'
      })
    .selector('edge.questionable')
      .css({
        'line-style': 'dotted',
        'target-arrow-shape': 'diamond'
      })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),

  elements: {
    nodes: [
{ data: { id: 'node1.example.com', name: 'node1.example.com', weight: 100, faveColor: '#6FB1FC', faveShape: 'ellipse' },
	position: pp[0], classes: 'ganeti-node' },
{ data: { id: 'instance55.example.com', name: 'instance55.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[0],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance45.example.com', name: 'instance45.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[0],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance10.example.com', name: 'instance10.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[0],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance56.example.com', name: 'instance56.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[0],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance109.example.com', name: 'instance109.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[0],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance8.example.com', name: 'instance8.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[0],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance74.example.com', name: 'instance74.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[0],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance80.example.com', name: 'instance80.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[0],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance85.example.com', name: 'instance85.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[0],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance100.example.com', name: 'instance100.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[0],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance70.example.com', name: 'instance70.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[0],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance52.example.com', name: 'instance52.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[0],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance27.example.com', name: 'instance27.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[0],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance46.example.com', name: 'instance46.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[0],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance24.example.com', name: 'instance24.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[0],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance65.example.com', name: 'instance65.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[0],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance58.example.com', name: 'instance58.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[0],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance2.example.com', name: 'instance2.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[0],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance53.example.com', name: 'instance53.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[0],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance44.example.com', name: 'instance44.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[0],27,29), classes: 'ganeti-instance' },

{ data: { id: 'node2.example.com', name: 'node2.example.com', weight: 100, faveColor: '#6FB1FC', faveShape: 'ellipse' },
	position: pp[1], classes: 'ganeti-node' },
{ data: { id: 'instance19.example.com', name: 'instance19.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[1],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance13.example.com', name: 'instance13.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[1],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance99.example.com', name: 'instance99.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[1],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance62.example.com', name: 'instance62.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[1],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance38.example.com', name: 'instance38.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[1],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance105.example.com', name: 'instance105.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[1],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance32.example.com', name: 'instance32.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[1],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance37.example.com', name: 'instance37.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[1],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance1.example.com', name: 'instance1.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[1],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance25.example.com', name: 'instance25.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[1],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance94.example.com', name: 'instance94.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[1],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance95.example.com', name: 'instance95.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[1],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance12.example.com', name: 'instance12.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[1],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance89.example.com', name: 'instance89.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[1],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance61.example.com', name: 'instance61.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[1],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance49.example.com', name: 'instance49.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[1],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance83.example.com', name: 'instance83.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[1],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance87.example.com', name: 'instance87.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[1],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance90.example.com', name: 'instance90.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[1],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance36.example.com', name: 'instance36.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[1],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance18.example.com', name: 'instance18.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[1],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance7.example.com', name: 'instance7.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[1],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance39.example.com', name: 'instance39.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[1],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance40.example.com', name: 'instance40.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[1],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance4.example.com', name: 'instance4.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[1],27,29), classes: 'ganeti-instance' },

{ data: { id: 'node3.example.com', name: 'node3.example.com', weight: 100, faveColor: '#6FB1FC', faveShape: 'ellipse' },
	position: pp[2], classes: 'ganeti-node' },
{ data: { id: 'instance16.example.com', name: 'instance16.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[2],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance102.example.com', name: 'instance102.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[2],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance41.example.com', name: 'instance41.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[2],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance67.example.com', name: 'instance67.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[2],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance104.example.com', name: 'instance104.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[2],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance34.example.com', name: 'instance34.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[2],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance75.example.com', name: 'instance75.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[2],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance50.example.com', name: 'instance50.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[2],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance51.example.com', name: 'instance51.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[2],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance23.example.com', name: 'instance23.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[2],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance54.example.com', name: 'instance54.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[2],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance26.example.com', name: 'instance26.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[2],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance21.example.com', name: 'instance21.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[2],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance63.example.com', name: 'instance63.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[2],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance22.example.com', name: 'instance22.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[2],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance14.example.com', name: 'instance14.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[2],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance81.example.com', name: 'instance81.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[2],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance17.example.com', name: 'instance17.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[2],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance101.example.com', name: 'instance101.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[2],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance28.example.com', name: 'instance28.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[2],27,29), classes: 'ganeti-instance' },

{ data: { id: 'node4.example.com', name: 'node4.example.com', weight: 100, faveColor: '#6FB1FC', faveShape: 'ellipse' },
	position: pp[3], classes: 'ganeti-node' },
{ data: { id: 'instance43.example.com', name: 'instance43.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[3],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance107.example.com', name: 'instance107.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[3],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance82.example.com', name: 'instance82.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[3],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance57.example.com', name: 'instance57.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[3],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance97.example.com', name: 'instance97.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[3],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance48.example.com', name: 'instance48.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[3],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance31.example.com', name: 'instance31.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[3],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance76.example.com', name: 'instance76.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[3],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance66.example.com', name: 'instance66.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[3],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance29.example.com', name: 'instance29.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[3],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance71.example.com', name: 'instance71.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[3],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance33.example.com', name: 'instance33.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[3],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance11.example.com', name: 'instance11.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[3],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance60.example.com', name: 'instance60.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[3],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance30.example.com', name: 'instance30.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[3],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance106.example.com', name: 'instance106.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[3],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance35.example.com', name: 'instance35.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[3],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance78.example.com', name: 'instance78.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[3],27,29), classes: 'ganeti-instance' },

{ data: { id: 'node5.example.com', name: 'node5.example.com', weight: 100, faveColor: '#6FB1FC', faveShape: 'ellipse' },
	position: pp[4], classes: 'ganeti-node' },
{ data: { id: 'instance72.example.com', name: 'instance72.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[4],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance73.example.com', name: 'instance73.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[4],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance79.example.com', name: 'instance79.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[4],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance108.example.com', name: 'instance108.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[4],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance42.example.com', name: 'instance42.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[4],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance92.example.com', name: 'instance92.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[4],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance20.example.com', name: 'instance20.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[4],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance88.example.com', name: 'instance88.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[4],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance110.example.com', name: 'instance110.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[4],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance96.example.com', name: 'instance96.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[4],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance93.example.com', name: 'instance93.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[4],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance6.example.com', name: 'instance6.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[4],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance5.example.com', name: 'instance5.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[4],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance77.example.com', name: 'instance77.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[4],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance98.example.com', name: 'instance98.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[4],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance86.example.com', name: 'instance86.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[4],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance69.example.com', name: 'instance69.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[4],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance84.example.com', name: 'instance84.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[4],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance103.example.com', name: 'instance103.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[4],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance64.example.com', name: 'instance64.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[4],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance3.example.com', name: 'instance3.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[4],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance15.example.com', name: 'instance15.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[4],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance91.example.com', name: 'instance91.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[4],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance68.example.com', name: 'instance68.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[4],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance59.example.com', name: 'instance59.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[4],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance9.example.com', name: 'instance9.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[4],27,29), classes: 'ganeti-instance' },
{ data: { id: 'instance47.example.com', name: 'instance47.example.com', weight: 0.05, faveColor: '#FC6FB1', faveShape: 'rectangle' },
	position: rndisc(pp[4],27,29), classes: 'ganeti-instance' },

    ],
    edges: [
      { data: { source: 'node1.example.com', target: 'node5.example.com', faveColor: '#6FB1FC', strength: 3 } },
      { data: { source: 'node1.example.com', target: 'node2.example.com', faveColor: '#6FB1FC', strength: 3 } },
      { data: { source: 'node1.example.com', target: 'node4.example.com', faveColor: '#6FB1FC', strength: 5 } },
      { data: { source: 'node1.example.com', target: 'node3.example.com', faveColor: '#6FB1FC', strength: 9 } },
      { data: { source: 'node2.example.com', target: 'node5.example.com', faveColor: '#6FB1FC', strength: 10 } },
      { data: { source: 'node2.example.com', target: 'node4.example.com', faveColor: '#6FB1FC', strength: 4 } },
      { data: { source: 'node2.example.com', target: 'node1.example.com', faveColor: '#6FB1FC', strength: 6 } },
      { data: { source: 'node2.example.com', target: 'node3.example.com', faveColor: '#6FB1FC', strength: 3 } },
      { data: { source: 'node3.example.com', target: 'node5.example.com', faveColor: '#6FB1FC', strength: 7 } },
      { data: { source: 'node3.example.com', target: 'node2.example.com', faveColor: '#6FB1FC', strength: 1 } },
      { data: { source: 'node3.example.com', target: 'node4.example.com', faveColor: '#6FB1FC', strength: 10 } },
      { data: { source: 'node3.example.com', target: 'node1.example.com', faveColor: '#6FB1FC', strength: 2 } },
      { data: { source: 'node4.example.com', target: 'node5.example.com', faveColor: '#6FB1FC', strength: 2 } },
      { data: { source: 'node4.example.com', target: 'node2.example.com', faveColor: '#6FB1FC', strength: 5 } },
      { data: { source: 'node4.example.com', target: 'node1.example.com', faveColor: '#6FB1FC', strength: 6 } },
      { data: { source: 'node4.example.com', target: 'node3.example.com', faveColor: '#6FB1FC', strength: 5 } },
      { data: { source: 'node5.example.com', target: 'node2.example.com', faveColor: '#6FB1FC', strength: 12 } },
      { data: { source: 'node5.example.com', target: 'node4.example.com', faveColor: '#6FB1FC', strength: 3 } },
      { data: { source: 'node5.example.com', target: 'node1.example.com', faveColor: '#6FB1FC', strength: 4 } },
      { data: { source: 'node5.example.com', target: 'node3.example.com', faveColor: '#6FB1FC', strength: 3 } },
    ]
  },
  
  ready: function(){
    window.cy = this;
    
    // giddy up
  }
});
