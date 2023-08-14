const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			productos: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			getProductos() {
				fetch("https://api.mercadolibre.com/sites/MLV/search?q=telefono&limit=4")
				.then(res => res.json())
				.then(data => {
					setStore({
						productos: data.results
					})
				console.log(data.results)
				})
				.catch(error => {
					console.log(error);
				});
			},

			async getDetailsProduct(id){
				// console.log(id)
				let response = await fetch("https://api.mercadolibre.com/items/" + id)
				let data = await response.json()
				// console.log(data)
				return data
			},

			async getDescriptionProduct(id){
				// console.log(id)
				let response = await fetch("https://api.mercadolibre.com/items/" + id + "/description")
				let data = await response.json()
				// console.log(data)
				return data
			},

			async getCategory(id){
				console.log(id)
				let response = await fetch("https://api.mercadolibre.com/categories/" + id)
				let data = await response.json()
				console.log(data)
				return data
			},

			getBusqueda(busqueda) {
				fetch(`https://api.mercadolibre.com/sites/MLV/search?q=${busqueda}&limit=4`)
				.then(res => res.json())
				.then(data => {
					setStore({
						productos: data.results
					})
				console.log(data.results)
				})
				.catch(error => {
					console.log(error);
				});
			},
		}
	};
};

export default getState;
