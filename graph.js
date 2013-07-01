/*
Copyright (c): Pranjal Mittal, OSUOSL
*/

function rbt(a,b){
    // Returns random real number between a & b
    return (Math.random() * b) + a
}

function polypointscircle(center,R,N) {
    // Returns an array with the coodrdinates of a regular polygon (which lie on a circle with a center)
    var polypoints = new Array();
    for (i=0; i<N; i++){
      alpha = i * (2*Math.PI)/N + (Math.PI/2);
      x = center.x + R*Math.cos(alpha)
      y = center.y - R*Math.sin(alpha)
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

function modrndisc(pt,r,R,syscenter){
    /* Modified form of rndisc() function (under construction)
       Returns a coordinate such that it lies in a disc near the pnode with the additional constraint-
       It shall lie on the other side of the tangent to the pnodes-circle whose center is at syscenter..
       The tangent would be perpendicular to the line joinign syscenter & pt.
       This is useful when it is required to avoid clutter in the visualization. */
    // pt = {x:<some_value>,y:<some_value>}
    // syscenter = Center of the whole system, format is same as pt.
    var sc = syscenter;
    var adjustment = 0 //(Math.PI / 12)
    theta = (Math.PI / 2) - Math.atan2(sc.y-pt.y,pt.x-sc.x);
    alpha = rbt(-theta + adjustment, (Math.PI - theta) - adjustment)
    var coordinates = new Array();
    l = rbt(r,R)
    x = pt.x + l*Math.cos(alpha)
    y = pt.y - l*Math.sin(alpha)
    return {x:x,y:y}
}

syscenter = {x:500,y:500} // Center of the whole System
var pp = polypointscircle(syscenter,200,5)

$('#cy').cytoscape({
  showOverlay: false,

  layout: {
    name: 'preset'
  },
  
  style: cytoscape.stylesheet()
    .selector('node.ganeti-node')
      .css({
        'shape': 'ellipse',
        'height': 'mapData(weight, 40, 80, 10, 30)',
        'width': 'mapData(weight, 40, 80, 10, 30)',
        'content': 'data(name)',
        'text-valign': 'center',
        'text-outline-width': 1,
        'text-outline-color': '#6FB1FC',
        'background-color': '#6FB1FC',
        'color': '#fff'
      })
    .selector('node.ganeti-instance')
      .css({
        'shape': 'rectangle',
        'height':2,
        'width': 20,
        'content': 'data(name)',
        'text-valign': 'center',
        'text-outline-width': 0.5,
        'font-size':3,
        'text-outline-color': '#FC6FB1',
        'background-color': '#FC6FB1',
        'color': '#fff',
      })
    .selector(':selected')
      .css({
        'border-width': 2,
        'border-color': '#333'
      })
    .selector('edge')
      .css({
        'width': 'mapData(strength, 0, 100, 0, 25)',
        'target-arrow-shape': 'triangle',
        'source-arrow-shape': 'none',
        'line-color': 'data(color)',
        'source-arrow-color': 'data(color)',
        'target-arrow-color': 'data(color)'
      })
    .selector('edge.instance-edge')
      .css({
        'target-arrow-shape': 'none'
      })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),

  elements: {
    nodes: [
      { data: { id: 'node1.example.com', name: 'node1.example.com', weight: 100,},
	      position: pp[0], classes: 'ganeti-node' },
      { data: { id: 'instance55.example.com', name: 'instance55.example.com', weight: 0.05,},
	      position: rndisc(pp[0],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance45.example.com', name: 'instance45.example.com', weight: 0.05,},
	      position: rndisc(pp[0],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance10.example.com', name: 'instance10.example.com', weight: 0.05,},
	      position: rndisc(pp[0],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance56.example.com', name: 'instance56.example.com', weight: 0.05,},
	      position: rndisc(pp[0],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance109.example.com', name: 'instance109.example.com', weight: 0.05,},
	      position: rndisc(pp[0],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance8.example.com', name: 'instance8.example.com', weight: 0.05,},
	      position: rndisc(pp[0],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance74.example.com', name: 'instance74.example.com', weight: 0.05,},
	      position: rndisc(pp[0],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance80.example.com', name: 'instance80.example.com', weight: 0.05,},
	      position: rndisc(pp[0],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance85.example.com', name: 'instance85.example.com', weight: 0.05,},
	      position: rndisc(pp[0],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance100.example.com', name: 'instance100.example.com', weight: 0.05,},
	      position: rndisc(pp[0],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance70.example.com', name: 'instance70.example.com', weight: 0.05,},
	      position: rndisc(pp[0],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance52.example.com', name: 'instance52.example.com', weight: 0.05,},
	      position: rndisc(pp[0],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance27.example.com', name: 'instance27.example.com', weight: 0.05,},
	      position: rndisc(pp[0],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance46.example.com', name: 'instance46.example.com', weight: 0.05,},
	      position: rndisc(pp[0],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance24.example.com', name: 'instance24.example.com', weight: 0.05,},
	      position: rndisc(pp[0],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance65.example.com', name: 'instance65.example.com', weight: 0.05,},
	      position: rndisc(pp[0],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance58.example.com', name: 'instance58.example.com', weight: 0.05,},
	      position: rndisc(pp[0],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance2.example.com', name: 'instance2.example.com', weight: 0.05,},
	      position: rndisc(pp[0],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance53.example.com', name: 'instance53.example.com', weight: 0.05,},
	      position: rndisc(pp[0],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance44.example.com', name: 'instance44.example.com', weight: 0.05,},
	      position: rndisc(pp[0],26,30,syscenter), classes: 'ganeti-instance' },

      { data: { id: 'node2.example.com', name: 'node2.example.com', weight: 100,},
	      position: pp[1], classes: 'ganeti-node' },
      { data: { id: 'instance19.example.com', name: 'instance19.example.com', weight: 0.05,},
	      position: rndisc(pp[1],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance13.example.com', name: 'instance13.example.com', weight: 0.05,},
	      position: rndisc(pp[1],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance99.example.com', name: 'instance99.example.com', weight: 0.05,},
	      position: rndisc(pp[1],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance62.example.com', name: 'instance62.example.com', weight: 0.05,},
	      position: rndisc(pp[1],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance38.example.com', name: 'instance38.example.com', weight: 0.05,},
	      position: rndisc(pp[1],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance105.example.com', name: 'instance105.example.com', weight: 0.05,},
	      position: rndisc(pp[1],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance32.example.com', name: 'instance32.example.com', weight: 0.05,},
	      position: rndisc(pp[1],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance37.example.com', name: 'instance37.example.com', weight: 0.05,},
	      position: rndisc(pp[1],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance1.example.com', name: 'instance1.example.com', weight: 0.05,},
	      position: rndisc(pp[1],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance25.example.com', name: 'instance25.example.com', weight: 0.05,},
	      position: rndisc(pp[1],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance94.example.com', name: 'instance94.example.com', weight: 0.05,},
	      position: rndisc(pp[1],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance95.example.com', name: 'instance95.example.com', weight: 0.05,},
	      position: rndisc(pp[1],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance12.example.com', name: 'instance12.example.com', weight: 0.05,},
	      position: rndisc(pp[1],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance89.example.com', name: 'instance89.example.com', weight: 0.05,},
	      position: rndisc(pp[1],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance61.example.com', name: 'instance61.example.com', weight: 0.05,},
	      position: rndisc(pp[1],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance49.example.com', name: 'instance49.example.com', weight: 0.05,},
	      position: rndisc(pp[1],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance83.example.com', name: 'instance83.example.com', weight: 0.05,},
	      position: rndisc(pp[1],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance87.example.com', name: 'instance87.example.com', weight: 0.05,},
	      position: rndisc(pp[1],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance90.example.com', name: 'instance90.example.com', weight: 0.05,},
	      position: rndisc(pp[1],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance36.example.com', name: 'instance36.example.com', weight: 0.05,},
	      position: rndisc(pp[1],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance18.example.com', name: 'instance18.example.com', weight: 0.05,},
	      position: rndisc(pp[1],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance7.example.com', name: 'instance7.example.com', weight: 0.05,},
	      position: rndisc(pp[1],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance39.example.com', name: 'instance39.example.com', weight: 0.05,},
	      position: rndisc(pp[1],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance40.example.com', name: 'instance40.example.com', weight: 0.05,},
	      position: rndisc(pp[1],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance4.example.com', name: 'instance4.example.com', weight: 0.05,},
	      position: rndisc(pp[1],26,30,syscenter), classes: 'ganeti-instance' },

      { data: { id: 'node3.example.com', name: 'node3.example.com', weight: 100,},
	      position: pp[2], classes: 'ganeti-node' },
      { data: { id: 'instance16.example.com', name: 'instance16.example.com', weight: 0.05,},
	      position: rndisc(pp[2],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance102.example.com', name: 'instance102.example.com', weight: 0.05,},
	      position: rndisc(pp[2],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance41.example.com', name: 'instance41.example.com', weight: 0.05,},
	      position: rndisc(pp[2],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance67.example.com', name: 'instance67.example.com', weight: 0.05,},
	      position: rndisc(pp[2],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance104.example.com', name: 'instance104.example.com', weight: 0.05,},
	      position: rndisc(pp[2],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance34.example.com', name: 'instance34.example.com', weight: 0.05,},
	      position: rndisc(pp[2],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance75.example.com', name: 'instance75.example.com', weight: 0.05,},
	      position: rndisc(pp[2],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance50.example.com', name: 'instance50.example.com', weight: 0.05,},
	      position: rndisc(pp[2],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance51.example.com', name: 'instance51.example.com', weight: 0.05,},
	      position: rndisc(pp[2],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance23.example.com', name: 'instance23.example.com', weight: 0.05,},
	      position: rndisc(pp[2],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance54.example.com', name: 'instance54.example.com', weight: 0.05,},
	      position: rndisc(pp[2],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance26.example.com', name: 'instance26.example.com', weight: 0.05,},
	      position: rndisc(pp[2],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance21.example.com', name: 'instance21.example.com', weight: 0.05,},
	      position: rndisc(pp[2],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance63.example.com', name: 'instance63.example.com', weight: 0.05,},
	      position: rndisc(pp[2],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance22.example.com', name: 'instance22.example.com', weight: 0.05,},
	      position: rndisc(pp[2],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance14.example.com', name: 'instance14.example.com', weight: 0.05,},
	      position: rndisc(pp[2],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance81.example.com', name: 'instance81.example.com', weight: 0.05,},
	      position: rndisc(pp[2],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance17.example.com', name: 'instance17.example.com', weight: 0.05,},
	      position: rndisc(pp[2],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance101.example.com', name: 'instance101.example.com', weight: 0.05,},
	      position: rndisc(pp[2],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance28.example.com', name: 'instance28.example.com', weight: 0.05,},
	      position: rndisc(pp[2],26,30,syscenter), classes: 'ganeti-instance' },

      { data: { id: 'node4.example.com', name: 'node4.example.com', weight: 100,},
	      position: pp[3], classes: 'ganeti-node' },
      { data: { id: 'instance43.example.com', name: 'instance43.example.com', weight: 0.05,},
	      position: rndisc(pp[3],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance107.example.com', name: 'instance107.example.com', weight: 0.05,},
	      position: rndisc(pp[3],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance82.example.com', name: 'instance82.example.com', weight: 0.05,},
	      position: rndisc(pp[3],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance57.example.com', name: 'instance57.example.com', weight: 0.05,},
	      position: rndisc(pp[3],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance97.example.com', name: 'instance97.example.com', weight: 0.05,},
	      position: rndisc(pp[3],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance48.example.com', name: 'instance48.example.com', weight: 0.05,},
	      position: rndisc(pp[3],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance31.example.com', name: 'instance31.example.com', weight: 0.05,},
	      position: rndisc(pp[3],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance76.example.com', name: 'instance76.example.com', weight: 0.05,},
	      position: rndisc(pp[3],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance66.example.com', name: 'instance66.example.com', weight: 0.05,},
	      position: rndisc(pp[3],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance29.example.com', name: 'instance29.example.com', weight: 0.05,},
	      position: rndisc(pp[3],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance71.example.com', name: 'instance71.example.com', weight: 0.05,},
	      position: rndisc(pp[3],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance33.example.com', name: 'instance33.example.com', weight: 0.05,},
	      position: rndisc(pp[3],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance11.example.com', name: 'instance11.example.com', weight: 0.05,},
	      position: rndisc(pp[3],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance60.example.com', name: 'instance60.example.com', weight: 0.05,},
	      position: rndisc(pp[3],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance30.example.com', name: 'instance30.example.com', weight: 0.05,},
	      position: rndisc(pp[3],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance106.example.com', name: 'instance106.example.com', weight: 0.05,},
	      position: rndisc(pp[3],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance35.example.com', name: 'instance35.example.com', weight: 0.05,},
	      position: rndisc(pp[3],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance78.example.com', name: 'instance78.example.com', weight: 0.05,},
	      position: rndisc(pp[3],26,30,syscenter), classes: 'ganeti-instance' },

      { data: { id: 'node5.example.com', name: 'node5.example.com', weight: 100,},
	      position: pp[4], classes: 'ganeti-node' },
      { data: { id: 'instance72.example.com', name: 'instance72.example.com', weight: 0.05,},
	      position: rndisc(pp[4],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance73.example.com', name: 'instance73.example.com', weight: 0.05,},
	      position: rndisc(pp[4],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance79.example.com', name: 'instance79.example.com', weight: 0.05,},
	      position: rndisc(pp[4],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance108.example.com', name: 'instance108.example.com', weight: 0.05,},
	      position: rndisc(pp[4],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance42.example.com', name: 'instance42.example.com', weight: 0.05,},
	      position: rndisc(pp[4],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance92.example.com', name: 'instance92.example.com', weight: 0.05,},
	      position: rndisc(pp[4],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance20.example.com', name: 'instance20.example.com', weight: 0.05,},
	      position: rndisc(pp[4],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance88.example.com', name: 'instance88.example.com', weight: 0.05,},
	      position: rndisc(pp[4],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance110.example.com', name: 'instance110.example.com', weight: 0.05,},
	      position: rndisc(pp[4],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance96.example.com', name: 'instance96.example.com', weight: 0.05,},
	      position: rndisc(pp[4],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance93.example.com', name: 'instance93.example.com', weight: 0.05,},
	      position: rndisc(pp[4],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance6.example.com', name: 'instance6.example.com', weight: 0.05,},
	      position: rndisc(pp[4],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance5.example.com', name: 'instance5.example.com', weight: 0.05,},
	      position: rndisc(pp[4],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance77.example.com', name: 'instance77.example.com', weight: 0.05,},
	      position: rndisc(pp[4],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance98.example.com', name: 'instance98.example.com', weight: 0.05,},
	      position: rndisc(pp[4],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance86.example.com', name: 'instance86.example.com', weight: 0.05,},
	      position: rndisc(pp[4],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance69.example.com', name: 'instance69.example.com', weight: 0.05,},
	      position: rndisc(pp[4],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance84.example.com', name: 'instance84.example.com', weight: 0.05,},
	      position: rndisc(pp[4],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance103.example.com', name: 'instance103.example.com', weight: 0.05,},
	      position: rndisc(pp[4],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance64.example.com', name: 'instance64.example.com', weight: 0.05,},
	      position: rndisc(pp[4],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance3.example.com', name: 'instance3.example.com', weight: 0.05,},
	      position: rndisc(pp[4],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance15.example.com', name: 'instance15.example.com', weight: 0.05,},
	      position: rndisc(pp[4],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance91.example.com', name: 'instance91.example.com', weight: 0.05,},
	      position: rndisc(pp[4],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance68.example.com', name: 'instance68.example.com', weight: 0.05,},
	      position: rndisc(pp[4],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance59.example.com', name: 'instance59.example.com', weight: 0.05,},
	      position: rndisc(pp[4],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance9.example.com', name: 'instance9.example.com', weight: 0.05,},
	      position: rndisc(pp[4],26,30,syscenter), classes: 'ganeti-instance' },
      { data: { id: 'instance47.example.com', name: 'instance47.example.com', weight: 0.05,},
	      position: rndisc(pp[4],26,30,syscenter), classes: 'ganeti-instance' },

    ],
    edges: [
      { data: { source: 'node1.example.com', target: 'node5.example.com', color: '#6FB1FC', strength: 3 } },
      { data: { source: 'node1.example.com', target: 'node2.example.com', color: '#6FB1FC', strength: 3 } },
      { data: { source: 'node1.example.com', target: 'node4.example.com', color: '#6FB1FC', strength: 5 } },
      { data: { source: 'node1.example.com', target: 'node3.example.com', color: '#6FB1FC', strength: 9 } },
      { data: { source: 'node2.example.com', target: 'node5.example.com', color: '#6FB1FC', strength: 10 } },
      { data: { source: 'node2.example.com', target: 'node4.example.com', color: '#6FB1FC', strength: 4 } },
      { data: { source: 'node2.example.com', target: 'node1.example.com', color: '#6FB1FC', strength: 6 } },
      { data: { source: 'node2.example.com', target: 'node3.example.com', color: '#6FB1FC', strength: 3 } },
      { data: { source: 'node3.example.com', target: 'node5.example.com', color: '#6FB1FC', strength: 7 } },
      { data: { source: 'node3.example.com', target: 'node2.example.com', color: '#6FB1FC', strength: 1 } },
      { data: { source: 'node3.example.com', target: 'node4.example.com', color: '#6FB1FC', strength: 10 } },
      { data: { source: 'node3.example.com', target: 'node1.example.com', color: '#6FB1FC', strength: 2 } },
      { data: { source: 'node4.example.com', target: 'node5.example.com', color: '#6FB1FC', strength: 2 } },
      { data: { source: 'node4.example.com', target: 'node2.example.com', color: '#6FB1FC', strength: 5 } },
      { data: { source: 'node4.example.com', target: 'node1.example.com', color: '#6FB1FC', strength: 6 } },
      { data: { source: 'node4.example.com', target: 'node3.example.com', color: '#6FB1FC', strength: 5 } },
      { data: { source: 'node5.example.com', target: 'node2.example.com', color: '#6FB1FC', strength: 12 } },
      { data: { source: 'node5.example.com', target: 'node4.example.com', color: '#6FB1FC', strength: 3 } },
      { data: { source: 'node5.example.com', target: 'node1.example.com', color: '#6FB1FC', strength: 4 } },
      { data: { source: 'node5.example.com', target: 'node3.example.com', color: '#6FB1FC', strength: 3 } },

      { data: { source: 'node1.example.com', target: 'instance55.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node1.example.com', target: 'instance45.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node1.example.com', target: 'instance10.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node1.example.com', target: 'instance56.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node1.example.com', target: 'instance109.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node1.example.com', target: 'instance8.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node1.example.com', target: 'instance74.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node1.example.com', target: 'instance80.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node1.example.com', target: 'instance85.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node1.example.com', target: 'instance100.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node1.example.com', target: 'instance70.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node1.example.com', target: 'instance52.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node1.example.com', target: 'instance27.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node1.example.com', target: 'instance46.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node1.example.com', target: 'instance24.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node1.example.com', target: 'instance65.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node1.example.com', target: 'instance58.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node1.example.com', target: 'instance2.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node1.example.com', target: 'instance53.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node1.example.com', target: 'instance44.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node2.example.com', target: 'instance19.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node2.example.com', target: 'instance13.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node2.example.com', target: 'instance99.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node2.example.com', target: 'instance62.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node2.example.com', target: 'instance38.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node2.example.com', target: 'instance105.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node2.example.com', target: 'instance32.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node2.example.com', target: 'instance37.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node2.example.com', target: 'instance1.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node2.example.com', target: 'instance25.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node2.example.com', target: 'instance94.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node2.example.com', target: 'instance95.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node2.example.com', target: 'instance12.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node2.example.com', target: 'instance89.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node2.example.com', target: 'instance61.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node2.example.com', target: 'instance49.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node2.example.com', target: 'instance83.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node2.example.com', target: 'instance87.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node2.example.com', target: 'instance90.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node2.example.com', target: 'instance36.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node2.example.com', target: 'instance18.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node2.example.com', target: 'instance7.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node2.example.com', target: 'instance39.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node2.example.com', target: 'instance40.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node2.example.com', target: 'instance4.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node3.example.com', target: 'instance16.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node3.example.com', target: 'instance102.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node3.example.com', target: 'instance41.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node3.example.com', target: 'instance67.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node3.example.com', target: 'instance104.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node3.example.com', target: 'instance34.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node3.example.com', target: 'instance75.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node3.example.com', target: 'instance50.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node3.example.com', target: 'instance51.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node3.example.com', target: 'instance23.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node3.example.com', target: 'instance54.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node3.example.com', target: 'instance26.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node3.example.com', target: 'instance21.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node3.example.com', target: 'instance63.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node3.example.com', target: 'instance22.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node3.example.com', target: 'instance14.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node3.example.com', target: 'instance81.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node3.example.com', target: 'instance17.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node3.example.com', target: 'instance101.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node3.example.com', target: 'instance28.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node4.example.com', target: 'instance43.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node4.example.com', target: 'instance107.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node4.example.com', target: 'instance82.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node4.example.com', target: 'instance57.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node4.example.com', target: 'instance97.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node4.example.com', target: 'instance48.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node4.example.com', target: 'instance31.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node4.example.com', target: 'instance76.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node4.example.com', target: 'instance66.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node4.example.com', target: 'instance29.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node4.example.com', target: 'instance71.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node4.example.com', target: 'instance33.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node4.example.com', target: 'instance11.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node4.example.com', target: 'instance60.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node4.example.com', target: 'instance30.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node4.example.com', target: 'instance106.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node4.example.com', target: 'instance35.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node4.example.com', target: 'instance78.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node5.example.com', target: 'instance72.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node5.example.com', target: 'instance73.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node5.example.com', target: 'instance79.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node5.example.com', target: 'instance108.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node5.example.com', target: 'instance42.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node5.example.com', target: 'instance92.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node5.example.com', target: 'instance20.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node5.example.com', target: 'instance88.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node5.example.com', target: 'instance110.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node5.example.com', target: 'instance96.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node5.example.com', target: 'instance93.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node5.example.com', target: 'instance6.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node5.example.com', target: 'instance5.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node5.example.com', target: 'instance77.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node5.example.com', target: 'instance98.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node5.example.com', target: 'instance86.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node5.example.com', target: 'instance69.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node5.example.com', target: 'instance84.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node5.example.com', target: 'instance103.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node5.example.com', target: 'instance64.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node5.example.com', target: 'instance3.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node5.example.com', target: 'instance15.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node5.example.com', target: 'instance91.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node5.example.com', target: 'instance68.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node5.example.com', target: 'instance59.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node5.example.com', target: 'instance9.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
      { data: { source: 'node5.example.com', target: 'instance47.example.com', color: '#6FFCB1', strength:1 }, classes: 'instance-edge'},
    ]
  },
  
  ready: function(){
    window.cy = this;
    
    // giddy up
  }
});
