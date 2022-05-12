
export const filterData = [
  {
    id:1, 
    name: "Fast food", 
    image: require("../assets/food_images/fries.jpg")
  },
  {
    id:2, 
    name: "Burgers", 
    image: require("../assets/food_images/burger.jpg")
  },
  {
    id:3, 
    name: "Salads", 
    image: require("../assets/food_images/salad.jpg")
  },
  {
    id:4, 
    name: "Hotdogs", 
    image: require("../assets/food_images/hotdogs.jpg")
  },
  {
    id:5, 
    name: "Chinese", 
    image: require("../assets/food_images/chinese.jpg")
  },
  {
    id:6, 
    name: "Mexican", 
    image: require("../assets/food_images/mexican.jpg")
  },
  {
    id:7, 
    name: "Seafood", 
    image: require("../assets/food_images/seafood.jpg")
  }
]

export const filterData2 = [
  {
    name:"Fast food",
    image:"https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    id:"0"
  },
  {
    name:"Burgers",
    image:"https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    id:"1"
  },
  {
    name:"Salads",
    image:"https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    id:"2"
  },
  {
    name:"Hotdog",
    image:"https://images.pexels.com/photos/3023479/pexels-photo-3023479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    id:"3"
  },
  {
    name:"Chinese",
    image:"https://images.pexels.com/photos/688803/pexels-photo-688803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    id:"4"
  },
  {
    name:"Mexican",
    image:"https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    id:"5"
  },  
  {
    name:"Sea food",
    image: "https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    id:"6"
  },
  {
    name:"Japanese Food",
    image:"https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=600",
    id:"7"
  },
  {
    name:"Dessert",
    image:"https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    id:"8"
  },  
  {
    name:"Georgian food",
    image:"https://images.pexels.com/photos/6322053/pexels-photo-6322053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    id:"9"
  },
];

export const restaurantsData = [
  {restaurantName:"Mc Donalds", farAway:"21.2",
  businessAddress:"22 Bessie street, Cape Town",images:'https://bukasapics.s3.us-east-2.amazonaws.com/chicken.png',
  averageReview:4.9,numberOfReview:272,coordinates : {lat: -26.1888612, lng: 28.246325} ,discount:10,deliveryTime:15,
  collectTime:5, foodType:"Burgers, Wraps,Milkshakes..." ,
  productData:[{name:"Hand cut chips", price:29.30,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"},
  {name:"Big Mac", price:50.80,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png"},{name:"Chicken Burger",
   price:70,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"},
    ],
  id:0},  
  {restaurantName:"KFC", farAway:"12.7",businessAddress:"22 Bessie street, Cape Town",
  images:'https://bukasapics.s3.us-east-2.amazonaws.com/macdo.png',
  averageReview:4.3, numberOfReview:306, coordinates : {lat: -26.1891648, lng: 28.2441808},
  discount:20,deliveryTime:30,collectTime:10, foodType:"Chicken,Chicken wings... ",
  productData:[{name:"Hand cut chips", price:29.30,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"},
  {name:"Big Mac", price:50.80,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png"},
  {name:"Chicken Burger", price:70,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"},
      ],
  id:1},  
  {restaurantName:"Steers", farAway:"5",businessAddress:" 17 Olivia Rd, Johannesburg",
  images:'https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png',
   coordinates :{ lat: -26.1886781, lng: 28.244879}, averageReview: 4.9,numberOfReview: 1272,
    discount:12, deliveryTime:25,collectTime:15,foodType:"Flame grilled beef Burgers",
   productData:[{name:"Hand cut chips", price:29.30,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"},
    {name:"Big Mac", price:50.80,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png"},{name:"Chicken Burger",
     price:70,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"},
      ],
   id:2},  
  {restaurantName:"Roman Pizza", farAway:"7",businessAddress:" 15 Atlas Rd, Kempton Park",
  images:'https://bukasapics.s3.us-east-2.amazonaws.com/pizza6.png',
  averageReview:4.3, numberOfReview:700, coordinates: {lat: -26.1845336, lng: 28.2481691},
  discount:null,deliveryTime:20,collectTime:10,foodType:"Chicken pizza, Vegetarian pizza...",
  productData:[{name:"Hand cut chips", price:29.30,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"},
    {name:"Big Mac", price:50.80,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png"},{name:"Chicken Burger",
     price:70,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"},
      ],
  id:3},
]



