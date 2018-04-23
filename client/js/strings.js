'use strict';
import {lang} from './main';
class Strings {
	constructor() {
		this.strings = {};
		this.strings[1] = {
			"mFound":"Found %1 new packs: what do you wish to do?",
			mainmenu:"main menu",
			mSelect:"Please select",
			mSafeSelect:"Please select, with the right and left arrow keys, how many safeguards you want to buy and press enter.",
			packprice:"This pack costs %1 beatcoins, please confirm",
			mReady: 'Please wait...',
			mDownloadAll: 'Download all uninstalled packs (size: %1 %2)',
			mUnlocked:"Listen to unlocked music for this pack (%1 levels)",
			mSafeguards:"Buy safeguards (now %1)",
			dfiles:"Downloading %1 files. Press any key to obtain percentage",
			packno:"Not enough beatcoins to get this pack, it costs %1.",
			retrieving:"Retrieving data ",
			nodown:"No downloads are available. So sorry! Check back soon",
			mDownloadList: 'List all new available packs (%1)',
			buy:"buy",
			"mBack":"go back",
			safequestion:"How many safeguards would you like? They cost %1 each. You have %2 beatcoins. You can get a maximum of %3. Remember, you can get a maximum of 100. If you want more, run me again.",
			mDownloadInstructions: 'Press arrow keys to browse packs, the space bar to select a pack, p to preview its sound, and enter to begin downloading selected packs. Press escape or the left arrow to cancel',
			mListen:"Ready: %1 levels unlocked. you can go back to the main menu with the left arrow key.",
			mStart: 'Start Game',
			mLearn: 'Learn the pack',
			mActions: 'This pack has %1 actions. Typical keys are space, tab, enter, backspace, and optionally arrows up, down, left, right. If you have mapped your keyboard differently, use your custom keys instead. To hear the stop action, press the period key (to the right of comma). To exit press Q',
			"yes":"Yes",
			"no":"no",
			
			dling: 'Downloading %2 packs please wait...',
			dlprog:"downloading pack %1 of %2...",
			dlingdone: 'Done! Rebuilding database...',
			keymapChoose: 'Press the key to replace this action: You can\'t use q, p, escape, enter or space.',
			packError: 'No packs were found on your computer. I will now proceed to download the default pack, please wait...',
			intro: 'Welcome to beatstar!\nThis is a world of music, fun and games.\nPlease read the online instructions to learn how to play.\nYou will now be put into the main menu, where you will find different options.\nI recommend you get some beatcoins by playing the default pack!',
			keymapStart: 'We will now remap your keyboard. You will hear the sounds for the different actions, and you will be prompted to press the key you want to associate to the new actions.',
			tamperWarning: 'This pack has been tampered with and is no longer unlocked. Press enter to continue.',
			mNew: 'Get new packs',
			nopacks: 'No packs are available. If you think this is a bug, please contact me.',
			noGuardCash:"You need %1 beatcoins to buy one safeguard. You have %2.",
			mBrowse: 'buy new packs (You have %1 beatcoins )',
						mBrowseIncompleted: 'Browse uncompleted packs',
			mBrowseUnlocked:"Change to different unlocked pack",
			"youwin":"You win %1 coins!",
						"youlose":"You lose %1 coins.",
			
			mHashes: 'Rebuild packs folder',
			mDownload: 'Download new packs'
		};
		this.strings[2] = {
			"mFound":"Hemos encontrado %1 packs nuevos: ¿Qué quieres hacer?",
			mReady: 'Espera, por favor...',
			mDownloadAll: 'Descargar todos los packs no instalados (tamaño: %1 %2)',
			nodown:"No hay descargas disponibles por el momento. prueba pronto!",
			mDownloadList: 'Lista todos los packs no instalados (%1 en total)',
			buy:"comprar",
			"mBack":"volver",
			mDownloadInstructions: 'Pulsa las flechas para moverte por los packs, barra espaciadora para seleccionar un pack, la p para previsualizarlo, y enter para empezar la descarga de los seleccionados. pulsa escape o la flecha izquierda para cancelar',
			mStart: 'jugar',
			mLearn: 'aprender el pack',
			mActions: 'Este pack tiene %1 acciones. Las teclas normales son espacio, tabulador, enter, retroceso/borrar, y opcionalmente las flechas. Si has cambiado la distribución del teclado puedes usarla. Para escuchar la acción de quedarse quieto, pulsa la tecla del punto. Para salir pulsa la q.',
			dling: 'Descargando %2 packs por favor espera...',
			dlingdone: '¡Hecho! Reconstruyendo base de datos...',
			keymapChoose: 'Pulsa la tecla que quieras que reemplace a No puedes usar la q, escape, enter o espacio.',
			packError: 'No hemos encontrado packs en tu pc, vamos a bajar el pack por defecto, espera por favor...',
			intro: 'Bienvenido a beat star!\nEste es un mundo de música y diversión!\nPor favor, lee el manual en internet para aprender a jugar.\nAhora te llevaré al menú principal, donde encontrarás diferentes opciones.\nTe recomiendo que consigas unas monedas jugando el pack por defecto!',
			keymapStart: 'Vamos a cambiar la distribución del teclado. Vas a escuchar los sonidos de las acciones y vas a tener que pulsar la tecla que quieres que corresponda para la acción.',
			dlprog:"descargando pack %1 de %2...",
			tamperWarning: 'Este pack ha sido modificado y ya no está desbloqueado. Pulsa enter para continuar.',
			mUnlocked:"Escuchar la música desbloqueada de este pack (%1 niveles)",
			mBrowseIncompleted: 'Ver packs comprados no completados',
			"yes":"sí",
			"youwin":"Ganas %1 monedas!",
			noGuardCash:"No tienes suficientes monedas. Cada antifallo cuesta %1 y tienes %2.",
						"youlose":"Pierdes %1 monedas!",
			"no":"no",
			mNew: 'Conseguir nuevos packs',
			nopacks: 'No hay packs disponibles. Si crees que hay un error en el juego, ponte en contacto conmigo.',
			mBrowse: 'comprar un pack (tienes %1 monedas)',
			mBrowseUnlocked: 'Cambiar a otro pack comprado',
			mHashes: 'Reconstruir base de datos de packs',
			mainmenu:"menú principal",
			mSelect:"Por favor selecciona",
			mSafeSelect:"Por favor selecciona, con las flechas izquierda y derecha, cuántos antifallos quieres y pulsa enter.",
			mSafeguards:"Comprar antifallos (ahora %1)",
			packprice:"Este pack cuesta %1 monedas, confirma que quieres comprarlo.",
			packno:"No tienes monedas suficientes para este pack, cuesta %1.",
			safequestion:"Cuántos antifallos quieres comprar? Cuestan %1 cada una y tienes %2 monedas. Puedes comprar %3. Recuerda que solo puedes comprar 100 de una tirada. Si quieres más, dale otra vez a la opción del menú.",
			mListen:"listo: %1 niveles desbloqueados, flecha izquierda vuelve al menú principal",
			dfiles:"Descargando %1 archivos. Pulsa cualquier tecla para obtener porcentaje",
			retrieving:"Recopilando datos ",
			mDownload: 'Descargar packs'
		};
	
	}

	get(what, rep = []) {
		let str;
		if (typeof this.strings[lang][what] !== 'undefined') {
			str = this.strings[lang][what];
		} else if (typeof this.strings[1][what] !== 'undefined') {
			str = this.strings[1][what];
		} else {
			return 'String error: '+what;
		}
	rep.forEach((v, i) => {
		const i1 = Number(i) + 1;
		str = str.replace('%' + i1, v);
	});
	return str;
	}
}
export var strings = new Strings();
