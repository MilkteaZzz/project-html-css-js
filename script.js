// Ambil elemen yang mau diubah lewat JavaScript
const ctaButton = document.getElementById('cta-btn');
const title = document.getElementById('title');
const desc = document.getElementById('desc');

// Daftar warna seru untuk efek ganti warna saat diklik
const colors = ['#667eea', '#f56565', '#48bb78', '#ed8936', '#9f7aea'];

// Aksi ketika tombol diklik
ctaButton.addEventListener('click', function() {
    // 1. Ubah teks di layar terlebih dahulu
    title.textContent = 'Mantap, Berhasil! 🎉';
    desc.textContent = 'Mengarahkan ke halaman detail...';
    
    // 2. Pilih warna random secara otomatis untuk tombol
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    ctaButton.style.backgroundColor = randomColor;
    
    // 3. Ubah teks tombolnya
    ctaButton.textContent = 'Memuat...';

    // 4. Berpindah ke file detail.html setelah jeda singkat (misalnya 0.5 detik)
    // agar animasi perubahan warna & teks sempat terlihat oleh pengguna
    setTimeout(function() {
        window.location.href = 'detail.html';
    }, 500);
});