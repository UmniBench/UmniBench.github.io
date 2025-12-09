# UmniBench Website Deployment Guide

This guide will help you deploy the UmniBench homepage to GitHub Pages.

## Prerequisites

- Git installed on your system
- A GitHub account
- Access to the UmniBench repository

## Step 1: Prepare the Repository

### If using a separate repository (UmniBench.github.io)

1. Create a new repository named `UmniBench.github.io` (or your-org.github.io)
   ```bash
   # On GitHub: Create new repository named "UmniBench.github.io"
   ```

2. Clone and push the docs content:
   ```bash
   # Clone the new repository
   git clone https://github.com/UmniBench/UmniBench.github.io.git
   cd UmniBench.github.io
   
   # Copy all files from docs/ to root
   cp -r /path/to/UmniBench/docs/* .
   
   # Commit and push
   git add .
   git commit -m "Initial website deployment"
   git push origin main
   ```

3. The site will be automatically available at: https://umnibench.github.io/

### If using the existing repository with docs folder

1. Navigate to your UmniBench repository
   ```bash
   cd /path/to/UmniBench
   ```

2. Commit the docs folder:
   ```bash
   git add docs/
   git commit -m "Add GitHub Pages website"
   git push origin main
   ```

3. Configure GitHub Pages:
   - Go to your repository on GitHub
   - Click Settings > Pages
   - Under "Source", select "Deploy from a branch"
   - Choose `main` branch and `/docs` folder
   - Click Save

4. The site will be available at: https://your-username.github.io/UmniBench/

## Step 2: Customize the Content

### Essential Updates

1. **Update Authors and Affiliations** (`docs/index.html`, lines 75-90):
   ```html
   <span class="author-block">
       <a href="https://your-site.com" target="_blank">Your Name</a><sup>1</sup>,
   </span>
   ```

2. **Update Paper Link** (`docs/index.html`, line 93):
   ```html
   <a href="https://arxiv.org/abs/YOUR_ARXIV_ID" target="_blank" class="button">
   ```

3. **Update GitHub Link** (`docs/index.html`, line 96):
   ```html
   <a href="https://github.com/your-org/your-repo" target="_blank" class="button">
   ```

4. **Update Leaderboard Data** (`docs/index.html`, starting around line 230):
   - Add actual model evaluation results
   - Update performance metrics
   - Add more model rows as needed

5. **Update Statistics** (`docs/index.html`, lines 195-205):
   - Update test case counts
   - Modify domain coverage numbers

6. **Update Domain Distribution** (`docs/static/js/visualizations.js`, lines 3-17):
   ```javascript
   const domainData = {
       domains: ['Your', 'Actual', 'Domains'],
       counts: [65, 58, 52]
   };
   ```

7. **Update Citation** (`docs/index.html`, around line 350):
   ```bibtex
   @article{umnibench2024,
     title={Your Actual Title},
     author={Your Authors},
     journal={Your Journal},
     year={2024}
   }
   ```

### Optional Enhancements

1. **Add Demo Images**:
   - Place demo images in `docs/static/img/`
   - Update example cases with actual screenshots

2. **Add More Models to Leaderboard**:
   - Edit the leaderboard table in `index.html`
   - Add rows with actual evaluation data

3. **Customize Colors**:
   - Edit `docs/static/css/style.css`
   - Modify the UmniBench brand colors in `.umnibench-logo` class

4. **Add More Visualizations**:
   - Edit `docs/static/js/visualizations.js`
   - Add performance comparison charts
   - Add turn-by-turn accuracy visualizations

## Step 3: Test Locally

Before deploying, test the website locally:

### Using Python:
```bash
cd docs
python -m http.server 8000
# Visit http://localhost:8000
```

### Using Node.js:
```bash
npm install -g http-server
cd docs
http-server
# Visit http://127.0.0.1:8080
```

### Using VS Code:
- Install "Live Server" extension
- Right-click on `index.html`
- Select "Open with Live Server"

## Step 4: Deploy

### Automatic Deployment
Once you push to GitHub, the site will automatically deploy if:
- You're using username.github.io repository (deploys from root)
- You've configured Pages to use the docs folder

### Manual Deployment Check
1. Go to your repository on GitHub
2. Click on "Actions" tab
3. Check for "pages build and deployment" workflow
4. Ensure it completes successfully

## Step 5: Verify Deployment

1. Visit your site URL:
   - `https://umnibench.github.io/` (if using .github.io repo)
   - `https://your-username.github.io/UmniBench/` (if using docs folder)

2. Check that:
   - All styles are loading correctly
   - Icons are displaying
   - Charts are rendering
   - Links work properly
   - Responsive design works on mobile

## Troubleshooting

### Site not showing up
- Check GitHub Pages settings (Settings > Pages)
- Ensure the correct branch and folder are selected
- Wait 5-10 minutes for initial deployment
- Check the Actions tab for deployment errors

### Styles not loading
- Check that CSS paths are correct
- Ensure `style.css` is in `static/css/`
- Clear browser cache and reload

### Charts not displaying
- Check browser console for JavaScript errors
- Ensure Plotly.js CDN is loading
- Verify data in `visualizations.js`

### Icons not showing
- Check that SVG files are in `static/img/icons/`
- Verify paths in HTML
- Check FontAwesome CDN is loading

### 404 Errors
- Ensure all asset paths are relative to the HTML file
- Use `./static/` not `/static/` for paths
- Check file names match exactly (case-sensitive)

## Custom Domain (Optional)

To use a custom domain like `umnibench.org`:

1. Purchase a domain from a domain registrar
2. Add a `CNAME` file to the docs/ folder:
   ```
   umnibench.org
   ```
3. Configure DNS settings with your registrar:
   ```
   Type: CNAME
   Name: www
   Value: umnibench.github.io
   ```
4. Update GitHub Pages settings to use custom domain

## Maintenance

### Regular Updates
- Update leaderboard as new models are evaluated
- Add new findings and insights
- Keep statistics current
- Refresh example cases

### Performance
- Optimize images (use WebP format)
- Minify CSS and JavaScript for production
- Enable caching for static assets
- Consider using a CDN for large assets

## Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Plotly.js Documentation](https://plotly.com/javascript/)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [Responsive Web Design Guide](https://web.dev/responsive-web-design-basics/)

## Support

For issues or questions:
- Open an issue on the GitHub repository
- Check existing issues for solutions
- Refer to GitHub Pages documentation

---

**Note**: Remember to update the content with your actual data before deploying publicly!
