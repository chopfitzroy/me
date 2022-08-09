import { visit } from "unist-util-visit";
import { isElement } from "hast-util-is-element";

// @TODO
// - Would love to type this properly
// - Have tried using this isse as reference
// - But couldn't get it to work the way I wanted
// - https://github.com/syntax-tree/unist-util-visit/issues/15
type RehypeImageLinkSignature = () => (tree: any) => void;
const rehypeImageLink: RehypeImageLinkSignature = () => (tree) => {
  visit(tree, "element", (node, index, parent) => {
    const conditions = [
      !parent,
      !node.properties,
      !node.properties.src,
      typeof index !== "number",
      isElement(parent, "a"),
      !isElement(node, "img"),
    ];

    if (conditions.some((item) => !!item)) {
      return;
    }

    if (index === null) {
      return;
    }

    const src = String(node.properties.src);

    const replacement = {
      type: "element",
      tagName: "a",
      properties: {
        href: src,
        target: "_blank",
      },
      children: [node],
    };

    parent.children[index] = replacement;
  });
};

export default rehypeImageLink;
