'use strict';

/**
 * genesis-bible-quotes-1772990764328
 * An npm module for Bible quotes from the book of Genesis
 * Created: 2026-03-08T17:26:08.631Z
 */

const quotes = [
  {
    "chapter": 1,
    "verse": 1,
    "text": "In the beginning God created the heaven and the earth."
  },
  {
    "chapter": 1,
    "verse": 3,
    "text": "And God said, Let there be light: and there was light."
  },
  {
    "chapter": 1,
    "verse": 27,
    "text": "So God created man in his own image, in the image of God created he him; male and female created he them."
  },
  {
    "chapter": 1,
    "verse": 28,
    "text": "And God blessed them, and God said unto them, Be fruitful, and multiply, and replenish the earth, and subdue it."
  },
  {
    "chapter": 1,
    "verse": 31,
    "text": "And God saw every thing that he had made, and, behold, it was very good."
  },
  {
    "chapter": 2,
    "verse": 7,
    "text": "And the LORD God formed man of the dust of the ground, and breathed into his nostrils the breath of life; and man became a living soul."
  },
  {
    "chapter": 2,
    "verse": 18,
    "text": "And the LORD God said, It is not good that the man should be alone; I will make him an help meet for him."
  },
  {
    "chapter": 3,
    "verse": 19,
    "text": "In the sweat of thy face shalt thou eat bread, till thou return unto the ground; for out of it wast thou taken: for dust thou art, and unto dust shalt thou return."
  },
  {
    "chapter": 6,
    "verse": 8,
    "text": "But Noah found grace in the eyes of the LORD."
  },
  {
    "chapter": 8,
    "verse": 22,
    "text": "While the earth remaineth, seedtime and harvest, and cold and heat, and summer and winter, and day and night shall not cease."
  },
  {
    "chapter": 9,
    "verse": 13,
    "text": "I do set my bow in the cloud, and it shall be for a token of a covenant between me and the earth."
  },
  {
    "chapter": 12,
    "verse": 1,
    "text": "Now the LORD had said unto Abram, Get thee out of thy country, and from thy kindred, and from thy father's house, unto a land that I will shew thee."
  },
  {
    "chapter": 12,
    "verse": 2,
    "text": "And I will make of thee a great nation, and I will bless thee, and make thy name great; and thou shalt be a blessing."
  },
  {
    "chapter": 15,
    "verse": 1,
    "text": "After these things the word of the LORD came unto Abram in a vision, saying, Fear not, Abram: I am thy shield, and thy exceeding great reward."
  },
  {
    "chapter": 15,
    "verse": 5,
    "text": "And he brought him forth abroad, and said, Look now toward heaven, and tell the stars, if thou be able to number them: and he said unto him, So shall thy seed be."
  },
  {
    "chapter": 18,
    "verse": 14,
    "text": "Is any thing too hard for the LORD?"
  },
  {
    "chapter": 22,
    "verse": 14,
    "text": "And Abraham called the name of that place Jehovahjireh: as it is said to this day, In the mount of the LORD it shall be seen."
  },
  {
    "chapter": 28,
    "verse": 15,
    "text": "And, behold, I am with thee, and will keep thee in all places whither thou goest, and will bring thee again into this land; for I will not leave thee, until I have done that which I have spoken to thee of."
  },
  {
    "chapter": 31,
    "verse": 3,
    "text": "And the LORD said unto Jacob, Return unto the land of thy fathers, and to thy kindred; and I will be with thee."
  },
  {
    "chapter": 50,
    "verse": 20,
    "text": "But as for you, ye thought evil against me; but God meant it unto good, to bring to pass, as it is this day, to save much people alive."
  }
];

function getAllQuotes() {
  return quotes.slice();
}

function getRandomQuote() {
  var idx = Math.floor(Math.random() * quotes.length);
  return quotes[idx];
}

function getByChapter(chapter) {
  return quotes.filter(function(q) { return q.chapter === chapter; });
}

function getByChapterAndVerse(chapter, verse) {
  for (var i = 0; i < quotes.length; i++) {
    if (quotes[i].chapter === chapter && quotes[i].verse === verse) {
      return quotes[i];
    }
  }
  return null;
}

function search(keyword) {
  var lower = keyword.toLowerCase();
  return quotes.filter(function(q) {
    return q.text.toLowerCase().indexOf(lower) !== -1;
  });
}

function count() {
  return quotes.length;
}

function format(quote) {
  return 'Genesis ' + quote.chapter + ':' + quote.verse + ' - ' + quote.text;
}

module.exports = {
  getAllQuotes: getAllQuotes,
  getRandomQuote: getRandomQuote,
  getByChapter: getByChapter,
  getByChapterAndVerse: getByChapterAndVerse,
  search: search,
  count: count,
  format: format
};
