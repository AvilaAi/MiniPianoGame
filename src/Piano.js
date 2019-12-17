import React, { useState } from 'react';
import { Button, Box, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';

// audio of each note
let c3 = 'audio/c3.mp3';
let c33 = 'audio/c33.mp3';
let d3 = 'audio/d3.mp3';
let d33 = 'audio/d33.mp3';
let e3 = 'audio/e3.mp3';
let f3 = 'audio/f3.mp3';
let f33 = 'audio/f33.mp3';
let g3 = 'audio/g3.mp3';
let g33 = 'audio/g33.mp3';
let a3 = 'audio/a3.mp3';
let a33 = 'audio/a33.mp3';
let b3 = 'audio/b3.mp3';
let c4 = 'audio/c4.mp3';
let c2 = 'audio/c2.mp3';
let c22 = 'audio/c22.mp3';
let d2 = 'audio/d2.mp3';
let d22 = 'audio/d22.mp3';
let e2 = 'audio/e2.mp3';
let f2 = 'audio/f2.mp3';
let f22 = 'audio/f22.mp3';
let g2 = 'audio/g2.mp3';
let g22 = 'audio/g22.mp3';
let a2 = 'audio/a2.mp3';
let a22 = 'audio/a22.mp3';
let b2 = 'audio/b2.mp3';
let s = 'audio/break.mp3';

const allNotes = [
	{
		type: 'white',
		name: 'C',
		audio: c2,
		key: 'S',
	},
	{
		type: 'black',
		name: 'C#',
		audio: c22,
		key: '1',
	},
	{
		name: 'D',
		type: 'white',
		audio: d2,
		key: 'D',
	},
	{
		type: 'black',
		name: 'D#',
		audio: d22,
		key: '2',
	},
	{
		name: 'E',
		type: 'white',
		audio: e2,
		key: 'F',
	},
	{
		name: 'F',
		type: 'white',
		audio: f2,
		key: 'G',
	},
	{
		name: 'F#',
		audio: f22,
		type: 'black',
		key: '3',
	},
	{
		name: 'G',
		type: 'white',
		audio: g2,
		key: 'H',
	},
	{
		name: 'G#',
		type: 'black',
		audio: g22,
		key: '4',
	},
	{
		name: 'A',
		type: 'white',
		audio: a2,
		key: 'J',
	},
	{
		name: 'A#',
		type: 'black',
		audio: a22,
		key: '5',
	},
	{
		name: 'B',
		type: 'white',
		audio: b2,
		key: 'K',
	},
	{
		name: 'C',
		type: 'white',
		audio: c3,
		key: 'L/E',
	},
	{
		name: 'C#',
		audio: c33,
		type: 'black',
		key: '6',
	},
	{
		name: 'D',
		type: 'white',
		audio: d3,
		key: 'R',
	},
	{
		name: 'D#',
		type: 'black',
		audio: d33,
		key: '7',
	},
	{
		name: 'E',
		type: 'white',
		audio: e3,
		key: 'T',
	},
	{
		name: 'F',
		type: 'white',
		audio: f3,
		key: 'Y',
	},
	{
		name: 'F#',
		audio: f33,
		type: 'black',
		key: '8',
	},
	{
		name: 'G',
		type: 'white',
		audio: g3,
		key: 'U',
	},
	{
		name: 'G#',
		type: 'black',
		audio: g33,
		key: '9',
	},
	{
		name: 'A',
		type: 'white',
		audio: a3,
		key: 'I',
	},

	{
		name: 'A#',
		type: 'black',
		audio: a33,
		key: '0',
	},
	{
		name: 'B',
		type: 'white',
		audio: b3,
		key: 'O',
	},
	{
		name: 'C',
		type: 'white',
		audio: c4,
		key: 'P',
	},
];
// sheet chihiro
const right1 = [e3, f33, g33, e3, b3, s, s, g33, f33, s, b3, s, f33, s, e3, c33, g33, s, s, e3, d33, s, s, s];
const left1 = [s, s, e2, s, g22, s, b2, s, d22, s, b2, s, d33, s, c22, s, g22, s, c33, s, d22, g22, b2, s];
const right2 = [e3, d33, c33, s, d33, s, e3, f33, b2, s, e3, s, f33, g33, a3, s, a3, g33, f33, e3, f33, s, s, s];
const left2 = [s, s, a2, s, g22, s, c33, s, e2, s, g22, s, b2, s, f22, s, a2, s, c33, s, f22, b2, f33, s];
const right3 = [e3, f33, g33, e3, b3, s, s, g33, f33, s, b3, s, f33, s, e3, c33, c33, s, d33, e3, b2, s, s, s, s];
const left3 = [s, s, e2, s, b2, s, e3, s, d22, s, b2, s, d33, s, c22, s, e2, s, g22, s, g22, a2, b2, s, s, s];
const right4 = [b2, c33, s, d33, s, e3, f33, b2, s, e3, s, f33, g33, a3, s, a3, g33, f33, e3, e3, s, s];
const left4 = [s, a2, s, b2, s, g22, s, e2, s, g22, s, b2, s, f22, s, a2, s, c33, s, e2, b2, e3, s];
// sheet twinkle
const star1 = [d3, d3, a3, a3, b3, b3, a3, s, g3, g3, f33, f33, e3, e3, d3, s];
const star2 = [a3, a3, g3, g3, f33, f33, e3, s, a3, a3, g3, g3, f33, f33, e3, s];
const star11 = [d2, a2, f22, a2, g2, a2, f22, a2, e2, b2, a2, b2, g2, b2, f22, a2];
const star22 = [d2, a2, g2, a2, f22, a2, e2, a2, d2, a2, g2, a2, f22, a2, e2, a2, s];
const star3 = [d2, a2, f22, a2, g2, a2, f22, a2, e2, b2, a2, b2, g2, b2, d2, a2, d2, s];

// sheet hp
const harrypotter = [
	a2,
	d3,
	f3,
	e3,
	d3,
	a3,
	g3,
	g3,
	e3,
	e3,
	d3,
	f3,
	e3,
	c33,
	d33,
	a2,
	a2,
	a2,
	a2,
	d3,
	f3,
	e3,
	d3,
	a3,
	c4,
	b3,
	a33,
	f33,
	a33,
	a3,
	g33,
	a2,
	f3,
	d3,
	d3,
	d3,
	s,
];
//tempo hp
const tempo_harrypotter = [
	0,
	400,
	549,
	168,
	380,
	693,
	460,
	589,
	432,
	692,
	398,
	500,
	143,
	387,
	651,
	393,
	712,
	404,
	756,
	381,
	594,
	168,
	380,
	708,
	385,
	687,
	440,
	715,
	403,
	602,
	143,
	438,
	717,
	405,
	715,
	426,
	1000,
];

// keyboard
const keyboard = [83, 49, 68, 50, 70, 71, 51, 72, 52, 74, 53, 75, 69, 54, 82, 55, 84, 89, 56, 85, 57, 73, 48, 79, 80];

// component MyPiano
const MyPiano = props => {
	const [left, setLeft] = useState(null);
	const [right, setRight] = useState(null);
	const [keyColor, setKeyColor] = useState(null);
	const [time, setTime] = useState(null);
	const [tempo, setTempo] = useState([0]);
	const [newSong, setNewSong] = useState([]);
	const [record, setRecord] = useState(false);
	const [showKeyboard, setShowKeyboard] = useState(false);

	const [showTips, setShowTips] = useState({});

	const [popInfo, setPopInfo] = useState(false);
	const [popSave, setPopSave] = useState(false);
	const [savedSong, setSavedSong] = useState(null);
	const [activeButton, setActiveButton] = useState(true);

	var decalage;

	const clickTips = name => {
		if (showTips[name]) {
			setShowTips({ ...showTips, [name]: null });
		} else setShowTips({ [name]: true });
	};
	// play single note
	const playAudio = async (name, event) => {
		if (record) {
			if (time) {
				decalage = event.timeStamp - time;
				setTempo([...tempo, decalage]);
			} else {
			}
			setTime(event.timeStamp);
			setNewSong([...newSong, name]);
		}

		var audio = document.getElementById(name);
		if (audio) {
			audio.currentTime = 0;
			audio.volume = 0.5;

			audio.play();
		}
		setKeyColor({ ...keyColor, [name]: true });
	};

	// 2 hands play
	const playLeft = name => {
		setLeft(name);
		var audio = new Audio(name);
		audio.volume = 0.5;
		audio.play();
	};
	const playRight = name => {
		setRight(name);
		var audio = new Audio(name);
		audio.volume = 0.5;
		audio.play();
	};

	var offset = 0;
	var count = 0;

	// play harry potter
	const playHp = () => {
		playAudio(harrypotter[count]);
		setActiveButton(false);
		if (count < harrypotter.length) {
			setTimeout(() => {
				count++;
				playHp();
			}, tempo_harrypotter[count + 1]);
		} else {
			setActiveButton(true);

			return false;
		}
	};

	// play twinkle
	const playStar = () => {
		for (let i = 0; i < star1.length; i++) {
			setTimeout(() => {
				playLeft(star11[i]);
				playRight(star1[i]);
			}, 300 + offset);
			offset += 300;
		}
		for (let i = 0; i < star2.length; i++) {
			setTimeout(() => {
				playLeft(star22[i]);
				playRight(star2[i]);
			}, 300 + offset);
			offset += 300;
		}
		for (let i = 0; i < star3.length; i++) {
			setTimeout(() => {
				playLeft(star3[i]);
				playRight(star1[i]);
				if (i === star3.length - 1) {
					setActiveButton(true);
				}
			}, 300 + offset);
			offset += 300;
		}
		setActiveButton(false);
	};

	// play chihiro
	const playSong = () => {
		for (let i = 0; i < right1.length; i++) {
			setTimeout(() => {
				playLeft(left1[i]);
				playRight(right1[i]);
			}, 270 + offset);

			offset += 270;
		}

		for (let r = 0; r < right2.length; r++) {
			setTimeout(() => {
				playLeft(left2[r]);
				playRight(right2[r]);
			}, 270 + offset);
			offset += 270;
		}

		for (let r = 0; r < right3.length; r++) {
			setTimeout(() => {
				playLeft(left3[r]);
				playRight(right3[r]);
			}, 270 + offset);
			offset += 270;
		}
		for (let r = 0; r < right3.length; r++) {
			setTimeout(() => {
				playLeft(left4[r]);
				playRight(right4[r]);
				if (r === right4.length - 1) {
					setActiveButton(true);
				}
			}, 270 + offset);
			offset += 270;
		}
		offset = 0;
		setActiveButton(false);
	};

	//record
	const clickRecord = () => {
		if (record) {
			setRecord(false);
			setNewSong([...newSong, s]);
			setTempo([...tempo, 1000]);
		} else {
			setNewSong([]);
			setTempo([0]);
			setRecord(true);
			setTime(null);
		}
	};

	// play recorded song
	const playNewSong = () => {
		for (let i = 0; i < newSong.length; i++) {
			setTimeout(() => {
				playRight(newSong[i]);
				if (i === newSong.length - 1) {
					setActiveButton(true);
				}
			}, tempo[i] + offset);
			offset += tempo[i];
		}
		setActiveButton(false);
	};

	const saveTheSong = () => {
		setSavedSong({ ...savedSong, tempo: tempo, sheet: newSong });
		console.log('savedSong', savedSong);
		setPopSave(false);
	};

	const playSavedSong = () => {
		for (let i = 0; i < savedSong.sheet.length; i++) {
			setTimeout(() => {
				playAudio(savedSong.sheet[i]);
				if (i === savedSong.sheet.length - 1) {
					setActiveButton(true);
				}
			}, savedSong.tempo[i] + offset);
			offset += savedSong.tempo[i];
		}
		setActiveButton(false);
	};
	// function keyboard
	document.onkeydown = e => {
		var keyNum = window.event ? e.keyCode : e.which;
		if (e.repeat || popSave || keyNum === 32) return;
		const index = keyboard.indexOf(keyNum);
		if (keyNum === 76) {
			playAudio(allNotes[12].audio, e);
		}
		if (index !== -1) {
			playAudio(allNotes[index].audio, e);
		}
	};
	const tipsHp = 'JRYTRIUTRYT67JJRYTRIPO080I94YR';
	const tipsRiver = 'J6I9I9ITIR6RT6KJ4JFJK66RTF6R6K';
	const tipsElise = 'T7T7TKREJSFJKF4KLFT7T7TKREJLTIOTPOI';

	return (
		<div className='page'>
			<div className='tips'>
				{showTips.showElise || showTips.showHp || showTips.showRiver ? (
					<h4>Try with your keyboard :</h4>
				) : (
					<></>
				)}
				{showTips.showHp &&
					[...tipsHp].map(p => {
						return <span className='hp'>{p}</span>;
					})}
				{showTips.showRiver &&
					[...tipsRiver].map(p => {
						return <span className='river'>{p}</span>;
					})}
				{showTips.showElise &&
					[...tipsElise].map(p => {
						return <span className='elise'>{p}</span>;
					})}
			</div>

			<div className='head'>
				<div className='groupeBouton'>
					<Button onClick={() => clickTips('showHp')} className={showTips.showHp && 'bouton active'}>
						<>🔎</> Tip 1
					</Button>
					<Button onClick={() => clickTips('showRiver')} className={showTips.showRiver && 'bouton active'}>
						<>🔎</> Tip 2
					</Button>
					<Button onClick={() => clickTips('showElise')} className={showTips.showElise && 'bouton active'}>
						<>🔎</> Tip 3
					</Button>
				</div>
				<div className='groupeBouton'>
					<Button
						className={showKeyboard ? 'bouton showkeyboard active' : 'bouton showkeyboard'}
						onClick={() => setShowKeyboard(!showKeyboard)}
					>
						<>💻</> Show keyboard note
					</Button>
				</div>
				<div className='groupeBouton'>
					<Button id={record ? 'recording' : 'false'} onClick={clickRecord}>
						{record ? '⏹ Stop' : '🔴 Record'}
					</Button>
					<Button
						onClick={() => playNewSong()}
						disabled={!record && activeButton && newSong.length > 0 ? false : true}
					>
						<> ▶️</> Play{' '}
					</Button>
					<Button onClick={() => setPopSave(true)} disabled={!record && newSong.length > 0 ? false : true}>
						<>☑️</> Save
					</Button>
				</div>
			</div>

			{allNotes.map(note => {
				return (
					<audio
						key={note.key}
						onEnded={() => setKeyColor({ ...keyColor, [note.audio]: null })}
						id={note.audio}
						src={note.audio}
					/>
				);
			})}
			<div className='piano'>
				{allNotes.map(note => {
					return (
						<div
							className={
								left === note.audio || right === note.audio || (keyColor && keyColor[note.audio])
									? `key ${note.type} hit`
									: `key ${note.type} `
							}
							onClick={event => playAudio(note.audio, event)}
							key={note.key}
						>
							{showKeyboard ? <p className='keyname'>{note.key}</p> : <p>{note.name}</p>}
						</div>
					);
				})}
			</div>

			<div className='foot'>
				<div className='groupeBouton'>
					<Box className='box'>Demo songs :</Box>

					<Button onClick={() => playSong()} disabled={!activeButton}>
						<>🌸</> Spirited Away{' '}
					</Button>
					<Button onClick={() => playStar()} disabled={!activeButton}>
						<>⭐️</> Twinkle twinkle{' '}
					</Button>
					<Button onClick={() => playHp()} disabled={!activeButton}>
						<>⚡️ </>Harry Potter Hedwig's theme{' '}
					</Button>
				</div>
				<div className='groupeBouton'>
					<Box className='box'>Your song :</Box>

					{savedSong && savedSong.sheet ? (
						<Button onClick={() => playSavedSong()}>
							<>👏🏼</>
							{savedSong.name}
						</Button>
					) : (
						<Button onClick={() => setPopInfo(true)}>
							<> 🙋🏼</> Create your own song
						</Button>
					)}
				</div>
			</div>

			<Dialog open={popInfo} onClose={() => setPopInfo(false)}>
				<DialogTitle>
					{' '}
					<>💡 </> How to create your own song :
				</DialogTitle>
				<DialogContent>
					<h4>1. click -Record- to start recording </h4>
					<h4>2. click -Stop- to finish recording </h4>
					<h4>3. click -Play- to check it</h4>
					<h4>4. click -Save- to name it and save</h4>

					<DialogActions>
						<Button onClick={() => setPopInfo(false)}>
							{' '}
							<> 👌🏼 </>Got it !
						</Button>
					</DialogActions>
				</DialogContent>
			</Dialog>

			<Dialog open={popSave} onClose={() => setPopSave(false)}>
				<DialogTitle>Name your song and save :</DialogTitle>
				<DialogContent>
					<TextField
						fullWidth
						InputLabelProps={{
							shrink: true,
						}}
						id='outlined-basic'
						label='Tape here the name you like'
						variant='outlined'
						onChange={e => setSavedSong({ ...savedSong, name: e.target.value })}
						margin='normal'
					></TextField>
					<DialogActions>
						<Button onClick={saveTheSong}>
							<> 👍🏼 </>Done !
						</Button>
					</DialogActions>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default MyPiano;
