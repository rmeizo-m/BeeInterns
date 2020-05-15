const assert = require("assert");
const fetch =require("node-fetch");

let response;
let responseJson;

describe("Restapi test", () => {
    before(async () => {
        response = await fetch(
            "http://dummy.restapiexample.com/api/v1/employees",
            {method: "GET"}
        );
        responseJson = await response.json();
    });
    it("Количество работников равна 24", () => {
        let employeesNumber = responseJson.data.length;
        assert.equal(employeesNumber, 24);
    });
});