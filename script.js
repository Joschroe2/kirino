//sidebar
//shows the menu nav-bar
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
//hides the menu nav-bar
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
//main
function showMain(){
    const main = document.querySelector('.main-page-image')
    main.style.display = 'flex'
    document.body.style.backgroundImage = "block";
    hideHome()
    hideAbout()
    hideBlog()
    hideArtworks()
}
function hideMain(){
    const main = document.querySelector('.main-page-image')
    main.style.display = 'none'
    document.body.style.backgroundImage = "none";
}
//home
function showHome(){
    const home = document.querySelector('.home-page')
    home.style.display = 'flex'
    document.body.style.backgroundImage = "none";
    hideMain()
    hideAbout()
    hideBlog()
    hideArtworks()
}
function hideHome(){
    const home = document.querySelector(".home-page")
    home.style.display = "none"
}
//about
function showAbout(){
    const about = document.querySelector(".about-page")
    about.style.display = "flex"
    document.body.style.backgroundImage = "none";
    hideHome()
    hideMain()
    hideBlog()
    hideArtworks()
}
function hideAbout(){
    const about = document.querySelector(".about-page")
    about.style.display = "none"
}
//blog
function showBlog(){
    const blog = document.querySelector(".blog-page")
    blog.style.display = "flex"
    document.body.style.backgroundImage = "none"
    hideMain()
    hideHome()
    hideAbout()
    hideArtworks()
}
function hideBlog(){
    const blog = document.querySelector(".blog-page")
    blog.style.display = "none"
}
//artworks
function showArtworks(){
    const artworks = document.querySelector(".artworks-page")
    artworks.style.display = "flex"
    document.body.style.backgroundImage = "none"
    hideMain()
    hideHome()
    hideAbout()
    hideBlog()
}
function hideArtworks(){
    const artworks = document.querySelector(".artworks-page")
    artworks.style.display = "none"
}