const API = 'https://youtube138.p.rapidapi.com/playlist/videos/?id=PLP3a4XowqG_sD8wdcrGuRwJaAK1p2FwEt&hl=en&gl=US'

const content = null || document.getElementById('content')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c7ee388a9fmshe174ac9f31d6420p1abc51jsn11445be7e92d',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        // En una situacion normal, no deberias mostrar la Key
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API)
        
        let view = `
        ${videos.contents.map(item => `
            <div class="group relative">
                <div
                  class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                  <img src="${item.video.thumbnails[0].url}" alt="${item.video.title}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                  <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${item.video.title}
                  </h3>
                </div>
            </div>`
            ).slice(0,8).join('')}
        `;
        content.innerHTML = view

    } catch (error){
        console.log(error)
    }
})()