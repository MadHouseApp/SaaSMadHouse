const { chromium } = require("playwright")

async function scrapeAirbnb(url) {

  console.log("SCRAPER INICIADO")

  const browser = await chromium.launch({
    headless: false,
  })

  console.log("BROWSER ABERTO")

  const page = await browser.newPage()

  console.log("NOVA PAGE")

  await page.goto(url, {
    waitUntil: "networkidle",
    timeout: 60000,
  })

  console.log("URL CARREGADA")

  await page.waitForTimeout(8000)

  const title = await page.locator("h1").first().textContent()

  console.log("TÍTULO:", title)

  await browser.close()

  return {
    title,
  }
}

module.exports = {
  scrapeAirbnb,
}