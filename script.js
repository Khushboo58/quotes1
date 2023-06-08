fetch('https://quotes15.p.rapidapi.com/quotes/random/',{
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6134a1c893msh8ce3efce1d1fb68p16840ejsn9b689add94be',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
})
.then(response=>response.json())
.then(response=>{console.log(response);
    document.getElementById('quote').innerHTML = response.content;
    document.getElementById('author').innerHTML = '- ' + response.originator.name + ' -';
})

.catch (error=> {
	console.error(error);
});