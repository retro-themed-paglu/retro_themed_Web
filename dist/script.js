function createFlower() {
    const container = document.getElementById('flower-container');
    const flower = document.createElement('div');
    flower.classList.add('flower');

    // Randomize appearance
    const size = Math.random() * 15 + 10 + 'px';
    flower.style.width = size;
    flower.style.height = size;
    
    // Randomize position and duration
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.animationDuration = Math.random() * 3 + 4 + 's'; // Between 4-7 seconds
    flower.style.backgroundColor = ['#FFF0F5', '#CD9FA0', '#F8CCAA'][Math.floor(Math.random() * 3)]; // Uses your palette!

    container.appendChild(flower);

    // Remove flower after animation ends to keep the site fast
    setTimeout(() => {
        flower.remove();
    }, 7000);
}

// Create a new flower every 300ms

// This runs every 10 seconds (10,000 milliseconds)
/*setInterval(() => {
    
    // This loop creates 4 petals at once
    for (let i = 0; i < 4; i++) {
        // We add a tiny delay between each of the 4 petals 
        // so they don't spawn exactly on top of each other
        setTimeout(createFlower, i * 200); 
    }

}, 10000);
// Inside your createFlower function, change this line:
flower.style.animationDuration = Math.random() * 5 + 8 + 's'; // Now takes 8-13 seconds to fall
*/
// 1. First, define the burst logic in a reusable function
function spawnPetalBurst() {
    for (let i = 0; i < 4; i++) {
        // Tiny 200ms delay between each of the 4 petals for a natural look
        setTimeout(createFlower, i * 200); 
    }
}

// 2. TRIGGER IMMEDIATELY (0 seconds)
// This ensures petals appear the moment the site opens
spawnPetalBurst();

// 3. TRIGGER EVERY 10 SECONDS
// This handles the ongoing loop
setInterval(spawnPetalBurst, 10000);