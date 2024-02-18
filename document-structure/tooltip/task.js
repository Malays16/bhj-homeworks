document.addEventListener('DOMContentLoaded', function() {
    const tooltips = document.querySelectorAll('.has-tooltip');

    tooltips.forEach(function(tooltip) {
        tooltip.addEventListener('click', function(event) {
            event.preventDefault();
            const title = this.getAttribute('title');
            const tooltipElement = document.createElement('div');
            tooltipElement.innerText = title;
            tooltipElement.classList.add('tooltip');
            document.body.appendChild(tooltipElement);

            const rect = this.getBoundingClientRect();
            tooltipElement.style.left = rect.left + 'px';
            tooltipElement.style.top = rect.bottom + 'px';

            setTimeout(function() {
                tooltipElement.classList.add('tooltip_active');
            }, 10);

            document.addEventListener('click', function(e) {
                if (e.target !== tooltip) {
                    tooltipElement.remove();
                }
            });
        });
    });
});