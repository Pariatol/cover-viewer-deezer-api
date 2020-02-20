import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {

  const [genre, setGenre] = useState('');

  let listMetalBands = ['Iron Maiden','Meshuggah','Metallica','Mayhem','Mastodon','Gojira','Edguy','Stratovarius','Saxon','Grave Digger','Morbid Angel','Megadeth','Powerwolf','Ensiferum','Blind Guardian','Arch Enemy','Vader','Watain','Emperor','Marduk','Manilla Road','Blut Aus Nord','Burzum','Gatecreeper','Amon Amarth','Darkthrone','Annihilator','Rivers Of Nihil','Bathory','Death','Mgla','Manowar','Children of Bodom','Pantera','Rammstein','Deicide','Nile','Dissection','Ghost','Disentomb','Windir','Behemoth','Satyricon','Harakiri for the Sky','Dimmu Borgir','Hypocrisy','Immortal','Opeth','Decapitated','Amorphis','Slayer','Sepultura','Sonata Arctica','Celtic Frost','Dio','Bolt Thrower','Katatonia','Gorgoroth','Entombed','Cult of Luna','Helloween','Dream Theater','Anthrax','Accept','Exodus','Mercyful Fate','Kreator','Venom','Nightwish','In Flames','Sabaton','Bloodbath','Type O Negative','Down','Exeloume','Testament','Napalm Death','Obituary','Rhapsody of Fire','Devin Townsend','Devin Townsend Project','Midnight','Ihsahn','Alcest','Lacuna Coil','Eluveitie','Anaal Nathrakh','Rotting Christ','Moonspell','Dark Tranquillity','Cradle of Filth','Slipknot','Therion','Tristania','Soilwork','As I Lay Dying','Haggard','Septicflesh','Shadow of Intent','Jinjer','Infant Annihilator','Belphegor','AU Dessus','Regarde Les Hommes Tomber','The Great Old Ones','Blood Incantation','Tomb Mold','Crypt Sermon','Sentient Horror','Carcariass','Obsequiae','Xoth','Midnight Odyssey','Deathspell Omega','Belenos','The Ruins Of Beverast','Dark Fortress','Enslaved','Envy','Atlantean Kodex','1349','Ulver','In Mourning','Taake','Carpathian Forest','Abbath','Neurosis','Sunn O)))','Be\'Lakor','Graveworm','Mors Principium Est','Morgoth','Atheist','Immolation','Necrophagist','Archspire','Gorod','Cryptopsy','Inferi','Obscura','Beyond Creation'];
  let listJazz = ['Miles Davis','John Coltrane','Ornette Coleman','Charlie Parker','Chet Baker','Kenny Burrell','Wes Montgomery','Duke Ellington','Thelonious Monk','Bud Powell','Art Tatum','Oscar Peterson','Herbie Hancock','Count Basie','Oscar Peterson','Louis Armstrong','Dizzy Gillespie','Charles Mingus','Coleman Hawkins','Lester Young','Sidney Bechet','Billie Holiday','Nina Simone','Ella Fitzgerald','Archie Shepp','Benny Goodman','Roy Eldridge','Benny Carter','Johnny Hodges','Gil Evans','Art Blakey','Horace Silver','Sonny Rollins','Bill Evans'];
  let listProg = ['Pink Floyd','Camel','Peter Gabriel','Jethro Tull','Mike Oldfield','Porcupine Tree','Rush','Ruins','Genesis','Yes','Supertramp','King Crimson','Frank Zappa','Emerson, Lake & Palmer','Genesis','The Alan Parsons Project'];

  const handleClick = (e,music) => {
    e.preventDefault();
    console.log('CLIC '+music);
    switch(music){
      case 'metal':
        setGenre('metal');
        break;
      case 'jazz':
        setGenre('jazz');
        break;
      case 'progrock':
          setGenre('progrock');
          break;  
    }
  }


  return (
    <div className="App">
      {/* <nav role="navigation">
      <ul>
        <li><a href="#">Genres</a>
          <ul class="dropdown">
            <li><a href="#" onClick={(e)=>handleClick(e,'metal')}>Metal</a></li>
            <li><a href="#" onClick={(e)=>handleClick(e,'jazz')}>Jazz</a></li>
            <li><a href="#" onClick={(e)=>handleClick(e,'progrock')}>Prog rock</a></li>
          </ul>
        </li>
      </ul>
    </nav> */}

<nav class="navbar navbar-expand-md navbar-dark fixed-top text-white" id="main-nav">
        <div class="container">
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav ml-auto d-flex flex-column">
                    <li class="nav-item mr-1">
                      <a class="nav-link text-light" onClick={(e)=>handleClick(e,'metal')}>Metal</a>
                    </li>
                    <li class="nav-item mr-1">
                      <a class="nav-link text-light" onClick={(e)=>handleClick(e,'jazz')}>Jazz</a>
                    </li>
                    <li class="nav-item mr-1">
                      <a class="nav-link text-light" onClick={(e)=>handleClick(e,'progrock')}>Prog Rock</a>
                    </li>
                </ul>
            </div>
        </div>

    </nav>
      {genre===''?<Cover genre={listMetalBands}/>:null}
      {genre==='metal'?<Cover genre={listMetalBands}/>:null}
      {genre==='jazz'?<Cover genre={listJazz}/>:null}
      {genre==='progrock'?<Cover genre={listProg}/>:null}


    </div>
  );
}

export default App;

const Cover = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState('');
  const [band, setBand] = useState('');
  const [album, setAlbum] = useState('');

  async function fetchData(band) {
    const res = await fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/autocomplete?q=${band}`);
    res.json()
      .then(res => {
        var newList = res.albums.data.filter(item=> item.artist['name'] === band);
        let random = Math.floor(Math.random()* Math.floor(newList.length));
        setUrl(newList[random].cover_big);
        setAlbum(newList[random].title);
        setBand(band);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    fetchData(props.genre[Math.floor(Math.random()* Math.floor(props.genre.length))]);
  },[]);

  let youtubeSearch = `https://www.youtube.com/results?search_query=${band}+${album}+full+album`;
  let amazonSearch = `https://www.amazon.fr/s?k=${band}+${album}&__mk_fr_FR=ÅMÅŽÕÑ&ref=nb_sb_noss_1`


  return (
    <div className="cover">
      {isLoading && <p>The Cover Is Loading...</p>}

      <img 
      className="coverPic" 
      src={url} 
      onClick={()=>fetchData(props.genre[Math.floor(Math.random()* Math.floor(props.genre.length))])}
      />

      <div className="band">
        {band}
        </div>

      <div className="album">
        {album} (<a href={youtubeSearch} target="_blank"><i class="fab fa-youtube"></i></a> <a href={amazonSearch} target="_blank"><i class="fab fa-amazon"></i></a>)</div>
      <div className="new">
        Click on the image for a new cover !
        </div>      
    </div>
  );
};

