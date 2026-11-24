/* =========================================================
   CARTA OFICIAL KONAKAI
   Fuente: "CARTA KONAKAI DISEÑO 1.pdf", "KONAKAI LUNCH SPECIALS 1.pdf" y cartas de vinos/cócteles.
   Postres: precios de la ficha de Google (nov 2026).
   Formato de plato:
     n  = nombre
     p  = precio ("MKP" = precio de mercado)
     d  = descripción en inglés · de = descripción en español
     v  = variantes: [["English", "precio", "Español"], ...]
     from = true muestra "desde"
     t / te = traducción o subtítulo bajo el nombre (inglés / español)
   ========================================================= */
const CARTA = [
  { id: "appetizers", en: "Appetizers", es: "Entradas", groups: [{ items: [
    { n: "Palta Rellena", d: "Stuffed avocado.", de: "Palta rellena.",
      v: [["Chicken or tuna", "16.99", "Pollo o atún"], ["Shrimp", "18.99", "Camarón"]] },
    { n: "Papa / Yuca a la Huancaína", p: "12.99",
      d: "Boiled potato or fried yuca slices covered in a spicy, creamy cheese sauce.",
      de: "Papa sancochada o yuca frita bañada en cremosa salsa de queso y ají." },
    { n: "Alitas", p: "16.99", d: "Wings and french fries.", de: "Alitas con papas fritas." },
    { n: "Tamal", p: "9.99", d: "Chicken or pork tamal.", de: "Tamal de pollo o de cerdo." },
    { n: "Choros a la Chalaca (6)", p: "13.99",
      d: "Mussels marinated in lime juice, chopped tomatoes, cilantro and Peruvian corn.",
      de: "Choros en jugo de limón con tomate picado, culantro y choclo." },
    { n: "Papa Rellena", p: "15.99" },
    { n: "Anticucho", p: "17.99",
      d: "Beef heart skewers marinated in ají panca, garlic, vinegar and Peruvian spices.",
      de: "Brochetas de corazón de res marinadas en ají panca, ajo, vinagre y especias peruanas." },
    { n: "Anticucho con Rachi", p: "34.99" },
    { n: "Anticucho con Papa a la Huancaína", p: "21.99" },
    { n: "Pulpo Anticuchero", p: "27.99",
      d: "Octopus marinated in special Peruvian spices and grilled to perfection.",
      de: "Pulpo marinado en especias peruanas y a la parrilla." },
    { n: "Causa", d: "Smashed potatoes stuffed with your choice of chicken, tuna or shrimp.",
      de: "Papa amarilla prensada rellena de pollo, atún o camarón.",
      v: [["Chicken or tuna", "13.99", "Pollo o atún"], ["Shrimp", "16.99", "Camarón"], ["Trío", "19.99", "Trío"]] },
    { n: "Causa Acevichada", p: "20.99", v: [["With corvina", "25.99", "Con corvina"]] },
    { n: "Causa Acevichada Carretillera", p: "29.99" },
  ]}]},

  { id: "ceviches", en: "Ceviches", es: "Ceviches", groups: [{ items: [
    { n: "Ceviche Clásico",
      d: "Marinated in lime juice and ají limo with red onion, sweet potato and Peruvian corn. In ají amarillo or rocoto +$2.",
      de: "Marinado en limón y ají limo, con cebolla morada, camote y choclo. En ají amarillo o rocoto +$2.",
      v: [["Classic (house fish)", "17.99", "Clásico (pescado de la casa)"], ["Fish and shrimp", "23.99", "Pescado y camarón"],
          ["Shrimp", "23.99", "Camarón"], ["Corvina", "23.99", "Corvina"], ["Corvina and shrimp", "26.99", "Corvina y camarón"],
          ["Seafood", "24.99", "Mariscos"], ["Seafood and fish (mixed)", "20.99", "Mixto (mariscos y pescado)"],
          ["Seafood and corvina (mixed)", "25.99", "Mixto (mariscos y corvina)"]] },
    { n: "Cocktail Vuelve a la Vida", p: "18.99", d: "Seafood and fish in lime juice.", de: "Mariscos y pescado en jugo de limón." },
    { n: "Leche de Tigre",
      v: [["Classic (house fish)", "15.99", "Clásica (pescado de la casa)"], ["With corvina", "18.99", "Con corvina"], ["Carretillero corvina", "22.99", "Carretillera de corvina"]] },
    { n: "Trilogía de Ceviches",
      d: "Ceviche in three kinds of Peruvian chili peppers with red onion, sweet potato and Peruvian corn.",
      de: "Ceviche en tres ajíes peruanos, con cebolla morada, camote y choclo.",
      v: [["Classic (house fish)", "34.99", "Clásica (pescado de la casa)"], ["Seafood and fish (mixed)", "38.99", "Mixta (mariscos y pescado)"],
          ["Corvina", "44.99", "Corvina"], ["Seafood and corvina (mixed)", "47.99", "Mixta (mariscos y corvina)"]] },
    { n: "Tiraditos", d: "Fresh fish strips marinated in lime juice with cream sauces.",
      de: "Láminas de pescado fresco en limón con cremas de ají.",
      v: [["Ají amarillo", "21.99", "Ají amarillo"], ["Rocoto", "21.99", "Rocoto"]] },
    { n: "Ceviche Carretillero", d: "Traditional ceviche served with crispy calamari.", de: "Ceviche tradicional con chicharrón de calamar.",
      v: [["Classic (house fish)", "22.99", "Clásico (pescado de la casa)"], ["Corvina", "26.99", "Corvina"],
          ["Seafood and fish (mixed)", "25.99", "Mixto (mariscos y pescado)"], ["Seafood and corvina (mixed)", "29.99", "Mixto (mariscos y corvina)"]] },
    { n: "Ceviche Afrodisíaco del Chef", p: "33.99",
      d: "Corvina, shrimp, mussels, octopus, scallops, shells, calamari and avocado.",
      de: "Corvina, camarón, choros, pulpo, vieiras, conchas, calamar y palta." },
  ]}]},

  { id: "piqueos", en: "Platters to share", es: "Piqueos", groups: [{ items: [
    { n: "Konakai Frío", p: "45.99",
      d: "Ceviche clásico, choros a la chalaca (4), papa a la huancaína, chicken or tuna causa.",
      de: "Ceviche clásico, choros a la chalaca (4), papa a la huancaína, causa de pollo o atún." },
    { n: "Criollo", p: "44.99", d: "Cau cau, ají de gallina, seco de res and beans.", de: "Cau cau, ají de gallina, seco de res y frejoles." },
    { n: "Marino", p: "39.99", d: "Ceviche clásico, chicharrón de pescado and seafood chaufa.", de: "Ceviche clásico, chicharrón de pescado y chaufa de mariscos." },
    { n: "Tropikal Konakai", d: "Causa (tuna or chicken), jalea mixta, tostones and shrimp chalaca.",
      de: "Causa (atún o pollo), jalea mixta, tostones y camarones a la chalaca.",
      v: [["With vuelve a la vida clásico", "58.99", "Con vuelve a la vida clásico"], ["With vuelve a la vida + lobster", "MKP", "Con vuelve a la vida + langosta"]] },
  ]}]},

  { id: "meat", en: "Meat", es: "Carnes", groups: [{ items: [
    { n: "Lomo Saltado", p: "24.99",
      d: "Steak strips sautéed with onion, tomato and cilantro in wine and soy sauce, with white rice and fries.",
      de: "Tiras de lomo salteadas al wok con cebolla, tomate y culantro en vino y sillao, con arroz blanco y papas fritas.",
      v: [["Filet mignon", "29.99", "Filet mignon"]] },
    { n: "Lomo Saltado a lo Pobre", p: "29.99", v: [["Filet mignon", "35.99", "Filet mignon"]] },
    { n: "Frijoles con Seco", p: "20.99", d: "Cilantro beef stew with rice and beans.", de: "Seco de res al culantro con arroz y frejoles." },
    { n: "Cau Cau", p: "20.99", d: "Beef tripe stew with potatoes, cilantro and mint, with rice.", de: "Guiso de mondongo con papa, culantro y hierbabuena, con arroz." },
    { n: "Quinoa a la Huancaína o Pesto",
      v: [["With lomo saltado", "29.99", "Con lomo saltado"], ["With churrasco", "29.99", "Con churrasco"]] },
    { n: "Tacu Tacu", d: "Crispy mix of rice, beans and scallions, sautéed in a wok.", de: "Arroz con frejoles y cebolla china, dorado y crocante al wok.",
      v: [["With lomo saltado", "27.99", "Con lomo saltado"], ["With churrasco", "27.99", "Con churrasco"], ["With seco de res", "26.99", "Con seco de res"]] },
    { n: "Tallarín a la Huancaína o Pesto", d: "Spaghetti in huancaína or pesto sauce.", de: "Tallarín en salsa huancaína o pesto (verde).",
      v: [["With lomo saltado", "26.99", "Con lomo saltado"], ["With churrasco", "26.99", "Con churrasco"]] },
    { n: "Churrasco a lo Pobre", p: "29.99", d: "Grilled skirt steak with rice, fried egg, sweet plantains and salad.",
      de: "Churrasco a la parrilla con arroz, huevo frito, maduros y ensalada." },
    { n: "Churrasco a lo Macho", p: "33.99", d: "Grilled skirt steak with seafood sauce.", de: "Churrasco a la parrilla con salsa de mariscos." },
    { n: "Tacacho con Lomo Saltado", p: "27.99" },
  ]}]},

  { id: "chicken", en: "Chicken", es: "Pollo", groups: [{ items: [
    { n: "Pollo Saltado", p: "20.99", d: "The chicken version of the classic lomo saltado.", de: "La versión de pollo del clásico lomo saltado." },
    { n: "Ají de Gallina", p: "19.99", d: "Shredded chicken with potatoes in a creamy ají amarillo sauce, with white rice.",
      de: "Pollo deshilachado en cremosa salsa de ají amarillo con papa, y arroz blanco." },
    { n: "Tallarín a la Huancaína o Pesto",
      v: [["With sautéed chicken", "23.99", "Con pollo salteado"], ["Grilled chicken", "23.99", "Pollo a la plancha"], ["Breaded chicken breast", "23.99", "Pollo empanizado"]] },
    { n: "Quinoa a la Huancaína o Pesto",
      v: [["With sautéed chicken", "27.99", "Con pollo salteado"], ["Grilled chicken", "27.99", "Pollo a la plancha"]] },
    { n: "Tacu Tacu con Pollo Saltado", p: "23.99" },
    { n: "Pollo a la Parrilla a lo Pobre", p: "25.99", d: "Grilled chicken breast with rice, fried egg, sweet plantains and salad.",
      de: "Pechuga a la parrilla con arroz, huevo frito, maduros y ensalada." },
    { n: "Tacacho con Pollo Saltado", p: "26.99" },
  ]}]},

  { id: "seafood", en: "Fish & seafood", es: "Pescados y mariscos", groups: [{ items: [
    { n: "Sudados",
      v: [["Corvina with seafood", "39.99", "Corvina con mariscos"], ["Corvina", "30.99", "Corvina"], ["Corvina with shrimp", "39.99", "Corvina con camarón"],
          ["Pargo", "MKP", "Pargo"], ["Pargo with seafood", "MKP", "Pargo con mariscos"]] },
    { n: "Chupe", d: "Creamy soup with milk, fresh cheese, egg, rice and potatoes.", de: "Sopa cremosa con leche, queso fresco, huevo, arroz y papa.",
      v: [["Fish", "21.99", "Pescado"], ["Shrimp", "23.99", "Camarón"], ["Corvina", "27.99", "Corvina"]] },
    { n: "Parihuela", p: "24.99", d: "Hearty, lightly spiced seafood soup.", de: "Sustanciosa sopa de mariscos, ligeramente picante." },
    { n: "Aguadito de Mariscos", p: "24.99", d: "Rice and cilantro seafood soup.", de: "Sopa de arroz al culantro con mariscos." },
    { n: "Camarón Saltado", p: "27.99" },
    { n: "Pescado Saltado", p: "22.99" },
    { n: "Pescado al Ajo", p: "21.99" },
    { n: "Pescado a lo Macho", p: "29.99", d: "Fried fish fillet in a creamy seafood sauce, with white rice and fried yuca.",
      de: "Filete de pescado frito en cremosa salsa de mariscos, con arroz blanco y yuca frita." },
    { n: "Pescado a la Chorrillana", p: "22.99", d: "Fried fish fillet with sautéed onion and tomato, white rice and potatoes.",
      de: "Filete de pescado frito con cebolla y tomate salteados, arroz blanco y papas." },
    { n: "Pescado a la Plancha", p: "20.99", d: "Blackened fish fillet with white rice and fried yuca.", de: "Filete de pescado a la plancha con arroz blanco y yuca frita." },
    { n: "Trucha Frita", p: "25.99", d: "Breaded fried trout with white rice, beans and salsa criolla.", de: "Trucha empanizada frita con arroz blanco, frejoles y salsa criolla." },
    { n: "Arroz con Mariscos", p: "24.99", d: "Rice cooked in a rich seafood stock with ají amarillo, ají panca and cilantro, loaded with shrimp, squid and mussels.",
      de: "Arroz cocido en fondo de mariscos con ají amarillo, ají panca y culantro, con camarones, calamar y choros." },
    { n: "Arroz a la Norteña", p: "24.99", d: "Cilantro rice with seafood.", de: "Arroz al culantro con mariscos." },
    { n: "Chaufa Verde de la Casa", t: "Green house fried rice · tuna or salmon", te: "Con atún o salmón", p: "37.99",
      d: "Cilantro-green chaufa topped with seared tuna or salmon.", de: "Chaufa verde al culantro coronado con atún o salmón sellado." },
    { n: "Huevera Frita", p: "23.99", v: [["A lo macho", "33.99", "A lo macho"]] },
    { n: "Jalea Mixta de Mariscos", p: "26.99", d: "Breaded crispy seafood and fish over fried yuca with salsa criolla.",
      de: "Mariscos y pescado empanizados y crocantes sobre yuca frita, con salsa criolla." },
    { n: "Jalea de Pargo", p: "MKP", v: [["With corvina", "MKP", "Con corvina"]] },
    { n: "Pargo Entero Frito", p: "MKP", d: "Whole fried snapper.", de: "Pargo entero frito." },
    { n: "Pargo a lo Macho", p: "MKP", d: "Fried snapper in a creamy seafood sauce.", de: "Pargo frito en cremosa salsa de mariscos." },
    { n: "Chicharrón de Pescado", p: "21.99", v: [["Corvina", "27.99", "Corvina"], ["Calamari", "23.99", "Calamar"]] },
    { n: "Tacu Tacu Marino",
      v: [["With corvina", "30.99", "Con corvina"], ["Seafood sauce", "27.99", "Salsa de mariscos"], ["Fish", "23.99", "Pescado"], ["Fish a lo macho", "32.99", "Pescado a lo macho"]] },
    { n: "Quinoa a la Huancaína o Pesto",
      v: [["With sautéed shrimp", "30.99", "Con camarones saltados"], ["Grilled corvina", "32.99", "Corvina a la plancha"], ["Fish", "28.99", "Pescado"],
          ["Seafood sauce", "32.99", "Salsa de mariscos"], ["Veggies with salmon", "35.99", "Verduras con salmón"]] },
    { n: "Corvina",
      v: [["Chorrillana", "27.99", "A la chorrillana"], ["With garlic", "27.99", "Al ajo"], ["Saltado", "28.99", "Saltado"],
          ["A lo macho", "37.99", "A lo macho"], ["Pan-fried sea bass", "26.99", "A la plancha"]] },
  ]}]},

  { id: "chifa", en: "Chifa", es: "Chifa", groups: [
    { en: "Appetizers", es: "Entradas", items: [
      { n: "Egg Roll", p: "6.99" },
      { n: "Nabo Encurtido", p: "10.99", d: "Soused turnip.", de: "Nabo encurtido." },
      { n: "Wonton Frito", p: "5.99", d: "Fried wonton.", de: "Wantán frito." },
      { n: "Chancho Asado con Nabo", p: "14.99", d: "Roast pork with turnip.", de: "Chancho asado con nabo." },
      { n: "Chicharrón de Pollo", p: "12.99", d: "Crispy fried chicken bites.", de: "Trozos de pollo frito crocante." },
    ]},
    { en: "Specialties (marinated in pisco)", es: "Especialidades (marinadas en pisco)", items: [
      { n: "Konakai Special Platter", p: "28.99", d: "Oriental veggies with chicken, roast pork, shrimp and quail eggs in our special house sauce.",
        de: "Verduras orientales con pollo, chancho asado, camarón y huevos de codorniz en nuestra salsa especial." },
      { n: "Kam Lu Wonton", p: "28.99", d: "Sweet and sour chicken, pork and shrimp over fried wonton with pineapple and turnip.",
        de: "Pollo, cerdo y camarón agridulce sobre wantán frito, con piña y nabo." },
      { n: "Pollo Enrollado con Espárragos", p: "24.99", d: "Chicken-wrapped asparagus in oriental sauce.", de: "Pollo enrollado con espárragos en salsa oriental." },
      { n: "Fideo Chino", d: "Sautéed crystal noodles with oriental veggies.", de: "Fideo de cristal salteado con verduras orientales.",
        v: [["Chicken or pork", "20.99", "Pollo o cerdo"], ["Shrimp", "23.99", "Camarón"]] },
      { n: "Mariscos Saltados Konakai", p: "25.99", d: "Oriental veggies with seafood and quail eggs in our special house sauce.",
        de: "Verduras orientales con mariscos y huevos de codorniz en nuestra salsa especial." },
      { n: "Chijaukay", p: "21.99", d: "Crispy breaded chicken in a special oriental brown sauce with scallions.",
        de: "Pollo empanizado crocante en salsa oriental oscura con cebolla china." },
      { n: "Tipakay", p: "22.99", d: "Chicken with wonton strips in tamarind sauce.", de: "Pollo con tiras de wantán en salsa de tamarindo." },
      { n: "Limón Kay", p: "23.99", d: "Crispy chicken in a sweet citrus sauce.", de: "Pollo crocante en salsa dulce de limón." },
      { n: "Pollo Yin Yon", p: "28.99", d: "Breaded chicken meatballs with oriental veggies.", de: "Albóndigas de pollo empanizadas con verduras orientales." },
      { n: "Salmón Oriental", p: "37.99", d: "Salmon and vegetables in oriental sauces.", de: "Salmón y verduras en salsas orientales." },
    ]},
    { en: "Fish & chicken (roast pork +$1)", es: "Pescado y pollo (chancho asado +$1)", items: [
      { n: "Fish", v: [["Saltado", "21.99", "Saltado"], ["Black beans (tausí)", "21.99", "Con tausí"]] },
      { n: "Chicken",
        v: [["Assorted oriental veggies", "21.99", "Con verduras orientales"], ["Salted black beans (tausí)", "20.99", "Con tausí"],
            ["Brown salted beans (mensi)", "20.99", "Con mensi"], ["Tamarind sauce", "20.99", "Con tamarindo"], ["Garlic", "20.99", "Al ajo"],
            ["Mushrooms", "21.99", "Con champiñones"], ["Pineapple", "21.99", "Con piña"]] },
    ]},
    { en: "Soups", es: "Sopas", items: [
      { n: "Special House Wonton Soup", p: "15.99" }, { n: "Special Chicken Crystal Noodles", p: "15.99" },
      { n: "Special Konakai Soup", p: "16.99" }, { n: "Seafood Soup", p: "17.99" },
      { n: "Fuchifu", p: "13.99" }, { n: "Pac Pow", p: "15.99" },
    ]},
    { en: "Fried rice & noodles", es: "Chaufa y tallarines", items: [
      { n: "Arroz Chaufa", t: "Peruvian-Chinese fried rice", te: "Arroz frito al wok, al estilo chifa",
        v: [["Special Konakai (chicken, pork & shrimp)", "22.99", "Especial Konakai (pollo, puerco y camarón)"], ["Seafood", "24.99", "Mariscos"], ["Beef", "21.99", "Carne"], ["Chicken", "17.99", "Pollo"],
            ["Veggie", "17.99", "Vegetariano"], ["Roast pork", "17.99", "Chancho asado"], ["Shrimp", "21.99", "Camarón"], ["Sam-Sen (mixed)", "19.99", "Sam-Sen (mixto)"]] },
      { n: "Aeropuerto", d: "House chaufa tossed with stir-fried noodles and bean sprouts.", de: "Chaufa de la casa salteado con tallarín y brotes de soya.",
        v: [["Beef", "22.99", "Carne"], ["Chicken", "20.99", "Pollo"], ["Shrimp", "22.99", "Camarón"], ["Veggie", "20.99", "Vegetariano"],
            ["Special", "24.99", "Especial"], ["Seafood", "25.99", "Mariscos"], ["Roast pork", "20.99", "Chancho asado"]] },
      { n: "Combinados", d: "House chaufa and stir-fried noodles, served side by side.", de: "Chaufa de la casa y tallarín saltado, lado a lado.",
        v: [["Beef", "25.99", "Carne"], ["Chicken", "22.99", "Pollo"], ["Roast pork", "22.99", "Chancho asado"]] },
      { n: "Tallarín Saltado", d: "Noodles sautéed with oriental veggies.", de: "Tallarín salteado con verduras orientales.",
        v: [["Special Konakai", "28.99", "Especial Konakai"], ["Chicken or roast pork", "22.99", "Pollo o chancho asado"],
            ["Chicken with veggies", "23.99", "Pollo con verduras"], ["Shrimp", "25.99", "Camarón"], ["Sam-sen", "24.99", "Sam-sen"],
            ["Seafood", "26.99", "Mariscos"], ["Chicken chunks", "24.99", "Pollo en trozos"], ["Beef", "25.99", "Carne"]] },
    ]},
  ]},

  { id: "selva", en: "Amazon", es: "Selva", groups: [{ items: [
    { n: "Juane", p: "21.99" },
    { n: "Cecina, Chorizo con Tacacho", p: "29.99" },
    { n: "Chaufa Amazónico", p: "26.99" },
    { n: "Chacarero Amazónico", p: "59.99",
      d: "Cecina, chorizo, tacacho, juane, fried sweet plantains, fried egg, churrasco or grilled chicken.",
      de: "Cecina, chorizo, tacacho, juane, maduros fritos, huevo frito y churrasco o pollo a la plancha." },
    { n: "Piqueo Amazónico", p: "46.99",
      d: "Cecina, chorizo, tacacho, juane, salsa criolla and fried sweet plantains.",
      de: "Cecina, chorizo, tacacho, juane, sarsa de cebolla y maduros fritos." },
  ]}]},

  { id: "desserts", en: "Desserts", es: "Postres", groups: [{ items: [
    { n: "Picarones", p: "14.99", d: "Peruvian sweet potato and squash doughnuts with chancaca syrup.", de: "Picarones de camote y zapallo con miel de chancaca." },
    { n: "Flan", p: "6.99", from: true },
    { n: "Passion Fruit Cheesecake", p: "6.99", from: true, de: "Cheesecake de maracuyá." },
    { n: "Chocolate Cake", de: "Torta de chocolate." },
  ]}]},

  { id: "more", en: "Salads, kids & sides", es: "Ensaladas, niños y extras", groups: [
    { en: "Salads", es: "Ensaladas", items: [{ n: "Caesar Salad", p: "12.99" }, { n: "Traditional Salad", p: "12.99" }, { n: "Konakai Salad", p: "18.99" }] },
    { en: "Kid's menu", es: "Menú de niños", items: [{ n: "Fish Tenders", p: "12.99" }, { n: "Chicken Tenders", p: "11.99" }] },
    { en: "Sides", es: "Acompañamientos", items: [
      { n: "Salsa Huancaína", v: [["Small", "4.50", "Chica"], ["Medium", "8.50", "Mediana"]] },
      { n: "Tallarín Verde o Huancaína", p: "13.99" }, { n: "Tacu Tacu", p: "13.99" }, { n: "Pollo a la Plancha", p: "11.99" },
      { n: "Churrasco", p: "15.99" }, { n: "Quinoa", p: "12.99" }, { n: "Tacacho", p: "14.99" },
      { n: "Beans · Frejoles", p: "5.50" },
      { n: "Fried Yuca · Fries", p: "6.50" }, { n: "Canchita · Mariquitas", p: "4.50" },
      { n: "Sweet Plantains · Choclo", p: "5.50" }, { n: "Fried Egg · White Rice", p: "4.50" },
    ]},
  ]},

  { id: "lunch", en: "Lunch specials", es: "Almuerzos", note: {
      en: "Monday–Friday, 12:00–3:30 PM (except holidays). Soup or salad is included only with regular entrées, not with executive specials. Every 10 lunches, get 1 free with our loyalty card.",
      es: "Lunes a viernes, 12:00–3:30 PM (excepto feriados). La sopa o ensalada se incluye solo con platos regulares, no con los ejecutivos. Cada 10 almuerzos, llévate 1 gratis con la tarjeta de fidelidad." }, groups: [
    { en: "Executive specials", es: "Ejecutivos", items: [
      { n: "Piqueo Marino Ejecutivo (1)", p: "17.99", d: "Ceviche, seafood chaufa and fried calamari.", de: "Ceviche, chaufa de mariscos y calamar frito." },
      { n: "Piqueo Marino Ejecutivo (2)", p: "17.99", d: "Ceviche, arroz con mariscos and fried fish.", de: "Ceviche, arroz con mariscos y pescado frito." },
      { n: "Chifa Combinado Ejecutivo (1)", p: "17.99", d: "Tallarín saltado and chicken chaufa.", de: "Tallarín saltado y chaufa de pollo." },
      { n: "Chifa Combinado Ejecutivo (2)", p: "17.99", d: "Tallarín saltado and pork chaufa.", de: "Tallarín saltado y chaufa de cerdo." },
    ]},
    { en: "Lunch plates", es: "Platos de almuerzo", items: [
      { n: "Tallarín Saltado Criollo de Pollo", p: "13.99" },
      { n: "Tallarín Verde con Pollo a la Plancha", p: "13.99", d: "Spaghetti in pesto with grilled chicken.", de: "Tallarín al pesto con pollo a la plancha." },
      { n: "Chaufa de Pollo", t: "Chicken fried rice", te: "Arroz chaufa de pollo", p: "13.99" },
      { n: "Pollo Saltado", p: "13.99" },
      { n: "Ají de Gallina", p: "13.99" },
      { n: "Tallarín Verde con Churrasco a la Parrilla", p: "14.99" },
      { n: "Lomo Saltado", p: "13.99", d: "With white rice.", de: "Con arroz blanco." },
      { n: "Frijoles con Seco", p: "13.99" },
      { n: "Pescado a la Plancha", p: "13.99" },
      { n: "Jalea de Mariscos", p: "13.99" },
      { n: "Ceviche Clásico", p: "13.99" },
    ]},
  ]},

  { id: "drinks", en: "Cocktails & wine", es: "Cócteles y vinos", note: {
      en: "Non-alcoholic versions of our cocktails are priced the same.",
      es: "Las versiones sin alcohol de nuestros cócteles tienen el mismo precio." }, groups: [
    { en: "Pisco", es: "Pisco", items: [
      { n: "Pisco Sour", p: "15.99", d: "Pisco, egg white, sugar and Angostura. Classic, passion fruit or lime.", de: "Pisco, clara de huevo, azúcar y amargo de Angostura. Clásico, maracuyá o limón." },
      { n: "Algarrobina", p: "18.99", d: "Pisco, egg yolk, evaporated milk, sugar and algarrobina.", de: "Pisco, yema de huevo, leche evaporada, azúcar y algarrobina." },
      { n: "Chilcano", p: "16.99", d: "Pisco and ginger ale. Passion fruit or lime.", de: "Pisco con ginger ale. Maracuyá o limón." },
      { n: "Special Kai", p: "14.99", d: "Pisco, fresh lime and sugar. Passion fruit, mango or strawberry.", de: "Pisco, limón y azúcar. Maracuyá, mango o fresa." },
    ]},
    { en: "Cocktails", es: "Cócteles", items: [
      { n: "Margarita", p: "16.99", d: "Tequila, triple sec, fresh lime and sour mix.", de: "Tequila, triple sec, limón y sour mix.",
        v: [["Frozen (passion fruit, mango, strawberry, coconut)", "18.99", "Frozen (maracuyá, mango, fresa, coco)"]] },
      { n: "Mojito", p: "16.99", d: "Classic, passion fruit, mango, strawberry or coconut.", de: "Clásico, maracuyá, mango, fresa o coco." },
      { n: "Piña Colada", p: "16.99" }, { n: "Cuba Libre", p: "14.99" },
      { n: "Martini", p: "16.99", d: "Lychee or classic.", de: "De lychee o clásico." },
      { n: "Gin & Tonic", p: "14.99" },
      { n: "Long Island", p: "18.99" }, { n: "Blue Long Island", p: "18.99" },
      { n: "Tinto de Verano", p: "12.99", d: "Red wine and Sprite.", de: "Vino tinto con Sprite." },
      { n: "Sangría", d: "Red or white, homemade.", de: "Tinta o blanca, de la casa.", v: [["Glass", "14.99", "Copa"], ["Pitcher", "44.99", "Jarra"]] },
    ]},
    { en: "Wine", es: "Vinos", items: [
      { n: "House wine by the glass", p: "11.99", d: "White, red or rosé.", de: "Copa de vino de la casa: blanco, tinto o rosado." },
      { n: "Intipalka Gran Reserva Blend (Peru)", p: "89.00" },
      { n: "Tacama Don Manuel Tannat (Peru)", p: "65.00" },
      { n: "Rotondo Malbec · Cabernet Sauvignon (Peru)", p: "39.00" },
      { n: "Rotondo Gran Reserva Blend (Peru)", p: "59.00" },
      { n: "Queirolo / Montesierpe Borgoña (Peru)", p: "34.00" },
      { n: "Tacama Doña Ana Chardonnay (Peru)", p: "49.00" },
      { n: "Rotondo Patrimonial White (Peru)", p: "39.00" },
      { n: "Quebrada de las Flechas Cabernet Sauvignon (Argentina)", p: "49.00" },
      { n: "Marcelo Pelleriti Malbec (Argentina)", p: "49.00" },
      { n: "Gauchezco Malbec Reserve (Argentina)", p: "49.00" },
      { n: "Gauchezco Grand Reserve Sauvignon Blanc (Argentina)", p: "49.00" },
      { n: "Larrea Malbec Gran Reserve (Argentina)", p: "54.00" },
      { n: "Misiones Cabernet Sauvignon · Chardonnay (Chile)", p: "34.00" },
      { n: "Vicus Orbis Icono Blend Private (Chile)", p: "54.00" },
      { n: "Ciro Black Edition Red (Spain)", p: "37.00" },
      { n: "La Val Albariño · Albariño Bernon (Spain)", p: "49.00" },
      { n: "Nero d'Avola Botticelle 99 (Italy)", p: "37.00" },
      { n: "Poggio dell'Aquila Brunello di Montalcino (Italy)", p: "139.00" },
      { n: "Poggio Petroso Chianti Classico Riserva (Italy)", p: "78.00" },
      { n: "Poggio Petroso Toscano Rosso (Italy)", p: "49.00" },
      { n: "Conte d'Attimis Pinot Nero (Italy)", p: "56.00" },
      { n: "Bepin de Eto Prosecco (Italy)", p: "42.00" },
      { n: "Casali Maniago Sauvignon Blanc (Italy)", p: "39.00" },
      { n: "Vigna del Lauro Sauvignon (Italy)", p: "49.00" },
      { n: "Cristofanon Fior d'Arancio (Italy)", p: "49.00" },
      { n: "Chardonnay Bin 5757 (Sonoma, California)", p: "49.00" },
    ]},
  ]},
];

