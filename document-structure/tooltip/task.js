document.addEventListener('DOMContentLoaded', function() {
    const tooltips = document.querySelectorAll('.has-tooltip');
    const tooltipElement = document.createElement('div');
    tooltipElement.classList.add('tooltip');
    document.body.append(tooltipElement);

    tooltips.forEach(function(tooltip) {
        tooltip.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            const title = this.getAttribute('title');

            if (tooltipElement.innerText === title && tooltipElement.classList.contains('tooltip_active')) {
                tooltipElement.classList.remove('tooltip_active');
            } else {
                tooltipElement.innerText = title;
                tooltipElement.classList.add('tooltip_active');
                const rect = this.getBoundingClientRect();
                tooltipElement.style.left = rect.left + 'px';
                tooltipElement.style.top = rect.bottom + 'px';
            }
        });

        document.addEventListener('click', (e) => {
            if (!tooltipElement.contains(e.target)) {
                tooltipElement.classList.remove('tooltip_active');
            }
        });
    });
});