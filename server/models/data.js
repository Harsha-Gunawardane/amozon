const bcrypt = require("bcrypt");

const products = [
  {
    id: "1",
    images: [
      "https://i5.walmartimages.com/asr/a1952b88-3d63-4b15-a19f-2b073db7194c.47b87fdee08b3c52763b51bc99c7cbfb.jpeg",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://th.bing.com/th/id/R.66841b0f815c3e9ea894e650191ba1d6?rik=u7aovFsMxbkK%2bQ&pid=ImgRaw&r=0",
      "https://cdn.hibid.com/img.axd?id=7793083471&wid=&rwl=false&p=&ext=&w=0&h=0&t=&lp=&c=true&wt=false&sz=MAX&checksum=LmD%2fPGLQnEEDWxeQaVsD4Yybqba%2fQR8P",
    ],
    stockCount: 3,
    name: "Living room Sofa 1",
    description:
      "This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
    price: "$450",
  },
  {
    id: "2",
    images: [
      "https://i5.walmartimages.com/asr/a1952b88-3d63-4b15-a19f-2b073db7194c.47b87fdee08b3c52763b51bc99c7cbfb.jpeg",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://th.bing.com/th/id/R.66841b0f815c3e9ea894e650191ba1d6?rik=u7aovFsMxbkK%2bQ&pid=ImgRaw&r=0",
      "https://cdn.hibid.com/img.axd?id=7793083471&wid=&rwl=false&p=&ext=&w=0&h=0&t=&lp=&c=true&wt=false&sz=MAX&checksum=LmD%2fPGLQnEEDWxeQaVsD4Yybqba%2fQR8P",
    ],
    stockCount: 3,
    name: "Living room Sofa 2",
    description:
      "This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
    price: "$450",
  },
  {
    id: "3",
    images: [
      "https://i5.walmartimages.com/asr/a1952b88-3d63-4b15-a19f-2b073db7194c.47b87fdee08b3c52763b51bc99c7cbfb.jpeg",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://th.bing.com/th/id/R.66841b0f815c3e9ea894e650191ba1d6?rik=u7aovFsMxbkK%2bQ&pid=ImgRaw&r=0",
      "https://cdn.hibid.com/img.axd?id=7793083471&wid=&rwl=false&p=&ext=&w=0&h=0&t=&lp=&c=true&wt=false&sz=MAX&checksum=LmD%2fPGLQnEEDWxeQaVsD4Yybqba%2fQR8P",
    ],
    stockCount: 0,
    name: "Living room Sofa 3",
    description:
      "This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
    price: "$450",
  },
  {
    id: "4",
    images: [
      "https://i5.walmartimages.com/asr/a1952b88-3d63-4b15-a19f-2b073db7194c.47b87fdee08b3c52763b51bc99c7cbfb.jpeg",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://th.bing.com/th/id/R.66841b0f815c3e9ea894e650191ba1d6?rik=u7aovFsMxbkK%2bQ&pid=ImgRaw&r=0",
      "https://cdn.hibid.com/img.axd?id=7793083471&wid=&rwl=false&p=&ext=&w=0&h=0&t=&lp=&c=true&wt=false&sz=MAX&checksum=LmD%2fPGLQnEEDWxeQaVsD4Yybqba%2fQR8P",
    ],
    stockCount: 3,
    name: "Living room Sofa 4",
    description:
      "This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
    price: "$450",
  },
  {
    id: "5",
    images: [
      "https://i5.walmartimages.com/asr/a1952b88-3d63-4b15-a19f-2b073db7194c.47b87fdee08b3c52763b51bc99c7cbfb.jpeg",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://th.bing.com/th/id/R.66841b0f815c3e9ea894e650191ba1d6?rik=u7aovFsMxbkK%2bQ&pid=ImgRaw&r=0",
      "https://cdn.hibid.com/img.axd?id=7793083471&wid=&rwl=false&p=&ext=&w=0&h=0&t=&lp=&c=true&wt=false&sz=MAX&checksum=LmD%2fPGLQnEEDWxeQaVsD4Yybqba%2fQR8P",
    ],
    stockCount: 3,
    name: "Living room Sofa 5",
    description:
      "This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
    price: "$450",
  },
  {
    id: "6",
    images: [
      "https://i5.walmartimages.com/asr/a1952b88-3d63-4b15-a19f-2b073db7194c.47b87fdee08b3c52763b51bc99c7cbfb.jpeg",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://th.bing.com/th/id/R.66841b0f815c3e9ea894e650191ba1d6?rik=u7aovFsMxbkK%2bQ&pid=ImgRaw&r=0",
      "https://cdn.hibid.com/img.axd?id=7793083471&wid=&rwl=false&p=&ext=&w=0&h=0&t=&lp=&c=true&wt=false&sz=MAX&checksum=LmD%2fPGLQnEEDWxeQaVsD4Yybqba%2fQR8P",
    ],
    stockCount: 3,
    name: "Living room Sofa 6",
    description:
      "This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
    price: "$450",
  },
];

module.exports = products;
const pwd = "Harsha@123";
const hashedPwd = bcrypt.hash(pwd, 10)

const users = [
  {
    name: "John",
    email: "john@gmail.com",
    password: pwd,
    isAdmin: true,
  },
  {
    name: "Adam",
    email: "adam@gmail.com",
    password: pwd,
    isAdmin: false,
  },
  {
    name: "Smith",
    email: "smith@gmail.com",
    password: pwd,
    isAdmin: false,
  },
];

module.exports = { users };
