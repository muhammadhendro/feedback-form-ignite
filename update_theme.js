const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'FeedbackForm.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace brand colors
content = content.replace(/xynexis-green/g, 'ignite-green');
content = content.replace(/xynexis-dark/g, 'ignite-dark');
content = content.replace(/xynexis-gray/g, 'ignite-gray');

// Switch from Dark Mode to Light Mode Tailwind classes
// Backgrounds
content = content.replace(/bg-\[\#1a1e28\]/g, 'bg-white');
content = content.replace(/bg-\[\#20242F\]/g, 'bg-white');
content = content.replace(/bg-xynexis-gray\/80/g, 'bg-white/90');
content = content.replace(/bg-\[\#1a1e28\]\/50/g, 'bg-gray-50');

// Text colors
content = content.replace(/text-white/g, 'text-gray-900');
content = content.replace(/text-gray-400/g, 'text-gray-600');
content = content.replace(/text-gray-300/g, 'text-gray-700');
content = content.replace(/text-gray-500/g, 'text-gray-500'); // Neutral

// Borders
content = content.replace(/border-gray-700/g, 'border-gray-200');
content = content.replace(/border-gray-600/g, 'border-gray-300');
content = content.replace(/border-xynexis-green\/30/g, 'border-ignite-green/30');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Update complete');
