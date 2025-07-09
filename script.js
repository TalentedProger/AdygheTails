
// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

  if (mobileMenu && navMenu) {
    mobileMenu.addEventListener('click', function () {
      mobileMenu.classList.toggle('active');
      navMenu.classList.toggle('active');

      // Блокируем или возвращаем прокрутку body
      if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }

      const menuIsOpen = navMenu.classList.contains('active');

      document.body.style.overflow = menuIsOpen ? 'hidden' : '';
      document.body.classList.toggle('menu-open', menuIsOpen); // 👈 добавляем/удаляем класс на <body>
    });
  
    // Закрываем меню и возвращаем прокрутку при клике на ссылку
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = ''; // вернуть прокрутку
      });
    });}

    // Video handling with multiple fallbacks
    const video = document.getElementById('background-video');
    if (video) {
        // Force video to play
        video.muted = true;
        video.autoplay = true;
        video.loop = true;
        video.playsInline = true;
        
        // Try to play the video
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log('Video is playing');
            }).catch(error => {
                console.log('Video autoplay failed:', error);
                // Fallback to background image
                const videoContainer = document.querySelector('.video-container');
                if (videoContainer) {
                    videoContainer.style.background = 'linear-gradient(135deg, #8A9994, #3F6358)';
                }
            });
        }
        
        // Handle video errors
        video.addEventListener('error', function() {
            console.log('Video failed to load, using CSS background');
            const videoContainer = document.querySelector('.video-container');
            if (videoContainer) {
                videoContainer.style.background = 'linear-gradient(135deg, #8A9994, #3F6358)';
            }
        });
        
        // Handle when video can play
        video.addEventListener('canplay', function() {
            video.play().catch(e => console.log('Play failed:', e));
        });
    }

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(83, 111, 1, 0.7);';
            } else {
                navbar.style.background = 'rgba(83, 111, 1, 0.95);';
            }
        }
    });
});

// Handle video loading
window.addEventListener('load', function() {
    const video = document.getElementById('background-video');
    if (video) {
        // Ensure video starts playing after page load
        setTimeout(() => {
            video.play().catch(function(error) {
                console.log('Video autoplay failed after load:', error);
            });
        }, 100);
    }
});

// User interaction to start video (for browsers that require user interaction)
document.addEventListener('click', function() {
    const video = document.getElementById('background-video');
    if (video && video.paused) {
        video.play().catch(e => console.log('User interaction play failed:', e));
    }
}, { once: true });

// window.addEventListener('scroll', function() {
//         const navbar=document.querySelector('.navbar');

//         if (navbar) {
//             if (window.scrollY > 50) {
//                 navbar.style.background='rgba(83, 111, 1, 0.8);';
//             }

//             else {
//                 navbar.style.background='rgba(83, 111, 1, 0.95);';
//             }
//         }
//     });


function copyProverb(text) {
    // Создаем временный элемент
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);

    // Выделяем и копируем
    textarea.select();
    document.execCommand('copy');

    // Удаляем временный элемент
    document.body.removeChild(textarea);

    // Опционально: показать уведомление
    alert('Пословица скопирована!');
  }



