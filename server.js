const express = require("express");
const mongo = require("./modules/mongo");
const routes = require("./routes/routes");
const app = express();

app.listen(80, () => {
	console.log("SERVER IS READY AT 80");
});

app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);

async function server() {
	try {
		await mongo();
	} finally {
		app.use("/v1", routes);
	}
}

server();
