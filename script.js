/* =====================================================================
   PENGATURAN — HANYA BAGIAN INI YANG PERLU ANDA GANTI
   ---------------------------------------------------------------------
   foto  : link gambar langsung (berakhiran .jpg/.png/.webp), misalnya
           dari Unsplash, Imgur, Cloudinary, atau Wikimedia.
           Kosongkan ("") jika belum ada -> tampil kotak placeholder.
           Google Drive: jangan pakai link ".../view". Ubah menjadi
           https://lh3.googleusercontent.com/d/ID_FILE
           (file harus "Anyone with the link").
   video : link YouTube (youtu.be/... atau youtube.com/watch?v=...),
           atau link Google Drive, atau link langsung .mp4.
           Kosongkan ("") -> kotak video disembunyikan otomatis.
   ===================================================================== */

const CONFIG = {
    // Video latar di halaman utama (YouTube). Contoh: "https://youtu.be/XXXXXXXXXXX"
    heroVideo: "https://youtu.be/-hwKuS-COgU",   // <- GANTI jika perlu
    // Gambar cadangan hero saat video belum dimuat (boleh dikosongkan)
    heroPoster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyPlKA7NujEcLSb7G274EQhlkCOzk6KTsdkXmRV5_U5p56gWM-uoEqGkY&s=10"                                // <- GANTI: link gambar hero
};

