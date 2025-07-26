const url = "https://fortniteapi.io/v1/news?lang=en&type=br"

async function getData(){
	const res = await fetch(url)
	console.log(res)
}

getData()