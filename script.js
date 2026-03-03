const vocabulary = [
    { hiragana: "つけます", romaji: "tsukemasu", kanji: "つけます", sinhala: "ස්විචය දානවා, පත්තු කරනවා, දල්වනවා" },
    { hiragana: "けします", romaji: "keshimasu", kanji: "消します", sinhala: "නිවනවා" },
    { hiragana: "あけます", romaji: "akemasu", kanji: "開けます", sinhala: "අරිනවා" },
    { hiragana: "しめます", romaji: "shimemasu", kanji: "閉めます", sinhala: "වහනවා" },
    { hiragana: "いそぎます", romaji: "isogimasu", kanji: "急ぎます", sinhala: "ඉක්මන් කරනවා" },
    { hiragana: "まちます", romaji: "machimasu", kanji: "待ちます", sinhala: "බලා සිටිනවා" },
    { hiragana: "もちます", romaji: "mochimasu", kanji: "持ちます", sinhala: "අල්ල ගන්නවා" },
    { hiragana: "とります", romaji: "torimasu", kanji: "取ります", sinhala: "ගන්නවා, ළඟ ඇති දෙයක් පාස් කරනවා" },
    { hiragana: "てつだいます", romaji: "tetsudaimasu", kanji: "手伝います", sinhala: "උදව් කරනවා" },
    { hiragana: "よびます", romaji: "yobimasu", kanji: "呼びます", sinhala: "අඬගසනවා, කැඳවනවා" },
    { hiragana: "はなします", romaji: "hanashimasu", kanji: "話します", sinhala: "කථා කරනවා" },
    { hiragana: "つかいます", romaji: "tsukaimasu", kanji: "使います", sinhala: "භාවිතා කරනවා" },
    { hiragana: "とめます", romaji: "tomemasu", kanji: "止めます", sinhala: "නවත්වනවා" },
    { hiragana: "みせます", romaji: "misemasu", kanji: "見せます", sinhala: "පෙන්වනවා" },
    { hiragana: "おしえます", romaji: "oshiemasu", kanji: "教えます", sinhala: "කියලා දෙනවා, දන්වනවා" },
    { hiragana: "あそびます", romaji: "asobimasu", kanji: "遊びます", sinhala: "සෙල්ලම් කරනවා, විනෝද වෙනවා" },
    { hiragana: "およぎます", romaji: "oyogimasu", kanji: "泳ぎます", sinhala: "පීනනවා" },
    { hiragana: "むかえます", romaji: "mukaemasu", kanji: "迎えます", sinhala: "පිළිගන්නවා, හමුවෙන්න යනවා" },
    { hiragana: "つかれます", romaji: "tsukaremasu", kanji: "疲れます", sinhala: "වෙහෙසෙනවා, මහන්සි වෙනවා" },
    { hiragana: "けっこんします", romaji: "kekkonshimasu", kanji: "結婚します", sinhala: "විවාහ වෙනවා" },
    { hiragana: "かいものします", romaji: "kaimonoshimasu", kanji: "買い物します", sinhala: "මිල දී (බඩු) ගන්නවා, සාප්පු යනවා" },
    { hiragana: "しょくじします", romaji: "shokujishimasu", kanji: "食事します", sinhala: "කෑම කනවා" },
    { hiragana: "さんぽします", romaji: "sanposhimasu", kanji: "散歩します", sinhala: "ඇවිදින්න යනවා" },
    { hiragana: "たいへん", romaji: "taihen", kanji: "大変", sinhala: "අමාරු, දුෂ්කර, අපහසු" }
];

const vocabListContainer = document.getElementById('vocab-list-container');

// Only run after DOM content is loaded just in case, though script is at the end
document.addEventListener('DOMContentLoaded', () => {
    vocabulary.forEach(word => {
        const jpText = word.kanji !== word.hiragana ? `${word.kanji} (${word.hiragana})` : word.hiragana;
        const item = document.createElement('div');
        item.className = 'vocab-item';
        item.innerHTML = `
            <div class="vocab-kanji">${jpText}</div>
            <div class="vocab-romaji">${word.romaji}</div>
            <div class="vocab-sinhala">${word.sinhala}</div>
        `;
        vocabListContainer.appendChild(item);
    });
});
