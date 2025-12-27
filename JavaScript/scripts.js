    // 1. 要素を取得
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // 2. 初期設定の適用
    // ローカルストレージに設定があればそれを使う、なければOSの設定を確認
    const currentTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (currentTheme === 'dark' || (!currentTheme && systemPrefersDark)) {
        body.classList.add('dark-mode');
        toggleBtn.textContent = '☀️'; // ダークモードなら太陽アイコン
    } else {
        toggleBtn.textContent = '🌙'; // ライトモードなら月アイコン
    }

    // 3. ボタンクリック時の処理
    toggleBtn.addEventListener('click', () => {
        // クラスをつけ外し（トグル）
        body.classList.toggle('dark-mode');

        // 現在の状態を確認して保存＆アイコン変更
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            toggleBtn.textContent = '☀️';
        } else {
            localStorage.setItem('theme', 'light');
            toggleBtn.textContent = '🌙';
        }
    });