const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCt8vBErYflI8OoFjHoqjcRA&part=snippet%2Cid&order=date&maxResults=9';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4a961f5178msh4d599fcfcb62ae0p10044ejsn344178f62337',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

// const content = null || document.getElementById('content');
const content = document.getElementById('content');

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);//recibe la respuesta y la guarda
    const data = await response.json();//la respuesta guardada la transforma a Json
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API);//aquí se llamo a la api
        //video, en singular es el item con los datos del video que viene en el array de respuesta original de la API
        let view = `
        ${videos.items.map(video => ` 
            <div class="group relative">
                <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </div>
        `).slice(0,4).join('')}
        `;
        content.innerHTML = view;
    } catch (err){
      console.log(err);
      //aquí se puede color un mensaje en html para decirle al usuario que fallo algo
    }
}) (); //Las expresiones de función ejecutadas inmediatamente (IIFE por su sigla en inglés) son funciones que se ejecutan tan pronto como se definen.
//se engloban en paréntesis y son de scope aislado  






// fetch(API, options)
// 	.then(response => response.json())//recibe la respuesta y la transforma es un Json
// 	.then(response => console.log(response))//muestra la respuesta
// 	.catch(err => console.error(err));



/* respuesta al llamado de la API
{
  "kind": "youtube#searchListResponse",
  "nextPageToken": "CAkQAA",
  "regionCode": "DE",
  "pageInfo": {
    "totalResults": 23,
    "resultsPerPage": 9
  },
  "items": [
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "bV8uAMO8r9o"
      },
      "snippet": {
        "publishedAt": "2020-10-17T23:03:07Z",
        "channelId": "UCt8vBErYflI8OoFjHoqjcRA",
        "title": "Instalar el Meshmixer 😉 en tu computador",
        "description": "En este vídeo Sebastián Sanhueza Tapia de la empresa Print3x muestra como Instalar el Meshmixer en el Pc y configurarlo con ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/bV8uAMO8r9o/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/bV8uAMO8r9o/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/bV8uAMO8r9o/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Print3x",
        "liveBroadcastContent": "none",
        "publishTime": "2020-10-17T23:03:07Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "whAMA3HbOpI"
      },
      "snippet": {
        "publishedAt": "2019-11-20T15:39:03Z",
        "channelId": "UCt8vBErYflI8OoFjHoqjcRA",
        "title": "Presentación del modelo educativo de Print3x en impresión 3D y el proceso pedagógico",
        "description": "Presentación del modelo educativo de Print3x en impresión 3D y el proceso pedagógico. Alianza de tecnología y educación para ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/whAMA3HbOpI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/whAMA3HbOpI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/whAMA3HbOpI/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Print3x",
        "liveBroadcastContent": "none",
        "publishTime": "2019-11-20T15:39:03Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "1mQGcPoNuL4"
      },
      "snippet": {
        "publishedAt": "2019-11-07T17:03:20Z",
        "channelId": "UCt8vBErYflI8OoFjHoqjcRA",
        "title": "Ajustar desfase u offset de una impresora 3D Minerva",
        "description": "En este vídeo Sebastian Sanhueza Tapia de la empresa Print3x nos muestra como ajustar el desfase de una impresora 3d ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/1mQGcPoNuL4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/1mQGcPoNuL4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/1mQGcPoNuL4/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Print3x",
        "liveBroadcastContent": "none",
        "publishTime": "2019-11-07T17:03:20Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "4ONtttzGFvE"
      },
      "snippet": {
        "publishedAt": "2019-11-07T16:54:30Z",
        "channelId": "UCt8vBErYflI8OoFjHoqjcRA",
        "title": "Como imprimir en una impresora 3D Minerva",
        "description": "En este vídeo Sebastian Sanhueza Tapia de la empresa Print3x nos muestra como enviar a imprimir ============ Links ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/4ONtttzGFvE/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/4ONtttzGFvE/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/4ONtttzGFvE/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Print3x",
        "liveBroadcastContent": "none",
        "publishTime": "2019-11-07T16:54:30Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "Vs-6osMC-oI"
      },
      "snippet": {
        "publishedAt": "2019-11-07T16:43:07Z",
        "channelId": "UCt8vBErYflI8OoFjHoqjcRA",
        "title": "Cambiar Filamento en una impresora 3D Minerva",
        "description": "En este vídeo Sebastian Sanhueza Tapia de la empresa Print3x muestra como cambiar filamento de una impresora 3D ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Vs-6osMC-oI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Vs-6osMC-oI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Vs-6osMC-oI/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Print3x",
        "liveBroadcastContent": "none",
        "publishTime": "2019-11-07T16:43:07Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "J-rV8g_5Te4"
      },
      "snippet": {
        "publishedAt": "2019-02-06T21:05:28Z",
        "channelId": "UCt8vBErYflI8OoFjHoqjcRA",
        "title": "Presentación Print3x y la Axis One",
        "description": "En este vídeo Presentamos oficialmente el producto Axis One, la impresora 3d de la empresa Print3x ============ Links ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/J-rV8g_5Te4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/J-rV8g_5Te4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/J-rV8g_5Te4/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Print3x",
        "liveBroadcastContent": "none",
        "publishTime": "2019-02-06T21:05:28Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "CCKGB852c2A"
      },
      "snippet": {
        "publishedAt": "2018-03-25T13:15:08Z",
        "channelId": "UCt8vBErYflI8OoFjHoqjcRA",
        "title": "Cambia de idioma tu impresora 3D",
        "description": "En este vídeo Sebastián Sanhueza Tapia de la empresa Crea en 3D nos muestra como cambiar el idioma de nuestro menú en la ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/CCKGB852c2A/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/CCKGB852c2A/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/CCKGB852c2A/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Print3x",
        "liveBroadcastContent": "none",
        "publishTime": "2018-03-25T13:15:08Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "LLit5ohZNTQ"
      },
      "snippet": {
        "publishedAt": "2018-02-07T19:30:03Z",
        "channelId": "UCt8vBErYflI8OoFjHoqjcRA",
        "title": "Como instalar la calibración automática en mi impresora 3D | Parte 3: Gcode",
        "description": "En este vídeo Sebastián Sanhueza Tapia de la empresa Crea en 3D enseña como dar las instrucciones para que se ejecute la ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/LLit5ohZNTQ/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/LLit5ohZNTQ/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/LLit5ohZNTQ/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Print3x",
        "liveBroadcastContent": "none",
        "publishTime": "2018-02-07T19:30:03Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "0v7mVu4zT-c"
      },
      "snippet": {
        "publishedAt": "2017-10-01T02:38:56Z",
        "channelId": "UCt8vBErYflI8OoFjHoqjcRA",
        "title": "Como instalar la calibración automática en mi impresora 3D | Parte 2: Firmware",
        "description": "En este vídeo Sebastian Sanhueza Tapia de la empresa Crea en 3D enseña como configurar la configuración automática, este ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/0v7mVu4zT-c/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/0v7mVu4zT-c/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/0v7mVu4zT-c/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Print3x",
        "liveBroadcastContent": "none",
        "publishTime": "2017-10-01T02:38:56Z"
      }
    }
  ]
}
*/