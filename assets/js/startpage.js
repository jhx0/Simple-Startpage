let username;
let items;

function readConfig() {
    var data = JSON.parse(config);

    username = data.settings.name;
    
    items = data.items;
}

function greetUser() {
    document.getElementById('greeting').innerHTML += 'Welcome ' + username + '!';
}

function createEntries(brand) {
    for(let i = 0; i < items.length; i++) {
        let item = items[i];

        let element = '<li class="items"><a href="' + item.link + '"><i class="fa-brands ' + item.brand + '"></i></a></li>';

        document.getElementById('items').innerHTML += element;
    }
}
