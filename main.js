class Song{
    constructor(track_id,track_name,album_name,duration,artists_name,album_cover,released_year,released_month,released_day,streams,bpm,key,mode,danceability,valence,energy,acousticness,instrumentalness,liveness,speechiness){
        
        this.track_id = track_id;
        this.track_name = track_name;
        this.album_name = album_name;
        this.duration = duration;
        this.artists_name = artists_name;
        this.album_cover = album_cover;
        this.released_year = released_year;
        this.released_month = released_month;
        this.released_day = released_day;
        this.streams = streams;
        this.bpm = bpm;
        this.key = key;
        this.mode = mode;
        this.danceability = danceability;
        this.valence = valence;
        this.energy = energy;
        this.acousticness = acousticness;
        this.instrumentalness = instrumentalness;
        this.liveness = liveness;
        this.speechiness = speechiness;
    }
}

let allSongs = [];
let top10SongList = [];
let moodySongs = [];
let newSongs = [];
let danceSongs = []

let tempList = [];

allSongs.push(new Song(1,"Sunflower - Spider-Man: Into the Spider-Verse","Spider-Man: Into the Spider-Verse (Soundtrack From & Inspired by the Motion Picture)",'2:38',"Post Malone, Swae Lee",'assets/album_cover/Sunflower - Spider-Man Into the Spider-Verse.jfif',2018,10,9,2808096550,90,'D','Major',76,91,50,54,0,7,5))
allSongs.push(new Song(2,'Starboy','Starboy','3:50',"The Weeknd, Daft Punk",'assets/album_cover/Starboy.jfif',2016,9,21,2565529693,186,'G','Major',68,49,59,16,0,13,28))
allSongs.push(new Song(3,'As It Was','As It Was','2:47','Harry Styles','assets/album_cover/As It Was.jfif',2022,3,31,2513188493,174,'F#','Minor',52,66,73,34,0,31,6))
allSongs.push(new Song(4,'Die For You','Starboy','4:20','The Weeknd','assets/album_cover/Die For You.jfif',2016,11,24,1647990401,134,'C#','Minor',59,51,52,9,0,15,7))
allSongs.push(new Song(5,'Blank Space','1989','3:51','Taylor Swift','assets/album_cover/Blank Space.jfif',2014,1,1,1355959075,96,'F','Major',75,57,68,9,0,13,6))
allSongs.push(new Song(6,'Flowers','Flowers','3:20','Miley Cyrus','assets/album_cover/Flowers.jfif',2023,1,12,1316855716,118,'E','Major',71,65,68,6,0,3,7))
allSongs.push(new Song(7,'I Wanna Be Yours','AM','3:03','Arctic Monkeys','assets/album_cover/I Wanna Be Yours.jfif',2013,1,1,1297026226,135,'F#','Minor',48,44,42,12,2,11,3))
allSongs.push(new Song(8,'Kill Bill','SOS','2:33','SZA','assets/album_cover/Kill Bill.jfif',2022,12,8,1163093654,89,'G#','Major',64,43,73,5,17,16,4))
allSongs.push(new Song(9,"I'm Good (Blue)","I'm Good (Blue)",'2:55',"Bebe Rexha, David Guetta","assets/album_cover/I'm Good (Blue).jfif",2022,8,26,1109433169,128,'G','Minor',56,38,97,4,0,35,4))
allSongs.push(new Song(10,"I Ain't Worried","\"I Ain't Worried (Music From The Motion Picture \"Top Gun: Maverick\")\"",'2:28','OneRepublic',"assets/album_cover/I Ain't Worried.jfif",2022,5,13,1085685420,140,'F','Major',71,82,81,11,0,6,5))
allSongs.push(new Song(11,'See You Again','Flower Boy','3:00',"Tyler, The Creator, Kali Uchis",'assets/album_cover/See You Again.jfif',2017,7,21,1047101291,79,'F#','Major',56,58,56,37,0,11,10))
allSongs.push(new Song(12,'Anti-Hero','Midnights','3:20','Taylor Swift','assets/album_cover/Anti-Hero.jfif',2022,10,21,999748277,97,'E','Major',64,51,63,12,0,19,5))
allSongs.push(new Song(13,'Calm Down (with Selena Gomez)','Calm Down (with Selena Gomez)','3:59',"Rema, Selena G",'assets/album_cover/Calm Down (with Selena Gomez).jfif',2022,3,25,899183384,107,'B','Major',80,82,80,43,0,14,4))
allSongs.push(new Song(14,"Creepin'",'HEROES & VILLAINS','3:41',"The Weeknd, 21 Savage, Metro Boomin","assets/album_cover/Creepin\'.jfif",2022,12,2,843957510,98,'C#','Minor',71,17,61,36,0,8,5))
allSongs.push(new Song(15,'Cruel Summer','Lover','2:58','Taylor Swift','assets/album_cover/Cruel Summer.jfif',2019,8,23,800840817,170,'A','Major',55,58,72,11,0,11,15))
allSongs.push(new Song(16,'Style','1989','3:51','Taylor Swift','assets/album_cover/Style.jfif',2014,1,1,786181836,95,'D','Major',60,48,79,0,0,12,4))
allSongs.push(new Song(17,'Ella Baila Sola','Peso Pluma','2:45',"Eslabon Armado, Peso Pluma",'assets/album_cover/Ella Baila Sola.jfif',2023,3,16,725980112,148,'F','Minor',67,83,76,48,0,8,3))
allSongs.push(new Song(18,'TQG','MAÑANA SERÁ BONITO','3:18',"Karol G, Shakira",'assets/album_cover/TQG.jfif',2023,2,23,618990393,180,'E','Minor',72,61,63,67,0,9,28))
allSongs.push(new Song(19,'Angels Like You','Plastic Hearts','3:16','Miley Cyrus','assets/album_cover/Angels Like You.jfif',2020,11,27,570515054,122,'F','Major',67,49,64,10,0,10,3))
allSongs.push(new Song(20,'La Bebe - Remix','La Bebe (Remix)','3:54',"Peso Pluma, Yng Lvcas",'assets/album_cover/La Bebe - Remix.jfif',2023,3,17,553634067,170,'D','Minor',81,56,48,21,0,8,33))
allSongs.push(new Song(21,'Die For You - Remix','Die For You - Remix','3:52',"Ariana Grande, The Weeknd",'assets/album_cover/Die For You - Remix.jfif',2023,2,24,518745108,67,'C#','Minor',53,50,53,23,0,44,7))
allSongs.push(new Song(22,'un x100to','un x100to','3:14',"Bad Bunny, Grupo Frontera",'assets/album_cover/un x100to.jfif',2023,4,17,505671438,83,'F#','Minor',57,56,72,23,0,27,5))
allSongs.push(new Song(23,'Cupid - Twin Ver.','The Beginning: Cupid','2:54','Fifty Fifty','assets/album_cover/Cupid - Twin Ver..jfif',2023,2,24,496795686,120,'B','Minor',78,76,59,43,0,34,3))
allSongs.push(new Song(24,'Last Night','3 Songs At A Time Sampler','2:43','Morgan Wallen','assets/album_cover/Last Night.jfif',2023,1,31,429829812,204,'F#','Major',52,52,68,46,0,15,4))
allSongs.push(new Song(25,'Daylight','Daylight','3:32','David Kushner','assets/album_cover/Daylight.jfif',2023,4,14,387570742,130,'D','Minor',51,32,43,83,0,9,3))
allSongs.push(new Song(26,'Like Crazy','FACE','3:32','Jimin','assets/album_cover/Like Crazy.jfif',2023,3,24,363369738,120,'G','Major',63,36,73,0,0,36,4))
allSongs.push(new Song(27,'El Azul','El Azul','3:07',"Junior H, Peso Pluma",'assets/album_cover/El Azul.jfif',2023,2,10,354495408,144,'A','Minor',56,84,65,23,0,10,6))
allSongs.push(new Song(28,'Classy 101','Classy 101','3:15',"Feid, Young Miko",'assets/album_cover/Classy 101.jfif',2023,3,31,335222234,100,'B','Major',86,67,66,14,0,12,16))
allSongs.push(new Song(29,'WHERE SHE GOES','WHERE SHE GOES','3:51','Bad Bunny','assets/album_cover/WHERE SHE GOES.jfif',2023,5,18,303236322,144,'A','Minor',65,23,80,14,63,11,6))
allSongs.push(new Song(30,"Peso Pluma: Bzrp Music Sessions, Vol. 55",'Peso Pluma: Bzrp Music Sessions','3:08',"Bizarrap, Peso Pluma","assets/album_cover/Peso Pluma Bzrp Music Sessions, Vol. 55.jfif",2023,5,31,200647221,133,'F','Minor',85,81,67,26,0,12,5))
allSongs.push(new Song(31,'Frágil (feat. Grupo Frontera)','Frágil','2:40',"Yahritza Y Su Esencia, Grupo Frontera",'assets/album_cover/Frágil (feat. Grupo Frontera).jfif',2023,4,7,188933502,150,'F#','Major',61,39,73,37,0,11,3))
allSongs.push(new Song(32,'Sprinter','Sprinter','3:49',"Dave, Central Cee",'assets/album_cover/Sprinter.jfif',2023,6,1,183706234,141,'C#','Major',92,66,58,19,0,8,24))
allSongs.push(new Song(33,'TQM','TQM','2:38','Fuerza Regida','assets/album_cover/TQM.jfif',2023,5,19,176553476,125,'F','Minor',79,96,85,27,0,11,6))
allSongs.push(new Song(34,'Seven (feat. Latto) (Explicit Ver.)','GOLDEN','3:03',"Latto, Jung Kook",'assets/album_cover/Seven (feat. Latto) (Explicit Ver.).jfif',2023,7,14,141381703,125,'B','Major',80,89,83,31,0,8,4))
allSongs.push(new Song(35,'vampire','vampire','3:39','Olivia Rodrigo','assets/album_cover/vampire.jfif',2023,6,30,140003974,138,'F','Major',51,32,53,17,0,31,6))
allSongs.push(new Song(36,'LALA','LA VIDA ES UNA','3:17','Myke Towers','assets/album_cover/LALA.jfif',2023,3,23,133716286,92,'C#','Major',71,61,74,7,0,10,4))
allSongs.push(new Song(37,'Dance The Night (From Barbie The Album)','Dance The Night (From Barbie The Album)','2:56','Dua Lipa','assets/album_cover/Dance The Night (From Barbie The Album).jfif',2023,5,25,127408954,110,'B','Minor',67,78,85,2,0,33,5))
allSongs.push(new Song(38,'Los del Espacio','Los del Espacio','5:38',"Big One, Duki, Lit Killah, Maria Becerra, FMK, Rusherking, Emilia, Tiago pzk",'assets/album_cover/Los del Espacio.jfif',2023,6,1,123122413,120,'E','Major',81,63,68,11,0,11,4))
allSongs.push(new Song(39,'Popular (with Playboi Carti & Madonna) - The Idol Vol. 1 (Music from the HBO Original Series)','Popular (Music from the HBO Original Series)','3:35',"The Weeknd, Madonna, Playboi Carti",'assets/album_cover/Popular (with Playboi Carti & Madonna) - The Idol Vol. 1 (Music from the HBO Original Series).jfif',2023,6,2,115364561,99,'C#','Major',85,83,68,7,0,36,20))
allSongs.push(new Song(40,'fukumean','a Gift & a Curse','2:05','Gunna','assets/album_cover/fukumean.jfif',2023,5,15,95217315,130,'C#','Minor',85,22,62,12,0,28,9))
allSongs.push(new Song(41,'LADY GAGA','GÉNESIS','3:32',"Gabito Ballesteros, Junior H, Peso Pluma",'assets/album_cover/LADY GAGA.jfif',2023,6,22,86444842,140,'F','Minor',65,87,74,22,0,42,4))
allSongs.push(new Song(42,'SABOR FRESA','SABOR FRESA','2:36','Fuerza Regida','assets/album_cover/SABOR FRESA.jfif',2023,6,22,78300654,130,'G','Minor',79,96,86,9,0,9,9))
allSongs.push(new Song(43,'Barbie World (with Aqua) [From Barbie The Album]','Barbie World (with Aqua) [From Barbie The Album]','1:49',"Nicki Minaj, Aqua, Ice Spice",'assets/album_cover/Barbie World (with Aqua) [From Barbie The Album].jfif',2023,6,23,65156199,144,'F','Major',77,75,58,52,0,23,25))
allSongs.push(new Song(44,'MOJABI GHOST','DATA','3:52',"Tainy, Bad Bunny",'assets/album_cover/MOJABI GHOST.jfif',2023,6,29,61245289,122,'F#','Minor',81,74,71,14,0,56,4))
allSongs.push(new Song(45,'Super Shy','NewJeans \'Super Shy\'','2:34','NewJeans','assets/album_cover/Super Shy.jfif',2023,7,7,58255150,150,'F','Minor',78,52,82,18,0,15,7))
allSongs.push(new Song(46,'Columbia','Columbia','3:06','Quevedo','assets/album_cover/Columbia.jfif',2023,7,7,58149378,100,'F','Major',67,26,71,37,0,11,4))
allSongs.push(new Song(47,'TULUM','GÉNESIS','3:29',"Peso Pluma, Grupo Frontera",'assets/album_cover/TULUM.jfif',2023,6,28,52294266,168,'F#','Major',56,63,87,39,0,11,5))
allSongs.push(new Song(48,'I Can See You (Taylor\'s Version) (From The Vault)','Speak Now (Taylor\'s Version)','4:33','Taylor Swift','assets/album_cover/I Can See You (Taylor\'s Version) (From The Vault).jfif',2023,7,7,52135248,123,'F#','Major',69,82,76,6,0,6,3))
allSongs.push(new Song(49,"What Was I Made For? [From The Motion Picture \"Barbie\"]","What Was I Made For? [From The Motion Picture \"Barbie\"]",'3:42','Billie Eilish','assets/album_cover/What Was I Made For [From The Motion Picture Barbie].jfif',2023,7,13,30546883,78,'E','Major',44,14,9,96,0,10,3))
allSongs.push(new Song(50,'Rush','Rush','2:36','Troye Sivan','assets/album_cover/Rush.jfif',2023,7,13,22581161,126,'F','Minor',74,35,84,0,0,11,6))

