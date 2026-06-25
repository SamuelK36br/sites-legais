const getSave = localStorage.getItem('pixelart-avatar_save');

const noSave = {
	customs: {
		skin: {
			value: 'fcf6f0',
			i: 0
		},
		beard: {
			value: '',
			i: 0
		},
		clothes: {
			value: 'variant01',
			i: 0
		},
		eyes: {
			value: 'variant01',
			i: 0
		},
		glasses: {
			value: '',
			i: 0
		},
		hair: {
			value: 'long01',
			i: 0
		},
		hat: {
			value: '',
			i: 0
		},
		mouth: {
			value: 'happy03',
			i: 0
		}
	},
	colors: {
		backgroundColor: '000000',
		clothingColor: '0044ff',
		eyesColor: '876658',
		glassesColor: '4b4b4b',
		hairColor: '603015',
		hatColor: 'cc6192',
		mouthColor: 'c98276',
	},
	
	set: function() {
		return localStorage.setItem('pixelart-avatar_save', JSON.stringify(save));
	},
	remove: function() {
		return localStorage.removeItem('pixelart-avatar_save');
	}
}

let save;
if (getSave) {
	save = JSON.parse(getSave);
	save.set = noSave.set;
	save.remove = noSave.remove;
} else { save = noSave };

export default save;