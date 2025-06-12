function burgerClick() {
    if (document.body.hasAttribute('sidebar-display')) {
    document.body.removeAttribute('sidebar-display');
    } else {
    document.body.setAttribute('sidebar-display', '');
    }
}