allSongs.forEach((song, index)=>{
    tempList.push(song)
})

console.log(tempList)

for(var i = 1; i<=10;i++){
    top10SongList.push(tempList[i]);
}

document.addEventListener("DOMContentLoaded",()=>{
    top10SongList.forEach((song, index) => {
        let songDiv = document.createElement("div");
        let songDivN = document.createElement("div");
        songDiv.classList.add("songs-item"); // Add a CSS class for styling
    
        // Create HTML content for the song
        let songItem = `<a href="songDetail.html?trackId=${song.track_id}" class="song-link">
            <div class="song-info">
                <div class="song-info-item" id="song-name-list"><img src="${song.album_cover}" alt="" id="album-small">${song.track_name}</div>
                <div class="song-info-item">${song.artists_name}</div>
                <div class="song-info-item">${song.album_name}</div>
            </div>
        </a>`;
    
        songDivN.innerHTML = songItem;
        document.getElementById("top10-item").appendChild(songDivN);
    });

    moodySongs = tempList;
    moodySongs.sort((a,b)=> a.bpm - b.bpm)
    
    for (let i = 0; i<10; i++){
        let songDiv = document.createElement("div");
        let songDivN = document.createElement("div");
        songDiv.classList.add("songs-item"); // Add a CSS class for styling
    
        // Create HTML content for the song
        let songItem = `<a href="songDetail.html?trackId=${moodySongs[i].track_id}" class="song-link">
            <div class="song-info">
                <div class="song-info-item" id="song-name-list"><img src="${moodySongs[i].album_cover}" alt="" id="album-small">${moodySongs[i].track_name}</div>
                <div class="song-info-item">${moodySongs[i].artists_name}</div>
                <div class="song-info-item">${moodySongs[i].album_name}</div>
            </div>
        </a>`;
    
        songDivN.innerHTML = songItem;
        document.getElementById("recc-item").appendChild(songDivN);
    }
    //text in main page
let footerText = document.getElementById("footer-p");
footerText.textContent = "Willify has been streaming for more than 15 years and keep going!. We are committed to bring the best user experience and keep unifying all of us from various countries through our love in music."
});

