

const products = {
  women: {
    new: [
      { image: "/images/women_new1.jpg", name: "여성 신상품 1", price: "199,000" },
      { image: "/images/women_new2.jpg", name: "여성 신상품 2", price: "209,000" },
      { image: "/images/women_new3.jpg", name: "여성 신상품 3", price: "219,000" },
      { image: "/images/women_new4.jpg", name: "여성 신상품 4", price: "229,000" },
      { image: "/images/women_new5.jpg", name: "여성 신상품 5", price: "239,000" },
      { image: "/images/women_new6.jpg", name: "여성 신상품 6", price: "249,000" }
    ],
    outer: [
      { image: "/images/women_outer1.jpg", name: "여성 아우터 1", price: "199,000" },
      { image: "/images/women_outer2.jpg", name: "여성 아우터 2", price: "209,000" },
      { image: "/images/women_outer3.jpg", name: "여성 아우터 3", price: "219,000" },
      { image: "/images/women_outer4.jpg", name: "여성 아우터 4", price: "229,000" },
      { image: "/images/women_outer5.jpg", name: "여성 아우터 5", price: "239,000" },
      { image: "/images/women_outer6.jpg", name: "여성 아우터 6", price: "249,000" }
    ]
  },

  men: {
    new: [
      { image: "/images/men_new1.jpg", name: "남성 신상품 1", price: "199,000" },
      { image: "/images/men_new2.jpg", name: "남성 신상품 2", price: "209,000" },
      { image: "/images/men_new3.jpg", name: "남성 신상품 3", price: "219,000" },
      { image: "/images/men_new4.jpg", name: "남성 신상품 4", price: "229,000" },
      { image: "/images/men_new5.jpg", name: "남성 신상품 5", price: "239,000" },
      { image: "/images/men_new6.jpg", name: "남성 신상품 6", price: "249,000" }
    ],
    suit: [
      { image: "/images/men_suit1.jpg", name: "남성 정장 1", price: "299,000" },
      { image: "/images/men_suit2.jpg", name: "남성 정장 2", price: "309,000" },
      { image: "/images/men_suit3.jpg", name: "남성 정장 3", price: "319,000" },
      { image: "/images/men_suit4.jpg", name: "남성 정장 4", price: "329,000" },
      { image: "/images/men_suit5.jpg", name: "남성 정장 5", price: "339,000" },
      { image: "/images/men_suit6.jpg", name: "남성 정장 6", price: "349,000" }
    ]
  },

  kids: {
    new: [
      { image: "/images/kids_new1.jpg", name: "키즈 신상품 1", price: "59,000" },
      { image: "/images/kids_new2.jpg", name: "키즈 신상품 2", price: "69,000" },
      { image: "/images/kids_new3.jpg", name: "키즈 신상품 3", price: "79,000" },
      { image: "/images/kids_new4.jpg", name: "키즈 신상품 4", price: "89,000" },
      { image: "/images/kids_new5.jpg", name: "키즈 신상품 5", price: "99,000" },
      { image: "/images/kids_new6.jpg", name: "키즈 신상품 6", price: "109,000" }
    ]
  },

  luxury: {
    bag: [
      { image: "/images/luxury_bag1.jpg", name: "럭셔리 가방 1", price: "1,990,000" },
      { image: "/images/luxury_bag2.jpg", name: "럭셔리 가방 2", price: "2,090,000" },
      { image: "/images/luxury_bag3.jpg", name: "럭셔리 가방 3", price: "2,190,000" },
      { image: "/images/luxury_bag4.jpg", name: "럭셔리 가방 4", price: "2,290,000" },
      { image: "/images/luxury_bag5.jpg", name: "럭셔리 가방 5", price: "2,390,000" },
      { image: "/images/luxury_bag6.jpg", name: "럭셔리 가방 6", price: "2,490,000" }
    ]
  },

  sports: {
    shoes: [
      { image: "/images/sports_shoes1.jpg", name: "스포츠 슈즈 1", price: "129,000" },
      { image: "/images/sports_shoes2.jpg", name: "스포츠 슈즈 2", price: "139,000" },
      { image: "/images/sports_shoes3.jpg", name: "스포츠 슈즈 3", price: "149,000" },
      { image: "/images/sports_shoes4.jpg", name: "스포츠 슈즈 4", price: "159,000" },
      { image: "/images/sports_shoes5.jpg", name: "스포츠 슈즈 5", price: "169,000" },
      { image: "/images/sports_shoes6.jpg", name: "스포츠 슈즈 6", price: "179,000" }
    ]
  },

  golf: {
    wear: [
      { image: "/images/golf_wear1.jpg", name: "골프 의류 1", price: "299,000" },
      { image: "/images/golf_wear2.jpg", name: "골프 의류 2", price: "309,000" },
      { image: "/images/golf_wear3.jpg", name: "골프 의류 3", price: "319,000" },
      { image: "/images/golf_wear4.jpg", name: "골프 의류 4", price: "329,000" },
      { image: "/images/golf_wear5.jpg", name: "골프 의류 5", price: "339,000" },
      { image: "/images/golf_wear6.jpg", name: "골프 의류 6", price: "349,000" }
    ]
  },

  beauty: {
    skincare: [
      { image: "/images/beauty_skin1.jpg", name: "스킨케어 1", price: "59,000" },
      { image: "/images/beauty_skin2.jpg", name: "스킨케어 2", price: "69,000" },
      { image: "/images/beauty_skin3.jpg", name: "스킨케어 3", price: "79,000" },
      { image: "/images/beauty_skin4.jpg", name: "스킨케어 4", price: "89,000" },
      { image: "/images/beauty_skin5.jpg", name: "스킨케어 5", price: "99,000" },
      { image: "/images/beauty_skin6.jpg", name: "스킨케어 6", price: "109,000" }
    ]
  },

  life: {
    deco: [
      { image: "/images/life_deco1.jpg", name: "홈데코 1", price: "39,000" },
      { image: "/images/life_deco2.jpg", name: "홈데코 2", price: "49,000" },
      { image: "/images/life_deco3.jpg", name: "홈데코 3", price: "59,000" },
      { image: "/images/life_deco4.jpg", name: "홈데코 4", price: "69,000" },
      { image: "/images/life_deco5.jpg", name: "홈데코 5", price: "79,000" },
      { image: "/images/life_deco6.jpg", name: "홈데코 6", price: "89,000" }
    ]
  },

  outlet: {
    all: [
      { image: "/images/outlet1.jpg", name: "아울렛 상품 1", price: "99,000" },
      { image: "/images/outlet2.jpg", name: "아울렛 상품 2", price: "109,000" },
      { image: "/images/outlet3.jpg", name: "아울렛 상품 3", price: "119,000" },
      { image: "/images/outlet4.jpg", name: "아울렛 상품 4", price: "129,000" },
      { image: "/images/outlet5.jpg", name: "아울렛 상품 5", price: "139,000" },
      { image: "/images/outlet6.jpg", name: "아울렛 상품 6", price: "149,000" }
    ]
  }
};

export default products;
