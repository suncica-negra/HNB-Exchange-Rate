const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const request = require("request");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(express.static("public"));


app.get("/", function (req, res) {
	res.render("index");
});

app.get("/filter", function (req, res) {
	if (400) {
		res.redirect("/");
	}
});

app.get("/convert", function (req, res) {
	if (400) {
		res.redirect("/");
	}
});

app.post("/convert", function (req, res) {
	var amount = req.body.amount;
	var from = req.body.from;
	var to = req.body.to;

	request("http://hnbex.eu/api/v1/rates/daily/?date=YYYY-MM-DD", function (err, response, body) {
		var data = JSON.parse(body);

		function toTo(code) {
			return code.currency_code === to;
		}

		function toFrom(code) {
			return code.currency_code === from;
		}

		if (from === "HRK") {
			var medianRate = data.find(toTo).median_rate;
			var unitValue = data.find(toTo).unit_value;
			var value = (amount / (medianRate / unitValue)).toFixed(2);

			res.render("convert", {
				amount: amount,
				from: from,
				value: value,
				to: to
			});
		} else if (to === "HRK") {
			var medianRate1 = data.find(toFrom).median_rate;
			var unitValue1 = data.find(toFrom).unit_value;
			var value = (amount * (medianRate1 / unitValue1)).toFixed(2);
			res.render("convert", {
				amount: amount,
				from: from,
				value: value,
				to: to
			});
		} else {
			var medianRate = data.find(toTo).median_rate;
			var unitValue = data.find(toTo).unit_value;

			var medianRate1 = data.find(toFrom).median_rate;
			var unitValue1 = data.find(toFrom).unit_value;

			var value = ((amount * (medianRate1 / unitValue1)) / (medianRate / unitValue)).toFixed(2);

			res.render("convert", {
				amount: amount,
				from: from,
				value: value,
				to: to
			});
		}

	});


});

app.post("/filter", function (req, res) {


	if (req.body.day === "" || req.body.month === "" || req.body.year === "") {

		var date1 = new Date().toLocaleDateString("en", {
			year: "numeric",
			day: "2-digit",
			month: "2-digit"
		});
		var day = date1.slice(3, 5);
		var month = date1.slice(0, 2);
		var year = date1.slice(6, 10);
		var date = day + "." + month + "." + year + ".";

		request("http://hnbex.eu/api/v1/rates/daily/?date=YYYY-MM-DD", function (err, response, body) {
			var data = JSON.parse(body);

			res.render("filter", {
				date: date,
				data: data
			});
		});
	} else {
		var day = req.body.day;
		var month = req.body.month;
		var year = req.body.year;
		var date = day + "." + month + "." + year + ".";

		request("http://hnbex.eu/api/v1/rates/daily/?date=" + year + "-" + month + "-" + day, function (err, response, body) {
			var data = JSON.parse(body);

			res.render("filter", {
				date: date,
				data: data
			});
		});
	}
});


app.listen(3000, function () {
	console.log("Server is running.")
});