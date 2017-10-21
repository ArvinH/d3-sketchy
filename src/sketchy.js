import { select as d3Select, selectAll as d3SelectAll } from "d3-selection";
import { scaleLinear as d3ScaleLinear } from "d3-scale";
import { line as d3Line, curveLinear as d3CurveLinear} from "d3-shape";
let d3sketchy = {};

// for foo test
d3sketchy.foo = () => { return 42; };

d3sketchy.rect = function(selection) {

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

  d3_sketchyRect.height = function(data) {
    if (!arguments.length) return rh;
    rh = data;
    return this;
  }

  d3_sketchyRect.width = function(data) {
    if (!arguments.length) return rw;
    rw = data;
    return this;
  }

  d3_sketchyRect.x = function(data) {
    if (!arguments.length) return c[0];
    c[0] = data;
    return this;
  }

  d3_sketchyRect.y = function(data) {
    if (!arguments.length) return c[1];
    c[1] = data;
    return this;
  }

  d3_sketchyRect.fill = function(data) {
    if (!arguments.length) return fillColor;
    fillColor = data;
    return this;
  }

  d3_sketchyRect.stroke = function(data) {
    if (!arguments.length) return strokeColor;
    strokeColor = data;
    return this;
  }

  d3_sketchyRect.strokeWidth = function(data) {
    if (!arguments.length) return w;
    w = data;
    return this;
  }

  d3_sketchyRect.jostle = function(data) {
    if (!arguments.length) return jostle;
    jostle = data;
    return this;
  }

  return d3_sketchyRect;

}

export default d3sketchy;