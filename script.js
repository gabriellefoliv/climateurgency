let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = 
    [
        "Buy used when you need to make a purchase.",
        "Take it one step further - complete a shopping ban.",
        "Stop spending money on things you don't truly need and/or enjoy.",
        "Reuse something you don't think has any more life.",
        "Create and bring a zero waste kit with you.",
        "Create a list of OK companies to support.",
        "Save your money wisely - invest and divest.",
        "Reduce your animal product consumption.",
        "Learn one new way of food preservation.",
        "Boycott items from companies with suspect ethical/sustainable records.",
        "Make a list of local farmers and support them when you can.",
        "Reuse your scraps in a creative way.",
        "Start a compost bin or find a way to get access to one.",
        "Make a DIY swap and stop using store-bought products.",
        "Get to know your local recycling rules!",
        "Swap your dryer for a clothesline.",
        "Learn more about your energy options.",
        "Make sure you replace deprivation with joy.",
        "Support someone in your community with money.",
        "Support someone in your community with a skill",
        "Find and support a great sustainable creator.",
        "Set up reoccurring monthly donations to your favorite climate/social justice groups.",
        "Find or create a supportive activist network.",
        "Contact your representative or sign a petition.",
        "Show up to a city council meeting and learn more about your elected officials.",
        "Attend or create a climate-focused event.",
        "Say no to the lawn!",
        "Host a letter-writing campaign.",
        "Host a zero waste workshop or other event.",
        "Vote - then get back to the real work."
    ];

btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})