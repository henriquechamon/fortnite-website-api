//Timer
(function() {
    var start = new Date;
    start.setHours(1, 0, 0); // 02.00

    function pad(num) {
        return ("0" + parseInt(num)).substr(-2);
    }

    function tick() {
        var now = new Date;
        if (now > start) { // too late, go to tomorrow
            start.setDate(start.getDate() + 1);
        }
        var remain = ((start - now) / 1000);
        var hh = pad((remain / 60 / 60) % 60);
        var mm = pad((remain / 60) % 60);
        var ss = pad(remain % 60);
        document.getElementById('time').innerHTML =
            hh + ":" + mm + ":" + ss;
        setTimeout(tick, 1000);
    }
    document.addEventListener('DOMContentLoaded', tick);
}());

//Function to check the color
function fetchbackGround(rarity) {
    var background = "rgb(148, 148, 150)";
    switch (rarity) {
        case "Comum":
            background = "radial-gradient(#d0d0d0 0%,#6d7071 100%)"; //Grey
            break;
        case "Incomum":
            background = "radial-gradient(#5bad03 0%,#01700a 100%)"; //Green
            break;
        case "Raro":
            background = "radial-gradient(#3dc7ff 0%,#0059a1 100%)"; //Blue
            break;
        case "Épico":
            background = "radial-gradient(#d27bf4 0%,#7907a5 100%)"; //Purple
            break;
        case "Lendário":
            background = "radial-gradient(#fb9625 0%,#875134 100%)"; //Gold
            break;
        case "Série Ícones":
            background = "url(img/icon_series.webp) no-repeat; background-size: cover;"; //Cyan
            break;
        case "Série Marvel":
            background = "url(img/marvel_series.webp) no-repeat; background-size: cover;"; //Cyan
            break;
        case "Série das Sombras":
            background = "url(img/dark_series.webp) no-repeat; background-size: cover; "; //Dark series image
            break;
        case "Série Sombria":
            background = "url(img/shadow_series.webp) no-repeat; background-size: cover; "; //Shadow series image
            break;
        case "Série Glup":
            background = "url(img/slurp_series.webp) no-repeat; background-size: cover; "; //Shadow series image
            break;
        case "Série lendas dos jogos":
            background = "url(img/gaming_legends_series.webp) no-repeat; background-size: cover; "; //Shadow series image
            break;
        case "Série Lava":
            background = "url(img/lava_series.webp) no-repeat; background-size: cover; "; //Shadow series image
            break;
        case "Série star wars":
            background = "url(img/starwars_series.webp) no-repeat; background-size: cover; "; //Shadow series image
            break;
        case "Série DC":
            background = "url(img/dc_series.webp) no-repeat; background-size: cover; "; //Shadow series image
            break;
    }
    return background;
}

//Daily offers
fetch('https://fortnite-api.com/v2/shop/br?language=pt-BR')
    .then(res => res.json())
    .then(data => {
        $.each(data.data.daily.entries, function(i, item) {
            if (data.data.daily.entries[i].bundle != null) {
                return;
            }
            var html = '';
            if (item.items[0].rarity.displayValue) {
                var bgcolorforDiv = fetchbackGround(item.items[0].rarity.displayValue);
                html = '<div class="card"  style="background:' + bgcolorforDiv + '"> <span id="name"> <b>' + item.items[0].name + '</b> </span> <span id="price">' + item.finalPrice + '<img id="v_buck" src="https://fortnite-api.com/images/vbuck.png" height="28px""> </span>' + '  ' + '<img id="image" src="' + item.items[0].images.icon + '"></img>' + '</div>';

            } else {
                html = '<div class="card"> <span id="name"> <b>' + item.items[0].name + '</b> </span> <span>' + item.finalPrice + '<img id="v_buck" src="https://fortnite-api.com/images/vbuck.png" height="28px"> </span>' + '  ' + '<img id="image" src="' + item.items[0].images.icon + '"></img>' + '</div>';
            }
            $('body > #cards_daily').append(html);
        });
    });

//Special featured
fetch('https://fortnite-api.com/v2/shop/br?language=pt-BR')
    .then(res => res.json())
    .then(data => {
        $.each(data.data.specialFeatured.entries, function(i, item) {
            console.log(item.items[0].rarity.displayValue + "--" + item.items[0].name);
            if (data.data.specialFeatured.entries[i].bundle != null) {
                return;
            }
            var html = '';
            if (item.items[0].rarity.displayValue) {
                var bgcolorforDiv = fetchbackGround(item.items[0].rarity.displayValue);
                html = '<div class="card" style="background:' + bgcolorforDiv + '"> <span id="name"> <b>' + item.items[0].name + '</b> </span>  <span id="price">' + item.finalPrice + '<img id="v_buck" src="https://fortnite-api.com/images/vbuck.png" height="28px"> </span>' + '  ' + '<img id="image" src="' + item.items[0].images.icon + '"></img>' + '</div>';

            } else {
                html = '<div class="card"> <span id="name"> <b>' + item.items[0].name + '</b> </span>  <span>' + item.finalPrice + '<img id="v_buck" src="https://fortnite-api.com/images/vbuck.png" height="28px"> </span>' + '  ' + '<img id="image" src="' + item.items[0].images.icon + '"></img>' + '</div>';
            }
            $('body > #cards_featured_special').append(html);
        });
    });

//Featured offers
fetch('https://fortnite-api.com/v2/shop/br?language=pt-BR')
    .then(res => res.json())
    .then(data => {
        $.each(data.data.featured.entries, function(i, item) {
            //console.log(item.items[0].rarity.displayValue + "--" + item.items[0].name);
            if (data.data.featured.entries[i].bundle != null) {
                return;
            }
            var html = '';
            if (item.items[0].rarity.displayValue) {
                var bgcolorforDiv = fetchbackGround(item.items[0].rarity.displayValue);
                html = '<div class="card" style="background:' + bgcolorforDiv + '"> <span id="name"> <b>' + item.items[0].name + '</b> </span> <span id="price">' + item.finalPrice + '<img id="v_buck" src="https://fortnite-api.com/images/vbuck.png" height="28px"> </span>' + '  ' + '<img id="image" src="' + item.items[0].images.icon + '"></img>' + '</div>';

            } else {
                html = '<div class="card"> <span id="name"> <b>' + item.items[0].name + '</b> </span>  <span>' + item.finalPrice + '<img id="v_buck" src="https://fortnite-api.com/images/vbuck.png" height="28px"> </span>' + '  ' + '<img id="image" src="' + item.items[0].images.icon + '"></img>' + '</div>';
            }
            $('body > #cards_featured').append(html);
        });
    });
