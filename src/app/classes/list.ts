import { Wishlist } from "./wishlist";
import { SIZES } from './sizes';
import { COLORS } from './color';


export const WISHLIST_USERS: Wishlist[] = [ 
    { img: "../assets/img1.png", title: "Nike Winflo Road Running", size: SIZES[4],
    color: COLORS[0], price: 25.0, quantity: 1, $key: 1}, 

    { img: "../assets/img4.png", title: "Reebok Royal Techque T LX", size: SIZES[4],
    color: COLORS[8], price: 56.0, quantity: 1, $key: 2},

    { img: "../assets/img5.png", title: "PUMA Shuffle Trainers Black", size: SIZES[4],
    color: COLORS[8], price: 55.0, quantity: 1, $key: 3},

    { img: "../assets/img6.jpg", title: "Fila Men's Disruptor 2 Sneaker", size: SIZES[4],
    color: COLORS[6], price: 55.0, quantity: 1, $key: 4},
]