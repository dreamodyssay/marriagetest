// アプリケーションの状態管理
let currentQuestionIndex = 0;
let selectedQuestions = [];
let userAnswers = [];
let happinessScore = 0;
let affectionScore = 0;

// DOM要素の取得
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

// 画面遷移関数
function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

// 配列をシャッフルする関数（Fisher-Yates）
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// 質問をランダムに10問選択（カテゴリ順：出会い→交際→コミュニケーション→価値観）
function selectRandomQuestions() {
    // カテゴリごとに質問を分類
    const categories = {
        '出会い': [],
        '交際': [],
        'コミュニケーション': [],
        '価値観': []
    };
    
    questionsData.forEach(question => {
        if (categories[question.category]) {
            categories[question.category].push(question);
        }
    });
    
    // 各カテゴリから選択する質問数を決定（合計10問）
    // 出会い: 2-3問、交際: 3-4問、コミュニケーション: 2-3問、価値観: 2-3問
    const categoryOrder = ['出会い', '交際', 'コミュニケーション', '価値観'];
    const questionsPerCategory = [
        Math.floor(Math.random() * 2) + 2, // 出会い: 2-3問
        Math.floor(Math.random() * 2) + 3, // 交際: 3-4問
        Math.floor(Math.random() * 2) + 2, // コミュニケーション: 2-3問
        0 // 価値観: 残りの問題数
    ];
    
    // 価値観の問題数を調整（合計が10問になるように）
    const totalSoFar = questionsPerCategory[0] + questionsPerCategory[1] + questionsPerCategory[2];
    questionsPerCategory[3] = 10 - totalSoFar;
    
    // 各カテゴリからランダムに質問を選択
    const selectedQuestions = [];
    categoryOrder.forEach((category, index) => {
        const categoryQuestions = categories[category];
        const numToSelect = questionsPerCategory[index];
        
        // カテゴリ内でシャッフル
        const shuffled = shuffleArray(categoryQuestions);
        
        // 指定された数だけ選択
        selectedQuestions.push(...shuffled.slice(0, numToSelect));
    });
    
    return selectedQuestions;
}

// 診断開始
function startQuiz() {
    // 初期化
    currentQuestionIndex = 0;
    userAnswers = [];
    happinessScore = 0;
    affectionScore = 0;
    
    // ランダムに10問選択
    selectedQuestions = selectRandomQuestions();
    
    // 質問画面に遷移
    showScreen(questionScreen);
    displayQuestion();
}

// 質問を表示
function displayQuestion() {
    const question = selectedQuestions[currentQuestionIndex];
    
    // 進捗バーの更新
    const progress = ((currentQuestionIndex + 1) / selectedQuestions.length) * 100;
    document.getElementById('progress').style.width = progress + '%';
    
    // 質問番号の更新
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    
    // カテゴリと質問文の表示
    document.getElementById('category').textContent = `【${question.category}】`;
    document.getElementById('question-text').textContent = question.question;
    
    // 選択肢の表示
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.innerHTML = `
            <input type="checkbox" id="option${index}" name="option" value="${index}">
            <label for="option${index}">${option.text}</label>
        `;
        optionsContainer.appendChild(optionDiv);
        
        // チェックボックスのイベントリスナー
        const checkbox = optionDiv.querySelector('input');
        checkbox.addEventListener('change', handleOptionChange);
    });
    
    // 次へボタンを無効化
    nextBtn.disabled = true;
}

// 選択肢の変更を処理
function handleOptionChange() {
    const checkedBoxes = document.querySelectorAll('input[name="option"]:checked');
    nextBtn.disabled = checkedBoxes.length === 0;
}

