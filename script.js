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
    { hiragana: "たいへん", romaji: "taihen", kanji: "大変", sinhala: "අමාරු, දුෂ්කර, අපහසු" },
    { hiragana: "おきます", romaji: "okimasu", kanji: "起きます", sinhala: "අවදිවනවා" },
    { hiragana: "ねます", romaji: "nemasu", kanji: "寝ます", sinhala: "නිදා ගන්නවා, නින්දට යනවා" },
    { hiragana: "はたらきます", romaji: "hatarakimasu", kanji: "働きます", sinhala: "වැඩ කරනවා" },
    { hiragana: "やすみます", romaji: "yasumimasu", kanji: "休みます", sinhala: "විවේක ගන්නවා, නිවාඩු ගන්නවා" },
    { hiragana: "べんきょうします", romaji: "benkyōshimasu", kanji: "勉強します", sinhala: "ඉගෙන ගන්නවා, පාඩම් කරනවා" },
    { hiragana: "おわります", romaji: "owarimasu", kanji: "終わります", sinhala: "අවසන් වෙනවා" },
    { hiragana: "いきます", romaji: "ikimasu", kanji: "行きます", sinhala: "යනවා" },
    { hiragana: "きます", romaji: "kimasu", kanji: "来ます", sinhala: "එනවා" },
    { hiragana: "かえります", romaji: "kaerimasu", kanji: "帰ります", sinhala: "ආපහු යනවා (ගෙදර යනවා, සමාගමට ආපහු යනවා)" },
    { hiragana: "たべます", romaji: "tabemasu", kanji: "食べます", sinhala: "කනවා" },
    { hiragana: "のみます", romaji: "nomimasu", kanji: "飲みます", sinhala: "බොනවා" },
    { hiragana: "すいます [たばこを〜]", romaji: "suimasu", kanji: "吸います [たばこを〜]", sinhala: "බොනවා, පානය කරනවා [සිගරැට්ටු, දුම්〜]" },
    { hiragana: "みます", romaji: "mimasu", kanji: "見ます", sinhala: "බලනවා" },
    { hiragana: "ききます", romaji: "kikimasu", kanji: "聞きます", sinhala: "අහනවා" },
    { hiragana: "よみます", romaji: "yomimasu", kanji: "読みます", sinhala: "කියවනවා" },
    { hiragana: "かきます", romaji: "kakimasu", kanji: "書きます", sinhala: "ලියනවා (かきます යන පදයෙන් චිත්‍රයක් අඳිනවා යන්නෙහි අර්ථයක් ද දැක්වේ. එම අර්ථය දැක්වීම සඳහා මෙම පොතෙහි හිරගනා අකුරුවලින් ලියනු ලැබේ)" },
    { hiragana: "かいます", romaji: "kaimasu", kanji: "買います", sinhala: "මිලදී ගන්නවා" },
    { hiragana: "とります [しゃしんを〜]", romaji: "torimasu", kanji: "撮ります [写真を〜]", sinhala: "ගන්නවා [පිංතූර, ෆොටෝ〜]" },
    { hiragana: "します", romaji: "shimasu", kanji: "します", sinhala: "කරනවා" },
    { hiragana: "あいます [ともだちに〜]", romaji: "aimasu", kanji: "会います [友達に〜]", sinhala: "හමු වෙනවා [යහළුවෙකු〜]" },
    { hiragana: "きります", romaji: "kirimasu", kanji: "切ります", sinhala: "කපනවා" },
    { hiragana: "おくります", romaji: "okurimasu", kanji: "送ります", sinhala: "තැපෑලෙන් යවනවා/එවනවා" },
    { hiragana: "あげます", romaji: "agemasu", kanji: "あげます", sinhala: "ලබා දෙනවා" },
    { hiragana: "もらいます", romaji: "moraimasu", kanji: "もらいます", sinhala: "ලැබෙනවා" },
    { hiragana: "かします", romaji: "kashimasu", kanji: "貸します", sinhala: "ණයට හෝ තාවකාලිකව දෙනවා" },
    { hiragana: "かります", romaji: "karimasu", kanji: "借ります", sinhala: "තාවකාලිකව ඉල්ලා ගන්නවා, ණයට ගන්නවා" },
    { hiragana: "おしえます", romaji: "oshiemasu", kanji: "教えます", sinhala: "උගන්වනවා" },
    { hiragana: "ならいます", romaji: "naraimasu", kanji: "習います", sinhala: "ඉගෙනගන්නවා" },
    { hiragana: "かけます [でんわを〜]", romaji: "kakemasu", kanji: "かけます [電話を〜]", sinhala: "ගන්නවා [ටෙලිෆෝන් කෝල් එකක්〜]" },
    { hiragana: "わかります", romaji: "wakarimasu", kanji: "わかります", sinhala: "තේරෙනවා" },
    { hiragana: "あります", romaji: "arimasu", kanji: "あります", sinhala: "තියෙනවා" },
    { hiragana: "あります", romaji: "arimasu", kanji: "あります", sinhala: "තිබෙනවා (අප්‍රාණික වස්තු සඳහා යෙදේ)" },
    { hiragana: "います", romaji: "imasu", kanji: "います", sinhala: "ඉන්නවා (සප්‍රාණික වස්තු සඳහා යෙදේ)" },
    { hiragana: "います [こどもが〜]", romaji: "imasu", kanji: "います [子供が〜]", sinhala: "ඉන්නවා [දරුවෙකු〜]" },
    { hiragana: "います [にほんに〜]", romaji: "imasu", kanji: "います [日本に〜]", sinhala: "රැඳී සිටිනවා [ජපානයේ〜]" },
    { hiragana: "かかります", romaji: "kakarimasu", kanji: "かかります", sinhala: "වැය වෙනවා (මුදල් හෝ කාලය සම්බන්ධයෙන් යෙදෙන පදයක්)" },
    { hiragana: "やすみます [かいしゃを〜]", romaji: "yasumimasu", kanji: "休みます [会社を〜]", sinhala: "නිවාඩු ගන්නවා [සමාගමෙන්〜]" },
    { hiragana: "つかれます", romaji: "tsukaremasu", kanji: "疲れます", sinhala: "වෙහෙසෙනවා, මහන්සි වෙනවා (මහන්සියක් දැනෙන තත්ත්වය දැක්වීම සඳහා つかれました වැනි අතීත කාල රූපය යෙදේ)" },
    { hiragana: "かいものします", romaji: "kaimonoshimasu", kanji: "買い物します", sinhala: "මිල දී (බඩු) ගන්නවා, සාප්පු සවාරි යනවා" },
    { hiragana: "さんぽします [こうえんを〜]", romaji: "sanposhimasu", kanji: "散歩します [公園を〜]", sinhala: "ඇවිදින්න යනවා [උද්‍යානයේ 〜]" },
    { hiragana: "のどが かわきます", romaji: "nodoga kawakimasu", kanji: "のどが かわきます", sinhala: "උගුර වෙලෙනවා. (තිබහින් සිටින තත්ත්වය දැක්වීම සඳහා のどが かわきました වැනි අතීත කාල රූපය යෙදේ)" },
    { hiragana: "おなかが すきます", romaji: "onakaga sukimasu", kanji: "おなかが すきます", sinhala: "බඩගිනියි. (බඩගින්නෙන් සිටින තත්ත්වය දැක්වීම සඳහා おなかが すきました වැනි අතීත කාල රූපය යෙදේ)" },
    { hiragana: "おしえます [じゅうしょを〜]", romaji: "oshiemasu", kanji: "教えます [住所を〜]", sinhala: "කියලා දෙනවා, දන්වනවා [ලිපිනය〜]" },
    { hiragana: "すわります", romaji: "suwarimasu", kanji: "座ります", sinhala: "ඉඳ ගන්නවා" },
    { hiragana: "たちます", romaji: "tachimasu", kanji: "立ちます", sinhala: "සිට ගන්නවා" },
    { hiragana: "はいります [きっさてんに〜]", romaji: "hairimasu", kanji: "入ります [喫茶店に〜]", sinhala: "ඇතුළු වෙනවා [තේ කඩේට〜]" },
    { hiragana: "でます [きっさてんを〜]", romaji: "demasu", kanji: "出ます [喫茶店を〜]", sinhala: "පිටත් වෙනවා [තේ කඩෙන්〜]" },
    { hiragana: "ふります [あめが〜]", romaji: "furimasu", kanji: "降ります [雨が〜]", sinhala: "වහිනවා [වැස්ස〜]" },
    { hiragana: "コピーします", romaji: "kopīshimasu", kanji: "コピーします", sinhala: "ෆොටෝ කොපි ගහනවා" },
    { hiragana: "おきます", romaji: "okimasu", kanji: "置きます", sinhala: "තබනවා" },
    { hiragana: "つくります", romaji: "tsukurimasu", kanji: "作ります、造ります", sinhala: "හදනවා" },
    { hiragana: "うります", romaji: "urimasu", kanji: "売ります", sinhala: "විකුණනවා" },
    { hiragana: "しります", romaji: "shirimasu", kanji: "知ります", sinhala: "දැනගන්නවා" },
    { hiragana: "すみます", romaji: "sumimasu", kanji: "住みます", sinhala: "පදිංචි වෙනවා" },
    { hiragana: "けんきゅうします", romaji: "kenkyūshimasu", kanji: "研究します", sinhala: "පර්යේෂණ කරනවා" },
    { hiragana: "おもいだします", romaji: "omoidashimasu", kanji: "思い出します", sinhala: "සිහිපත් වෙනවා, මතක් වෙනවා" },
    { hiragana: "いらっしゃいます", romaji: "irasshaimasu", kanji: "いらっしゃいます", sinhala: "සිටිනවා (います යන්නේ ගෞරවාර්ථ රූපය)" },
    { hiragana: "のります [でんしゃに〜]", romaji: "norimasu", kanji: "乗ります [電車に〜]", sinhala: "නගිනවා [දුම්රියට〜]" },
    { hiragana: "おります [でんしゃを〜]", romaji: "orimasu", kanji: "降ります [電車を〜]", sinhala: "බහිනවා [දුම්රියෙන්〜]" },
    { hiragana: "のりかえます", romaji: "norikaemasu", kanji: "乗り換えます", sinhala: "මාරු වෙනවා (දුම්රියකින් දුම්රියකට)" },
    { hiragana: "あびます [シャワーを〜]", romaji: "abimasu", kanji: "浴びます [シャワーを〜]", sinhala: "නානවා [ෂවර් එකෙන්〜]" },
    { hiragana: "いれます", romaji: "iremasu", kanji: "入れます", sinhala: "(ඇතුළට) දානවා" },
    { hiragana: "だします", romaji: "dashimasu", kanji: "出します", sinhala: "පිටට දමනවා" },
    { hiragana: "おろします [おかねを〜]", romaji: "oroshimasu", kanji: "下ろします [お金を〜]", sinhala: "(ගිණුමෙන් සල්ලි) ගන්නවා" },
    { hiragana: "はいります [だいがくに〜]", romaji: "hairimasu", kanji: "入ります [大学に〜]", sinhala: "ඇතුල් වෙනවා [විශ්ව විද්‍යාලයට〜]" },
    { hiragana: "でます [だいがくを〜]", romaji: "demasu", kanji: "出ます [大学を〜]", sinhala: "(උපාධියක් ලබා) පිට වෙනවා [විශ්ව විද්‍යාලයෙන්〜]" },
    { hiragana: "おします", romaji: "oshimasu", kanji: "押します", sinhala: "තල්ලු කරනවා, ඔබනවා" },
    { hiragana: "はじめます", romaji: "hajimemasu", kanji: "始めます", sinhala: "පටන් ගන්නවා" },
    { hiragana: "けんがくします", romaji: "kengakushimasu", kanji: "見学します", sinhala: "(දැනුම ලබා ගැනීම සඳහා) නැරඹීමට යනවා" },
    { hiragana: "でんわします", romaji: "denwashimasu", kanji: "電話します", sinhala: "දුරකථන ඇමතුම් දෙනවා" },
    { hiragana: "おぼえます", romaji: "oboemasu", kanji: "覚えます", sinhala: "කට පාඩම් කරනවා" },
    { hiragana: "わすれます", romaji: "wasuremasu", kanji: "忘れます", sinhala: "අමතක වෙනවා, අමතක කරනවා" },
    { hiragana: "なくします", romaji: "nakushimasu", kanji: "なくします", sinhala: "නැති වෙනවා, නැති කරගන්නවා" },
    { hiragana: "はらいます", romaji: "haraimasu", kanji: "払います", sinhala: "(සල්ලි) ගෙවනවා" },
    { hiragana: "かえします", romaji: "kaeshimasu", kanji: "返します", sinhala: "ආපසු දෙනවා" },
    { hiragana: "でかけます", romaji: "dekakemasu", kanji: "出かけます", sinhala: "පිටත් වෙනවා" },
    { hiragana: "ぬぎます", romaji: "nugimasu", kanji: "脱ぎます", sinhala: "(ඇඳුම්, සපත්තු වැනි දෙයක්) ගලවනවා" },
    { hiragana: "もっていきます", romaji: "motteikimasu", kanji: "持って行きます", sinhala: "(යම් දෙයක්) අරන් යනවා" },
    { hiragana: "もってきます", romaji: "mottekimasu", kanji: "持って来ます", sinhala: "(යම් දෙයක්) අරන් එනවා" },
    { hiragana: "しんぱいします", romaji: "shinpaishimasu", kanji: "心配します", sinhala: "කනස්සල්ලට පත්වෙනවා" },
    { hiragana: "ざんぎょうします", romaji: "zangyōshimasu", kanji: "残業します", sinhala: "අතිකාල වැඩ කරනවා" },
    { hiragana: "しゅっちょうします", romaji: "shutchōshimasu", kanji: "出張します", sinhala: "රාජකාරී ගමනක් යනවා" },
    { hiragana: "のみます [くすりを〜]", romaji: "nomimasu", kanji: "飲みます [薬を〜]", sinhala: "බොනවා [බෙහෙත්]" },
    { hiragana: "はいります [おふろに〜]", romaji: "hairimasu", kanji: "入ります [お風呂に〜]", sinhala: "[නාන බේසමට බැස] නානවා" },
    { hiragana: "できます", romaji: "dekimasu", kanji: "できます", sinhala: "කිරීමට හැකි, කිරීමට පුළුවන්" },
    { hiragana: "あらいます", romaji: "araimasu", kanji: "洗います", sinhala: "සෝදනවා" },
    { hiragana: "ひきます", romaji: "hikimasu", kanji: "弾きます", sinhala: "වාදනය කරනවා (තත් සහිත තූර්ය භාණ්ඩයක්)" },
    { hiragana: "うたいます", romaji: "utaimasu", kanji: "歌います", sinhala: "ගයනවා" },
    { hiragana: "あつめます", romaji: "atsumemasu", kanji: "集めます", sinhala: "එකතු කරනවා, රැස් කරනවා" },
    { hiragana: "すてます", romaji: "sutemasu", kanji: "捨てます", sinhala: "විසි කරනවා, ඉවත් කරනවා" },
    { hiragana: "かえます", romaji: "kaemasu", kanji: "換えます", sinhala: "මාරු කරනවා, හුවමාරු කරනවා" },
    { hiragana: "うんてんします", romaji: "untenshimasu", kanji: "運転します", sinhala: "(රියක්) පදවනවා, එලවනවා" },
    { hiragana: "よやくします", romaji: "yoyakushimasu", kanji: "予約します", sinhala: "කලින් (ආසනයක්) වෙන් කර ගන්නවා" },
    { hiragana: "ピアノ", romaji: "piano", kanji: "ピアノ", sinhala: "පියානෝව" },
    { hiragana: "のぼります", romaji: "noborimasu", kanji: "登ります、上ります", sinhala: "නගිනවා" },
    { hiragana: "とまります [ホテルに〜]", romaji: "tomarimasu", kanji: "泊まります [ホテルに〜]", sinhala: "නවතින්නවා [හෝටලයක〜]" },
    { hiragana: "そうじします", romaji: "sōjishimasu", kanji: "掃除します", sinhala: "සුද්ද කරනවා, පිරිසිදු කරනවා" },
    { hiragana: "せんたくします", romaji: "sentakushimasu", kanji: "洗濯します", sinhala: "රෙදි සෝදනවා" },
    { hiragana: "なります", romaji: "narimasu", kanji: "なります", sinhala: "වෙනවා, පත් වෙනවා" },
    { hiragana: "おもいます", romaji: "omoimasu", kanji: "思います", sinhala: "සිතනවා" },
    { hiragana: "いいます", romaji: "iimasu", kanji: "言います", sinhala: "කියනවා" },
    { hiragana: "かちます", romaji: "kachimasu", kanji: "勝ちます", sinhala: "දිනනවා" },
    { hiragana: "まけます", romaji: "makemasu", kanji: "負けます", sinhala: "පරදිනවා" },
    { hiragana: "あります [おまつりが〜]", romaji: "arimasu", kanji: "あります [お祭りが〜]", sinhala: "[උත්සවයක්] පවතිනවා" },
    { hiragana: "やくに たちます", romaji: "yakuni tachimasu", kanji: "役に 立ちます", sinhala: "ප්‍රයෝජනවත් වෙනවා, වැඩදායක වෙනවා" },
    { hiragana: "うごきます", romaji: "ugokimasu", kanji: "動きます", sinhala: "ගමන් කරනවා" },
    { hiragana: "やめます [かいしゃを〜]", romaji: "yamemasu", kanji: "辞めます [会社を〜]", sinhala: "ඉවත් වෙනවා [සමාගමෙන්〜]" },
    { hiragana: "きを つけます", romaji: "kio tsukemasu", kanji: "気を つけます", sinhala: "ප්‍රවේශම් වෙනවා" },
    { hiragana: "りゅうがくします", romaji: "ryūgakushimasu", kanji: "留学します", sinhala: "අධ්‍යාපනය සඳහා විදේශ ගත කරනවා" },
    { hiragana: "きます", romaji: "kimasu", kanji: "着ます", sinhala: "(කමිසය) ඇඳ ගන්නවා" },
    { hiragana: "はきます", romaji: "hakimasu", kanji: "はきます", sinhala: "(සපත්තු) දමා ගන්නවා, ඇඳ ගන්නවා (මේස්, සාය, කලිසම වැනි පහල සිට ඉහලට අඳින ඇඳුම් සහ සපත්තු, සෙරෙප්පු සඳහා යෙදේ)" },
    { hiragana: "かぶります", romaji: "kaburimasu", kanji: "かぶります", sinhala: "(තොප්පිය) දමා ගන්නවා (ඔලුවට දමන දෙය සඳහා යෙදේ)" },
    { hiragana: "かけます [めがねを〜]", romaji: "kakemasu", kanji: "かけます [眼鏡を〜]", sinhala: "පළඳිනවා [උපැස් යුවල〜]" },
    { hiragana: "します [ネクタイを〜]", romaji: "shimasu", kanji: "します [ネクタイを〜]", sinhala: "අඳිනවා [ටයිපටිය〜]" },
    { hiragana: "うまれます", romaji: "umaremasu", kanji: "生まれます", sinhala: "උපදිනවා" },
    { hiragana: "ききます [せんせいに〜]", romaji: "kikimasu", kanji: "聞きます [先生に〜]", sinhala: "අහනවා [ගුරුවරයාගෙන්〜]" },
    { hiragana: "まわします", romaji: "mawashimasu", kanji: "回します", sinhala: "කරකවනවා" },
    { hiragana: "ひきます", romaji: "hikimasu", kanji: "引きます", sinhala: "අදිනවා" },
    { hiragana: "かえます", romaji: "kaemasu", kanji: "変えます", sinhala: "වෙනස් කරනවා, මාරු කරනවා" },
    { hiragana: "さわります [ドアに〜]", romaji: "sawarimasu", kanji: "触ります [ドアに〜]", sinhala: "ස්පර්ශ කරනවා, අල්ලනවා [දොර〜]" },
    { hiragana: "でます [おつりが〜]", romaji: "demasu", kanji: "出ます [お釣りが〜]", sinhala: "එළියට එනවා [ඉතුරු සල්ලි〜]" },
    { hiragana: "あるきます", romaji: "arukimasu", kanji: "歩きます", sinhala: "ඇවිදිනවා" },
    { hiragana: "わたります [はしを〜]", romaji: "watarimasu", kanji: "渡ります [橋を〜]", sinhala: "එතෙර වෙනවා [පාලමෙන්〜]" },
    { hiragana: "まがります [みぎへ〜]", romaji: "magarimasu", kanji: "曲がります [右へ〜]", sinhala: "හැරෙනවා [දකුණට〜]" },
    { hiragana: "くれます", romaji: "kuremasu", kanji: "くれます", sinhala: "(මට) දෙනවා" },
    { hiragana: "なおします", romaji: "naoshimasu", kanji: "直します", sinhala: "හරිගස්සනවා, නිවරදි කරනවා" },
    { hiragana: "つれて いきます", romaji: "tsurete ikimasu", kanji: "連れて 行きます", sinhala: "කැටුව යනවා, කැඳවා ගෙන යනවා" },
    { hiragana: "つれて きます", romaji: "tsurete kimasu", kanji: "連れて 来ます", sinhala: "කැටුව එනවා, කැඳවා ගෙන එනවා" },
    { hiragana: "おくります [ひとを〜]", romaji: "okurimasu", kanji: "送ります [人を〜]", sinhala: "ඇරලනවා [යම් කෙනෙකු〜]" },
    { hiragana: "しょうかいします", romaji: "shōkaishimasu", kanji: "紹介します", sinhala: "හඳුන්වනවා" },
    { hiragana: "あんないします", romaji: "annaishimasu", kanji: "案内します", sinhala: "(යම් ස්ථානයක්) පෙන්වනවා, හඳුන්වා දෙනවා" },
    { hiragana: "せつめいします", romaji: "setsumeishimasu", kanji: "説明します", sinhala: "විස්තර කරනවා" },
    { hiragana: "かんがえます", romaji: "kangaemasu", kanji: "考えます", sinhala: "කල්පනා කරනවා, සැලකිල්ලට ගන්නවා" },
    { hiragana: "つきます", romaji: "tsukimasu", kanji: "着きます", sinhala: "(දුම්රිය පොළට) පැමිණෙනවා" },
    { hiragana: "とります [としを〜]", romaji: "torimasu", kanji: "取ります [年を〜]", sinhala: "වයසට යනවා" },
    { hiragana: "たります", romaji: "tarimasu", kanji: "足ります", sinhala: "සෑහෙනවා, ඇති වෙනවා" }
];