/* =========================================================
   DESCRIPCIONES COMPLEMENTARIAS (platos que en la carta impresa no traen texto)
   Se usan solo si el plato no tiene d/de propios.  [inglés, español]
   ========================================================= */
const DESC_EXTRA = {
  "Ají de Gallina": ["Shredded chicken in a creamy ají amarillo sauce, with potatoes and white rice.", "Pollo deshilachado en cremosa salsa de ají amarillo, con papa y arroz blanco."],
  "Passion Fruit Cheesecake": ["Creamy cheesecake with passion fruit (maracuyá) topping.", "Cheesecake cremoso con cobertura de maracuyá."],
  "Papa Rellena": ["Mashed potato croquette stuffed with seasoned ground beef, egg and olive, fried until golden. With salsa criolla.", "Croqueta de papa rellena de carne molida sazonada, huevo y aceituna, frita hasta dorar. Con salsa criolla."],
  "Anticucho con Rachi": ["Our beef-heart anticuchos plus rachi (grilled beef tripe), both marinated in ají panca. A street-food feast to share.", "Anticuchos de corazón y rachi (panza de res a la parrilla), ambos marinados en ají panca. Para compartir."],
  "Anticucho con Papa a la Huancaína": ["Beef-heart anticuchos with boiled potatoes in huancaína sauce.", "Anticuchos de corazón con papas bañadas en salsa huancaína."],
  "Causa Acevichada": ["Cold layered causa of yellow potato, topped with fish in a creamy leche de tigre.", "Causa de papa amarilla coronada con pescado en una cremosa leche de tigre."],
  "Causa Acevichada Carretillera": ["Our causa acevichada crowned with crispy fried calamari.", "Nuestra causa acevichada coronada con chicharrón de calamar."],
  "Leche de Tigre": ["The citrus and ají marinade of ceviche, served in a glass with fish, cancha and choclo.", "El jugo cítrico y picante del ceviche, servido en copa con pescado, cancha y choclo."],
  "Lomo Saltado a lo Pobre": ["Our lomo saltado topped with a fried egg and fried sweet plantain.", "Nuestro lomo saltado con huevo frito y plátano maduro frito."],
  "Quinoa a la Huancaína o Pesto": ["Andean quinoa in creamy huancaína or green pesto sauce.", "Quinua andina en salsa huancaína o pesto verde."],
  "Tallarín a la Huancaína o Pesto": ["Spaghetti in creamy huancaína or green pesto sauce.", "Tallarín en salsa huancaína o pesto verde."],
  "Tacacho con Lomo Saltado": ["Amazonian tacacho with wok-fired lomo saltado on top.", "Tacacho de la selva con lomo saltado al wok."],
  "Tacu Tacu con Pollo Saltado": ["Crispy rice-and-bean tacu tacu topped with wok-fired chicken, onion and tomato.", "Tacu tacu crocante con pollo saltado al wok, cebolla y tomate."],
  "Tacacho con Pollo Saltado": ["Amazonian tacacho with wok-fired chicken saltado.", "Tacacho de la selva con pollo saltado al wok."],
  "Sudados": ["Whole or filleted fish braised in its own broth with onion, tomato and ají. Served with rice and yuca.", "Pescado cocido en su jugo con cebolla, tomate y ají. Con arroz y yuca."],
  "Camarón Saltado": ["Shrimp stir-fried in the wok with onion, tomato, soy and cilantro, with rice and fries.", "Camarones salteados al wok con cebolla, tomate, sillao y culantro, con arroz y papas fritas."],
  "Pescado Saltado": ["Fish stir-fried in the wok with onion, tomato, soy and cilantro, with rice and fries.", "Pescado salteado al wok con cebolla, tomate, sillao y culantro, con arroz y papas fritas."],
  "Pescado al Ajo": ["Fish fillet in a golden garlic sauce, with white rice.", "Filete de pescado en salsa de ajo dorado, con arroz blanco."],
  "Huevera Frita": ["Breaded, fried fish roe with salsa criolla.", "Hueva de pescado apanada y frita, con salsa criolla."],
  "Jalea de Pargo": ["Whole snapper, breaded and fried, with fried seafood, yuca and salsa criolla.", "Pargo entero apanado y frito, con mariscos fritos, yuca y salsa criolla."],
  "Chicharrón de Pescado": ["Crispy fried fish bites with yuca and salsa criolla.", "Trozos de pescado frito y crocante, con yuca y salsa criolla."],
  "Tacu Tacu Marino": ["Crispy tacu tacu of rice and beans with your choice of fish or seafood sauce.", "Tacu tacu crocante de arroz y frejoles con pescado o salsa de mariscos, a elección."],
  "Corvina": ["Corvina fillet, prepared your way.", "Filete de corvina, preparado a tu gusto."],
  "Egg Roll": ["Crispy chifa-style egg roll filled with vegetables and meat.", "Rollito crocante al estilo chifa, relleno de verduras y carne."],
  "Fish": ["Fish sautéed in the wok, chifa style.", "Pescado salteado al wok, al estilo chifa."],
  "Chicken": ["Chicken sautéed in the wok with your choice of sauce.", "Pollo salteado al wok con la salsa de tu elección."],
  "Special House Wonton Soup": ["Wonton soup in a light broth with vegetables, house style.", "Sopa wantán en caldo ligero con verduras, al estilo de la casa."],
  "Special Chicken Crystal Noodles": ["Chicken soup with crystal (glass) noodles.", "Sopa de pollo con fideo de cristal."],
  "Seafood Soup": ["Chifa-style seafood soup.", "Sopa de mariscos al estilo chifa."],
  "Juane": ["Amazonian rice with chicken, egg and olive, seasoned with palillo and wrapped in bijao leaves.", "Arroz de la selva con gallina, huevo y aceituna, sazonado con palillo y envuelto en hoja de bijao."],
  "Cecina, Chorizo con Tacacho": ["Smoked cecina and regional chorizo from the Amazon, with green-plantain tacacho.", "Cecina ahumada y chorizo regional de la selva, con tacacho de plátano verde."],
  "Chaufa Amazónico": ["Wok-fried rice with cecina, chorizo and sweet plantain: chifa meets the Amazon.", "Arroz chaufa al wok con cecina, chorizo y maduro: el chifa se encuentra con la selva."],
  "Flan": ["Classic caramel custard.", "Flan clásico con caramelo."],
  "Chocolate Cake": ["Layered chocolate cake with a creamy filling.", "Torta de chocolate en capas con relleno cremoso."],
  "Caesar Salad": ["Romaine, croutons, parmesan and Caesar dressing.", "Lechuga romana, crutones, parmesano y aderezo César."],
  "Fish Tenders": ["Breaded fish strips with fries.", "Tiras de pescado apanado con papas fritas."],
  "Chicken Tenders": ["Breaded chicken strips with fries.", "Tiras de pollo apanado con papas fritas."],
  "Tallarín Saltado Criollo de Pollo": ["Noodles stir-fried in the wok with chicken, onion and tomato, Creole style.", "Tallarín salteado al wok con pollo, cebolla y tomate, al estilo criollo."],
  "Pollo Saltado": ["Chicken stir-fried in the wok with onion, tomato and soy, with rice and fries.", "Pollo salteado al wok con cebolla, tomate y sillao, con arroz y papas fritas."],
  "Tallarín Verde con Churrasco a la Parrilla": ["Spaghetti in green pesto with grilled skirt steak.", "Tallarín al pesto con churrasco a la parrilla."],
  "Frijoles con Seco": ["Cilantro beef stew with rice and beans.", "Seco de res al culantro con arroz y frejoles."],
  "Pescado a la Plancha": ["Grilled fish fillet with white rice and fried yuca.", "Filete de pescado a la plancha con arroz blanco y yuca frita."],
  "Jalea de Mariscos": ["Breaded, fried fish and seafood over yuca with salsa criolla.", "Pescado y mariscos apanados y fritos sobre yuca, con salsa criolla."],
  "Ceviche Clásico": ["Fish cured in lime and ají limo with red onion, sweet potato and Peruvian corn.", "Pescado curado en limón y ají limo con cebolla morada, camote y choclo."],
  "Piña Colada": ["Rum, pineapple juice and coconut cream.", "Ron, jugo de piña y crema de coco."],
  "Cuba Libre": ["Rum, cola and fresh lime.", "Ron, cola y limón."],
  "Gin & Tonic": ["Gin, tonic water and fresh lime.", "Gin, agua tónica y limón."],
  "Long Island": ["Tequila, rum, vodka, gin, triple sec, cola and fresh lime.", "Tequila, ron, vodka, gin, triple sec, cola y limón."],
  "Blue Long Island": ["Tequila, rum, vodka, gin, blue curaçao, Sprite and sour mix.", "Tequila, ron, vodka, gin, curaçao azul, Sprite y sour mix."],
};

