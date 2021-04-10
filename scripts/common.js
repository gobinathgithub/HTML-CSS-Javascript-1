/** This method is used to enable the menu item when we click on Slect Module button in landing page */
function slectModule() {
    let ele = document.getElementById("menu");
    if (ele.classList.contains("slideUp")) {
        ele.classList.remove('slideUp');
        ele.classList.add('slideDown');
    } else {
        ele.classList.remove('slideDown');
        ele.classList.add('slideUp')
    }
}

/** This method is used to Open the specific tab when we click on the Tab button */
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "inline-block";
    evt.currentTarget.className += " active";
}

/** This method is used to fetch the data from JSON based on the search keyword 
 * (After entering the search keyword when press enter this method will trigger) */
function searchResult() {
    var results = [];
    var ele = document.getElementById('search-result');
    ele.classList.remove('animate-bottom');
    document.getElementById('cover-spin').style.display = 'block';
    document.getElementById('search-result-count').innerHTML = '';
    document.getElementById('search-result').innerHTML = '';
    setTimeout(function() {
        var searchVal = document.getElementById("search-box").value.toUpperCase();
        for (var i=0 ; i < searchData.length ; i++)
        {
            if (searchData[i]['title'].toUpperCase().indexOf(searchVal) !== -1 || searchData[i]['description'].toUpperCase().indexOf(searchVal) !== -1) {
                results.push(searchData[i]);
            }
        }
        frameTemplate(results);
        document.getElementById('cover-spin').style.display = 'none';
        document.getElementById('search-result').className = 'animate-bottom';
    }, 3000)
}

/**
 * This method is used to frame the search result template based on the input param data
 * @param {*} searchData Search Result JSON data
 */
function frameTemplate(searchData) {
    var result = [];
    for (var i=0; i < searchData.length; i++) {
        document.getElementById('search-result-count').innerHTML = 'Showing ' + searchData.length + ' results...'
        result += `<div class='search-results'>
                <div class='col-4'>
                    <img src="${searchData[i].image}" alt="${searchData[i].imgAlt}">
                </div>
                <div class='col-8'>
                    <h4>${searchData[i].title}</h4>
                    <p>${searchData[i].description}</p>
                </div>
            </div>`
    }
    document.getElementById('search-result').innerHTML = searchData.length !== 0 ? result : "<h4>No results found..! Please try with other search keyword..!!</h4>";
}
