'use strict';
import fs from 'fs';
import os from 'os';
import {speech} from './tts';
import {credits,addCash,data,actionKeys} from './main';
import {pack, packdir,save} from './main';
import $ from 'jquery';
import {OldTimer} from './oldtimer';
// Var os=require('os');
import {SoundHandler} from './soundHandler';
import {utils} from './utilities';
import {so} from './soundObject';
import {st} from './stateMachine';
import Timer from './timer';
import {ScrollingText} from './scrollingText';
// Var fs=require('fs');
import {KeyboardInput} from './input.js';
import {KeyEvent} from './keycodes.js';

class Game {
	constructor() {
	this.totalScore=[];
	this.totalAverage=[];
	this.cash=0;
	so.directory="./sounds/",
	this.scoreAverage=[];
	this.levelAverage=[];
	this.scoreCounter=so.create("cling");
	so.directory="";
		this.canPause = true;
		
		
		this.actionCompleted = false;
		this.toDestroy = new Array();
		this.scoreTimer = new OldTimer();
		var that = this;
		$(document).on('blur', () => {
		that.pause();
		});
		this.pauseTime = 0;
		this.timer = null;
		this.music = null;
		this.score = 0;
		this.pool = new SoundHandler();
		this.bpms = null;
		this.level = 0;
		this.fileData = null;
		this.input = new KeyboardInput();
		this.input.init();
		this.levels = null;
		var that = this;
		this.setup();
	}

	setup() {
		if (fs.existsSync(packdir + 'bpm.txt')) {
			this.fileData = fs.readFileSync(packdir + 'bpm.txt', 'utf8');
		} else {
			const error = new ScrollingText('There was an error loading the pack ' + this.pack + '.', '\n', (() => {
				st.setState(2);
			}));
		}
		this.bpms = this.fileData.split(',');
		so.directory="./sounds/";
		this.safe=so.create("safe");
		so.directory="";
		this.levels = this.bpms.length - 1;
		if (this.bpms[this.levels] == '') {
			this.levels--;
		}
		this.level++;
		so.directory="./sounds/";
		so.enqueue("safe");
		so.directory = '';
		if (fs.existsSync(packdir + 'nlevel.ogg')) {
so.enqueue(packdir + 'nlevel');
}
if (fs.existsSync(packdir + 'win.ogg')) {so.enqueue(packdir + 'win');
		}
		if (fs.existsSync(packdir + 'fail.ogg')) {
so.enqueue(packdir + 'fail');
		}
		for (let i = 1; i <= 10; i++) {
			if (fs.existsSync(packdir + 'a' + i + '.ogg')) {
		so.enqueue(packdir + 'a' + i);
		this.actions = i;
			}
			if (fs.existsSync(packdir + 'o' + i + '.ogg')) {
		so.enqueue(packdir + 'o' + i);
			}
		}
		this.keys = actionKeys;
		const that = this;
    					this.timer = Timer({update(dt) {
 that.update(dt);
		}, render() {
 that.render();
		}}, this.bpms[this.level] / 1000.0);
    					so.setQueueCallback(() => {
    					so.directory = './sounds/';
    					that.setupLevel();
    					});
    					this.queueLevels();
so.loadQueue();
	}

	update(dt) {
		if (this.currentAction == 0) {
			this.currentAction++;
			return;
		}
		if (!this.actionCompleted && this.action > 1) {
if (data.safeguards<=0) {
this.fail(true);
return;
}
else {
data.safeguards--;
this.currentAction--;
save();
	this.actionCompleted=true;
if (data.safeguards>3) this.safe.pitch=1;
if (data.safeguards<=3) this.safe.pitch=1.5;
  this.safe.play();
  	}
				
		}
		this.currentAction++;
		// Action and level checks go here
		if (this.currentAction >= this.numberOfActions) {
			so.directory = '';
	so.destroy(packdir + this.level + 'music');
		so.destroy(packdir + 'pre' + this.level);
		so.directory = './sounds/';
		
		this.level++;
this.timer.stop();
this.setupLevel();
return;
		}
		this.action = utils.randomInt(1, this.actions);
		this.actionCompleted = false;
		so.directory = '';
	this.pool.playStatic(packdir + 'a' + this.action, 0);
	so.directory = './sounds/';
	//		If (this.action==1) this.actionCompleted=true;//freeze
		this.scoreTimer.reset();
	}
	doScore() {
	addCash(this.cash,0,function() {
	st.setState(2);
	});
	}

