# Sayı Tahmin Oyunu

## Proje Açıklaması
Sayı Tahmin Oyunu, kullanıcıların belirli bir aralıkta rastgele seçilen bir sayıyı tahmin etmeye çalıştığı etkileşimli bir oyundur. Kullanıcı, her tahmininde programdan ipuçları alır ve bu ipuçlarına göre tahminlerini güncelleyerek doğru sayıyı bulmaya çalışır.

## Projenin Akışı
1. **Rastgele Sayı Oluşturma**:
   - Program, belirli bir aralık (1 ile 100 arasında) içinde rastgele bir sayı üretir.
   - Bu sayı, kullanıcının tahmin etmesi gereken gizli sayıdır.

2. **Kullanıcıdan Tahmin Alma**:
   - Kullanıcıdan bir tahmin girmesi istenir. Bu, bir giriş penceresi (prompt) aracılığıyla gerçekleştirilir.

3. **Giriş Kontrolleri**:
   - Kullanıcının girdiği değerin bir sayı olup olmadığını kontrol eder.
   - Kullanıcının girdiği sayının 1 ile 100 arasında olup olmadığını kontrol eder.

4. **Tahmin Kontrolü**:
   - Kullanıcının girdiği tahmin, rastgele sayıyla karşılaştırılır.
   - Eğer tahmin doğruysa, kullanıcıya tebrik mesajı gösterilir.
   - Eğer tahmin yanlışsa, kullanıcıya uygun ipuçları verilir.

5. **Döngü**:
   - Kullanıcının doğru tahmin yapana kadar bu adımlar tekrarlanır. Bu amaçla `do-while` döngüsü kullanılır.

6. **Oyun Bitimi**:
   - Kullanıcı doğru sayıyı tahmin ettiğinde, program sonlanır ve toplam deneme sayısı ekranda gösterilir.

## Gerekli Nesneler
- **Değişkenler**:
  - `rastgeleSayi`: Rastgele oluşturulan tahmin edilmesi gereken sayı.
  - `tahmin`: Kullanıcının girdiği tahmin.
  - `denemeSayisi`: Kullanıcının kaç deneme yaptığını takip etmek için.

- **Döngü**:
  - `while`: Kullanıcının doğru tahmin yapana kadar devam eden döngü.

- **Koşul İfadeleri**:
  - `if`-`else`: Kullanıcının tahminini kontrol etmek ve uygun ipuçlarını vermek için kullanılır.

## Anahtar Kelimeler
- `rastgeleSayi`
- `tahmin`
- `denemeSayisi`
- `while`
- `if`
- `else`
- `Math.random()`: Rastgele sayı üretmek için kullanılan JavaScript fonksiyonu.
- `prompt()`: Kullanıcıdan girdi almak için kullanılan JavaScript fonksiyonu.
- `alert()`: Kullanıcıya bilgi vermek için kullanılan JavaScript fonksiyonu.
