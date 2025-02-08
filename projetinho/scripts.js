// scripts.js
const recipes = [
    {
        name: "Macarrão com Queijo",
        mood: "confortante",
        diet: "vegetariano",
        ingredients: ["macarrão", "queijo cheddar", "leite", "manteiga", "farinha"],
        instructions: "Derreta a manteiga, misture a farinha...",
        cookTime: "30 min",
        emoji: "🧀"
    },
    {
        name: "Bowl Energético",
        mood: "energizante",
        diet: "vegano",
        ingredients: ["quinoa", "abacate", "grão-de-bico", "folhas verdes", "tomate"],
        instructions: "Cozinhe a quinoa...",
        cookTime: "25 min",
        emoji: "🥑"
    },
    {
        name: "Chá de Camomila com Biscoitos",
        mood: "relaxar",
        diet: "vegetariano",
        ingredients: ["camomila", "mel", "biscoitos integrais"],
        instructions: "Prepare o chá...",
        cookTime: "10 min",
        emoji: "🍵"
    },
    {
        name: "Bolo de Chocolate",
        mood: "feliz",
        diet: "vegetariano",
        ingredients: ["chocolate", "farinha", "ovos", "açúcar"],
        instructions: "Misture todos os ingredientes...",
        cookTime: "45 min",
        emoji: "🍫"
    },
    {
   
        name: "Sopa de Abóbora",
        mood: "nostalgico",
        diet: "vegano",
        ingredients: ["abóbora", "cebola", "alho", "leite de coco"],
        instructions: "Asse a abóbora...",
        cookTime: "40 min",
        emoji: "🎃"
    },
    {
        name: "Smoothie Energético",
        mood: "energizante",
        diet: "vegano",
        ingredients: ["banana", "espinafre", "aveia", "leite vegetal"],
        instructions: "Bata todos os ingredientes...",
        cookTime: "5 min",
        emoji: "🥤"
    },
    {
        name: "Poke Bowl Hawai",
        mood: "energizante",
        diet: "todos",
        ingredients: ["salmão fresco", "arroz", "abacate", "manga", "molho teriyaki"],
        instructions: "Corte o salmão em cubos...",
        cookTime: "25 min",
        emoji: "🍣"
    },
    {
        name: "Lasanha Vegetariana",
        mood: "confortante",
        diet: "vegetariano",
        ingredients: ["massa para lasanha", "berinjela", "abobrinha", "molho branco", "queijo"],
        instructions: "Monte em camadas...",
        cookTime: "60 min",
        emoji: "🍆"
    },
    {
        name: "Churros Caseiros",
        mood: "feliz",
        diet: "vegetariano",
        ingredients: ["farinha", "água", "açúcar", "canela", "doce de leite"],
        instructions: "Frite os churros...",
        cookTime: "35 min",
        emoji: "🎉"
    },
    {
        name: "Curry Verde Tailandês",
        mood: "energizante",
        diet: "vegano",
        ingredients: ["leite de coco", "pasta de curry verde", "tofu", "arroz jasmim"],
        instructions: "Cozinhe o curry...",
        cookTime: "30 min",
        emoji: "🍛"
    },
    {
        name: "Torta de Maçã",
        mood: "nostalgico",
        diet: "vegetariano",
        ingredients: ["maçãs", "massa folhada", "canela", "açúcar mascavo"],
        instructions: "Asse a 180°C...",
        cookTime: "50 min",
        emoji: "🍎"
    },
    {
        name: "Risoto de Cogumelos",
        mood: "confortante",
        diet: "vegetariano",
        ingredients: ["arroz arbóreo", "cogumelos", "caldo vegetal", "vinho branco", "queijo parmesão"],
        instructions: "1. Refogue os cogumelos... 2. Adicione o arroz...",
        cookTime: "40 min",
        emoji: "🍄"
    },
    {
        name: "Salada Tropical",
        mood: "energizante",
        diet: "vegano",
        ingredients: ["manga", "abacaxi", "folhas verdes", "castanha-de-caju", "molho de limão"],
        instructions: "Misture todos os ingredientes...",
        cookTime: "15 min",
        emoji: "🥗"
    },
    {
        name: "Chocolate Quente Especial",
        mood: "nostalgico",
        diet: "vegetariano",
        ingredients: ["chocolate 70%", "leite", "canela", "chantilly"],
        instructions: "Derreta o chocolate...",
        cookTime: "20 min",
        emoji: "☕"
    },
    {
        name: "Sopa de Lentilha",
        mood: "confortante",
        diet: "vegano",
        ingredients: ["lentilhas", "cenoura", "cebola", "alho", "tomate", "cominho"],
        instructions: "Refogue os vegetais, acrescente as lentilhas e cozinhe por 40min.",
        cookTime: "45 min",
        emoji: "🥣"
    },
    {
        name: "Ratatouille",
        mood: "confortante",
        diet: "vegano",
        ingredients: ["berinjela", "abobrinha", "pimentão", "tomate", "manjericão"],
        instructions: "Corte os vegetais em rodelas e asse em camadas.",
        cookTime: "55 min",
        emoji: "🍆"
    },
    
        // Energizante
        {
            name: "Bowl de Quinoa",
            mood: "energizante",
            diet: "vegano",
            ingredients: ["quinoa", "grão-de-bico", "abacate", "beterraba", "folhas verdes"],
            instructions: "Misture todos os ingredientes e tempere com limão.",
            cookTime: "20 min",
            emoji: "🥙"
        },
        {
            name: "Suco Verde Detox",
            mood: "energizante",
            diet: "vegano",
            ingredients: ["couve", "gengibre", "maçã", "limão", "água de coco"],
            instructions: "Bata todos os ingredientes no liquidificador.",
            cookTime: "5 min",
            emoji: "🥤"
        },
    
        // Para Relaxar
        {
            name: "Chá de Lavanda",
            mood: "relaxar",
            diet: "vegano",
            ingredients: ["flores de lavanda", "mel", "água"],
            instructions: "Infunda as flores em água quente por 5min.",
            cookTime: "7 min",
            emoji: "🌿"
        },
        {
            name: "Mousse de Maracujá",
            mood: "relaxar",
            diet: "vegetariano",
            ingredients: ["polpa de maracujá", "leite condensado", "creme de leite"],
            instructions: "Bata todos os ingredientes e leve à geladeira por 2h.",
            cookTime: "10 min",
            emoji: "🥄"
        },
    
        // Feliz
        {
            name: "Mini Hambúrgueres",
            mood: "feliz",
            diet: "todos",
            ingredients: ["carne moída", "queijo cheddar", "pão brioche", "bacon"],
            instructions: "Modele os hambúrgueres e grelhe por 8min cada lado.",
            cookTime: "25 min",
            emoji: "🍔"
        },
        {
            name: "Palha Italiana",
            mood: "feliz",
            diet: "vegetariano",
            ingredients: ["biscoito champagne", "chocolate", "leite condensado", "manteiga"],
            instructions: "Misture tudo e leve à geladeira até solidificar.",
            cookTime: "15 min",
            emoji: "🍫"
        },
    
        // Nostálgico
        {
            name: "Bolo de Fubá",
            mood: "nostalgico",
            diet: "vegetariano",
            ingredients: ["fubá", "ovos", "leite", "açúcar", "fermento"],
            instructions: "Misture os ingredientes e asse por 40min.",
            cookTime: "50 min",
            emoji: "🌽"
        },
        {
            name: "Canja de Galinha",
            mood: "nostalgico",
            diet: "todos",
            ingredients: ["frango", "arroz", "cenoura", "salsinha"],
            instructions: "Cozinhe o frango e acrescente os demais ingredientes.",
            cookTime: "40 min",
            emoji: "🍲"
        },
    
        // Mais Receitas Variadas
        {
            name: "Ceviche Peruano",
            mood: "energizante",
            diet: "todos",
            ingredients: ["peixe branco", "limão", "cebola roxa", "milho", "batata-doce"],
            instructions: "Marine o peixe no limão por 20min e misture os ingredientes.",
            cookTime: "25 min",
            emoji: "🍋"
        },
        {
            name: "Falafel Assado",
            mood: "energizante",
            diet: "vegano",
            ingredients: ["grão-de-bico", "coentro", "cominho", "alho"],
            instructions: "Triture os ingredientes, forme bolinhas e asse por 25min.",
            cookTime: "35 min",
            emoji: "�"
        },
        {
            name: "Pão de Mel",
            mood: "confortante",
            diet: "vegetariano",
            ingredients: ["mel", "chocolate", "farinha", "canela"],
            instructions: "Asse os pães e cubra com chocolate derretido.",
            cookTime: "45 min",
            emoji: "🍯"
        },
        {
            name: "Açaí Energético",
            mood: "energizante",
            diet: "vegano",
            ingredients: ["polpa de açaí", "banana", "granola", "xarope de guaraná"],
            instructions: "Bata o açaí com a banana e sirva com granola.",
            cookTime: "5 min",
            emoji: "🟣"
        },
        {
            name: "Risoto de Frutos do Mar",
            mood: "nostalgico",
            diet: "todos",
            ingredients: ["arroz arbóreo", "camarões", "lula", "vinho branco", "açafrão"],
            instructions: "Cozinhe o arroz gradualmente adicionando caldo de peixe.",
            cookTime: "50 min",
            emoji: "🍤"
        },
        {
            name: "Feijoada Light",
            mood: "confortante",
            diet: "todos",
            ingredients: ["feijão preto", "carne seca", "couve", "laranja"],
            instructions: "Cozinhe o feijão com as carnes por 2 horas.",
            cookTime: "120 min",
            emoji: "🥘"
        },
        {
            name: "Cheesecake Sem Lactose",
            mood: "feliz",
            diet: "sem-gluten",
            ingredients: ["castanhas", "cream cheese vegano", "frutas vermelhas"],
            instructions: "Triture a base de castanhas e prepare o recheio.",
            cookTime: "60 min",
            emoji: "🍰"
        },
    
            // Confortante
            {
                name: "Strogonoff de Frango (GF)",
                mood: "confortante",
                diet: "sem-gluten",
                ingredients: ["peito de frango", "creme de leite", "champignon", "molho de tomate", "arroz branco"],
                instructions: "Refogue o frango, acrescente os ingredientes e sirva com arroz.",
                cookTime: "40 min",
                emoji: "🍚"
            },
            {
                name: "Batata Recheada",
                mood: "confortante",
                diet: "sem-gluten",
                ingredients: ["batata inglesa", "frango desfiado", "requeijão", "cebola caramelizada"],
                instructions: "Asse as batatas, recheie e gratine no forno.",
                cookTime: "55 min",
                emoji: "🥔"
            },
        
            // Energizante
            {
                name: "Bowl de Tapioca",
                mood: "energizante",
                diet: "sem-gluten",
                ingredients: ["tapioca", "ovos mexidos", "abacate", "tomate seco", "folhas verdes"],
                instructions: "Prepare a tapioca e monte o bowl com os ingredientes.",
                cookTime: "20 min",
                emoji: "🟡"
            },
            {
                name: "Salada de Quinoa com Frutas",
                mood: "energizante",
                diet: "sem-gluten",
                ingredients: ["quinoa", "manga", "morango", "rúcula", "molho de limão"],
                instructions: "Misture todos os ingredientes e tempere.",
                cookTime: "15 min",
                emoji: "🥭"
            },
        
            // Para Relaxar
            {
                name: "Chá de Camomila com Cookies GF",
                mood: "relaxar",
                diet: "sem-gluten",
                ingredients: ["farinha de arroz", "manteiga", "açúcar mascavo", "chá de camomila"],
                instructions: "Faça os cookies e sirva com o chá quente.",
                cookTime: "30 min",
                emoji: "🍪"
            },
            {
                name: "Creme de Abóbora com Gengibre",
                mood: "relaxar",
                diet: "sem-gluten",
                ingredients: ["abóbora cabotiá", "gengibre ralado", "leite de coco", "cebola"],
                instructions: "Cozinhe e bata todos os ingredientes até cremoso.",
                cookTime: "35 min",
                emoji: "🎃"
            },
        
            // Feliz
            {
                name: "Tacos Sem Glúten",
                mood: "feliz",
                diet: "sem-gluten",
                ingredients: ["tortillas de milho", "carne moída", "abacate", "pico de gallo"],
                instructions: "Montar os tacos com os ingredientes preferidos.",
                cookTime: "25 min",
                emoji: "🌮"
            },
            {
                name: "Bolo de Chocolate GF",
                mood: "feliz",
                diet: "sem-gluten",
                ingredients: ["farinha de arroz", "cacau em pó", "ovos", "açúcar", "óleo de coco"],
                instructions: "Misture os ingredientes e asse por 40min.",
                cookTime: "55 min",
                emoji: "🍫"
            },
        
            // Nostálgico
            {
                name: "Pão de Queijo Caseiro",
                mood: "nostalgico",
                diet: "sem-gluten",
                ingredients: ["polvilho doce", "queijo meia cura", "ovos", "leite"],
                instructions: "Misture até formar uma massa elástica e asse em forminhas.",
                cookTime: "35 min",
                emoji: "🧀"
            },
            {
                name: "Cuscuz Paulista GF",
                mood: "nostalgico",
                diet: "sem-gluten",
                ingredients: ["fubá", "tomate", "ervilha", "ovos cozidos", "sardinha"],
                instructions: "Umedeça o fubá e monte em camadas.",
                cookTime: "40 min",
                emoji: "🌽"
            },
        
            // Lanches Rápidos
            {
                name: "Wraps de Alface",
                mood: "energizante",
                diet: "sem-gluten",
                ingredients: ["folhas de alface americana", "peito de peru", "cream cheese", "cenoura ralada"],
                instructions: "Montar os wraps como se fossem tacos.",
                cookTime: "10 min",
                emoji: "🥬"
            },
            {
                name: "Panquecas de Banana",
                mood: "feliz",
                diet: "sem-gluten",
                ingredients: ["banana madura", "ovos", "canela", "farinha de amêndoa"],
                instructions: "Amasse as bananas, misture os ingredientes e frite em frigideira.",
                cookTime: "15 min",
                emoji: "🍌"
            },
            {
                name: "Pizza de Couve-Flor",
                mood: "confortante",
                diet: "sem-gluten",
                ingredients: ["couve-flor", "ovos", "queijo muçarela", "molho de tomate"],
                instructions: "Triture a couve-flor, forme a massa e asse antes de acrescer os toppings.",
                cookTime: "40 min",
                emoji: "🍕"
            },
            {
                name: "Molho Shoyu Especial",
                mood: "energizante",
                diet: "sem-gluten",
                ingredients: ["molho tamari", "gengibre", "alho"],
                instructions: "Misture os ingredientes para acompanhar sushi ou temaki.",
                cookTime: "2 min",
                emoji: "🍱"
            },
            {
                name: "Mousse de Chocolate com Abacate",
                mood: "relaxar",
                diet: "sem-gluten",
                ingredients: ["abacate", "cacau em pó", "mel", "leite vegetal"],
                instructions: "Bata todos os ingredientes no liquidificador até cremoso.",
                cookTime: "5 min",
                emoji: "🥑"
            }
        ];
        // Continue adicionando...
     
