window.addEventListener("scroll", function () {
    const image = document.getElementById("expandable-image");
    const scrollY = window.scrollY;
    const scaleFactor = 1 + scrollY * 0.0003;
    image.style.transform = `scale(${scaleFactor})`;
});

$(document).ready(function() {
    $('.plus').on('click', function() {
        var sample = $(this).closest('.sample');
        sample.toggleClass('expanded');
    });
});
