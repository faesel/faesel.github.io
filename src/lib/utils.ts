import { marked } from 'marked';
import hljs from 'highlight.js';

// Create a custom renderer for code blocks with syntax highlighting and line numbers
const renderer = new marked.Renderer();

renderer.code = function({ text, lang }: { text: string; lang?: string }) {
  let highlighted: string;
  
  if (lang && hljs.getLanguage(lang)) {
    try {
      highlighted = hljs.highlight(text, { language: lang }).value;
    } catch (err) {
      console.error('Highlight.js error:', err);
      highlighted = hljs.highlightAuto(text).value;
    }
  } else {
    highlighted = hljs.highlightAuto(text).value;
  }
  
  // Add line numbers
  const lines = highlighted.split('\n');
  const numberedLines = lines.map((line, index) => {
    const lineNumber = index + 1;
    return `<span class="code-line"><span class="line-number">${lineNumber}</span><span class="line-content">${line}</span></span>`;
  }).join('\n');
  
  const langClass = lang ? `language-${lang}` : '';
  return `<pre><code class="hljs ${langClass}">${numberedLines}</code></pre>`;
};

// Configure marked to use the custom renderer
marked.use({ 
  renderer,
  gfm: true,
  breaks: true,
});

export function parseMarkdown(markdown: string): string {
  return marked(markdown) as string;
}

export function getExcerpt(markdown: string, maxLength: number = 150): string {
  const plainText = markdown.replace(/[#*`[\]()]/g, '').trim();
  if (plainText.length <= maxLength) return plainText;
  return plainText.substring(0, maxLength).trim() + '...';
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
