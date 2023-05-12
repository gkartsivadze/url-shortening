function geturl() {
    const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://ismaelc-bitly.p.rapidapi.com/v3/shorten?login=gkartsivadze&apikey=c92932f20a2e2355e4b58bd281cf00ec81943fc3&longUrl=http%3A%2F%2Fwww.mashape.com');
xhr.setRequestHeader('X-RapidAPI-Key', 'bf95b9440amsh7b909f81395310cp18a0c4jsn2f2172766127');
xhr.setRequestHeader('X-RapidAPI-Host', 'ismaelc-bitly.p.rapidapi.com');

xhr.send(data);
}