document.addEventListener("DOMContentLoaded",()=>{
    newSongs = tempList;
    newSongs.sort((a,b)=> b.released_year - a.released_year)
    for (let i = 0; i<10; i++){
        let songDiv = document.createElement("div");
        let songDivN = document.createElement("div");
        songDiv.classList.add("songs-item"); // Add a CSS class for styling
        
        // Create HTML content for the song
        let songItem = `<a href="songDetail.html?trackId=${newSongs[i].track_id}" class="song-link">
            <div class="song-slide-card">
                <div class="song-slide-item"><img src="${newSongs[i].album_cover}" alt="" id="album-medium"></div>
                <div class="song-slide-name">${newSongs[i].track_name}</div>
                <div class="song-slide-artist">${newSongs[i].artists_name}</div>
            </div>
        </a>`;
        
        songDivN.innerHTML = songItem;
        document.getElementById("new-songs-slider").appendChild(songDivN);
    }

    danceSongs = tempList;
    danceSongs.sort((a,b)=> b.danceability - a.danceability);

    for (let i = 0; i<10; i++){
        let songDiv = document.createElement("div");
        let songDivN = document.createElement("div");
        songDiv.classList.add("songs-item"); // Add a CSS class for styling

        // Create HTML content for the song
        let songItem = `<a href="songDetail.html?trackId=${danceSongs[i].track_id}" class="song-link">
            <div class="song-slide-card">
                <div class="song-slide-item"><img src="${danceSongs[i].album_cover}" alt="" id="album-medium"></div>
                <div class="song-slide-name">${danceSongs[i].track_name}</div>
                <div class="song-slide-artist">${danceSongs[i].artists_name}</div>
            </div>
        </a>`;

        songDivN.innerHTML = songItem;
        document.getElementById("dance-songs-slider").appendChild(songDivN);
    }

    allSongs.forEach((song, index) => {
        let songDiv = document.createElement("div");
        let songDivN = document.createElement("div");
        songDiv.classList.add("all-songs-item"); // Add a CSS class for styling

        // Create HTML content for the song
        let songItem = `<a href="songDetail.html?trackId=${song.track_id}" class="song-link">
            <div class="song-info">
                <div class="song-info-item" id="song-name-list"><div class="track-id">${song.track_id}.</div> <img src="${song.album_cover}" alt="" id="album-xsmall"><div class="track-name">${song.track_name}.</div></div>
                <div class="song-info-item">${song.artists_name}</div>
                <div class="song-info-item">${song.album_name}</div>
            </div>
        </a>`;

        songDivN.innerHTML = songItem;
        document.getElementById("all-songs-item").appendChild(songDivN);
    });
});