// DOM Elements
const homeScreen = document.getElementById('home-screen');
const selectSetScreen = document.getElementById('select-set-screen');
const studyScreen = document.getElementById('study-screen');
const practiceScreen = document.getElementById('practice-screen');
const endScreen = document.getElementById('end-screen');

const btnStudy = document.getElementById('btn-study');
const btnPractice = document.getElementById('btn-practice');
const btnBackFromSelect = document.getElementById('btn-back-from-select');
const btnBackFromStudy = document.getElementById('btn-back-from-study');
const btnBackFromPractice = document.getElementById('btn-back-from-practice');
const btnNext = document.getElementById('btn-next');
const btnPlayAgain = document.getElementById('btn-play-again');
const btnHomeFromEnd = document.getElementById('btn-home-from-end');

const vocabListContainer = document.getElementById('vocab-list-container');
const setListContainer = document.getElementById('set-list-container');
const selectSetTitle = document.getElementById('select-set-title');

// Game Elements
const progressFill = document.getElementById('progress-fill');
const questionKanji = document.getElementById('question-kanji');
const questionRomaji = document.getElementById('question-romaji');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback-container');
const scoreEl = document.getElementById('score');
const finalScoreEl = document.getElementById('final-score');
const totalQuestionsEl = document.getElementById('total-questions');

