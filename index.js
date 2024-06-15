new TradingView.widget(
    {
        "autosize": true,
        "symbol": "NASDAQ:AAPL",
        "interval": "240",
        "timezzone": "Etc/Utc",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "background": "logo.png",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "withdateranges": false,
        "hide_side_toolbar": true,
        "allow_symbol_change": true,
        "details": true,
        "hotlist": true,
        "calendar": true,
        "studies": [
            "STD;SMA",
        ],
        "container_id": "chart",
        "show_popup_button": true,
        "popup_width": "1000",
        "popup_height": "650"
    }
)

document.getElementById('scrollButton').addEventListener('click', function() {
    document.getElementById('chart').scrollIntoView({ behavior: 'smooth' });
});

