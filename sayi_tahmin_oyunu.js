// Rastgele 1 ile 100 arasında bir sayı oluştur
let rastgeleSayi = Math.floor(Math.random() * 100) + 1;

// Kullanıcının tahminini saklamak için değişken
let tahmin;

// Kullanıcının kaç deneme yaptığını takip etmek için değişken
let denemeSayisi = 0;

// Do-while döngüsü ile kullanıcıdan tahmin almaya devam et
do {
  // Kullanıcıdan tahmin al
  tahmin = prompt("1 ile 100 arasında bir sayı tahmin edin:");

  // Girişin bir sayı olup olmadığını kontrol et
  if (isNaN(tahmin) || tahmin === "") {
    alert("Lütfen geçerli bir sayı girin.");
    continue; // Döngü başına dön
  }

  // Kullanıcıdan alınan tahmini tam sayıya dönüştür
  tahmin = parseInt(tahmin);

  // Tahminin belirtilen aralıkta olup olmadığını kontrol et
  if (tahmin < 1 || tahmin > 100) {
    alert("Lütfen 1 ile 100 arasında bir sayı girin.");
    continue; // Döngü başına dön
  }

  denemeSayisi++; // Deneme sayısını artır

  // Tahmini kontrol et
  if (tahmin > rastgeleSayi) {
    alert("Daha düşük bir sayı tahmin edin.");
  } else if (tahmin < rastgeleSayi) {
    alert("Daha yüksek bir sayı tahmin edin.");
  } else {
    alert(`Tebrikler! ${denemeSayisi} denemede doğru tahmin ettiniz.`);
  }
} while (tahmin !== rastgeleSayi); // Doğru tahmin edilene kadar döngü devam eder
