function Droid(game, x, y)
{
    this.game = game;
    this.sprite = game.add.sprite(x, y, 'droid');
    this.sprite.anchor.setTo(0.5, 0.5);

    this.sprite.inputEnabled = true;
    this.sprite.input.useHandCursor = true;

    this.sprite.events.onInputDown.add(this.onClick, this);

    this.selected = false;
}

Droid.prototype.Update = function(){
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.A))
    {
        this.sprite.x -= 4;
    }
    else if (this.game.input.keyboard.isDown(Phaser.Keyboard.D))
    {
        this.sprite.x += 4;
    }

    if (this.game.input.keyboard.isDown(Phaser.Keyboard.W))
    {
        this.sprite.y -= 4;
    }
    else if (this.game.input.keyboard.isDown(Phaser.Keyboard.S))
    {
        this.sprite.y += 4;
    }
}

Droid.prototype.select = function() {
    this.sprite.loadTexture('droid_selected', 0);
}

Droid.prototype.deselect = function() {
    this.sprite.loadTexture('droid', 0);
}

Droid.prototype.onClick = function(sprite, pointer) {

    this.selected = !this.selected;

    if(this.selected)
    {
        this.select();
    }
    else
    {
        this.deselect();
    }
}