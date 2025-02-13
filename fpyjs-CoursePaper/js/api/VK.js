/**
 * Класс VK
 * Управляет изображениями из VK. С помощью VK API.
 * С помощью этого класса будет выполняться загрузка изображений из vk.
 * Имеет свойства ACCESS_TOKEN и lastCallback
 * */
class VK {
  static ACCESS_TOKEN =
    "ad4bf6abad4bf6abad4bf6ab52ae5eedc6aad4bad4bf6abc98a1df14dc3844e1a89ead8";
  static lastCallback;

  /**
   * Получает изображения
   * */
  static get(id = "", callback) {
    let script = document.createElement("SCRIPT");
    script.src = `https://api.vk.com/method/photos.get?owner_id=${id}&album_id=profile&photo_sizes=1&count=1000&access_token=${this.ACCESS_TOKEN}&v=5.131&callback=VK.processData`;
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  static processData(result) {
    document.head.querySelector("script").remove();
    if (!result || result.error) {
      alert(result.error.error_msg ?? "Что то пошло не так");
      return;
    }
    if (result.response.items.length === 0) {
      alert("В профиле нет фотографий");
      return;
    }
    if (result) {
    }
    const photoArray = result.response.items;
    const photoMaxSize = [];
    for (const photo of photoArray) {
      photoMaxSize.push(photo.sizes.at(-1).url);
    }
    VK.lastCallback = photoMaxSize;
    App.imageViewer.drawImages(photoMaxSize);
  }
}
