function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
    default:
      return 0;
  }
}
class RandomName {
  constructor() {
    this.nickHeader = [
      '快樂的',
      '冷靜的',
      '醉熏的',
      '瀟灑的',
      '糊塗的',
      '積極的',
      '冷酷的',
      '深情的',
      '粗暴的',
      '溫柔的',
      '可愛的',
      '愉快的',
      '義氣的',
      '認真的',
      '威武的',
      '帥氣的',
      '傳統的',
      '瀟灑的',
      '漂亮的',
      '自然的',
      '專一的',
      '聽話的',
      '昏睡的',
      '狂野的',
      '等待的',
      '搞怪的',
      '幽默的',
      '魁梧的',
      '活潑的',
      '開心的',
      '高興的',
      '超帥的',
      '留胡子的',
      '坦率的',
      '直率的',
      '輕松的',
      '癡情的',
      '完美的',
      '精明的',
      '無聊的',
      '有魅力的',
      '豐富的',
      '繁榮的',
      '飽滿的',
      '炙熱的',
      '暴躁的',
      '碧藍的',
      '俊逸的',
      '英勇的',
      '健忘的',
      '故意的',
      '無心的',
      '土豪的',
      '樸實的',
      '興奮的',
      '幸福的',
      '淡定的',
      '不安的',
      '闊達的',
      '孤獨的',
      '獨特的',
      '瘋狂的',
      '時尚的',
      '落後的',
      '風趣的',
      '憂傷的',
      '大膽的',
      '愛笑的',
      '矮小的',
      '健康的',
      '合適的',
      '玩命的',
      '沈默的',
      '斯文的',
      '香蕉',
      '蘋果',
      '鯉魚',
      '鰻魚',
      '任性的',
      '細心的',
      '粗心的',
      '大意的',
      '甜甜的',
      '酷酷的',
      '健壯的',
      '英俊的',
      '霸氣的',
      '陽光的',
      '默默的',
      '大力的',
      '孝順的',
      '憂慮的',
      '著急的',
      '緊張的',
      '善良的',
      '兇狠的',
      '害怕的',
      '重要的',
      '危機的',
      '歡喜的',
      '欣慰的',
      '滿意的',
      '跳躍的',
      '誠心的',
      '稱心的',
      '如意的',
      '怡然的',
      '嬌氣的',
      '無奈的',
      '無語的',
      '激動的',
      '憤怒的',
      '美好的',
      '感動的',
      '激情的',
      '激昂的',
      '震動的',
      '虛擬的',
      '超級的',
      '寒冷的',
      '精明的',
      '明理的',
      '猶豫的',
      '憂郁的',
      '寂寞的',
      '奮鬥的',
      '勤奮的',
      '現代的',
      '過時的',
      '穩重的',
      '熱情的',
      '含蓄的',
      '開放的',
      '無辜的',
      '多情的',
      '純真的',
      '拉長的',
      '熱心的',
      '從容的',
      '體貼的',
      '風中的',
      '曾經的',
      '追尋的',
      '儒雅的',
      '優雅的',
      '開朗的',
      '外向的',
      '內向的',
      '清爽的',
      '文藝的',
      '長情的',
      '平常的',
      '單身的',
      '伶俐的',
      '高大的',
      '懦弱的',
      '柔弱的',
      '愛笑的',
      '樂觀的',
      '耍酷的',
      '酷炫的',
      '神勇的',
      '年輕的',
      '嘮叨的',
      '瘦瘦的',
      '無情的',
      '包容的',
      '順心的',
      '暢快的',
      '舒適的',
      '靚麗的',
      '負責的',
      '背後的',
      '簡單的',
      '謙讓的',
      '彩色的',
      '縹緲的',
      '歡呼的',
      '生動的',
      '覆雜的',
      '慈祥的',
      '仁愛的',
      '魔幻的',
      '虛幻的',
      '淡然的',
      '受傷的',
      '雪白的',
      '高高的',
      '糟糕的',
      '順利的',
      '閃閃的',
      '羞澀的',
      '緩慢的',
      '迅速的',
      '優秀的',
      '聰明的',
      '含糊的',
      '俏皮的',
      '淡淡的',
      '堅強的',
      '平淡的',
      '欣喜的',
      '能幹的',
      '靈巧的',
      '友好的',
      '機智的',
      '機靈的',
      '正直的',
      '謹慎的',
      '儉樸的',
      '殷勤的',
      '虛心的',
      '辛勤的',
      '自覺的',
      '無私的',
      '無限的',
      '踏實的',
      '老實的',
      '現實的',
      '可靠的',
      '務實的',
      '拼搏的',
      '個性的',
      '粗獷的',
      '活力的',
      '成就的',
      '勤勞的',
      '單純的',
      '落寞的',
      '樸素的',
      '悲涼的',
      '憂心的',
      '潔凈的',
      '清秀的',
      '自由的',
      '小巧的',
      '單薄的',
      '貪玩的',
      '刻苦的',
      '幹凈的',
      '壯觀的',
      '和諧的',
      '文靜的',
      '調皮的',
      '害羞的',
      '安詳的',
      '自信的',
      '端莊的',
      '堅定的',
      '美滿的',
      '舒心的',
      '溫暖的',
      '專注的',
      '勤懇的',
      '美麗的',
      '靦腆的',
      '優美的',
      '甜美的',
      '甜蜜的',
      '整齊的',
      '動人的',
      '典雅的',
      '尊敬的',
      '舒服的',
      '嫵媚的',
      '秀麗的',
      '喜悅的',
      '甜美的',
      '彪壯的',
      '強健的',
      '大方的',
      '俊秀的',
      '聰慧的',
      '迷人的',
      '陶醉的',
      '悅耳的',
      '動聽的',
      '明亮的',
      '結實的',
      '魁梧的',
      '標致的',
      '清脆的',
      '敏感的',
      '光亮的',
      '大氣的',
      '老遲到的',
      '知性的',
      '冷傲的',
      '呆萌的',
      '野性的',
      '隱形的',
      '笑點低的',
      '微笑的',
      '笨笨的',
      '難過的',
      '沈靜的',
      '火星上的',
      '失眠的',
      '安靜的',
      '純情的',
      '要減肥的',
      '迷路的',
      '爛漫的',
      '哭泣的',
      '賢惠的',
      '苗條的',
      '溫婉的',
      '發嗲的',
      '會撒嬌的',
      '貪玩的',
      '執著的',
      '瞇瞇眼的',
      '花癡的',
      '想人陪的',
      '眼睛大的',
      '高貴的',
      '傲嬌的',
      '心靈美的',
      '愛撒嬌的',
      '細膩的',
      '天真的',
      '怕黑的',
      '感性的',
      '飄逸的',
      '怕孤獨的',
      '忐忑的',
      '高挑的',
      '傻傻的',
      '冷艷的',
      '愛聽歌的',
      '還單身的',
      '怕孤單的',
      '懵懂的',
    ];
    this.nickFoot = [
      '嚓茶',
      '涼面',
      '便當',
      '毛豆',
      '花生',
      '可樂',
      '燈泡',
      '哈密瓜',
      '野狼',
      '背包',
      '眼神',
      '緣分',
      '雪碧',
      '人生',
      '牛排',
      '螞蟻',
      '飛鳥',
      '灰狼',
      '斑馬',
      '漢堡',
      '悟空',
      '巨人',
      '綠茶',
      '自行車',
      '保溫杯',
      '大碗',
      '墨鏡',
      '魔鏡',
      '煎餅',
      '月餅',
      '月亮',
      '星星',
      '芝麻',
      '啤酒',
      '玫瑰',
      '大叔',
      '小夥',
      '哈密瓜，數據線',
      '太陽',
      '樹葉',
      '芹菜',
      '黃蜂',
      '蜜粉',
      '蜜蜂',
      '信封',
      '西裝',
      '外套',
      '裙子',
      '大象',
      '貓咪',
      '母雞',
      '路燈',
      '藍天',
      '白雲',
      '星月',
      '彩虹',
      '微笑',
      '摩托',
      '板栗',
      '高山',
      '大地',
      '大樹',
      '電燈膽',
      '磚頭',
      '樓房',
      '水池',
      '雞翅',
      '蜻蜓',
      '紅牛',
      '咖啡',
      '機器貓',
      '枕頭',
      '大船',
      '諾言',
      '鋼筆',
      '刺猬',
      '天空',
      '飛機',
      '大炮',
      '冬天',
      '洋蔥',
      '春天',
      '夏天',
      '秋天',
      '冬日',
      '航空',
      '毛衣',
      '豌豆',
      '黑米',
      '玉米',
      '眼睛',
      '老鼠',
      '白羊',
      '帥哥',
      '美女',
      '季節',
      '鮮花',
      '服飾',
      '裙子',
      '白開水',
      '秀發',
      '大山',
      '火車',
      '汽車',
      '歌曲',
      '舞蹈',
      '老師',
      '導師',
      '方盒',
      '大米',
      '麥片',
      '水杯',
      '水壺',
      '手套',
      '鞋子',
      '自行車',
      '鼠標',
      '手機',
      '電腦',
      '書本',
      '奇跡',
      '身影',
      '香煙',
      '夕陽',
      '台燈',
      '寶貝',
      '未來',
      '皮帶',
      '鑰匙',
      '心鎖',
      '故事',
      '花瓣',
      '滑板',
      '畫筆',
      '畫板',
      '學姐',
      '店員',
      '電源',
      '餅幹',
      '寶馬',
      '過客',
      '大白',
      '時光',
      '石頭',
      '鉆石',
      '河馬',
      '犀牛',
      '西牛',
      '綠草',
      '抽屜',
      '櫃子',
      '往事',
      '寒風',
      '路人',
      '橘子',
      '耳機',
      '鴕鳥',
      '朋友',
      '苗條',
      '鉛筆',
      '鋼筆',
      '硬幣',
      '熱狗',
      '大俠',
      '禦姐',
      '蘿莉',
      '毛巾',
      '期待',
      '盼望',
      '白晝',
      '黑夜',
      '大門',
      '黑褲',
      '鋼鐵俠',
      '啞鈴',
      '板凳',
      '楓葉',
      '荷花',
      '烏龜',
      '仙人掌',
      '襯衫',
      '大神',
      '草叢',
      '早晨',
      '心情',
      '茉莉',
      '流沙',
      '蝸牛',
      '戰鬥機',
      '冥王星',
      '獵豹',
      '棒球',
      '籃球',
      '樂曲',
      '電話',
      '網絡',
      '世界',
      '中心',
      '魚',
      '雞',
      '狗',
      '老虎',
      '鴨子',
      '雨',
      '羽毛',
      '翅膀',
      '外套',
      '火',
      '絲襪',
      '書包',
      '鋼筆',
      '冷風',
      '八寶粥',
      '烤雞',
      '大雁',
      '音響',
      '招牌',
      '胡蘿卜',
      '冰棍',
      '帽子',
      '菠蘿',
      '蛋撻',
      '香水',
      '泥猴桃',
      '吐司',
      '溪流',
      '黃豆',
      '櫻桃',
      '小鴿子',
      '小蝴蝶',
      '爆米花',
      '花卷',
      '小鴨子',
      '小海豚',
      '日記本',
      '小熊貓',
      '小懶豬',
      '小懶蟲',
      '荔枝',
      '鏡子',
      '曲奇',
      '金針菇',
      '小松鼠',
      '小蝦米',
      '酒窩',
      '紫菜',
      '金魚',
      '柚子',
      '果汁',
      '百褶裙',
      '項鏈',
      '帆布鞋',
      '火龍果',
      '奇異果',
      '煎蛋',
      '唇彩',
      '小土豆',
      '高跟鞋',
      '戒指',
      '雪糕',
      '睫毛',
      '鈴鐺',
      '手鏈',
      '香氛',
      '紅酒',
      '月光',
      '酸奶',
      '銀耳湯',
      '咖啡豆',
      '小蜜蜂',
      '小螞蟻',
      '蠟燭',
      '棉花糖',
      '向日葵',
      '水蜜桃',
      '小蝴蝶',
      '小刺猬',
      '小丸子',
      '指甲油',
      '康乃馨',
      '糖豆',
      '薯片',
      '口紅',
      '超短裙',
      '烏冬面',
      '冰淇淋',
      '棒棒糖',
      '長頸鹿',
      '豆芽',
      '發箍',
      '發卡',
      '發夾',
      '發帶',
      '鈴鐺',
      '小饅頭',
      '小籠包',
      '小甜瓜',
      '冬瓜',
      '香菇',
      '小兔子',
      '含羞草',
      '短靴',
      '睫毛膏',
      '小蘑菇',
      '跳跳糖',
      '小白菜',
      '草莓',
      '檸檬',
      '月餅',
      '百合',
      '紙鶴',
      '小天鵝',
      '雲朵',
      '芒果',
      '面包',
      '海燕',
      '小貓咪',
      '龍貓',
      '唇膏',
      '鞋墊',
      '羊',
      '黑貓',
      '白貓',
      '萬寶路',
      '金毛',
      '山水',
      '音響',
    ];

    this.femaleNameItems = `嘉、瓊、桂、娣、葉、璧、璐、婭、琦、晶、妍、茜、秋、珊、莎、錦、黛、青、倩、婷、姣、婉、嫻、瑾、穎、露、瑤、怡、嬋、雁、蓓、紈、儀、荷、丹、蓉、眉、君、琴、蕊、薇、菁、夢、嵐、苑、婕、馨、瑗、琰、韻、融、園、藝、詠、卿、聰、瀾、純、毓、悅、昭、冰、爽、琬、茗、羽、希、寧、欣、飄、育、瀅、馥、筠、柔、竹、靄、凝、曉、歡、霄、楓、蕓、菲、寒、伊、亞、宜、可、姬、舒、影、荔、枝、思、麗、秀、娟、英、華、慧、巧、美、娜、靜、淑、惠、珠、翠、雅、芝、玉、萍、紅、娥、玲、芬、芳、燕、彩、春、菊、勤、珍、貞、莉、蘭、鳳、潔、梅、琳、素、雲、蓮、真、環、雪、榮、愛、妹、霞、香、月、鶯、媛、艷、瑞、凡、佳`.split(
      '、'
    );
    this.maleNameItems = `濤、昌、進、林、有、堅、和、彪、博、誠、先、敬、震、振、壯、會、群、豪、心、邦、承、樂、紹、功、松、善、厚、慶、磊、民、友、裕、河、哲、江、超、浩、亮、政、謙、亨、奇、固、之、輪、翰、朗、伯、宏、言、若、鳴、朋、斌、梁、棟、維、啟、克、倫、翔、旭、鵬、澤、晨、辰、士、以、建、家、致、樹、炎、德、行、時、泰、盛、雄、琛、鈞、冠、策、騰、偉、剛、勇、毅、俊、峰、強、軍、平、保、東、文、輝、力、明、永、健、世、廣、志、義、興、良、海、山、仁、波、寧、貴、福、生、龍、元、全、國、勝、學、祥、才、發、成、康、星、光、天、達、安、巖、中、茂、武、新、利、清、飛、彬、富、順、信、子、傑、楠、榕、風、航、弘`.split(
      '、'
    );

    this.familyNameItemsSin = '趙,錢,孫,李,周,吳,鄭,王,馮,陳,褚,衛,蔣,沈,韓,楊,朱,秦,尤,許,何,呂,施,張,孔,曹,嚴,華,金,魏,陶,姜,戚,謝,鄒,喻,柏,水,竇,章,雲,蘇,潘,葛,奚,範,彭,郎,魯,韋,昌,馬,苗,鳳,花,方,俞,任,袁,柳,酆,鮑,史,唐,費,廉,岑,薛,雷,賀,倪,湯,滕,殷,羅,畢,郝,鄔,安,常,樂,於,時,傅,皮,卞,齊,康,伍,余,元,卜,顧,孟,平,黃,和,穆,蕭,尹,姚,邵,湛,汪,祁,毛,禹,狄,米,貝,明,臧,計,伏,成,戴,談,宋,茅,龐,熊,紀,舒,屈,項,祝,董,梁,杜,阮,藍,閔,席,季,麻,強,賈,路,婁,危,江,童,顏,郭,梅,盛,林,刁,鐘,徐,丘,駱,高,夏,蔡,田,樊,胡,淩,霍,虞,萬,支,柯,昝,管,盧,莫,經,房,裘,繆,幹,解,應,宗,丁,宣,賁,鄧,郁,單,杭,洪,包,諸,左,石,崔,吉,鈕,龔,程,嵇,邢,滑,裴,陸,榮,翁,荀,羊,於,惠,甄,曲,家,封,芮,羿,儲,靳,汲,邴,糜,松,井,段,富,巫,烏,焦,巴,弓,牧,隗,山,谷,車,侯,宓,蓬,全,郗,班,仰,秋,仲,伊,宮,寧,仇,欒,暴,甘,鈄,厲,戎,祖,武,符,劉,景,詹,束,龍,葉,幸,司,韶,郜,黎,薊,薄,印,宿,白,懷,蒲,邰,從,鄂,索,鹹,籍,賴,卓,藺,屠,蒙,池,喬,陰,郁,胥,能,蒼,雙,聞,莘,黨,翟,譚,貢,勞,逄,姬,申,扶,堵,冉,宰,酈,雍,嚶,璩,桑,桂,濮,牛,壽,通,邊,扈,燕,冀,郟,浦,尚,農,柴,瞿,閻,充,慕,連,茹,習,宦,艾,魚,容,向,古,易,慎,戈,廖,庾,終,暨,居,衡,步,都,耿,滿,弘,匡,國,文,寇,廣,祿,闕,東,歐,殳,沃,利,蔚,越,夔,隆,師,鞏,厙,聶,晁,勾,敖,融,冷,訾,辛,闞,那,簡,饒,空,曾,毋,沙,乜,養,鞠,須,豐,巢,關,蒯,相,查,後,荊,紅,遊,竺,權,逯,蓋,益,桓,公,萬,俟,司,馬,上,官,歐,陽,夏,候,諸,葛,聞,人,東,方,赫,連,皇,甫,尉,遲,公,羊,澹,台,公,治,宗,政,濮,陽,淳,於,單,於,太,叔,申,屠,公,孫,仲,孫'.split(
      ','
    );
    this.familyNameItemsSur = '轅軒,令狐,鐘離,宇文,長孫,幕容,鮮於,閭丘,司徒,司空,丌官,司寇,仉督,子車,顓孫,端木,巫馬,公西,漆雕,樂正,壤駟,公良,拓拔,夾谷,宰父,谷梁,晉楚,閻法,汝鄢,塗欽,段幹,百里,東郭,南門,呼延,歸海,羊舌,微生,岳帥,緱亢,況後,有琴,梁丘,左丘,東門,西門,商牟,佘佴,佰賞,南官,墨哈,譙笪,年愛,陽佟,第五,言福'.split(
      ','
    );
    this.allName = this.femaleNameItems.concat(this.maleNameItems);
    this.familyNameItemsAll = this.familyNameItemsSin.concat(
      this.familyNameItemsSur
    );
  }