const moodSelector = document.getElementById('moodSelector');
const recipeContainer = document.getElementById('recipeContainer');
const dietButtons = document.querySelectorAll('.diet-btn');

let currentDiet = 'todos';

// Filtros
function filterRecipes() {
    const selectedMood = moodSelector.value;
    const filtered = recipes.filter(recipe => {
        const moodMatch = !selectedMood || recipe.mood === selectedMood;
        const dietMatch = currentDiet === 'todos' || recipe.diet === currentDiet;
        return moodMatch && dietMatch;
    });
    displayRecipes(filtered);
}

// Exibir receitas
function displayRecipes(recipesToShow) {
    recipeContainer.innerHTML = '';
    
    recipesToShow.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.innerHTML = `
            <h3>${recipe.emoji} ${recipe.name}</h3>
            <div class="mood-tag" style="background-color: ${getMoodColor(recipe.mood)}">
                ${recipe.mood}
            </div>
            <p><strong>Ingredientes:</strong> ${recipe.ingredients.join(', ')}</p>
            <p><strong>Tempo:</strong> ${recipe.cookTime}</p>
            <details>
                <summary>Modo de preparo</summary>
                <p>${recipe.instructions}</p>
            </details>
        `;
        recipeContainer.appendChild(recipeCard);
    });
}

// Cores por humor
function getMoodColor(mood) {
    const colors = {
        confortante: '#f1c40f',
        energizante: '#2ecc71',
        relaxar: '#3498db',
        feliz: '#ffb6c1',
        nostalgico: '#9b59b6'
    };
    return colors[mood] || '#ecf0f1';
}

// Event Listeners
moodSelector.addEventListener('change', filterRecipes);

dietButtons.forEach(button => {
    button.addEventListener('click', () => {
        dietButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        currentDiet = button.dataset.diet;
        filterRecipes();
    });
});
