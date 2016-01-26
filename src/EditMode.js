function EditMode(game, layer){
    this.game = game;
    this.enabled = false;
    this.layer = layer;
    this.marker = game.add.graphics();
    this.marker.lineStyle(2, 0x000000, 1);
    this.marker.drawRect(0, 0, 32, 32);
    this.marker.visible=false;
    this.currentTile = -1; // -1 denotes that there isn't a current tile

}

EditMode.prototype.Toggle = function (){
    this.marker.visible = !this.marker.visible;
    this.enabled = !this.enabled;

    if (!this.enabled)
    {
        this.currentTile = -1;
    }
};

EditMode.prototype.SetTile = function (tile){
    this.currentTile = tile;
}

EditMode.prototype.UpdateMarker = function(){
    if (this.enabled) {
        this.marker.x = this.layer.getTileX(this.game.input.activePointer.worldX) * 32;
        this.marker.y = this.layer.getTileY(this.game.input.activePointer.worldY) * 32;
    }
}

EditMode.prototype.PlaceTile = function(map) {
    if(this.enabled){
        map.putTile(this.currentTile, this.marker.x / 32, this.marker.y / 32, this.layer);
    }
}