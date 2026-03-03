const https = require('https');

const cssUrl = 'https://ignitetech.co.id/wp-content/cache/autoptimize/css/autoptimize_35df2178da1265fa79f6bc76c7c31601.css';

https.get(cssUrl, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const colors = data.match(/#[0-9a-fA-F]{3,6}/g);
    if(colors) {
      // count frequencies
      const counts = {};
      colors.forEach(c => {
        let col = c.toLowerCase();
        if (col.length === 4) {
            col = '#' + col[1] + col[1] + col[2] + col[2] + col[3] + col[3];
        }
        counts[col] = (counts[col] || 0) + 1;
      });
      // Sort by frequency
      const sorted = Object.entries(counts).sort((a,b) => b[1] - a[1]);
      console.log('Top 15 Colors in CSS by Frequency:');
      sorted.slice(0, 15).forEach(([c, count]) => console.log(`${c}: ${count}`));
      
      // Look for specific variables in root
      const rootVars = data.match(/--[^:]+:\s*(#[0-9a-fA-F]{3,6}|rgba?\([^)]+\))/g);
      if(rootVars) {
          console.log('\nCSS Variables:');
          console.log([...new Set(rootVars)]);
      }
    }
  });
});
