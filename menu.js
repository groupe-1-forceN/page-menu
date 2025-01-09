function filterMenu(category) {
    var items = document.querySelectorAll('.menu-item');
    items.forEach(function(item) {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}