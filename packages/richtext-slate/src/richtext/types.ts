export type TextNode = { text: string; [x: string]: unknown };

export type ElementNode = {
  type?: string;
  children: (TextNode | ElementNode)[];
};

export function nodeIsTextNode(node: TextNode | ElementNode): node is TextNode {
  return 'text' in node;
}
