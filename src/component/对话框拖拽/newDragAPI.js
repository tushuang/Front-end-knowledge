class Dialog {
  constructor({ title, content }) {
    this.title = title;
    this.content = content;
    this._dialog = null; // 全局保存DOM
    this.dialogCss = {
      // 样式
      position: "absolute",
      left: "50%",
      top: "50%",
      width: "400px",
      height: "240px",
      border: "1px solid #aaa",
      "box-shadow": "0 2px 3px #aaa",
      "border-radius": "5px",
      transform: "translate(-50%,-50%)",
      cursor: "pointer",
    };
    this.dialogTitleCss = {
      "border-bottom": "1px solid #aaa",
      "margin-bottom": "10px",
      padding: "10px",
      "margin-top": 0,
    };
    this.dialogContentCss = {};
  }
  init() {
    // 创建窗口
    let dialog = document.createElement("div");
    let title = document.createElement("h3");
    let content = document.createElement("div");
    title.innerText = this.title;
    let close = document.createElement("i");
    close.style["float"] = "right";
    close.innerText = "X";
    title.appendChild(close);
    dialog.appendChild(title);
    content.innerHTML = this.content;
    dialog.appendChild(content);
    dialog.id = "dialog_custom";
    dialog.setAttribute("draggable", true);
    for (let key in this.dialogCss) {
      dialog.style[key] = this.dialogCss[key];
    }
    for (let key in this.dialogTitleCss) {
      title.style[key] = this.dialogTitleCss[key];
    }
    document.body.appendChild(dialog);
    this._dialog = dialog;

    close.addEventListener("click", this.close.bind(this));
    dialog.addEventListener("drag", this.beforeDrag); // 监听拖动事件
    dialog.addEventListener("dragstart", this.onDrag.bind(this));
    dialog.addEventListener("dragend", this.afterDrag.bind(this));
  }
  close() {
    this._dialog.remove(); // 窗口手动关闭
  }
  beforeDrag() {
    // console.log("拖动了");
  }
  onDrag(event) {
    this._dialog.style.opacity = 0.5;
  }
  afterDrag(event) {
    // console.log(event);
    this._dialog.style.opacity = 1;
    this._dialog.style.transform = "";
    this._dialog.style.left = event.x + "px";
    this._dialog.style.top = event.y + "px";
  }
}
new Dialog({
  title: "弹窗",
  content: "这是一个弹窗",
}).init();
