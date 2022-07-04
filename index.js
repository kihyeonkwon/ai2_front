window.onload = async function checkLogin(){
    var payload = localStorage.getItem("payload")
    var parsed_payload = await JSON.parse(payload)

    const username = document.getElementById("username")
    const loginoutButton = document.getElementById("loginout")

    if(parsed_payload){
        username.innerText = parsed_payload.username
        loginoutButton.innerText = "로그아웃"
        loginoutButton.setAttribute("onclick", "handleLogout()")

    }else{
        username.innerText = "로그인해주세요"
        loginoutButton.innerText = "로그인"
        loginoutButton.setAttribute("onclick", "location.href='/login.html'")
    }
}



window.onload = async function loadArticles(){
    articles = await getArticles()
    const article_list = document.getElementById("articles")

    articles.forEach(article => {
        const newArticle = document.createElement("div");
        const articleImage = document.createElement("img")
        articleImage.setAttribute("src", `${backend_base_url}${article.image}`)
        newArticle.setAttribute("id", article.id)
        newArticle.innerText = article.title
        newArticle.setAttribute("onclick","articleDetail(this.id)")
        newArticle.appendChild(articleImage)
        article_list.appendChild(newArticle)
    });

    
}