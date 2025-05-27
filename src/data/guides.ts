import { ECharacterElementType, ECharacterWeaponType } from "@/lib/enum";

export const guides = {
  id: 123,
  name: "Guide Roccia",
  introduction: `
  Nói đến Roccia, chúng ta sẽ nghĩ đến một người Trợ lý ân cần, một Bậc thầy về đạo cụ, và là một nghệ sĩ kịch ngẫu hứng. Cô ấy là người đảm bảo cho Fool’s Troupe luôn sẵn sàng để trình diễn.
  Roccia luôn mang bên mình Magic Box, tưởng chừng như có thể giấu cả thế giới bên trong, hoặc có lẽ cô đã tự tạo một thế giới cho riêng mình.
  `,
  overview: `
  Khi Roccia debut, nhiều người đặt ra sự nghi vấn cho sức mạnh của cô với vị trí Sub-DPS kèm Buffer trong đội hình Camellya Hypercarry, khi mà cái bóng của Sanhua (một nhân vật 4 sao free có lượng buff thua kém một chút nhưng vận hành nhanh và gọn) là quá lớn. Tuy nhiên, khi sở hữu Roccia và đào sâu vào lối chơi, bộ kit và hiệu quả gom quái mà cô mang lại, thì kết quả lại không hề tồi 1 chút nào. Đặc biệt đối với các DPS có khả năng đánh AOE kém và trong content endgame Whimpering Waste, nơi mà chúng ta phải đánh 1 lượng lớn kẻ địch được tạo ra liên tục theo wave. Vậy chúng ta sẽ cùng với nhau vào tìm hiểu xem Roccia thú vị như nào nhé!
  `,
  intro_image: '/guide_temp/roccia.jpg',
  basicGuide: {
    echoSets: [
      {
        name: "Midnight Veil",
        condition: "Khi đi với nhân vật có thuộc tính Havoc",
        effects: {
          pc2: "10% Havoc DMG Bonus",
          pc5: "15% Havoc DMG Bonus cho nhân vật tiếp theo sau khi dùng Outro Skill",
        },
        recommend: {
          name_main_cost: 'Cost 4 Nightmare: Impermanence Heron (Midnight Veil)',
          description: `Khi ở main slot sẽ tăng cho người mang 12% Havoc DMG Bonus + 12% Heavy DMG Bonus.`,
        }
      },
      {
        name: "Moonlit Clouds",
        condition: "Khi đi với nhân vật khác thuộc tính Havoc",
        effects: {
          pc2: "10% Energy Regen",
          pc5: "22.5% ATK cho nhân vật tiếp theo sau Outro Skill",
        },
        recommend: {
          name_main_cost: 'Cost 4 Impermanence Heron (Moonlit Clouds)',
          description: `Tăng 12% sát thương đầu ra cho nhân vật tiếp theo sau khi người mang sử dụng Outro Skill trong 15s.`,
        }
      },
    ],
    mainStats: [
      {
        cost: 4,
        echo: [
          "Impermanence Heron (Midnight Veil): Crit Rate% hoặc Crit DMG%",
          "Impermanence Heron (Moonlit Clouds): Crit Rate% hoặc Crit DMG%",
        ],
      },
      {
        cost: 3,
        stat: "Havoc DMG Bonus hoặc Havoc DMG Bonus – ATK%",
      },
      {
        cost: 1,
        stat: "ATK%",
      },
    ],
    subStatsPriority: [
      "Crit Rate%",
      "Crit DMG%",
      "ATK%",
      "Heavy Attack DMG Bonus",
      "ER",
    ],
    targetStats: {
      critRate: "70%+",
      er: "115-120%",
      note: "Ít nhất 70% Crit Rate vì RL của cô sẽ cung cấp cho đồng đội một lượng buff là 1  ATK Flat tương đương với mỗi 0.1% Crit Rate vượt quá 50%, tối đa 200ATK. Tuy nhiên có thể giảm bớt gánh nặng build Crit Rate khi trong đội hình có Shorekeeper. Roccia cần 115-120% ER là có thể vận hành mượt mà.",
    },
    recommendedWeapons: [
      {
        name: "Tragicomedy",
        icon: '/Game/Aki/UI/UIResources/Common/Image/IconWeapon/T_IconWeapon21040018_UI.png',
        rank: 5,
        description: 'Vì là trấn nên đây chắc chắn là lựa chọn tốt nhất.',
        percent: '116.72%'
      },
      {
        name: "Blazing Justice",
        icon: '/Game/Aki/UI/UIResources/Common/Image/IconWeapon/T_IconWeapon21040019_UI.png',
        rank: 5,
        description: 'Một sự lựa chọn ổn với dòng chính là Crit DMG%, dòng phụ có bỏ qua 8% DEF của mục tiêu.',
        percent: '~106%'
      },
      {
        name: "Verity’s Handle",
        icon: '/Game/Aki/UI/UIResources/Common/Image/IconWeapon/T_IconWeapon21040016_UI.png',
        rank: 5,
        description: 'Cũng là lựa chọn ổn với dòng chính là Crit Rate%, dòng phụ 12% Attribute DMG.',
        percent: '104.91%'
      },
      {
        name: "Abyss Surge",
        icon: '/Game/Aki/UI/UIResources/Common/Image/IconWeapon/T_IconWeapon21040015_UI.png',
        rank: 5,
        description: 'Lựa chọn dùng tạm nếu mọi người không có bất kì vũ khí nào kể trên. Khó để build đủ yêu cầu 70% Crit Rate vì dòng chính là ATK%',
        percent: '100%'
      },
      {
        name: "Stonard",
        icon: '/Game/Aki/UI/UIResources/Common/Image/IconWeapon/T_IconWeapon21040074_UI.png',
        rank: 4,
        description: 'Lựa chọn ổn nhưng đắt vì phải mua battle pass để có tích tầng cao.',
        percent: '82.49%'
      },
      {
        name: "Marcato (không nên dùng)",
        icon: '/Game/Aki/UI/UIResources/Common/Image/IconWeapon/T_IconWeapon21040024_UI.png',
        rank: 4,
        description: 'Không nên dùng vì không cần thêm concerto nếu combo chuẩn. Khá khó để build stat vì dòng chính là Energy Regen%.',
        useless: true,
        percent: '0%'
      },
    ],
  },
  teamComp: {
    notes: `Với lượng buff từ Outro Skill + RL, Camellya là sự lựa chọn tốt nhất vì khả năng tận dụng được toàn bộ lượng buff của Roccia. Havoc Rover cũng không là ngoại lệ. Một trường hợp khác là Cantarella, nhưng vì lượng sát thương không đủ để làm sát thương chủ lực nên sẽ hơi lép vế.
Một vài lựa chọn khác là Brant, Encore cũng tận dụng được buff Basic Attacks DMG Bonus từ Outro Skill của Roccia.
Một vài DPS khác không tận dụng được buff nhưng cũng tận dụng được khả năng gom quái của Roccia.`,
    teams: [
      ["/Game/Aki/UI/UIResources/Common/Image/IconRoleHead256/T_IconRoleHead256_29_UI.png", "/Game/Aki/UI/UIResources/Common/Image/IconRoleHead256/T_IconRoleHead256_33_UI.png", "/Game/Aki/UI/UIResources/Common/Image/IconRoleHead256/T_IconRoleHead256_28_UI.png"],
      ["/Game/Aki/UI/UIResources/Common/Image/IconRoleHead256/T_IconRoleHead256_8_UI.png", "/Game/Aki/UI/UIResources/Common/Image/IconRoleHead256/T_IconRoleHead256_33_UI.png", "/Game/Aki/UI/UIResources/Common/Image/IconRoleHead256/T_IconRoleHead256_28_UI.png"],
      ["/Game/Aki/UI/UIResources/Common/Image/IconRoleHead256/T_IconRoleHead256_44_UI.png", "/Game/Aki/UI/UIResources/Common/Image/IconRoleHead256/T_IconRoleHead256_33_UI.png", "/Game/Aki/UI/UIResources/Common/Image/IconRoleHead256/T_IconRoleHead256_28_UI.png"],
      ["/Game/Aki/UI/UIResources/Common/Image/IconRoleHead256/T_IconRoleHead256_34_UI.png", "/Game/Aki/UI/UIResources/Common/Image/IconRoleHead256/T_IconRoleHead256_33_UI.png", "/Game/Aki/UI/UIResources/Common/Image/IconRoleHead256/T_IconRoleHead256_28_UI.png"],
      ["/Game/Aki/UI/UIResources/Common/Image/IconRoleHead256/T_IconRoleHead256_5_UI.png", "/Game/Aki/UI/UIResources/Common/Image/IconRoleHead256/T_IconRoleHead256_33_UI.png", "/Game/Aki/UI/UIResources/Common/Image/IconRoleHead256/T_IconRoleHead256_28_UI.png"],
    ],
  },
  skillPriority: [
    { skill: "Forte", priority: "Max" },
    { skill: "RL", priority: "Max" },
    { skill: "RS", priority: "Medium" },
    { skill: "BA", priority: "Medium" },
    { skill: "Intro", priority: "Low" },
  ],
  rotation: {
    simple: [
      { description: "Intro Skill > BA (2 Stack Forte) > RL > RS (1 Stack Forte + Beyond Imagination) > Forte x3 > Echo Skill > Outro Skill", link: 'https://www.youtube.com/watch?v=aMdY2963loI' },
      { description: "Khi không có Intro: BA1234 > RL > RS > Forte x3 > Echo > Outro", link: 'https://youtu.be/aJxNd9ZwRFs?si=p7eX7EYgfEkcDPCT' }
    ],
    notes: `Lối chơi của Roccia xung quanh việc build đủ 3 Stack Forte, sau đó tiến vào trạng thái Beyond Imagination (nhảy lên dậm xuống), tiêu hao 3 Stack Forte, sau khi đầy Concerto chúng ta sẽ kích hoạt Outro Skill và swap sang nhân vật DPS.
Tuy nhiên, khi mọi người sử dụng Rotation này, việc nhảy liên tục 3 lần Forte sẽ rất dễ làm Roccia trúng đòn của kẻ địch, từ đó chúng ta sẽ bị ngắt chuỗi 3 đòn Forte, làm cho vận hành của cô bị ngắt quãng và chậm đi rất nhiều.`,
  },
  advancedTechniques: [
    {
      name: "Forte Dash Cancel",
      description: "Chúng ta có thể Dash Cancel ngay lúc Roccia nhảy lên không trung để có thể đẩy nhanh chuỗi 3 đòn Forte, cũng như tránh việc cô bị gián đoạn giữa các lần dậm nhảy.",
      link: ['https://youtu.be/r2kE09v5mCM?si=DtqF1G1QCU7Y0_k1']
    },
    {
      name: "Heavy Attack Swapcancel",
      description: "Không giữ Heavy quá lâu tránh kích hoạt trạng thái khi chưa đủ 3 stack.",
      link: ['https://youtu.be/KWHRYFgrtEM?si=6HoIXEELigZFB-nd']
    },
    {
      name: "RS Swapcancel",
      description: "Rs của Roccia có hoạt ảnh rất dài, chúng ta có thể swapcancel và setup các nhân vật khác trong lúc hoạt ảnh của Roccia còn hiệu lực, sau đó ngay lập tức swap trở lại cô và thực hiện chuỗi các đòn Forte.",
      link: ['https://youtu.be/25N7IRoyaPI?si=XFW7SPyRb47dS0GW'],
    },
    {
      name: "BA3, BA4 Swapcancel",
      description: "BA3 và BA4 của Roccia là một đòn tấn công lao đến mục tiêu với hoạt ảnh khá dài. Do đó, chúng ta có thể swap cancel đòn BA3, BA4 của Roccia để setup cho các nhân vật khác.",
      link: ['https://youtu.be/cy9iKBTfw90?si=oBABb8D5KvymLZxn', 'https://youtu.be/TyZNl10Loro?si=9A85NEiwNed2L_Ex']
    },
    {
      name: "BA3 Swap Back + BA4 Swapcancel",
      description: "Sau khi đã thành thục BA3, BA4 Swap Cancel ở trên, bước tiếp theo mọi người có thể thử là kết hợp cả 2 lại với nhau. Tuy nhiên, để thực hiện thì mọi người cần phải thực hiện 1 tech khá khó và quan trọng, đó là Swap Back. Chuỗi BA3 Swap Back + BA4 là 1 tech cực kì quan trọng của Roccia. Tech này giúp các bạn tích Imagination (điểm Forte) rất nhanh để có thể tiến vào trạng thái Beyond Imagination mà không cần hưởng Intro Skill.",
      link: ['https://youtu.be/i6hSBRGR6Nk?si=CbTiT3wx0I6ZRbRh']
    },
    {
      name: "Forte Swapcancel",
      description: "Nếu để Roccia trên sân và thực hiện hết 3 đòn dậm nhảy thì rất có khả năng cô sẽ bị đánh trúng và làm gián đoạn bởi animation dài và cồng kềnh. Tuy nhiên, khi chúng ta swapcancel sang nhân vật khác thì vấn đề bị gián đoạn của Roccia sẽ 80% được giải quyết. Khi swapcancel các đòn dậm nhảy của Roccia, chúng ta có thể chèn vào các kĩ năng khác, như chuỗi BA của Camellya, chuỗi BA của Havoc Rover, Rs Camellya,….. tùy vào từng trường hợp và từng teamcomp mà mọi người sử dụng.",
      link: ['https://youtu.be/ZukWgwNqhMQ?si=Rv3UgBKF3D-4bpMY']
    },
  ],
  summary: {
    notes:
      "Chỉ nên tiến vào trạng thái Beyond Imagination (Dậm nhảy Forte) chỉ khi mọi người đã tích trữ đủ 3 stack Forte. Khi đó chuỗi dậm nhảy cũng như Rotation của mọi người sẽ mượt mà hơn đáng kể. Nên thuần thục Forte Swapcancel để tránh việc Roccia bị gián đoạn giữa các lần dậm nhảy.",
    pros: [
      "Sub-DPS với lượng buff ổn",
      "Gom quái tốt",
      "Gameplay thú vị khi tối ưu",
      "Tạo hình dễ thương",
    ],
    cons: [
      "Nhân vật giới hạn",
      "Cần đầu tư lớn để vượt Sanhua",
      "Vận hành cồng kềnh khi không tối ưu",
      "Khó tối ưu trong teamcomp khác nhau",
    ],
    link: 'https://youtu.be/ZEh2oJ_v0Hw?si=I1Lz89ZBOhCyQxC_',
    conclusion:
      "Nếu các bạn đã đọc đến đây, mình hi vọng bài guide của mình đã giúp ích được phần nào cho mọi người để nắm rõ hơn cách hoạt động và lối chơi của Roccia. Nhìn chung Roccia là một nhân vật ổn nhưng vì là nhân vật limited và chúng có sự lựa chọn rẻ hơn là Sanhua RC6 nên mọi người đang đánh giá Roccia hơi thấp một chút. Tuy nhiên, nếu mọi người có 1 hầu bao dư dả và muốn trải nghiệm một chút sự thú vị trong gameplay của Wuthering Waves và có cho mình Camellya, thì Roccia là sự lựa chọn không tồi một chút nào.",
  },
};

export const listGuides = [{
  id: 12333,
  name: "Guide Roccia",
  intro_image: '/guide_temp/roccia.jpg',
  guide_icon: '/Game/Aki/UI/UIResources/Common/Image/IconRoleHead256/T_IconRoleHead256_33_UI.png',
  element: ECharacterElementType.HAVOC,
  weapon_type: ECharacterWeaponType.GAUNTLETS,
  guides: [
    { id: 123, version: '2.3', name: 'Quick Guide' }
  ],
  state: 'New',
  date: '24/05/2025'
}]