const ITEMS = {
    kebudayaan: [
        {
            judul: "Upacara Adat Ceprotan", emoji: "🥭", kategori: "Kebudayaan",
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4duDFFdxQa5z7y35i_cf0yGDbC3qinCGPvZdn_-dnAwdoO8E88NTQF_w&s=10",    // <- GANTI: link foto Ceprotan
            video: "https://youtu.be/XIfM9jrJBYo",
            teks: "Asal usul Ceprotan berawal dari legenda Dewi Sekartaji dan Ki Godek di Desa Sekar, Pacitan, di mana sisa air kelapa yang dituang Dewi Sekartaji menjadi sumber mata air desa tersebut. Untuk mengenang peristiwa ini dan sebagai bentuk bersih desa, masyarakat mengadakan tradisi saling lempar kelapa muda antara dua kubu pemuda, yang diyakini mendatangkan kelimpahan rezeki bagi yang terkena lemparan."
        },
        {
            judul: "Kethek Ogleng", emoji: "🐒", kategori: "Kesenian",
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZhbKTpRmXO7WeUPN4DCSDGq9s_gkfllp1v6HQQhLvPL6TJKMp0QBoIQ8m&s=10",    // <- GANTI: link foto Kethek Ogleng
            video: "https://youtu.be/CDcUzYRLhes",
            teks: "Kesenian tari topeng yang menggambarkan tingkah laku seekor kera. Populer sebagai hiburan rakyat dan pelestarian cerita rakyat Panji Semirang."
        },
        {
            judul: "Ronthek", emoji: "🎶", kategori: "Kesenian",
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGWlwbLGgFE8buMEteWk0hkKKQAdHHAtlxHzOJgtmD3ISctvihiMJMsrU&s=10",    // <- GANTI: link foto Ronthek
            video: "https://youtu.be/QC56sKLvVaU?si=OOQ7OfaQ9q7x8nmR&t=346",   // <- GANTI: link YouTube Ronthek
            teks: "Musik tradisional yang mirip kentongan. Dimainkan secara berkelompok dengan alat perkusi bambu/kayu. Biasanya dimainkan saat membangunkan sahur."
        },
        {
            judul: "Wayang Beber", emoji: "📜", kategori: "Kesenian",
            foto: "https://yogyaku.com/wp-content/uploads/2024/09/Wayang-beber-dengan-cara-pertunjukannya-yang-unik.jpg",    // <- GANTI: link foto Wayang Beber
            video: "https://youtu.be/2EKH7JDvuKY?si=H5EfZa6ZFNF19ciu&t=64",   // <- GANTI: link YouTube Wayang Beber
            teks: "Kesenian wayang tertua yang digulung (beber) dan dibentangkan. Warisan budaya bernilai sejarah tinggi."
        },
        {
            judul: "Bathik Pace", emoji: "🖋️", kategori: "Kerajinan",
            foto: "https://awsimages.detik.net.id/community/media/visual/2018/10/02/e6c136ac-6e37-410b-9657-fdde813265c0.png?w=600&q=90",    // <- GANTI: link foto Bathik Pace
            video: "https://youtu.be/dvTb9VpqcFs?si=bWPUDTzFACmYQPJf&t=23",   // <- GANTI: link YouTube Bathik Pace
            teks: "Batik khas Pacitan yang motifnya banyak terinspirasi dari alam dan biota laut. Buah Pace sering menjadi inspirasi motif batik."
        }
    ],

    wisata: [
        {
            judul: "Museum dan Galeri Seni SBY ANI", emoji: "🖼️", kategori: "Wisata Sejarah",
            foto: "https://awsimages.detik.net.id/community/media/visual/2023/08/28/museum-dan-galeri-sbyani-di-pacitan_169.jpeg?w=1200",    // <- GANTI: link foto Museum SBY ANI
            video: "https://youtu.be/ce4D4XLv-T8",
            teks: "Museum dan Galeri Seni SBY-Ani di Pacitan didedikasikan untuk mengenang perjalanan hidup Presiden ke-6 Republik Indonesia, Susilo Bambang Yudhoyono (SBY), dan mendiang Ibu Ani Yudhoyono. Museum ini diresmikan pada 17 Agustus 2023 dan memamerkan foto, video, benda pribadi, serta memorabilia yang menceritakan kisah hidup SBY, dari masa kecil, karier militer, hingga masa jabatannya sebagai presiden. Selain koleksi sejarah, tersedia galeri seni yang menampilkan karya lukis SBY dan seniman lainnya, sehingga museum ini menjadi pusat edukasi dan apresiasi budaya bagi masyarakat."
        },
        {
            judul: "Goa Gong", emoji: "💎", kategori: "Wisata Alam",
            foto: "https://sidita.disbudpar.jatimprov.go.id/storage/foto-dtw/d35ca_1666861588.jpg",    // <- GANTI: link foto Goa Gong
            video: "https://youtu.be/rzVfEhLwG20?si=OgZnLPcxAZeZhWhp&t=5",   // <- GANTI: link YouTube Goa Gong
            teks: "Dikenal sebagai salah satu gua terindah se-Asia Tenggara. Keindahan stalaktit dan stalagmitnya yang berkilauan menjadikannya daya tarik utama geowisata."
        },
        {
            judul: "Pantai Klayar", emoji: "🏖️", kategori: "Wisata Alam",
            foto: "https://andarabus.com/wp-content/uploads/2022/08/Screenshot-2022-08-29-132514.jpg",    // <- GANTI: link foto Pantai Klayar
            video: "https://youtu.be/5PD0Xxr3_V4?si=LCkS7a3ne4h_3oOt&t=31",   // <- GANTI: link YouTube Pantai Klayar
            teks: "Pantai ikonik Pacitan dengan batu karang berbentuk Sphinx dan 'Seruling Laut'. Panorama pasir putihnya sangat memukau."
        },
        {
            judul: "Banyu Anget", emoji: "♨️", kategori: "Wisata Pemandian",
            foto: "https://www.goersapp.com/blog/wp-content/uploads/2025/08/Aktivitas-Seru-yang-Bisa-Kamu-Coba.webp",    // <- GANTI: link foto Banyu Anget
            video: "https://youtu.be/1HfN8S86MCc?si=MEegfzEAQxZ2eHMh",   // <- GANTI: link YouTube Banyu Anget
            teks: "Pemandian air panas alami yang mengandung belerang. Dipercaya memiliki khasiat untuk kesehatan kulit dan relaksasi."
        },
        {
            judul: "Sentono Gentong", emoji: "🕌", kategori: "Wisata Religi",
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5USwCJIaq0JVcYPw43UQmZzpTDmq_z7F1XTTxjxifZ71MCo7BsTbhrfck&s=10",    // <- GANTI: link foto Sentono Gentong
            video: "",   // <- GANTI: link YouTube Sentono Gentong
            teks: "Kompleks wisata religi dan alam yang terletak di bukit. Menawarkan pemandangan laut selatan yang luar biasa dari ketinggian."
        },
        {
            judul: "Alun-alun Pacitan", emoji: "🌆", kategori: "Wisata Kota",
            foto: "https://img.cnt.traveloka.com/tvlk/blog/2025/06/pacitan-mobile.png",    // <- GANTI: link foto Alun-alun
            video: "",   // <- GANTI: link YouTube Alun-alun
            teks: "Pusat kota dan ruang publik utama Pacitan. Tempat berkumpulnya masyarakat, sering diadakan festival dan kegiatan sosial."
        }
    ],

    makanan: [
        {
            judul: "Kelong", emoji: "🦑", kategori: "Camilan",
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzCQfDLvNo5971gJ9hImy07d2rLZRaKTeDwTPs3glxReICw-xyqpz-KWQ&s=10",    // <- GANTI: link foto Kelong
            video: "https://youtu.be/MmJufUtTksw?si=32BWpHDzhS2mY8qF&t=51",   // <- GANTI: link YouTube Kelong
            teks: "Camilan tradisional dari olahan ikan yang dikeringkan, sering disebut juga kerupuk ikan. Rasanya gurih dan renyah."
        },
        {
            judul: "Kopi Kletik", emoji: "☕", kategori: "Minuman",
            foto: "https://filebroker-cdn.lazada.co.id/kf/Se65e36d5d20f4e9e8fdaa55f2ad388baq.jpg",    // <- GANTI: link foto Kopi Kletik
            video: "https://youtu.be/yOoCvNJ9MJI",
            teks: "Kopi khas yang diolah dengan cara tradisional. Kletik mengacu pada biji kopi yang dipecah kasar. Wajib dicoba oleh pecinta kopi!"
        },
        {
            judul: "Sale Anggur", emoji: "🍇", kategori: "Camilan",
            foto: "https://i.ytimg.com/vi/FCbwo8ZztU8/maxresdefault.jpg",    // <- GANTI: link foto Sale Anggur
            video: "https://youtu.be/FCbwo8ZztU8",
            teks: "Sale pisang khas Pacitan yang dibentuk seperti anggur. Olahan pisang yang manis dan legit, menjadi oleh-oleh unggulan."
        },
        {
            judul: "Jenang Dodol Pacitan", emoji: "🍮", kategori: "Camilan",
            foto: "https://www.goersapp.com/blog/wp-content/uploads/2024/09/Dodol_.webp",    // <- GANTI: link foto Jenang Dodol
            video: "",   // <- GANTI: link YouTube Jenang Dodol
            teks: "Penganan manis legit berbahan dasar tepung ketan dan gula merah. Memiliki tekstur kenyal dan rasa manis yang khas."
        },
        {
            judul: "Kopat Tahu", emoji: "🍲", kategori: "Makanan Utama",
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR3naPrUUlufmcVho8AMkvQ4fN1V24mqNUVf7jvi9mhw&s=10",    // <- GANTI: link foto Kopat Tahu
            video: "",   // <- GANTI: link YouTube Kopat Tahu
            teks: "Hidangan khas berupa kupat (ketupat) yang disajikan dengan tahu goreng, tauge, dan disiram bumbu kacang cair yang manis gurih."
        }
    ]
};

