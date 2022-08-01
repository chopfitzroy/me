// src/index.ts
import { visit } from "unist-util-visit";
import { isElement } from "hast-util-is-element";
var rehypeImageLink = () => (tree) => {
  visit(tree, "element", (node, index, parent) => {
    const conditions = [
      !parent,
      !node.properties,
      !node.properties.src,
      typeof index !== "number",
      isElement(parent, "a"),
      !isElement(node, "img")
    ];
    if (conditions.some((item) => !!item)) {
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
var src_default = rehypeImageLink;
export {
  src_default as default
};
