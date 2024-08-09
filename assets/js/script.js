$(document).ready(function () {
    // Get all menu items
    let menuItems = $('.nav-link');

    // Get the current page's URL path
    let currentUrl = window.location.pathname;



    // Normalize the currentUrl
    if (currentUrl === "/" || currentUrl === "") {
        currentUrl = "/";
    }

    // Loop through each menu item
    menuItems.each(function () {
        var menuItemUrl = $(this).attr('href');

        // Special case for home page
        if (menuItemUrl === "/") {
            menuItemUrl = "/";
        }

        // Check if the item's href matches the current URL
        if (menuItemUrl === currentUrl) {
            $(this).addClass('active');
        }
    });
});
