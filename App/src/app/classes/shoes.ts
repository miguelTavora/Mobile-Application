import { Shoe } from './shoe';
import { SHOE_TYPE} from './shoe_type';
import { BRAND } from './brand';
import { COLORS } from './color';
import { SIZES } from './sizes';
import { GENDER } from './gender';

 export const SHOES: Shoe[] = [ 
    { name: "Nike Winflo Road Running", price: 25.0, description:"Lorem Ipsum is simply dummy text of the printing\
     and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
     type: SHOE_TYPE[5], brand: BRAND[2], colors: [COLORS[0]], sizes: [SIZES[4], SIZES[5], SIZES[6]],
     photo: "../assets/img1.png", stock: true, gender: [GENDER[0]], video: null, selled: 900, $key:'0'

    },
    { name: "Reebok Royal Techque T LX", price: 56.0, description:"Amplify your old-school court style.\
     These men's tennis-inspired shoes elevate your wardrobe with retro colourways.",
     type: SHOE_TYPE[5], brand: BRAND[1], colors: [COLORS[8]], sizes: [SIZES[4], SIZES[5], SIZES[6]],
     photo: "../assets/img4.png", stock: true, gender: [GENDER[0], GENDER[1]], video: null, selled: 5, $key:'1'

    },
    { name: "PUMA Shuffle Trainers Black", price: 55.0, description:"hange up your wardrobe with a\
     fresh infusion of style in our PUMA Shuffle Trainers. ",
     type: SHOE_TYPE[5], brand: BRAND[0], colors: [COLORS[8]], sizes: [SIZES[4], SIZES[5], SIZES[6]],
     photo: "../assets/img5.png", stock: true, gender: [GENDER[0], GENDER[1]], video: null, selled: 45, $key:'2'

    },

    { name: "Fila Men's Disruptor 2 Sneaker", price: 55.0, description:"Comfortable, durable and great looking, these\
     athletic trainers for women and men",
     type: SHOE_TYPE[5], brand: BRAND[3], colors: [COLORS[6]], sizes: [SIZES[4], SIZES[5], SIZES[6], SIZES[7], SIZES[8]],
     photo: "../assets/img6.jpg", stock: true, gender: [GENDER[0], GENDER[1]], video: null, selled: 20, $key:'3'

    },

    { name: "Converse Shoes from Canada", price: 60.0, description:"Buy converse shoes Original Wholesale Canada.\
     Find sales and discount prices on shoes. Wide range of colours & sizes.",
     type: SHOE_TYPE[5], brand: BRAND[4], colors: [COLORS[4]], sizes: [SIZES[5], SIZES[6], SIZES[7], SIZES[8]],
     photo: "../assets/img7.png", stock: true, gender: [GENDER[0], GENDER[1]], video: null, selled: 10, $key:'4'

    },

    { name: "ZOU XOU Mule in Black Glaze", price: 200.0, description:"This style is part of our core collection.\
     We've been making it since day 1 because it's chic, comfortable and smart. ",
     type: SHOE_TYPE[4], brand: BRAND[5], colors: [COLORS[6]], sizes: [SIZES[0], SIZES[1], SIZES[5], SIZES[6]],
     photo: "../assets/img8.jpg", stock: true, gender: [GENDER[1]], video: null, selled: 12, $key:'5'

    },

    { name: "The Twist, Dusty Violet Leather", price: 250.0, description:"Effortless and wearable all day,\
     this graceful sandal is a heeled slide with a twist.",
     type: SHOE_TYPE[4], brand: BRAND[6], colors: [COLORS[1]], sizes: [SIZES[0], SIZES[1], SIZES[5], SIZES[6]],
     photo: "../assets/img9.png", stock: true, gender: [GENDER[1]], video: null, selled: 17, $key:'6'

    },

    { name: "Reebok Nano X2 Shoes Workout", price: 110.0, description:"From pistol squats to burpees,\
     there's no shortage of moves to take your workout to the next level.",
     type: SHOE_TYPE[5], brand: BRAND[1], colors: [COLORS[6], COLORS[7]], sizes: [SIZES[0], SIZES[1], SIZES[5], SIZES[6]],
     photo: "../assets/img10.jpg", stock: true, gender: [GENDER[0], GENDER[1]], video: null, selled: 52, $key:'7'

    },

    { name: "Suede Classic XXI Men's Sneakers", price: 70.0, description:"The Suede hit the scene in 1968 and has been\
     changing the game ever since. It’s been worn by the icons of every generation and i",
     type: SHOE_TYPE[5], brand: BRAND[0], colors: [COLORS[6]], sizes: [SIZES[2], SIZES[3], SIZES[5], SIZES[6]],
     photo: "../assets/img11.jpg", stock: true, gender: [GENDER[0]], video: null, selled: 20, $key:'8'

    },

    { name: "Casual white shoes from FILA", price: 75.0, description:"Easy 15 days return and exchange.\
     Return Policies may vary based on products and promotions.",
     type: SHOE_TYPE[5], brand: BRAND[3], colors: [COLORS[8]], sizes: [SIZES[2], SIZES[3], SIZES[5], SIZES[6]],
     photo: "../assets/img12.png", stock: true, gender: [GENDER[0], GENDER[1]], video: null, selled: 44, $key:'9'

    },

    { name: "Star Replay Youth Sneakers", price: 45.0, description:"Made with a statement platform sole,\
     the Converse Star Replay Low Top sneaker combines essential design elements to create a must-have sneaker.",
     type: SHOE_TYPE[5], brand: BRAND[4], colors: [COLORS[6]], sizes: [SIZES[2], SIZES[3], SIZES[5], SIZES[6]],
     photo: "../assets/img13.png", stock: true, gender: [GENDER[2]], video: null, selled: 13, $key:'10'

    },

    { name: "Nike Rock Dunk new white shoes", price: 100.0, description:"Rock it like it's hot and bring some of that\
     '00s magic back to the future in the Nike Dunk High By You",
     type: SHOE_TYPE[5], brand: BRAND[2], colors: [COLORS[4], COLORS[8]], sizes: [SIZES[1], SIZES[2], SIZES[3], SIZES[4]],
     photo: "../assets/img14.png", stock: true, gender: [GENDER[0]], video: null, selled: 33, $key:'11'

    },

    { name: "Nike Rock Dunk new black shoes", price: 120.0, description:"Rock it like it's hot and bring some of that\
     '00s magic back to the future in the Nike Dunk High By You",
     type: SHOE_TYPE[5], brand: BRAND[2], colors: [COLORS[0], COLORS[6]], sizes: [SIZES[2], SIZES[3], SIZES[5], SIZES[6]],
     photo: "../assets/img15.png", stock: true, gender: [GENDER[0]], video: null, selled: 27, $key:'12'

    },

    { name: "Italiano Leather Formal Oxford", price: 70.0, description:"Genuine Leather, lets air in to coo\
     your feet and stop them from getting the prudent odour, can outlive other shoes made from synthetic materials, our waxed leather is water-resistant",
     type: SHOE_TYPE[0], brand: BRAND[2], colors: [COLORS[6]], sizes: [SIZES[2], SIZES[3], SIZES[4], SIZES[5], SIZES[6]], 
     photo: "../assets/img16.png", stock: true, gender: [GENDER[0]], video: null, selled: 400, $key:'13'

    },

    { name: "Women's ballet flat with Horsebitd", price: 60.0, description:"A square toed ballet flat crafted from smooth white leather.\
     Presented in a shiny gold tone, the Horsebit is an archival symbol that recalls the House's equestrian heritage.",
     type: SHOE_TYPE[1], brand: BRAND[5], colors: [COLORS[8]], sizes: [SIZES[2], SIZES[3], SIZES[4], SIZES[5], SIZES[6]], 
     photo: "../assets/img17.jpg", stock: true, gender: [GENDER[1]], video: null, selled: 44, $key:'14'

    },

    { name: "Nike BENASSI JDI Black Slippers", price: 35.0, description:"Lifted. Classic hoops detailing. Strappy but easy to wear.\
     Tick all the boxes in the Nike Icon Classic. Its big, bold midsole wows with comfort. ",
     type: SHOE_TYPE[2], brand: BRAND[2], colors: [COLORS[6]], sizes: [SIZES[2], SIZES[3], SIZES[4], SIZES[5], SIZES[6]], 
     photo: "../assets/img18.png", stock: true, gender: [GENDER[0], GENDER[1]], video: null, selled: 56, $key:'15'

    },

    { name: "Man's Black Leather Oxford shoe", price: 60.0, description:"These classic black Oxford toe cap shoes\
     are the perfect choice for smart, executive footwear.",
     type: SHOE_TYPE[3], brand: BRAND[6], colors: [COLORS[6]], sizes: [SIZES[2], SIZES[3], SIZES[4], SIZES[5], SIZES[6]], 
     photo: "../assets/img19.png", stock: true, gender: [GENDER[0]], video: null, selled: 45, $key:'16'

    }
]

