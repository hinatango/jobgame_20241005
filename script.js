
let level = 1;
let experience = 0;
let money = 0;
let role = "新米無職";
let job = "無職";

function handleClick() {
    experience++;
    updateStatus();
    logAction("経験値が1増加しました。");

    // レベルアップ処理
    if (experience >= 100) {
        levelUp();
    }
}

function levelUp() {
    experience = 0;
    level++;

    if (level % 100 === 0) {
        upgradeRole();
    }

    updateStatus();
    logAction("レベルアップしました！");
}

function upgradeRole() {
    if (job === "無職") {
        if (role === "新米無職") {
            role = "中堅無職";
        } else if (role === "中堅無職") {
            role = "ベテラン無職";
        } else if (role === "ベテラン無職") {
            // 転職可能にする
            logAction("転職が可能になりました。ハローワークに行きましょう！");
        }
    }
}

function updateStatus() {
    document.getElementById("status").innerText = `職業: ${role} | レベル: ${level} | 所持金: ${money}円 | 経験値: ${experience}`;
}

function logAction(message) {
    const logElement = document.getElementById("log");
    const newLog = document.createElement("p");
    newLog.textContent = message;
    logElement.appendChild(newLog);
    logElement.scrollTop = logElement.scrollHeight;
}

function openShop() {
    alert("アイテムショップはまだ準備中です。");
}

function openJobCenter() {
    if (role === "ベテラン無職") {
        // 転職処理
        job = "フリーター";
        role = "新米フリーター";
        level = 1;
        experience = 0;
        logAction("フリーターに転職しました。毎秒1クリックの自動効果が発動します。");
        startAutoClick();
    } else {
        alert("まだ転職することができません。");
    }
    updateStatus();
}

function openEncyclopedia() {
    alert("図鑑はまだ準備中です。");
}

function startAutoClick() {
    setInterval(() => {
        if (job === "フリーター") {
            experience++;
            updateStatus();
            logAction("自動クリックで経験値が1増加しました。");

            if (experience >= 100) {
                levelUp();
            }
        }
    }, 1000);
}
