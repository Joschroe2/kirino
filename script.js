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
    hideProjects()
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
    hideProjects()
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
    hideProjects()
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
    hideProjects()
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
    hideProjects()
}
function hideArtworks(){
    const artworks = document.querySelector(".artworks-page")
    artworks.style.display = "none"
}
//projects
function showProjects(){
    const projects = document.querySelector(".projects-page")
    projects.style.display = "flex"
    document.body.style.backgroundImage = "none"
    hideMain()
    hideHome()
    hideAbout()
    hideBlog()
    hideArtworks()
}
function hideProjects(){
    const projects = document.querySelector(".projects-page")
    projects.style.display = "none"
}