// 次の質問へ
function nextQuestion() {
    // 選択された回答を取得
    const checkedBoxes = document.querySelectorAll('input[name="option"]:checked');
    const selectedIndices = Array.from(checkedBoxes).map(cb => parseInt(cb.value));
    
    // 回答を保存
    userAnswers.push(selectedIndices);
    
    // スコアを計算
    const question = selectedQuestions[currentQuestionIndex];
    selectedIndices.forEach(index => {
        const option = question.options[index];
        happinessScore += option.happiness;
        affectionScore += option.affection;
    });
    
    // 次の質問へ
    currentQuestionIndex++;
    
    if (currentQuestionIndex < selectedQuestions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

// スコアバーを表示する関数
function displayScoreBar(type, score) {
    const maxScore = 20; // 最大スコア
    const percentage = Math.min(Math.abs(score) / maxScore * 50, 50); // 0-50%の範囲
    
    let labelText, scoreText;
    
    if (type === 'happiness') {
        labelText = getScoreText(score, 'happiness');
        const barElement = document.getElementById('happiness-bar');
        const labelElement = document.getElementById('happiness-label');
        const scoreElement = document.getElementById('happiness-score');
        
        // ラベルとスコアを設定
        labelElement.textContent = labelText;
        scoreElement.textContent = `(${score >= 0 ? '+' : ''}${score})`;
        
        // バーの方向とスタイルを設定
        if (score < 0) {
            barElement.classList.add('negative');
            barElement.classList.remove('positive');
            barElement.style.width = percentage + '%';
        } else {
            barElement.classList.add('positive');
            barElement.classList.remove('negative');
            barElement.style.width = percentage + '%';
        }
    } else if (type === 'communication') {
        labelText = getScoreText(score, 'affection');
        const barElement = document.getElementById('communication-bar');
        const labelElement = document.getElementById('communication-label');
        const scoreElement = document.getElementById('communication-score');
        
        // ラベルとスコアを設定
        labelElement.textContent = labelText;
        scoreElement.textContent = `(${score >= 0 ? '+' : ''}${score})`;
        
        // バーの方向とスタイルを設定
        if (score < 0) {
            barElement.classList.add('negative');
            barElement.classList.remove('positive');
            barElement.style.width = percentage + '%';
        } else {
            barElement.classList.add('positive');
            barElement.classList.remove('negative');
            barElement.style.width = percentage + '%';
        }
    }
}

// 結果を表示
function showResult() {
    // 判定結果を取得
    const result = getResult(happinessScore, affectionScore);
    
    // 結果画面に遷移
    showScreen(resultScreen);
    
    // 結果を表示
    document.getElementById('result-title').innerHTML = result.title;
    document.getElementById('result-lead').textContent = result.lead;
    document.getElementById('result-description').innerHTML = result.description;
    
    // 結果タイトルをグローバル変数に保存（Xシェア用）
    window.currentResultTitle = result.title.replace(/<br>/g, '');
    
    // スコアを表示（バー形式）
    displayScoreBar('happiness', happinessScore);
    displayScoreBar('communication', affectionScore);
    
    // トレーニング情報を表示
    if (result.training) {
        document.getElementById('training-title').textContent = result.training.title;
        
        const trainingItemsContainer = document.getElementById('training-items');
        trainingItemsContainer.innerHTML = '';
        
        result.training.items.forEach(item => {
            const trainingItem = document.createElement('div');
            trainingItem.className = 'training-item';
            trainingItem.innerHTML = `
                <h3 class="training-name">${item.name}</h3>
                <p class="training-description">${item.description}</p>
                <a href="${item.link}" class="training-link" target="_blank" rel="noopener noreferrer">詳細を見る →</a>
            `;
            trainingItemsContainer.appendChild(trainingItem);
        });
        
        document.getElementById('training-section').style.display = 'block';
    } else {
        document.getElementById('training-section').style.display = 'none';
    }
}

// 診断をやり直す
function restartQuiz() {
    showScreen(startScreen);
}

// 診断を終了する（誘導モーダルを表示）
function closeResult() {
    showGuidanceModal();
}

// Xでシェアする
function shareOnTwitter() {
    // 診断結果のタイトルを取得（HTMLタグを除去）
    const resultTitle = window.currentResultTitle || '婚活偏差値診断';
    
    // 診断のURL
    const diagnosisUrl = 'https://dreamodyssay.github.io/marriagetest/';
    
    // ハッシュタグ
    const hashtags = '#婚活 #婚活診断 #婚活偏差値診断 #結婚相談所 #仲人';
    
    // 投稿文を作成
    const tweetText = `【あなたの婚活偏差値は】\n${resultTitle}\n\n診断はこちら：${diagnosisUrl}\n\n${hashtags}`;
    
    // Twitter Web Intent URLを作成
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    
    // 新しいウィンドウで開く
    window.open(twitterUrl, '_blank', 'width=550,height=420');
}

// 誘導モーダルを表示
function showGuidanceModal() {
    const guidanceModal = document.getElementById('guidance-modal');
    guidanceModal.classList.add('active');
}

// 誘導モーダルを閉じる
function closeGuidanceModal() {
    const guidanceModal = document.getElementById('guidance-modal');
    guidanceModal.classList.remove('active');
    // モーダルを閉じた後、スタート画面に戻る
    showScreen(startScreen);
}

// 結果画面からの離脱を検知
function setupResultScreenExitDetection() {
    // 結果画面が表示されているかどうかを追跡
    let isOnResultScreen = false;
    let modalShown = false;
    
    // 画面遷移を監視
    const originalShowScreen = showScreen;
    window.showScreen = function(screen) {
        const wasOnResultScreen = isOnResultScreen;
        isOnResultScreen = (screen === resultScreen);
        
        // 結果画面から離れる時はリセット
        if (wasOnResultScreen && !isOnResultScreen) {
            modalShown = false;
        }
        
        originalShowScreen(screen);
    };
    
    // ブラウザのタブを閉じる際の確認（結果画面のみ）
    window.addEventListener('beforeunload', (e) => {
        if (isOnResultScreen && !modalShown) {
            // 標準の確認ダイアログを表示
            e.preventDefault();
            e.returnValue = '';
            return '';
        }
    });
    
    // ブラウザの戻るボタンを押した時の処理
    window.addEventListener('popstate', (e) => {
        if (isOnResultScreen && !modalShown) {
            e.preventDefault();
            modalShown = true;
            showGuidanceModal();
            // 履歴を追加して戻るボタンを無効化
            history.pushState(null, '', location.href);
        }
    });
    
    // 結果画面表示時に履歴エントリを追加
    const originalShowResult = showResult;
    window.showResult = function() {
        originalShowResult();
        modalShown = false;
        // 履歴に新しいエントリを追加
        history.pushState(null, '', location.href);
    };
}

// 誘導モーダルのイベントリスナーを設定
function setupGuidanceModal() {
    const guidanceModal = document.getElementById('guidance-modal');
    const closeBtn = document.getElementById('guidance-modal-close');
    const confirmBtn = document.getElementById('guidance-modal-confirm');
    
    // 閉じるボタン
    closeBtn.addEventListener('click', closeGuidanceModal);
    
    // 確認ボタン
    confirmBtn.addEventListener('click', closeGuidanceModal);
    
    // 背景クリックで閉じる
    guidanceModal.addEventListener('click', (e) => {
        if (e.target === guidanceModal) {
            closeGuidanceModal();
        }
    });
    
    // ESCキーで閉じる
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && guidanceModal.classList.contains('active')) {
            closeGuidanceModal();
        }
    });
}