const songs = [
  {
    id: 1,
    title: "Абрэдж Нухьэ иорэд",
    src: "./audio/Абрэдж Нухьэ иорэд.mp3",
    cover: "./images/galery_mus_photo.jpg",
    duration: "3:36"
  },
  {
    id: 2,
    title: "Бэдынокъуэ нарт хасэм къокIуэ",
    src: "./audio/Бэдынокъуэ нарт хасэм къокIуэ.mp3",
    cover: "./images/galery_mus_photo.jpg",
    duration: "4:15"
  },
  {
    id: 3,
    title: "Вэгъэудзэ и уэрэд",
    src: "./audio/Вэгъэудзэ и уэрэд.mp3",
    cover: "./images/galery_mus_photo.jpg",
    duration: "2:56"
  },
  {
    id: 4,
    title: "Гухэлъхэр",
    src: "./audio/Гухэлъхэр.mp3",
    cover: "./images/galery_mus_photo.jpg",
    duration: "1:41"
  },
  {
    id: 5,
    title: "Дзэлыкъуэ хъупlэ",
    src: "./audio/Дзэлыкъуэ хъупlэ.mp3",
    cover: "./images/galery_mus_photo.jpg",
    duration: "2:30"
  },
  {
    id: 6,
    title: "Загъэлъат",
    src: "./audio/Загъэлъат.mp3",
    cover: "./images/galery_mus_photo.jpg",
    duration: "2:36"
  },
  {
    id: 7,
    title: "Инарыкъуей къафэ",
    src: "./audio/Инарыкъуей къафэ.mp3",
    cover: "./images/galery_mus_photo.jpg",
    duration: "3:16"
  },
  {
    id: 8,
    title: "Ислъамый",
    src: "./audio/Ислъамый.mp3",
    cover: "./images/galery_mus_photo.jpg",
    duration: "3:16"
  },
  {
    id: 9,
    title: "Къэжыхь",
    src: "./audio/Къэжыхь.mp3",
    cover: "./images/galery_mus_photo.jpg",
    duration: "2:01"
  },
  {
    id: 10,
    title: "Къэрэкъамыл",
    src: "./audio/Къэрэкъамыл.mp3",
    cover: "./images/galery_mus_photo.jpg",
    duration: "2:12"
  },
  {
    id: 11,
    title: "Лашын нартыжьхэм яхуэусэ",
    src: "./audio/Лашын нартыжьхэм яхуэусэ.mp3",
    cover: "./images/galery_mus_photo.jpg",
    duration: "5:02"
  },
  {
    id: 12,
    title: "Мамрыкъом иорэд",
    src: "./audio/Мамрыкъом иорэд.mp3",
    cover: "./images/galery_mus_photo.jpg",
    duration: "2:18"
  },
  {
    id: 13,
    title: "Мерзейхэ я къафэ",
    src: "./audio/Мерзейхэ я къафэ.mp3",
    cover: "./images/galery_mus_photo.jpg",
    duration: "2:24"
  },
  {
    id: 14,
    title: "Мэзгуащ",
    src: "./audio/Мэзгуащ.mp3",
    cover: "./images/galery_mus_photo.jpg",
    duration: "2:27"
  },
  {
    id: 15,
    title: "Нарт къафэ I",
    src: "./audio/Нарт къафэ I.mp3",
    cover: "./images/galery_mus_photo.jpg",
    duration: "2:57"
  },
  {
    id: 16,
    title: "Нарт къафэ II",
    src: "./audio/Нарт къафэ II.mp3",
    cover: "./images/galery_mus_photo.jpg",
    duration: "1:36"
  },
  {
    id: 17,
    title: "Нарт къашъу",
    src: "./audio/Нарт къашъу.mp3",
    cover: "./images/galery_mus_photo.jpg",
    duration: "2:23"
  },
  {
    id: 18,
    title: "Пщымазытьэ",
    src: "./audio/Пщымазытьэ.mp3",
    cover: "./images/galery_mus_photo.jpg",
    duration: "2:32"
  },
  {
    id: 19,
    title: "Сосрыкъуэрэ",
    src: "./audio/Сосрыкъуэрэ.mp3",
    cover: "./images/galery_mus_photo.jpg",
    duration: "5:30"
  },
  {
    id: 20,
    title: "Сэрмахуэ",
    src: "./audio/Сэрмахуэ.mp3",
    cover: "./images/galery_mus_photo.jpg",
    duration: "2:29"
  },
  {
    id: 21,
    title: "Хьагъэуджым изэфакlу",
    src: "./audio/Хьагъэуджым изэфакlу.mp3",
    cover: "./images/galery_mus_photo.jpg",
    duration: "2:31"
  },
  {
    id: 22,
    title: "Хьакулащ",
    src: "./audio/Хьакулащ.mp3",
    cover: "./images/galery_mus_photo.jpg",
    duration: "2:59"
  },
  {
    id: 23,
    title: "Чэбэхъан изэфакlу",
    src: "./audio/Чэбэхъан изэфакlу.mp3",
    cover: "./images/galery_mus_photo.jpg",
    duration: "2:34"
  }
];


const audio = new Audio();
let currentSongIndex = null;
let isPlaying = false;

