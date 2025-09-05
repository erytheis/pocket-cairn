import rollDices from "../../utils/rollDices";
import spells from "./spells";

export const gearPackages = () => [
  {
    title: 'Клерик',
    inventory:
    [
      {
        title: 'Пайки (на три дня)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Факел',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Боевой молот (d10, громоздкий)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Кольчуга (2 брони, громоздкая)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Перчатки (+1 броня)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Заточенный клинок (d6)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Святой символ (Дух раз в день)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Плащ Ордена',
        inHand: false,
        fatigue: false
      },
      {
        title: '',
        inHand: false,
        fatigue: false
      },
      {
        title: '',
        inHand: false,
        fatigue: false
      }
    ]
  },
  {
    title: 'Мистик',
    inventory:
    [
      {
        title: 'Пайки (на три дня)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Факел',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Серп (d6)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Заплатанный дублет (+1 броня)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Ивовая палочка',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Глазной камень (чувствует, если поместить его в пресную воду)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Старая карта местности',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Подзорная труба',
        inHand: false,
        fatigue: false
      },
      {
        title: '',
        inHand: false,
        fatigue: false
      },
      {
        title: '',
        inHand: false,
        fatigue: false
      }
    ]
  },
  {
    title: 'Дварф',
    inventory:
    [
      {
        title: 'Пайки (на три дня)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Факел',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Колючий корень (d6)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Броня из сосновых шишек (1 броня)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Шпатель',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Банка с лесными муравьями',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Ядовитый гриб',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Ручная дрель',
        inHand: false,
        fatigue: false
      },
      {
        title: '',
        inHand: false,
        fatigue: false
      },
      {
        title: '',
        inHand: false,
        fatigue: false
      }
    ]
  },
  {
    title: 'Эльф',
    inventory:
    [
      {
        title: 'Пайки (на три дня)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Факел',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Элегантный меч (d8)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Изогнутый лук (d8)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Позолоченная одежда (1 доспех)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Книга заклинаний (Очарование или Поиск)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Золотая флейта',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Воздушный пузырь',
        inHand: false,
        fatigue: false
      },
      {
        title: '',
        inHand: false,
        fatigue: false
      },
      {
        title: '',
        inHand: false,
        fatigue: false
      }
    ]
  },
  {
    title: 'Боец',
    inventory:
    [
      {
        title: 'Пайки (на три дня)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Факел',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Глефа (d10, громоздкая)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Ятаган (d8)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Короткий меч (d6)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Короткий меч (d6)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Кисет для табака и трубка',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Набор кубиков',
        inHand: false,
        fatigue: false
      },
      {
        title: '',
        inHand: false,
        fatigue: false
      },
      {
        title: '',
        inHand: false,
        fatigue: false
      }
    ]
  },
  {
    title: 'Монах',
    inventory:
    [
      {
        title: 'Пайки (на три дня)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Факел',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Скипетр (d6)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Мешковатая одежда (+1 броня)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Кадило и Святая вода',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Кувшин медового вина',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Сборник народных песен',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Тележка (+4 слота, громоздкая)',
        inHand: false,
        fatigue: false
      },
      {
        title: '',
        inHand: false,
        fatigue: false
      },
      {
        title: '',
        inHand: false,
        fatigue: false
      }
    ]
  },
  {
    title: 'Рыцарь',
    inventory:
    [
      {
        title: 'Пайки (на три дня)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Факел',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Длинный меч (d10, громоздкий)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Кольчуга (2 доспеха, громоздкие)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Шлем (+1 броня)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Плащ с гербом',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Наручники',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Тонкая веревка',
        inHand: false,
        fatigue: false
      },
      {
        title: '',
        inHand: false,
        fatigue: false
      },
      {
        title: '',
        inHand: false,
        fatigue: false
      }
    ]
  },
  {
    title: 'Знаток волшебства',
    inventory:
    [
      {
        title: 'Пайки (на три дня)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Факел',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Сломанный посох (d8, громоздкий)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Кинжал (d6)',
        inHand: false,
        fatigue: false
      },
      {
        title: `Книга заклинаний (${spells[rollDices(1, 100)]})`,
        inHand: false,
        fatigue: false
      },
      {
        title: `Книга заклинаний (${spells[rollDices(1, 100)]})`,
        inHand: false,
        fatigue: false
      },
      {
        title: 'Рваная одежда (потайные карманы)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Лейшайник (x2, см. Реликвии)',
        inHand: false,
        fatigue: false
      },
      {
        title: '',
        inHand: false,
        fatigue: false
      },
      {
        title: '',
        inHand: false,
        fatigue: false
      }
    ]
  },
  {
    title: 'Вор',
    inventory:
    [
      {
        title: 'Пайки (на три дня)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Факел',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Два кинжала (d6+d6)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Куртка с капюшоном (1 доспех)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Отмычки',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Шипы-ловушки',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Крюк-кошка',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Напильник',
        inHand: false,
        fatigue: false
      },
      {
        title: '',
        inHand: false,
        fatigue: false
      },
      {
        title: '',
        inHand: false,
        fatigue: false
      }
    ]
  },
  {
    title: 'Следопыт',
    inventory:
    [
      {
        title: 'Пайки (на три дня)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Факел',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Длинный лук (d8, громоздкий)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Топорик (d6)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Кожаная броня (1 броня)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Большая ловушка',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Ищейка | 2 HP, 12 ловкости, укус (d6)',
        inHand: false,
        fatigue: false
      },
      {
        title: 'Рог',
        inHand: false,
        fatigue: false
      },
      {
        title: '',
        inHand: false,
        fatigue: false
      },
      {
        title: '',
        inHand: false,
        fatigue: false
      }
    ]
  },
];
