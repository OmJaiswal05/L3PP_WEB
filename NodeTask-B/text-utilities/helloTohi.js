/**
 * Replace occurrences of a target word in a given text.
 * @param {string} text - The input text.
 * @param {string} target - The word to be replaced.
 * @param {string} replacement - The word to replace with.
 * @returns {string} - The updated text.
 */
function replaceWord(text, target, replacement) {
    const regex = new RegExp(`\\b${target}\\b`, 'gi'); // Match whole words, case insensitive
    return text.replace(regex, replacement);
}

module.exports = replaceWord;