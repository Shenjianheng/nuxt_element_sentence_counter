export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    return {
      // 设置title多语言
      title: this.$t("head.title"),
      // 设置html标签的lang属性多语言
      htmlAttrs: {
        lang: this.$t("head.htmlAttrs.lang"),
      },
      // 设置meta标签的相关属性
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
        { hid: 'description', name: 'description', content: this.$t('head.meta.description') },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },

  // Server: https://www.nuxtjs.cn/api/configuration-server
  // server: {
  //   port: 3000,
  //   host: '127.0.0.1'
  // },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['element-ui/lib/theme-chalk/index.css', './static/css/reset.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/element-ui', '@/plugins/i18n'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Configure project packaging path: https://www.nuxtjs.cn/api/configuration-builddir
  buildDir: ".nuxt/dist",

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://i18n.nuxtjs.org/v7/setup
    [
      '@nuxtjs/i18n', {
        defaultLocale: 'zh',
        locales: [
          {
            code: 'en',
            iso: 'en-US',
            text: 'US',
            name: 'English'
          },
          {
            code: 'zh',
            iso: 'zh-CN',
            text: 'CN',
            name: '简体中文'
          },
          {
            code: 'ja',
            iso: 'ja-JP',
            text: 'JP',
            name: '日本語'
          },
          {
            code: 'ko',
            iso: 'ko-KR',
            text: 'KR',
            name: '한국어'
          },
          {
            code: 'fr',
            iso: 'fr-FR',
            text: 'FR',
            name: 'Français'
          },
          {
            code: 'fil',
            iso: 'fil-PH',
            text: 'PH',
            name: 'Pilipino'
          },
        ],
        vueI18n: {
          locale: "zh",
          fallbackLocale: "zh",
          messages: {
            // 定义英语语言包对象
            en: {
                title: {
                    characters: "Characters",
                    words: "Words",
                    spaces: "Spaces",
                    letters: "Letters",
                    charactersWithoutSpaces: "Characters without spaces",
                    sentences: "Sentences",
                    paragraphs: "Paragraphs"
                },
                tips: {
                    tips: "tips: When you type a line break, it becomes a paragraph."
                },
                boxTips: {
                    placeholder: "Type or paste text here to check the character count and more!"
                },
                buttonText: {
                    button1: "clean text",
                    button2: "copy text"
                },
                introduce: {
                    title: "Online Sentence Counter(What is a Sentence counter?)",
                    p1: "When you use this online sentence counter, it can accurately help you determine how many sentences and paragraphs there are in the text content you enter in the text box.",
                    p2: "In addition, this online sentence counter can also count the number of characters, words, spaces, letters, and characters without spaces in the text content.",
                    p3: "This sentence counter can handle any text content, from a single text string to a large number of text paragraphs separated by multiple line breaks. It can quickly process text content of thousands of words, including short stories, long texts, and even the content of a book.",
                    p4: "So this online sentence counter tool can meet most of your needs for manipulating text content while working, and add a bit of fun to the tedious work."
                },
                // seo配置多语言
                head: {
                    title: "Sentence Counter - Add fun to your work",
                    htmlAttrs: {
                        lang: "en"
                    },
                    meta: {
                        description: "This sentence counter can handle any text content, from a single text string to a large number of text paragraphs separated by multiple line breaks. It can add a bit of fun for your tedious work."
                    }
                }
            },
            // 定义日语语言包对象
            ja: {
                title: {
                    characters: "文字",
                    words: "単語",
                    spaces: "スペース",
                    letters: "英字",
                    charactersWithoutSpaces: "スペースのない文字",
                    sentences: "文",
                    paragraphs: "段落"
                },
                tips: {
                    tips: "ヒント：改行文字を入力すると、テキストの段落になります。"
                },
                boxTips: {
                    placeholder: "文字数などをチェックするためにここにテキストを入力または貼り付けます！"
                },
                buttonText: {
                    button1: "テキストの消去",
                    button2: "テキストのコピー"
                },
                introduce: {
                    title: "オンライン文カウンタ（文カウンタとは？）",
                    p1: "このオンライン文カウンタを使用すると、テキストボックスに入力されたテキスト内容にどれだけの文と段落があるかを正確に判断するのに役立ちます。",
                    p2: "また、このオンライン文カウンタは、テキストコンテンツ内の文字、単語、スペース、文字、スペースのない文字の数を統計することもできます。",
                    p3: "この文カウンタは、単一のテキスト文字列から複数の改行文字で区切られた多数のテキスト段落まで、任意のテキスト内容を処理できます。短編小説、長編テキスト、さらには1冊の本の内容など、数千字のテキスト内容をすばやく処理することができます。",
                    p4: "したがって、このオンライン文カウンタツールは、作業中にテキストコンテンツを操作するためのほとんどのニーズを満たし、退屈な作業に少しでも楽しさを加えることができます。"
                },
                // seo配置多语言
                head: {
                    title: "センテンスカウンタ - あなたの仕事を楽しむために",
                    htmlAttrs: {
                        lang: "ja"
                    },
                    meta: {
                        description: "この文カウンタは、単一のテキスト文字列から複数の改行文字で区切られた多数のテキスト段落まで、任意のテキスト内容を処理できます。退屈な仕事に少し楽しみを加えることができます。"
                    }
                }
            },
            // 定义韩语语言包对象
            ko: {
                title: {
                    characters: "문자",
                    words: "단어",
                    spaces: "공백 문자",
                    letters: "자모",
                    charactersWithoutSpaces: "공백이 없는 문자",
                    sentences: "문장",
                    paragraphs: "문장"
                },
                tips: {
                    tips: "팁: 줄 바꿈 문자를 입력하면 텍스트가 됩니다."
                },
                boxTips: {
                    placeholder: "여기에 텍스트를 입력하거나 붙여넣어 문자 수 등을 확인하십시오!"
                },
                buttonText: {
                    button1: "텍스트 지우기",
                    button2: "텍스트 복사"
                },
                introduce: {
                    title: "온라인 문장 카운터 (문장 카운터란?)",
                    p1: "이 온라인 문장 카운터를 사용하면 텍스트 상자에 입력한 텍스트 내용에 문장과 단락이 얼마나 있는지 정확하게 확인할 수 있습니다.",
                    p2: "또한 이 온라인 문장 카운터는 텍스트 내용의 문자, 단어, 공백, 알파벳 및 공백이 없는 문자의 수를 집계할 수 있습니다.",
                    p3: "이 문 카운터는 단일 텍스트 문자열에서 여러 줄 바꿈으로 구분된 많은 텍스트 단락까지 모든 텍스트 내용을 처리할 수 있습니다.그것은 단편 소설, 장편 텍스트, 심지어 책 한 권의 내용을 포함한 수천 자의 텍스트 내용을 빠르게 처리할 수 있다.",
                    p4: "따라서 이 온라인 문장 카운터 도구는 작업할 때 텍스트 내용을 조작하는 대부분의 요구를 충족시키고 지루한 작업에 즐거움을 더할 수 있습니다."
                },
                // seo配置多语言
                head: {
                    title: "문장 카운터 - 당신의 일에 즐거움을 더하다",
                    htmlAttrs: {
                        lang: "ko"
                    },
                    meta: {
                        description: "이 문 카운터는 단일 텍스트 문자열에서 여러 줄 바꿈으로 구분된 많은 텍스트 단락까지 모든 텍스트 내용을 처리할 수 있습니다.그것은 너의 무미건조한 일에 약간의 즐거움을 더할 수 있다."
                    }
                }
            },
            // 定义菲律宾语语言包对象
            fil: {
                title: {
                    characters: "character",
                    words: "salita",
                    spaces: "Karakter ng Espasyo",
                    letters: "sulat",
                    charactersWithoutSpaces: "Mga Karakter na walang mga puwang",
                    sentences: "pangungusap",
                    paragraphs: "paragraph"
                },
                tips: {
                    tips: "Tip: Kapag i-type mo ang break ng linya, ito'y nagiging paragraph ng teksto."
                },
                boxTips: {
                    placeholder: "Ilagay o i-paste ang text dito upang suriin ang bilang ng mga character, atbp!"
                },
                buttonText: {
                    button1: "Linisin ang Teksto",
                    button2: "Kopyahin ang Teksto"
                },
                introduce: {
                    title: "Online sentence counter (What is a sentence counter?)",
                    p1: "Kapag ginagamit mo ang online na pangungusap na ito, maaari nitong tumulong sa iyo upang matukoy kung gaano karaming pangungusap at mga pahayag ang iyong inilalagay sa text box.",
                    p2: "Dagdag dito, ang online na pangungusap na ito ay maaaring magbilang ng bilang ng mga karakter, salita, puwang, titik at walang puwang karakter sa nilalaman ng teksto.",
                    p3: "Ang statement counter na ito ay maaaring hawakan ang anumang nilalaman ng text, mula sa isang text string hanggang sa malaking bilang ng mga tala ng text na hiwalay sa pamamagitan ng iba't ibang pahinga ng mga linya. Maaari nitong mabilis na proseso ang libong salita ng nilalaman ng teksto, kabilang na ang maikling estorya, mahabang teksto, at kahit ang nilalaman ng isang aklat.",
                    p4: "Samakatuwid, ang online na kagamitan ng pangungusap na ito ay maaaring matugunan ang karamihan ng iyong pangangailangan para sa pagpapalagay ng teksto habang nagtatrabaho, at magdagdag ng isang bit ng masaya sa nakakapagod na trabaho."
                },
                // seo配置多语言
                head: {
                    title: "Counter ng Sentence - Pagdagdag ng masaya sa iyong trabaho",
                    htmlAttrs: {
                        lang: "fil"
                    },
                    meta: {
                        description: "Ang statement counter na ito ay maaaring hawakan ang anumang nilalaman ng text, mula sa isang text string hanggang sa malaking bilang ng mga tala ng text na hiwalay sa pamamagitan ng iba't ibang pahinga ng mga linya. Maaari itong magdagdag ng isang bit ng masaya sa iyong pagod na trabaho."
                    }
                }
            },
            // 定义中文语言包对象
            zh: {
                title: {
                    characters: "字符",
                    words: "单词",
                    spaces: "空格符",
                    letters: "字母",
                    charactersWithoutSpaces: "没有空格符的字符",
                    sentences: "句子",
                    paragraphs: "段落"
                },
                tips: {
                    tips: "提示：当你键入换行符时，它就会变成一段文字。"
                },
                boxTips: {
                    placeholder: "在此处键入或粘贴文本以检查字符数等！"
                },
                buttonText: {
                    button1: "清除文本",
                    button2: "复制文本"
                },
                introduce: {
                    title: "在线句子计数器（什么是句子计数器？）",
                    p1: "当你使用这个在线句子计数器时，它可以准确地帮助你确定你在文本框中输入的文本内容中有多少句子和段落。",
                    p2: "此外，这个在线句子计数器还可以统计文本内容中的字符、单词、空格、字母和无空格字符的数量。",
                    p3: "此语句计数器可以处理任何文本内容，从单个文本字符串到由多个换行符分隔的大量文本段落。它可以快速处理数千字的文本内容，包括短篇小说、长篇文本，甚至一本书的内容。",
                    p4: "因此，这个在线句子计数器工具可以满足您在工作时操作文本内容的大部分需求，并为乏味的工作增添一点乐趣。"
                },
                // seo配置多语言
                head: {
                    title: "句子计数器 - 为你的工作增加乐趣",
                    htmlAttrs: {
                        lang: "zh"
                    },
                    meta: {
                        description: "此语句计数器可以处理任何文本内容，从单个文本字符串到由多个换行符分隔的大量文本段落。它可以为你乏味的工作增添一点乐趣。"
                    }
                }
            },
            // 定义法语语言包对象
            fr: {
                title: {
                    characters: "Caractère",
                    words: "Mots",
                    spaces: "Espaces",
                    letters: "Lettres",
                    charactersWithoutSpaces: "Caractères sans espaces",
                    sentences: "Phrases",
                    paragraphs: "Paragraphes"
                },
                tips: {
                    tips: "Conseil: lorsque vous tapez un saut de ligne, il devient un paragraphe de texte."
                },
                boxTips: {
                    placeholder: "Tapez ou collez du texte ici pour vérifier le nombre de caractères et plus encore!"
                },
                buttonText: {
                    button1: "Effacer le texte",
                    button2: "Copier le texte"
                },
                introduce: {
                    title: "Compteur de phrases en ligne (qu'est - ce qu'un compteur de phrases?)",
                    p1: "Lorsque vous utilisez ce compteur de phrases en ligne, il peut vous aider à déterminer exactement combien de phrases et de paragraphes vous avez dans le contenu du texte que vous entrez dans la zone de texte.",
                    p2: "En outre, ce compteur de phrases en ligne peut également compter le nombre de caractères, de mots, d'espaces, de lettres et de caractères sans espace dans le contenu du texte.",
                    p3: "Ce compteur d'instructions peut gérer n'importe quel contenu texte, d'une seule chaîne de texte à un grand nombre de paragraphes de texte séparés par plusieurs sauts de ligne. Il peut traiter rapidement des milliers de mots de contenu textuel, y compris des histoires courtes, des textes longs et même le contenu d'un livre.",
                    p4: "Ainsi, cet outil de comptage de phrases en ligne peut répondre à la plupart de vos besoins de manipulation de contenu texte au travail et ajouter un peu de plaisir au travail fastidieux."
                },
                // seo配置多语言
                head: {
                    title: "Compteur de phrases - ajouter du plaisir à votre travail",
                    htmlAttrs: {
                        lang: "fr"
                    },
                    meta: {
                        description: "Ce compteur d'instructions peut gérer n'importe quel contenu texte, d'une seule chaîne de texte à un grand nombre de paragraphes de texte séparés par plusieurs sauts de ligne. Il peut ajouter un peu de plaisir à votre travail fastidieux."
                    }
                }
            }
          }
        },
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected'
        },
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },
}
