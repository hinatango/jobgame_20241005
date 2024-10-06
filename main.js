
// Event Listeners for Buttons
document.getElementById('learn-button').addEventListener('click', function() {
    learn();
});

document.getElementById('work-button').addEventListener('click', function() {
    work();
});

document.getElementById('fortune-button').addEventListener('click', function() {
    fortune();
});

document.getElementById('quest-board').addEventListener('click', function() {
    showQuestBoard();
});

document.getElementById('item-shop').addEventListener('click', function() {
    showItemShop();
});

document.getElementById('job-center').addEventListener('click', function() {
    showJobCenter();
});

document.getElementById('encyclopedia').addEventListener('click', function() {
    alert('現在準備中です');
});

// Function Definitions for Button Actions
function learn() {
    let experience = parseInt(document.getElementById('experience').innerText);
    let level = parseInt(document.getElementById('level').innerText);
    let stamina = parseInt(document.getElementById('stamina').innerText);

    if (stamina > 0) {
        experience += 1;
        stamina -= 1;

        if (experience >= 10) {
            level += 1;
            experience = 0; // Reset experience after leveling up
        }

        // Update DOM elements
        document.getElementById('experience').innerText = experience;
        document.getElementById('level').innerText = level;
        document.getElementById('stamina').innerText = stamina;

        log(`学習を行いました。経験値: ${experience}, レベル: ${level}`);
    } else {
        log('体力が不足しています。体力を回復してください。');
    }
}

function work() {
    let money = parseInt(document.getElementById('money').innerText);
    let stamina = parseInt(document.getElementById('stamina').innerText);

    if (stamina > 0) {
        money += 1;
        stamina -= 1;

        // Update DOM elements
        document.getElementById('money').innerText = money;
        document.getElementById('stamina').innerText = stamina;

        log(`仕事を行いました。所持金: ${money}`);
    } else {
        log('体力が不足しています。体力を回復してください。');
    }
}

function log(message) {
    document.getElementById('log').innerText = message;
}
