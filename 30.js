//WRITE A JAVASCRIPT CODE TO IMPLEMENT THE QOUTE-CHANGING FEATURES
const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The way to get started is to quit talking and begin doing.",
    "Your time is limited, so don't waste it living someone else's life.",
    "If life were predictable it would cease to be life, and be without flavor.",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."
    ];

    function displayRandomQuote(){
        let randomIndex = Math.floor(Math.random() * quotes.length);
        document.getElementById('quoteDisplay').textContent = quotes[randomIndex];
    }


    displayRandomQuote();

    function changeQuotePeriodically(){
        setInterval(displayRandomQuote, 10000);
    }

    changeQuotePeriodically();