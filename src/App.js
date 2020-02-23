import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {

  const [genre, setGenre] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState('');
  const [band, setBand] = useState('');
  const [album, setAlbum] = useState('');
  const [fav, setFav] = useState([]);


  let listMetalBands = ['Iron Maiden','Meshuggah','Metallica','Mayhem','Mastodon','Gojira','Edguy','Stratovarius','Saxon','Grave Digger','Morbid Angel','Megadeth','Powerwolf','Ensiferum','Blind Guardian','Arch Enemy','Vader','Watain','Emperor','Marduk','Manilla Road','Blut Aus Nord','Burzum','Gatecreeper','Amon Amarth','Darkthrone','Annihilator','Rivers Of Nihil','Bathory','Death','Mgla','Manowar','Children of Bodom','Pantera','Rammstein','Deicide','Nile','Dissection','Ghost','Disentomb','Windir','Behemoth','Satyricon','Harakiri for the Sky','Dimmu Borgir','Hypocrisy','Immortal','Opeth','Decapitated','Amorphis','Slayer','Sepultura','Sonata Arctica','Celtic Frost','Dio','Bolt Thrower','Katatonia','Gorgoroth','Entombed','Cult of Luna','Helloween','Dream Theater','Anthrax','Accept','Exodus','Mercyful Fate','Kreator','Venom','Nightwish','In Flames','Sabaton','Bloodbath','Type O Negative','Down','Exeloume','Testament','Napalm Death','Obituary','Rhapsody of Fire','Devin Townsend','Devin Townsend Project','Midnight','Ihsahn','Alcest','Lacuna Coil','Eluveitie','Anaal Nathrakh','Rotting Christ','Moonspell','Dark Tranquillity','Cradle of Filth','Slipknot','Therion','Tristania','Soilwork','As I Lay Dying','Haggard','Septicflesh','Shadow of Intent','Jinjer','Infant Annihilator','Belphegor','AU Dessus','Regarde Les Hommes Tomber','The Great Old Ones','Blood Incantation','Tomb Mold','Crypt Sermon','Sentient Horror','Carcariass','Obsequiae','Xoth','Midnight Odyssey','Deathspell Omega','Belenos','The Ruins Of Beverast','Dark Fortress','Enslaved','Envy','Atlantean Kodex','1349','Ulver','In Mourning','Taake','Carpathian Forest','Abbath','Neurosis','Sunn O)))','Be\'Lakor','Graveworm','Mors Principium Est','Morgoth','Atheist','Immolation','Necrophagist','Archspire','Gorod','Cryptopsy','Inferi','Obscura','Beyond Creation','Absolva','British Lion','Iced Earth','HammerFall','Sons Of Apollo','Avantasia','Epica','Angra','Gamma Ray','DragonForce','Alestorm','Gloryhammer','Wind Rose','Killswitch Engage','Trivium','Machine Head','Soulfly','TOOL','Deftones','At Vance','Allen Lande','Summoning','Leprous','In This Moment','Agalloch','Anathema','Paradise Lost'];
  let listJazz = ['Miles Davis','John Coltrane','Ornette Coleman','Charlie Parker','Chet Baker','Kenny Burrell','Wes Montgomery','Duke Ellington','Thelonious Monk','Bud Powell','Art Tatum','Oscar Peterson','Herbie Hancock','Count Basie','Oscar Peterson','Louis Armstrong','Dizzy Gillespie','Charles Mingus','Coleman Hawkins','Lester Young','Sidney Bechet','Billie Holiday','Nina Simone','Ella Fitzgerald','Archie Shepp','Benny Goodman','Roy Eldridge','Benny Carter','Johnny Hodges','Gil Evans','Art Blakey','Horace Silver','Sonny Rollins','Bill Evans','Abdullah Ibrahim','Ahmad Jamal','Brad Mehldau','Pat Metheny','Chick Corea','Marcus Miller','Christian McBride','Esbjörn Svensson Trio','Nils Landgren','Charlie Haden','Jack DeJohnette','Joshua Redman','Michel Petrucciani','Michael Brecker','Stéphane Grappelli','Django Reinhardt','Wayne Shorter'];
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
      case 'favorites':
          setGenre('favorites');
          break;  
    }
  }


  return (
    <div className="App">

<nav class="navbar navbar-expand-md navbar-dark fixed-top" id="main-nav">
        <div class="container">
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav ml-auto d-flex flex-column font-weight-bold">
                    <li class="nav-item mr-1">
                      <a class="nav-link text-light" onClick={(e)=>handleClick(e,'metal')}>Metal</a>
                    </li>
                    <li class="nav-item mr-1">
                      <a class="nav-link text-light" onClick={(e)=>handleClick(e,'jazz')}>Jazz</a>
                    </li>
                    <li class="nav-item mr-1">
                      <a class="nav-link text-light" onClick={(e)=>handleClick(e,'progrock')}>Prog Rock</a>
                    </li>
                    {fav.length>0?
                    <li class="nav-item mr-1">
                      <a class="nav-link text-light" onClick={(e)=>handleClick(e,'favorites')}>Favorites</a>
                    </li>
                    :
                    null}
                </ul>
            </div>
        </div>

    </nav>
      {genre===''?<Cover genre={listMetalBands} band={band} album={album} url={url} isLoading={isLoading} setFav={setFav} fav={fav} setUrl={setUrl} setAlbum={setAlbum} setBand={setBand} setIsLoading={setIsLoading}/>:null}
      {genre==='metal'?<Cover genre={listMetalBands} band={band} album={album} url={url} isLoading={isLoading} setFav={setFav} fav={fav} setUrl={setUrl} setAlbum={setAlbum} setBand={setBand} setIsLoading={setIsLoading}/>:null}
      {genre==='jazz'?<Cover genre={listJazz} band={band} album={album} url={url} isLoading={isLoading} setFav={setFav} fav={fav} setUrl={setUrl} setAlbum={setAlbum} setBand={setBand} setIsLoading={setIsLoading}/>:null}
      {genre==='progrock'?<Cover genre={listProg} band={band} album={album} url={url} isLoading={isLoading} setFav={setFav} fav={fav} setUrl={setUrl} setAlbum={setAlbum} setBand={setBand} setIsLoading={setIsLoading}/>:null}
      {genre==='favorites'?<Favorites fav={fav} setFav={setFav}/>:null}

    </div>
  );
}

