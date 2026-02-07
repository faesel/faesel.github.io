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

export function calculateReadingTime(text: string): number {
  // Average reading speed: 200-250 words per minute
  const wordsPerMinute = 225;
  
  // Remove markdown syntax and HTML tags for accurate word count
  const cleanText = text
    .replace(/[#*`[\]()]/g, '') // Remove markdown syntax
    .replace(/<[^>]*>/g, '')     // Remove HTML tags
    .trim();
  
  // Count words
  const words = cleanText.split(/\s+/).filter(word => word.length > 0).length;
  
  // Calculate reading time in minutes (minimum 1 minute)
  const minutes = Math.ceil(words / wordsPerMinute);
  
  return Math.max(1, minutes);
}

export function formatReadingTime(minutes: number): string {
  if (minutes === 1) {
    return '1 min read';
  }
  return `${minutes} min read`;
}
