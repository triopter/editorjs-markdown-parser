export function parseListToMarkdown(blocks) {
  let items = {};
  switch (blocks.style) {
    case 'unordered':
      items = blocks.items.map((item) => (`* ${item}`));

      return items.join('\n');
      break;
    case 'ordered':
      items = blocks.items.map((item, index) => (`${index + 1} ${item}`));

      return items.join('\n');
      break;
    default:
      break;
  }
}
