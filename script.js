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

const synonymsData = [
    { word: "きらい", romaji: "kirai", synonym: "すき じゃ / ではありません", sinhala: "අකමැති" },
    { word: "おととい", romaji: "ototoi", synonym: "ふつか まえ", sinhala: "පෙරේදා" },
    { word: "きのう", romaji: "kinou", synonym: "いちにち まえ", sinhala: "ඊයේ" },
    { word: "あした", romaji: "ashita", synonym: "あす、 いちにち ご", sinhala: "හෙට" },
    { word: "あさって", romaji: "asatte", synonym: "ふつか ご", sinhala: "අනිද්දා" },
    { word: "おじさん", romaji: "ojisan", synonym: "父 / 母の あに / おとうと", sinhala: "මාමා / බාප්පා / මහප්පා" },
    { word: "おじいさん", romaji: "ojiisan", synonym: "父 / 母の ちち、 そふ", sinhala: "සීයා" },
    { word: "おばさん", romaji: "obasan", synonym: "父 / 母の あね / いもうと", sinhala: "නැන්දා / පුංචි අම්මා / ලොකු අම්මා" },
    { word: "おばあさん", romaji: "obaasan", synonym: "父 / 母の はは、 そぼ", sinhala: "ආච්චි" },
    { word: "まずい", romaji: "mazui", synonym: "おいしくない、 すっぱい、 からい", sinhala: "රහ නෑ (අමිහිරි)" },
    { word: "あまい", romaji: "amai", synonym: "おいしい", sinhala: "පැණිරස (රසවත්)" },
    { word: "あまいもの", romaji: "amaimono", synonym: "おかし、 チョコレート", sinhala: "පැණිරස කෑම" },
    { word: "ちょっと", romaji: "chotto", synonym: "すこし", sinhala: "ටිකක්" },
    { word: "たくさん", romaji: "takusan", synonym: "いっぱい", sinhala: "ගොඩක්" },
    { word: "はじめて", romaji: "hajimete", synonym: "すぐ、 いまから、 もうすぐ、 まず、 はじめに", sinhala: "පළමු වතාවට" },
    { word: "りゅうがくせい", romaji: "ryuugakusei", synonym: "べんきょうしに がいこくへ いきました", sinhala: "විදේශීය සිසුවා" },
    { word: "9じ はん", romaji: "9 ji han", synonym: "9じ 30ぷん 「はん=30ぷん」", sinhala: "9:30" },
    { word: "きれい", romaji: "kirei", synonym: "すてき、 きたなくない", sinhala: "ලස්සන / පිරිසිදු" },
    { word: "きたない", romaji: "kitanai", synonym: "ごみ", sinhala: "අපිරිසිදු" },
    { word: "かんたん", romaji: "kantan", synonym: "むずかしくない、 やさしい", sinhala: "පහසු / ලේසි" },
    { word: "たいへん", romaji: "taihen", synonym: "やりにくい、 むずかしい", sinhala: "අමාරු / දුෂ්කර" },
    { word: "ながい", romaji: "nagai", synonym: "みじかくない", sinhala: "දිග" },
    { word: "たいせつ", romaji: "taisetsu", synonym: "だいじ", sinhala: "වැදගත්" },
    { word: "ざあざあ あめ", romaji: "zaazaa ame", synonym: "つよい あめ", sinhala: "තද වැස්ස" },
    { word: "あいて います", romaji: "aite imasu", synonym: "しまって いません", sinhala: "ඇරලා තියෙනවා" },
    { word: "かるい", romaji: "karui", synonym: "おもくない", sinhala: "සැහැල්ලු" },
    { word: "ちいさい", romaji: "chiisai", synonym: "おおきくない", sinhala: "කුඩා / පොඩි" },
    { word: "ごぜんちゅう", romaji: "gozenchuu", synonym: "あさから ひるまで", sinhala: "උදය වරුවම" },
    { word: "ごごちゅう", romaji: "gogochuu", synonym: "ひるから よるまで", sinhala: "පස්වරුවම" },
    { word: "いちにちじゅう", romaji: "ichinichijuu", synonym: "あさから よるまで", sinhala: "දවස පුරාම" },
    { word: "すき", romaji: "suki", synonym: "したいです、 きらい じゃ / ではありません", sinhala: "කැමති" },
    { word: "いなか", romaji: "inaka", synonym: "むら、 まち じゃ / ではありません", sinhala: "ගම" },
    { word: "ひま", romaji: "hima", synonym: "いそがしくない、 じかんが あります", sinhala: "නිදහස් කාලය" },
    { word: "なおします", romaji: "naoshimasu", synonym: "しゅうりします", sinhala: "අලුත්වැඩියා කරනවා / හරිගස්සනවා" },
    { word: "ビル", romaji: "biru", synonym: "たてもの、 アパート", sinhala: "ගොඩනැගිල්ල / බිල්ඩිම" },
    { word: "ちゅうしゃじょ", romaji: "chuushajo", synonym: "くるまを おきます", sinhala: "රථගාල" },
    { word: "しんごう", romaji: "shingou", synonym: "くるまを とめます", sinhala: "මාර්ග සංඥා" },
    { word: "こうさてん", romaji: "kousaten", synonym: "ひとが みちを わたります", sinhala: "මංසන්ධිය" },
    { word: "きっさてん", romaji: "kissaten", synonym: "コーヒー / こちゃを のむところ", sinhala: "තේ කඩය / කෝපි කඩය" },
    { word: "おゆ", romaji: "oyu", synonym: "あつい みず", sinhala: "උණු වතුර" },
    { word: "さびしい", romaji: "sabishii", synonym: "どくしん、 じぶんで / ひとりで すみます", sinhala: "පාළු" },
    { word: "ふべん", romaji: "fuben", synonym: "べんり じゃ / ではありません", sinhala: "අපහසු / පහසු නෑ" },
    { word: "すごい", romaji: "sugoi", synonym: "とても いい", sinhala: "නියමයි" },
    { word: "ほんとう", romaji: "hontou", synonym: "うそ じゃ / ではありません", sinhala: "ඇත්ත" },
    { word: "じどうしゃ", romaji: "jidousha", synonym: "くるま", sinhala: "මෝටර් රථය" },
    { word: "ぶっか", romaji: "bukka", synonym: "ねだん", sinhala: "බඩු මිල" },
    { word: "てんさい", romaji: "tensai", synonym: "あたまが いいです", sinhala: "දක්ෂ" },
    { word: "せかい", romaji: "sekai", synonym: "ちきゅう", sinhala: "ලෝකය" },
    { word: "もちろん", romaji: "mochiron", synonym: "きっと、 ぜひ", sinhala: "අනිවාර්යෙන්ම" },
    { word: "あまり", romaji: "amari", synonym: "そんなに、 しか、 なかなか", sinhala: "එතරම්" },
    { word: "でも", romaji: "demo", synonym: "しかし、 けど、 ＿が", sinhala: "නමුත් / ඒත්" },
    { word: "おひさしぶりです", romaji: "ohisashiburi desu", synonym: "ながい じかん あとで あいます", sinhala: "ගොඩ කාලෙකින්" },
    { word: "みんなで", romaji: "minna de", synonym: "いっしょに", sinhala: "ඔක්කොම එකට" },
    { word: "おなかが いっぱいです", romaji: "onaka ga ippai desu", synonym: "たべたくない です", sinhala: "බඩ පිරිලා" },
    { word: "つとめます", romaji: "tsutomemasu", synonym: "はたらきます、 しごとを します", sinhala: "සේවය කරනවා" },
    { word: "せんたくします", romaji: "sentakushimasu", synonym: "あらいます、 ふくを きれいに します", sinhala: "රෙදි සෝදනවා" },
    { word: "そうじします", romaji: "soujishimasu", synonym: "へやを きれいに します", sinhala: "පිරිසිදු කරනවා" },
    { word: "さんぽします", romaji: "sanposhimasu", synonym: "あるきます", sinhala: "ඇවිදින්න යනවා" },
    { word: "ごご", romaji: "gogo", synonym: "ゆうがた", sinhala: "පස්වරුව / හවස" },
    { word: "ゆうべ", romaji: "yuube", synonym: "きのうの ばん / よる", sinhala: "ඊයේ රෑ" },
    { word: "わるい てんきです", romaji: "warui tenki desu", synonym: "あめ です、 ゆき、 くもり", sinhala: "නරක කාලගුණය" },
    { word: "いい てんきです", romaji: "ii tenki desu", synonym: "はれ です", sinhala: "හොඳ කාලගුණය" },
    { word: "じょうぶ", romaji: "joubu", synonym: "つよい、 ちから、 よわくない", sinhala: "ශක්තිමත්" },
    { word: "やおや", romaji: "yaoya", synonym: "やさいの みせ", sinhala: "එළවළු කඩය" },
    { word: "じょうず", romaji: "jouzu", synonym: "とくい、 へた じゃ / ではありません", sinhala: "දක්ෂ" },
    { word: "たんじょうび", romaji: "tanjoubi", synonym: "せいねんがっぴ、 うまれた日", sinhala: "උපන් දිනය" },
    { word: "にぎやか", romaji: "nigiyaka", synonym: "こんでいます、 おおぜい、 ひとが おおいです", sinhala: "ඝෝෂාකාරී / සෙනඟ ගැවසෙන" },
    { word: "しずか", romaji: "shizuka", synonym: "にぎやか じゃ / ではありません", sinhala: "නිශ්ශබ්ද" },
    { word: "けっこんして います", romaji: "kekkonshite imasu", synonym: "どくしん じゃ / ではありません", sinhala: "විවාහකයි" },
    { word: "いちど", romaji: "ichido", synonym: "いっかい", sinhala: "එක් වතාවක්" },
    { word: "むり", romaji: "muri", synonym: "とても たいへん", sinhala: "කරන්න බැහැ / අමාරුයි" },
    { word: "ざんぎょうします", romaji: "zangyoushimasu", synonym: "オーバーワーク", sinhala: "අතිකාල වැඩ කරනවා" },
    { word: "きんえん", romaji: "kin'en", synonym: "たばこを すわない ところ", sinhala: "දුම්පානය තහනම්" },
    { word: "ところ", romaji: "tokoro", synonym: "ばしょ", sinhala: "ස්ථානය" },
    { word: "うわぎ", romaji: "uwagi", synonym: "スーツ、 コート、 セーター", sinhala: "කබාය / උඩට අඳින ඇඳුම" },
    { word: "すいえい", romaji: "suiei", synonym: "およぎます", sinhala: "පිහිනීම" },
    { word: "ほしい", romaji: "hoshii", synonym: "もらいたい", sinhala: "අවශ්‍යයි / ඕනෙ" },
    { word: "しゅうまつ", romaji: "shuumatsu", synonym: "どにち 「どようび と にちようび」", sinhala: "සති අන්තය" },
    { word: "ストア", romaji: "sutoa", synonym: "みせ", sinhala: "කඩය / වෙළඳසැල" },
    { word: "にくや", romaji: "nikuya", synonym: "にくの みせ", sinhala: "මස් කඩය" },
    { word: "さかなや", romaji: "sakanaya", synonym: "さかなの みせ", sinhala: "මාළු කඩය" },
    { word: "はなや", romaji: "hanaya", synonym: "はなの みせ", sinhala: "මල් කඩය" },
    { word: "ほんや", romaji: "honya", synonym: "ほんの みせ", sinhala: "පොත් කඩය" },
    { word: "ほんだな", romaji: "hondana", synonym: "ほんを おく ところ", sinhala: "පොත් රාක්කය" },
    { word: "ふくや", romaji: "fukuya", synonym: "ふくの みせ", sinhala: "ඇඳුම් කඩය" },
    { word: "くつや", romaji: "kutsuya", synonym: "くつの みせ", sinhala: "සපත්තු කඩය" },
    { word: "のどが かわきました", romaji: "nodo ga kawakimashita", synonym: "みずを のみたい です", sinhala: "තිබහයි" },
    { word: "おなかが すきました", romaji: "onaka ga sukimashita", synonym: "ごはんを たべたい です", sinhala: "බඩගිනියි" },
    { word: "りょうしん", romaji: "ryoushin", synonym: "ちち と はは", sinhala: "දෙමව්පියන්" },
    { word: "きょうだい", romaji: "kyoudai", synonym: "あに と あね / おとうと と いもうと", sinhala: "සහෝදර සහෝදරියන්" },
    { word: "いちども", romaji: "ichidomo", synonym: "ぜんぜん", sinhala: "කිසිසේත්ම නැහැ" },
    { word: "はやく", romaji: "hayaku", synonym: "おそくない、 はやい", sinhala: "ඉක්මනින්" },
    { word: "ちかい", romaji: "chikai", synonym: "とおくない、 そば、 ちかく、 へん", sinhala: "ළඟ" },
    { word: "あたらしい", romaji: "atarashii", synonym: "ふるくない", sinhala: "අලුත්" },
    { word: "わるい", romaji: "warui", synonym: "よくない", sinhala: "නරක" },
    { word: "たかい", romaji: "takai", synonym: "やすくない", sinhala: "ගණන් වැඩි / උස" },
    { word: "あつい", romaji: "atsui", synonym: "さむくない", sinhala: "උණුසුම්" },
    { word: "つまらない", romaji: "tsumaranai", synonym: "おもしろくない", sinhala: "කම්මැලි" },
    { word: "いそがしい", romaji: "isogashii", synonym: "ひま じゃ / ではありません", sinhala: "කාර්යබහුල" },
    { word: "げんき", romaji: "genki", synonym: "びょうき じゃ / ではありません", sinhala: "සනීපෙන් ඉන්නවා" },
    { word: "チケット", romaji: "chiketto", synonym: "きっぷ", sinhala: "ටිකට් පත" },
    { word: "わかりました", romaji: "wakarimashita", synonym: "かしこまりました", sinhala: "තේරුණා" },
    { word: "すーぱー、 デパート", romaji: "suupaa, depaato", synonym: "かいもの する おおきい ところ", sinhala: "සාප්පු සංකීර්ණය" },
    { word: "ぎんこう", romaji: "ginkou", synonym: "おかねを おろす ところ", sinhala: "බැංකුව" },
    { word: "トイレ", romaji: "toire", synonym: "おてあらい", sinhala: "වැසිකිළිය" },
    { word: "バッグ", romaji: "baggu", synonym: "かばん、 ふくろ", sinhala: "බෑගය/මල්ල" },
    { word: "おみやげ", romaji: "omiyage", synonym: "プレゼント", sinhala: "තෑග්ග / සිහිවටනය" },
    { word: "あかるい", romaji: "akarui", synonym: "くらくない", sinhala: "දීප්තිමත් / එළිය" },
    { word: "じゅうぎょう", romaji: "juugyou", synonym: "きょうしつ、 クラス", sinhala: "පන්තිය / පාඩම" },
    { word: "きょうかしょ", romaji: "kyoukasho", synonym: "テキスト、 じゅうぎょうで つかう ほん", sinhala: "පාසල් පෙළපොත" },
    { word: "ようじ", romaji: "youji", synonym: "しごと", sinhala: "රාජකාරිය / වැඩක්" },
    { word: "あんぜん", romaji: "anzen", synonym: "あぶなくない", sinhala: "ආරක්ෂිත" },
    { word: "いえ", romaji: "ie", synonym: "うち、 すんで いる ところ", sinhala: "නිවස / ගෙදර" },
    { word: "かしゅ", romaji: "kashu", synonym: "うたを うたいます", sinhala: "ගායකයා / ගායිකාව" },
    { word: "コップ", romaji: "koppu", synonym: "ビールを のむ", sinhala: "වීදුරුව" },
    { word: "カップ", romaji: "kappu", synonym: "コーヒー、 こちゃを のむ", sinhala: "කෝප්පය" },
    { word: "ペット", romaji: "petto", synonym: "どうぶつ", sinhala: "සුරතල් සතා" },
    { word: "おどります", romaji: "odorimasu", synonym: "ダンスを します", sinhala: "නටනවා" },
    { word: "おくれます", romaji: "okuremasu", synonym: "まにあいません", sinhala: "ප්‍රමාද වෙනවා / පරක්කු වෙනවා" },
    { word: "つもり", romaji: "tsumori", synonym: "もくてき、 ゆめ", sinhala: "අදහස / සැලසුම" },
    { word: "おまわりさん", romaji: "omawarisan", synonym: "けいかん、 けいさつ", sinhala: "පොලිස් නිලධාරියා" },
    { word: "あした か あさって", romaji: "ashita ka asatte", synonym: "あした でも あさって でも いいです", sinhala: "හෙට හෝ අනිද්දා" },
    { word: "すぎ", romaji: "sugi", synonym: "あとで", sinhala: "පසුව" },
    { word: "しつもん", romaji: "shitsumon", synonym: "もんだい、 わからない こと", sinhala: "ප්‍රශ්නය" },
    { word: "せまい", romaji: "semai", synonym: "ひろくない、 ちいさい", sinhala: "පටු / ඉඩකඩ අඩු" },
    { word: "ゆっくり", romaji: "yukkuri", synonym: "おそい", sinhala: "සෙමින් / හිමින්" },
    { word: "おととし", romaji: "ototoshi", synonym: "2ねん まえ", sinhala: "අවුරුදු දෙකකට පෙර" },
    { word: "せんせんげつ", romaji: "sensengetsu", synonym: "2かげつ まえ", sinhala: "මාස දෙකකට පෙර" },
    { word: "せんせんしゅう", romaji: "sensenshuu", synonym: "2しゅうかん まえ", sinhala: "සති දෙකකට පෙර" },
    { word: "はんとし", romaji: "hantoshi", synonym: "6かげつ", sinhala: "මාස හයක්" },
    { word: "さらいねん", romaji: "sarainen", synonym: "2ねん ご / あとで", sinhala: "තව අවුරුදු දෙකකින්" },
    { word: "さらいげつ", romaji: "saraigetsu", synonym: "2かげつ ご / あとで", sinhala: "තව මාස දෙකකින්" },
    { word: "さらいしゅう", romaji: "saraishuu", synonym: "2しゅうかん ご / あとで", sinhala: "තව සති දෙකකින්" }
];

