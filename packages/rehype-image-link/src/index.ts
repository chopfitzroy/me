// import path from "node:path";

import { visit } from "unist-util-visit";
import { isElement } from "hast-util-is-element";

const own = {}.hasOwnProperty;

export default function rehypePicture(options) {
  const settings = options || {};

  return (tree) => {
    visit(tree, "element", (node, index, parent) => {
      if (
        !parent ||
        typeof index !== "number" ||
        isElement(parent, "a") ||
        !isElement(node, "img") ||
        !node.properties ||
        !node.properties.src
      ) {
        return;
      }

      const src = String(node.properties.src);

      // @TODO
      // - Figure this out...
      //   const extension = path.extname(src).slice(1)
      //   if (!own.call(settings, extension)) {
      //     return
      //   }

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
}
