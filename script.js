// 1. Toggling the Forms
function showFilter() {
    document.getElementById('filterContent').style.display = 'block';
    document.getElementById('newContent').style.display = 'none';
}

function showAddNew() {
    document.getElementById('filterContent').style.display = 'none';
    document.getElementById('newContent').style.display = 'flex'; // It was flex in CSS
}

// 2. Filtering Articles
function filterArticles() {
    // Get checkbox states
    const showOpinion = document.getElementById('opinionCheckbox').checked;
    const showRecipe = document.getElementById('recipeCheckbox').checked;
    const showUpdate = document.getElementById('updateCheckbox').checked;

    // Get all articles
    const articles = document.querySelectorAll('article');

    articles.forEach(article => {
        // Check classList to identify type
        if (article.classList.contains('opinion')) {
            article.style.display = showOpinion ? 'block' : 'none';
        } else if (article.classList.contains('recipe')) {
            article.style.display = showRecipe ? 'block' : 'none';
        } else if (article.classList.contains('update')) {
            article.style.display = showUpdate ? 'block' : 'none';
        }
    });
}

// 3. Adding New Articles
function addNewArticle() {
    // Get values
    const title = document.getElementById('inputHeader').value;
    const text = document.getElementById('inputArticle').value;
    
    // Get Type (Radio buttons)
    let type = '';
    if (document.getElementById('opinionRadio').checked) type = 'opinion';
    else if (document.getElementById('recipeRadio').checked) type = 'recipe';
    else if (document.getElementById('lifeRadio').checked) type = 'update';

    // Validation
    if (!title || !text || !type) {
        alert("Please fill in all fields.");
        return;
    }

    // Create Article Element
    const newArticle = document.createElement('article');
    newArticle.classList.add(type);
    
    // Marker Text mapping (Life Update = Update)
    let markerText = '';
    if (type === 'opinion') markerText = 'Opinion';
    if (type === 'recipe') markerText = 'Recipe';
    if (type === 'update') markerText = 'Update';

    // Set Inner HTML
    newArticle.innerHTML = `
        <span class="marker">${markerText}</span>
        <h2>${title}</h2>
        <p>${text}</p>
        <p><a href="moreDetails.html">Read more...</a></p>
    `;

    // Append to list
    document.getElementById('articleList').appendChild(newArticle);

    // Reset Form
    document.getElementById('newContent').reset();
    
    // Switch back to filter view (optional UX choice, or just stay)
    showFilter(); 
    
    // Re-run filter to ensure visibility matches current checkboxes
    filterArticles();
}
