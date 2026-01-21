document.addEventListener('DOMContentLoaded', function() {
    const novels = [
        {
            id: "reverie-of-midnight",
            title: "Reverie of Midnight",
            author: "SilentQuill Translations",
            description: "An ancient library reveals secrets only under moonlight.",
            status: "Ongoing",
            chapters: 24,
            rating: 4.8,
            genres: ["Fantasy", "Mystery"]
        },
        {
            id: "embers-of-kingdom",
            title: "Embers of the Old Kingdom",
            author: "Aurelius Vane",
            description: "Scrolls that hold the key to forgotten magic in a fallen empire.",
            status: "Completed",
            chapters: 48,
            rating: 4.9,
            genres: ["Fantasy", "Historical"]
        }
    ];

    displayNovels(novels);
});

function displayNovels(novels) {
    const grid = document.getElementById('novel-list');
    
    novels.forEach(novel => {
        const card = document.createElement('div');
        card.className = 'novel-card';
        card.innerHTML = `
            <span class="wax-seal">${novel.status}</span>
            <h3>${novel.title}</h3>
            <p><em>by ${novel.author}</em></p>
            <p>${novel.description}</p>
            <div style="margin-top: 1rem;">
                <span>${novel.chapters} Chapters</span>
                <span style="margin-left: 1rem;">✦ ${novel.rating}</span>
            </div>
            <div style="margin-top: 0.5rem;">
                ${novel.genres.map(g => `<small style="background: rgba(201,168,106,0.1); padding: 0.2rem 0.5rem; border-radius: 4px; margin-right: 0.5rem;">${g}</small>`).join('')}
            </div>
        `;
        
        card.onclick = () => {
            window.location.href = `novel.html?id=${novel.id}`;
        };
        
        grid.appendChild(card);
    });
}
