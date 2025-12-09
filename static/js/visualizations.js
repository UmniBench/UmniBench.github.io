// Data visualizations for UmniBench
document.addEventListener('DOMContentLoaded', function () {
    // Domain distribution data
    const domainData = {
        domains: [
            'Physical Mechanics',
            'Chemistry',
            'Biology',
            'Mathematics',
            'Art & Design',
            'Common Sense',
            'Culture',
            'History',
            'Geography',
            'Technology',
            'Others'
        ],
        counts: [65, 58, 52, 48, 45, 42, 38, 35, 32, 28, 142]
    };
    
    // Create domain distribution chart
    createDomainChart(domainData);
});

function createDomainChart(data) {
    const chartDiv = document.getElementById('domain-chart');
    if (!chartDiv) return;
    
    const trace = {
        x: data.domains,
        y: data.counts,
        type: 'bar',
        marker: {
            color: [
                '#FF6B9D',
                '#00BCD4',
                '#3B84CC',
                '#F9CA24',
                '#6C5CE7',
                '#00D084',
                '#FF6B9D',
                '#00BCD4',
                '#3B84CC',
                '#F9CA24',
                '#6C5CE7'
            ],
            opacity: 0.8
        },
        text: data.counts.map(c => c.toString()),
        textposition: 'auto',
        hovertemplate: '<b>%{x}</b><br>Cases: %{y}<extra></extra>'
    };
    
    const layout = {
        title: {
            text: '<b>Test Cases by Domain</b>',
            font: {
                size: 18,
                family: 'Arial, sans-serif',
                color: '#2d3748'
            }
        },
        xaxis: {
            title: 'Domain',
            tickangle: -45,
            tickfont: {
                size: 11
            }
        },
        yaxis: {
            title: 'Number of Test Cases',
            tickfont: {
                size: 12
            }
        },
        margin: {
            l: 60,
            r: 30,
            t: 60,
            b: 120
        },
        plot_bgcolor: '#fafafa',
        paper_bgcolor: 'white',
        showlegend: false,
        hovermode: 'closest'
    };
    
    const config = {
        responsive: true,
        displayModeBar: false
    };
    
    Plotly.newPlot(chartDiv, [trace], layout, config);
}

// Performance comparison chart (can be added later)
function createPerformanceChart(modelData) {
    // Implementation for comparing model performances across turns
    // This can be expanded based on actual evaluation data
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
