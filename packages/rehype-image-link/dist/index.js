// src/index.ts
import { visit } from "unist-util-visit";
import { isElement } from "hast-util-is-element";
var own = {}.hasOwnProperty;
function rehypePicture(options) {
  const settings = options || {};
  return (tree) => {
    visit(tree, "element", (node, index, parent) => {
      if (!parent || typeof index !== "number" || isElement(parent, "a") || !isElement(node, "img") || !node.properties || !node.properties.src) {
        return;
      }
      const src = String(node.properties.src);
      const replacement = {
        type: "element",
        tagName: "a",
        properties: {
          href: src,
          target: "_blank"
        },
        children: [node]
      };
      parent.children[index] = replacement;
    });
  };
}
export {
  rehypePicture as default
};
