# UmniBench Website - Files Created

## Overview
A complete GitHub Pages website for UmniBench has been created in the `docs/` directory, inspired by the RoverBench design.

## Directory Structure

```
docs/
├── index.html                          # Main homepage with all content
├── README.md                           # Documentation for the docs folder
├── DEPLOYMENT.md                       # Step-by-step deployment guide
├── _config.yml                         # GitHub Pages configuration
├── .gitignore                          # Git ignore file
│
└── static/
    ├── css/
    │   └── style.css                   # Complete stylesheet with UmniBench branding
    │
    ├── js/
    │   ├── leaderboard.js              # Leaderboard sorting functionality
    │   ├── visualizations.js           # Charts and data visualizations
    │   ├── zoom.js                     # Image zoom functionality
    │   ├── medium-zoom.min.js          # Placeholder (use CDN)
    │   └── fontawesome.all.min.js      # Placeholder (using CDN instead)
    │
    └── img/
        └── icons/
            ├── logo.svg                # UmniBench logo icon
            ├── generation.svg          # Generation capability icon
            ├── editing.svg             # Editing capability icon
            └── understanding.svg       # Understanding capability icon
```

## Key Features Implemented

### 1. Homepage (index.html)
- ✅ Header with gradient background and UmniBench branding
- ✅ Author and affiliation sections
- ✅ Action buttons (Paper, Code, Leaderboard)
- ✅ Introduction section with key highlights
- ✅ Framework description with 3-turn evaluation
- ✅ Example test case walkthrough
- ✅ Statistics dashboard with counters
- ✅ Domain distribution visualization
- ✅ Evaluation protocol explanation
- ✅ Sortable leaderboard table
- ✅ Key findings section
- ✅ Getting started guide with code examples
- ✅ Citation section
- ✅ Responsive design for mobile devices

### 2. Styling (style.css)
- ✅ UmniBench brand colors (6-color gradient)
- ✅ Professional gradient header
- ✅ Responsive grid layouts
- ✅ Hover effects and animations
- ✅ Mobile-responsive breakpoints
- ✅ Custom styled boxes and sections
- ✅ Button animations
- ✅ Table styling for leaderboard
- ✅ Code block styling

### 3. JavaScript Functionality
- ✅ **leaderboard.js**: Sortable table columns with indicators
- ✅ **visualizations.js**: Domain distribution bar chart using Plotly
- ✅ **zoom.js**: Image zoom functionality for figures
- ✅ Smooth scrolling for anchor links

### 4. Icons and Assets
- ✅ SVG logo with gradient design
- ✅ Generation capability icon
- ✅ Editing capability icon
- ✅ Understanding capability icon
- All icons are custom-designed SVGs

### 5. Documentation
- ✅ **README.md**: Overview and structure documentation
- ✅ **DEPLOYMENT.md**: Complete deployment guide
- ✅ Configuration files for GitHub Pages

## What You Need to Do

### Required Updates (Before Deployment):

1. **Authors and Affiliations** (index.html, lines 75-90)
   - Replace placeholder author names
   - Add actual institutional affiliations
   - Update links to author websites

2. **Paper Link** (index.html, line 93)
   - Replace `XXXX.XXXXX` with actual arXiv ID
   - Or link to conference/journal paper

3. **Leaderboard Data** (index.html, lines 230+)
   - Add actual model evaluation results
   - Update performance numbers from your evaluations
   - Add/remove model rows as needed

4. **Statistics** (index.html, lines 195-205)
   - Verify test case count (currently 585+)
   - Update domain counts if different

5. **Domain Distribution** (visualizations.js, lines 3-17)
   - Update with actual domain names
   - Update case counts per domain

6. **Citation** (index.html, around line 350)
   - Add actual publication information
   - Update year, venue, authors

### Optional Enhancements:

1. **Add Demo Images**
   - Add screenshots of model outputs
   - Add example cases with visual results
   - Place in `static/img/`

2. **Expand Leaderboard**
   - Add more models from your results/ folder
   - Include organization logos
   - Add special badges (GenOnly, EditOnly, etc.)

3. **Add More Visualizations**
   - Turn-by-turn performance charts
   - Model comparison radar charts
   - Error analysis visualizations

4. **Add About Section**
   - Team information
   - Project background
   - Acknowledgments

## Deployment Options

### Option 1: Separate Repository (Recommended)
Create `UmniBench.github.io` repository and copy docs contents to root.
- URL: `https://umnibench.github.io/`

### Option 2: Docs Folder
Use the existing repository with docs folder.
- URL: `https://yourusername.github.io/UmniBench/`

See `DEPLOYMENT.md` for detailed instructions.

## Testing Locally

```bash
cd docs
python -m http.server 8000
# Visit http://localhost:8000
```

## External Libraries Used (via CDN)

- **Plotly.js**: Interactive charts
- **MathJax**: Mathematical formulas
- **D3.js**: Data visualization utilities
- **Font Awesome**: Icons
- **Medium Zoom**: Image zoom functionality
- **KaTeX**: LaTeX rendering
- **jQuery**: Utility functions

All are loaded via CDN, no installation needed.

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (responsive)

## Next Steps

1. Review and customize all placeholder content
2. Add actual data from your evaluation results
3. Test locally using the Python HTTP server
4. Commit to GitHub
5. Configure GitHub Pages in repository settings
6. Verify deployment at your GitHub Pages URL

## File Sizes

- `index.html`: ~18 KB
- `style.css`: ~12 KB
- `leaderboard.js`: ~2 KB
- `visualizations.js`: ~2 KB
- All SVG icons: < 5 KB total

Total website size: < 50 KB (excluding external CDN libraries)

## Notes

- The website uses a professional design inspired by RoverBench
- All content is customized for UmniBench's 3-turn evaluation framework
- Color scheme uses 6 colors representing the "UmniBench" brand
- Fully responsive and works on all device sizes
- No backend required - pure static HTML/CSS/JS

## Support

For issues or questions about the website:
1. Check `DEPLOYMENT.md` for common issues
2. Test locally before deploying
3. Verify all paths are relative (not absolute)
4. Ensure all required content is updated

---

**Created**: December 9, 2025
**Based on**: RoverBench website design (roverbench.github.io)
**Customized for**: UmniBench project
