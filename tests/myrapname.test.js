describe("Myrapname.com", () => {

    it("should exist", async () => {
      await page.goto("https://www.myrapname.com");
    });

    it("shoud only take strings in the input", async () => {
      const numberInput = 112;
      await page.fill('//input[@name="firstname"]', numberInput);
    });

    it("should have firstname and lastinitial inputs", async () => {
      await page.$('//input[@name="firstname"]');
      await page.$('//input[@name="lastinitial"]');
    });

    it("should put values into input fields", async () => {
      await page.focus('//input[@name="firstname"]');
      await page.fill('//input[@name="firstname"]', 'Ben');
      await page.focus('//input[@name="lastinitial"]');
      await page.fill('//input[@name="lastinitial"]', 'Y');
    });

    it("should fill in a name and submit a male name to the page", async () => {
      await page.focus('//input[@name="firstname"]');
      await page.fill('//input[@name="firstname"]', 'Carl');
      await page.focus('//input[@name="lastinitial"]');
      await page.fill('//input[@name="lastinitial"]', 'B');

      const suggestMaleNameButton = await page.$('//input[@name="Male"]');
      suggestMaleNameButton.click();

      await new Promise(r => setTimeout(r, 2000))
      const nickNameElementHandleMale = await page.$('css=td >> td >> td >> div >> h1');
      const nickNameInnerTextMale =  await page.evaluate(el => el.innerText, nickNameElementHandleMale);

      console.log(`This is the Male nickname: "${nickNameInnerTextMale}".`);
    });

    it("should fill in 2 names and submit a female name to the page", async () => {
      await page.focus('//input[@name="firstname"]');
      await page.fill('//input[@name="firstname"]', 'Tess');
      await page.focus('//input[@name="lastinitial"]');
      await page.fill('//input[@name="lastinitial"]', 'Z');
      await page.click('//input[@name="Female"]');
      await new Promise(r => setTimeout(r, 2000));
      
      const nickNameElementHandleFemale = await page.$('css=td >> td >> td >> div >> h1');
      const nickNameInnerTextFemale =  await page.evaluate(el => el.innerText, nickNameElementHandleFemale)

      await page.click('//input[@name="Female"]');
      await new Promise(r => setTimeout(r, 2000));

      const secondNickNameElementHandleFemale = await page.$('css=td >> td >> td >> div >> h1');
      var secondNickNameInnerTextFemale =  await page.evaluate(el => el.innerText, secondNickNameElementHandleFemale)

      console.log(`This is the first Female nickname: "${nickNameInnerTextFemale}" and this is the second Female nickname: "${secondNickNameInnerTextFemale}".`);
    });
    
  });