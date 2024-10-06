
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

// Debug mode to set experience, money, and stamina to max values
function activateDebugMode() {
    document.getElementById('experience').innerText = 1000;
    document.getElementById('money').innerText = 1000;
    document.getElementById('stamina').innerText = 100;
    log('デバッグモードを有効にしました。全ステータスが最大値になりました。');
}
    