	async fail(skipGuards=false) {
	if (data.safeguards>=1 && !skipGuards) {
	data.safeguards--;
	save();
	this.actionCompleted=true;
	this.currentAction--;
if (data.safeguards>3) this.safe.pitch=1;
if (data.safeguards<=3) this.safe.pitch=1.4;
  this.safe.play();
	return;
	}
				this.timer.stop();
		const snd = this.music;
		so.directory = '';
		const failsound = this.pool.playStatic(packdir + 'fail', 0);
		so.directory = './sounds/';
		for (let i = snd.playbackRate; i > 0; i -= 0.05) {
			snd.playbackRate = i;
			await utils.sleep(30);
		}
		snd.unload();
		while (this.pool.staticSounds[failsound].sound.playing) {
			await utils.sleep(10);
			if (this.input.isDown(KeyEvent.DOM_VK_RETURN)) {
				this.pool.staticSounds[failsound].sound.unload();
			}
		}
		so.resetQueue();
so.resetQueuedInstance();
var that=this;
so.kill(() => {
if (fs.existsSync(packdir + 'credits.ogg') && credits) {
//credits=false;
let input=new KeyboardInput();
input.init();
			so.directory = '';
let bootSound = so.create(packdir + 'credits');
bootSound.play();
bootSound.sound.once("end",function() {
input.justPressedEventCallback=null;
that.doScore();
});
			so.directory = './sounds/';
			
input.justPressedEventCallback=function(evt) {
bootSound.sound.off("end");
bootSound.stop();
bootSound.destroy();
input.justPressedEventCallback=null;
that.doScore();
}
		}//if file exists
		else {
		that.doScore();
		}
		
});
	}

	async quit() {
			this.timer.stop();
		const snd = this.music;
		for (let i = snd.playbackRate; i > 0; i -= 0.045) {
			snd.playbackRate = i;
			await utils.sleep(30);
		}
				snd.unload();
				so.resetQueue();
so.resetQueuedInstance();
var that=this;
so.kill(() => {
that.doScore();
});
			}

	render() {
		if (this.input.isJustPressed(KeyEvent.DOM_VK_Q)) {
	this.quit();
	return;
		}
		if (this.input.isJustPressed(KeyEvent.DOM_VK_P)) {
		this.pause();
		return;
		}
				this.handleKeys();
	}

	handleKeys() {
		if (this.actionCompleted) {
			return;
		}
		const keys = this.input.keysPressed();
		if (keys.length > 0 && this.action == 1) {
	this.fail();
	return;
		}
		if (keys.length > 1) {
		this.fail();
		return;
		}
		if (keys.length == 1 && keys[0] == this.keys[this.action]) {
			so.directory = '';
	this.pool.playStatic(packdir + 'o' + this.action, 0);
	so.directory = './sounds/';
	this.actionCompleted = true;
	this.calculateScore();
	return;
		}
		if (keys.length == 1 && keys[0] != this.keys[this.action]) {
						this.fail();
		}
	}
	