// ポップアップの表示/非表示機能
function setupInfoPopups() {
    // 幸せ体質度の情報ボタン
    const happinessInfoBtn = document.getElementById('happiness-info-btn');
    const happinessPopup = document.getElementById('happiness-popup');
    const happinessCloseBtn = happinessPopup.querySelector('.info-popup-close');
    
    // コミュニケーションスタイルの情報ボタン
    const communicationInfoBtn = document.getElementById('communication-info-btn');
    const communicationPopup = document.getElementById('communication-popup');
    const communicationCloseBtn = communicationPopup.querySelector('.info-popup-close');
    
    // 幸せ体質度ポップアップを開く
    happinessInfoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        happinessPopup.classList.add('active');
    });
    
    // 幸せ体質度ポップアップを閉じる
    happinessCloseBtn.addEventListener('click', () => {
        happinessPopup.classList.remove('active');
    });
    
    // 背景クリックで閉じる
    happinessPopup.addEventListener('click', (e) => {
        if (e.target === happinessPopup) {
            happinessPopup.classList.remove('active');
        }
    });
    
    // コミュニケーションスタイルポップアップを開く
    communicationInfoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        communicationPopup.classList.add('active');
    });
    
    // コミュニケーションスタイルポップアップを閉じる
    communicationCloseBtn.addEventListener('click', () => {
        communicationPopup.classList.remove('active');
    });
    
    // 背景クリックで閉じる
    communicationPopup.addEventListener('click', (e) => {
        if (e.target === communicationPopup) {
            communicationPopup.classList.remove('active');
        }
    });
    
    // ESCキーで閉じる
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            happinessPopup.classList.remove('active');
            communicationPopup.classList.remove('active');
        }
    });
}

// イベントリスナーの設定
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);

// 診断を終了するボタン
const closeResultBtn = document.getElementById('close-result-btn');
if (closeResultBtn) {
    closeResultBtn.addEventListener('click', closeResult);
}

// Xシェアボタン
const shareTwitterBtn = document.getElementById('share-twitter-btn');
if (shareTwitterBtn) {
    shareTwitterBtn.addEventListener('click', shareOnTwitter);
}

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    showScreen(startScreen);
    setupInfoPopups();
    setupGuidanceModal();
    setupResultScreenExitDetection();
});

// Made with Bob