/* =========================================================
   GLOSARIO: términos peruanos de la carta. k = formas que se reconocen en el texto.
   ========================================================= */
const GLOSSARY = [
  { t: "Aeropuerto", k: ["aeropuerto"], en: "Chifa classic: chaufa tossed with stir-fried noodles and bean sprouts.", es: "Clásico del chifa: chaufa salteado con tallarín y brotes de soya." },
  { t: "Aguadito", k: ["aguadito"], en: "Thick cilantro rice soup.", es: "Sopa espesa de arroz al culantro." },
  { t: "Ají amarillo", k: ["ají amarillo"], en: "Peru's golden chili pepper: fruity, with medium heat.", es: "Ají peruano de color amarillo: frutado y de picor medio." },
  { t: "Ají limo", k: ["ají limo"], en: "Small, very spicy and fragrant chili; the classic one in ceviche.", es: "Ají pequeño, muy picante y aromático; el clásico del ceviche." },
  { t: "Ají panca", k: ["ají panca"], en: "Dried red chili, smoky and mild; the base of the anticucho marinade.", es: "Ají rojo seco, ahumado y suave; base del aderezo del anticucho." },
  { t: "Algarrobina", k: ["algarrobina"], en: "Syrup made from the carob trees of northern Peru.", es: "Jarabe del fruto del algarrobo del norte del Perú." },
  { t: "A lo macho", k: ["a lo macho"], en: "Topped with a spicy, creamy seafood sauce.", es: "Bañado en una salsa picante y cremosa de mariscos." },
  { t: "A lo pobre", k: ["a lo pobre"], en: "Served with a fried egg and fried sweet plantain.", es: "Con huevo frito y plátano maduro frito." },
  { t: "Anticucho", k: ["anticucho", "anticuchos"], en: "Beef-heart skewers marinated in ají panca and grilled; an Afro-Peruvian street classic.", es: "Brochetas de corazón de res marinadas en ají panca, a la parrilla; clásico afroperuano." },
  { t: "Anticuchero", k: ["anticuchero"], en: "Marinated and grilled anticucho-style, with ají panca.", es: "Marinado y asado al estilo anticucho, con ají panca." },
  { t: "Cancha", k: ["cancha", "canchita"], en: "Toasted, salted Andean corn kernels; the crunchy side of ceviche.", es: "Maíz andino tostado con sal; el crocante del ceviche." },
  { t: "Carretillero", k: ["carretillero", "carretillera"], en: "Street-cart style: crowned with crispy fried calamari.", es: "Al estilo carretillero: coronado con chicharrón de calamar." },
  { t: "Cau cau", k: ["cau cau"], en: "Creole stew of beef tripe and diced potatoes in ají amarillo, finished with mint.", es: "Guiso criollo de mondongo y papa en ají amarillo, con hierbabuena." },
  { t: "Causa", k: ["causa"], en: "Cold mashed yellow potato seasoned with lime and ají amarillo, layered with a filling.", es: "Papa amarilla prensada con limón y ají amarillo, rellena y servida fría." },
  { t: "Cecina", k: ["cecina"], en: "Salt-cured, smoked pork from the Peruvian Amazon.", es: "Carne de cerdo salada y ahumada, típica de la selva peruana." },
  { t: "Chalaca", k: ["chalaca", "a la chalaca"], en: "Callao-style topping of diced onion, tomato, rocoto and corn with lime.", es: "Al estilo del Callao: cebolla, tomate, rocoto y choclo picados, con limón." },
  { t: "Chancho asado", k: ["chancho asado"], en: "Cantonese-style roast pork, sweet and lacquered.", es: "Cerdo asado al estilo cantonés, dulce y laqueado." },
  { t: "Chaufa", k: ["chaufa"], en: "Peruvian-Chinese fried rice, tossed in a very hot wok with egg, scallion and soy sauce.", es: "Arroz frito al wok con huevo, cebolla china y sillao; emblema del chifa." },
  { t: "Chifa", k: ["chifa"], en: "Peruvian-Chinese cuisine, born from Cantonese immigrants in Lima in the 19th century.", es: "Cocina peruano-china nacida de los inmigrantes cantoneses en Lima en el siglo XIX." },
  { t: "Chijaukay", k: ["chijaukay"], en: "Crispy fried chicken glazed in a dark oyster-and-soy sauce with scallions.", es: "Pollo frito crocante bañado en salsa oscura de ostión y sillao, con cebolla china." },
  { t: "Chilcano", k: ["chilcano"], en: "Pisco with ginger ale and lime.", es: "Pisco con ginger ale y limón." },
  { t: "Choclo", k: ["choclo"], en: "Andean corn with large, tender kernels.", es: "Maíz andino de grano grande y tierno." },
  { t: "Choros", k: ["choros"], en: "Mussels.", es: "Mejillones." },
  { t: "Chorrillana", k: ["chorrillana", "a la chorrillana"], en: "Sautéed onion, tomato and ají, in the style of Chorrillos, Lima.", es: "Salteado de cebolla, tomate y ají, al estilo de Chorrillos." },
  { t: "Chupe", k: ["chupe"], en: "Creamy chowder with milk, fresh cheese, egg, potato and rice.", es: "Sopa cremosa con leche, queso fresco, huevo, papa y arroz." },
  { t: "Corvina", k: ["corvina"], en: "Corvina (white sea bass): firm white fish, Peru's favorite for ceviche.", es: "Pescado blanco de carne firme, el favorito del ceviche peruano." },
  { t: "Cusqueña", k: ["cusqueña"], en: "Peruvian lager from Cusco.", es: "Cerveza peruana del Cusco." },
  { t: "Huancaína", k: ["huancaína", "huancaina"], en: "Creamy sauce of fresh cheese and ají amarillo.", es: "Salsa cremosa de queso fresco y ají amarillo." },
  { t: "Huevera", k: ["huevera"], en: "Fish roe, breaded and fried.", es: "Hueva de pescado apanada y frita." },
  { t: "Jalea", k: ["jalea"], en: "Platter of breaded, fried fish and seafood over yuca, with salsa criolla.", es: "Pescado y mariscos apanados y fritos sobre yuca, con salsa criolla." },
  { t: "Juane", k: ["juane"], en: "Amazonian rice with chicken, egg and olive, seasoned with palillo and steamed in bijao leaves.", es: "Arroz de la selva con gallina, huevo y aceituna, sazonado con palillo y envuelto en hoja de bijao." },
  { t: "Kam lu", k: ["kam lu"], en: "Sweet-and-sour chifa sauce, served over crispy fried wontons.", es: "Salsa agridulce del chifa, servida sobre wantán frito." },
  { t: "Leche de tigre", k: ["leche de tigre"], en: "The citrus, ají and fish juice that cures ceviche, served as a shot.", es: "El jugo de limón, ají y pescado del ceviche, servido en copa." },
  { t: "Limón kay", k: ["limón kay"], en: "Crispy chicken in a sweet lemon sauce.", es: "Pollo crocante en salsa dulce de limón." },
  { t: "Maduros", k: ["maduros", "maduro"], en: "Ripe sweet plantains, fried.", es: "Plátano maduro frito." },
  { t: "Mariquitas", k: ["mariquitas"], en: "Thin, crispy plantain chips.", es: "Chips finos y crocantes de plátano." },
  { t: "Mensi", k: ["mensi"], en: "Fermented brown soybean paste, a Cantonese seasoning.", es: "Pasta de soya fermentada, condimento cantonés." },
  { t: "Nabo encurtido", k: ["nabo"], en: "Chinese-style pickled turnip.", es: "Nabo encurtido al estilo chino." },
  { t: "Palta", k: ["palta"], en: "Avocado.", es: "Aguacate." },
  { t: "Pargo", k: ["pargo"], en: "Red snapper.", es: "Pargo rojo (huachinango)." },
  { t: "Parihuela", k: ["parihuela"], en: "Hearty seafood soup with ají panca and ají amarillo, from Peru's coast.", es: "Sopa sustanciosa de mariscos con ají panca y ají amarillo, de la costa peruana." },
  { t: "Picarones", k: ["picarones"], en: "Sweet potato and squash doughnuts with chancaca (raw cane sugar) syrup.", es: "Buñuelos de camote y zapallo con miel de chancaca." },
  { t: "Pisco", k: ["pisco"], en: "Peru's grape brandy.", es: "Aguardiente de uva peruano." },
  { t: "Rachi", k: ["rachi"], en: "Beef tripe marinated in ají panca like anticuchos and grilled; a Lima street-food classic.", es: "Panza de res marinada en ají panca como el anticucho y asada a la parrilla; clásico de la calle limeña." },
  { t: "Rocoto", k: ["rocoto"], en: "Round, very spicy Andean red pepper.", es: "Ají andino redondo y muy picante." },
  { t: "Salsa criolla", k: ["salsa criolla", "sarsa de cebolla", "sarsa"], en: "Fresh relish of red onion, ají and lime.", es: "Cebolla morada, ají y limón: el acompañante criollo." },
  { t: "Saltado", k: ["saltado", "saltados"], en: "Stir-fried in a very hot wok with onion, tomato and soy: the chifa touch in Creole cooking.", es: "Salteado al wok bien caliente con cebolla, tomate y sillao: el toque chifa de la cocina criolla." },
  { t: "Seco", k: ["seco"], en: "Beef slowly braised in a cilantro sauce.", es: "Res cocida lentamente en salsa de culantro." },
  { t: "Sudado", k: ["sudado", "sudados"], en: "Fish braised in its own broth with onion, tomato and ají.", es: "Pescado cocido en su jugo con cebolla, tomate y ají." },
  { t: "Tacacho", k: ["tacacho"], en: "Amazonian green plantain, roasted and mashed with pork lard and crispy pork bits, shaped into balls.", es: "Plátano verde asado y majado con manteca y chicharrón, en bolas; típico de la selva." },
  { t: "Tacu tacu", k: ["tacu tacu"], en: "Crispy pan-fried cake of rice and beans, of Afro-Peruvian origin.", es: "Arroz y frejoles dorados en sartén hasta quedar crocantes; de origen afroperuano." },
  { t: "Tamal", k: ["tamal"], en: "Corn dough with a filling, wrapped in leaves and steamed.", es: "Masa de maíz rellena, envuelta en hoja y cocida al vapor." },
  { t: "Tausí", k: ["tausí", "tausi"], en: "Salted fermented black beans, a Cantonese seasoning.", es: "Frijol negro fermentado y salado, condimento cantonés." },
  { t: "Tipakay", k: ["tipakay"], en: "Crispy chicken in a sweet-and-sour tamarind sauce.", es: "Pollo crocante en salsa agridulce de tamarindo." },
  { t: "Tiradito", k: ["tiradito", "tiraditos"], en: "Thin slices of raw fish in lime with an ají cream; ceviche's sashimi-style cousin.", es: "Láminas finas de pescado crudo en limón con crema de ají." },
  { t: "Vuelve a la vida", k: ["vuelve a la vida"], en: "\"Back to life\": seafood and fish in leche de tigre, famous as a hangover cure.", es: "Mariscos y pescado en leche de tigre; el famoso levantamuertos." },
  { t: "Wantán", k: ["wonton", "wantán"], en: "Chinese dumpling, served fried or in soup.", es: "Masa china rellena, frita o en sopa." },
];

