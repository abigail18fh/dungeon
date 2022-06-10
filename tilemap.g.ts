// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000708080808080808080808080808080206090a0c0d090a0c0d090a0c0d090a03060c0d090a0c0d090a0c0d090a0c0d0306090a0c0d090a0c0d090a0c0d090a03060c0d090a0c0d090a0c0d090a0c0d0306090a0c0d090a0c0d090a0c0d090a03060c0d090a0c0d090a0c0d090a0c0d0306090a0c0d090a0c0d090a0c0d090a03060c0d090a0c0d090a0c0d090a0c0d0306090a0c0d090a0c0d090a0c0d090a0b060c0d090a0c0d090a0c0d090a0c0d0306090a0c0d090a0c0d090a0c0d090a03060c0d090a0c0d090a0c0d090a0c0d0306090a0c0d090a0c0d090a0c0d090a03060c0d090a0c0d090a0c0d090a0c0d0305040404040404040404040404040401`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
