// Renders the small Markdown subset used in lesson explanations, as BarceLang does:
//   "## " a heading, "- " a bullet, "| " a table row (shown monospaced, as aligned in the
//   source), **bold** anywhere, and any other line as its own paragraph.

function inline(text) {
  return text.split('**').map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part));
}

function toBlocks(text) {
  const blocks = [];
  for (const line of text.trim().split('\n')) {
    const last = blocks[blocks.length - 1];
    if (line.startsWith('- ')) {
      if (last?.type === 'list') last.lines.push(line.slice(2));
      else blocks.push({ type: 'list', lines: [line.slice(2)] });
    } else if (line.startsWith('| ')) {
      if (last?.type === 'table') last.lines.push(line.slice(2));
      else blocks.push({ type: 'table', lines: [line.slice(2)] });
    } else if (line.startsWith('## ')) {
      blocks.push({ type: 'heading', text: line.slice(3) });
    } else if (line.trim()) {
      blocks.push({ type: 'paragraph', text: line });
    }
  }
  return blocks;
}

export default function Markdown({ text }) {
  return (
    <div className="markdown">
      {toBlocks(text).map((block, i) => {
        switch (block.type) {
          case 'heading':
            return <h3 key={i}>{inline(block.text)}</h3>;
          case 'list':
            return (
              <ul key={i}>
                {block.lines.map((line, j) => <li key={j}>{inline(line)}</li>)}
              </ul>
            );
          case 'table':
            return <pre key={i}>{block.lines.join('\n')}</pre>;
          default:
            return <p key={i}>{inline(block.text)}</p>;
        }
      })}
    </div>
  );
}
