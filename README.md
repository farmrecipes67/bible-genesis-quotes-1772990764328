# genesis-bible-quotes-1772990764328

> An npm module for Bible quotes from the book of Genesis

Created: 2026-03-08T17:26:08.636Z

## Installation

```bash
npm install genesis-bible-quotes-1772990764328
```

## Usage

```javascript
const genesis = require('genesis-bible-quotes-1772990764328');

const quote = genesis.getRandomQuote();
console.log(genesis.format(quote));

const all = genesis.getAllQuotes();
const ch1 = genesis.getByChapter(1);
const verse = genesis.getByChapterAndVerse(1, 1);
const results = genesis.search('light');
console.log(genesis.count() + ' quotes');
```

## API

| Method | Description |
|--------|-------------|
| `getAllQuotes()` | Returns array of all quote objects |
| `getRandomQuote()` | Returns a random quote object |
| `getByChapter(chapter)` | Filter quotes by chapter number |
| `getByChapterAndVerse(chapter, verse)` | Get specific quote |
| `search(keyword)` | Case-insensitive text search |
| `count()` | Total number of quotes |
| `format(quote)` | Format quote as readable string |

## License

MIT
