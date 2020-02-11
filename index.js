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
	res.render("filter", {
		code1: code1,
		unit_value1: unit_value1,
		selling_rate1: selling_rate1
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

			var code1 = data[0].currency_code;
			var code2 = data[1].currency_code;
			var code3 = data[2].currency_code;
			var code4 = data[3].currency_code;
			var code5 = data[4].currency_code;
			var code6 = data[5].currency_code;
			var code7 = data[6].currency_code;
			var code8 = data[7].currency_code;
			var code9 = data[8].currency_code;
			var code10 = data[9].currency_code;
			var code11 = data[10].currency_code;
			var code12 = data[11].currency_code;
			var code13 = data[12].currency_code;
			var code14 = data[13].currency_code;

			var unit_value1 = data[0].unit_value;
			var unit_value2 = data[1].unit_value;
			var unit_value3 = data[2].unit_value;
			var unit_value4 = data[3].unit_value;
			var unit_value5 = data[4].unit_value;
			var unit_value6 = data[5].unit_value;
			var unit_value7 = data[6].unit_value;
			var unit_value8 = data[7].unit_value;
			var unit_value9 = data[8].unit_value;
			var unit_value10 = data[9].unit_value;
			var unit_value11 = data[10].unit_value;
			var unit_value12 = data[11].unit_value;
			var unit_value13 = data[12].unit_value;
			var unit_value14 = data[13].unit_value;

			var selling_rate1 = data[0].selling_rate;
			var selling_rate2 = data[1].selling_rate;
			var selling_rate3 = data[2].selling_rate;
			var selling_rate4 = data[3].selling_rate;
			var selling_rate5 = data[4].selling_rate;
			var selling_rate6 = data[5].selling_rate;
			var selling_rate7 = data[6].selling_rate;
			var selling_rate8 = data[7].selling_rate;
			var selling_rate9 = data[8].selling_rate;
			var selling_rate10 = data[9].selling_rate;
			var selling_rate11 = data[10].selling_rate;
			var selling_rate12 = data[11].selling_rate;
			var selling_rate13 = data[12].selling_rate;
			var selling_rate14 = data[13].selling_rate;

			res.render("filter", {
				code1: code1,
				code2: code2,
				code3: code3,
				code4: code4,
				code5: code5,
				code6: code6,
				code7: code7,
				code8: code8,
				code9: code9,
				code10: code10,
				code11: code11,
				code12: code12,
				code13: code13,
				code14: code14,
				unit_value1: unit_value1,
				unit_value2: unit_value2,
				unit_value3: unit_value3,
				unit_value4: unit_value4,
				unit_value5: unit_value5,
				unit_value6: unit_value6,
				unit_value7: unit_value7,
				unit_value8: unit_value8,
				unit_value9: unit_value9,
				unit_value10: unit_value10,
				unit_value11: unit_value11,
				unit_value12: unit_value12,
				unit_value13: unit_value13,
				unit_value14: unit_value14,
				selling_rate1: selling_rate1,
				selling_rate2: selling_rate2,
				selling_rate3: selling_rate3,
				selling_rate4: selling_rate4,
				selling_rate5: selling_rate5,
				selling_rate6: selling_rate6,
				selling_rate7: selling_rate7,
				selling_rate8: selling_rate8,
				selling_rate9: selling_rate9,
				selling_rate10: selling_rate10,
				selling_rate11: selling_rate11,
				selling_rate12: selling_rate12,
				selling_rate13: selling_rate13,
				selling_rate14: selling_rate14,
				date: date
			});
		});
	} else {
		var day = req.body.day;
		var month = req.body.month;
		var year = req.body.year;
		var date = day + "." + month + "." + year + ".";

		request("http://hnbex.eu/api/v1/rates/daily/?date=" + year + "-" + month + "-" + day, function (err, response, body) {
			var data = JSON.parse(body);

			var code1 = data[0].currency_code;
			var code2 = data[1].currency_code;
			var code3 = data[2].currency_code;
			var code4 = data[3].currency_code;
			var code5 = data[4].currency_code;
			var code6 = data[5].currency_code;
			var code7 = data[6].currency_code;
			var code8 = data[7].currency_code;
			var code9 = data[8].currency_code;
			var code10 = data[9].currency_code;
			var code11 = data[10].currency_code;
			var code12 = data[11].currency_code;
			var code13 = data[12].currency_code;
			var code14 = data[13].currency_code;

			var unit_value1 = data[0].unit_value;
			var unit_value2 = data[1].unit_value;
			var unit_value3 = data[2].unit_value;
			var unit_value4 = data[3].unit_value;
			var unit_value5 = data[4].unit_value;
			var unit_value6 = data[5].unit_value;
			var unit_value7 = data[6].unit_value;
			var unit_value8 = data[7].unit_value;
			var unit_value9 = data[8].unit_value;
			var unit_value10 = data[9].unit_value;
			var unit_value11 = data[10].unit_value;
			var unit_value12 = data[11].unit_value;
			var unit_value13 = data[12].unit_value;
			var unit_value14 = data[13].unit_value;

			var selling_rate1 = data[0].selling_rate;
			var selling_rate2 = data[1].selling_rate;
			var selling_rate3 = data[2].selling_rate;
			var selling_rate4 = data[3].selling_rate;
			var selling_rate5 = data[4].selling_rate;
			var selling_rate6 = data[5].selling_rate;
			var selling_rate7 = data[6].selling_rate;
			var selling_rate8 = data[7].selling_rate;
			var selling_rate9 = data[8].selling_rate;
			var selling_rate10 = data[9].selling_rate;
			var selling_rate11 = data[10].selling_rate;
			var selling_rate12 = data[11].selling_rate;
			var selling_rate13 = data[12].selling_rate;
			var selling_rate14 = data[13].selling_rate;

			res.render("filter", {
				code1: code1,
				code2: code2,
				code3: code3,
				code4: code4,
				code5: code5,
				code6: code6,
				code7: code7,
				code8: code8,
				code9: code9,
				code10: code10,
				code11: code11,
				code12: code12,
				code13: code13,
				code14: code14,
				unit_value1: unit_value1,
				unit_value2: unit_value2,
				unit_value3: unit_value3,
				unit_value4: unit_value4,
				unit_value5: unit_value5,
				unit_value6: unit_value6,
				unit_value7: unit_value7,
				unit_value8: unit_value8,
				unit_value9: unit_value9,
				unit_value10: unit_value10,
				unit_value11: unit_value11,
				unit_value12: unit_value12,
				unit_value13: unit_value13,
				unit_value14: unit_value14,
				selling_rate1: selling_rate1,
				selling_rate2: selling_rate2,
				selling_rate3: selling_rate3,
				selling_rate4: selling_rate4,
				selling_rate5: selling_rate5,
				selling_rate6: selling_rate6,
				selling_rate7: selling_rate7,
				selling_rate8: selling_rate8,
				selling_rate9: selling_rate9,
				selling_rate10: selling_rate10,
				selling_rate11: selling_rate11,
				selling_rate12: selling_rate12,
				selling_rate13: selling_rate13,
				selling_rate14: selling_rate14,
				date: date
			});
		});
	}
});


app.listen(3000, function () {
	console.log("Server is running.")
});