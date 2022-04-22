let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
  {
    name: "偷偷藏不住",
    path: "https://res.wx.qq.com/voice/getvoice?mediaid=MzA4Mzk1NzY3Ml8xMDAwMDQyNTI=",
    img: "https://yife68.gitee.io/icat-pic-2022/Drama/1.png",
    singer: "第一集"
  },
  {
    name: "偷偷藏不住",
    path: "https://res.wx.qq.com/voice/getvoice?mediaid=MzA4Mzk1NzY3Ml8xMDAwMDQyNTM=",
    img: "https://yife68.gitee.io/icat-pic-2022/Drama/1.png",
    singer: "第二集"
  },
  {
    name: "偷偷藏不住",
    path: "https://res.wx.qq.com/voice/getvoice?mediaid=MzA4Mzk1NzY3Ml8xMDAwMDQyNTQ=",
    img: "https://yife68.gitee.io/icat-pic-2022/Drama/1.png",
    singer: "第三集"
  },
  {
    name: "偷偷藏不住",
    path: "https://res.wx.qq.com/voice/getvoice?mediaid=MzA4Mzk1NzY3Ml8xMDAwMDQyNTU=",
    img: "https://yife68.gitee.io/icat-pic-2022/Drama/1.png",
    singer: "第四集"
  },
  {
   name: "偷偷藏不住",
   path: "https://res.wx.qq.com/voice/getvoice?mediaid=MzA4Mzk1NzY3Ml8xMDAwMDQyNTY=",
   img: "https://yife68.gitee.io/icat-pic-2022/Drama/1.png",
   singer: "第五集"
 },
 {
   name: "偷偷藏不住",
   path: "https://res.wx.qq.com/voice/getvoice?mediaid=MzA4Mzk1NzY3Ml8xMDAwMDQyNTc=",
   img: "https://yife68.gitee.io/icat-pic-2022/Drama/1.png",
   singer: "第六集"
 },
 {
   name: "偷偷藏不住",
   path: "https://res.wx.qq.com/voice/getvoice?mediaid=MzA4Mzk1NzY3Ml8xMDAwMDQyNTg=",
   img: "https://yife68.gitee.io/icat-pic-2022/Drama/1.png",
   singer: "第七集"
 },
 {
   name: "偷偷藏不住",
   path: "https://res.wx.qq.com/voice/getvoice?mediaid=MzA4Mzk1NzY3Ml8xMDAwMDQyODg=",
   img: "https://yife68.gitee.io/icat-pic-2022/Drama/1.png",
   singer: "第八集"
 },
 {
   name: "偷偷藏不住",
   path: "https://res.wx.qq.com/voice/getvoice?mediaid=MzA4Mzk1NzY3Ml8xMDAwMDQyODk=",
   img: "https://yife68.gitee.io/icat-pic-2022/Drama/1.png",
   singer: "第九集"
 },
 {
   name: "偷偷藏不住",
   path: "https://res.wx.qq.com/voice/getvoice?mediaid=MzA4Mzk1NzY3Ml8xMDAwMDQyOTA=",
   img: "https://yife68.gitee.io/icat-pic-2022/Drama/1.png",
   singer: "第十集"
 },
 {
   name: "偷偷藏不住",
   path: "https://res.wx.qq.com/voice/getvoice?mediaid=MzA4Mzk1NzY3Ml8xMDAwMDQyOTE=",
   img: "https://yife68.gitee.io/icat-pic-2022/Drama/1.png",
   singer: "第十一集"
 },
 {
   name: "偷偷藏不住",
   path: "https://res.wx.qq.com/voice/getvoice?mediaid=MzA4Mzk1NzY3Ml8xMDAwMDQyOTI=",
   img: "https://yife68.gitee.io/icat-pic-2022/Drama/1.png",
   singer: "第十二集"
 },
 {
   name: "偷偷藏不住",
   path: "https://res.wx.qq.com/voice/getvoice?mediaid=MzA4Mzk1NzY3Ml8xMDAwMDQyOTM=",
   img: "https://yife68.gitee.io/icat-pic-2022/Drama/1.png",
   singer: "第十三集"
 },
 {
   name: "偷偷藏不住",
   path: "https://res.wx.qq.com/voice/getvoice?mediaid=MzA4Mzk1NzY3Ml8xMDAwMDQyOTQ=",
   img: "https://yife68.gitee.io/icat-pic-2022/Drama/1.png",
   singer: "第十四集"
 },
 {
   name: "偷偷藏不住",
   path: "https://res.wx.qq.com/voice/getvoice?mediaid=MzA4Mzk1NzY3Ml8xMDAwMDQyOTU=",
   img: "https://yife68.gitee.io/icat-pic-2022/Drama/1.png",
   singer: "第十五集"
 },
 {
   name: "偷偷藏不住",
   path: "https://res.wx.qq.com/voice/getvoice?mediaid=MzA4Mzk1NzY3Ml8xMDAwMDQyOTY=",
   img: "https://yife68.gitee.io/icat-pic-2022/Drama/1.png",
   singer: "第十六集"
 },
 {
   name: "偷偷藏不住",
   path: "https://res.wx.qq.com/voice/getvoice?mediaid=MzA4Mzk1NzY3Ml8xMDAwMDQyOTc=",
   img: "https://yife68.gitee.io/icat-pic-2022/Drama/1.png",
   singer: "第十七集"
 },
 {
   name: "偷偷藏不住",
   path: "https://res.wx.qq.com/voice/getvoice?mediaid=MzA4Mzk1NzY3Ml8xMDAwMDQyOTg=",
   img: "https://yife68.gitee.io/icat-pic-2022/Drama/1.png",
   singer: "第十八集"
 },
 {
   name: "偷偷藏不住",
   path: "https://res.wx.qq.com/voice/getvoice?mediaid=MzA4Mzk1NzY3Ml8xMDAwMDQyOTk=",
   img: "https://yife68.gitee.io/icat-pic-2022/Drama/1.png",
   singer: "第十九集"
 },
 {
   name: "偷偷藏不住",
   path: "https://res.wx.qq.com/voice/getvoice?mediaid=MzA4Mzk1NzY3Ml8xMDAwMDQzMDA=",
   img: "https://yife68.gitee.io/icat-pic-2022/Drama/1.png",
   singer: "第二十集"
 },
 {
   name: "偷偷藏不住",
   path: "https://res.wx.qq.com/voice/getvoice?mediaid=MzA4Mzk1NzY3Ml8xMDAwMDQzMDE=",
   img: "https://yife68.gitee.io/icat-pic-2022/Drama/1.png",
   singer: "番外1"
 },
 {
   name: "偷偷藏不住",
   path: "https://res.wx.qq.com/voice/getvoice?mediaid=MzA4Mzk1NzY3Ml8xMDAwMDQzMDI=",
   img: "https://yife68.gitee.io/icat-pic-2022/Drama/1.png",
   singer: "番外2"
 },
 {
   name: "偷偷藏不住",
   path: "https://res.wx.qq.com/voice/getvoice?mediaid=MzA4Mzk1NzY3Ml8xMDAwMDQzMDM=",
   img: "https://yife68.gitee.io/icat-pic-2022/Drama/1.png",
   singer: "番外3"
 },
  {
    name: "偷偷藏不住",
    path: "https://res.wx.qq.com/voice/getvoice?mediaid=MzA4Mzk1NzY3Ml8xMDAwMDQzMDQ=",
    img: "https://yife68.gitee.io/icat-pic-2022/Drama/1.png",
    singer: "番外4"
  }
];


