package stepDefs;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.response.ResponseBody;
import io.restassured.specification.RequestSpecification;
import org.junit.Assert;

public class MyStepdefs {

    @Given("^User defines base URL$")
    public void userDefinesBaseURL() {
            RestAssured.baseURI = "http://restapi.demoqa.com/utilities/weather/city";
    }

    @When("^User validates status code$")
    public void userValidatesStatusCode() {
        RequestSpecification httpRequest = RestAssured.given();
        Response response = httpRequest.get("/Amsterdam");
        int statusCode = response.getStatusCode();
        Assert.assertEquals(statusCode, 200);
    }

    @And("^User validates headers$")
    public void userValidatesHeaders() {
        RequestSpecification httpRequest = RestAssured.given();
        Response response = httpRequest.get("/Amsterdam");

        String contentType = response.header("Content-Type");
        Assert.assertEquals(contentType, "application/json");

        String serverType =  response.header("Server");
        Assert.assertEquals(serverType, "nginx");

        String contentEncoding = response.header("Content-Encoding");
        Assert.assertEquals(contentEncoding, "gzip");
    }

    @Then("^User validates response body$")
    public void userValidatesResponseBody() {
        RequestSpecification httpRequest = RestAssured.given();
        Response response = httpRequest.get("/Amsterdam");

        ResponseBody body = response.getBody();
        String bodyAsString = body.asString();
        Assert.assertTrue(bodyAsString.contains("Amsterdam"));
    }
}