// Game State
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let currentCorrectAnswer = null;
let currentMode = ''; // 'study' or 'practice'
let currentSetStartIndex = 0;
let currentSetEndIndex = 0;

// Routing
function showScreen(screenEl) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screenEl.classList.add('active');
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Generate Set Buttons
    const setSize = 20;
    const numSets = Math.ceil(vocabulary.length / setSize);
    
    for (let i = 0; i < numSets; i++) {
        const start = i * setSize;
        const end = Math.min((i + 1) * setSize, vocabulary.length);
        
        const btn = document.createElement('button');
        btn.className = 'secondary-btn';
        btn.textContent = `Set ${i + 1} (${start + 1} - ${end})`;
        btn.addEventListener('click', () => selectSet(start, end));
        setListContainer.appendChild(btn);
    }

    // Event Listeners
    btnStudy.addEventListener('click', () => {
        currentMode = 'study';
        selectSetTitle.textContent = 'Select Study Set';
        showScreen(selectSetScreen);
    });
    
    btnPractice.addEventListener('click', () => {
        currentMode = 'practice';
        selectSetTitle.textContent = 'Select Practice Set';
        showScreen(selectSetScreen);
    });
    
    btnBackFromSelect.addEventListener('click', () => showScreen(homeScreen));
    btnBackFromStudy.addEventListener('click', () => showScreen(selectSetScreen));
    btnBackFromPractice.addEventListener('click', () => showScreen(selectSetScreen));
    btnHomeFromEnd.addEventListener('click', () => showScreen(homeScreen));

    btnPlayAgain.addEventListener('click', () => startGame(currentSetStartIndex, currentSetEndIndex));
    btnNext.addEventListener('click', () => loadNextQuestion());
});

