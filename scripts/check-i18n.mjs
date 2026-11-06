import { en } from '../src/i18n/en.js';
import { te } from '../src/i18n/te.js';

const issues = [];
let leafCount = 0;

function compare(english, telugu, path = 'root') {
  if (Array.isArray(english)) {
    if (!Array.isArray(telugu)) {
      issues.push(`${path}: expected an array in Telugu`);
      return;
    }
    if (english.length !== telugu.length) {
      issues.push(`${path}: English has ${english.length} items, Telugu has ${telugu.length}`);
    }
    english.forEach((item, index) => compare(item, telugu[index], `${path}[${index}]`));
    return;
  }

  if (english && typeof english === 'object') {
    if (!telugu || typeof telugu !== 'object' || Array.isArray(telugu)) {
      issues.push(`${path}: expected an object in Telugu`);
      return;
    }

    Object.keys(english).forEach((key) => {
      if (!(key in telugu)) {
        issues.push(`${path}.${key}: missing in Telugu`);
      } else {
        compare(english[key], telugu[key], `${path}.${key}`);
      }
    });

    Object.keys(telugu).forEach((key) => {
      if (!(key in english)) {
        issues.push(`${path}.${key}: extra key in Telugu`);
      }
    });
    return;
  }

  leafCount += 1;

  if (typeof telugu !== 'string') {
    issues.push(`${path}: expected a Telugu string`);
    return;
  }

  if (!String(english).trim()) {
    issues.push(`${path}: empty English string`);
  }

  if (!telugu.trim()) {
    issues.push(`${path}: empty Telugu string`);
  }
}

compare(en, te);

if (issues.length > 0) {
  console.error(`Translation check failed with ${issues.length} issue(s):`);
  issues.slice(0, 60).forEach((issue) => console.error(` - ${issue}`));
  if (issues.length > 60) {
    console.error(`...and ${issues.length - 60} more.`);
  }
  process.exit(1);
}

console.log(`Translation check passed: ${leafCount} bilingual strings and list items.`);