// Элементы управления
const songItems = document.querySelectorAll('.song-item');
const playPauseBtn = document.querySelector('.play-pause-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const currentTitle = document.querySelector('.current-song-title');
const currentCover = document.querySelector('.current-song-cover');
const currentTimeEl = document.querySelector('.current-time');
const totalTimeEl = document.querySelector('.total-time');

// Громкость
const volumeSlider = document.querySelector('.volume-slider');


function loadSong(index) {
  const song = songs[index];
  audio.src = song.src;
  currentTitle.textContent = song.title;
  currentCover.src = song.cover;
  totalTimeEl.textContent = song.duration;
  currentSongIndex = index;
}


function playSong() {
  audio.play();
  isPlaying = true;
  playPauseBtn.classList.remove('not-playing');
  playPauseBtn.classList.add('playing');
}

function pauseSong() {
  audio.pause();
  isPlaying = false;
  playPauseBtn.classList.remove('playing');
  playPauseBtn.classList.add('not-playing');
}



playPauseBtn.addEventListener('click', () => {
  if (isPlaying) {
    pauseSong();
  } else {
    if (currentSongIndex === null) loadSong(0); // Воспроизводим первую
    playSong();
  }
});


songItems.forEach((item, i) => {
  item.addEventListener('click', () => {
    loadSong(i);
    playSong();
  });
});



nextBtn.addEventListener('click', () => {
  if (currentSongIndex !== null) {
    let next = (currentSongIndex + 1) % songs.length;
    loadSong(next);
    playSong();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentSongIndex !== null) {
    let prev = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(prev);
    playSong();
  }
});


audio.addEventListener('timeupdate', () => {
  const current = formatTime(audio.currentTime);
  const total = formatTime(audio.duration);
  currentTimeEl.textContent = current;
  if (!isNaN(audio.duration)) {
    totalTimeEl.textContent = total;
  }
});

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}


// volumeSlider.addEventListener('input', function () {
//   audio.volume = this.value / 100;

//   // Красим прогресс
//   this.style.background = `linear-gradient(to right, #00c853 0%, #00c853 ${this.value}%, #ccc ${this.value}%)`;
// });

        function updateSliderBackground(slider) {
        const value = slider.value;
        slider.style.background = `linear-gradient(to right, var(--primary-green) 0%, var(--primary-green) ${value}%, var(--white) ${value}%)`;
        }

        updateSliderBackground(volumeSlider);

        volumeSlider.addEventListener('input', function () {
        updateSliderBackground(this);

        // Здесь можешь вставить свою логику управления звуком, если используешь плеер или Audio()
        });



const volumeBtn = document.querySelector('.volume-btn');
let previousVolume = volumeSlider.value; // сохраняем значение до выключения

function updateVolume(value) {
  audio.volume = value / 100;
  volumeSlider.value = value;
  updateSliderBackground(volumeSlider);
}

// Начальное состояние
updateVolume(volumeSlider.value);

// Ползунок громкости
volumeSlider.addEventListener('input', function () {
  const value = this.value;

  if (value === "0") {
    volumeBtn.classList.add('muted');
  } else {
    volumeBtn.classList.remove('muted');
  }

  updateVolume(value);
});

// Кнопка "вкл/выкл звук"
volumeBtn.addEventListener('click', function () {
  if (audio.volume > 0) {
    previousVolume = volumeSlider.value;
    updateVolume(0);
    volumeBtn.classList.add('muted');
  } else {
    updateVolume(previousVolume || 50); // если ничего не было, то 50
    volumeBtn.classList.remove('muted');
  }
});


const shuffleBtn = document.querySelector('.shuffle-btn');

shuffleBtn.addEventListener('click', () => {
  if (songs.length <= 1) return; // Нет смысла выбирать, если 1 трек

  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * songs.length);
  } while (randomIndex === currentSongIndex && songs.length > 1);

  loadSong(randomIndex);
  playSong();
});


let isRepeatMode = false;
const repeatBtn = document.querySelector('.repeat-btn');

repeatBtn.addEventListener('click', () => {
  isRepeatMode = !isRepeatMode;
  repeatBtn.classList.toggle('active', isRepeatMode);
});

audio.addEventListener('ended', () => {
  if (isRepeatMode) {
    audio.currentTime = 0;
    audio.play();
  } else {
    // Поведение по умолчанию, если нужен переход к следующему треку:
    let next = (currentSongIndex + 1) % songs.length;
    loadSong(next);
    playSong();
  }
});