export default App;

const Cover = (props) => {

  const addToFav = (fav, cover,band,album) => {
    console.log('hey');
    let newFav = [...fav];
    newFav.push(
      {
        id:fav.length,
        cover:props.url,
        band:props.band,
        album:props.album
      }
    )
    props.setFav(newFav);
  }



  

  // https://cors-anywhere.herokuapp.com/

  async function fetchData(band) {
    const res = await fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/autocomplete?q=${band}`);
    res.json()
      .then(res => {
        var newList = res.albums.data.filter(item=> item.artist['name'] === band);
        let random = Math.floor(Math.random()* Math.floor(newList.length));
        props.setUrl(newList[random].cover_big);
        props.setAlbum(newList[random].title);
        props.setBand(band);
        props.setIsLoading(false);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    fetchData(props.genre[Math.floor(Math.random()* Math.floor(props.genre.length))]);
  },[]);

  let youtubeSearch = `https://www.youtube.com/results?search_query=${props.band}+${props.album}+full+album`;
  let amazonSearch = `https://www.amazon.fr/s?k=${props.band}+${props.album}&__mk_fr_FR=ÅMÅŽÕÑ&ref=nb_sb_noss_1`


  return (

    <div className="cover">
      {props.isLoading && <p>The Cover Is Loading...</p>}

      <img 
      className="coverPic" 
      src={props.url} 
      onClick={()=>fetchData(props.genre[Math.floor(Math.random()* Math.floor(props.genre.length))])}
      />

      <div className="band">
        {props.band}
        </div>

      <div className="album">
        {props.album} 
      <div className="buttons"></div> <i class="far fa-plus-square" onClick={()=>addToFav(props.fav,props.url,props.band,props.album)}></i> <a href={youtubeSearch} target="_blank"><i class="fab fa-youtube"></i></a> <a href={amazonSearch} target="_blank"><i class="fab fa-amazon"></i></a></div>
      <div className="new">
        Click on the image for a new cover !
        </div>   
    </div>
  );
};

const Favorites = (props) => {

  const removeFromFav = (fav, id) => {
    let newFav = fav.filter(item=>item.id!==id);
    props.setFav(newFav);
  }

  return(

    <div className="favPage">
      <h1>Your selection</h1>
      {props.fav.map(item=>{
        return(
          <div className="favItem">
          <img 
          className="coverPic" 
          src={item.cover} 
          />

          <div className="band">
            {item.band}
            </div>

          <div className="album">
            {item.album} <i class="fas fa-minus-square" onClick={()=>removeFromFav(props.fav, item.id)}></i> <a href={`https://www.youtube.com/results?search_query=${item.band}+${item.album}+full+album`} target="_blank"><i class="fab fa-youtube"></i></a> <a href={`https://www.amazon.fr/s?k=${item.band}+${item.album}&__mk_fr_FR=ÅMÅŽÕÑ&ref=nb_sb_noss_1`} target="_blank"><i class="fab fa-amazon"></i></a></div>
            </div>     
    );
  })}
  </div>)
}