class Sneaker {
    constructor(id,producto,precio,fechaVencimiento,descripción,categoría,oferta,img) {

        this.id = id
        this.producto =producto
        this.precio =precio
        this.fechaVencimiento =fechaVencimiento
        this.descripción =descripción
        this.categoría =categoría
        this.oferta =oferta
        this.img =img
    }
}



const sneakers = [{
        "id": 1,
        "producto": "FORUM LOW",
        "precio": 15990,
        "fechaVencimiento": "",
        "descripción": "Para pies delgados recomendamos comprar la talla inferior. Revisa la equivalencia, H: Hombre | M: Mujer.",
        "categoría": "sneakers",
        "oferta": true,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3d92ba80e65b47979462ac31012ba09d_9366/Zapatillas_Forum_Low_Blanco_FY7755_01_standard.jpg"
    },
    {
        "id": 2,
        "producto": "ZAPATILLAS FORUM 84",
        "precio": 104990,
        "fechaVencimiento": "",
        "descripción": "Charcoal Solid Grey / Crystal White / Grey Four",
        "categoría": "sneakers",
        "oferta": true,
        "img": "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/907b5630310840a0b42eaef600e5712e_9366/zapatillas-forum-84-home-alone-2.jpg"
    },
    {
        "id": 3,
        "producto": "SANDALIAS LITE",
        "precio": 24990,
        "fechaVencimiento": "",
        "descripción": "Para pies delgados recomendamos comprar la talla inferior. Revisa la equivalencia, H: Hombre | M: Mujer.",
        "categoría": "sandalias",
        "oferta": true,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/882d1e01f08d423c848daaee01133764_9366/Sandalias_adilette_Lite_Negro_FU8298_01_standard.jpg"
    },
    {
        "id": 4,
        "producto": "SANDALIAS AQUA",
        "precio": 24990,
        "fechaVencimiento": "",
        "descripción": "SANDALIAS PARA DESPUÉS DE NADAR CON AMORTIGUACIÓN OPTIMIZADA",
        "categoría": "sandalias",
        "oferta": false,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb1316406e584892bdb3a991001bd46d_9366/Sandalias_Adilette_Aqua_(UNISEX)_Negro_F35543_01_standard.jpg"
    },
    {
        "id": 5,
        "producto": "ZAPATILLAS FORUM LOW",
        "precio": 99990,
        "fechaVencimiento": "",
        "descripción": "CLÁSICAS ZAPATILLAS DE BÁSQUET CON UN DISEÑO DE CORTE BAJO",
        "categoría": "sneakers",
        "oferta": false,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b7beee7c32d4438aaba3acb6001c2e7b_9366/Zapatillas_Forum_Low_Blanco_FY7757_01_standard.jpg"
    },
    {
        "id": 6,
        "producto": "ZAPATILLAS HOOPS",
        "precio": 34990,
        "fechaVencimiento": "",
        "descripción": "Core Black / Cloud White / Cloud White",
        "categoría": "sneakers",
        "oferta": false,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/306ce2073f1148619c3eac0200edc5a9_9366/Zapatillas_Hoops_2.0_Mid_Negro_FY8618_01_standard.jpg"
    },
    {
        "id": 7,
        "producto": "ZAPATILLAS HARDEN",
        "precio": 62990,
        "fechaVencimiento": "",
        "descripción": "Core Black / Gold Metallic / Core Black",
        "categoría": "sneakers",
        "oferta": true,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e6ae7567069a4d6b8773adf80127ad97_9366/Zapatillas_Harden_Stepback_3_Negro_GY8631_01_standard.jpg"
    },
    {
        "id": 8,
        "producto": "ZAPATILLAS LOW",
        "precio": 52990,
        "fechaVencimiento": "",
        "descripción": "Cloud White / Cloud White / Cloud White",
        "categoría": "sneakers",
        "oferta": false,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3d92ba80e65b47979462ac31012ba09d_9366/Zapatillas_Forum_Low_Blanco_FY7755_01_standard.jpg"
    },
    {
        "id": 9,
        "producto": "ZAPATILLAS CORERACER",
        "precio": 39992,
        "fechaVencimiento": "",
        "descripción": "Tech Indigo / Legend Ink / Core Black",
        "categoría": "sneakers",
        "oferta": true,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3fe78e47bdf54e4d8fc8abaa013044be_9366/Zapatillas_Coreracer_Azul_FX3594_01_standard.jpg"
    },
    {
        "id": 10,
        "producto": "ZAPATILLAS FLUIDFLOW 2.0",
        "precio": 45493,
        "fechaVencimiento": "",
        "descripción": "Sonic Ink / Grey Five / Core Black",
        "categoría": "sneakers",
        "oferta": false,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/417ca8f92d254b38a0faad3300fdbe2c_9366/Zapatillas_Fluidflow_2.0_Azul_G58105_01_standard.jpg"
    },
    {
        "id": 11,
        "producto": "ZAPATILLAS DE LONA TERREX VOYAGER 21",
        "precio": 55990,
        "fechaVencimiento": "",
        "descripción": "Core Black / Grey Five / Impact Orange",
        "categoría": "sneakers",
        "oferta": false,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/84c9631459354240ae60ae290157c2cf_9366/Zapatillas_de_Lona_Terrex_Voyager_21_Negro_GX8676_01_standard.jpg"
    },
    {
        "id": 12,
        "producto": "ZAPATILLAS DE RUNNING ADIDAS ADIZERO SL",
        "precio": 109990,
        "fechaVencimiento": "",
        "descripción": "Cloud White / Lucid Blue / Lucid Fuchsia",
        "categoría": "sneakers",
        "oferta": true,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/626aefae60f647a496e6aef900bab3bf_9366/Zapatillas_De_Running_Adidas_Adizero_SL_Blanco_GV9095_01_standard.jpg"
    },
    {
        "id": 13,
        "producto": "ZAPATILLAS NMD_V3",
        "precio": 129990,
        "fechaVencimiento": "",
        "descripción": "Crystal White / Grey Five / Grey Three",
        "categoría": "sneakers",
        "oferta": false,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bfff95f0750341bf939daed70141260e_9366/Zapatillas_NMD_V3_Blanco_GX9468_01_standard.jpg"
    },
    {
        "id": 14,
        "producto": "ZAPATILLAS D ROSE 4 RESTOMOD",
        "precio": 76394,
        "fechaVencimiento": "",
        "descripción": "Bright Red / Solar Yellow / Team Solar Orange",
        "categoría": "sneakers",
        "oferta": false,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c7d0517dce6b47048fb1ac6100034524_9366/Zapatillas_D_Rose_4_Restomod_Rojo_FX5014_01_standard.jpg"
    },
    {
        "id": 15,
        "producto": "ZAPATILLAS EQ19 RUN",
        "precio": 32990,
        "fechaVencimiento": "",
        "descripción": "Core Black / Cloud White / Iron Metallic",
        "categoría": "sneakers",
        "oferta": false,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1e2171ece28141cfa060ae8b00a6daab_9366/Zapatillas_EQ19_Run_Negro_GY4719_01_standard.jpg"
    }
]