function selectSet(start, end) {
    currentSetStartIndex = start;
    currentSetEndIndex = end;
    
    if (currentMode === 'study') {
        renderStudySet(start, end);
        showScreen(studyScreen);
    } else {
        startGame(start, end);
    }
}

function renderStudySet(start, end) {
    vocabListContainer.innerHTML = '';
    const subset = vocabulary.slice(start, end);
    subset.forEach((word, index) => {
        const actualIndex = start + index;
        const jpText = word.kanji !== word.hiragana ? `${word.kanji} (${word.hiragana})` : word.hiragana;
        const item = document.createElement('div');
        item.className = 'vocab-item';
        item.innerHTML = `
            <div class="vocab-kanji"><span class="vocab-number" style="color:#aaa;font-size:0.8em;">${actualIndex + 1}. </span>${jpText}</div>
            <div class="vocab-romaji">${word.romaji}</div>
            <div class="vocab-sinhala">${word.sinhala}</div>
        `;
        vocabListContainer.appendChild(item);
    });
}

// Game Logic
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function startGame(start = currentSetStartIndex, end = currentSetEndIndex) {
    score = 0;
    currentIndex = 0;
    scoreEl.textContent = score;
    
    // Select random questions for the selected set
    const subset = vocabulary.slice(start, end);
    currentQuestions = shuffleArray(subset);
    
    showScreen(practiceScreen);
    loadNextQuestion();
}

