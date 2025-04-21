/* PROBLEM STATEMENT: create a generic method which called for feature flag and if it found then provide value and execute feature based function and if not then send the information and call another method in case of flag not available/found; code should be production ready */

function fetchAllFeatures() {
	return new Promise(resolve => {
		const sampleFeatures = {
			"extended-summary": true,
			"feedback-dialog": false
		};
		setTimeout(resolve, 100, sampleFeatures);
	});
}

// a simple memoized function to add something
const memoizePromiseFn = (fn) => {
	const cache = new Map();
	return (...args) => {
		const key = JSON.stringify(args);
		if (cache.has(key)) {
			console.log('Fetching from cache');
			return cache.get(key)
		}
		cache.set(key, fn(...args)).catch((err) => {
			cache.delete(key); // delete cache in case APi call fails
			return Promise.reject(err);
		})
		return cache.get(key);
	};
};

/* dummy method based on feature flag */
const showExtendedSummary = () => console.log('showExtendedSummary called');
const showBriefSummary = () => console.log('showBriefSummary called');

/* main function  */

const getFeatureState = async (featureName) => {
	let output;
	try {
		const featureData =
			await fetchAllFeatures().catch(e => console.log('catch here', e));
		if (Object.keys(featureData).includes(featureName)) {
			output = {
				found: true,
				name: featureName,
				value: featureData[featureName]
			}
		} else {
			output = {
				found: false,
				name: featureName
			}
		}
		return output;
	} catch (e) {
		throw { message: 'API not working.' };
	}
};

const flagList = ['extended-summary', 'feedback-dialog'];

const findFlagStatus = (list) => {
	//list.map((flag) => getFeatureState(flag));

	getFeatureState('extended-summary').then(response => {
		if (response.found) {
			if (response.value) {
				showExtendedSummary(); // dummy method
			}
			else {
				showBriefSummary();
			}
		} else {
			message = 'requested feature not found';
			console.log({ message })
		}
	}).catch(e => {
		console.log(e);
	})
};


findFlagStatus(flagList)