// All functions


// function load the track
function load_track(index_no){
  clearInterval(timer);
  reset_slider();

  track.src = All_song[index_no].path;
  title.innerHTML = All_song[index_no].name;	
    artist.innerHTML = All_song[index_no].singer;
    track.load();

  timer = setInterval(range_slider ,1000);
  total.innerHTML = All_song.length;
  present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound(){
  track.volume = 0;
  volume.value = 0;
  volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong(){
  track.pause();
  Playing_song = false;
  play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// next song
function next_song(){
  if(index_no < All_song.length - 1){
    index_no += 1;
    load_track(index_no);
    playsong();
  }else{
    index_no = 0;
    load_track(index_no);
    playsong();

  }
}


// previous song
function previous_song(){
  if(index_no > 0){
    index_no -= 1;
    load_track(index_no);
    playsong();

  }else{
    index_no = All_song.length;
    load_track(index_no);
    playsong();
  }
}


// change volume
function volume_change(){
  volume_show.innerHTML = recent_volume.value;
  track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
  slider_position = track.duration * (slider.value / 100);
  track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch(){
  if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
  }else{
       autoplay = 1;
       auto_play.style.background = "#FF8A65";
  }
}


function range_slider(){
  let position = 0;
        
        // update slider position
    if(!isNaN(track.duration)){
       position = track.currentTime * (100 / track.duration);
       slider.value =  position;
        }

       
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
           index_no += 1;
           load_track(index_no);
           playsong();
           }
      }
     }