// DOM Elements
const homeScreen = document.getElementById('home-screen');
const selectSetScreen = document.getElementById('select-set-screen');
const studyScreen = document.getElementById('study-screen');
const practiceScreen = document.getElementById('practice-screen');
const endScreen = document.getElementById('end-screen');

const btnStudy = document.getElementById('btn-study');
const btnPractice = document.getElementById('btn-practice');
const btnStudySynonyms = document.getElementById('btn-study-synonyms');
const btnPracticeSynonyms = document.getElementById('btn-practice-synonyms');
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
let currentDataType = 'verbs'; // 'verbs' or 'synonyms'
let currentSetStartIndex = 0;
let currentSetEndIndex = 0;

// Routing
function showScreen(screenEl) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screenEl.classList.add('active');
}

function generateSetButtons(dataArray) {
    setListContainer.innerHTML = '';
    const setSize = 20;
    const numSets = Math.ceil(dataArray.length / setSize);
    
    for (let i = 0; i < numSets; i++) {
        const start = i * setSize;
        const end = Math.min((i + 1) * setSize, dataArray.length);
        
        const btn = document.createElement('button');
        btn.className = 'secondary-btn';
        btn.textContent = `Set ${i + 1} (${start + 1} - ${end})`;
        btn.addEventListener('click', () => selectSet(start, end));
        setListContainer.appendChild(btn);
    }
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Event Listeners
    btnStudy.addEventListener('click', () => {
        currentMode = 'study';
        currentDataType = 'verbs';
        selectSetTitle.textContent = 'Select Study Set (Verbs)';
        generateSetButtons(vocabulary);
        showScreen(selectSetScreen);
    });
    
    btnPractice.addEventListener('click', () => {
        currentMode = 'practice';
        currentDataType = 'verbs';
        selectSetTitle.textContent = 'Select Practice Set (Verbs)';
        generateSetButtons(vocabulary);
        showScreen(selectSetScreen);
    });
    
    btnStudySynonyms.addEventListener('click', () => {
        currentMode = 'study';
        currentDataType = 'synonyms';
        selectSetTitle.textContent = 'Select Study Set (Synonyms)';
        generateSetButtons(synonymsData);
        showScreen(selectSetScreen);
    });

    btnPracticeSynonyms.addEventListener('click', () => {
        currentMode = 'practice';
        currentDataType = 'synonyms';
        selectSetTitle.textContent = 'Select Practice Set (Synonyms)';
        generateSetButtons(synonymsData);
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
    const dataArray = currentDataType === 'verbs' ? vocabulary : synonymsData;
    const subset = dataArray.slice(start, end);
    subset.forEach((word, index) => {
        const actualIndex = start + index;
        const item = document.createElement('div');
        item.className = 'vocab-item';
        
        if (currentDataType === 'verbs') {
            const jpText = word.kanji !== word.hiragana ? `${word.kanji} (${word.hiragana})` : word.hiragana;
            item.innerHTML = `
                <div class="vocab-kanji"><span class="vocab-number" style="color:#aaa;font-size:0.8em;">${actualIndex + 1}. </span>${jpText}</div>
                <div class="vocab-romaji">${word.romaji}</div>
                <div class="vocab-sinhala">${word.sinhala}</div>
            `;
        } else {
            item.innerHTML = `
                <div class="vocab-kanji" style="display: flex; align-items: center; flex-wrap: wrap; gap: 4px;">
                    <div><span class="vocab-number" style="color:#aaa;font-size:0.8em;">${actualIndex + 1}. </span>${word.word}</div>
                    <div style="color: #059669; font-weight: 600; font-size: 0.75em; margin-left: 8px; background: rgba(5,150,105,0.1); padding: 3px 10px; border-radius: 16px; border: 1px solid rgba(5,150,105,0.2); display: flex; align-items: center;">= ${word.synonym}</div>
                </div>
                <div class="vocab-romaji" style="margin-top: 6px;">${word.romaji}</div>
                <div class="vocab-sinhala">${word.sinhala}</div>
            `;
        }
        
        vocabListContainer.appendChild(item);
    });
    
    const studyTitle = document.getElementById('study-screen-title');
    if (studyTitle) {
        studyTitle.textContent = currentDataType === 'verbs' ? 'Study Verbs' : 'Study Synonyms';
    }
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
    const dataArray = currentDataType === 'verbs' ? vocabulary : synonymsData;
    const subset = dataArray.slice(start, end);
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
    
    // Update Question UI
    if (currentDataType === 'verbs') {
        questionKanji.textContent = currentWord.hiragana;
        questionRomaji.textContent = currentWord.romaji;
    } else {
        questionKanji.textContent = currentWord.word;
        questionRomaji.textContent = currentWord.romaji;
    }
    
    // Update Progress
    const progressPercent = (currentIndex / currentQuestions.length) * 100;
    progressFill.style.width = `${progressPercent}%`;

    // Generate Options
    const dataArray = currentDataType === 'verbs' ? vocabulary : synonymsData;
    const matchKey = currentDataType === 'verbs' ? 'hiragana' : 'word';
    
    let incorrectWords = dataArray.filter(w => w[matchKey] !== currentWord[matchKey]);
    incorrectWords = shuffleArray(incorrectWords).slice(0, 3);
    
    let options = [currentWord, ...incorrectWords];
    options = shuffleArray(options);

    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        
        if (currentDataType === 'verbs') {
            btn.innerHTML = `<div>${opt.sinhala}</div>`;
        } else {
            btn.innerHTML = `
                <div style="font-size: 1.2rem; font-weight: 500; color: #10b981; margin-bottom: 4px;">${opt.synonym}</div>
                <div style="font-size: 0.95rem; color: var(--text-muted);">${opt.sinhala}</div>
            `;
        }
        
        btn.dataset.correct = (opt[matchKey] === currentWord[matchKey]).toString();
        btn.addEventListener('click', () => handleAnswer(btn.dataset.correct === 'true', btn));
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(isCorrect, selectedBtn) {
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
            if (btn.dataset.correct === 'true') {
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
