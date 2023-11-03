---
layout: post
title: Toy Rasterizer with Projective Geometric Algebra (PGA)
permalink: /misc/pgarasterizer
subheading: Vectors, Bivectors, Rotors and Motors in Javascript
---


<!-- <script SRC="https://unpkg.com/ganja.js"></script> -->
<script src="ganja.js"></script>
<script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"></script>

ganja.js project page [here](https://enkimute.github.io/) and demos [here](https://enkimute.github.io/ganja.js/examples/coffeeshop.html) 

# Clifford Algebra

Its not often that a math field has a webpresence.
Projective Geometric Algebra does [bivector.net](https://bivector.net/).

It does feel a bit like a cult, but after you see the beauty that is possible its hard not to drink the cool-aid.
The basis of PGA is a clifford algebra.

Follow these links for understanding!


# Ganja.js

The goal of this page is to show in a structured way an introduction on how to work with points, lines, and motors in PGA.
We will start with simple points, and lines, and will conclude our journey with a working rasterizer using only projective geometric algebra.




We can then implement a camera center (`eye_point`).
calcualte the intersection of every ray with the projection plane.
If that ray is hit we color that point black. 
This already gives us the shape of the object.

<pre class="prettyprint">
    var point = (x, y, z) => 1e123 + x * 1e012 + y * 1e013 + z * 1e023;
    var rotor = (l, a) => Math.cos(a / 2) + Math.sin(a / 2) * l.Normalized;
    var points = [point(.5, -.2, 1.3),  point(-.6, -.2, 2), point(.3, .6, 1.7) ];
    var eye_point = point(0, 0, 0);
    var ray = eye_point & point(0, 0, 1)
    var image_plane = ray << point(0, 0, 1)
</pre>
<center><div id="rasterize"></div></center>
here is the divider

<pre class="prettyprint">
    var point = (x, y, z) => 1e123 + x * 1e012 + y * 1e013 + z * 1e023;
    var rotor = (l, a) => Math.cos(a / 2) + Math.sin(a / 2) * l.Normalized;
    var points = [point(.5, -.2, 1.3),  point(-.6, -.2, 2), point(.3, .6, 1.7) ];
    var eye_point = point(0, 0, 0);
    var ray = eye_point & point(0, 0, 1)
    var image_plane = ray << point(0, 0, 1)
</pre>

<center><div id="finalized"></div></center>
and here another


and here another


<script>
    var canvas = document.getElementById('rasterize');
    Algebra(3, 0, 1, () => {
        var point = (x, y, z) => 1e123 + x * 1e012 + y * 1e013 + z * 1e023;
        var rotor = (l, a) => Math.cos(a / 2) + Math.sin(a / 2) * l.Normalized;
        var points = [point(.5, -.2, 1.3),  point(-.6, -.2, 2), point(.3, .6, 1.7) ];
        var eye_point = point(0, 0, 0);
        var ray = eye_point & point(0, 0, 1)
        var image_plane = ray << point(0, 0, 1)

        var points_norm = points.map(element => element.Normalized);
        var volume_total = points_norm[0] & points_norm[1] & points_norm[2] & eye_point
        var project_to_image = (pt) => (eye_point & pt )^ image_plane 
        
        var proj_v0 = (eye_point & points[0]) ^ image_plane
        var proj_v1 = (eye_point & points[1]) ^ image_plane
        var proj_v2 = (eye_point & points[2]) ^ image_plane
        var proj_l0 = proj_v0 & proj_v1
        var proj_l1 = proj_v1 & proj_v2
        var proj_l2 = proj_v2 & proj_v0
        
        canvas.appendChild(this.graph(()=>{
            var time=Math.abs((performance.now() / 1000))
            var rasterized = []
            for(var x=-1; x<=1; x+=0.05){
            for(var y=-1; y<=1; y+=0.05){
                var image_plane_point = point(x, y, 1);
                var current_ray = image_plane_point & eye_point
                
                var oriented0 = current_ray & (points[0]&points[1])
                var oriented1 = current_ray & (points[1]&points[2])
                var oriented2 = current_ray & (points[2]&points[0])
                var color = 0xffffff;
                
                if(oriented0.s<0 && oriented1.s<0 && oriented2.s<0){
                    color = 0x000000;
                    rasterized.push(color);
                    rasterized.push(project_to_image(image_plane_point))
                }

            }
            }
            return [
                    0xff0000, points[0], 'V0',
                    0x0000ff, points[1], 'V1',
                    0x00ff00, points[2], 'V2',
                    0x888888, points,
                    0x000000, eye_point, 'E',
                    [point(-1, -1, 1), point(1, -1, 1)],
                    [point(-1, -1, 1), point(-1, 1, 1)],
                    [point(1, 1, 1), point(1, -1, 1)],
                    [point(1, 1, 1), point(-1, 1, 1)],
                    [point(-1, -1, 1), eye_point],
                    [point(1, -1, 1), eye_point],
                    [point(-1, 1, 1), eye_point],
                    [point(1, 1, 1), eye_point],
                    0xfcaf3e, point(0, 0, 1),
            ].concat(rasterized);
        },{animate:true,gl:false, grid:false}));
    });
</script>
<script>
var canvas = document.getElementById('finalized');
Algebra(3, 0, 1, () => {
  var point = (x, y, z) => 1e123 + x * 1e012 + y * 1e013 + z * 1e023;
  var rotor = (l, a) => Math.cos(a / 2) + Math.sin(a / 2) * l.Normalized;

  /* ------  Geometry Definition  ------*/
  var vertices = [point(.5, -.5, 2), point(-.5, -.5, 2), point(0, .5, 2.5), point(-.5, -.5, 3), point(.5, -.5, 3)]
  var tri_idx = [[0, 1, 2], [1, 3, 2], [4, 0, 2], [3, 4, 2]];

  /* ------  USER SETTINGS  ------*/
  var resolution = 60
  
  /* ------  USER CONTROLS  ------*/
  var rotation_control_line = (point(1,-2,1).Normalized & point(-1,-2,1).Normalized).Normalized
  var rotation_control_point = point(0.05,-2,1).Normalized
  var control_plane_perp = rotation_control_line<<point(0,-2,1)

  /* ------  HELPER FUNCTIONS  ------*/
  function project_to_control_line(P){
    var p = rotation_control_line& point(0,-2,2)
    var P = (p<<P)*p
    p = rotation_control_line&point(0,-1,1)
    return (p<<P)*p
  }
  
   function build_triangles(indices, vertices) {
    var triangles = []
    tri_idx.forEach(function (indices, _, array) {
      var curr_triangle = []
      indices.forEach(function (idx) {
        curr_triangle.push(vertices[idx])
      })
      triangles.push(curr_triangle)
    })
    return triangles
  }
  
  var project_to_image = (pt) => (eye_point & pt) ^ image_plane
  var componentToHex = (c) => c.toString(16).length == 1 ? "0" + c.toString(16) : c.toString(16);
  var rgbToNumber = (r, g, b) => "0x" + componentToHex(parseInt(r)) + componentToHex(parseInt(g)) + componentToHex(parseInt(b));
  
  
  var eye_point = point(0, 0, 0);
  var ray = eye_point & point(0, 0, 1)
  var image_plane = ray << point(0, 0, 1)


  var center = point(0, 0, 2.5)
  var top = point(0, 0.1, 2.5)

  canvas.appendChild(this.graph(() => {
    var time = Math.abs((performance.now() % 3));
    var rasterized = [];
    var triangles = build_triangles(tri_idx, vertices)
    
    rotation_control_point = project_to_control_line(rotation_control_point)
    var rotation_speed = (control_plane_perp.Normalized & rotation_control_point.Normalized).s
    var motor = Math.E ** (rotation_speed * time * (center & top))
    
    vertices = motor >>> vertices 
    triangles.forEach(function (points, index, theArray) {
      theArray[index] = points.map(element => motor >>> element);

      var volume_total = points[0].Normalized & points[1].Normalized & points[2].Normalized & eye_point;

      for (var x = -1; x <= 1; x += (2 / resolution)) {
        for (var y = -1; y <= 1; y += (2 / resolution)) {
          var image_plane_point = point(x, y, 1);
          var current_ray = image_plane_point & eye_point

          var oriented0 = current_ray & (points[0] & points[1])
          var oriented1 = current_ray & (points[1] & points[2])
          var oriented2 = current_ray & (points[2] & points[0])

          if (oriented0.s < 0 && oriented1.s < 0 && oriented2.s < 0) {
            var intersect_point_triangle = (current_ray ^ (points[0] & points[1] & points[2])).Normalized

            var u = (points[0].Normalized & intersect_point_triangle & points[1].Normalized & eye_point) / volume_total;
            var v = (points[1].Normalized & intersect_point_triangle & points[2].Normalized & eye_point) / volume_total;
            var w = 1 - (u + v)
            var color = parseInt(rgbToNumber(v * 256, u * 256, w * 256))

            rasterized.push(color);
            rasterized.push(project_to_image(image_plane_point))
          }
        }
      }
    })

    return [
    //   "Dragable triangle points", "Change resulution in code", "Slider changes rotation speed",
      0x888888, ...triangles,
      0x92caed, ...vertices,
      // rotation_control_line& point(0,-2,2),
      // rotation_control_line& point(0,-1,1),
      0x000000, eye_point,
      [point(-1, -1, 1), point(1, -1, 1)],
      [point(-1, -1, 1), point(-1, 1, 1)],
      [point(1, 1, 1), point(1, -1, 1)],
      [point(1, 1, 1), point(-1, 1, 1)],
      [point(-1, -1, 1), eye_point],
      [point(1, -1, 1), eye_point],
      [point(-1, 1, 1), eye_point],
      [point(1, 1, 1), eye_point],
      [point(1,-2,1), point(-1,-2,1)],
      [point(0,-2.1,1), point(0,-1.9,1)],
      [point(-1,-2.2,1), point(-1,-1.8,1)],
      [point(1,-2.2,1), point(1,-1.8,1)],
      // control_plane_perp,
      0xc800ff, rotation_control_point,
      // 0xc800ff, rotation_control_point&point(0,0,1),
    ].concat(rasterized);
  }, { animate: true, gl: false, grid: false }));
});

</script>