'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(  //generamos data seed con la siguiente informacion
      "Products",
      [
        {
          image: "https://static.nike.com/a/images/t_default/cc33d414-0964-45b3-9b62-2d5fffe8ccb1/dri-fit-swoosh-run-womens-short-sleeve-running-top-hLwS8S.png",
          name: "Nike Dri-FIT Swoosh Run",
          brand: "Nike",
          presentation: "Women's Short-Sleeve Running Top",
          price: 40,
        },
        {
          image: "https://static.nike.com/a/images/t_default/6a7590e6-f319-4bb1-98b4-fec45783c915/sportswear-essential-womens-oversized-short-sleeve-top-plus-size-V6cpm9.png",
          name: "Nike Sportswear Essential",
          brand: "Nike",
          presentation: "Women's Oversized Short-Sleeve Top (Plus Size)",
          price: 30,
        },
        {
          image: "https://static.nike.com/a/images/t_default/f247f288-6ddf-43ba-82a4-8783f71877cf/dri-fit-m-womens-maternity-t-shirt-xqFZpQ.png",
          name: "Nike Dri-FIT (M)",
          brand: "Nike",
          presentation: "Women's Maternity T-Shirt",
          price: 35,
        },
        {
          image: "https://static.nike.com/a/images/t_default/cc33d414-0964-45b3-9b62-2d5fffe8ccb1/dri-fit-swoosh-run-womens-short-sleeve-running-top-hLwS8S.png",
          name: "Nike Dri-FIT Swoosh Run",
          brand: "Nike",
          presentation: "Women's Short-Sleeve Running Top",
          price: 40,
        },
        {
          image: "https://static.nike.com/a/images/t_default/6a7590e6-f319-4bb1-98b4-fec45783c915/sportswear-essential-womens-oversized-short-sleeve-top-plus-size-V6cpm9.png",
          name: "Nike Sportswear Essential",
          brand: "Nike",
          presentation: "Women's Oversized Short-Sleeve Top (Plus Size)",
          price: 30,
        },
        {
          image: "https://static.nike.com/a/images/t_default/f247f288-6ddf-43ba-82a4-8783f71877cf/dri-fit-m-womens-maternity-t-shirt-xqFZpQ.png",
          name: "Nike Dri-FIT (M)",
          brand: "Nike",
          presentation: "Women's Maternity T-Shirt",
          price: 35,
        },
        {
          image: "https://static.nike.com/a/images/t_default/cc33d414-0964-45b3-9b62-2d5fffe8ccb1/dri-fit-swoosh-run-womens-short-sleeve-running-top-hLwS8S.png",
          name: "Nike Dri-FIT Swoosh Run",
          brand: "Nike",
          presentation: "Women's Short-Sleeve Running Top",
          price: 40,
        },
        {
          image: "https://static.nike.com/a/images/t_default/6a7590e6-f319-4bb1-98b4-fec45783c915/sportswear-essential-womens-oversized-short-sleeve-top-plus-size-V6cpm9.png",
          name: "Nike Sportswear Essential",
          brand: "Nike",
          presentation: "Women's Oversized Short-Sleeve Top (Plus Size)",
          price: 30,
        },
        {
          image: "https://static.nike.com/a/images/t_default/f247f288-6ddf-43ba-82a4-8783f71877cf/dri-fit-m-womens-maternity-t-shirt-xqFZpQ.png",
          name: "Nike Dri-FIT (M)",
          brand: "Nike",
          presentation: "Women's Maternity T-Shirt",
          price: 35,
        },
        {
          image: "https://static.nike.com/a/images/t_default/cc33d414-0964-45b3-9b62-2d5fffe8ccb1/dri-fit-swoosh-run-womens-short-sleeve-running-top-hLwS8S.png",
          name: "Nike Dri-FIT Swoosh Run",
          brand: "Nike",
          presentation: "Women's Short-Sleeve Running Top",
          price: 40,
        },
        {
          image: "https://static.nike.com/a/images/t_default/6a7590e6-f319-4bb1-98b4-fec45783c915/sportswear-essential-womens-oversized-short-sleeve-top-plus-size-V6cpm9.png",
          name: "Nike Sportswear Essential",
          brand: "Nike",
          presentation: "Women's Oversized Short-Sleeve Top (Plus Size)",
          price: 30,
        },
        {
          image: "https://static.nike.com/a/images/t_default/f247f288-6ddf-43ba-82a4-8783f71877cf/dri-fit-m-womens-maternity-t-shirt-xqFZpQ.png",
          name: "Nike Dri-FIT (M)",
          brand: "Nike",
          presentation: "Women's Maternity T-Shirt",
          price: 35,
        },
        {
          image: "https://static.nike.com/a/images/t_default/cc33d414-0964-45b3-9b62-2d5fffe8ccb1/dri-fit-swoosh-run-womens-short-sleeve-running-top-hLwS8S.png",
          name: "Nike Dri-FIT Swoosh Run",
          brand: "Nike",
          presentation: "Women's Short-Sleeve Running Top",
          price: 40,
        },
        {
          image: "https://static.nike.com/a/images/t_default/6a7590e6-f319-4bb1-98b4-fec45783c915/sportswear-essential-womens-oversized-short-sleeve-top-plus-size-V6cpm9.png",
          name: "Nike Sportswear Essential",
          brand: "Nike",
          presentation: "Women's Oversized Short-Sleeve Top (Plus Size)",
          price: 30,
        },
        {
          image: "https://static.nike.com/a/images/t_default/f247f288-6ddf-43ba-82a4-8783f71877cf/dri-fit-m-womens-maternity-t-shirt-xqFZpQ.png",
          name: "Nike Dri-FIT (M)",
          brand: "Nike",
          presentation: "Women's Maternity T-Shirt",
          price: 35,
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {  
    await queryInterface.bulkDelete('Products', null, {});
  }
};
