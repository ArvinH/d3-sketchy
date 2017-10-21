import { select as d3Select, selectAll as d3SelectAll } from "d3-selection";
import { scaleLinear as d3ScaleLinear } from "d3-scale";
import { line as d3Line, curveLinear as d3CurveLinear} from "d3-shape";
let d3sketchy = {};

// for foo test
d3sketchy.foo = () => { return 42; };
d3sketchy.demo = () => { d3Select("#someParent").call(sketchyRectangle); };
/*
d3sketchy.circle = function (selection) {

  const r = 5, c = [0, 0], w = 2, fillColor = "red", strokeColor = "black";

  function d3_sketchyCircle(selection) {
    selection.append("circle").attr("class", "sketchy").attr("r", r).attr("cx", c[0]).attr("cy", c[1]).style("fill", fillColor)

    r = r * 1.5;
    //divide width by two to get the offset
    const z = w / 2;
    const gCirclePoints = [];
    gCirclePoints.push([c[0], c[1] + r - (r * .35)]);
    gCirclePoints.push([c[0], c[1] + r - (r * .25)]);
    gCirclePoints.push([c[0] + (r + (z * .375)) * .3, c[1] + (r - (r * .25)) * .9]);
    gCirclePoints.push([c[0] + (r * .9) + (z * .375), c[1] - (r * .1)]);
    gCirclePoints.push([c[0], c[1] - (r * 1) - (z * .5)]);
    gCirclePoints.push([c[0] - (r * .9) - (z * .35), c[1] - (r * .1)]);
    gCirclePoints.push([c[0] - (r + (z * .95)) * .4, c[1] + (r - (r * .25)) * .9]);
    gCirclePoints.push([c[0], c[1] + (r * .9) + (z) - (r * .25)]);
    gCirclePoints.push([c[0], c[1] + (r * .9) - (z) - (r * .25)]);
    gCirclePoints.push([c[0] - (r - (z * .95)) * .3, c[1] + (r - (r * .25)) * .9]);
    gCirclePoints.push([c[0] - (r * .9) + (z * .75), c[1] - (r * .1)]);
    gCirclePoints.push([c[0], c[1] - (r * 1) + (z * .5)]);
    gCirclePoints.push([c[0] + (r * .9) - (z * .375), c[1] - (r * .1)]);
    gCirclePoints.push([c[0] + (r - (z * .375)) * .3, c[1] + (r - (r * .25)) * .9]);
    gCirclePoints.push([c[0], c[1] + r - (r * .35)]);

    sketchyC = d3.svg.line()
      .x(function (d, i) {
        return d[0]
      })
      .y(function (d) {
        return d[1]
      })
      .interpolate("basis")

    selection.append("path").attr("class", "sketchy").attr("d", sketchyC(gCirclePoints)).style("stroke", "none").style("fill", strokeColor)
    return this;
  }

  d3_sketchyCircle.radius = function (data) {
    if (!arguments.length) return r;
    r = data;
    return this;
  }

  d3_sketchyCircle.cx = function (data) {
    if (!arguments.length) return c[0];
    c[0] = data;
    return this;
  }

  d3_sketchyCircle.cy = function (data) {
    if (!arguments.length) return c[1];
    c[1] = data;
    return this;
  }

  d3_sketchyCircle.fill = function (data) {
    if (!arguments.length) return fillColor;
    fillColor = data;
    return this;
  }

  d3_sketchyCircle.stroke = function (data) {
    if (!arguments.length) return strokeColor;
    strokeColor = data;
    return this;
  }

  d3_sketchyCircle.strokeWidth = function (data) {
    if (!arguments.length) return w;
    w = data;
    return this;
  }

  return d3_sketchyCircle;
}
*/

d3sketchy.rect = (selection) => {

  let rh = 50, rw = 10, w = 2, c = [0, 0], fillColor = "red", strokeColor = "black", jostle = 0;

  function d3_sketchyRect(selection) {

    selection.append("rect").attr("class", "sketchy").attr("x", c[0]).attr("y", c[1]).attr("height", rh).attr("width", rw).style("fill", fillColor)

    const randomJostle = d3ScaleLinear().domain([0, 1]).range([-jostle, jostle]);

    const j = [];
    j.push(randomJostle(Math.random()));
    j.push(randomJostle(Math.random()));
    j.push(randomJostle(Math.random()));
    j.push(randomJostle(Math.random()));
    j.push(randomJostle(Math.random()));
    j.push(randomJostle(Math.random()));

    //divide width by two to get the offset
    const z = w / 2;
    const gRectPoints = [];
    gRectPoints.push([c[0] + (z), c[1] + rh]);
    gRectPoints.push([c[0] - (z), c[1] + rh]);
    gRectPoints.push([c[0] - (z * .55) + j[0], c[1] - (z * .55) + j[1]]);
    gRectPoints.push([c[0] + rw + (z * .35) + j[2], c[1] - (z * .35) + j[3]]);
    gRectPoints.push([c[0] + rw + (z * .25) + j[4], c[1] + rh + (z * .25) + j[5]]);
    gRectPoints.push([c[0] + (z), c[1] + rh + (z * .1)]);
    gRectPoints.push([c[0] + (z), c[1] + rh - (z * .1)]);
    gRectPoints.push([c[0] + rw - (z * .25) + j[4], c[1] + rh - (z * .25) + j[5]]);
    gRectPoints.push([c[0] + rw - (z * .35) + j[2], c[1] + (z * .35) + j[3]]);
    gRectPoints.push([c[0] + (z * .55) + j[0], c[1] + (z * .55) + j[1]]);
    gRectPoints.push([c[0] + (z), c[1] + rh]);


    const sketchyC = d3Line()
      .x((d, i) => {
        return d[0]
      })
      .y((d) => {
        return d[1]
      })
      .curve(d3CurveLinear)

    selection.append("path").attr("class", "sketchy").attr("d", sketchyC(gRectPoints)).style("stroke", "none").style("fill", strokeColor)
    return this;
  }

  d3_sketchyRect.height = (data) => {
    if (!arguments.length) return rh;
    rh = data;
    return this;
  }

  d3_sketchyRect.width = (data) => {
    if (!arguments.length) return rw;
    rw = data;
    return this;
  }

  d3_sketchyRect.x = (data) => {
    if (!arguments.length) return c[0];
    c[0] = data;
    return this;
  }

  d3_sketchyRect.y = (data) => {
    if (!arguments.length) return c[1];
    c[1] = data;
    return this;
  }

  d3_sketchyRect.fill = (data) => {
    if (!arguments.length) return fillColor;
    fillColor = data;
    return this;
  }

  d3_sketchyRect.stroke = (data) => {
    if (!arguments.length) return strokeColor;
    strokeColor = data;
    return this;
  }

  d3_sketchyRect.strokeWidth = (data) => {
    if (!arguments.length) return w;
    w = data;
    return this;
  }

  d3_sketchyRect.jostle = (data) => {
    if (!arguments.length) return jostle;
    jostle = data;
    return this;
  }

  return d3_sketchyRect;

}

d3sketchy.randomColor = (baseColor, range) => {
  const hslBase = d3.hsl(baseColor)
  hslBase.h = hslBase.h + (Math.floor(Math.random() * (range * 255)) - Math.floor(range / 2));
  hslBase.s = hslBase.s + (Math.floor(Math.random() * range) - Math.floor(range / 2));
  hslBase.l = hslBase.l + (Math.floor(Math.random() * range) - Math.floor(range / 2));
  return hslBase.toString();
}

export default d3sketchy;