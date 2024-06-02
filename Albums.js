import React from 'react';
import { motion } from 'framer-motion';
import './Albums.css';

const albums = [
  {
    id: 1,
    name: 'LONG.LIVE.A$AP',
    cover: 'https://s.songswave.com/album-images/vol9/489/489906/2321019-big/Long-Live-Asap-Deluxe-Edition-cover.jpg',
    tracks: [
      { id: 1, name: 'Long Live A$AP', url: 'https://new.muzikavsem.org/dl/1783796643/AAP_Rocky_-_Long_Live_AAP_(new.muzikavsem.org).mp3' },
      { id: 2, name: 'Goldie', url: 'https://new.muzikavsem.org/dl/533909341/AAP_Rocky_-_Goldie_(new.muzikavsem.org).mp3' },
      { id: 3, name: 'PMW (All I Really Need) [feat. Schoolboy Q]', url: 'https://new.muzikavsem.org/dl/1297283871/AAP_Rocky_-_PMW_All_I_Really_Need_(new.muzikavsem.org).mp3' },
      { id: 4, name: 'LVL', url: 'https://new.muzikavsem.org/dl/731062008/AAP_Rocky_-_LVL_(new.muzikavsem.org).mp3' },
      { id: 5, name: 'Hell (feat. Santigold)', url: 'https://new.muzikavsem.org/dl/542335131/AAP_Rocky_-_Hell_(new.muzikavsem.org).mp3' },
      { id: 6, name: 'Pain (feat. OverDoz.)', url: 'https://new.muzikavsem.org/dl/1439931477/AAP_Rocky_OverDoz_-_Pain_(new.muzikavsem.org).mp3' },
      { id: 7, name: 'Fuckin\' Problems (feat. Drake, 2 Chainz & Kendrick Lamar)', url: 'https://new.muzikavsem.org/dl/1221592529/AAP_Rocky_Noah_Shebib_-_Fkin_Problems_(new.muzikavsem.org).mp3' },
      { id: 8, name: 'Wild for the Night', url: 'https://new.muzikavsem.org/dl/1150310252/AAP_Rocky_AAP_Rocky_feat_Skrillex_Birdy_Nam_Nam_-_Wild_for_the_Night_(new.muzikavsem.org).mp3' },
      { id: 9, name: '1 Train', url: 'https://new.muzikavsem.org/dl/168854318/Kendrick_Lamar_AAP_Rocky_Yelawolf_Joey_Bada_Action_Bronson_Danny_Brown_-_1Train_(new.muzikavsem.org).mp3' },
      { id: 10, name: 'Fashion Killa', url: 'https://new.muzikavsem.org/dl/1066450152/AAP_Rocky_-_Fashion_Killa_(new.muzikavsem.org).mp3' },
      { id: 11, name: 'Phoenix', url: 'https://new.muzikavsem.org/dl/114348745/AAP_Rocky_-_Phoenix_(new.muzikavsem.org).mp3' },
      { id: 12, name: 'Suddenly', url: 'https://new.muzikavsem.org/dl/877727371/AAP_Rocky_-_Suddenly_(new.muzikavsem.org).mp3' },
    ],
  },
  {
    id: 2,
    name: 'AT.LONG.LAST.A$AP',
    cover: 'https://avatars.mds.yandex.net/get-mpic/1565610/2a0000018ad16aa04991109fab613b8e0b87/orig',
    tracks: [
      { id: 1, name: 'Holy Ghost (Ft. Joe Fox)', url: 'https://new.muzikavsem.org/dl/713816101/AAP_Rocky_-_Holy_Ghost_(new.muzikavsem.org).mp3' },
      { id: 2, name: 'Canal St. (Ft. Bones)', url: 'https://new.muzikavsem.org/dl/1476933095/AAP_Rocky_-_Canal_St_(new.muzikavsem.org).mp3' },
      { id: 3, name: 'Fine Whine (Ft. Joe Fox, Future & M.I.A.)', url: 'https://new.muzikavsem.org/dl/856202595/AAP_Rocky_-_Fine_Whine_(new.muzikavsem.org).mp3' },
      { id: 4, name: 'L$D', url: 'https://new.muzikavsem.org/dl/1619577117/AAP_Rocky_-_LD_(new.muzikavsem.org).mp3' },
      { id: 5, name: 'Excuse Me', url: 'https://new.muzikavsem.org/dl/1535721113/AAP_Rocky_-_Excuse_Me_(new.muzikavsem.org).mp3' },
      { id: 6, name: 'JD', url: 'https://new.muzikavsem.org/dl/151611995/AAP_Rocky_-_JD_(new.muzikavsem.org).mp3' },
      { id: 7, name: 'Lord Pretty Flacko Jodye 2 (LPFJ2)', url: 'https://new.muzikavsem.org/dl/1049208341/AAP_Rocky_-_Lord_Pretty_Flacko_Jodye_2_LPFJ2_(new.muzikavsem.org).mp3' },
      { id: 8, name: 'Electric Body (Ft. ScHoolboy Q)', url: 'https://new.muzikavsem.org/dl/294522769/AAP_Rocky_-_Electric_Body_(new.muzikavsem.org).mp3' },
      { id: 9, name: 'Jukebox Joints (Ft. Joe Fox & Kanye West)', url: 'https://new.muzikavsem.org/dl/776884524/AAP_Rocky_-_Jukebox_Joints_(new.muzikavsem.org).mp3' },
      { id: 10, name: 'Max B (Ft. Joe Fox)', url: 'https://new.muzikavsem.org/dl/21939880/AAP_Rocky_-_Max_B_(new.muzikavsem.org).mp3' },
      { id: 11, name: 'Pharsyde (Ft. Joe Fox)', url: 'https://new.muzikavsem.org/dl/919532138/AAP_Rocky_-_Pharsyde_(new.muzikavsem.org).mp3' },
      { id: 12, name: 'Wavybone (Ft. Juicy J & UGK)', url: 'https://new.muzikavsem.org/dl/487524427/AAP_Rocky_-_Wavybone_(new.muzikavsem.org).mp3' },
      { id: 13, name: 'West Side Highway (Ft. James Fauntleroy)', url: 'https://new.muzikavsem.org/dl/1116685317/AAP_Rocky_-_West_Side_Highway_(new.muzikavsem.org).mp3' },
      { id: 14, name: 'Better Things', url: 'https://new.muzikavsem.org/dl/1880060359/AAP_Rocky_-_Better_Things_(new.muzikavsem.org).mp3' },
      { id: 15, name: 'M$ (Ft. Lil\' Wayne)', url: 'https://new.muzikavsem.org/dl/1741433054/AAP_Rocky_-_M_(new.muzikavsem.org).mp3' },
      { id: 16, name: 'Dreams (Interlude)', url: 'https://new.muzikavsem.org/dl/1523355738/AAP_Rocky_-_Dreams_Interlude_(new.muzikavsem.org).mp3' },
      { id: 17, name: 'Everyday (Ft. Rod Stewart, Miguel & Mark Ronson)', url: 'https://new.muzikavsem.org/dl/139250708/AAP_Rocky_-_Everyday_(new.muzikavsem.org).mp3' },
      { id: 18, name: 'Back Home (Ft. Mos Def & Acyde)', url: 'https://new.muzikavsem.org/dl/1036843478/AAP_Rocky_-_Back_Home_(new.muzikavsem.org).mp3' },
    ],
  },
  {
    id: 3,
    name: 'Testing',
    cover: 'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/5f/fb/df/5ffbdfb9-34ba-7ff7-0a62-bf87ab47df5d/886447076446.jpg/1200x1200bf-60.jpg',
    tracks: [
      { id: 1, name: 'Distorted Records', url: 'https://new.muzikavsem.org/dl/1091132651/AAP_Rocky_-_Distorted_Records_(new.muzikavsem.org).mp3' },
      { id: 2, name: 'A$AP Forever', url: 'https://new.muzikavsem.org/dl/1573498502/AAP_Rocky_-_AAP_Forever_(new.muzikavsem.org).mp3' },
      { id: 3, name: 'Tony Tone', url: 'https://new.muzikavsem.org/dl/604619879/AAP_Rocky_-_Tony_Tone_(new.muzikavsem.org).mp3' },
      { id: 4, name: 'Fukk Sleep (feat. FKA Twigs)', url: 'https://new.muzikavsem.org/dl/1770647585/AAP_Rocky_-_Fukk_Sleep_(new.muzikavsem.org).mp3' },
      { id: 5, name: 'Praise The Lord (Da Shine)', url: 'https://new.muzikavsem.org/dl/521022947/AAP_Rocky_-_Praise_The_Lord_Da_Shine_(new.muzikavsem.org).mp3' },
      { id: 6, name: 'CALLDROPS', url: 'https://new.muzikavsem.org/dl/1284397469/AAP_Rocky_-_Drop_(new.muzikavsem.org).mp3' },
      { id: 7, name: 'Buck Shots', url: 'https://new.muzikavsem.org/dl/1913558367/AAP_Rocky_-_Buck_Shots_(new.muzikavsem.org).mp3' },
      { id: 8, name: 'Gunz N Butter', url: 'https://new.muzikavsem.org/dl/663666969/AAP_Rocky_-_Gunz_N_Butter_(new.muzikavsem.org).mp3' },
      { id: 9, name: 'Brotha Man', url: 'https://new.muzikavsem.org/dl/248440058/AAP_Rocky_-_Brotha_Man_(new.muzikavsem.org).mp3' },
      { id: 10, name: 'OG Beeper', url: 'https://new.muzikavsem.org/dl/1011814580/AAP_Rocky_-_OG_Beeper_(new.muzikavsem.org).mp3' },
      { id: 11, name: 'Kids Turned Out Fine', url: 'https://new.muzikavsem.org/dl/1208967767/AAP_Rocky_-_Kids_Turned_Out_Fine_(new.muzikavsem.org).mp3' },
      { id: 12, name: 'Hun43rd', url: 'https://new.muzikavsem.org/dl/1351354253/AAP_Rocky_-_Hun43rd_(new.muzikavsem.org).mp3' },
      { id: 13, name: 'Changes', url: 'https://new.muzikavsem.org/dl/1070341486/AAP_Rocky_-_Changes_(new.muzikavsem.org).mp3' },
      { id: 14, name: 'Black Tux, White Collar', url: 'https://new.muzikavsem.org/dl/101462863/AAP_Rocky_-_Black_Tux_White_Collar_(new.muzikavsem.org).mp3' },
      { id: 15, name: 'Purity', url: 'https://new.muzikavsem.org/dl/1833716008/AAP_Rocky_-_Purity_(new.muzikavsem.org).mp3' },
    ],
  },
];

function Albums() {
  return (
    <motion.div
      className="albums-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {albums.map((album) => (
        <div key={album.id} className="album">
          <img src={album.cover} alt={album.name} />
          <div className="album-info">
            <h2>{album.name}</h2>
            <div className="tracks">
              {album.tracks.map((track) => (
                <div key={track.id} className="track">
                  <p>{track.name}</p>
                  <audio controls>
                    <source src={track.url} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export default Albums;