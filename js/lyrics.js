function main() {
  let text_form = document.getElementById('text_form');
  let output = document.getElementById('output');
  let lyric_b = document.getElementById('lyric_b');
  let lyric = document.getElementById('lyric');
  let lyric_a = document.getElementById('lyric_a');
  let media = document.getElementById('music');


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
  lyrics[7] = [, ''];
  lyrics[8] = [];

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
  console.log(media.paused);
  console.log(counter);
  console.log(lyrics.length);
  timestamp++;

  id = window.requestAnimationFrame(update);

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


window.addEventListener('DOMContentLoaded', () => {
  const switch_btn = document.getElementById('switch_btn');
  const jacket = document.getElementById('jacket');
  const lyrics = document.getElementById('lyrics');

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
  const audioElement = document.querySelector('audio');


  let lyric_b = document.getElementById('lyric_b');
  let lyric = document.getElementById('lyric');
  let lyric_a = document.getElementById('lyric_a');

  btn_play.addEventListener('click', e => {
    audioElement.play();
    btn_play.style.display = 'none';
    btn_pause.style.display = 'block';
    btn_backward.style.color = 'rgba(0, 0, 0, 0.7)';
  });

  btn_pause.addEventListener('click', e => {
    audioElement.pause();
    btn_pause.style.display = 'none';
    btn_play.style.display = 'block';
  });

  btn_backward.addEventListener('click', e => {
    audioElement.pause();
    audioElement.currentTime = 0;
    btn_backward.style.color = 'rgba(0, 0, 0, 0.3)';
    btn_pause.style.display = 'none';
    btn_play.style.display = 'block';

    lyric_b.innerHTML = '';
    lyric.innerHTML = '';
    lyric_a.innerHTML = '・・・・・・・・・・・';
  });
});
