export class Data {

    courseContent = [
        {id:1, link:"", name:"am / is / are"}, // 1
        {id:2, link:"", name:"am / is / are (questions)"}, // 2
        {id:3, link:"", name:"I am doing (present continous)"}, //3 
        {id:4, link:"", name:"are you doing? (present continous question)"}, //4 
        {id:5, link:"", name:"I do / work / like etc. (present simple)"}, //5
        {id:6, link:"", name:"I don't ... (present simple negative)"}, //4
        {id:7, link:"", name:"Do you ... ? (present simple questions)"}, //7
        {id:8, link:"", name:"I am doing (present continous) and I do (present simple)"}, //8
        {id:9, link:"", name:"I have ... and I've got ..."}, //9
        {id:10, link:"", name:"was / were"}, //10
        {id:11, link:"", name:"worked / got / went etc. (past simple)"}, //11
        {id:12, link:"", name:"I didn't ... Did you ...?(past simple negative and questions)"}, //12
        {id:13, link:"", name:"I was doing (past continous)"}, //13
        {id:14, link:"", name:"I was doing (past continous) and I did (past simple)"}, //14
        {id:15, link:"", name:"I have done (present perfect 1)"}, //15
        {id:16, link:"", name:"I've just ... I've already ... I haven't ... yet (present perfect 2)"}, //16
        {id:17, link:"", name:"Haver you ever ... ? (present perfect 3)"}, //17
        {id:18, link:"", name:"How long have you ... ? (present perfect 4)"}, //18
        {id:19, link:"", name:"for since ago", //19
        {id:20, link:"", name:"I have done(present perfect) and I did (past)"}, //20
        {id:21, link:"", name:"is done was done (passive 1)"}, //21
        {id:22, link:"", name:"is being done has been done (passive 2)"}, //22
        {id:23, link:"", name:"be / have / do in present and past tenses"}, //23
        {id:24, link:"", name:"Regular and irregular verbs"}, //24
        {id:25, link:"", name:"What are you doing tomorrow?"}, //25
        {id:26, link:"", name:"I'm going to ..."}, //26
        {id:27, link:"", name:"will / shall 1"}, //27
        {id:28, link:"", name:"will / shall 2"}, //28
        {id:29, link:"", name:"might"}, //29
        {id:30, link:"", name:"can and could"}, //30
        {id:31, link:"", name:"must mustn't don't need to"}, //31
        {id:32, link:"", name:"should"}, //32
        {id:33, link:"", name:"I have to ..."}, //33
        {id:34, link:"", name:"Would you like ... ? I'd like ..."}, //34
        {id:35, link:"", name:"Do this! Don't do that! Let's do this!"}, //35
        {id:36, link:"", name:"I used to ..."}, //36
        {id:37, link:"", name:"there is there are"}, //37
        {id:38, link:"", name:"there was / were there has / have been there will be"}, //38
        {id:39, link:"", name:"It ..."}, //39
        {id:40, link:"", name:"I am, i don't etc."}, //40
        {id:41, link:"", name:"Have you? Are you? Don't you? etc."}, //41
        {id:42, link:"", name:"too / either so am I / neither do I etc."}, //42
        {id:43, link:"", name:"isn't, haven't, don't, etc. (negatives)"}, //43
        {id:44, link:"", name:"is it ... ? have you ... ? do they ... ? etc. (questions 1)"}, //44
        {id:45, link:"", name:"Who saw you? Who did you see? (questions 2)"}, //45
        {id:46, link:"", name:"Who is talking to? What is it like? (questions 3)"}, //46
        {id:47, link:"", name:"What ...? Which ... ? How ... ? (questions 4)"}, //47
        {id:48, link:"", name:"How long does it take ... ?"}, // 48
        {id:49, link:"", name:"Do you know where ... ? I don't know what ... etc"}, //49
        {id:50, link:"", name:"She said that ... He told me that ..."}, //50
        "work / working go / going do / doing", //51
        "to ... (I want to do) and -ing (I enjoy doing)", //52
        "I want to ... I told you to ...", //53
        "I went to the shop to ...", //54
        "go to ... go on .. go for ... go -ing", //55
        "get", //56
        "do and make", //57
        "have", //58
        "I / me he / him they / them etc.", //59
        "my / his / their etc.", //60
        "Whose is this? It's mine / yours / hers etc.", //61
        "I / me / my / mine", //62
        "myself / yourself / themselves etc.", //63
        "-'s (kate's camera / my brother's car etc.)", //64
        "a / an ...", //65
        "train(s) bus(es) (singular and plural)", //66
        "a bottle / some water (countable / uncountable 1)", //67
        "a cake / some cake / some cakes (countable / uncountable 2)", //68
        "a / an and the", //69
        "the ...", //70
        "go to work go home go to the cinema", //71
        "I like music I hat exam", //72
        "the ... (names of places)", //73
        "this / that / these / those", //74
        "one / ones", //75
        "some and any", //76
        "not + any no none", //77
        "not + anybody / anyone / anything nobody / no-one / nothing", //78
        "somebody / anything / nowhere etc.", //79
        "every and all", //80
        "all most some any no/none", //81
        "both either neither", //82
        "a lot much many", //83
        "(a) little (a) few",  //84
        "old/nice/interesting etc. (adjectives)", //85
        "quickly/badly/suddenly etc. (adverbs)", //86
        "old/older expensive/more expensive", //87
        "older than... more expensive than...", //88
        "not as...as", //89
        "the oldest the most expensive", //90
        "enough", //91
        "too", //92
        "He speaks English very well. (word order 1)", //93
        "always/usually/ofter etc. (word order 2)", //94
        "still yet already", //95
        "Give me that book! Give it to me!", //96
        "and but or so because", //97
        "When...", //98
        "If we go... If you see... etc.", //99
        "If I had... If we went... etc.", //100
        "a person who... a thing that/which... (relative clauses 1)", //101
        "the person we met the hotel you stayed at (relative clauses 2)", //102
        "at 8 o'click on Monday in April", //103
        "from ... to until since for", //104
        "before after during while", //105
        "in at on (places 1)", //106
        "in at on (places 2)", //107
        "to in at (places 3)", //108
        "under, behind, opposite etc.", //109
        "up, over, through etc.", //110
        "on at by with about", //111
        "afraid of..., good at... etc. of/at/for etc. (prepositions) + ing", //112
        "listen to..., look at... etc. (verb + preposition)", //113
        "go in, fall off, run away etc. (phrasal verbs 1)", //114
        "put on your shoes put your shoes on (phrasal verbs 2)" //115 
    ];

}
