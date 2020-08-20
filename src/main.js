const gitUrl = 'https://api.github.com/users/filipjinstrand/repos'

GetGitRepos();

var typed2 = new Typed('#typed', {
    strings: ['Programmer ^4000'],
    typeSpeed: 50,
    backSpeed: 20,
    smartBackspace: true,
    loop: true
});

window.onload = function onLoad() {
    var csBar = new ProgressBar.Line("#progress-cs", {
        strokeWidth: 10,
        easing: 'easeOut',
        duration: 10000,
        color: '#55DDE0',
        trailColor: '#2F4858',
        trailWidth: 1,
        svgStyle: { width: '100%', height: '100%' }
    });

    csBar.animate(0.75);

    var jsBar = new ProgressBar.Line("#progress-js", {
        strokeWidth: 10,
        easing: 'easeOut',
        duration: 10000,
        color: '#55DDE0',
        trailColor: '#2F4858',
        trailWidth: 1,
        svgStyle: { width: '100%', height: '100%' }
    });

    jsBar.animate(0.60);

    var sqlBar = new ProgressBar.Line("#progress-sql", {
        strokeWidth: 10,
        easing: 'easeOut',
        duration: 10000,
        color: '#55DDE0',
        trailColor: '#2F4858',
        trailWidth: 1,
        svgStyle: { width: '100%', height: '100%' }
    });

    sqlBar.animate(0.40);

    var htmlBar = new ProgressBar.Line("#progress-html", {
        strokeWidth: 10,
        easing: 'easeOut',
        duration: 10000,
        color: '#55DDE0',
        trailColor: '#2F4858',
        trailWidth: 1,
        svgStyle: { width: '100%', height: '100%' }
    });

    htmlBar.animate(0.65);

    var engBar = new ProgressBar.Line("#progress-eng", {
        strokeWidth: 10,
        easing: 'easeOut',
        duration: 10000,
        color: '#55DDE0',
        trailColor: '#2F4858',
        trailWidth: 1,
        svgStyle: { width: '100%', height: '100%' }
    });

    engBar.animate(1);

    var sweBar = new ProgressBar.Line("#progress-swe", {
        strokeWidth: 10,
        easing: 'easeOut',
        duration: 10000,
        color: '#55DDE0',
        trailColor: '#2F4858',
        trailWidth: 1,
        svgStyle: { width: '100%', height: '100%' }
    });

    sweBar.animate(1);

    var gerBar = new ProgressBar.Line("#progress-ger", {
        strokeWidth: 10,
        easing: 'easeOut',
        duration: 10000,
        color: '#55DDE0',
        trailColor: '#2F4858',
        trailWidth: 1,
        svgStyle: { width: '100%', height: '100%' }
    });

    gerBar.animate(0.20);
};




function GetGitRepos() {
    var gitRepos = [];
    fetch(gitUrl)
        .then(response => response.json())
        .then(data = (data) => {
            console.log(data)

            data.forEach(element => {
                var repoName = element["name"]
                var pushDate = element["created_at"]
                var gitLink = element["html_url"]
                // console.log(repoName + " " + pushDate + " " + gitLink)

                var gitObject = {
                    name: repoName,
                    date: pushDate.substring(0, 10),
                    link: gitLink
                }

                gitRepos.push(gitObject)
                // console.log(gitObject)


            });
            SortGitReposByDate(gitRepos);
        });



}

function SortGitReposByDate(gitRepos) {

    gitRepos.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
    })

    for (let i = 0; i < 5; i++) {
        const repo = gitRepos[i];
        console.log(repo)
        DisplayGitRepos(repo);
    }
}

function DisplayGitRepos(repo) {
    var gitReposElement = document.getElementById("gitRepos");

    gitReposElement.insertAdjacentHTML("beforeend", `
            <div class="card" style="width: 20px; background-color: #2F4858;">
                <div class="card-body">
                    <h5 class="card-title" style="color: #F6AE2D;">${repo.name}</h5>
                    <p class="card-text">Created at: ${repo.date}</p>
                    <a href="${repo.link}" target="_blank" class="btn" style="background-color: #F6AE2D;">Repo</a>
                </div>
            </div>
    `)
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
