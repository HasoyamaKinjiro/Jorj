document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle')
    const nav = document.querySelector('.nav')

    navToggle.onclick = () => {
        navToggle.classList.toggle('active')
        if (nav.style.display === 'block') nav.style.display = 'none'
        else nav.style.display = 'block'
    }
})




