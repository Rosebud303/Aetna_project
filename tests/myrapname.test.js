describe("Myrapname.com", () => {

    it("should exist", async () => {
      await page.goto("https://www.myrapname.com");
    })

    it("should have firstname and lastinitial inputs", async () => {
      await page.$eval('//input[@name="firstname"]', el => el.input)
      await page.$eval('//input[@name="lastinitial"]', el => el.input)
    })

    it("have an input for first ", async () => {
      await page.click('//input[@name="firstname"]');
      await page.fill('//input[@name="firstname"]', "ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss")
      await page.click('//input[@name="lastinitial"]');
    })
    
  })