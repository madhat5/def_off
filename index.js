const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const fs = require('fs');

const scrapeRes = [{
    year: 'Number',
    team: 'String',
    recordPct: 'Number (Wins / 17)',
    offeRnk: 'Number',
    defRnk: 'Number',
    playoffs: 'True | False',
    superbowl: 'True | False',
    teamURL: 'String'
}]

const seasonYrs = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019]

// async function ()

async function main() {
    const browser = await puppeteer.launch({
        headless: false
    })
    const page = await browser.newPage();

    // ...
}
main();