package com.qa.Utilities;

import com.qa.TestBase.TestBase;

public class Utilities extends TestBase {
	
	public static void switch_to_frame(String frame_name)
	{
		driver.switchTo().frame(frame_name);
	}

}