  getNickHeader() {
    return this.nickHeader[randomNum(0, 331)];
  }
  getNickFoot() {
    return this.nickFoot[randomNum(0, 325)];
  }

  getNickName() {
    return this.getHeader() + this.getFoot();
  }

  getFamilyName(sur = true) {
    if (sur) {
      return this.familyNameItemsAll[
        randomNum(0, this.familyNameItemsAll.length - 1)
      ];
    } else {
      return this.familyNameItemsSin[
        randomNum(0, this.familyNameItemsSin.length - 1)
      ];
    }
  }
  getFemaleName(sur) {
    const r = randomNum(0, 1);
    if (r === 0) {
      return (
        this.getFamilyName(sur) +
        this.femaleNameItems[randomNum(0, this.femaleNameItems.length - 1)] +
        this.femaleNameItems[randomNum(0, this.femaleNameItems.length - 1)]
      );
    } else {
      return (
        this.getFamilyName(sur) +
        this.femaleNameItems[randomNum(0, this.femaleNameItems.length - 1)]
      );
    }
  }
  getMaleName(sur) {
    const r = randomNum(0, 1);
    if (r === 0) {
      return (
        this.getFamilyName(sur) +
        this.maleNameItems[randomNum(0, this.maleNameItems.length - 1)] +
        this.maleNameItems[randomNum(0, this.maleNameItems.length - 1)]
      );
    } else {
      return (
        this.getFamilyName(sur) +
        this.maleNameItems[randomNum(0, this.maleNameItems.length - 1)]
      );
    }
  }
  getName(sur) {
    const r = randomNum(0, 1);
    if (r === 0) {
      return (
        this.getFamilyName(sur) +
        this.allName[randomNum(0, this.allName.length - 1)] +
        this.allName[randomNum(0, this.allName.length - 1)]
      );
    } else {
      return (
        this.getFamilyName() +
        this.allName[randomNum(0, this.allName.length - 1)]
      );
    }
  }
}
let randomName = new RandomName();
export default randomName;
