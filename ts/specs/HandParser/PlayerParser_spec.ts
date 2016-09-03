import { hands } from './_PlayerParserHands'
import { PlayerParser } from './../../classes/HandParser/PlayerParser'
import { Player } from './../../classes/Player/Player'

describe('PlayerParser', () => {

  describe('when setting properties', () => {
  let hh: PlayerParser;
  let player: Player;
    beforeEach( () => {
      let meta = hands.playersPropertiesSpec.meta.split('\n')
      let seats = hands.playersPropertiesSpec.seats.split('\n')
      let hero = hands.playersPropertiesSpec.hero;
      hh = new PlayerParser({ hh: { meta: meta, seats: seats, hero: hero }})
    });
       
    describe('of Seat 1 Player', () => {     
      beforeEach(function() {
        player = hh.players[0]
      });                
      it('should set isHero', function() {
        expect(player.isHero).toBeDefined();
        expect(player.isHero).toEqual(false)
      });
      it('should set stacksize', function() {
        expect(player.stack).toBeDefined()
        expect(player.stack).toEqual(149.08)
      });
      it('should set name', function() {
        expect(player.name).toBeDefined()
        expect(player.name).toEqual('Phil')
      });      
      it('should set position', function() {
        expect(player.position).toBeDefined()
        expect(player.position).toEqual('BTN')
      });
    });
    describe('of Seat 2 Player', () => {     
      beforeEach(function() {
        player = hh.players[1]
      });        
      it('should set isHero', function() {
        expect(player.isHero).toBeDefined();
        expect(player.isHero).toEqual(false)
      });
      it('should set stacksize', function() {
        expect(player.stack).toBeDefined()
        expect(player.stack).toEqual(117.77)
      });
      it('should set name', function() {
        expect(player.name).toBeDefined()
        expect(player.name).toEqual('marquim1980')
      });
      
      it('should set position', function() {
        expect(player.position).toBeDefined()
        expect(player.position).toEqual('SB')
      });        
    });
    describe('of Seat 3 Player', () => {     
      beforeEach(function() {
        player = hh.players[2]
      });        
      it('should set isHero', function() {
        expect(player.isHero).toBeDefined();
        expect(player.isHero).toEqual(false)
      });
      it('should set stacksize', function() {
        expect(player.stack).toBeDefined()
        expect(player.stack).toEqual(100)
      });
      it('should set name', function() {
        expect(player.name).toBeDefined()
        expect(player.name).toEqual('Yoo4')
      });      
      it('should set position', function() {
        expect(player.position).toBeDefined()
        expect(player.position).toEqual('BB')
      });        
    });
    describe('of Seat 4 Player', () => {     
      beforeEach(function() {
        player = hh.players[3]
      });        
      it('should set isHero', function() {
        expect(player.isHero).toBeDefined();
        expect(player.isHero).toEqual(false)
      });
      it('should set stacksize', function() {
        expect(player.stack).toBeDefined()
        expect(player.stack).toEqual(27.49)
      });
      it('should set name', function() {
        expect(player.name).toBeDefined()
        expect(player.name).toEqual('Teiti14')
      });      
      it('should set position', function() {
        expect(player.position).toBeDefined()
        expect(player.position).toEqual('UTG')
      });        
    });
    describe('of Seat 5 Player', () => {     
      beforeEach(function() {
        player = hh.players[4]
      });        
      it('should set isHero', function() {
        expect(player.isHero).toBeDefined();
        expect(player.isHero).toEqual(false)
      });
      it('should set stacksize', function() {
        expect(player.stack).toBeDefined()
        expect(player.stack).toEqual(107.49)
      });
      it('should set name', function() {
        expect(player.name).toBeDefined()
        expect(player.name).toEqual('MiPwnYa')
      });
      
      it('should set position', function() {
        expect(player.position).toBeDefined()
        expect(player.position).toEqual('MP')
      });        
    });
    describe('of Seat 6 Player', () => {     
      beforeEach(function() {
        player = hh.players[5]
      });        
      it('should set isHero', function() {
        expect(player.isHero).toBeDefined();
        expect(player.isHero).toEqual(true)
      });
      it('should set stacksize', function() {
        expect(player.stack).toBeDefined()
        expect(player.stack).toEqual(246.97)
      });
      it('should set name', function() {
        expect(player.name).toBeDefined()
        expect(player.name).toEqual('reppinR1')
      });
      
      it('should set position', function() {
        expect(player.position).toBeDefined()
        expect(player.position).toEqual('CO')
      });        
    });
      
  });
});