/* =====================================================================
   KODE PROGRAM — tidak perlu diubah
   ===================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.classList.add('js');

    const $ = (id) => document.getElementById(id);
    const esc = (s) => String(s).replace(/[&<>"']/g, c =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

    // ---------- Util URL ----------
    const youTubeId = (url) => {
        const m = String(url || '').match(
            /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{11})/);
        return m ? m[1] : null;
    };
    const driveId = (url) => {
        const m = String(url || '').match(/drive\.google\.com\/file\/d\/([\w-]+)/);
        return m ? m[1] : null;
    };
    const isDirectVideo = (url) => /\.(mp4|webm|ogg)(\?.*)?$/i.test(url || '');

    // ---------- Scroll ----------
    const scrollToSection = (id) => {
        const el = $(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };
    $('ctaExplore').addEventListener('click', () => scrollToSection('kebudayaan'));
    document.querySelector('.scroll-down-arrow').addEventListener('click', (e) => {
        e.preventDefault();
        scrollToSection('kebudayaan');
    });

    // ---------- Hero ----------
    const hero = $('hero');
    if (CONFIG.heroPoster) {
        hero.style.backgroundImage = `url("${CONFIG.heroPoster}")`;
        hero.style.backgroundSize = 'cover';
        hero.style.backgroundPosition = 'center';
    }
    const heroId = youTubeId(CONFIG.heroVideo);
    if (heroId) {
        $('heroVideo').innerHTML =
            `<iframe class="yt-bg" title="Video latar Pacitan"
                src="https://www.youtube.com/embed/${heroId}?autoplay=1&mute=1&loop=1&playlist=${heroId}&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0"
                allow="autoplay; encrypted-media" tabindex="-1" aria-hidden="true"></iframe>`;
    }

    // ---------- Kartu ----------
    const cardHTML = (item, group, i) => {
        const img = item.foto
            ? `<img src="${esc(item.foto)}" alt="${esc(item.judul)}" loading="lazy" referrerpolicy="no-referrer"
                    onerror="this.parentElement.classList.add('no-img');this.remove();">`
            : '';
        return `
        <article class="item-card" data-category="${esc(item.kategori)}">
            <div class="card-media ${item.foto ? '' : 'no-img'}" data-emoji="${esc(item.emoji)}">${img}</div>
            <div class="card-body">
                <h3 class="card-title">${esc(item.judul)}</h3>
                <button class="learn-more" data-group="${group}" data-index="${i}">Lihat Video &amp; Detail</button>
            </div>
        </article>`;
    };

    document.querySelectorAll('[data-group]').forEach(box => {
        if (!box.classList.contains('horizontal-scroll-container')) return;
        const group = box.dataset.group;
        box.innerHTML = (ITEMS[group] || []).map((it, i) => cardHTML(it, group, i)).join('');
    });

    // ---------- Modal ----------
    const modal = $('infoModal');
    const videoBox = $('modalVideoBox');
    const videoEmbed = $('modalVideoEmbed');
    let lastButton = null;

    const renderVideo = (url) => {
        const yt = youTubeId(url);
        const dr = driveId(url);
        if (yt) {
            videoEmbed.innerHTML = `<iframe src="https://www.youtube.com/embed/${yt}?autoplay=1&rel=0&playsinline=1"
                title="Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        } else if (dr) {
            videoEmbed.innerHTML = `<iframe src="https://drive.google.com/file/d/${dr}/preview"
                title="Video" allow="autoplay" allowfullscreen></iframe>`;
        } else if (isDirectVideo(url)) {
            videoEmbed.innerHTML = `<video src="${esc(url)}" controls playsinline></video>`;
        } else {
            videoEmbed.innerHTML = '';
            return false;
        }
        return true;
    };

    const openModal = (item, button) => {
        lastButton = button;
        $('modalTitle').textContent = `${item.judul} ${item.emoji}`;
        $('modalText').textContent = item.teks;
        videoBox.style.display = renderVideo(item.video) ? '' : 'none';
        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        $('closeButton').focus();
    };

    const closeModal = () => {
        videoEmbed.innerHTML = '';          // hentikan video
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (lastButton) {
            lastButton.closest('.item-card').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            lastButton.focus({ preventScroll: true });
            lastButton = null;
        }
    };

    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.learn-more');
        if (!btn) return;
        const item = (ITEMS[btn.dataset.group] || [])[btn.dataset.index];
        if (item) openModal(item, btn);
    });
    $('modalBackButton').addEventListener('click', closeModal);
    $('closeButton').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') closeModal();
    });

    // ---------- Animasi muncul saat di-scroll ----------
    const targets = document.querySelectorAll('.category-section');
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(en => {
                if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }
            });
        }, { threshold: 0.1 });
        targets.forEach(t => io.observe(t));
    } else {
        targets.forEach(t => t.classList.add('visible'));
    }
});