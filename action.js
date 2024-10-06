
function learn() {
    let experience = parseInt(document.getElementById('experience').innerText);
    let level = parseInt(document.getElementById('level').innerText);
    let stamina = parseInt(document.getElementById('stamina').innerText);

    if (stamina > 0 && experience < 1000) {
        experience += 1;
        stamina -= 1;

        document.getElementById('experience').innerText = experience;
        document.getElementById('stamina').innerText = stamina;

        // Display the increase in red text temporarily
        let expIncrease = document.getElementById('exp-increase');
        expIncrease.innerText = '+1';
        setTimeout(() => expIncrease.innerText = '', 1000);

        // Level up every 10 experience points
        if (experience % 10 === 0) {
            level += 1;
            document.getElementById('level').innerText = level;

            if (level === 100) {
                let role = document.getElementById('role');
                if (role.innerText === '新米') {
                    role.innerText = '中堅';
                } else if (role.innerText === '中堅') {
                    role.innerText = 'ベテラン';
                }
                document.getElementById('level').innerText = 0;
                log(`職業が${role.innerText}にグレードアップしました！`);
            } else {
                log(`職業レベルが${level}に上がりました！`);
            }
        }
    } else if (experience >= 1000) {
        log('経験値が最大値に達しています。');
    } else {
        log('体力が足りません。');
    }
}

function work() {
    let money = parseInt(document.getElementById('money').innerText);
    let stamina = parseInt(document.getElementById('stamina').innerText);

    if (stamina > 0 && money < 1000) {
        money += 1;
        stamina -= 1;

        document.getElementById('money').innerText = money;
        document.getElementById('stamina').innerText = stamina;

        // Display the increase in red text temporarily
        let moneyIncrease = document.getElementById('money-increase');
        moneyIncrease.innerText = '+1';
        setTimeout(() => moneyIncrease.innerText = '', 1000);
    } else if (money >= 1000) {
        log('所持金が最大値に達しています。');
    } else {
        log('体力が足りません。');
    }
}
    