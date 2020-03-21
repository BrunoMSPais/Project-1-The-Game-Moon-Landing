class Landing-area {
    constructor(img, x, y, width, height) {
        this.img = new Image();
        img.src = URL('/pics/ground-layouts/ground-layout-01.png');
        this.x = 0;
        this.y = canvas.height - img.height;
        this.width = canvas.width;
        this.height = img.height;
    }
}