// Function to get URL parameter
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name) || '';
}

// Get trackId from URL
const trackId = getUrlParameter('trackId');

// Find song details by trackId
const song = allSongs.find(song => song.track_id == trackId);

// Populate song details
if (song) {
    document.getElementById('track-name').textContent = `Title: ${song.track_name}`;
    document.getElementById('album-large').src = song.album_cover;
    document.getElementById('artist-name').textContent = `Artist: ${song.artists_name}`;
    document.getElementById('album-name').textContent = `Album: ${song.album_name}`;
    // document.getElementById('track-name').textContent = `Track: ${song.track_name}`;
    document.getElementById('song-duration').textContent = `Duration: ${song.duration}`;
    document.getElementById('released-date').textContent = `Released Date: ${song.released_day}-${song.released_month}-${song.released_year}`;
    document.getElementById('streams-count').textContent = `Streams: ${song.streams}`;
    document.getElementById('song-bpm').textContent = `BPM: ${song.bpm}`;
    document.getElementById('song-key').textContent = `Key: ${song.key} ${song.mode}`;
    document.getElementById('song-danceability').textContent = `Danceability: ${song.danceability}`;
    document.getElementById('song-valence').textContent = `Valence: ${song.valence}`;
    document.getElementById('song-energy').textContent = `Energy: ${song.energy}`;
    document.getElementById('song-acousticness').textContent = `Acousticness: ${song.acousticness}`;
    document.getElementById('song-instrumentalness').textContent = `Instrumentalness: ${song.instrumentalness}`;
    document.getElementById('song-liveness').textContent = `Liveness: ${song.liveness}`;
    document.getElementById('song-speechiness').textContent = `Speechiness: ${song.speechiness}`;
} else {
    document.getElementById('song-detail-container').textContent = 'Song not found.';
}



//register page handle

// const registForm = document.getElementById('regist-form');


function validateForm(){
    const nameForm = document.getElementById('name')
    const emailForm = document.getElementById('email');
    const passwordForm = document.getElementById('password');
    const ageForm = document.getElementById('age');
    const maleForm = document.getElementById('male');
    const femaleForm = document.getElementById('female');
    if(nameForm.value.length<5){
        alert("Username length must be at least 5 characters")
    }
    else if(!emailForm.value.endsWith("@gmail.com")){
        alert("Email must ends with @gmail.com")
    }
    else if(!checkPassword(passwordForm.value)){
        alert("Password must have a capital letter and number")
    }
    else if(ageForm.value < 13){
        alert("Age must be older than 13")
    }
    else if(!maleForm.checked && !femaleForm.checked){
        alert("Gender must be selected")
    }
    else{
        alert("Data successfully submited")
    }
}

function checkPassword(password){
    var incCapital = false;
    var incNum = false;
    for (let i = 0; i<password.length; i++){
        if(password[i] >= 'A' && password[i] <= 'Z'){
            incCapital = true;
        }
        else if(password[i] >='0' && password[i] <='9'){
            incNum = true;
        }

        if(incCapital && incNum){
            return true;
        }
    }
    return false;
}

