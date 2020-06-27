module.exports = {
	test(request, response) {
		return response.json({
			helloWorld: "Hello-World",
			BackEnd: "NodeJs-App",
			FrontEnd: "React-App",
		});
	},
};
