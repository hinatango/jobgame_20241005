
// Placeholder for action-related functions
function learn() {
    let experience = parseInt(document.getElementById('experience').innerText);
    let level = parseInt(document.getElementById('level').innerText);
    let stamina = parseInt(document.getElementById('stamina').innerText);
    let role = document.getElementById('role').innerText;

    if (stamina > 0) {
        if (experience < 1000) {
            experience += 1;
            stamina -= 1;

            if (experience % 10 === 0) {
                level += 1;

                if (level === 100) {
                    if (role === "新米") {
                        role = "中堅";
                        level = 0;
                        log("職業が新米から中堅にグレードアップしました！");
                    } else if (role === "中堅") {
                        role = "ベテラン";
                        level = 0;
                        log("職業が中堅からベテランにグレードアップしました！");
                    }
                }

                log(`職業レベルが${level}に上がりました！`);
            }

            // Update DOM elements
            document.getElementById('experience').innerText = experience;
            document.getElementById('level').innerText = level;
            document.getElementById('role').innerText = role;
            document.getElementById('stamina').innerText = stamina;

            if (stamina <= 10) {
                log('体力が少なくなっています。体力を回復してください。');
            }
        } else {
            log('経験値が最大値に達しました。これ以上増加しません。');
        }
    } else {
        log('体力が不足しています。体力を回復してください。');
    }
}

function work() {
    let money = parseInt(document.getElementById('money').innerText);
    let stamina = parseInt(document.getElementById('stamina').innerText);

    if (stamina > 0) {
        if (money < 1000) {
            money += 1;
            stamina -= 1;

            // Update DOM elements
            document.getElementById('money').innerText = money;
            document.getElementById('stamina').innerText = stamina;

            log(`仕事を行いました。所持金: ${money}`);
        } else {
            log('所持金が最大値に達しました。これ以上増加しません。');
        }
    } else {
        log('体力が不足しています。体力を回復してください。');
    }
}
    