/* Fotos de la carta: plato -> foto (miniaturas en la carta completa) */
const DISH_PHOTOS = {
  "Ceviche Carretillero": "ceviche-carretillero", "Ceviche Afrodisíaco del Chef": "ceviche-afrodisiaco",
  "Trilogía de Ceviches": "g-trilogia-copas", "Leche de Tigre": "g-leche-tigre", "Causa Acevichada": "g-causa-acevichada",
  "Palta Rellena": "palta-rellena", "Anticucho con Rachi": "anticuchos", "Konakai Frío": "ev-piqueo", "Pulpo Anticuchero": "pulpo-anticuchero",
  "Tropikal Konakai": "tropikal-konakai", "Lomo Saltado": "lomo-saltado", "Ají de Gallina": "g-aji-gallina",
  "Arroz con Mariscos": "arroz-con-mariscos", "Jalea de Pargo": "g-jalea-pargo",
  "Kam Lu Wonton": "kam-lu-wonton", "Arroz Chaufa": "g-chaufa-especial", "Chicken": "g-pollo-pina",
  "Cecina, Chorizo con Tacacho": "tacacho-cecina-chorizo",
  "Chijaukay": "gx-chijaukay", "Salmón Oriental": "gx-salmon-oriental",
  "Parihuela": "gx-parihuela", "Pescado a la Plancha": "m-pescado-plancha", "Huevera Frita": "m-huevera-macho", "Pargo a lo Macho": "m-pargo-macho", "Arroz a la Norteña": "gx-arroz-nortena", "Chupe": "gx-chupe",
  "Lomo Saltado a lo Pobre": "gx-lomo-pobre", "Pollo a la Parrilla a lo Pobre": "gx-pollo-pobre",
  "Flan": "g-flan", "Passion Fruit Cheesecake": "cheesecake-maracuya", "Chocolate Cake": "g-torta-chocolate",
};

