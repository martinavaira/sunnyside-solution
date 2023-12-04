function openMenu() {
    const dropdownMenu = document.getElementById('dropdown-menu')
    const menuBars = document.querySelectorAll('.menu-bar')

    if (dropdownMenu.style.display === 'none') {
        dropdownMenu.style.display = 'flex'
        menuBars.forEach(menuBar => {
             menuBar.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
    })
    } else {
        dropdownMenu.style.display = 'none'
        menuBars.forEach(menuBar => {
            menuBar.style.backgroundColor = 'rgb(255, 255, 255)'
        })
    }
}