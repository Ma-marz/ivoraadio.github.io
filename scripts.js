/*
var songs =
    ["https://docs.google.com/uc?export=download&id=1QGM4xm_meQLe9rPIxpxoNYW8bcSMF1na",
    "https://docs.google.com/uc?export=download&id=191qnKQQ0iXG89PxBPOuHbh1YuNiPU4UY",
    "https://docs.google.com/uc?export=download&id=1kkJKWD5dFYoyKkNd5a04Mpk3-QS-1wXh",
    "https://docs.google.com/uc?export=download&id=1GEpZN4eu7NgQ8WUtYHCHZvcWPoBSGBxY",
    "https://docs.google.com/uc?export=download&id=1xXbIc2gOJmWm9VIUg16S-O7-fmD-W0_f",
    "https://docs.google.com/uc?export=download&id=1WR1VlqUEDRQtjO1V0_7vFW8jkdf0ypUn",
    "https://docs.google.com/uc?export=download&id=14jNBC2vg1INK66ikBdpcPGZ5-jpwMfPU",
    "https://docs.google.com/uc?export=download&id=1poAi8rtAZoKMan5pJGoM2IHVw0IMgG7j",
    "https://docs.google.com/uc?export=download&id=1EZRk9W3ZOE-WzYgZZ9Rok-rt4gFDrOCk",
    "https://docs.google.com/uc?export=download&id=1faogqEh7DFc3m7GAfsDyWIbg5NI880Gt",
    "https://docs.google.com/uc?export=download&id=1AwKAvLeaLAylF-Ozcf_MbSvlWhOQKLPy",
    "https://docs.google.com/uc?export=download&id=1Vt1akBRwVgUavskZi35RCwsk7hjv9HGs",
    "https://docs.google.com/uc?export=download&id=1pLx0Kk_hF1iP4anMxKEe9uaQI6Z9NMgQ",
    "https://docs.google.com/uc?export=download&id=1go58L6NziZttZPJtMBBf3p0Hl-MFpjJx",
    "https://docs.google.com/uc?export=download&id=1Z_AOoBk_s98JxSoZZL7yrtTfhXMciBQz",
    "https://docs.google.com/uc?export=download&id=1xXZMzLE1Wzs7xHAgLLypotr3aWXGzAmz",
    "https://docs.google.com/uc?export=download&id=1D8hTuorZcGJWiPGDQRXGVcLDtlPoPQUx",
    "https://docs.google.com/uc?export=download&id=108DzzbAGEHVbzT46ikLWQdJ9PVtMUuFK",
    "https://docs.google.com/uc?export=download&id=1xtFGVOVd83UytMDXzaBd-hDXBtwOzBsC",
    "https://docs.google.com/uc?export=download&id=1PjPukQaenKOfH6kWoDMcergUYcklf7Nr",
    "https://docs.google.com/uc?export=download&id=1fctofnPn_FzOYoRVpr9fsOToGv_UN2yV",
    "https://docs.google.com/uc?export=download&id=1PUByiqzri4XBiyTlJOlAak2oaNgjTR2l",
    "https://docs.google.com/uc?export=download&id=1LnayVbfo2f5jUxOnDjv-wMANU_dR5_bq",
    "https://docs.google.com/uc?export=download&id=1vT4g5-J-G0l7_nrlZjzRt98nE1XN4eNC",
    "https://docs.google.com/uc?export=download&id=1NjPO1ZwtFhqsqIPyaRFb7p__c_asQlMq",
    "https://docs.google.com/uc?export=download&id=1Ay9kS_ND9299TOtIWTMhc96fXUMawDCB",
    "https://docs.google.com/uc?export=download&id=1ttwo-WuXo6L5h7o8kk-aulRdGt-5zph-",
    "https://docs.google.com/uc?export=download&id=1OAJO-oSPPSko9oE1Mr9xeFfJPooyt9Lv",
    "https://docs.google.com/uc?export=download&id=1fTXszNQFJSqNjZp0VqZ_TbURzhskSpp-",
    "https://docs.google.com/uc?export=download&id=15TlWyKr0ciDn0PfJoeEiFxqtrVUcFl6I",
    "https://docs.google.com/uc?export=download&id=1yYckTTaMDXLH97W2tIL0-qjGL1PpoxSm",
    "https://docs.google.com/uc?export=download&id=18PiBFrf5j2G7Ejv26u-gqDrBUfSwyymh",
    "https://docs.google.com/uc?export=download&id=140VxJveTZ2Ke_mitqCYQEF2LWaAfs0WW",
    "https://docs.google.com/uc?export=download&id=1JQmTV01KKJlK-WMSbsitTOALhrj9rZsp",
    "https://docs.google.com/uc?export=download&id=19pv3pUt0oPXJlklHfMLLLZGd7WKBLLwH",
    "https://docs.google.com/uc?export=download&id=1F_ceH2-CSILDZIttRhFoz5zKp-6ET9N7",
    "https://docs.google.com/uc?export=download&id=1UOjTZzIrtDHNI0tO_-GR7muRVOnwQI6z",
    "https://docs.google.com/uc?export=download&id=19evLILQ5SvN_bTIfStfTGzIKP9YZYKoo",
    "https://docs.google.com/uc?export=download&id=1GQV0q44Gijk9lg7zcYkKjhQtSu9wN-oi",
    "https://docs.google.com/uc?export=download&id=1NQo5NOll9dqBU4Gmua2oIU7QeS_BqePJ",
    "https://docs.google.com/uc?export=download&id=1DJAskEYapJfi0WVNKl0pZfxnNkJEzIoz",
    "https://docs.google.com/uc?export=download&id=1q4OYs6vSZfVh2pdKLkLWXIsli84j1Xep",
    "https://docs.google.com/uc?export=download&id=1Jlbw-f8u-BmB2XsVu0AxPPGoO2TcRm8k",
    "https://docs.google.com/uc?export=download&id=1-pprXi5GWuiI-w1tKCE6VTwk3uQVnLhp",
    "https://docs.google.com/uc?export=download&id=11CsuZ94WG6LZUv5KRrfZM9DsYwAcJF2n",
    "https://docs.google.com/uc?export=download&id=1BiB5xocfgqzpJmtWW0TkpqEO9x75XAq8",
    "https://docs.google.com/uc?export=download&id=1xeCGyW1TE6g4XwoUM86R3GY-0yrvEIfW",
    "https://docs.google.com/uc?export=download&id=1NbnwR7YO58-sSXEhK5bGYytgK8hAG9Nl",
    "https://docs.google.com/uc?export=download&id=13EnYywYiCYFBfDMvw9iCvN99NoEfF1pD",
    "https://docs.google.com/uc?export=download&id=1HUXQaCmhXTUeZ6Xioo9ueyz3wOdz4cZW",
    "https://docs.google.com/uc?export=download&id=1jFMGzx9n5bYuMbfGCrziY1HDV1pS48-V",
    "https://docs.google.com/uc?export=download&id=1H8ll3RNnfCkPY7lN0MGKK_GZKPXZWRXr",
    "https://docs.google.com/uc?export=download&id=13zw9hlOUKGmdJDCW8fRFoFOhpaaJVWuw",
    "https://docs.google.com/uc?export=download&id=1XpYwqnw4_RQHAAUurMkQ9Tt1TdIgJmpZ",
    "https://docs.google.com/uc?export=download&id=1Nh_ny0ZFQ-WsNiDC183ycUH5LZKIOS-s",
    "https://docs.google.com/uc?export=download&id=1phdcOXTM3cMbU3uMYZMxNCy3lgrsJOpp",
    "https://docs.google.com/uc?export=download&id=1t_yKunNWP603syLaBNg2rhxyQBL4h-_Y",
    "https://docs.google.com/uc?export=download&id=1tbECWulQZpPqzbldqGLxf15Z6SqLKhyp",

        "https://docs.google.com/uc?export=download&id=1eQjR7wCsf3wyJqas-CkowjhLih_lvL8m",
        "https://docs.google.com/uc?export=download&id=1k3ZNAhQXg5VMq8E2sBrM_b4pEG5bw_Rh",
        "https://docs.google.com/uc?export=download&id=19tUVGeydnMA3tWt0gQWeVI4bRceaF3db",
        "https://docs.google.com/uc?export=download&id=15a9V4wX2RPHLsQkxSoF5Gg1kg2CYNMYn",

            "https://docs.google.com/uc?export=download&id=1HIgxx0xaTGLqMokoeqx9UXHxkQbcITfF",
            "https://docs.google.com/uc?export=download&id=1fcB9B37-yZQmJL2DajiaC2v7J28kg3np",
            "https://docs.google.com/uc?export=download&id=1NZjAJeG0dEduQfrIfO2m_psSfptlR9Vd",
            "https://docs.google.com/uc?export=download&id=1J4KpGblqTZ1xys-6ajUCbFiNc0-jFvBo",
            "https://docs.google.com/uc?export=download&id=1Ief-M5J-le_iTY-TGWAoQjlCHf0l-bwV",
            "https://docs.google.com/uc?export=download&id=122TdysEh1TegcO4XSV1BQF_s7U9HI5Im",
            "https://docs.google.com/uc?export=download&id=1CGRpInCyqjmUlI9hJfv_JYepvKyUMB_9"]


var aud = document.getElementById("currently_playing");
var first_song = getRandomSong()
aud.src = first_song;

aud.onended = function() {
    var next_song = getNextSong()
    aud.src=next_song;

};

function getNextSong() {
    var current_song = document.getElementById("currently_playing").src;

    do {
        var next_song = songs[Math.floor(Math.random()*songs.length)];
    } while (current_song == next_song)

    return next_song;
}

function getRandomSong() {
    return songs[Math.floor(Math.random()*songs.length)];
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}







document.addEventListener('DOMContentLoaded', function() {
    var episodesContainer = document.querySelector('.episodes');

    fetch('episodes.txt')
        .then(response => response.text())
        .then(data => {
            episodesContainer.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading episodes:', error);
            episodesContainer.innerHTML = 'Episoodide laadimine ebaõnnestus.';
        });
});



*/

// Function to fetch the audio file list from the server
async function fetchAudioFiles() {
    const response = await fetch('listAudioFiles.php');
    console.log(response)
    const files = await response.json();
    return files.map(file => `audio/${file}`);
}

// Function to play a random audio file
async function playRandomAudio() {
    const audioFiles = await fetchAudioFiles();
    const audioPlayer = document.getElementById('audioPlayer');

    function getRandomFile() {
        const randomIndex = Math.floor(Math.random() * audioFiles.length);
        return audioFiles[randomIndex];
    }

    function playNext() {
        const nextFile = getRandomFile();
        audioPlayer.src = nextFile;
        audioPlayer.play();
    }

    audioPlayer.addEventListener('ended', playNext);

    // Play the first random audio file
    playNext();
}

// Initialize the audio player
playRandomAudio();