/* Secciones de la carta (agrupan las categorías del PDF) */
const SECTIONS = [
  { id: "starters", en: "Starters & Ceviches", es: "Entradas y Ceviches", from: ["appetizers", "ceviches", "piqueos"] },
  { id: "creole",   en: "Creole Classics",     es: "Criollos",            from: ["meat", "chicken"] },
  { id: "seafood",  en: "Fish & Seafood",      es: "Pescados y Mariscos", from: ["seafood"] },
  { id: "chifa",    en: "Chifa",               es: "Chifa",               from: ["chifa"] },
  { id: "selva",    en: "Amazon",              es: "Selva",               from: ["selva"] },
  { id: "lunch",    en: "Lunch Specials",      es: "Almuerzos",           from: ["lunch"] },
  { id: "sweet",    en: "Desserts & Drinks",   es: "Postres y Bebidas",   from: ["desserts", "drinks"] },
  { id: "more",     en: "Sides & Kids",        es: "Extras y Niños",      from: ["more"] },
  { id: "glossary", en: "Glossary",            es: "Glosario",            from: [] },
];
const sectionOf = id => (SECTIONS.find(s => s.id === id || s.from.includes(id)) || SECTIONS[0]).id;

/* =========================================================
   Renderizador de la carta (main.js en el navegador y tools/build-menu.mjs en el HTML)
   ========================================================= */
