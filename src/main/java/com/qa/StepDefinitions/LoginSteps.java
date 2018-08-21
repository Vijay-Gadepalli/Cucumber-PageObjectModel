package com.qa.StepDefinitions;

import com.qa.TestBase.TestBase;
import com.qa.pages.HomePage;
import com.qa.pages.LoginPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginSteps extends TestBase {
	LoginPage loginpage;
	HomePage homepage;
	
	
	@Given("^user opens the browser and launches the app$")
	public void user_opens_the_bowser_and_launches_the_app()
	{
		TestBase.intilization();
	}
	
	@When("^user is on login page$")
	public void user_is_on_login_page()
	{
		loginpage= new LoginPage();
		String tittle =loginpage.validateLoginPageTitle();
		Assert.assertEquals("#1 Free CRM software in the cloud for sales and service", tittle);
	}
	
	@Then("^user enters the valid username and password and clicks on the login button$")
	public void user_enters_the_valid_username_and_password_and_clicks_on_the_login_button() throws Exception
	{
		homepage=loginpage.Login(prop.getProperty("username"), prop.getProperty("password"));
	}
	@Then("^home page should display$")
	public void home_page_should_display() 
	{
	String tittle=	homepage.home_page_tittle();
	Assert.assertEquals("CRMPRO", tittle);
	boolean name_check= homepage.username_label_check();
	Assert.assertTrue(name_check);	
	}
}
