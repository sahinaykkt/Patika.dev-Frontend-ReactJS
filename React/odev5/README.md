## Burger Builder

3 farklı malzemeyle bir hamburger oluşturabildiğimiz bu küçük projede Context-Api kullandık.

<p align="center">
  <img src="burger-builder.png" alt="burger-builder"/>
</p>


### Proje Nasıl Çalıştırılır

- Projeyi fork'ladıktan ya da indirdikten sonra projenin bulunduğu klasörde "npm install" komutu ile gerekli paketlerin yüklenmesi gerekiyor.
- Daha sonra "npm run start" komutu ile uygulama başlatılabilir.

### Proje Hakkında

Menüden eklenen bütün malzemeleri tutabilmek için HamburgerContext içerisinde useState hook'u ile bir array oluşturulmuştur. Seçilen malzemeleri barındıran bu array kullanılarak getCalculatedTotalPrice fonksiyonu ile malzemelerin fiyatlarına göre toplam tutar hesaplanmaktadır. HamburgerContext içerisinde tanımlanan seçilen malzemeler state'i ve getCalculatedTotalPrice fonksiyonu gerekli component'lerde kullanılmak üzere HamburgerContext.Provider içinde value olarak geçilir. Menu ve Burger component'leri useContext hook'u sayesinde value olarak geçilen değerlere erişebilir.

Not: Malzeme çeşitleri ve fiyatlar ingredients.js içerisindedir.