	async setupLevel() {
	if (this.level>1) {
	//avg
	this.actionPercentage=Math.ceil(utils.percentOf(this.numberOfActions*this.level,utils.averageInt(this.levelAverage)));
		this.cash+=(utils.averageInt(this.scoreAverage)+utils.averageInt(this.levelAverage)+this.actionPercentage);
			}
	this.scoreAverage=[];
	this.levelAverage=[];
	if (this.level>this.levels) {
				if (fs.existsSync(packdir + 'win.ogg')) {
									so.directory = '';
						
			this.winSound = so.create(packdir + 'win');
			this.winSound.play();
while (this.winSound.playing==true) {
			await utils.sleep(5);
						if (this.input.isJustPressed(KeyEvent.DOM_VK_RETURN)) {
		this.winSound.stop();
			}//key
		}//while
		}//if file exists
		data.unlocks[pack]["win"]=true;
										let that2=this;
				so.resetQueue();
so.resetQueuedInstance();
//get some kind of reward if you win, but only if the pack has enough levels
if (this.levels>9) this.cash+=(this.cash*3);
						so.kill(() => {
				that2.doScore();
});
return;
	}//winning
		this.canPause = true;
		if (data.unlocks[pack]["level"]<this.level) {
		data.unlocks[pack]["level"]=this.level;
				save();
		}
		this.playing = false;
		if (fs.existsSync(packdir + 'pre' + this.level + '.ogg')) {
			so.directory = '';
			this.preSound = so.create(packdir + 'pre' + this.level);
			so.directory = './sounds/';
this.preSound.play();
this.playing = true;
		}
		if (fs.existsSync(packdir + 'nlevel.ogg') && !this.playing && this.level > 1) {
			so.directory = '';
			this.preSound = so.create(packdir + 'nlevel');
			so.directory = './sounds/';
this.preSound.play();
this.playing = true;
		}
		if (this.playing) {
		this.queueLevels();
		while (this.preSound.playing) {
			await utils.sleep(5);
			if (this.input.isJustPressed(KeyEvent.DOM_VK_RETURN)) {
		this.preSound.stop();
			}
		}
		}
		so.directory = '';
		const that = this;
		this.music = so.create(packdir + this.level + 'music',false);
		this.music.loop = true;
		so.directory = './sounds/';
this.music.play();
	this.music.sound.once("play",()=> {
	this.timer.change(that.bpms[that.level] / 1000.0);
	});
	if (!this.playing && this.level > 1) {
									this.queueLevels();
	}
	this.action = 0;
	this.actionCompleted = false;
	this.currentAction = 0;
	if (!this.playing && this.level > 1) {
		this.currentAction++;
	}
	this.numberOfActions = utils.randomInt(6 + this.level, this.level * 2 + 6);
	}

	unload() {
	}

	async pause() {
		if (!this.canPause) {
			return;
		}
		this.canPause = false;
		const snd = this.music;
this.timer.stop();
this.scoreTimer.pause();
this.pauseTime = snd.currentTime;
for (let i = snd.playbackRate; i > 0; i -= 0.05) {
	snd.playbackRate = i;
	await utils.sleep(30);
}
		snd.pause();
		while (!this.input.isDown(KeyEvent.DOM_VK_P)) {
			await utils.sleep(10);
		}
		this.unpause();
	}

	async unpause() {
		const snd = this.music;
snd.play();
for (let i = snd.playbackRate; i <= 1; i += 0.05) {
	snd.playbackRate = i;
	await utils.sleep(8);
}
		snd.seek(this.pauseTime);
		this.timer.start();
		this.scoreTimer.resume();
		this.input.keysPressed(); // We need this so that it doesn't fail immediately after unpause if you switch windows.
	}

	calculateScore() {
		const bpm = this.bpms[this.level];
		const time = this.scoreTimer.elapsed;
		const score = Math.ceil(((bpm / 2) - Math.abs((bpm / 2) - time)) / (bpm / 2) * 100);
				this.scoreCounter.pitch=utils.progressPitch(score,100);
		this.scoreCounter.stop();
		this.scoreCounter.play();
		this.scoreAverage.push(score);
		const mod = Math.ceil((3500 * score) / bpm);
this.score += mod;
this.levelAverage.push(mod);
	}

	queueLevels() {
		let levelLimit = this.level + 1;
		if (this.levels < levelLimit) {
			levelLimit = this.levels;
		}
		so.directory = '';
		for (let i = this.level; i <= levelLimit; i++) {
																so.enqueue(packdir + i + 'music');
																if (fs.existsSync(packdir + 'pre' + i + '.ogg')) {
		so.enqueue(packdir + 'pre' + i);
																}
		}
		if (this.level > 1) {
			so.setQueueCallback(0);
		so.loadQueue();
		so.directory = './sounds/';
		}
	}
}
export {Game};
