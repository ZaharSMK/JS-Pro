class ClientWorld {
  constructor(game, engine, levelCfg) {
    Object.assign(this, {
      game,
      engine,
      levelCfg,
      height: levelCfg.map.length,
      width: levelCfg.map[0].length,
    });
  }

  init() {
    this.engine.renderSpriteFrame({
      sprite: ['terrain', 'grassPosle'],
      frame: 0,
      x: 48,
      y: 0,
      w: 50,
      h: 50,
    });
  }
}

export default ClientWorld;
