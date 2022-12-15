var detail;
var info;
info = document.createElement("div");
info.id = "dom-info-details";

detail = !detail;

var prevDOM = null;

function getMaximumDepth(element) {
  if (!element.children) return 0;
  var max = -1;
  for (var i = 0; i < element.children.length; i++) {
    var maxDepth = getMaximumDepth(element.children[i]);
    if (maxDepth > max) {
      max = maxDepth;
    }
  }
  return max + 1;
}

if (detail || detail === undefined) {
  document.addEventListener("mousemove", function (e) {
    if (detail) {
      var cornerX = e.pageX + 10 - window.pageXOffset;
      var cornerY = e.pageY + 10 - window.pageYOffset;

      var elem = document.elementFromPoint(
        e.pageX - window.pageXOffset,
        e.pageY - window.pageYOffset
      );
      var clone = elem.cloneNode(true);

      var elementCounts = clone.getElementsByTagName("*").length;
      var maxDepth = getMaximumDepth(elem);

      if (prevDOM != elem) {
        if (prevDOM != null) {
          prevDOM.classList.remove("mouse-visited");
        }

        elem.classList.add("mouse-visited");

        prevDOM = elem;
      }

      const resultTxt = `Number of elements: ${elementCounts}\nMaximum nesting depth: ${maxDepth}`;

      info.innerHTML = resultTxt;

      info.style.top = cornerY + "px";
      if (cornerX + 200 > document.documentElement.clientWidth) {
        info.style.left = e.pageX - 200 + "px";
      } else {
        info.style.left = cornerX + "px";
      }

      document.body.appendChild(info);
    }
  });
} else {
  var toRemove = document.getElementById("dom-info-details");
  document.body.removeChild(toRemove);
}
