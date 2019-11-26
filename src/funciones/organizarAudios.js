const organizarAudios = audios => {

    let audiosOrganizados = {}

    audios.forEach(audio => {
        
        if( ! audiosOrganizados[audio.nombreArchivo.split(".")[0]]) {
            audiosOrganizados[audio.nombreArchivo.split(".")[0]] = {...audio,sources: []}
        };

        audiosOrganizados[audio.nombreArchivo.split(".")[0]].sources.push(audio.url);

    });

    return Object.keys(audiosOrganizados).map(k=>audiosOrganizados[k])

}

export default organizarAudios;