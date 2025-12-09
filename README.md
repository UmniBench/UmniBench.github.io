# UmniBench GitHub Pages Website

This directory contains the source code for the UmniBench homepage website, inspired by the RoverBench design.

## Structure

```
docs/
├── index.html              # Main homepage
├── static/
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   ├── js/
│   │   ├── leaderboard.js        # Leaderboard sorting
│   │   ├── visualizations.js    # Charts and visualizations
│   │   ├── zoom.js              # Image zoom functionality
│   │   ├── medium-zoom.min.js   # Medium zoom library
│   │   └── fontawesome.all.min.js # Font Awesome icons
│   └── img/
│       ├── icons/          # Icon images
│       └── ...             # Other images
```

## Setup for GitHub Pages

### Option 1: Deploy from `docs` folder (Recommended)

1. Push this directory to your GitHub repository
2. Go to repository Settings > Pages
3. Under "Source", select "Deploy from a branch"
4. Choose `main` branch and `/docs` folder
5. Save and wait for deployment

### Option 2: Deploy from root

1. Move all files from `docs/` to the repository root
2. Go to repository Settings > Pages
3. Select `main` branch and `/ (root)` folder

## Required Assets

### Icons
Add the following icon files to `static/img/icons/`:
- `logo.png` - UmniBench logo
- `generation.svg` - Generation capability icon
- `editing.svg` - Editing capability icon
- `understanding.svg` - Understanding capability icon

### JavaScript Libraries
The following libraries are referenced but need to be properly included:

1. **FontAwesome** - Either:
   - Download from https://fontawesome.com/ and place in `static/js/`
   - Or update HTML to use CDN: 
     ```html
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
     ```

2. **Medium Zoom** - Either:
   - Download from https://github.com/francoischalifour/medium-zoom
   - Or use CDN (already included via jQuery CDN in HTML)

## Customization

### Update Content

1. **Authors and Affiliations** (lines 75-90 in index.html):
   - Replace placeholder author names and links
   - Update institution names

2. **Paper Link** (line 93 in index.html):
   - Replace `XXXX.XXXXX` with actual arXiv ID

3. **Leaderboard Data** (lines 230+ in index.html):
   - Add actual model results
   - Update performance numbers

4. **Statistics** (lines 195+ in index.html):
   - Update with actual case counts
   - Modify domain distribution

5. **Citation** (lines 350+ in index.html):
   - Update with actual publication details

### Update Styling

- Edit `static/css/style.css` to change colors, fonts, or layout
- UmniBench brand colors are defined in the `.umnibench-logo` class

### Update Visualizations

- Edit `static/js/visualizations.js` to:
  - Add more charts
  - Update domain data
  - Create performance comparison charts

## Testing Locally

### Using Python HTTP Server

```bash
cd docs
python -m http.server 8000
```

Then visit: http://localhost:8000

### Using Node.js

```bash
npm install -g http-server
cd docs
http-server
```

## Browser Compatibility

The website is designed to work on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (responsive design)

## Dependencies

External libraries loaded via CDN:
- Plotly.js (for charts)
- MathJax (for mathematical formulas)
- D3.js (for data visualization)
- KaTeX (for LaTeX rendering)
- jQuery (for utility functions)

## Notes

- The website uses GitHub Pages Jekyll processing by default
- Static HTML/CSS/JS files work without Jekyll
- Images and assets should be optimized for web (< 1MB each)
- Consider using WebP format for better compression

## License

Same as the main UmniBench project.
