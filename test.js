'use strict';
var genesis = require('./index');
console.log('=== Genesis Bible Quotes Test ===');
var total = genesis.count();
console.log('Total quotes: ' + total);
if (total !== 20) { console.error('FAIL: Expected 20'); process.exit(1); }
console.log('PASS: count()');
var all = genesis.getAllQuotes();
if (all.length !== 20) { console.error('FAIL: getAllQuotes'); process.exit(1); }
console.log('PASS: getAllQuotes()');
var rand = genesis.getRandomQuote();
if (!rand || !rand.text) { console.error('FAIL: getRandomQuote'); process.exit(1); }
console.log('PASS: getRandomQuote() => ' + genesis.format(rand));
var ch1 = genesis.getByChapter(1);
if (ch1.length < 1) { console.error('FAIL: getByChapter(1)'); process.exit(1); }
console.log('PASS: getByChapter(1) => ' + ch1.length + ' quotes');
var specific = genesis.getByChapterAndVerse(1, 1);
if (!specific) { console.error('FAIL: getByChapterAndVerse(1,1)'); process.exit(1); }
console.log('PASS: getByChapterAndVerse(1, 1)');
var light = genesis.search('light');
if (light.length < 1) { console.error('FAIL: search(light)'); process.exit(1); }
console.log('PASS: search(light)');
var missing = genesis.getByChapterAndVerse(99, 99);
if (missing !== null) { console.error('FAIL: should be null'); process.exit(1); }
console.log('PASS: null for missing');
console.log('=== ALL TESTS PASSED ===');