function loadNextQuestion() {
    if (currentIndex >= currentQuestions.length) {
        endGame();
        return;
    }

    feedbackContainer.classList.add('hidden');
    optionsContainer.innerHTML = '';
    
    const currentWord = currentQuestions[currentIndex];
    currentCorrectAnswer = currentWord;
    
    // Update Question UI - User wants to see Hiragana
    questionKanji.textContent = currentWord.hiragana;
    questionRomaji.textContent = currentWord.romaji;
    
    // Update Progress
    const progressPercent = (currentIndex / currentQuestions.length) * 100;
    progressFill.style.width = `${progressPercent}%`;

    // Generate Options
    let incorrectWords = vocabulary.filter(w => w.hiragana !== currentWord.hiragana);
    incorrectWords = shuffleArray(incorrectWords).slice(0, 3);
    
    let options = [currentWord, ...incorrectWords];
    options = shuffleArray(options);

    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `
            <div>${opt.sinhala}</div>
        `;
        btn.addEventListener('click', () => handleAnswer(opt, btn));
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(selectedOpt, selectedBtn) {
    const isCorrect = selectedOpt.hiragana === currentCorrectAnswer.hiragana;
    
    // Disable all buttons
    const allBtns = optionsContainer.querySelectorAll('.option-btn');
    allBtns.forEach(btn => btn.disabled = true);

    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
        scoreEl.textContent = score;
    } else {
        selectedBtn.classList.add('wrong');
        // Find and highlight correct answer
        allBtns.forEach(btn => {
            if (btn.querySelector('div').textContent === currentCorrectAnswer.sinhala) {
                btn.classList.add('correct');
            }
        });
    }

    feedbackContainer.classList.remove('hidden');
    currentIndex++;
    
    // Update progress bar to include the answer just given
    const progressPercent = (currentIndex / currentQuestions.length) * 100;
    progressFill.style.width = `${progressPercent}%`;
}

function endGame() {
    finalScoreEl.textContent = score;
    totalQuestionsEl.textContent = currentQuestions.length;
    showScreen(endScreen);
}
