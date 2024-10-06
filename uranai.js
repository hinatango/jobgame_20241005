
function fortune() {
    if (parseInt(document.getElementById('money').innerText) >= 100) {
        if (confirm('100円を使って占いますか？')) {
            let result = Math.floor(Math.random() * 5);
            let message = '';
            let money = parseInt(document.getElementById('money').innerText);
            let stamina = parseInt(document.getElementById('stamina').innerText);

            money -= 100;
            document.getElementById('money').innerText = money;

            switch (result) {
                case 0:
                    message = '大吉: お金と体力の最大値が20増えました！';
                    stamina = Math.min(stamina + 20, 1000);
                    money = Math.min(money + 100, 1000);
                    break;
                case 1:
                    message = '吉: お金か体力の最大値が20増えました！';
                    stamina = Math.min(stamina + 20, 1000);
                    break;
                case 2:
                    message = '中吉: お金と体力の最大値が10増えました！';
                    stamina = Math.min(stamina + 10, 1000);
                    money = Math.min(money + 10, 1000);
                    break;
                case 3:
                    message = '小吉: お金か体力の最大値が10増えました！';
                    stamina = Math.min(stamina + 10, 1000);
                    break;
                case 4:
                    message = '凶: お金か経験値が半減しました！';
                    let experience = Math.floor(parseInt(document.getElementById('experience').innerText) / 2);
                    document.getElementById('experience').innerText = experience;
                    break;
            }

            document.getElementById('money').innerText = money;
            document.getElementById('stamina').innerText = stamina;
            log(message);
        }
    } else {
        log('所持金が足りません。');
    }
}
    