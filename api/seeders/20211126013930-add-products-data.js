'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(  //generamos data seed con la siguiente informacion
      "Products",
      [
        {
          image: "https://i.postimg.cc/ZqbPpNGC/tarwi-en-harina-200gr.png",
          name: "Tarwi en harina",
          brand: "Tarwi",
          presentation: "Tarwi en harina",
          price: 10,
        },
        {
          image: "https://i.postimg.cc/kDPMPJnb/stevia-organica-polvo-15gr-coronel.jpg",
          name: "Stevia pura en polvo",
          brand: "Coronel",
          presentation: "Stevia organica en frasco",
          price: 25,
        },
        {
          image: "https://i.postimg.cc/qvXq036M/sal-de-maras-600gr-maras-gourmet.jpg",
          name: "Sal rosada de maras",
          brand: "Saldemaras",
          presentation: "Sal",
          price: 15,
        },
        {
          image: "https://i.postimg.cc/Jhrnhzj3/miel-de-abeja-500gr-abolengo.png",
          name: "Miel de abeja de flores",
          brand: "Abolengo",
          presentation: "Miel de abeja en frasco",
          price: 10,
        },
        {
          image: "https://i.postimg.cc/v8kvkcVN/mascarilla-kit-detox-waori.jpg",
          name: "Kit Mascarilla barro detox + Vinagre Manzana",
          brand: "Waqri",
          presentation: "Kit",
          price: 20,
        },
        {
          image: "https://i.postimg.cc/YSdSLBx5/mantequilla-almendras-330gr-nutlovers.jpg",
          name: "Mantequilla de Mani",
          brand: "Nuts Lovers",
          presentation: "Mantequilla en frasco",
          price: 15,
        },
        {
          image: "https://i.postimg.cc/TPtV9wxQ/jabon-natural-relajante-100g-saysi.png",
          name: "Jabon Natural Relajante",
          brand: "Saysi",
          presentation: "Jabones en barra",
          price: 8,
        },
        {
          image: "https://i.postimg.cc/BnGbdg6V/guee-mantequilla-clarificada-200gr-guee-mothers.jpg",
          name: "Mantequilla clarificada sin sal",
          brand: "Ghee",
          presentation: "Mantequilla en frasco",
          price: 15,
        },
        {
          image: "https://i.postimg.cc/vBDZW2qc/curcuma-organica-capsulas-100x500mg-amazon.jpg",
          name: "Cúrcuma Orgánica Capsulas",
          brand: "Amazin Andes",
          presentation: "Cápsulas",
          price: 15,
        },
        {
          image: "https://i.postimg.cc/pVpZsDpj/crema-de-argan-400ml-natumaroc.jpg",
          name: "Crema corporal con Aceite de Argán",
          brand: "NatuMarot",
          presentation: "Cremas corporales",
          price: 20,
        },
        {
          image: "https://i.postimg.cc/hvd4Yzqn/cacao-en-polvo-organico-200gr-inkanat.jpg",
          name: "Cacao en polvo orgánico",
          brand: "Inkanat",
          presentation: "Cacao en polvo orgánico",
          price: 10,
        },
        {
          image: "https://i.postimg.cc/GmJJ4KSW-/barra-proteica-banana-60g-nampi.jpg",
          name: "Dark Chocolate Coated Banana",
          brand: "Nampi",
          presentation: "Barras energéticas",
          price: 5,
        },
        {
          image: "https://i.postimg.cc/CxVsMXJC/aceite-esencial-naranja-10ml-eop.jpg",
          name: "Aceite Esencial de Naranja",
          brand: "EOP",
          presentation: "Aceites Esenciales",
          price: 12,
        },
        {
          image: "https://i.postimg.cc/MKBYSq0K/aceite-de-coco-250ml-roinka.jpg",
          name: "Aceite de Coco",
          brand: "Roinka",
          presentation: "Aceites Naturales",
          price: 15,
        },
        {
          image: "https://i.postimg.cc/NMVfb8Sb/aceite-esencial-de-eucalipto-10ml-eop.jpg",
          name: "Aceite Esencial de Eucalipto",
          brand: "EOP",
          presentation: "Aceites Esenciales",
          price: 12,
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {  
    await queryInterface.bulkDelete('Products', null, {});
  }
};
