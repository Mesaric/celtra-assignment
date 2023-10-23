document.addEventListener('DOMContentLoaded', function () {
    var adElements = document.getElementsByClassName('adSpace');
    for (var i = 0; i < adElements.length; ++i) {
        populateAdSpace(adElements[i])
    }
});

function populateAdSpace(htmlSnippet) {
    fetch("https://api.thecatapi.com/v1/images/search?limit=1")
        .then(res => res.json())
        .then(result => {
            htmlSnippet.src = result[0].url
            htmlSnippet.alt = result[0].id
        })
        .catch(err => console.log(err))
}
