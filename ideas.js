document.getElementById('ideaForm').addEventListener('submit', function(event){
    event.preventDefault();

    const ideaInput = document.getElementById('ideaInput');
    const usernameInput = document.getElementById('usernameInput')

    const username = usernameInput.value.trim();
    const ideaText = ideaInput.value.trim();

    if(!username || !ideaText){
        alert("Give an idea NOW!!!");
        return;
    }

    const formattedIdea = `${username}: ${ideaText}`;

    const ideas = JSON.parse(localStorage.getItem('ideas')) || [];
    ideas.push(formattedIdea);
    localStorage.setItem('ideas', JSON.stringify(ideas));

    displayIdeas();

    ideaInput.value = '';
    usernameInput.value = '';
});

function displayIdeas(){
    const ideasArea = document.getElementById('ideasArea')
    ideasArea.innerHTML = '';

    const ideas = JSON.parse(localStorage.getItem('ideas')) || [];
    ideas.forEach(idea => {
        const div = document.createElement('div');
        div.ClassName = 'idea'
        div.textContent = idea;
        ideasArea.appendChild(div);
    });        
    };

displayIdeas();