/**
 * Класс SearchBlock
 * Используется для взаимодействием со строкой ввода и поиска изображений
 * */
class SearchBlock {
  constructor(element) {
    this.element = element;
    this.registerEvents();
  }

  /**
   * Выполняет подписку на кнопки "Заменить" и "Добавить"
   * Клик по кнопкам выполняет запрос на получение изображений и отрисовывает их,
   * только клик по кнопке "Заменить" перед отрисовкой очищает все отрисованные ранее изображения
   */
  registerEvents() {
    const btnAdd = this.element.getElementsByClassName("add")[0];
    const btnReplace = this.element.getElementsByClassName("replace")[0];
    const input = this.element.getElementsByTagName("input")[0];

    btnAdd.addEventListener("click", () => {
      if (input.value.trim()) {
        VK.get(input.value);
      }
    });

    btnReplace.addEventListener("click", () => {
      App.imageViewer.clear();
      VK.get(input.value);
    });
  }
}
