function main() {
  let text_form = document.getElementById('text_form');
  let output = document.getElementById('output');
  let lyric_b = document.getElementById('lyric_b');
  let lyric = document.getElementById('lyric');
  let lyric_a = document.getElementById('lyric_a');
  let media = document.getElementById('music');
  let seek_bar = document.getElementById("seek_bar");


  seek_bar.max = media.duration;

  timestamp = 0;
  counter = 0;

  lyrics = new Array();
  lyrics[0] = [0.0, '・・・・・・・・・・・'];
  lyrics[1] = [12.0, '3日目のソーダみたいな'];
  lyrics[2] = [17.5, '取り留めのない甘さに襲われた'];
  lyrics[3] = [22.5, '机に置かれてる透明のコップ'];
  lyrics[4] = [27.5, 'さっきのごめんの涙が溜まったまま'];
  lyrics[5] = [37.5, '「ずっと2人でいようね」は叶わず'];
  lyrics[6] = [46.5, '意味のない味だけがわたしを何度も何度も惑わせる'];
  lyrics[7] = [57, 'まだまだあなただけはまだ消えないで'];
  lyrics[8] = [, ''];
  lyrics[9] = [];
  lyric_b.innerHTML = '';
  lyric.innerHTML = '';
  lyric_a.innerHTML = lyrics[0][1];

  media.addEventListener('playing', {
    handleEvent: update
  });

  media.addEventListener('pause', function() {
    window.cancelAnimationFrame(id);
  })
}

function update() {

  let media = document.getElementById('music');
  let now = media.currentTime;

  console.log(now);
  //console.log(media.paused);
  //console.log(counter);
  //console.log(lyrics.length);
  timestamp++;

  id = window.requestAnimationFrame(update);


  let seek_bar = document.getElementById("seek_bar");

  //  console.log(lyrics[8]);
  if (timestamp % 60 == 0) {
    //seek_bar.value = media.currentTime;
  }
  seek_bar.value = media.currentTime;
  if (timestamp % 5 == 0) {
    if (lyrics.length > counter) {
      if (now >= lyrics[counter + 1][0]) {
        counter++;
      } else {
        if (now >= lyrics[counter][0]) {
          if (counter == 0) {
            lyric_b.innerHTML = '';
            lyric.innerHTML = lyrics[counter][1];
            lyric_a.innerHTML = lyrics[counter + 1][1];
          } else {
            lyric_b.innerHTML = lyrics[counter - 1][1];
            lyric.innerHTML = lyrics[counter][1];
            lyric_a.innerHTML = lyrics[counter + 1][1];
          }
          counter++;
        } else {
          counter--;
        }
      }
    }
  }

}


window.addEventListener('DOMContentLoaded', () => {
  const switch_btn = document.getElementById('switch_btn');
  const jacket = document.getElementById('jacket');
  const lyrics = document.getElementById('lyrics');
  const btn_play = document.getElementById('play');
  const btn_pause = document.getElementById('pause');

  switch_btn.addEventListener('click', () => {
    if (getComputedStyle(jacket).display == 'none') {
      jacket.style.display = 'block';
      lyrics.style.display = 'none';
    } else {
      jacket.style.display = 'none';
      lyrics.style.display = 'block';
    }
  })
})

window.addEventListener('DOMContentLoaded', function() {

  const btn_backward = document.getElementById('backward');
  const btn_play = document.getElementById('play');
  const btn_pause = document.getElementById('pause');
  let media = document.getElementById('music');
  let seek_bar = document.getElementById("seek_bar");


  let lyric_b = document.getElementById('lyric_b');
  let lyric = document.getElementById('lyric');
  let lyric_a = document.getElementById('lyric_a');

  btn_play.addEventListener('click', e => {
    media.play();
    seek_bar.max = media.duration;
    btn_play.style.display = 'none';
    btn_pause.style.display = 'block';
    btn_backward.style.color = 'rgba(0, 0, 0, 0.7)';
  });

  btn_pause.addEventListener('click', e => {
    media.pause();
    btn_pause.style.display = 'none';
    btn_play.style.display = 'block';
  });

  btn_backward.addEventListener('click', e => {
    media.pause();
    media.currentTime = 0;
    btn_backward.style.color = 'rgba(0, 0, 0, 0.3)';
    btn_pause.style.display = 'none';
    btn_play.style.display = 'block';

    lyric_b.innerHTML = '';
    lyric.innerHTML = '';
    lyric_a.innerHTML = '・・・・・・・・・・・';


    seek_bar.value = "0";
  });
});


let seek_bar = document.getElementById("seek_bar");

seek_bar.addEventListener('input', function() {
  let media = document.getElementById('music');
  seek_bar.max = media.duration;
  console.log(seek_bar.value);
  console.log(seek_bar.max);
  console.log(media.duration);
  media.currentTime = seek_bar.value;
});


let media = document.getElementById('music');
media.addEventListener("ended", function() {
  const btn_backward = document.getElementById('backward');
  const btn_play = document.getElementById('play');
  const btn_pause = document.getElementById('pause');
  media.currentTime = 0;
  btn_backward.style.color = 'rgba(0, 0, 0, 0.3)';
  btn_pause.style.display = 'none';
  btn_play.style.display = 'block';
  seek_bar.value = "0";
}, false);


media.addEventListener('loadedmetadata', function() {
	console.log(media.duration);
  seek_bar.max = media.duration;
});