const esc = s => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const GL_INDEX = {};
GLOSSARY.forEach(g => g.k.forEach(k => (GL_INDEX[k.toLowerCase()] = g)));
const GL_RE = new RegExp(`(?<!\\p{L})(${Object.keys(GL_INDEX).sort((a, b) => b.length - a.length)
  .map(k => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})(?!\\p{L})`, "giu");

function gloss(text, lang, used) {
  return text.replace(GL_RE, m => {
    const g = GL_INDEX[m.toLowerCase()];
    if (!g || used.has(g.t)) return m;
    used.add(g.t);
    return `<dfn class="gl" tabindex="0" data-tip="${esc(g[lang])}">${m}</dfn>`;
  });
}

function renderCarta(lang, activeId) {
  const es = lang === "es";
  const fmt = p => p === "MKP" ? (es ? "Precio de mercado" : "Market price") : `$${p}`;
  const desc = i => (es ? i.de || i.d : i.d) || (DESC_EXTRA[i.n] ? DESC_EXTRA[i.n][es ? 1 : 0] : "");
  const sub = i => es ? i.te : i.t;
  const thumb = n => DISH_PHOTOS[n]
    ? `<button type="button" class="mi-thumb" data-zoom="${DISH_PHOTOS[n]}" aria-label="${esc(n)}"><img src="/img/${DISH_PHOTOS[n]}-400.webp?v=5" alt="${esc(n)}" loading="lazy" width="72" height="72"></button>` : "";
  const item = i => {
    const used = new Set();
    return `<li class="mi${DISH_PHOTOS[i.n] ? " has-thumb" : ""}">
      ${thumb(i.n)}<div class="mi-main">
      <div class="mi-row"><h4 class="ml-name">${gloss(i.n, lang, used)}</h4><span class="ml-dots" aria-hidden="true"></span>${i.p ? `<span class="ml-price">${i.from ? (es ? "desde " : "from ") : ""}${fmt(i.p)}</span>` : ""}</div>
      ${sub(i) ? `<p class="mi-sub">${sub(i)}</p>` : ""}
      ${desc(i) ? `<p class="mi-desc">${gloss(desc(i), lang, used)}</p>` : ""}
      ${i.v ? `<ul class="mi-vars">${i.v.map(([l, p, les]) => `<li><span>${es && les ? les : l}</span><span class="ml-price">${fmt(p)}</span></li>`).join("")}</ul>` : ""}
    </div></li>`;
  };
  const cat = (c, showTitle) => `
    ${showTitle ? `<h3 class="mcat-sub" id="cat-${c.id}">${c[lang]}</h3>` : ""}
    ${c.note ? `<p class="cat-note">${c.note[lang]}</p>` : ""}
    ${c.groups.map(g => `<div class="mgroup">${g.en ? `<h4 class="mgroup-title">${g[lang]}</h4>` : ""}<ul class="mitems">${g.items.map(item).join("")}</ul></div>`).join("")}`;
  const glossary = () => `<p class="cat-note">${es ? "Las palabras peruanas de nuestra carta, explicadas. En la carta, toca cualquier palabra subrayada para ver su significado." : "The Peruvian words on our menu, explained. In the menu, tap any underlined word to see what it means."}</p>
    <dl class="glossary">${[...GLOSSARY].sort((a, b) => a.t.localeCompare(b.t, "es")).map(g => `<div><dt>${g.t}</dt><dd>${g[lang]}</dd></div>`).join("")}</dl>`;
  return SECTIONS.map(s => {
    const cats = s.from.map(id => CARTA.find(c => c.id === id)).filter(Boolean);
    return `<section class="mcat" data-cat="${s.id}" aria-label="${s[lang]}"${s.id === activeId ? "" : " hidden"}>
    <h3 class="mcat-title">${s[lang]}</h3>
    ${s.id === "glossary" ? glossary() : cats.map(c => cat(c, cats.length > 1)).join("")}
  </section>`;
  }).join("\n");
}
