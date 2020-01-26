async function getLyrics() {
    let author = document.getElementById("author").value;
    let song = document.getElementById("song").value;
    let lyrics_el = document.getElementById("lyrics");

    lyrics_el.innerHTML = '<div class="spinner-grow text-primary" role="status"><span class="sr-only">Loading...</span></div>'

    let lyricsResponse = await fetch(`https://api.lyrics.ovh/v1/${author}/${song}`);
    let data = await lyricsResponse.json();
    if (data.lyrics) {
        lyrics_el.innerHTML = data.lyrics;
    } else {
        lyrics_el.innerHTML = data.error;
    }

}